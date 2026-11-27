# Changed — Bundle Modifications Report (Part 016 / 153)

- **Updated at**: `2026-11-27T18:53 JST`
- **Part**: `16 / 153` (**361** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 015](part-015.md) · [Part 017 →](part-017.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/117.js` (gw4e3a.937868ec → u88b9b.1969c480 · continued)

- **File**: `bundles/bloxd.io/chunks/js/117.js` (2868 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41)

#### 634. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9155` → after: `L9155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9155) · [Before (L9155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9155)

```diff
-         const MM = new Set(["onPlayerJoin", "onPlayerLeave", "doPeriodicSave", "onClose"]), PM = /%|interval|Date\.now|elapsed|timer|every|lastLog|lastSave/i, zM = /snapshot|balance|heartbeat|periodic|autosave/i;
+         const oo = new Set(["onPlayerJoin", "onPlayerLeave", "doPeriodicSave", "onClose"]), Ro = /%|interval|Date\.now|elapsed|timer|every|lastLog|lastSave/i, ko = /snapshot|balance|heartbeat|periodic|autosave/i;
```

#### 635. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9157-L9160` → after: `L9157-L9160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9157-L9160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9157-L9160) · [Before (L9157-L9160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9157-L9160)

```diff
-         function lM(BB, OB, GB) {
-           var YB;
-           const DB = (null !== (YB = null === GB || void 0 === GB ? void 0 : GB.events) && void 0 !== YB ? YB : []).filter((OB => OB.isLiteralType && OB.eventType.toLowerCase() === BB.toLowerCase()));
-           return DB.length > 0 && DB.every((BB => {
+         function qo(ee, ie, He) {
+           var ye;
+           const be = (null !== (ye = null === He || void 0 === He ? void 0 : He.events) && void 0 !== ye ? ye : []).filter((ie => ie.isLiteralType && ie.eventType.toLowerCase() === ee.toLowerCase()));
+           return be.length > 0 && be.every((ee => {
```

#### 636. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9162-L9192` → after: `L9162-L9192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9162-L9192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9162-L9192) · [Before (L9162-L9192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9162-L9192)

```diff
-               where: OB,
-               guard: GB
-             } = BB;
-             const YB = OB.split(" > ")[0];
-             return MM.has(YB) || "tick" === OB && (null === GB || PM.test(GB))
-           })) ? "timed" : zM.test(BB) || zM.test(OB) ? "named" : null
-         }
- 
-         function pM(BB) {
-           return `fires when: ${BB.where}${null===BB.guard?"":` if ${BB.guard}`}`
-         }
- 
-         function qM(BB, OB, GB) {
-           var YB;
-           let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : OB.length;
-           const QB = BB => Math.floor(GB * TJ[BB]),
- ... (15 more removed lines; see GitHub link above)
+               where: ie,
+               guard: He
+             } = ee;
+             const ye = ie.split(" > ")[0];
+             return oo.has(ye) || "tick" === ie && (null === He || Ro.test(He))
+           })) ? "timed" : ko.test(ee) || ko.test(ie) ? "named" : null
+         }
+ 
+         function fo(ee) {
+           return `fires when: ${ee.where}${null===ee.guard?"":` if ${ee.guard}`}`
+         }
+ 
+         function To(ee, ie, He) {
+           var ye;
+           let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ie.length;
+           const Me = ee => Math.floor(He * jJ[ee]),
+ ... (15 more added lines; see GitHub link above)
```

#### 637. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9195-L9202` → after: `L9195-L9202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9195-L9202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9195-L9202) · [Before (L9195-L9202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9195-L9202)

```diff
-             zB = new Set;
-           let lB = !1;
-           const pB = BB => {
-               const OB = JB.has(BB) ? {
-                 eventType: BB,
-                 events: JB.get(BB)
-               } : PB.get(BB.toLowerCase());
-               return void 0 === OB ? lB = !0 : zB.add(OB.eventType), OB
+             ke = new Set;
+           let qe = !1;
+           const fe = ee => {
+               const ie = Je.has(ee) ? {
+                 eventType: ee,
+                 events: Je.get(ee)
+               } : Re.get(ee.toLowerCase());
+               return void 0 === ie ? qe = !0 : ke.add(ie.eventType), ie
```

#### 638. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9204` → after: `L9204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9204) · [Before (L9204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9204)

```diff
-             qB = OB.slice(0, DB).map((BB => {
+             Te = ie.slice(0, be).map((ee => {
```

#### 639. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9206-L9209` → after: `L9206-L9209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9206-L9209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9206-L9209) · [Before (L9206-L9209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9206-L9209)

```diff
-                 eventType: OB
-               } = BB;
-               const GB = pB(OB);
-               return void 0 === GB ? `- ${OB}: not in the current code` : `- ${OB}: ${function(BB){const OB=BB.map(pM),GB=[...new Set(BB.flatMap((BB=>null===BB.numberExpression?[]:[BB.numberExpression])))],YB=[...new Set(BB.flatMap((BB=>null===BB.valueExpression?[]:[BB.valueExpre … [truncated]
+                 eventType: ie
+               } = ee;
+               const He = fe(ie);
+               return void 0 === He ? `- ${ie}: not in the current code` : `- ${ie}: ${function(ee){const ie=ee.map(fo),He=[...new Set(ee.flatMap((ee=>null===ee.numberExpression?[]:[ee.numberExpression])))],ye=[...new Set(ee.flatMap((ee=>null===ee.valueExpression?[]:[ee.valueExpre … [truncated]
```

#### 640. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9212` → after: `L9212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9212) · [Before (L9212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9212)

```diff
-               eventType: UB
+               eventType: We
```

#### 641. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9214-L9231` → after: `L9214-L9231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9214-L9231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9214-L9231) · [Before (L9214-L9231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9214-L9231)

```diff
-             of OB.slice(DB)) pB(UB);
-           qB.length > 0 && oB.push("Events in my data, and where my code sends them:", ...OM(qB, QB("events"), (BB => `- and ${BB} more`)));
-           const ZB = [...JB.keys()].filter((BB => !zB.has(BB) && (!lB || JB.get(BB).some((BB => BB.isLiteralType)))));
-           if (ZB.length > 0) {
-             const BB = `Events my code already sends that my data doesn't show yet, so they are built already: ${ZB.join(", ")}.`;
-             oB.push(BM(BB, QB("codeOnlyEvents")))
-           }
-           if (BB.analyticsHelpers.length > 0 && oB.push(`My code sends events through its own function${1===BB.analyticsHelpers.length?"":"s"} ${BB.analyticsHelpers.join(", ")}.`), oB.push(BB.tracksPlayerPositions ? "My code records where players are, for the heatmaps." : "My cod … [truncated]
-             const OB = `Game callbacks my code defines, with their parameters and what runs them, the largest first: ${BB.callbacks.map((BB=>{const OB=[GM.get(BB.name),BB.chars>0?`${tJ(BB.chars)} characters`:void 0].filter((BB=>void 0!==BB)),GB=oM(BB.name,BB.params);return OB.len … [truncated]
-             oB.push(BM(OB, QB("callbacks")))
-           } else oB.push("My code defines no game callbacks.");
-           const NB = null !== (YB = BB.messages) && void 0 !== YB ? YB : [];
-           let RB = QB("playerText");
-           if (NB.length > 0) {
-             const BB = [`${HJ} players, with where and its current line if known:`, ...OM(vJ(NB), Math.floor(GB * bJ), (BB => `- and ${BB} more`))];
-             oB.push(...BB), RB -= BB.join("\n").length + 1
- ... (2 more removed lines; see GitHub link above)
+             of ie.slice(be)) fe(We);
+           Te.length > 0 && Ke.push("Events in my data, and where my code sends them:", ...io(Te, Me("events"), (ee => `- and ${ee} more`)));
+           const pe = [...Je.keys()].filter((ee => !ke.has(ee) && (!qe || Je.get(ee).some((ee => ee.isLiteralType)))));
+           if (pe.length > 0) {
+             const ee = `Events my code already sends that my data doesn't show yet, so they are built already: ${pe.join(", ")}.`;
+             Ke.push(eo(ee, Me("codeOnlyEvents")))
+           }
+           if (ee.analyticsHelpers.length > 0 && Ke.push(`My code sends events through its own function${1===ee.analyticsHelpers.length?"":"s"} ${ee.analyticsHelpers.join(", ")}.`), Ke.push(ee.tracksPlayerPositions ? "My code records where players are, for the heatmaps." : "My cod … [truncated]
+             const ie = `Game callbacks my code defines, with their parameters and what runs them, the largest first: ${ee.callbacks.map((ee=>{const ie=[Ho.get(ee.name),ee.chars>0?`${QJ(ee.chars)} characters`:void 0].filter((ee=>void 0!==ee)),He=Ko(ee.name,ee.params);return ie.len … [truncated]
+             Ke.push(eo(ie, Me("callbacks")))
+           } else Ke.push("My code defines no game callbacks.");
+           const Xe = null !== (ye = ee.messages) && void 0 !== ye ? ye : [];
+           let ze = Me("playerText");
+           if (Xe.length > 0) {
+             const ee = [`${hJ} players, with where and its current line if known:`, ...io(NJ(Xe), Math.floor(He * sJ), (ee => `- and ${ee} more`))];
+             Ke.push(...ee), ze -= ee.join("\n").length + 1
+ ... (2 more added lines; see GitHub link above)
```

#### 642. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9233-L9235` → after: `L9233-L9235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9233-L9235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9233-L9235) · [Before (L9233-L9235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9233-L9235)

```diff
-                 text: OB
-               } = BB;
-               return OB.toLowerCase()
+                 text: ie
+               } = ee;
+               return ie.toLowerCase()
```

#### 643. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9237-L9247` → after: `L9237-L9247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9237-L9247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9237-L9247) · [Before (L9237-L9247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9237-L9247)

```diff
-             AB = BB.playerText.filter((BB => {
-               const OB = BB.toLowerCase().trim();
-               return !WB.some((BB => BB.includes(OB)))
-             })).map((BB => `- ${JSON.stringify(gJ(BB,CJ))}`)),
-             VB = NB.length > 0 ? "Other text my game shows players:" : "Text my game shows players, the most useful first:";
-           AB.length > 0 && RB > VB.length && oB.push(VB, ...OM(AB, RB, (BB => `- and ${BB} more`)));
-           const SB = 0 === BB.omitted.length ? null : BM(`Left out of this summary of my code: ${BB.omitted.join("; ")}.`, QB("notes")),
-             nB = GB - oB.join("\n").length - 1 - (null === SB ? 0 : SB.length + 1);
-           return oB.push(... function(BB, OB) {
-             let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OB;
-             const YB = BB.map((BB => {
+             Ee = ee.playerText.filter((ee => {
+               const ie = ee.toLowerCase().trim();
+               return !Be.some((ee => ee.includes(ie)))
+             })).map((ee => `- ${JSON.stringify(xJ(ee,IJ))}`)),
+             ge = Xe.length > 0 ? "Other text my game shows players:" : "Text my game shows players, the most useful first:";
+           Ee.length > 0 && ze > ge.length && Ke.push(ge, ...io(Ee, ze, (ee => `- and ${ee} more`)));
+           const Oe = 0 === ee.omitted.length ? null : eo(`Left out of this summary of my code: ${ee.omitted.join("; ")}.`, Me("notes")),
+             de = He - Ke.join("\n").length - 1 - (null === Oe ? 0 : Oe.length + 1);
+           return Ke.push(... function(ee, ie) {
+             let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ie;
+             const ye = ee.map((ee => {
```

#### 644. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9249-L9254` → after: `L9249-L9254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9249-L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9249-L9254) · [Before (L9249-L9254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9249-L9254)

```diff
-                   name: OB,
-                   value: GB,
-                   declaredWith: YB
-                 } = BB;
-                 const DB = ZJ(OB);
-                 return null !== DB ? `${DB.object} { ${DB.key}: ${GB} }` : `${void 0===YB?"":`${YB} `}${OB} = ${GB}`
+                   name: ie,
+                   value: He,
+                   declaredWith: ye
+                 } = ee;
+                 const be = pJ(ie);
+                 return null !== be ? `${be.object} { ${be.key}: ${He} }` : `${void 0===ye?"":`${ye} `}${ie} = ${He}`
```

#### 645. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9256-L9261` → after: `L9256-L9261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9256-L9261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9256-L9261) · [Before (L9256-L9261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9256-L9261)

```diff
-               DB = BB.map((BB => void 0 === BB.usedIn ? null : Uy(BB.name, BB.usedIn, BB.value))),
-               QB = OB => null !== DB[OB] ? 2 : Number(sJ.test(BB[OB].usedIn)),
-               oB = BB.map(((BB, OB) => ({
-                 index: OB,
-                 usedIn: BB.usedIn
-               }))).filter((BB => {
+               be = ee.map((ee => void 0 === ee.usedIn ? null : WF(ee.name, ee.usedIn, ee.value))),
+               Me = ie => null !== be[ie] ? 2 : Number(GJ.test(ee[ie].usedIn)),
+               Ke = ee.map(((ee, ie) => ({
+                 index: ie,
+                 usedIn: ee.usedIn
+               }))).filter((ee => {
```

#### 646. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9263-L9269` → after: `L9263-L9269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9263-L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9263-L9269) · [Before (L9263-L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9263-L9269)

```diff
-                   usedIn: OB
-                 } = BB;
-                 return void 0 !== OB
-               })).sort(((BB, OB) => QB(BB.index) - QB(OB.index) || OB.index - BB.index)),
-               jB = "Constants my code is tuned by, each with the first code that reads it, which shows what a bigger or smaller number does:";
-             for (let JB = 0; JB < oB.length; JB++) {
-               const GB = new Set(oB.slice(0, JB).map((BB => {
+                   usedIn: ie
+                 } = ee;
+                 return void 0 !== ie
+               })).sort(((ee, ie) => Me(ee.index) - Me(ie.index) || ie.index - ee.index)),
+               Ue = "Constants my code is tuned by, each with the first code that reads it, which shows what a bigger or smaller number does:";
+             for (let Je = 0; Je < Ke.length; Je++) {
+               const He = new Set(Ke.slice(0, Je).map((ee => {
```

#### 647. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9271-L9273` → after: `L9271-L9273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9271-L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9271-L9273) · [Before (L9271-L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9271-L9273)

```diff
-                     index: OB
-                   } = BB;
-                   return OB
+                     index: ie
+                   } = ee;
+                   return ie
```

#### 648. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9275-L9278` → after: `L9275-L9278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9275-L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9275-L9278) · [Before (L9275-L9278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9275-L9278)

```diff
-                 QB = BB.map(((BB, OB) => {
-                   if (void 0 === BB.usedIn || GB.has(OB)) return `- ${YB[OB]}`;
-                   const QB = DB[OB];
-                   return null === QB ? `- ${YB[OB]}, used in: ${BB.usedIn}` : `- ${YB[OB]}, used in: ${BB.usedIn.replace(/;$/,"")}. So ${QB}`
+                 Me = ee.map(((ee, ie) => {
+                   if (void 0 === ee.usedIn || He.has(ie)) return `- ${ye[ie]}`;
+                   const Me = be[ie];
+                   return null === Me ? `- ${ye[ie]}, used in: ${ee.usedIn}` : `- ${ye[ie]}, used in: ${ee.usedIn.replace(/;$/,"")}. So ${Me}`
```

#### 649. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9280` → after: `L9280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9280) · [Before (L9280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9280)

```diff
-               if ([jB, ...QB].join("\n").length <= OB) return [jB, ...QB]
+               if ([Ue, ...Me].join("\n").length <= ie) return [Ue, ...Me]
```

#### 650. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9282-L9306` → after: `L9282-L9306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9282-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9282-L9306) · [Before (L9282-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9282-L9306)

```diff
-             const yB = OM(YB, Math.min(OB, GB) - 40, (BB => `and ${BB} more`));
-             return 0 === yB.length ? [] : [`Constants my code is tuned by: ${NM(yB).join("; ")}.`]
-           }(BB.constants, Math.max(QB("constants"), Math.min(nB, Math.floor(GB * xJ))), QB("constants"))), null !== SB && oB.push(SB), oB
-         }
-         const ZM = /^(.+?) \{ (.*) \}$/;
- 
-         function NM(BB) {
-           const OB = [];
-           let GB = null;
-           for (const DB of BB) {
-             var YB;
-             const BB = ZM.exec(DB);
-             null === BB || (null === (YB = GB) || void 0 === YB ? void 0 : YB.object) !== BB[1] ? (GB = null === BB ? null : {
-               object: BB[1],
-               properties: [BB[2]]
-             }, OB.push(DB)) : (GB.properties.push(BB[2]), OB[OB.length - 1] = `${GB.object} { ${GB.properties.join(", ")} }`)
- ... (9 more removed lines; see GitHub link above)
+             const Fe = io(ye, Math.min(ie, He) - 40, (ee => `and ${ee} more`));
+             return 0 === Fe.length ? [] : [`Constants my code is tuned by: ${Xo(Fe).join("; ")}.`]
+           }(ee.constants, Math.max(Me("constants"), Math.min(de, Math.floor(He * rJ))), Me("constants"))), null !== Oe && Ke.push(Oe), Ke
+         }
+         const po = /^(.+?) \{ (.*) \}$/;
+ 
+         function Xo(ee) {
+           const ie = [];
+           let He = null;
+           for (const be of ee) {
+             var ye;
+             const ee = po.exec(be);
+             null === ee || (null === (ye = He) || void 0 === ye ? void 0 : ye.object) !== ee[1] ? (He = null === ee ? null : {
+               object: ee[1],
+               properties: [ee[2]]
+             }, ie.push(be)) : (He.properties.push(ee[2]), ie[ie.length - 1] = `${He.object} { ${He.properties.join(", ")} }`)
+ ... (9 more added lines; see GitHub link above)
```

#### 651. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9308-L9313` → after: `L9308-L9313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9308-L9313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9308-L9313) · [Before (L9308-L9313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9308-L9313)

```diff
-                 eventType: OB,
-                 values: GB
-               } = BB;
-               const YB = (null !== GB && void 0 !== GB ? GB : []).filter((BB => "" !== BB)),
-                 DB = YB.slice(0, WM).join(", ");
-               return 0 === YB.length ? OB : `${OB} (${DB}${YB.length>WM?", \u2026":""})`
+                 eventType: ie,
+                 values: He
+               } = ee;
+               const ye = (null !== He && void 0 !== He ? He : []).filter((ee => "" !== ee)),
+                 be = ye.slice(0, Bo).join(", ");
+               return 0 === ye.length ? ie : `${ie} (${be}${ye.length>Bo?", \u2026":""})`
```

#### 652. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9315` → after: `L9315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9315) · [Before (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9315)

```diff
-             jB = new Set(OB.map((BB => {
+             Ue = new Set(ie.map((ee => {
```

#### 653. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9317-L9319` → after: `L9317-L9319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9317-L9319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9317-L9319) · [Before (L9317-L9319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9317-L9319)

```diff
-                 eventType: OB
-               } = BB;
-               return OB.toLowerCase()
+                 eventType: ie
+               } = ee;
+               return ie.toLowerCase()
```

#### 654. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9321-L9327` → after: `L9321-L9327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9321-L9327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9321-L9327) · [Before (L9321-L9327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9321-L9327)

```diff
-             yB = (null !== (GB = null === BB || void 0 === BB ? void 0 : BB.events) && void 0 !== GB ? GB : []).filter((BB => BB.isLiteralType && !jB.has(BB.eventType.toLowerCase()))).map((BB => BB.eventType)),
-             JB = [...oB, ...new Set(yB)].slice(0, RM + 2);
-           JB.length > 0 && QB.push(`- Logs these custom events: ${JB.join(", ")}.`);
-           const MB = function(BB) {
-             var OB, GB;
-             if (null === BB || void 0 === BB) return null;
-             const YB = (null !== (OB = BB.calls) && void 0 !== OB ? OB : []).flatMap((BB => {
+             Fe = (null !== (He = null === ee || void 0 === ee ? void 0 : ee.events) && void 0 !== He ? He : []).filter((ee => ee.isLiteralType && !Ue.has(ee.eventType.toLowerCase()))).map((ee => ee.eventType)),
+             Je = [...Ke, ...new Set(Fe)].slice(0, zo + 2);
+           Je.length > 0 && Me.push(`- Logs these custom events: ${Je.join(", ")}.`);
+           const oe = function(ee) {
+             var ie, He;
+             if (null === ee || void 0 === ee) return null;
+             const ye = (null !== (ie = ee.calls) && void 0 !== ie ? ie : []).flatMap((ee => {
```

#### 655. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9329-L9333` → after: `L9329-L9333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9329-L9333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9329-L9333) · [Before (L9329-L9333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9329-L9333)

```diff
-                   name: OB,
-                   strings: GB,
-                   where: YB
-                 } = BB;
-                 return "onPlayerJoin" !== dy(YB) || void 0 === GB[0] ? [] : "giveItem" === OB ? [GB[0]] : "applyEffect" === OB ? [`the ${GB[0]} effect`] : []
+                   name: ie,
+                   strings: He,
+                   where: ye
+                 } = ee;
+                 return "onPlayerJoin" !== wF(ye) || void 0 === He[0] ? [] : "giveItem" === ie ? [He[0]] : "applyEffect" === ie ? [`the ${He[0]} effect`] : []
```

#### 656. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9335` → after: `L9335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9335) · [Before (L9335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9335)

```diff
-               DB = (null !== (GB = BB.messages) && void 0 !== GB ? GB : []).filter((BB => {
+               be = (null !== (He = ee.messages) && void 0 !== He ? He : []).filter((ee => {
```

#### 657. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9337-L9340` → after: `L9337-L9340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9337-L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9337-L9340) · [Before (L9337-L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9337-L9340)

```diff
-                   where: OB
-                 } = BB;
-                 return "onPlayerJoin" === dy(OB)
-               })).slice(0, OJ).map((BB => {
+                   where: ie
+                 } = ee;
+                 return "onPlayerJoin" === wF(ie)
+               })).slice(0, iJ).map((ee => {
```

#### 658. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9342-L9344` → after: `L9342-L9344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9342-L9344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9342-L9344) · [Before (L9342-L9344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9342-L9344)

```diff
-                   text: OB
-                 } = BB;
-                 return JSON.stringify(OB.length > GJ ? `${OB.slice(0,GJ-1).trimEnd()}\u2026` : OB)
+                   text: ie
+                 } = ee;
+                 return JSON.stringify(ie.length > HJ ? `${ie.slice(0,HJ-1).trimEnd()}\u2026` : ie)
```

#### 659. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9346-L9352` → after: `L9346-L9352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9346-L9352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9346-L9352) · [Before (L9346-L9352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9346-L9352)

```diff
-               QB = [...new Set(YB)].slice(0, BJ),
-               oB = [...0 === QB.length ? [] : [`gives ${YJ(QB)}`], ...0 === DB.length ? [] : [`says ${YJ(DB)}`]];
-             return 0 === oB.length ? null : oB.join(", and ")
-           }(BB);
-           if (null !== MB && QB.push(`- When a player joins (onPlayerJoin), my code already ${MB}.`), null !== BB && 0 === (null !== (YB = null === (DB = BB.messages) || void 0 === DB ? void 0 : DB.length) && void 0 !== YB ? YB : 0)) {
-             const OB = BB.playerText.slice(0, AM).map((BB => JSON.stringify(gJ(BB, VM))));
-             OB.length > 0 && QB.push(`- Already shows players messages like ${OB.join(", ")}: an idea can change one, rather than add it again.`)
+               Me = [...new Set(ye)].slice(0, eJ),
+               Ke = [...0 === Me.length ? [] : [`gives ${yJ(Me)}`], ...0 === be.length ? [] : [`says ${yJ(be)}`]];
+             return 0 === Ke.length ? null : Ke.join(", and ")
+           }(ee);
+           if (null !== oe && Me.push(`- When a player joins (onPlayerJoin), my code already ${oe}.`), null !== ee && 0 === (null !== (ye = null === (be = ee.messages) || void 0 === be ? void 0 : be.length) && void 0 !== ye ? ye : 0)) {
+             const ie = ee.playerText.slice(0, Eo).map((ee => JSON.stringify(xJ(ee, go))));
+             ie.length > 0 && Me.push(`- Already shows players messages like ${ie.join(", ")}: an idea can change one, rather than add it again.`)
```

#### 660. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9354` → after: `L9354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9354) · [Before (L9354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9354)

```diff
-           return QB
+           return Me
```

#### 661. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9356` → after: `L9356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9356) · [Before (L9356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9356)

```diff
-         const nM = [{
+         const Wo = [{
```

#### 662. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9381` → after: `L9381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9381) · [Before (L9381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9381)

```diff
-         }], UM = "Next change";
+         }], to = "Next change";
```

#### 663. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9383-L9384` → after: `L9383-L9384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9383-L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9383-L9384) · [Before (L9383-L9384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9383-L9384)

```diff
-         function fM(BB) {
-           return /^((your|the|one|my) )?next change\b/.test(iM(BB))
+         function Zo(ee) {
+           return /^((your|the|one|my) )?next change\b/.test(co(ee))
```

#### 664. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9387-L9389` → after: `L9387-L9389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9387-L9389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9387-L9389) · [Before (L9387-L9389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9387-L9389)

```diff
-         function kM(BB, OB) {
-           const GB = nM.find((OB => OB.key === BB));
-           return OB ? GB.gentleHeading : GB.heading
+         function wo(ee, ie) {
+           const He = Wo.find((ie => ie.key === ee));
+           return ie ? He.gentleHeading : He.heading
```

#### 665. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9392-L9393` → after: `L9392-L9393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9392-L9393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9392-L9393) · [Before (L9392-L9393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9392-L9393)

```diff
-         function dM(BB, OB) {
-           const GB = BB.sections.filter((BB => "trackNext" !== BB.key)),
+         function Do(ee, ie) {
+           const He = ee.sections.filter((ee => "trackNext" !== ee.key)),
```

#### 666. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9395-L9399` → after: `L9395-L9399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9395-L9399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9395-L9399) · [Before (L9395-L9399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9395-L9399)

```diff
-               texts: YB,
-               isChanged: DB
-             } = OB([BB.summary, ...GB.map((BB => BB.markdown))]);
-           if (!DB) return BB;
-           const [QB, ...oB] = YB;
+               texts: ye,
+               isChanged: be
+             } = ie([ee.summary, ...He.map((ee => ee.markdown))]);
+           if (!be) return ee;
+           const [Me, ...Ke] = ye;
```

#### 667. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9401-L9406` → after: `L9401-L9406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9401-L9406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9401-L9406) · [Before (L9401-L9406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9401-L9406)

```diff
-             summary: QB,
-             sections: BB.sections.map((BB => {
-               const OB = GB.indexOf(BB);
-               return -1 === OB ? BB : {
-                 ...BB,
-                 markdown: oB[OB]
+             summary: Me,
+             sections: ee.sections.map((ee => {
+               const ie = He.indexOf(ee);
+               return -1 === ie ? ee : {
+                 ...ee,
+                 markdown: Ke[ie]
```

#### 668. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9411` → after: `L9411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9411) · [Before (L9411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9411)

```diff
-         const KM = 3;
+         const Po = 3;
```

#### 669. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9413-L9418` → after: `L9413-L9418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9413-L9418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9413-L9418) · [Before (L9413-L9418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9413-L9418)

```diff
-         function uM(BB) {
-           const OB = BB.trimEnd(),
-             GB = /^ {0,3}(#{1,6})(?:\s+(.*))?$/.exec(OB);
-           var YB;
-           if (null !== GB) return {
-             text: mM(null !== (YB = GB[2]) && void 0 !== YB ? YB : ""),
+         function Ao(ee) {
+           const ie = ee.trimEnd(),
+             He = /^ {0,3}(#{1,6})(?:\s+(.*))?$/.exec(ie);
+           var ye;
+           if (null !== He) return {
+             text: Yo(null !== (ye = He[2]) && void 0 !== ye ? ye : ""),
```

#### 670. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9420` → after: `L9420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9420) · [Before (L9420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9420)

```diff
-             style: GB[1]
+             style: He[1]
```

#### 671. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9422-L9424` → after: `L9422-L9424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9422-L9424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9422-L9424) · [Before (L9422-L9424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9422-L9424)

```diff
-           const DB = /^\s*(\*\*|__)(.+?)\1(?:\s*:)?$/.exec(OB);
-           return null !== DB && (DB[2].trim().split(/\s+/).length <= KM || LM.has(iM(DB[2]))) ? {
-             text: DB[2],
+           const be = /^\s*(\*\*|__)(.+?)\1(?:\s*:)?$/.exec(ie);
+           return null !== be && (be[2].trim().split(/\s+/).length <= Po || xo.has(co(be[2]))) ? {
+             text: be[2],
```

#### 672. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9430-L9433` → after: `L9430-L9433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9430-L9433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9430-L9433) · [Before (L9430-L9433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9430-L9433)

```diff
-         function mM(BB) {
-           let OB = BB.length;
-           for (; OB > 0 && "#" === BB[OB - 1];) OB--;
-           return OB === BB.length || OB > 0 && !/\s/.test(BB[OB - 1]) ? BB : BB.slice(0, OB).trimEnd()
+         function Yo(ee) {
+           let ie = ee.length;
+           for (; ie > 0 && "#" === ee[ie - 1];) ie--;
+           return ie === ee.length || ie > 0 && !/\s/.test(ee[ie - 1]) ? ee : ee.slice(0, ie).trimEnd()
```

#### 673. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9435` → after: `L9435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9435) · [Before (L9435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9435)

```diff
-         const IM = /^(\s*)```/;
+         const Vo = /^(\s*)```/;
```

#### 674. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9437-L9439` → after: `L9437-L9439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9437-L9439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9437-L9439) · [Before (L9437-L9439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9437-L9439)

```diff
-         function FM(BB, OB, GB) {
-           for (let YB = OB + 1; YB < GB; YB++)
-             if (IM.test(BB[YB])) return /^\s*```\s*$/.test(BB[YB]);
+         function ao(ee, ie, He) {
+           for (let ye = ie + 1; ye < He; ye++)
+             if (Vo.test(ee[ye])) return /^\s*```\s*$/.test(ee[ye]);
```

#### 675. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9443-L9444` → after: `L9443-L9444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9443-L9444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9443-L9444) · [Before (L9443-L9444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9443-L9444)

```diff
-         function iM(BB) {
-           return BB.toLowerCase().replace(/[*_`:]/g, "").replace(/[^\p{L}\p{N}' ]+/gu, " ").replace(/\s+/g, " ").trim()
+         function co(ee) {
+           return ee.toLowerCase().replace(/[*_`:]/g, "").replace(/[^\p{L}\p{N}' ]+/gu, " ").replace(/\s+/g, " ").trim()
```

#### 676. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9446` → after: `L9446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9446) · [Before (L9446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9446)

```diff
-         const LM = new Set(nM.flatMap((BB => [BB.heading.toLowerCase(), BB.gentleHeading.toLowerCase()])));
+         const xo = new Set(Wo.flatMap((ee => [ee.heading.toLowerCase(), ee.gentleHeading.toLowerCase()])));
```

#### 677. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9448-L9451` → after: `L9448-L9451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9448-L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9448-L9451) · [Before (L9448-L9451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9448-L9451)

```diff
-         function gM(BB) {
-           var OB, GB;
-           const YB = iM(BB);
-           return null !== (OB = null === (GB = nM.find((BB => BB.matches.test(YB)))) || void 0 === GB ? void 0 : GB.key) && void 0 !== OB ? OB : null
+         function Lo(ee) {
+           var ie, He;
+           const ye = co(ee);
+           return null !== (ie = null === (He = Wo.find((ee => ee.matches.test(ye)))) || void 0 === He ? void 0 : He.key) && void 0 !== ie ? ie : null
```

#### 678. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9453` → after: `L9453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9453) · [Before (L9453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9453)

```diff
-         const rM = "\0", XM = /^\s*([-*+]|\d+[.)])\s/;
+         const Co = "\0", vo = /^\s*([-*+]|\d+[.)])\s/;
```

#### 679. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9455-L9461` → after: `L9455-L9461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9455-L9461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9455-L9461) · [Before (L9455-L9461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9455-L9461)

```diff
-         function wM(BB) {
-           return BB.flatMap(((OB, GB) => {
-             var YB;
-             if (OB !== rM) return [OB];
-             const DB = null !== (YB = BB[GB - 1]) && void 0 !== YB ? YB : "",
-               QB = BB.slice(GB + 1).find((BB => BB !== rM && "" !== BB.trim()));
-             return void 0 === QB || XM.test(QB) || "" === DB.trim() || DB === rM ? [] : [""]
+         function uo(ee) {
+           return ee.flatMap(((ie, He) => {
+             var ye;
+             if (ie !== Co) return [ie];
+             const be = null !== (ye = ee[He - 1]) && void 0 !== ye ? ye : "",
+               Me = ee.slice(He + 1).find((ee => ee !== Co && "" !== ee.trim()));
+             return void 0 === Me || vo.test(Me) || "" === be.trim() || be === Co ? [] : [""]
```

#### 680. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9465-L9487` → after: `L9465-L9487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9465-L9487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9465-L9487) · [Before (L9465-L9487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9465-L9487)

```diff
-         function EM(BB) {
-           const OB = [],
-             GB = new Map,
-             YB = new Set;
-           let DB = null,
-             QB = null,
-             oB = !1;
-           const jB = BB.split(/\r?\n/);
-           for (const [MB, PB] of jB.entries()) {
-             IM.test(PB) && (oB = !oB && FM(jB, MB, jB.length));
-             const BB = oB ? null : uM(PB),
-               zB = null !== BB && (null === QB || BB.style === QB || LM.has(iM(BB.text))),
-               lB = null !== BB && zB ? gM(BB.text) : null;
-             var yB;
-             if (null !== BB && fM(BB.text)) DB = null !== (yB = GB.get("fixFirst")) && void 0 !== yB ? yB : [], GB.set("fixFirst", DB), DB.push(PB);
-             else if (null !== lB) {
- ... (7 more removed lines; see GitHub link above)
+         function mo(ee) {
+           const ie = [],
+             He = new Map,
+             ye = new Set;
+           let be = null,
+             Me = null,
+             Ke = !1;
+           const Ue = ee.split(/\r?\n/);
+           for (const [oe, Re] of Ue.entries()) {
+             Vo.test(Re) && (Ke = !Ke && ao(Ue, oe, Ue.length));
+             const ee = Ke ? null : Ao(Re),
+               ke = null !== ee && (null === Me || ee.style === Me || xo.has(co(ee.text))),
+               qe = null !== ee && ke ? Lo(ee.text) : null;
+             var Fe;
+             if (null !== ee && Zo(ee.text)) be = null !== (Fe = He.get("fixFirst")) && void 0 !== Fe ? Fe : [], He.set("fixFirst", be), be.push(Re);
+             else if (null !== qe) {
+ ... (7 more added lines; see GitHub link above)
```

#### 681. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9489-L9495` → after: `L9489-L9495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9489-L9495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9489-L9495) · [Before (L9489-L9495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9489-L9495)

```diff
-                 key: OB
-               } = BB;
-               const DB = GB.get(OB);
-               return void 0 === DB ? [] : [{
-                 key: OB,
-                 heading: kM(OB, YB.has(OB)),
-                 markdown: wM(DB).trim()
+                 key: ie
+               } = ee;
+               const be = He.get(ie);
+               return void 0 === be ? [] : [{
+                 key: ie,
+                 heading: wo(ie, ye.has(ie)),
+                 markdown: uo(be).trim()
```

#### 682. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9500` → after: `L9500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9500) · [Before (L9500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9500)

```diff
-         const cM = bD, hM = 864e5, aM = 7, eM = 6e4, TM = "-", bM = .05, CM = 1.95;
+         const So = hb, no = 864e5, jo = 7, so = 6e4, Io = "-", ho = .05, No = 1.95;
```

#### 683. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9502-L9504` → after: `L9502-L9504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9502-L9504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9502-L9504) · [Before (L9502-L9504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9502-L9504)

```diff
-         function HM(BB) {
-           let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-           return Math.abs(BB - 1) < bM ? "same" : (OB ? BB > 1 : BB < 1) ? "better" : "worse"
+         function Go(ee) {
+           let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+           return Math.abs(ee - 1) < ho ? "same" : (ie ? ee > 1 : ee < 1) ? "better" : "worse"
```

#### 684. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9507-L9511` → after: `L9507-L9511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9507-L9511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9507-L9511) · [Before (L9507-L9511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9507-L9511)

```diff
-         function vM(BB) {
-           let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-           return null !== BB && void 0 !== BB && Number.isFinite(BB) ? Number(BB.toFixed(OB)).toLocaleString("en-US", {
-             maximumFractionDigits: OB
-           }) : TM
+         function ro(ee) {
+           let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+           return null !== ee && void 0 !== ee && Number.isFinite(ee) ? Number(ee.toFixed(ie)).toLocaleString("en-US", {
+             maximumFractionDigits: ie
+           }) : Io
```

#### 685. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9514-L9515` → after: `L9514-L9515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9514-L9515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9514-L9515) · [Before (L9514-L9515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9514-L9515)

```diff
-         function sM(BB) {
-           return null === BB || void 0 === BB ? TM : vM(BB / eM, 1)
+         function Qo(ee) {
+           return null === ee || void 0 === ee ? Io : ro(ee / so, 1)
```

#### 686. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9518-L9520` → after: `L9518-L9520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9518-L9520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9518-L9520) · [Before (L9518-L9520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9518-L9520)

```diff
-         function xM(BB) {
-           let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-           return null !== BB && void 0 !== BB && Number.isFinite(BB) ? `${vM(BB,OB)}%` : TM
+         function eR(ee) {
+           let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+           return null !== ee && void 0 !== ee && Number.isFinite(ee) ? `${ro(ee,ie)}%` : Io
```

#### 687. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9523-L9526` → after: `L9523-L9526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9523-L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9523-L9526) · [Before (L9523-L9526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9523-L9526)

```diff
-         function tM(BB, OB) {
-           if (null === BB || null === OB || 0 === OB) return TM;
-           const GB = Math.round((BB - OB) / OB * 100);
-           return `${GB>0?"+":""}${GB}%`
+         function iR(ee, ie) {
+           if (null === ee || null === ie || 0 === ie) return Io;
+           const He = Math.round((ee - ie) / ie * 100);
+           return `${He>0?"+":""}${He}%`
```

#### 688. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9528` → after: `L9528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9528) · [Before (L9528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9528)

```diff
-         const BP = {
+         const HR = {
```

#### 689. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9553-L9561` → after: `L9553-L9561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9553-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9553-L9561) · [Before (L9553-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9553-L9561)

```diff
-         function OP(BB, OB) {
-           let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BP.plain;
-           if (null === BB || void 0 === BB || null === OB || void 0 === OB || 0 === OB) return TM;
-           const YB = BB / OB;
-           if ("same" === HM(YB)) return "about the same";
-           const DB = void 0 === GB.note ? "" : ` (${GB.note})`;
-           if (YB >= CM) return `better, ${vM(YB,YB<10?1:0)} times the median${DB}`;
-           const QB = Math.round(100 * Math.abs(YB - 1));
-           return YB > 1 ? `better, ${QB}% ${GB.more}${DB}` : `worse, ${QB}% ${GB.less}${DB}`
+         function yR(ee, ie) {
+           let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HR.plain;
+           if (null === ee || void 0 === ee || null === ie || void 0 === ie || 0 === ie) return Io;
+           const ye = ee / ie;
+           if ("same" === Go(ye)) return "about the same";
+           const be = void 0 === He.note ? "" : ` (${He.note})`;
+           if (ye >= No) return `better, ${ro(ye,ye<10?1:0)} times the median${be}`;
+           const Me = Math.round(100 * Math.abs(ye - 1));
+           return ye > 1 ? `better, ${Me}% ${He.more}${be}` : `worse, ${Me}% ${He.less}${be}`
```

#### 690. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9564-L9566` → after: `L9564-L9566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9564-L9566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9564-L9566) · [Before (L9564-L9566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9564-L9566)

```diff
-         function GP(BB) {
-           const OB = Math.round(BB);
-           return 50 === OB ? ", half" : OB >= 33 && OB < 50 ? ", under half" : ""
+         function bR(ee) {
+           const ie = Math.round(ee);
+           return 50 === ie ? ", half" : ie >= 33 && ie < 50 ? ", under half" : ""
```

#### 691. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9569-L9572` → after: `L9569-L9572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9569-L9572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9569-L9572) · [Before (L9569-L9572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9569-L9572)

```diff
-         function YP(BB, OB) {
-           if (null === BB || void 0 === BB || null === OB || void 0 === OB || 100 === OB) return TM;
-           const GB = HM((100 - BB) / (100 - OB), !1);
-           return "same" === GB ? "about the same" : GB
+         function MR(ee, ie) {
+           if (null === ee || void 0 === ee || null === ie || void 0 === ie || 100 === ie) return Io;
+           const He = Go((100 - ee) / (100 - ie), !1);
+           return "same" === He ? "about the same" : He
```

#### 692. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9575-L9576` → after: `L9575-L9576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9575-L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9575-L9576) · [Before (L9575-L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9575-L9576)

```diff
-         function DP(BB, OB) {
-           return OB === TM ? `median custom game: ${BB}` : `median custom game: ${BB}; this game is ${OB}`
+         function KR(ee, ie) {
+           return ie === Io ? `median custom game: ${ee}` : `median custom game: ${ee}; this game is ${ie}`
```

#### 693. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9579-L9582` → after: `L9579-L9582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9579-L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9579-L9582) · [Before (L9579-L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9579-L9582)

```diff
-         function QP(BB) {
-           var OB;
-           let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "or";
-           return BB.length <= 1 ? null !== (OB = BB[0]) && void 0 !== OB ? OB : "" : `${BB.slice(0,-1).join(", ")} ${GB} ${BB[BB.length-1]}`
+         function UR(ee) {
+           var ie;
+           let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "or";
+           return ee.length <= 1 ? null !== (ie = ee[0]) && void 0 !== ie ? ie : "" : `${ee.slice(0,-1).join(", ")} ${He} ${ee[ee.length-1]}`
```

#### 694. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9585-L9586` → after: `L9585-L9586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9585-L9586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9585-L9586) · [Before (L9585-L9586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9585-L9586)

```diff
-         function oP(BB, OB) {
-           return OB ? `(${BB})` : `[[${BB}]]`
+         function FR(ee, ie) {
+           return ie ? `(${ee})` : `[[${ee}]]`
```

#### 695. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9589-L9590` → after: `L9589-L9590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9589-L9590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9589-L9590) · [Before (L9589-L9590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9589-L9590)

```diff
-         function jP(BB) {
-           return 1 === BB ? "day" : `${BB} days`
+         function JR(ee) {
+           return 1 === ee ? "day" : `${ee} days`
```

#### 696. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9593-L9594` → after: `L9593-L9594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9593-L9594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9593-L9594) · [Before (L9593-L9594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9593-L9594)

```diff
-         function yP(BB) {
-           return new Date(BB).toISOString().slice(0, 10)
+         function oR(ee) {
+           return new Date(ee).toISOString().slice(0, 10)
```

#### 697. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9597-L9598` → after: `L9597-L9598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9597-L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9597-L9598) · [Before (L9597-L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9597-L9598)

```diff
-         function JP(BB) {
-           return "" === BB ? "(none)" : BB
+         function RR(ee) {
+           return "" === ee ? "(none)" : ee
```

#### 698. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9601-L9602` → after: `L9601-L9602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9601-L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9601-L9602) · [Before (L9601-L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9601-L9602)

```diff
-         function MP(BB, OB) {
-           return "" === OB ? BB : `${BB}: ${OB}`
+         function kR(ee, ie) {
+           return "" === ie ? ee : `${ee}: ${ie}`
```

#### 699. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9605-L9607` → after: `L9605-L9607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9605-L9607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9605-L9607) · [Before (L9605-L9607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9605-L9607)

```diff
-         function PP(BB, OB) {
-           const GB = BB => `| ${BB.map((BB=>BB.replace(/\|/g,"\\|").replace(/[\r\n]+/g," "))).join(" | ")} |`;
-           return [GB(BB), GB(BB.map((() => "---"))), ...OB.map(GB)].join("\n")
+         function qR(ee, ie) {
+           const He = ee => `| ${ee.map((ee=>ee.replace(/\|/g,"\\|").replace(/[\r\n]+/g," "))).join(" | ")} |`;
+           return [He(ee), He(ee.map((() => "---"))), ...ie.map(He)].join("\n")
```

#### 700. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9609` → after: `L9609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9609) · [Before (L9609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9609)

```diff
-         const zP = [{
+         const fR = [{
```

#### 701. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9618` → after: `L9618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9618) · [Before (L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9618)

```diff
-         }], lP = {
+         }], TR = {
```

#### 702. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9622` → after: `L9622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9622) · [Before (L9622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9622)

```diff
-         }, pP = {
+         }, pR = {
```

#### 703. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9628-L9629` → after: `L9628-L9629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9628-L9629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9628-L9629) · [Before (L9628-L9629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9628-L9629)

```diff
-         function qP(BB, OB) {
-           return (OB ? pP : lP)[BB]
+         function XR(ee, ie) {
+           return (ie ? pR : TR)[ee]
```

#### 704. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9631` → after: `L9631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9631) · [Before (L9631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9631)

```diff
-         const ZP = cM, NP = 2, RP = {
+         const zR = So, BR = 2, ER = {
```

#### 705. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9637-L9638` → after: `L9637-L9638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9637-L9638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9637-L9638) · [Before (L9637-L9638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9637-L9638)

```diff
-         function WP(BB, OB) {
-           return 100 === OB ? null : RP[HM((100 - BB) / (100 - OB), !1)]
+         function gR(ee, ie) {
+           return 100 === ie ? null : ER[Go((100 - ee) / (100 - ie), !1)]
```

#### 706. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9641-L9645` → after: `L9641-L9645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9641-L9645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9641-L9645) · [Before (L9641-L9645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9641-L9645)

```diff
-         function AP(BB) {
-           if (BB >= 100) return "all";
-           if (BB >= 99.5) return "almost all";
-           const OB = Math.round(BB / 10);
-           return 0 === OB ? "under 1 in 10" : `${Math.min(OB,9)} in 10`
+         function OR(ee) {
+           if (ee >= 100) return "all";
+           if (ee >= 99.5) return "almost all";
+           const ie = Math.round(ee / 10);
+           return 0 === ie ? "under 1 in 10" : `${Math.min(ie,9)} in 10`
```

#### 707. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9648-L9651` → after: `L9648-L9651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9648-L9651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9648-L9651) · [Before (L9648-L9651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9648-L9651)

```diff
-         function VP(BB, OB, GB) {
-           const YB = {
-             value: AP(BB),
-             median: AP(OB)
+         function dR(ee, ie, He) {
+           const ye = {
+             value: OR(ee),
+             median: OR(ie)
```

#### 708. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9653-L9677` → after: `L9653-L9677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9653-L9677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9653-L9677) · [Before (L9653-L9677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9653-L9677)

```diff
-           return YB.value === YB.median === ("okay" === GB) ? YB : {
-             value: `${Math.round(BB)}%`,
-             median: `${Math.round(OB)}%`
-           }
-         }
-         const SP = "Typical Bloxd game";
- 
-         function nP(BB) {
-           var OB, GB, YB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB;
-           const pB = null !== (OB = null === (GB = BB.stats) || void 0 === GB ? void 0 : GB.sessionDurationHistogram) && void 0 !== OB ? OB : null,
-             qB = null === pB ? null : (0, ZO.V)(pB.sessionCounts, pB.maxBucketMinute),
-             ZB = null === qB ? null : (0, ZO.j)(qB),
-             NB = null !== (YB = null === (DB = BB.baseline) || void 0 === DB ? void 0 : DB.dropoffCurve) && void 0 !== YB ? YB : null,
-             RB = null === NB ? null : RG(NB),
-             WB = null !== (QB = null === ZB || void 0 === ZB ? void 0 : ZB.percentStayedSessions) && void 0 !== QB ? QB : null,
-             AB = null !== (oB = null === RB || void 0 === RB ? void 0 : RB.percentStayedSessions.p50) && void 0 !== oB ? oB : null,
- ... (9 more removed lines; see GitHub link above)
+           return ye.value === ye.median === ("okay" === He) ? ye : {
+             value: `${Math.round(ee)}%`,
+             median: `${Math.round(ie)}%`
+           }
+         }
+         const WR = "Typical Bloxd game";
+ 
+         function tR(ee) {
+           var ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe;
+           const fe = null !== (ie = null === (He = ee.stats) || void 0 === He ? void 0 : He.sessionDurationHistogram) && void 0 !== ie ? ie : null,
+             Te = null === fe ? null : (0, Xi.Q)(fe.sessionCounts, fe.maxBucketMinute),
+             pe = null === Te ? null : (0, Xi.k)(Te),
+             Xe = null !== (ye = null === (be = ee.baseline) || void 0 === be ? void 0 : be.dropoffCurve) && void 0 !== ye ? ye : null,
+             ze = null === Xe ? null : EH(Xe),
+             Be = null !== (Me = null === pe || void 0 === pe ? void 0 : pe.percentStayedSessions) && void 0 !== Me ? Me : null,
+             Ee = null !== (Ke = null === ze || void 0 === ze ? void 0 : ze.percentStayedSessions.p50) && void 0 !== Ke ? Ke : null,
+ ... (9 more added lines; see GitHub link above)
```

#### 709. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9679-L9681` → after: `L9679-L9681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9679-L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9679-L9681) · [Before (L9679-L9681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9679-L9681)

```diff
-                 verdict: BB,
-                 reason: `${(0,wQ.e)(OB.value)} still playing after ${ZO.k} min`,
-                 typical: OB.median,
+                 verdict: ee,
+                 reason: `${(0,mM.b)(ie.value)} still playing after ${Xi.l} min`,
+                 typical: ie.median,
```

#### 710. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9686-L9693` → after: `L9686-L9693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9686-L9693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9686-L9693) · [Before (L9686-L9693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9686-L9693)

```diff
-           if (null !== WB && null !== VB && null !== AB && null !== SB && WB > 0 && AB > 0) {
-             const OB = VB / WB * 100,
-               GB = SB / AB * 100,
-               YB = (null === WB ? 0 : nB * WB / 100) >= ZP ? WP(OB, GB) : null;
-             if (null !== YB) {
-               var fB, kB;
-               const DB = VP(OB, GB, YB);
-               UB.push({
+           if (null !== Be && null !== ge && null !== Ee && null !== Oe && Be > 0 && Ee > 0) {
+             const ie = ge / Be * 100,
+               He = Oe / Ee * 100,
+               ye = (null === Be ? 0 : de * Be / 100) >= zR ? gR(ie, He) : null;
+             if (null !== ye) {
+               var te, Ze;
+               const be = dR(ie, He, ye);
+               We.push({
```

#### 711. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9695-L9698` → after: `L9695-L9698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9695-L9698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9695-L9698) · [Before (L9695-L9698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9695-L9698)

```diff
-                 verdict: YB,
-                 reason: `${(0,wQ.e)(DB.value)} who passed ${ZO.k} min reached ${ZO.i} min`,
-                 typical: DB.median,
-                 statKeys: (null !== (fB = null === (kB = BB.flow) || void 0 === kB ? void 0 : kB.edges.length) && void 0 !== fB ? fB : 0) > 0 ? ["playersStillPlaying", "eventFlow"] : ["playersStillPlaying"]
+                 verdict: ye,
+                 reason: `${(0,mM.b)(be.value)} who passed ${Xi.l} min reached ${Xi.h} min`,
+                 typical: be.median,
+                 statKeys: (null !== (te = null === (Ze = ee.flow) || void 0 === Ze ? void 0 : Ze.edges.length) && void 0 !== te ? te : 0) > 0 ? ["playersStillPlaying", "eventFlow"] : ["playersStillPlaying"]
```

#### 712. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9702-L9710` → after: `L9702-L9710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9702-L9710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9702-L9710) · [Before (L9702-L9710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9702-L9710)

```diff
-           const dB = null === BB.stats ? null : (0, ZO.Q)(BB.stats.rankingWindow).sessionsPerPlayer,
-             KB = null !== (MB = null === (PB = BB.baseline) || void 0 === PB ? void 0 : PB.rankingWindow.sessionsPerPlayer.p50) && void 0 !== MB ? MB : null;
-           if (null !== dB && null !== KB && (null !== (zB = null === (lB = BB.stats) || void 0 === lB ? void 0 : lB.rankingWindow.uniquePlayers) && void 0 !== zB ? zB : 0) >= ZP) {
-             const BB = function(BB, OB) {
-               return 0 === OB ? null : RP[HM(BB / OB)]
-             }(dB, KB);
-             if (null !== BB) {
-               const OB = function(BB, OB, GB) {
-                 const YB = BB.toFixed(1) === OB.toFixed(1) === ("okay" === GB) ? 1 : 2;
+           const we = null === ee.stats ? null : (0, Xi.J)(ee.stats.rankingWindow).sessionsPerPlayer,
+             De = null !== (oe = null === (Re = ee.baseline) || void 0 === Re ? void 0 : Re.rankingWindow.sessionsPerPlayer.p50) && void 0 !== oe ? oe : null;
+           if (null !== we && null !== De && (null !== (ke = null === (qe = ee.stats) || void 0 === qe ? void 0 : qe.rankingWindow.uniquePlayers) && void 0 !== ke ? ke : 0) >= zR) {
+             const ee = function(ee, ie) {
+               return 0 === ie ? null : ER[Go(ee / ie)]
+             }(we, De);
+             if (null !== ee) {
+               const ie = function(ee, ie, He) {
+                 const ye = ee.toFixed(1) === ie.toFixed(1) === ("okay" === He) ? 1 : 2;
```

#### 713. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9712-L9713` → after: `L9712-L9713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9712-L9713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9712-L9713) · [Before (L9712-L9713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9712-L9713)

```diff
-                   value: String(Number(BB.toFixed(YB))),
-                   median: String(Number(OB.toFixed(YB)))
+                   value: String(Number(ee.toFixed(ye))),
+                   median: String(Number(ie.toFixed(ye)))
```

#### 714. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9715-L9716` → after: `L9715-L9716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9715-L9716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9715-L9716) · [Before (L9715-L9716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9715-L9716)

```diff
-               }(dB, KB, BB);
-               UB.push({
+               }(we, De, ee);
+               We.push({
```

#### 715. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9718-L9720` → after: `L9718-L9720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9718-L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9718-L9720) · [Before (L9718-L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9718-L9720)

```diff
-                 verdict: BB,
-                 reason: `Each player played ${OB.value} ${"1"===OB.value?"time":"times"}`,
-                 typical: OB.median,
+                 verdict: ee,
+                 reason: `Each player played ${ie.value} ${"1"===ie.value?"time":"times"}`,
+                 typical: ie.median,
```

#### 716. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9725` → after: `L9725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9725) · [Before (L9725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9725)

```diff
-           return UB.length < NP ? [] : UB
+           return We.length < BR ? [] : We
```

#### 717. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9728-L9729` → after: `L9728-L9729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9728-L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9728-L9729) · [Before (L9728-L9729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9728-L9729)

```diff
-         function UP(BB) {
-           return zP.find((OB => OB.key === BB)).name
+         function ZR(ee) {
+           return fR.find((ie => ie.key === ee)).name
```

#### 718. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9731` → after: `L9731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9731) · [Before (L9731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9731)

```diff
-         const fP = {
+         const wR = {
```

#### 719. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9748` → after: `L9748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9748) · [Before (L9748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9748)

```diff
-         }, kP = {
+         }, DR = {
```

#### 720. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9761` → after: `L9761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9761) · [Before (L9761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9761)

```diff
-         }, dP = [...Object.keys(fP), ...Object.keys(kP)].join("|"), KP = "`?(-?\\d[\\d,]*(?:\\.\\d+)?)`?", uP = "(\\s?%|\\s*[a-z]+)?", mP = `(?:(?!\\b(?:${dP})\\b|\\.\\s|[!?;\\n]).)`, IP = new RegExp(`\\b(${dP})\\b(${mP}{0,79}?(?![\\w.-]\`?-?\\d[\\d,]*(?:\\.\\d+)?\`?(?:\\s?%|\\s* … [truncated]
+         }, PR = [...Object.keys(wR), ...Object.keys(DR)].join("|"), AR = "`?(-?\\d[\\d,]*(?:\\.\\d+)?)`?", YR = "(\\s?%|\\s*[a-z]+)?", VR = `(?:(?!\\b(?:${PR})\\b|\\.\\s|[!?;\\n]).)`, aR = new RegExp(`\\b(${PR})\\b(${VR}{0,79}?(?![\\w.-]\`?-?\\d[\\d,]*(?:\\.\\d+)?\`?(?:\\s?%|\\s* … [truncated]
```

#### 721. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9850-L9852` → after: `L9850-L9852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9850-L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9850-L9852) · [Before (L9850-L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9850-L9852)

```diff
-         function rP(BB) {
-           const OB = (null !== BB && void 0 !== BB ? BB : "").trim().toLowerCase();
-           return gP.get(OB)
+         function vR(ee) {
+           const ie = (null !== ee && void 0 !== ee ? ee : "").trim().toLowerCase();
+           return CR.get(ie)
```

#### 722. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9855-L9861` → after: `L9855-L9861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9855-L9861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9855-L9861) · [Before (L9855-L9861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9855-L9861)

```diff
-         function XP(BB, OB, GB, YB) {
-           const DB = rP(OB),
-             QB = rP(YB),
-             oB = BB => void 0 !== BB && !/^\s/.test(BB) && void 0 === rP(BB);
-           if (oB(OB) || oB(YB) || void 0 !== DB && void 0 === QB) return null;
-           if (void 0 === DB || void 0 === QB) {
-             return "%" === (null === QB || void 0 === QB ? void 0 : QB.unit) && 0 !== BB && Math.abs(BB) < 1 ? null : [BB, GB]
+         function uR(ee, ie, He, ye) {
+           const be = vR(ie),
+             Me = vR(ye),
+             Ke = ee => void 0 !== ee && !/^\s/.test(ee) && void 0 === vR(ee);
+           if (Ke(ie) || Ke(ye) || void 0 !== be && void 0 === Me) return null;
+           if (void 0 === be || void 0 === Me) {
+             return "%" === (null === Me || void 0 === Me ? void 0 : Me.unit) && 0 !== ee && Math.abs(ee) < 1 ? null : [ee, He]
```

#### 723. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9863` → after: `L9863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9863) · [Before (L9863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9863)

```diff
-           return DB.unit !== QB.unit ? null : void 0 === DB.seconds || void 0 === QB.seconds || DB.seconds === QB.seconds ? [BB, GB] : [BB * DB.seconds, GB * QB.seconds]
+           return be.unit !== Me.unit ? null : void 0 === be.seconds || void 0 === Me.seconds || be.seconds === Me.seconds ? [ee, He] : [ee * be.seconds, He * Me.seconds]
```

#### 724. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9866-L9867` → after: `L9866-L9867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9866-L9867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9866-L9867) · [Before (L9866-L9867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9866-L9867)

```diff
-         function wP(BB) {
-           return void 0 !== rP(BB)
+         function mR(ee) {
+           return void 0 !== vR(ee)
```

#### 725. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9870-L9872` → after: `L9870-L9872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9870-L9872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9870-L9872) · [Before (L9870-L9872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9870-L9872)

```diff
-         function EP(BB, OB) {
-           const GB = OB[0];
-           return GB === GB.toUpperCase() ? BB[0].toUpperCase() + BB.slice(1) : BB
+         function lR(ee, ie) {
+           const He = ie[0];
+           return He === He.toUpperCase() ? ee[0].toUpperCase() + ee.slice(1) : ee
```

#### 726. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9875-L9877` → after: `L9875-L9877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9875-L9877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9875-L9877) · [Before (L9875-L9877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9875-L9877)

```diff
-         function cP(BB, OB) {
-           const GB = BB.toLowerCase();
-           return Object.hasOwn(fP, GB) ? OB ? EP(fP[GB], BB) : BB : Object.hasOwn(kP, GB) ? OB ? BB : EP(kP[GB], BB) : null
+         function SR(ee, ie) {
+           const He = ee.toLowerCase();
+           return Object.hasOwn(wR, He) ? ie ? lR(wR[He], ee) : ee : Object.hasOwn(DR, He) ? ie ? ee : lR(DR[He], ee) : null
```

#### 727. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9879` → after: `L9879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9879) · [Before (L9879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9879)

```diff
-         const hP = "[*_`]*([-\u2212]?\\d(?:[\\d_]|,(?=\\d))*(?:\\.\\d+)?)[*_`]*", aP = "(\\s?%|\\s*[a-z]+)?", eP = new RegExp(`^((?:(?![.!?;\\n]\\s|[.!?;\\n]$)[^\\d\\n]){0,60}?)(?:\\bfrom\\s+${hP}${aP}\\s+to\\s+|${hP}${aP}\\s*(?:\u2192|->)\\s*)${hP}${aP}`, "i"), TP = new RegExp(` … [truncated]
+         const nR = "[*_`]*([-\u2212]?\\d(?:[\\d_]|,(?=\\d))*(?:\\.\\d+)?)[*_`]*", jR = "(\\s?%|\\s*[a-z]+)?", sR = new RegExp(`^((?:(?![.!?;\\n]\\s|[.!?;\\n]$)[^\\d\\n]){0,60}?)(?:\\bfrom\\s+${nR}${jR}\\s+to\\s+|${nR}${jR}\\s*(?:\u2192|->)\\s*)${nR}${jR}`, "i"), IR = new RegExp(` … [truncated]
```

#### 728. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9881-L9882` → after: `L9881-L9882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9881-L9882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9881-L9882) · [Before (L9881-L9882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9881-L9882)

```diff
-         function HP(BB) {
-           return (0, EQ.f)(BB, /(?:[A-Z][A-Z0-9]*_[A-Z0-9_]+|[a-z]+[A-Z]\w*)(?![\w$])/, (0, EQ.n)("\\w$")).length > 0
+         function GR(ee) {
+           return (0, lM.g)(ee, /(?:[A-Z][A-Z0-9]*_[A-Z0-9_]+|[a-z]+[A-Z]\w*)(?![\w$])/, (0, lM.m)("\\w$")).length > 0
```

#### 729. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9884` → after: `L9884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9884) · [Before (L9884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9884)

```diff
-         const vP = /\b(?:players?|sessions?|people|plays?|times|percent)\b/i, sP = /percent|pct|chance|rate|prob/i, xP = 2e3;
+         const rR = /\b(?:players?|sessions?|people|plays?|times|percent)\b/i, QR = /percent|pct|chance|rate|prob/i, ek = 2e3;
```

#### 730. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9886-L9888` → after: `L9886-L9888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9886-L9888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9886-L9888) · [Before (L9886-L9888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9886-L9888)

```diff
-         function tP(BB) {
-           const OB = Number(BB.replace(/\u2212/g, "-").replace(/[,_]/g, ""));
-           return Number.isFinite(OB) ? OB : null
+         function ik(ee) {
+           const ie = Number(ee.replace(/\u2212/g, "-").replace(/[,_]/g, ""));
+           return Number.isFinite(ie) ? ie : null
```

#### 731. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9891-L9902` → after: `L9891-L9902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9891-L9902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9891-L9902) · [Before (L9891-L9902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9891-L9902)

```diff
-         function Bz(BB) {
-           if (null === BB || void 0 === BB) return null;
-           const OB = new Map,
-             GB = NJ(BB.constants);
-           for (const YB of BB.constants) {
-             const BB = void 0 === YB.usedIn ? null : ny(YB.name, YB.usedIn, YB.value);
-             if (null === BB || null === BB.bigger) continue;
-             const DB = WJ(YB.value),
-               QB = {
-                 name: YB.name,
-                 effect: BB,
-                 value: DB
+         function Hk(ee) {
+           if (null === ee || void 0 === ee) return null;
+           const ie = new Map,
+             He = XJ(ee.constants);
+           for (const ye of ee.constants) {
+             const ee = void 0 === ye.usedIn ? null : dF(ye.name, ye.usedIn, ye.value);
+             if (null === ee || null === ee.bigger) continue;
+             const be = BJ(ye.value),
+               Me = {
+                 name: ye.name,
+                 effect: ee,
+                 value: be
```

#### 732. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9904-L9960` → after: `L9904-L9960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9904-L9960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9904-L9960) · [Before (L9904-L9960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9904-L9960)

```diff
-             OB.set(YB.name, QB);
-             const oB = RJ(YB.name, GB);
-             null === oB || OB.has(oB) || OB.set(oB, QB)
-           }
-           return OB
-         }
- 
-         function Oz(BB, OB, GB, YB) {
-           return null === OB || null === GB || OB === GB ? null : {
-             end: YB,
-             note: GB > OB ? BB.effect.bigger : BB.effect.smaller,
-             hint: BB.effect.hint
-           }
-         }
- 
-         function Gz(BB, OB, GB) {
- ... (41 more removed lines; see GitHub link above)
+             ie.set(ye.name, Me);
+             const Ke = zJ(ye.name, He);
+             null === Ke || ie.has(Ke) || ie.set(Ke, Me)
+           }
+           return ie
+         }
+ 
+         function yk(ee, ie, He, ye) {
+           return null === ie || null === He || ie === He ? null : {
+             end: ye,
+             note: He > ie ? ee.effect.bigger : ee.effect.smaller,
+             hint: ee.effect.hint
+           }
+         }
+ 
+         function bk(ee, ie, He) {
+ ... (41 more added lines; see GitHub link above)
```

#### 733. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9962-L9969` → after: `L9962-L9969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9962-L9969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9962-L9969) · [Before (L9962-L9969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9962-L9969)

```diff
-                 end: OB
-               } = BB;
-               return OB === jB.end
-             })) || GB.push({
-               constant: DB,
-               key: QB[0],
-               start: QB.index,
-               ...jB
+                 end: ie
+               } = ee;
+               return ie === Ue.end
+             })) || He.push({
+               constant: be,
+               key: Me[0],
+               start: Me.index,
+               ...Ue
```

#### 734. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9972` → after: `L9972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9972) · [Before (L9972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9972)

```diff
-           return GB.sort(((BB, OB) => BB.end - OB.end))
+           return He.sort(((ee, ie) => ee.end - ie.end))
```

#### 735. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9974-L9975` → after: `L9974-L9975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9974-L9975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9974-L9975) · [Before (L9974-L9975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9974-L9975)

```diff
-         const oz = /^\s*(?:(?:const|let|var)\s+)?([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)\s*[:=]\s*([-\u2212]?\d[\d_]*(?:\.\d+)?)\s*[;,]?\s*(?:\/\/.*)?$/;
-         const jz = {
+         const Fk = /^\s*(?:(?:const|let|var)\s+)?([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*)\s*[:=]\s*([-\u2212]?\d[\d_]*(?:\.\d+)?)\s*[;,]?\s*(?:\/\/.*)?$/;
+         const Jk = {
```

#### 736. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9983-L9985` → after: `L9983-L9985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9983-L9985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9983-L9985) · [Before (L9983-L9985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9983-L9985)

```diff
-         }, yz = /\bmore (?:\w+ )?(?:time|room|chances?)\b|\b(?:larger|bigger|wider|more|extra) margin\b|\bsplit second\b|\bfall (?:further|farther)\b/i, Jz = /\b(?:sooner|quicker|earlier)\b|\bless (?:\w+ )?(?:time|room)\b/i, Mz = {
-           test: BB => /\b(?:alive|around) longer\b|\bslower\b|\blonger (?:break|window|wait|countdown|round)s?\b/i.test(BB) || (0, EQ.f)(BB, /\blasts? longer\b/i, (0, EQ.j)(/\b(?:sessions?|players?|games?|play|they|you)\s$/i)).length > 0
-         }, Pz = /\b(?:faster|sooner|quicker|shorter|snappier)\b|\bspeed (?:\w+ )?up\b|\b(?:less|reduce|reduces|reducing|cut|cuts|cutting) (?:the )?(?:down ?time|wait(?:ing)?(?: time)?)\b/i, zz = {
+         }, Rk = /\bmore (?:\w+ )?(?:time|room|chances?)\b|\b(?:larger|bigger|wider|more|extra) margin\b|\bsplit second\b|\bfall (?:further|farther)\b/i, kk = /\b(?:sooner|quicker|earlier)\b|\bless (?:\w+ )?(?:time|room)\b/i, qk = {
+           test: ee => /\b(?:alive|around) longer\b|\bslower\b|\blonger (?:break|window|wait|countdown|round)s?\b/i.test(ee) || (0, lM.g)(ee, /\blasts? longer\b/i, (0, lM.k)(/\b(?:sessions?|players?|games?|play|they|you)\s$/i)).length > 0
+         }, fk = /\b(?:faster|sooner|quicker|shorter|snappier)\b|\bspeed (?:\w+ )?up\b|\b(?:less|reduce|reduces|reducing|cut|cuts|cutting) (?:the )?(?:down ?time|wait(?:ing)?(?: time)?)\b/i, Tk = {
```

#### 737. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9987-L9988` → after: `L9987-L9988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9987-L9988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9987-L9988) · [Before (L9987-L9988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9987-L9988)

```diff
-             bigger: Mz,
-             smaller: Pz
+             bigger: qk,
+             smaller: fk
```

#### 738. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L9991-L9992` → after: `L9991-L9992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R9991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L9991-L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L9991-L9992) · [Before (L9991-L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L9991-L9992)

```diff
-             bigger: Mz,
-             smaller: Pz
+             bigger: qk,
+             smaller: fk
```

#### 739. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10001` → after: `L10001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10001) · [Before (L10001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10001)

```diff
-               test: BB => /\bcheaper\b|\bmore affordable\b|\b(?:easier|quicker|faster) to (?:afford|buy)\b|\bcosts? less\b/i.test(BB) || (0, EQ.f)(BB, /\bafford\b/i, (0, EQ.j)(/\b(?:not|n't|cannot|never)\s(?:\w+\s)?$/i)).length > 0
+               test: ee => /\bcheaper\b|\bmore affordable\b|\b(?:easier|quicker|faster) to (?:afford|buy)\b|\bcosts? less\b/i.test(ee) || (0, lM.g)(ee, /\bafford\b/i, (0, lM.k)(/\b(?:not|n't|cannot|never)\s(?:\w+\s)?$/i)).length > 0
```

#### 740. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10008-L10020` → after: `L10008-L10020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10008-L10020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10008-L10020) · [Before (L10008-L10020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10008-L10020)

```diff
-         }, lz = /^[^.!?\n]{0,30}?\b(?:to|so|so that|which|for|making|giving|letting)\b/i, pz = /[,;:(]|\[\[|\s(?:and|then|checking|while|but)\s|[.!?](?=\s|\*|_|$)|\n/i, qz = /(?:[A-Z][A-Z0-9]*_[A-Z0-9_]+|[a-z]+[A-Z]\w*)(?![\w$])/;
- 
-         function Zz(BB, OB) {
-           const GB = lz.exec(OB);
-           if (null === GB) return null;
-           const YB = OB.slice(GB[0].length),
-             DB = YB.search(pz),
-             QB = -1 === DB ? YB : YB.slice(0, DB);
-           if ((0, EQ.f)(QB, qz, (0, EQ.n)("\\w$")).length > 0 || /\b(?:not|never|cannot|no longer|cant|dont|wont|doesnt|isnt|arent)\b|n['\u2019]t\b/i.test(QB)) return null;
-           let oB;
-           oB = "caughtSooner" === BB || "caughtLater" === BB ? "caughtSooner" === BB ? {
-             bigger: Jz,
-             smaller: yz
+         }, pk = /^[^.!?\n]{0,30}?\b(?:to|so|so that|which|for|making|giving|letting)\b/i, Xk = /[,;:(]|\[\[|\s(?:and|then|checking|while|but)\s|[.!?](?=\s|\*|_|$)|\n/i, zk = /(?:[A-Z][A-Z0-9]*_[A-Z0-9_]+|[a-z]+[A-Z]\w*)(?![\w$])/;
+ 
+         function Bk(ee, ie) {
+           const He = pk.exec(ie);
+           if (null === He) return null;
+           const ye = ie.slice(He[0].length),
+             be = ye.search(Xk),
+             Me = -1 === be ? ye : ye.slice(0, be);
+           if ((0, lM.g)(Me, zk, (0, lM.m)("\\w$")).length > 0 || /\b(?:not|never|cannot|no longer|cant|dont|wont|doesnt|isnt|arent)\b|n['\u2019]t\b/i.test(Me)) return null;
+           let Ke;
+           Ke = "caughtSooner" === ee || "caughtLater" === ee ? "caughtSooner" === ee ? {
+             bigger: kk,
+             smaller: Rk
```

#### 741. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10022-L10026` → after: `L10022-L10026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10022-L10026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10022-L10026) · [Before (L10022-L10026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10022-L10026)

```diff
-             bigger: yz,
-             smaller: Jz
-           } : zz[BB];
-           const jB = oB.bigger.test(QB);
-           return jB === oB.smaller.test(QB) ? null : jB ? "bigger" : "smaller"
+             bigger: Rk,
+             smaller: kk
+           } : Tk[ee];
+           const Ue = Ke.bigger.test(Me);
+           return Ue === Ke.smaller.test(Me) ? null : Ue ? "bigger" : "smaller"
```

#### 742. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10029-L10030` → after: `L10029-L10030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10029-L10030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10029-L10030) · [Before (L10029-L10030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10029-L10030)

```diff
-         function Nz(BB) {
-           return jz[BB.effect.bigger]
+         function Ek(ee) {
+           return Jk[ee.effect.bigger]
```

#### 743. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10033-L10040` → after: `L10033-L10040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10033-L10040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10033-L10040) · [Before (L10033-L10040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10033-L10040)

```diff
-         function Rz(BB, OB, GB, YB) {
-           const DB = "bigger" === GB,
-             QB = DB ? "bigger" : "smaller",
-             oB = function(BB) {
-               const OB = /^\s*if\s*\(.*\)\s*\{?\s*((?:api\.)?[A-Za-z_$][\w$]*)\s*\(/.exec(BB);
-               return null === OB || OB[1].length > 30 ? null : OB[1]
-             }(YB),
-             jB = `\`${OB}\``;
+         function gk(ee, ie, He, ye) {
+           const be = "bigger" === He,
+             Me = be ? "bigger" : "smaller",
+             Ke = function(ee) {
+               const ie = /^\s*if\s*\(.*\)\s*\{?\s*((?:api\.)?[A-Za-z_$][\w$]*)\s*\(/.exec(ee);
+               return null === ie || ie[1].length > 30 ? null : ie[1]
+             }(ye),
+             Ue = `\`${ie}\``;
```

#### 744. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10044` → after: `L10044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10044) · [Before (L10044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10044)

```diff
-               return `a ${DB?"higher":"lower"} ${jB} catches players ${DB===("caughtSooner"===BB)?"sooner":"later"}`;
+               return `a ${be?"higher":"lower"} ${Ue} catches players ${be===("caughtSooner"===ee)?"sooner":"later"}`;
```

#### 745. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10046` → after: `L10046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10046) · [Before (L10046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10046)

```diff
-               return null !== oB ? `a ${QB} ${jB} runs \`${oB}\` ${DB?"later":"sooner"}` : `a ${QB} ${jB} makes it ${DB?"last longer":"end sooner"}`;
+               return null !== Ke ? `a ${Me} ${Ue} runs \`${Ke}\` ${be?"later":"sooner"}` : `a ${Me} ${Ue} makes it ${be?"last longer":"end sooner"}`;
```

#### 746. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10048` → after: `L10048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10048) · [Before (L10048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10048)

```diff
-               return `a ${QB} ${jB} makes the wait ${DB?"longer":"shorter"}`;
+               return `a ${Me} ${Ue} makes the wait ${be?"longer":"shorter"}`;
```

#### 747. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10050` → after: `L10050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10050) · [Before (L10050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10050)

```diff
-               return `a ${QB} ${jB} makes it happen ${DB?"more":"less"} often`;
+               return `a ${Me} ${Ue} makes it happen ${be?"more":"less"} often`;
```

#### 748. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10052` → after: `L10052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10052) · [Before (L10052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10052)

```diff
-               return `a ${QB} ${jB} costs ${DB?"more":"less"}`;
+               return `a ${Me} ${Ue} costs ${be?"more":"less"}`;
```

#### 749. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10054` → after: `L10054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10054) · [Before (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10054)

```diff
-               return `a ${QB} ${jB} means players need ${DB?"more":"less"}`
+               return `a ${Me} ${Ue} means players need ${be?"more":"less"}`
```

#### 750. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10059` → after: `L10059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10059) · [Before (L10059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10059)

```diff
-           const GB = (0, wQ.D)(BB, OB);
+           const He = (0, mM.K)(ee, ie);
```

#### 751. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10088` → after: `L10088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10088) · [Before (L10088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10088)

```diff
-                   jB = void 0 === DB ? null : Zz(DB, BB.slice(OB.end, null !== (YB = null === oB || void 0 === oB ? void 0 : oB.start) && void 0 !== YB ? YB : BB.length));
+                   Ue = void 0 === be ? null : Bk(be, ee.slice(ie.end, null !== (ye = null === Ke || void 0 === Ke ? void 0 : Ke.start) && void 0 !== ye ? ye : ee.length));
```

#### 752. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10097` → after: `L10097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10097) · [Before (L10097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10097)

```diff
-             const BB = null !== (oB = null === GB || void 0 === GB || null === (jB = GB.get(yB.constant.name)) || void 0 === jB ? void 0 : jB.usedIn) && void 0 !== oB ? oB : "",
+             const ee = null !== (Ke = null === He || void 0 === He || null === (Ue = He.get(Fe.constant.name)) || void 0 === Ue ? void 0 : Ue.usedIn) && void 0 !== Ke ? Ke : "",
```

#### 753. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10099` → after: `L10099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10099) · [Before (L10099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10099)

```diff
-             QB(yB.end, "direction", yB.constant.name, `${YB?"Careful":"Check the direction"}: in your code ${OB}.`, BB)
+             Me(Fe.end, "direction", Fe.constant.name, `${ye?"Careful":"Check the direction"}: in your code ${ie}.`, ee)
```

#### 754. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10109-L10110` → after: `L10109-L10110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10109-L10110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10109-L10110) · [Before (L10109-L10110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10109-L10110)

```diff
-               if (Az.test(oB.replace(new RegExp(`\`?${GB.replace(/[.$]/g,"\\$&")}\`?`, "g"), " "))) {
-                 const BB = YB ? `\`${GB}\` only ${OB.unrelated}, so Studio can't tell if it helps players stay.` : `\`${GB}\` only ${OB.unrelated}; Studio can't link it to players leaving.`;
+               if (dk.test(Ke.replace(new RegExp(`\`?${He.replace(/[.$]/g,"\\$&")}\`?`, "g"), " "))) {
+                 const ee = ye ? `\`${He}\` only ${ie.unrelated}, so Studio can't tell if it helps players stay.` : `\`${He}\` only ${ie.unrelated}; Studio can't link it to players leaving.`;
```

#### 755. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10114` → after: `L10114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10114) · [Before (L10114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10114)

```diff
-             null !== OB.sideEffect && QB(DB, "sideEffect", OB.name, `Also changes your leaderboard: ${OB.sideEffect}.`, OB.usedIn)
+             null !== ie.sideEffect && Me(be, "sideEffect", ie.name, `Also changes your leaderboard: ${ie.sideEffect}.`, ie.usedIn)
```

#### 756. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10134-L10136` → after: `L10134-L10136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10134-L10136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10134-L10136) · [Before (L10134-L10136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10134-L10136)

```diff
-             YB = `${(0,wQ.h)(BB)}(?![\\w$])`,
-             DB = new RegExp(`([\\w$.]+|JSON\\.stringify\\([^()]*\\))\\.length\\s*<=?\\s*${YB}`).exec(OB);
-           if (null !== DB && fz.test(GB) && new RegExp(`${(0,wQ.h)(DB[1])}\\.push\\(`).test(OB)) return "caps how long a queue in your code gets";
+             ye = `${(0,mM.f)(ee)}(?![\\w$])`,
+             be = new RegExp(`([\\w$.]+|JSON\\.stringify\\([^()]*\\))\\.length\\s*<=?\\s*${ye}`).exec(ie);
+           if (null !== be && Dk.test(He) && new RegExp(`${(0,mM.f)(be[1])}\\.push\\(`).test(ie)) return "caps how long a queue in your code gets";
```

#### 757. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10138` → after: `L10138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10138) · [Before (L10138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10138)

```diff
-           const QB = new RegExp(`^\\s*(?:(?:while|for)\\s*\\((?:[^;()]*;)?\\s*)?${Sz}\\s*<=?\\s*${YB}`).test(OB);
+           const Me = new RegExp(`^\\s*(?:(?:while|for)\\s*\\((?:[^;()]*;)?\\s*)?${tk}\\s*<=?\\s*${ye}`).test(ie);
```

#### 758. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10141-L10142` → after: `L10141-L10142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10141-L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10141-L10142) · [Before (L10141-L10142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10141-L10142)

```diff
-             const OB = (0, wQ.q)(BB).filter((BB => !/^(?:max|min|num|number|to|scan|of|count)$/.test(BB)));
-             return `sets how many ${0===OB.length?"slots":OB.join(" ")} your code checks`
+             const ie = (0, mM.v)(ee).filter((ee => !/^(?:max|min|num|number|to|scan|of|count)$/.test(ee)));
+             return `sets how many ${0===ie.length?"slots":ie.join(" ")} your code checks`
```

#### 759. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10148-L10150` → after: `L10148-L10150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10148-L10150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10148-L10150) · [Before (L10148-L10150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10148-L10150)

```diff
-           const YB = `${(0,wQ.h)(BB)}(?![\\w$])`,
-             DB = new RegExp(`(?:parseInt|parseFloat|Number)\\([^()]*\\)\\s*:\\s*${YB}|(?:\\?\\?|\\|\\|)\\s*${YB}`).test(OB),
-             QB = (0, wQ.q)(BB),
+           const ye = `${(0,mM.f)(ee)}(?![\\w$])`,
+             be = new RegExp(`(?:parseInt|parseFloat|Number)\\([^()]*\\)\\s*:\\s*${ye}|(?:\\?\\?|\\|\\|)\\s*${ye}`).test(ie),
+             Me = (0, mM.v)(ee),
```

#### 760. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10152-L10153` → after: `L10152-L10153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10152-L10153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10152-L10153) · [Before (L10152-L10153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10152-L10153)

```diff
-           if (!DB || void 0 === oB || !/leaderboard/i.test(GB) || !new RegExp(`\\b${oB}\\b`, "i").test(GB)) return null;
-           return `it is the ${QB.filter((BB=>!Kz.has(BB))).map((BB=>Object.hasOwn(dz,BB)?dz[BB]:BB)).join(" ")} every new player starts with`
+           if (!be || void 0 === Ke || !/leaderboard/i.test(He) || !new RegExp(`\\b${Ke}\\b`, "i").test(He)) return null;
+           return `it is the ${Me.filter((ee=>!Yk.has(ee))).map((ee=>Object.hasOwn(Ak,ee)?Ak[ee]:ee)).join(" ")} every new player starts with`
```

#### 761. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10160` → after: `L10160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10160) · [Before (L10160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10160)

```diff
-               return [...BB.playerText, ...(null !== (OB = BB.messages) && void 0 !== OB ? OB : []).map((BB => BB.text)), ...(null !== (GB = BB.calls) && void 0 !== GB ? GB : []).flatMap((BB => BB.strings)), ...(null !== (YB = BB.functions) && void 0 !== YB ? YB : []).map((BB =>  … [truncated]
+               return [...ee.playerText, ...(null !== (ie = ee.messages) && void 0 !== ie ? ie : []).map((ee => ee.text)), ...(null !== (He = ee.calls) && void 0 !== He ? He : []).flatMap((ee => ee.strings)), ...(null !== (ye = ee.functions) && void 0 !== ye ? ye : []).map((ee =>  … [truncated]
```

#### 762. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10194` → after: `L10194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10194) · [Before (L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10194)

```diff
-           return null !== (OB = null === (GB = BB.split(".")[1]) || void 0 === GB ? void 0 : GB.length) && void 0 !== OB ? OB : 0
+           return null !== (ie = null === (He = ee.split(".")[1]) || void 0 === He ? void 0 : He.length) && void 0 !== ie ? ie : 0
```

#### 763. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10197` → after: `L10197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10197) · [Before (L10197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10197)

```diff
-           const OB = [BB, `${BB}s`];
+           const ie = [ee, `${ee}s`];
```

#### 764. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10200` → after: `L10200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10200) · [Before (L10200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10200)

```diff
-             [`${BB}s`, OB]
+             [`${ee}s`, ie]
```

#### 765. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10217` → after: `L10217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10217) · [Before (L10217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10217)

```diff
-             unit: `${QB[0].slice(0,QB[0].length-QB[1].length)}${1===Math.abs(DB)?oB[0]:oB[1]}`,
+             unit: `${Me[0].slice(0,Me[0].length-Me[1].length)}${1===Math.abs(be)?Ke[0]:Ke[1]}`,
```

#### 766. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10225` → after: `L10225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10225) · [Before (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10225)

```diff
-           return void 0 === YB ? BB : `${BB.slice(0,BB.length-GB.length)}${1===Math.abs(OB)?YB[0]:YB[1]}`
+           return void 0 === ye ? ee : `${ee.slice(0,ee.length-He.length)}${1===Math.abs(ie)?ye[0]:ye[1]}`
```

#### 767. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10227` → after: `L10227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10227) · [Before (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10227)

```diff
-         const Xz = /[-\u2212]?\d(?:[\d_]|,(?=\d))*(?:\.\d+)?/g, wz = /\b(?:extend|boost|bump|cut|drop|double|halve|speed|slow)\w*\b/i, Ez = /\b(?:set(?:s|ting)?|chang(?:e|es|ing)|mak(?:e|es|ing)|put(?:s|ting)?|adjust(?:s|ing)?|tweak(?:s|ing)?|edit(?:s|ing)?|updat(?:e|es|ing))\b/i … [truncated]
+         const mk = /[-\u2212]?\d(?:[\d_]|,(?=\d))*(?:\.\d+)?/g, lk = /\b(?:extend|boost|bump|cut|drop|double|halve|speed|slow)\w*\b/i, Sk = /\b(?:set(?:s|ting)?|chang(?:e|es|ing)|mak(?:e|es|ing)|put(?:s|ting)?|adjust(?:s|ing)?|tweak(?:s|ing)?|edit(?:s|ing)?|updat(?:e|es|ing))\b/i … [truncated]
```

#### 768. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10295` → after: `L10295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10295) · [Before (L10295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10295)

```diff
-                 text: `${AB}${rz(zB.unit,RB(AB))}`
+                 text: `${Ee}${uk(ke.unit,ze(Ee))}`
```

#### 769. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10305` → after: `L10305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10305) · [Before (L10305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10305)

```diff
-               if (void 0 === UB || (0, EQ.f)(nB.slice(UB.index + UB[0].length), Ez, cz).length > 0) continue;
+               if (void 0 === We || (0, lM.g)(de.slice(We.index + We[0].length), Sk, nk).length > 0) continue;
```

#### 770. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10325` → after: `L10325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10325) · [Before (L10325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10325)

```diff
-               void 0 !== GB && BB.at + BB.length > GB.at && (oB = !1), yB = `${yB.slice(0,BB.at)}${BB.text}${yB.slice(BB.at+BB.length)}`
+               void 0 !== He && ee.at + ee.length > He.at && (Ke = !1), Fe = `${Fe.slice(0,ee.at)}${ee.text}${Fe.slice(ee.at+ee.length)}`
```

#### 771. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10338-L10344` → after: `L10338-L10344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10338-L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10338-L10344) · [Before (L10338-L10344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10338-L10344)

```diff
-           const DB = (null !== (GB = null === (YB = ZJ(BB)) || void 0 === YB ? void 0 : YB.key) && void 0 !== GB ? GB : BB).replace(/([a-z\d])([A-Z])/g, "$1_$2").toUpperCase(),
-             QB = `${(0,wQ.h)(BB)}(?![\\w$])`;
-           if (/BUDGET/.test(DB) && new RegExp(`Date\\.now\\(\\)\\s*-\\s*[\\w$.]+\\s*>=?\\s*${QB}`).test(OB)) return !0;
-           if (/(?:^|_)ERRORS?(?:_|$)|(?:^|_)ERR(?:_|$)/.test(DB) && new RegExp(`\\berr\\w*\\s*>=?\\s*${QB}`, "i").test(OB)) return !0;
-           if (/(?:^|_)(?:EXECS?|EXECUTIONS?|LOADS?|OPS|CALLS)(?:_|$)|(?:^|_)PER_TICK$/.test(DB) && new RegExp(`(?:^|[(;\\s])(?:i|j|k|n|count|ops|done|calls|runs)\\s*<=?\\s*${QB}`).test(OB)) return !0;
-           if (/INTERVAL|EVERY|TICKS/.test(DB) && new RegExp(`>=?\\s*${QB}\\s*\\)\\s*\\{?\\s*(?:optimi[sz]e|cleanup|cleanUp|gc|compact|flush|prune|purge)\\w*\\(`).test(OB)) return !0;
-           const oB = new RegExp(`([\\w$.]+)\\.size\\s*>=?\\s*${QB}\\s*\\)\\s*\\{?\\s*([\\w$.]+)\\.delete\\(`).exec(OB);
+           const be = (null !== (He = null === (ye = pJ(ee)) || void 0 === ye ? void 0 : ye.key) && void 0 !== He ? He : ee).replace(/([a-z\d])([A-Z])/g, "$1_$2").toUpperCase(),
+             Me = `${(0,mM.f)(ee)}(?![\\w$])`;
+           if (/BUDGET/.test(be) && new RegExp(`Date\\.now\\(\\)\\s*-\\s*[\\w$.]+\\s*>=?\\s*${Me}`).test(ie)) return !0;
+           if (/(?:^|_)ERRORS?(?:_|$)|(?:^|_)ERR(?:_|$)/.test(be) && new RegExp(`\\berr\\w*\\s*>=?\\s*${Me}`, "i").test(ie)) return !0;
+           if (/(?:^|_)(?:EXECS?|EXECUTIONS?|LOADS?|OPS|CALLS)(?:_|$)|(?:^|_)PER_TICK$/.test(be) && new RegExp(`(?:^|[(;\\s])(?:i|j|k|n|count|ops|done|calls|runs)\\s*<=?\\s*${Me}`).test(ie)) return !0;
+           if (/INTERVAL|EVERY|TICKS/.test(be) && new RegExp(`>=?\\s*${Me}\\s*\\)\\s*\\{?\\s*(?:optimi[sz]e|cleanup|cleanUp|gc|compact|flush|prune|purge)\\w*\\(`).test(ie)) return !0;
+           const Ke = new RegExp(`([\\w$.]+)\\.size\\s*>=?\\s*${Me}\\s*\\)\\s*\\{?\\s*([\\w$.]+)\\.delete\\(`).exec(ie);
```

#### 772. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10358` → after: `L10358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10358) · [Before (L10358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10358)

```diff
-             void 0 === MB || null === (null !== (DB = null === YB || void 0 === YB || null === (QB = YB.get(JB)) || void 0 === QB ? void 0 : QB.unrelated) && void 0 !== DB ? DB : null) && !bz(JB, MB) || GB.add(JB)
+             void 0 === oe || null === (null !== (be = null === ye || void 0 === ye || null === (Me = ye.get(Je)) || void 0 === Me ? void 0 : Me.unrelated) && void 0 !== be ? be : null) && !Nk(Je, oe) || He.add(Je)
```

#### 773. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10371-L10372` → after: `L10371-L10372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10371-L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10371-L10372) · [Before (L10371-L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10371-L10372)

```diff
-               const OB = `${PB}\n${BB}`;
-               oB.set(OB, [...null !== (yB = oB.get(OB)) && void 0 !== yB ? yB : [], JB])
+               const ie = `${Re}\n${ee}`;
+               Ke.set(ie, [...null !== (Fe = Ke.get(ie)) && void 0 !== Fe ? Fe : [], Je])
```

#### 774. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10389` → after: `L10389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10389) · [Before (L10389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10389)

```diff
-           return GB.length === BB.size ? BB : new Map(GB)
+           return He.length === ee.size ? ee : new Map(He)
```

#### 775. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10395` → after: `L10395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10395) · [Before (L10395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10395)

```diff
-           return (0, wQ.u)(BB).some((BB => sz.test(BB)))
+           return (0, mM.D)(ee).some((ee => eq.test(ee)))
```

#### 776. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10405` → after: `L10405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10405) · [Before (L10405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10405)

```diff
-                 GB = null !== OB && void 0 !== OB ? OB : tz(BB.type);
+                 He = null !== ie && void 0 !== ie ? ie : Hq(ee.type);
```

#### 777. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10409` → after: `L10409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10409) · [Before (L10409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10409)

```diff
-               return (null !== (GB = OB.players) && void 0 !== GB ? GB : -1) - (null !== (YB = BB.players) && void 0 !== YB ? YB : -1) || BB.timeMs - OB.timeMs || BB.name.localeCompare(OB.name)
+               return (null !== (He = ie.players) && void 0 !== He ? He : -1) - (null !== (ye = ee.players) && void 0 !== ye ? ye : -1) || ee.timeMs - ie.timeMs || ee.name.localeCompare(ie.name)
```

#### 778. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10418` → after: `L10418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10418) · [Before (L10418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10418)

```diff
-               return (null !== (OB = BB.categories) && void 0 !== OB ? OB : [{
+               return (null !== (ie = ee.categories) && void 0 !== ie ? ie : [{
```

#### 779. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10459` → after: `L10459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10459) · [Before (L10459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10459)

```diff
-           return void 0 === YB ? null : void 0 === DB || (null !== (OB = YB.players) && void 0 !== OB ? OB : -1) >= (null !== (GB = DB.players) && void 0 !== GB ? GB : -1) ? YB : null
+           return void 0 === ye ? null : void 0 === be || (null !== (ie = ye.players) && void 0 !== ie ? ie : -1) >= (null !== (He = be.players) && void 0 !== He ? He : -1) ? ye : null
```

#### 780. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10464-L10465` → after: `L10464-L10465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10464-L10465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10464-L10465) · [Before (L10464-L10465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10464-L10465)

```diff
-               const OB = BB.name.length > BB.type.length ? (0, wQ.u)(BB.name.slice(BB.type.length)).slice(0, 1) : [];
-               return (OB.length > 0 ? OB : (0, wQ.u)(BB.type)).filter((BB => !sz.test(BB) && !xz.test(BB) && !/^\d+$/.test(BB))).map(Yl)
+               const ie = ee.name.length > ee.type.length ? (0, mM.D)(ee.name.slice(ee.type.length)).slice(0, 1) : [];
+               return (ie.length > 0 ? ie : (0, mM.D)(ee.type)).filter((ee => !eq.test(ee) && !iq.test(ee) && !/^\d+$/.test(ee))).map(Kq)
```

#### 781. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10490-L10491` → after: `L10490-L10491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10490-L10491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10490-L10491) · [Before (L10490-L10491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10490-L10491)

```diff
-           const YB = null !== (GB = null === OB || void 0 === OB ? void 0 : OB.logged) && void 0 !== GB ? GB : null,
-             DB = null === YB ? "" : `, in ${YB} where it is logged`,
+           const ye = null !== (He = null === ie || void 0 === ie ? void 0 : ie.logged) && void 0 !== He ? He : null,
+             be = null === ye ? "" : `, in ${ye} where it is logged`,
```

#### 782. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10496-L10497` → after: `L10496-L10497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10496-L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10496-L10497) · [Before (L10496-L10497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10496-L10497)

```diff
-               const BB = null !== (oB = null === OB || void 0 === OB ? void 0 : OB.from) && void 0 !== oB ? oB : "the hardest wave",
-                 GB = null !== (jB = null === OB || void 0 === OB ? void 0 : OB.to) && void 0 !== jB ? jB : "the hardest wave";
+               const ee = null !== (Ke = null === ie || void 0 === ie ? void 0 : ie.from) && void 0 !== Ke ? Ke : "the hardest wave",
+                 He = null !== (Ue = null === ie || void 0 === ie ? void 0 : ie.to) && void 0 !== Ue ? Ue : "the hardest wave";
```

#### 783. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10499` → after: `L10499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10499) · [Before (L10499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10499)

```diff
-                 text: `Weaker enemies once players reach ${BB}`,
+                 text: `Weaker enemies once players reach ${ee}`,
```

#### 784. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10503` → after: `L10503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10503) · [Before (L10503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10503)

```diff
-                 text: `A longer break before ${GB}`,
+                 text: `A longer break before ${He}`,
```

#### 785. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10515` → after: `L10515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10515) · [Before (L10515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10515)

```diff
-                 text: `A message at ${BB} saying what comes next and how to get ready${DB}`,
+                 text: `A message at ${ee} saying what comes next and how to get ready${be}`,
```

#### 786. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10518` → after: `L10518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10518) · [Before (L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10518)

```diff
-                 text: `A new tower, weapon or upgrade to unlock just before ${GB}`,
+                 text: `A new tower, weapon or upgrade to unlock just before ${He}`,
```

#### 787. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10523` → after: `L10523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10523) · [Before (L10523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10523)

```diff
-               const BB = null === OB ? "the hardest jump" : `the hardest jump after ${OB.from}`;
+               const ee = null === ie ? "the hardest jump" : `the hardest jump after ${ie.from}`;
```

#### 788. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10525` → after: `L10525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10525) · [Before (L10525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10525)

```diff
-                 text: `More time or room at ${BB}`,
+                 text: `More time or room at ${ee}`,
```

#### 789. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10529` → after: `L10529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10529) · [Before (L10529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10529)

```diff
-                 text: `A sign or message with a tip just before ${BB}${DB}`,
+                 text: `A sign or message with a tip just before ${ee}${be}`,
```

#### 790. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10532` → after: `L10532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10532) · [Before (L10532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10532)

```diff
-                 text: `A checkpoint block just before ${BB}`,
+                 text: `A checkpoint block just before ${ee}`,
```

#### 791. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10535` → after: `L10535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10535) · [Before (L10535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10535)

```diff
-                 text: `A shorter gap or a lower block to jump at ${BB}`,
+                 text: `A shorter gap or a lower block to jump at ${ee}`,
```

#### 792. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10538` → after: `L10538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10538) · [Before (L10538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10538)

```diff
-                 text: `An easier side route round ${BB}`,
+                 text: `An easier side route round ${ee}`,
```

#### 793. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10548` → after: `L10548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10548) · [Before (L10548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10548)

```diff
-                 text: `Less needed to reach ${GB}`,
+                 text: `Less needed to reach ${He}`,
```

#### 794. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10552` → after: `L10552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10552) · [Before (L10552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10552)

```diff
-                 text: `A message at ${BB} saying exactly what to do to reach ${GB}${DB}`,
+                 text: `A message at ${ee} saying exactly what to do to reach ${He}${be}`,
```

#### 795. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10555` → after: `L10555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10555) · [Before (L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10555)

```diff
-                 text: `A small reward at ${BB}, so players want the next one`,
+                 text: `A small reward at ${ee}, so players want the next one`,
```

#### 796. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10558` → after: `L10558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10558) · [Before (L10558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10558)

```diff
-                 text: `Signs, arrows or a lit path from ${BB} to ${GB}`,
+                 text: `Signs, arrows or a lit path from ${ee} to ${He}`,
```

#### 797. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10561` → after: `L10561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10561) · [Before (L10561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10561)

```diff
-                 text: `A shortcut or helper item for the part before ${GB}`,
+                 text: `A shortcut or helper item for the part before ${He}`,
```

#### 798. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10576` → after: `L10576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10576) · [Before (L10576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10576)

```diff
-             const GB = "step" === BB.kind ? (0, wQ.u)(BB.names).join(" ") : "";
+             const He = "step" === ee.kind ? (0, mM.D)(ee.names).join(" ") : "";
```

#### 799. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10588` → after: `L10588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10588) · [Before (L10588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10588)

```diff
-               const BB = (null !== (oB = null === YB || void 0 === YB ? void 0 : YB.callbacks) && void 0 !== oB ? oB : []).some((BB => {
+               const ee = (null !== (Ke = null === ye || void 0 === ye ? void 0 : ye.callbacks) && void 0 !== Ke ? Ke : []).some((ee => {
```

#### 800. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10604` → after: `L10604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10604) · [Before (L10604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10604)

```diff
-                   text: `A welcome message${OB?" in onPlayerJoin":""} saying the goal in one line`,
+                   text: `A welcome message${ie?" in onPlayerJoin":""} saying the goal in one line`,
```

#### 801. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10616` → after: `L10616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10616) · [Before (L10616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10616)

```diff
-                 const YB = `about ${BB-1} ${2===BB?"minute":"minutes"} in`;
+                 const ye = `about ${ee-1} ${2===ee?"minute":"minutes"} in`;
```

#### 802. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10622` → after: `L10622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10622) · [Before (L10622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10622)

```diff
-                   text: `A cheaper reward or unlock, reached by ${YB}`,
+                   text: `A cheaper reward or unlock, reached by ${ye}`,
```

#### 803. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10626` → after: `L10626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10626) · [Before (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10626)

```diff
-                   text: `A message giving the next goal on an event players reach by ${YB}`,
+                   text: `A message giving the next goal on an event players reach by ${ye}`,
```

#### 804. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10632` → after: `L10632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10632) · [Before (L10632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10632)

```diff
-                   text: `A second goal opening on an event players reach by ${YB}`,
+                   text: `A second goal opening on an event players reach by ${ye}`,
```

#### 805. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10649` → after: `L10649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10649) · [Before (L10649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10649)

```diff
-           const DB = "step" === BB.focus.kind && null !== (OB = BB.focus.causesElsewhere) && void 0 !== OB ? OB : new Set,
+           const be = "step" === ee.focus.kind && null !== (ie = ee.focus.causesElsewhere) && void 0 !== ie ? ie : new Set,
```

#### 806. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10651` → after: `L10651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10651) · [Before (L10651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10651)

```diff
-             oB = (null !== (GB = null === (YB = BB.digest) || void 0 === YB ? void 0 : YB.constants) && void 0 !== GB ? GB : []).filter((BB => {
+             Ke = (null !== (He = null === (ye = ee.digest) || void 0 === ye ? void 0 : ye.constants) && void 0 !== He ? He : []).filter((ee => {
```

#### 807. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10659` → after: `L10659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10659) · [Before (L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10659)

```diff
-               parts: (0, wQ.u)(BB.name)
+               parts: (0, mM.D)(ee.name)
```

#### 808. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10664` → after: `L10664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10664) · [Before (L10664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10664)

```diff
-               return !(Zl(GB, ql) && "step" === BB.focus.kind && !Zl((0, wQ.u)(BB.focus.to), ql)) && !GB.some((BB => DB.has(Yl(BB))))
+               return !(Bq(He, zq) && "step" === ee.focus.kind && !Bq((0, mM.D)(ee.focus.to), zq)) && !He.some((ee => be.has(Kq(ee))))
```

#### 809. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10678` → after: `L10678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10678) · [Before (L10678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10678)

```diff
-                   YB.push(`${BB} ${DB.name} (${null!==oB&&void 0!==oB?oB:`${DB.value} now`})`)
+                   ye.push(`${ee} ${be.name} (${null!==Ke&&void 0!==Ke?Ke:`${be.value} now`})`)
```

#### 810. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10697` → after: `L10697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10697) · [Before (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10697)

```diff
-             return `(${[...BB.matchAll(ml)].map((BB=>{let[,OB]=BB;return OB})).join(", ")})`
+             return `(${[...ee.matchAll(aq)].map((ee=>{let[,ie]=ee;return ie})).join(", ")})`
```

#### 811. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10703` → after: `L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10703) · [Before (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10703)

```diff
-           if (null === BB || BB.length > wQ.o) return null;
+           if (null === ee || ee.length > mM.t) return null;
```

#### 812. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10705` → after: `L10705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10705) · [Before (L10705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10705)

```diff
-           for (const [, GB, YB] of(0, EQ.f)(OB, Fl, EQ.p)) {
+           for (const [, He, ye] of(0, lM.g)(ie, xq, lM.n)) {
```

#### 813. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10707` → after: `L10707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10707) · [Before (L10707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10707)

```diff
-             if (!(void 0 === GB && new RegExp(`(?:function\\s+|(?:const|let|var)\\s+)${YB}\\b`).test(OB))) return "api" === GB ? `api.${YB}` : YB
+             if (!(void 0 === He && new RegExp(`(?:function\\s+|(?:const|let|var)\\s+)${ye}\\b`).test(ie))) return "api" === He ? `api.${ye}` : ye
```

#### 814. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10709` → after: `L10709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10709) · [Before (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10709)

```diff
-           return il.some((BB => (0, EQ.f)(OB, BB, EQ.p).length > 0)) ? "async" : null
+           return Lq.some((ee => (0, lM.g)(ie, ee, lM.n).length > 0)) ? "async" : null
```

#### 815. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10711` → after: `L10711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10711) · [Before (L10711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10711)

```diff
-         const gl = ["playerId", "playerID", "pid", "p", "id", "player", "plr"], rl = /\bloop|getPlayerIds|\bfor each\b|\bevery player\b|\beach player\b/i, Xl = BB => new RegExp(`\\b${BB}\\s*\\(([^)]*)\\)`), wl = /[A-Za-z_$][\w$]*/g, El = /^\s*(?:[A-Za-z_$][\w$]*(?:\s*=\s*[^,()]+) … [truncated]
+         const vq = ["playerId", "playerID", "pid", "p", "id", "player", "plr"], uq = /\bloop|getPlayerIds|\bfor each\b|\bevery player\b|\beach player\b/i, mq = ee => new RegExp(`\\b${ee}\\s*\\(([^)]*)\\)`), lq = /[A-Za-z_$][\w$]*/g, Sq = /^\s*(?:[A-Za-z_$][\w$]*(?:\s*=\s*[^,()]+) … [truncated]
```

#### 816. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10726-L10727` → after: `L10726-L10727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10726-L10727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10726-L10727) · [Before (L10726-L10727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10726-L10727)

```diff
-           const DB = (0, wQ.f)(OB);
-           return [new RegExp(`\\b(?:const|let|var${YB?"|function|class":""})\\s+${DB}(?![\\w$])`), new RegExp(`\\b(?:const|let|var)\\s*[[{](?:[^=;]*[^=;\\w$.])?${DB}(?![\\w$])`), new RegExp(`(?:^|[^\\w$.])${DB}\\s*=>`), new RegExp(`\\(((?:[^()]*[^()\\w$.])?${DB}(?![\\w$])[^()]*)\ … [truncated]
+           const be = (0, mM.e)(ie);
+           return [new RegExp(`\\b(?:const|let|var${ye?"|function|class":""})\\s+${be}(?![\\w$])`), new RegExp(`\\b(?:const|let|var)\\s*[[{](?:[^=;]*[^=;\\w$.])?${be}(?![\\w$])`), new RegExp(`(?:^|[^\\w$.])${be}\\s*=>`), new RegExp(`\\(((?:[^()]*[^()\\w$.])?${be}(?![\\w$])[^()]*)\ … [truncated]
```

#### 817. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10732` → after: `L10732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10732) · [Before (L10732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10732)

```diff
-           return new RegExp(`(?:^|[^\\w$.])${GB}(?![\\w$])(?!\\s*:)|(?:^\\s*|[^{,\\s]\\s+|[^{,\\s\\w$.])${GB}(?![\\w$])(?=\\s*:)`).test(BB)
+           return new RegExp(`(?:^|[^\\w$.])${He}(?![\\w$])(?!\\s*:)|(?:^\\s*|[^{,\\s]\\s+|[^{,\\s\\w$.])${He}(?![\\w$])(?=\\s*:)`).test(ee)
```

#### 818. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10737` → after: `L10737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10737) · [Before (L10737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10737)

```diff
-           if (null === BB || null === OB || null === GB || BB.length > wQ.o || rl.test(OB)) return null;
+           if (null === ee || null === ie || null === He || ee.length > mM.t || uq.test(ie)) return null;
```

#### 819. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10739` → after: `L10739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10739) · [Before (L10739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10739)

```diff
-             yB = new Map((null !== (YB = GB.functions) && void 0 !== YB ? YB : []).map((BB => [BB.name, BB]))),
+             Fe = new Map((null !== (ye = He.functions) && void 0 !== ye ? ye : []).map((ee => [ee.name, ee]))),
```

#### 820. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10754` → after: `L10754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10754) · [Before (L10754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10754)

```diff
-             pB.push(...(RB = null !== (ZB = null === (NB = Xl(qB).exec(OB)) || void 0 === NB ? void 0 : NB[1]) && void 0 !== ZB ? ZB : "", al(RB) ? [...RB.matchAll(wl)].map((BB => {
+             fe.push(...(ze = null !== (pe = null === (Xe = mq(Te).exec(ie)) || void 0 === Xe ? void 0 : Xe[1]) && void 0 !== pe ? pe : "", sq(ze) ? [...ze.matchAll(lq)].map((ee => {
```

#### 821. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10762` → after: `L10762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10762) · [Before (L10762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10762)

```diff
-               pB.push(...null !== BB && void 0 !== BB ? BB : [])
+               fe.push(...null !== ee && void 0 !== ee ? ee : [])
```

#### 822. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10777` → after: `L10777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10777) · [Before (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10777)

```diff
-           const VB = [...new Set(void 0 !== zB || void 0 === qB ? AB : null === WB ? pB : [])].filter((BB => gl.includes(BB))),
+           const ge = [...new Set(void 0 !== ke || void 0 === Te ? Ee : null === Be ? fe : [])].filter((ee => vq.includes(ee))),
```

#### 823. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10779` → after: `L10779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10779) · [Before (L10779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10779)

```diff
-             nB = el(null !== (QB = null === (oB = jB.get("onPlayerJoin")) || void 0 === oB ? void 0 : oB.params) && void 0 !== QB ? QB : []),
+             de = Iq(null !== (Me = null === (Ke = Ue.get("onPlayerJoin")) || void 0 === Ke ? void 0 : Ke.params) && void 0 !== Me ? Me : []),
```

#### 824. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10793` → after: `L10793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10793) · [Before (L10793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10793)

```diff
-               place: null !== (kB = null !== zB && void 0 !== zB ? zB : qB) && void 0 !== kB ? kB : WB.name,
+               place: null !== (Ze = null !== ke && void 0 !== ke ? ke : Te) && void 0 !== Ze ? Ze : Be.name,
```

#### 825. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10818` → after: `L10818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10818) · [Before (L10818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10818)

```diff
-           for (const zB of (0, EQ.f)(BB, new RegExp(`${YB}(?![\\w$])`, "g"), EQ.p)) {
+           for (const ke of (0, lM.g)(ee, new RegExp(`${ye}(?![\\w$])`, "g"), lM.n)) {
```

#### 826. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10849` → after: `L10849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10849) · [Before (L10849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10849)

```diff
-           return null !== (YB = null === (DB = Yp(BB, OB, GB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [])) || void 0 === DB ? void 0 : DB.unmade) && void 0 !== YB ? YB : []
+           return null !== (ye = null === (be = Uf(ee, ie, He, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [])) || void 0 === be ? void 0 : be.unmade) && void 0 !== ye ? ye : []
```

#### 827. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10855` → after: `L10855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10855) · [Before (L10855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10855)

```diff
-           if (null === BB || null === GB || void 0 === GB || void 0 === GB.declaredNames || BB.length > wQ.o) return null;
+           if (null === ee || null === He || void 0 === He || void 0 === He.declaredNames || ee.length > mM.t) return null;
```

#### 828. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10858` → after: `L10858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10858) · [Before (L10858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10858)

```diff
-             for (const BB of null !== (yB = qB.params) && void 0 !== yB ? yB : []) {
+             for (const ee of null !== (Fe = Te.params) && void 0 !== Fe ? Fe : []) {
```

#### 829. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10862` → after: `L10862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10862) · [Before (L10862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10862)

```diff
-           for (const [, qB, ZB] of(null !== OB && void 0 !== OB ? OB : "").matchAll(/\b([A-Za-z_$][\w$]*)\s*\(([^()]*)\)/g)) {
+           for (const [, Te, pe] of(null !== ie && void 0 !== ie ? ie : "").matchAll(/\b([A-Za-z_$][\w$]*)\s*\(([^()]*)\)/g)) {
```

#### 830. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10877` → after: `L10877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10877) · [Before (L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10877)

```diff
-           for (const qB of (0, EQ.f)(MB, sl, EQ.p)) {
+           for (const Te of (0, lM.g)(oe, ef, lM.n)) {
```

#### 831. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10888` → after: `L10888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10888) · [Before (L10888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10888)

```diff
-               line: "flag" === OB ? `let ${BB} = false` : `const ${BB} = {}`,
+               line: "flag" === ie ? `let ${ee} = false` : `const ${ee} = {}`,
```

#### 832. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10890` → after: `L10890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10890) · [Before (L10890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10890)

```diff
-                 joinLine: `${BB}[${JB}] = api.now()`
+                 joinLine: `${ee}[${Je}] = api.now()`
```

#### 833. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10892` → after: `L10892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10892) · [Before (L10892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10892)

```diff
-             }) : 0 === (0, EQ.f)(MB, new RegExp(`${BB.replace(/\$/g,"\\$")}\\s*\\(`), EQ.p).length && lB.push(BB)
+             }) : 0 === (0, lM.g)(oe, new RegExp(`${ee.replace(/\$/g,"\\$")}\\s*\\(`), lM.n).length && qe.push(ee)
```

#### 834. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10899` → after: `L10899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10899) · [Before (L10899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10899)

```diff
-         const Dp = 2, Qp = /death|died|dead|die\b|killed|respawn|fail|(?:^|[^c])lose|lost|fell(?!ow)|(?:^|[^a])void|caught/i, op = [{
+         const Ff = 2, Jf = /death|died|dead|die\b|killed|respawn|fail|(?:^|[^c])lose|lost|fell(?!ow)|(?:^|[^a])void|caught/i, of = [{
```

#### 835. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10917` → after: `L10917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10917) · [Before (L10917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10917)

```diff
-           alreadyLogged: new RegExp(`${Qp.source}|mob`, "i"),
+           alreadyLogged: new RegExp(`${Jf.source}|mob`, "i"),
```

#### 836. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10934` → after: `L10934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10934) · [Before (L10934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10934)

```diff
-           toValue: BB => `String(${BB[2]})`,
+           toValue: ee => `String(${ee[2]})`,
```

#### 837. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10943` → after: `L10943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10943) · [Before (L10943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10943)

```diff
-           toValue: BB => `String(${BB[1]})`,
+           toValue: ee => `String(${ee[1]})`,
```

#### 838. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10952` → after: `L10952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10952) · [Before (L10952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10952)

```diff
-           toValue: BB => `String(${BB[1]})`,
+           toValue: ee => `String(${ee[1]})`,
```

#### 839. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10961` → after: `L10961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10961) · [Before (L10961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10961)

```diff
-           toValue: BB => `${BB[2]} ? "passed" : "failed"`,
+           toValue: ee => `${ee[2]} ? "passed" : "failed"`,
```

#### 840. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10970` → after: `L10970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10970) · [Before (L10970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10970)

```diff
-           toValue: BB => `String(${BB[5]})`,
+           toValue: ee => `String(${ee[5]})`,
```

#### 841. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L10993` → after: `L10993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R10993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L10993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L10993) · [Before (L10993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L10993)

```diff
-             JB = [...BB.callbacks, ...null !== (YB = BB.functions) && void 0 !== YB ? YB : []].find((BB => {
+             Je = [...ee.callbacks, ...null !== (ye = ee.functions) && void 0 !== ye ? ye : []].find((ee => {
```

#### 842. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11000-L11002` → after: `L11000-L11002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11000-L11002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11000-L11002) · [Before (L11000-L11002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11000-L11002)

```diff
-           const MB = yB.parts.map(((BB, OB) => 0 === OB ? BB : BB.replace(/^\]\./, "]?.").replace(/^\]\[/, "]?.["))).join(GB),
-             PB = new Set([...null !== (DB = JB.params) && void 0 !== DB ? DB : [], ...null !== (QB = null === (oB = JB.body) || void 0 === oB ? void 0 : oB.locals) && void 0 !== QB ? QB : []]),
-             zB = (0, EQ.f)(yB.parts.join(" "), jp, EQ.p).map((BB => {
+           const oe = Fe.parts.map(((ee, ie) => 0 === ie ? ee : ee.replace(/^\]\./, "]?.").replace(/^\]\[/, "]?.["))).join(He),
+             Re = new Set([...null !== (be = Je.params) && void 0 !== be ? be : [], ...null !== (Me = null === (Ke = Je.body) || void 0 === Ke ? void 0 : Ke.locals) && void 0 !== Me ? Me : []]),
+             ke = (0, lM.g)(Fe.parts.join(" "), Rf, lM.n).map((ee => {
```

#### 843. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11006-L11007` → after: `L11006-L11007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11006-L11007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11006-L11007) · [Before (L11006-L11007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11006-L11007)

```diff
-             lB = `${/^[\w$.?[\]()]+$/.test(MB)?MB:`(${MB})`} || Date.now()`;
-           return zB.some((BB => BB === GB || PB.has(BB))) || Gp(lB, OB, BB).length > 0 ? jB : {
+             qe = `${/^[\w$.?[\]()]+$/.test(oe)?oe:`(${oe})`} || Date.now()`;
+           return ke.some((ee => ee === He || Re.has(ee))) || Kf(qe, ie, ee).length > 0 ? Ue : {
```

#### 844. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11028` → after: `L11028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11028) · [Before (L11028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11028)

```diff
-           const oB = [arguments.length > 5 && void 0 !== arguments[5] && arguments[5] ? `api.getPosition(${GB})` : null === QB ? null : "null", QB].filter((BB => null !== BB)),
+           const Ke = [arguments.length > 5 && void 0 !== arguments[5] && arguments[5] ? `api.getPosition(${He})` : null === Me ? null : "null", Me].filter((ee => null !== ee)),
```

#### 845. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11032` → after: `L11032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11032) · [Before (L11032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11032)

```diff
-             code: `api.registerAnalyticsEvent(${[GB,`"${YB}"`,DB,"null",jB.code,...oB].join(", ")})`,
+             code: `api.registerAnalyticsEvent(${[He,`"${ye}"`,be,"null",Ue.code,...Ke].join(", ")})`,
```

#### 846. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11041` → after: `L11041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11041) · [Before (L11041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11041)

```diff
-           for (const DB of null !== (YB = BB.functions) && void 0 !== YB ? YB : []) {
+           for (const be of null !== (ye = ee.functions) && void 0 !== ye ? ye : []) {
```

#### 847. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11043` → after: `L11043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11043) · [Before (L11043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11043)

```diff
-             const OB = (0, wQ.u)(DB.name),
+             const ie = (0, mM.D)(be.name),
```

#### 848. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11056` → after: `L11056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11056) · [Before (L11056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11056)

```diff
-               code: `api.registerAnalyticsEvent(${jB[0]}, "${QB}", String(${yB[0]}), null, ${JB.code})`,
+               code: `api.registerAnalyticsEvent(${Ue[0]}, "${Me}", String(${Fe[0]}), null, ${Je.code})`,
```

#### 849. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11067` → after: `L11067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11067) · [Before (L11067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11067)

```diff
-             return (null !== (OB = null !== (GB = BB[1]) && void 0 !== GB ? GB : BB[2]) && void 0 !== OB ? OB : BB[3]).toUpperCase()
+             return (null !== (ie = null !== (He = ee[1]) && void 0 !== He ? He : ee[2]) && void 0 !== ie ? ie : ee[3]).toUpperCase()
```

#### 850. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11072` → after: `L11072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11072) · [Before (L11072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11072)

```diff
-           return BB.replace(new RegExp(`(?:${Np.source})(?:[ \\t]*[:\\-\u2013\u2014](?=[ \\t]))?`, "gi"), "").replace(/[ \t]+([.,;:!?)])/g, "$1").replace(/(\S)[ \t]{2,}/g, "$1 ").trim()
+           return ee.replace(new RegExp(`(?:${gf.source})(?:[ \\t]*[:\\-\u2013\u2014](?=[ \\t]))?`, "gi"), "").replace(/[ \t]+([.,;:!?)])/g, "$1").replace(/(\S)[ \t]{2,}/g, "$1 ").trim()
```

#### 851. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11086` → after: `L11086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11086) · [Before (L11086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11086)

```diff
-           for (const oB of YB.split(/\r?\n/)) /^\s*(?:[-*+]|\d+[.)])\s+/.test(oB) || 0 === DB.length || "" === oB.trim() ? DB.push(oB) : DB[DB.length - 1] += `\n${oB}`;
+           for (const Ke of ye.split(/\r?\n/)) /^\s*(?:[-*+]|\d+[.)])\s+/.test(Ke) || 0 === be.length || "" === Ke.trim() ? be.push(Ke) : be[be.length - 1] += `\n${Ke}`;
```

#### 852. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11098` → after: `L11098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11098) · [Before (L11098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11098)

```diff
-             text: `${GB("Paste this line, and Studio can show you")} ${OB[0].sees}.`,
+             text: `${He("Paste this line, and Studio can show you")} ${ie[0].sees}.`,
```

#### 853. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11105` → after: `L11105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11105) · [Before (L11105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11105)

```diff
-           return [BB.id, BB.callback, `\`${BB.code}\``, BB.sees]
+           return [ee.id, ee.callback, `\`${ee.code}\``, ee.sees]
```

#### 854. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11185` → after: `L11185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11185) · [Before (L11185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11185)

```diff
-             GB.set(ZB.to, [...null !== (QB = GB.get(ZB.to)) && void 0 !== QB ? QB : [], ZB]), YB.set(ZB.from, (null !== (oB = YB.get(ZB.from)) && void 0 !== oB ? oB : 0) + 1), DB.set(ZB.from, ZB.fromPlayers)
+             He.set(pe.to, [...null !== (Me = He.get(pe.to)) && void 0 !== Me ? Me : [], pe]), ye.set(pe.from, (null !== (Ke = ye.get(pe.from)) && void 0 !== Ke ? Ke : 0) + 1), be.set(pe.from, pe.fromPlayers)
```

#### 855. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11202` → after: `L11202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11202) · [Before (L11202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11202)

```diff
-                 const BB = null !== (QB = GB.get(YB)) && void 0 !== QB ? QB : [];
+                 const ee = null !== (Me = He.get(ye)) && void 0 !== Me ? Me : [];
```

#### 856. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11218` → after: `L11218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11218) · [Before (L11218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11218)

```diff
-             if (null !== BB) MB.set(ZB.from, [...null !== (PB = MB.get(ZB.from)) && void 0 !== PB ? PB : [], {
+             if (null !== ee) oe.set(pe.from, [...null !== (Re = oe.get(pe.from)) && void 0 !== Re ? Re : [], {
```

#### 857. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11226-L11227` → after: `L11226-L11227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11226-L11227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11226-L11227) · [Before (L11226-L11227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11226-L11227)

```diff
-               const GB = null !== (OB = MB.get(BB.from)) && void 0 !== OB ? OB : [];
-               return GB.some((OB => OB.edge === BB)) ? GB : null
+               const He = null !== (ie = oe.get(ee.from)) && void 0 !== ie ? ie : [];
+               return He.some((ie => ie.edge === ee)) ? He : null
```

#### 858. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11232` → after: `L11232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11232) · [Before (L11232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11232)

```diff
-               return null === GB ? 1 === OB : GB[0].edge === BB
+               return null === He ? 1 === ie : He[0].edge === ee
```

#### 859. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11236` → after: `L11236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11236) · [Before (L11236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11236)

```diff
-               const QB = null !== (OB = YB.get(BB.from)) && void 0 !== OB ? OB : 1,
+               const Me = null !== (ie = ye.get(ee.from)) && void 0 !== ie ? ie : 1,
```

#### 860. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11240` → after: `L11240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11240) · [Before (L11240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11240)

```diff
-                 PB = Math.max(BB.players, null !== (GB = null === MB || void 0 === MB ? void 0 : MB.edge.players) && void 0 !== GB ? GB : 0);
+                 Re = Math.max(ee.players, null !== (He = null === oe || void 0 === oe ? void 0 : oe.edge.players) && void 0 !== He ? He : 0);
```

#### 861. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11257` → after: `L11257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11257) · [Before (L11257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11257)

```diff
-                 depth: null !== (DB = jB.get(BB.from)) && void 0 !== DB ? DB : Number.MAX_SAFE_INTEGER
+                 depth: null !== (be = Ue.get(ee.from)) && void 0 !== be ? be : Number.MAX_SAFE_INTEGER
```

#### 862. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11270` → after: `L11270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11270) · [Before (L11270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11270)

```diff
-           return null !== (GB = [...BB].sort(OB)[0]) && void 0 !== GB ? GB : null
+           return null !== (He = [...ee].sort(ie)[0]) && void 0 !== He ? He : null
```

#### 863. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11275` → after: `L11275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11275) · [Before (L11275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11275)

```diff
-           const GB = (0, EQ.f)(BB, OB, (OB => !OB[0].startsWith("-") || !/[\p{L}\p{N}]$/u.test(BB.slice(0, OB.index))))[0];
+           const He = (0, lM.g)(ee, ie, (ie => !ie[0].startsWith("-") || !/[\p{L}\p{N}]$/u.test(ee.slice(0, ie.index))))[0];
```

#### 864. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11278` → after: `L11278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11278) · [Before (L11278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11278)

```diff
-             shape: `${BB.slice(0,GB.index)}#${BB.slice(GB.index+GB[0].length)}`
+             shape: `${ee.slice(0,He.index)}#${ee.slice(He.index+He[0].length)}`
```

#### 865. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11294` → after: `L11294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11294) · [Before (L11294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11294)

```diff
-                 return new Set(OB).size === OB.length ? OB : null
+                 return new Set(ie).size === ie.length ? ie : null
```

#### 866. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11393` → after: `L11393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11393) · [Before (L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11393)

```diff
-           return QB.shape === oB.shape && jB.to > jB.from ? jB : null
+           return Me.shape === Ke.shape && Ue.to > Ue.from ? Ue : null
```

#### 867. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11404-L11405` → after: `L11404-L11405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11404-L11405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11404-L11405) · [Before (L11404-L11405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11404-L11405)

```diff
-             jB = (null !== (DB = null === BB || void 0 === BB ? void 0 : BB.steps) && void 0 !== DB ? DB : []).filter((BB => BB.isChain && !wp(BB.from, BB.to))),
-             yB = Math.max(0, ...(null !== (QB = null === BB || void 0 === BB ? void 0 : BB.steps) && void 0 !== QB ? QB : []).map((BB => BB.fromPlayers)));
+             Ue = (null !== (be = null === ee || void 0 === ee ? void 0 : ee.steps) && void 0 !== be ? be : []).filter((ee => ee.isChain && !Sf(ee.from, ee.to))),
+             Fe = Math.max(0, ...(null !== (Me = null === ee || void 0 === ee ? void 0 : ee.steps) && void 0 !== Me ? Me : []).map((ee => ee.fromPlayers)));
```

#### 868. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11418` → after: `L11418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11418) · [Before (L11418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11418)

```diff
-               startPlayers: null !== (JB = null === (MB = pB.start) || void 0 === MB ? void 0 : MB.players) && void 0 !== JB ? JB : yB
+               startPlayers: null !== (Je = null === (oe = fe.start) || void 0 === oe ? void 0 : oe.players) && void 0 !== Je ? Je : Fe
```

#### 869. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11444` → after: `L11444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11444) · [Before (L11444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11444)

```diff
-           const oB = null !== (QB = null === GB || void 0 === GB ? void 0 : GB.mostAboveMedian) && void 0 !== QB ? QB : null,
+           const Ke = null !== (Me = null === He || void 0 === He ? void 0 : He.mostAboveMedian) && void 0 !== Me ? Me : null,
```

#### 870. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11484` → after: `L11484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11484) · [Before (L11484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11484)

```diff
-           return new Set((null !== (OB = null === (GB = BB.worldCode) || void 0 === GB ? void 0 : GB.events) && void 0 !== OB ? OB : []).filter((BB => BB.isLiteralType && !0 === BB.isUntimed)).map((BB => BB.eventType)))
+           return new Set((null !== (ie = null === (He = ee.worldCode) || void 0 === He ? void 0 : He.events) && void 0 !== ie ? ie : []).filter((ee => ee.isLiteralType && !0 === ee.isUntimed)).map((ee => ee.eventType)))
```

#### 871. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11490` → after: `L11490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11490) · [Before (L11490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11490)

```diff
-           const oB = null !== (OB = null === (GB = BB.playerTotals) || void 0 === GB ? void 0 : GB.playerTotals) && void 0 !== OB ? OB : {},
+           const Ke = null !== (ie = null === (He = ee.playerTotals) || void 0 === He ? void 0 : He.playerTotals) && void 0 !== ie ? ie : {},
```

#### 872. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11493` → after: `L11493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11493) · [Before (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11493)

```diff
-           return Gy(null !== (YB = null === (DB = BB.customEvents) || void 0 === DB ? void 0 : DB.byEvent) && void 0 !== YB ? YB : {}, ((BB, OB, GB, YB) => {
+           return HF(null !== (ye = null === (be = ee.customEvents) || void 0 === be ? void 0 : be.byEvent) && void 0 !== ye ? ye : {}, ((ee, ie, He, ye) => {
```

#### 873. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11498-L11499` → after: `L11498-L11499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11498-L11499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11498-L11499) · [Before (L11498-L11499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11498-L11499)

```diff
-               NB = null !== (DB = null === (JB = oB[BB]) || void 0 === JB || null === (MB = JB[OB]) || void 0 === MB ? void 0 : MB[GB]) && void 0 !== DB ? DB : null,
-               RB = [...null !== (PB = null === ZB || void 0 === ZB ? void 0 : ZB.categories) && void 0 !== PB ? PB : [], {
+               Xe = null !== (be = null === (Je = Ke[ee]) || void 0 === Je || null === (oe = Je[ie]) || void 0 === oe ? void 0 : oe[He]) && void 0 !== be ? be : null,
+               ze = [...null !== (Re = null === pe || void 0 === pe ? void 0 : pe.categories) && void 0 !== Re ? Re : [], {
```

#### 874. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11505` → after: `L11505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11505) · [Before (L11505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11505)

```diff
-                 return (null !== (GB = OB.players) && void 0 !== GB ? GB : -1) - (null !== (YB = BB.players) && void 0 !== YB ? YB : -1)
+                 return (null !== (He = ie.players) && void 0 !== He ? He : -1) - (null !== (ye = ee.players) && void 0 !== ye ? ye : -1)
```

#### 875. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11510-L11511` → after: `L11510-L11511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11510-L11511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11510-L11511) · [Before (L11510-L11511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11510-L11511)

```diff
-               timeMs: Math.min(null !== (zB = null === ZB || void 0 === ZB ? void 0 : ZB.timeMs) && void 0 !== zB ? zB : 1 / 0, YB.averageTimeMs),
-               players: null === NB ? null !== (lB = null === ZB || void 0 === ZB ? void 0 : ZB.players) && void 0 !== lB ? lB : null : (null !== (pB = null === ZB || void 0 === ZB ? void 0 : ZB.players) && void 0 !== pB ? pB : 0) + NB,
+               timeMs: Math.min(null !== (ke = null === pe || void 0 === pe ? void 0 : pe.timeMs) && void 0 !== ke ? ke : 1 / 0, ye.averageTimeMs),
+               players: null === Xe ? null !== (qe = null === pe || void 0 === pe ? void 0 : pe.players) && void 0 !== qe ? qe : null : (null !== (fe = null === pe || void 0 === pe ? void 0 : pe.players) && void 0 !== fe ? fe : 0) + Xe,
```

#### 876. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11520-L11521` → after: `L11520-L11521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11520-L11521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11520-L11521) · [Before (L11520-L11521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11520-L11521)

```diff
-           const jB = null !== (YB = null === (DB = BB.customEvents) || void 0 === DB ? void 0 : DB.byEvent) && void 0 !== YB ? YB : {},
-             yB = null !== (QB = null === (oB = BB.playerTotals) || void 0 === oB ? void 0 : oB.playerTotals) && void 0 !== QB ? QB : {},
+           const Ue = null !== (ye = null === (be = ee.customEvents) || void 0 === be ? void 0 : be.byEvent) && void 0 !== ye ? ye : {},
+             Fe = null !== (Me = null === (Ke = ee.playerTotals) || void 0 === Ke ? void 0 : Ke.playerTotals) && void 0 !== Me ? Me : {},
```

#### 877. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11529` → after: `L11529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11529) · [Before (L11529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11529)

```diff
-               players: null !== (YB = null === (DB = yB[BB]) || void 0 === DB || null === (QB = DB[OB]) || void 0 === QB ? void 0 : QB[GB]) && void 0 !== YB ? YB : null
+               players: null !== (ye = null === (be = Fe[ee]) || void 0 === be || null === (Me = be[ie]) || void 0 === Me ? void 0 : Me[He]) && void 0 !== ye ? ye : null
```

#### 878. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11536` → after: `L11536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11536) · [Before (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11536)

```diff
-               return (null !== (GB = OB.players) && void 0 !== GB ? GB : -1) - (null !== (YB = BB.players) && void 0 !== YB ? YB : -1) || MP(BB.eventType, BB.eventValue).localeCompare(MP(OB.eventType, OB.eventValue))
+               return (null !== (He = ie.players) && void 0 !== He ? He : -1) - (null !== (ye = ee.players) && void 0 !== ye ? ye : -1) || kR(ee.eventType, ee.eventValue).localeCompare(kR(ie.eventType, ie.eventValue))
```

#### 879. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11543` → after: `L11543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11543) · [Before (L11543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11543)

```diff
-               return [JP(BB.gameCategory), BB.eventType, JP(BB.eventValue), null === BB.players ? TM : `${vM(BB.players)} player${1===BB.players?"":"s"}`, vM(null === YB || void 0 === YB ? void 0 : YB.averageQuantity, 1), MB.has(BB.eventType) ? TM : sM(null === YB || void 0 === Y … [truncated]
+               return [RR(ee.gameCategory), ee.eventType, RR(ee.eventValue), null === ee.players ? Io : `${ro(ee.players)} player${1===ee.players?"":"s"}`, ro(null === ye || void 0 === ye ? void 0 : ye.averageQuantity, 1), oe.has(ee.eventType) ? Io : Qo(null === ye || void 0 === y … [truncated]
```

#### 880. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11546-L11547` → after: `L11546-L11547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11546-L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11546-L11547) · [Before (L11546-L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11546-L11547)

```diff
-             ZB = ["### Custom events", "", `Events my code sends, by game category, type and value. Players: different players who sent it since logging began, all-time, not this week${null===qB?"":` (last ${jP(qB.days)}: ${vM(qB.uniquePlayers)} unique players)`}; a count, never  … [truncated]
-           return PB.length > OB.eventCount && ZB.push("", PB.length - OB.eventCount + " events with fewer players aren't listed."), GB.length > 0 && ZB.push("", `Events whose values count up, as checkpoint 1, 2, 3, with how many players sent each value since logging began (counts … [truncated]
+             pe = ["### Custom events", "", `Events my code sends, by game category, type and value. Players: different players who sent it since logging began, all-time, not this week${null===Te?"":` (last ${JR(Te.days)}: ${ro(Te.uniquePlayers)} unique players)`}; a count, never  … [truncated]
+           return Re.length > ie.eventCount && pe.push("", Re.length - ie.eventCount + " events with fewer players aren't listed."), He.length > 0 && pe.push("", `Events whose values count up, as checkpoint 1, 2, 3, with how many players sent each value since logging began (counts … [truncated]
```

#### 881. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11555-L11556` → after: `L11555-L11556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11555-L11556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11555-L11556) · [Before (L11555-L11556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11555-L11556)

```diff
-               return 0 === OB ? `${GB} (${vM(YB)} players)` : `${GB} (${vM(YB)})`
-             })), DB = YB.length > OB ? [...YB.slice(0, OB - 1), "\u2026", YB[YB.length - 1]] : YB, QB = GB[0], oB = GB[GB.length - 1], jB = "" === BB.gameCategory ? BB.eventType : `${BB.eventType} in ${BB.gameCategory}`, yB = [`- ${jB}: ${DB.join(" \u2192 ")}.`, `${vM(oB.players) … [truncated]
+               return 0 === ie ? `${He} (${ro(ye)} players)` : `${He} (${ro(ye)})`
+             })), be = ye.length > ie ? [...ye.slice(0, ie - 1), "\u2026", ye[ye.length - 1]] : ye, Me = He[0], Ke = He[He.length - 1], Ue = "" === ee.gameCategory ? ee.eventType : `${ee.eventType} in ${ee.gameCategory}`, Fe = [`- ${Ue}: ${be.join(" \u2192 ")}.`, `${ro(Ke.players) … [truncated]
```

#### 882. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11569` → after: `L11569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11569) · [Before (L11569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11569)

```diff
-               yB.push(`More players sent a later value than ${BB}, so the game doesn't always log ${1===zB.length?"it":"them"}: players who sent a later value went on, so they aren't counted as lost there.`)
+               Fe.push(`More players sent a later value than ${ee}, so the game doesn't always log ${1===ke.length?"it":"them"}: players who sent a later value went on, so they aren't counted as lost there.`)
```

#### 883. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11579` → after: `L11579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11579) · [Before (L11579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11579)

```diff
-           return `of ${vM(OB)} players${DB} at ${GB}, ${vM(QB)} reached ${YB} (${oB}%) and ${vM(OB-QB)} didn't (${100-oB}% of those at ${GB}${GP(100-oB)})`
+           return `of ${ro(ie)} players${be} at ${He}, ${ro(Me)} reached ${ye} (${Ke}%) and ${ro(ie-Me)} didn't (${100-Ke}% of those at ${He}${bR(100-Ke)})`
```

#### 884. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11586` → after: `L11586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11586) · [Before (L11586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11586)

```diff
-           return `the ${vM(YB)} who didn't are ${DB>0&&DB<.5?"under 1%":`${oq(DB)}%`} of them`
+           return `the ${ro(ye)} who didn't are ${be>0&&be<.5?"under 1%":`${oT(be)}%`} of them`
```

#### 885. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11595` → after: `L11595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11595) · [Before (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11595)

```diff
-           return /^-?\d+$/.test(OB) ? `${BB} ${OB}` : `${BB}: ${OB}`
+           return /^-?\d+$/.test(ie) ? `${ee} ${ie}` : `${ee}: ${ie}`
```

#### 886. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11601` → after: `L11601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11601) · [Before (L11601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11601)

```diff
-           return `${GB} \u2192 ${BB.to.value}: ${Dq(BB.reached,BB.from.players,GB,BB.reached>BB.to.players?`${YB} or a later one`:YB)}`
+           return `${He} \u2192 ${ee.to.value}: ${FT(ee.reached,ee.from.players,He,ee.reached>ee.to.players?`${ye} or a later one`:ye)}`
```

#### 887. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11605` → after: `L11605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11605) · [Before (L11605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11605)

```diff
-           return `Players who didn't reach a ${BB} may still be playing other parts: say they "didn't reach" it, never that they quit, left or stopped.`
+           return `Players who didn't reach a ${ee} may still be playing other parts: say they "didn't reach" it, never that they quit, left or stopped.`
```

#### 888. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11609` → after: `L11609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11609) · [Before (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11609)

```diff
-           return null !== BB && BB === OB ? [`Most players not reaching the next ${GB}, and the lowest share: ${YB(BB)}.`] : [...null === BB ? [] : [`Most players not reaching the next ${GB}: ${YB(BB)}.`], ...null === OB ? [] : [`Lowest share reaching the next ${GB}: ${YB(OB)}.`] … [truncated]
+           return null !== ee && ee === ie ? [`Most players not reaching the next ${He}, and the lowest share: ${ye(ee)}.`] : [...null === ee ? [] : [`Most players not reaching the next ${He}: ${ye(ee)}.`], ...null === ie ? [] : [`Lowest share reaching the next ${He}: ${ye(ie)}.`] … [truncated]
```

#### 889. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11638` → after: `L11638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11638) · [Before (L11638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11638)

```diff
-               return null === BB ? [TM, TM, TM] : [`${xD(BB.median)}${OB}`, xD(BB.p25), xD(BB.p75)]
+               return null === ee ? [Io, Io, Io] : [`${eM(ee.median)}${ie}`, eM(ee.p25), eM(ee.p75)]
```

#### 890. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11644` → after: `L11644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11644) · [Before (L11644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11644)

```diff
-               return QB(GB, ` at ${DB}${GB.playerCount<cM?" (few players)":""}`)
+               return Me(He, ` at ${be}${He.playerCount<So?" (few players)":""}`)
```

#### 891. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11666` → after: `L11666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11666) · [Before (L11666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11666)

```diff
-                     DB = YB.length > 0 ? YB : GB;
+                     be = ye.length > 0 ? ye : He;
```

#### 892. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11668` → after: `L11668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11668) · [Before (L11668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11668)

```diff
-                     early: null !== (OB = DB[0]) && void 0 !== OB ? OB : null,
+                     early: null !== (ie = be[0]) && void 0 !== ie ? ie : null,
```

#### 893. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11672` → after: `L11672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11672) · [Before (L11672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11672)

```diff
-               return [JP(DB), yB, JP(JB), `${vM(PB.playerCount)}${PB.playerCount<cM?" (few players)":""}`, vM(PB.count), xD(PB.sum), ...QB(PB), xD(PB.max), ...QB(lB), ...oB(pB, qB), ...oB(pB, ZB)]
+               return [RR(be), Fe, RR(Je), `${ro(Re.playerCount)}${Re.playerCount<So?" (few players)":""}`, ro(Re.count), eM(Re.sum), ...Me(Re), eM(Re.max), ...Me(qe), ...Ke(fe, Te), ...Ke(fe, pe)]
```

#### 894. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11676` → after: `L11676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11676) · [Before (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11676)

```diff
-             yB.push("", 1 === BB ? "1 event fewer players sent a number for isn't listed." : `${BB} events fewer players sent a number for aren't listed.`)
+             Fe.push("", 1 === ee ? "1 event fewer players sent a number for isn't listed." : `${ee} events fewer players sent a number for aren't listed.`)
```

#### 895. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11682` → after: `L11682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11682) · [Before (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11682)

```diff
-           return `${BB.from} \u2192 ${BB.to}`
+           return `${ee.from} \u2192 ${ee.to}`
```

#### 896. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11686` → after: `L11686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11686) · [Before (L11686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11686)

```diff
-           return BB.isOrLater ? `${BB.to} or a later one` : BB.to
+           return ee.isOrLater ? `${ee.to} or a later one` : ee.to
```

#### 897. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11695` → after: `L11695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11695) · [Before (L11695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11695)

```diff
-           return `Players who got both took a median ${sM(OB)} min from ${BB.from} to ${BB.to}.`
+           return `Players who got both took a median ${Qo(ie)} min from ${ee.from} to ${ee.to}.`
```

#### 898. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11707` → after: `L11707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11707) · [Before (L11707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11707)

```diff
-             JB = ["### Event flow: steps between events", "", `${"saved"===YB.source?"The creator's event flow":"An event flow built for this report from the game's busiest events, joined in the order most players got them"}, over players who first got its starting events in the  … [truncated]
+             Je = ["### Event flow: steps between events", "", `${"saved"===ye.source?"The creator's event flow":"An event flow built for this report from the game's busiest events, joined in the order most players got them"}, over players who first got its starting events in the  … [truncated]
```

#### 899. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11711` → after: `L11711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11711) · [Before (L11711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11711)

```diff
-                   YB = [`- ${zq(BB)}: ${vM(Math.min(BB.players,BB.fromPlayers))} of ${vM(BB.fromPlayers)} players${OB} (${GB}%) got ${BB.to} after it.`, BB.nextStepCount > 1 ? `It is one of ${BB.nextStepCount} ways on from ${BB.from}, so the other ${vM(BB.lost)} aren't lost playe … [truncated]
+                   ye = [`- ${pT(ee)}: ${ro(Math.min(ee.players,ee.fromPlayers))} of ${ro(ee.fromPlayers)} players${ie} (${He}%) got ${ee.to} after it.`, ee.nextStepCount > 1 ? `It is one of ${ee.nextStepCount} ways on from ${ee.from}, so the other ${ro(ee.lost)} aren't lost playe … [truncated]
```

#### 900. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11714-L11715` → after: `L11714-L11715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11714-L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11714-L11715) · [Before (L11714-L11715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11714-L11715)

```diff
-               const GB = [`- ${zq(BB)}: ${pq(BB,OB)}.`];
-               null !== BB.later && GB.push(BB.isSkipped ? `More of them reached ${BB.later.to} (${vM(BB.later.players)}) than ${BB.to} itself (${vM(BB.toPlayers)}), so ${BB.to} isn't always logged: players who skip it aren't lost there.` : `${vM(BB.later.players)} of the ${vM(BB. … [truncated]
+               const He = [`- ${pT(ee)}: ${zT(ee,ie)}.`];
+               null !== ee.later && He.push(ee.isSkipped ? `More of them reached ${ee.later.to} (${ro(ee.later.players)}) than ${ee.to} itself (${ro(ee.toPlayers)}), so ${ee.to} isn't always logged: players who skip it aren't lost there.` : `${ro(ee.later.players)} of the ${ro(ee. … [truncated]
```

#### 901. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11717` → after: `L11717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11717) · [Before (L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11717)

```diff
-               return null !== BB.start && BB.start.name !== BB.from && null !== YB && GB.push(`Of the ${vM(BB.start.players)} who started at ${BB.start.name}, ${xM(100*Math.min(1,BB.players/BB.start.players))} reached ${lq(BB)}; ${YB}.`), null !== BB.medianDeltaMs && GB.push(qq(B … [truncated]
+               return null !== ee.start && ee.start.name !== ee.from && null !== ye && He.push(`Of the ${ro(ee.start.players)} who started at ${ee.start.name}, ${eR(100*Math.min(1,ee.players/ee.start.players))} reached ${XT(ee)}; ${ye}.`), null !== ee.medianDeltaMs && He.push(BT(e … [truncated]
```

#### 902. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11719` → after: `L11719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11719) · [Before (L11719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11719)

```diff
-           return oB.length > yB.length && JB.push(`- ${oB.length-yB.length} steps that keep more of their players aren't listed.`), null === DB && null === QB || JB.push(""), JB.push(...Mq(DB, QB, "step", (BB => `${zq(BB)}; ${pq(BB)}`))), JB
+           return Ke.length > Fe.length && Je.push(`- ${Ke.length-Fe.length} steps that keep more of their players aren't listed.`), null === be && null === Me || Je.push(""), Je.push(...fT(be, Me, "step", (ee => `${pT(ee)}; ${zT(ee)}`))), Je
```

#### 903. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11726` → after: `L11726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11726) · [Before (L11726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11726)

```diff
-               const YB = (null !== (GB = BB.categories) && void 0 !== GB ? GB : []).filter((BB => {
+               const ye = (null !== (He = ee.categories) && void 0 !== He ? He : []).filter((ee => {
```

#### 904. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11732` → after: `L11732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11732) · [Before (L11732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11732)

```diff
-                 DB = 0 === YB.length ? "" : 1 === YB.length ? ` (${YB[0].name} only)` : ` (${YB.map((BB=>{let{name:OB,players:GB}=BB;return null===GB?OB:`
+                 be = 0 === ye.length ? "" : 1 === ye.length ? ` (${ye[0].name} only)` : ` (${ye.map((ee=>{let{name:ie,players:He}=ee;return null===He?ie:`
```

#### 905. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11740` → after: `L11740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11740) · [Before (L11740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11740)

```diff
-               return `${BB.name}${null===BB.players?"":` ${vM(BB.players)}${0===OB?" players":""}`}${DB}`
+               return `${ee.name}${null===ee.players?"":` ${ro(ee.players)}${0===ie?" players":""}`}${be}`
```

#### 906. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11743` → after: `L11743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11743) · [Before (L11743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11743)

```diff
-           return `${OB.join(" > ")}${GB>0?` > ${GB} more`:""}`
+           return `${ie.join(" > ")}${He>0?` > ${He} more`:""}`
```

#### 907. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11748` → after: `L11748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11748) · [Before (L11748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11748)

```diff
-           const GB = (null !== (OB = BB.categories) && void 0 !== OB ? OB : [BB]).map((BB => {
+           const He = (null !== (ie = ee.categories) && void 0 !== ie ? ie : [ee]).map((ee => {
```

#### 908. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11756` → after: `L11756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11756) · [Before (L11756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11756)

```diff
-           return `${BB.name} (${YB===DB?YB:`${YB} to ${DB}`} min)`
+           return `${ee.name} (${ye===be?ye:`${ye} to ${be}`} min)`
```

#### 909. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11762` → after: `L11762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11762) · [Before (L11762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11762)

```diff
-           const GB = `Sessions per player: each player played ${vM(BB,2)} times on average in the last ${OB} days, their first time included`,
+           const He = `Sessions per player: each player played ${ro(ee,2)} times on average in the last ${ie} days, their first time included`,
```

#### 910. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11764-L11765` → after: `L11764-L11765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11764-L11765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11764-L11765) · [Before (L11764-L11765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11764-L11765)

```diff
-           if (YB < .05) return `${GB}, so almost nobody came back.`;
-           const DB = `${vM(YB,2)} ${"1"===vM(YB,2)?"play":"plays"} back per player`,
+           if (ye < .05) return `${He}, so almost nobody came back.`;
+           const be = `${ro(ye,2)} ${"1"===ro(ye,2)?"play":"plays"} back per player`,
```

#### 911. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11767` → after: `L11767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11767) · [Before (L11767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11767)

```diff
-           return QB < 10 ? `${GB}: ${DB}, so under ${QB} in 10 players came back, fewer still if some came back more than once.` : `${GB}: ${DB} on average, as some came back many times and others never.`
+           return Me < 10 ? `${He}: ${be}, so under ${Me} in 10 players came back, fewer still if some came back more than once.` : `${He}: ${be} on average, as some came back many times and others never.`
```

#### 912. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11774-L11776` → after: `L11774-L11776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11774-L11776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11774-L11776) · [Before (L11774-L11776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11774-L11776)

```diff
-           const QB = (0, ZO.Q)(DB.rankingWindow),
-             oB = (0, ZO.Q)(DB.previousRankingWindow),
-             jB = null !== (OB = null === (GB = BB.baseline) || void 0 === GB ? void 0 : GB.rankingWindow) && void 0 !== OB ? OB : null,
+           const Me = (0, Xi.J)(be.rankingWindow),
+             Ke = (0, Xi.J)(be.previousRankingWindow),
+             Ue = null !== (ie = null === (He = ee.baseline) || void 0 === He ? void 0 : He.rankingWindow) && void 0 !== ie ? ie : null,
```

#### 913. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11784-L11785` → after: `L11784-L11785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11784-L11785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11784-L11785) · [Before (L11784-L11785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11784-L11785)

```diff
-             MB = [`### Last ${yB} days`, "", Vq(QB.sessionsPerPlayer, yB), "", PP(["Metric", `Last ${yB} days`, `${yB} days before`, "Change on the days before", "Median custom game", "Against the median"], JB)],
-             PB = (null !== (YB = BB.game.ranks) && void 0 !== YB ? YB : []).map((BB => {
+             oe = [`### Last ${Fe} days`, "", tT(Me.sessionsPerPlayer, Fe), "", qR(["Metric", `Last ${Fe} days`, `${Fe} days before`, "Change on the days before", "Median custom game", "Against the median"], Je)],
+             Re = (null !== (ye = ee.game.ranks) && void 0 !== ye ? ye : []).map((ee => {
```

#### 914. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11790` → after: `L11790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11790) · [Before (L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11790)

```diff
-               return `${null===GB?"unranked":`#${GB}`} among ${function(BB){return"bloxd"===BB?"all games":"playerSchematic"===BB?"custom games":`${BB} games`}(OB)}`
+               return `${null===He?"unranked":`#${He}`} among ${function(ee){return"bloxd"===ee?"all games":"playerSchematic"===ee?"custom games":`${ee} games`}(ie)}`
```

#### 915. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11792` → after: `L11792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11792) · [Before (L11792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11792)

```diff
-           return PB.length > 0 && MB.push("", `Rank on the Bloxd homepage, scored over the last ${yB} days: ${PB.join(", ")}.`), MB
+           return Re.length > 0 && oe.push("", `Rank on the Bloxd homepage, scored over the last ${Fe} days: ${Re.join(", ")}.`), oe
```

#### 916. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11801` → after: `L11801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11801) · [Before (L11801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11801)

```diff
-             const OB = (0, ZO.e)(BB.ccu.ccu.data.length, BB.ccu);
+             const ie = (0, Xi.d)(ee.ccu.ccu.data.length, ee.ccu);
```

#### 917. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11806` → after: `L11806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11806) · [Before (L11806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11806)

```diff
-                 QB = null !== (YB = jB.get(DB)) && void 0 !== YB ? YB : [];
+                 Me = null !== (ye = Ue.get(be)) && void 0 !== ye ? ye : [];
```

#### 918. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11810-L11811` → after: `L11810-L11811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11810-L11811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11810-L11811) · [Before (L11810-L11811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11810-L11811)

```diff
-           const yB = new Map((null === oB ? [] : (0, ZO.W)(oB)).map((BB => [yP(BB.dateMs), BB]))),
-             JB = null !== (GB = null === oB || void 0 === oB ? void 0 : oB.endDay) && void 0 !== GB ? GB : [...jB.keys()].sort().pop();
+           const Fe = new Map((null === Ke ? [] : (0, Xi.R)(Ke)).map((ee => [oR(ee.dateMs), ee]))),
+             Je = null !== (He = null === Ke || void 0 === Ke ? void 0 : Ke.endDay) && void 0 !== He ? He : [...Ue.keys()].sort().pop();
```

#### 919. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11813` → after: `L11813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11813) · [Before (L11813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11813)

```diff
-           const MB = Date.parse(`${JB}T00:00:00Z`),
+           const oe = Date.parse(`${Je}T00:00:00Z`),
```

#### 920. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11819` → after: `L11819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11819) · [Before (L11819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11819)

```diff
-               PB.set(YB, [...null !== (GB = PB.get(YB)) && void 0 !== GB ? GB : [], OB])
+               Re.set(ye, [...null !== (He = Re.get(ye)) && void 0 !== He ? He : [], ie])
```

#### 921. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11830` → after: `L11830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11830) · [Before (L11830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11830)

```diff
-                 JB = null !== (YB = jB.get(QB)) && void 0 !== YB ? YB : [],
+                 Je = null !== (ye = Ue.get(Me)) && void 0 !== ye ? ye : [],
```

#### 922. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11836` → after: `L11836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11836) · [Before (L11836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11836)

```diff
-               }), [QB, vM(null === oB || void 0 === oB ? void 0 : oB.plays), vM(null === oB || void 0 === oB ? void 0 : oB.uniquePlayers), sM(null === oB || void 0 === oB ? void 0 : oB.avgSessionMs), vM(null === oB || void 0 === oB ? void 0 : oB.sessionsPerPlayer, 2), vM(zB, 1),  … [truncated]
+               }), [Me, ro(null === Ke || void 0 === Ke ? void 0 : Ke.plays), ro(null === Ke || void 0 === Ke ? void 0 : Ke.uniquePlayers), Qo(null === Ke || void 0 === Ke ? void 0 : Ke.avgSessionMs), ro(null === Ke || void 0 === Ke ? void 0 : Ke.sessionsPerPlayer, 2), ro(ke, 1),  … [truncated]
```

#### 923. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11838-L11839` → after: `L11838-L11839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11838-L11839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11838-L11839) · [Before (L11838-L11839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11838-L11839)

```diff
-             qB = null !== (YB = null === oB || void 0 === oB ? void 0 : oB.sessionsPerPlayerWindowDays) && void 0 !== YB ? YB : aM,
-             ZB = vM((null !== (DB = null === (QB = BB.ccu) || void 0 === QB ? void 0 : QB.bucketMinutes) && void 0 !== DB ? DB : 120) / 60, 1),
+             Te = null !== (ye = null === Ke || void 0 === Ke ? void 0 : Ke.sessionsPerPlayerWindowDays) && void 0 !== ye ? ye : jo,
+             pe = ro((null !== (be = null === (Me = ee.ccu) || void 0 === Me ? void 0 : Me.bucketMinutes) && void 0 !== be ? be : 120) / 60, 1),
```

#### 924. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11841` → after: `L11841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11841) · [Before (L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11841)

```diff
-           return [`### Day by day (last ${OB.days} days, UTC)`, "", `CCU is concurrent players: the average over the day, and the busiest ${ZB}-hour stretch. Sessions per player is over the ${qB} days ending that day.`, "", PP(["Date", "Plays", "Players", "Avg session (min)", `Se … [truncated]
+           return [`### Day by day (last ${ie.days} days, UTC)`, "", `CCU is concurrent players: the average over the day, and the busiest ${pe}-hour stretch. Sessions per player is over the ${Te} days ending that day.`, "", qR(["Date", "Plays", "Players", "Avg session (min)", `Se … [truncated]
```

#### 925. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11846-L11848` → after: `L11846-L11848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11846-L11848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11846-L11848) · [Before (L11846-L11848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11846-L11848)

```diff
-             YB = BB.reduce(((BB, OB) => OB.average > BB.average ? OB : BB)),
-             DB = `Players at once (CCU) on the last day listed, ${GB.day}: ${vM(GB.average,1)} on average, ${vM(GB.peak,1)} at the busiest.`;
-           return YB === GB ? `${DB} That is the busiest day of the last ${jP(OB)} too.` : `${DB} The busiest day of the last ${jP(OB)} was ${YB.day}, at ${vM(YB.average,1)} on average: that is a past day, not now.`
+             ye = ee.reduce(((ee, ie) => ie.average > ee.average ? ie : ee)),
+             be = `Players at once (CCU) on the last day listed, ${He.day}: ${ro(He.average,1)} on average, ${ro(He.peak,1)} at the busiest.`;
+           return ye === He ? `${be} That is the busiest day of the last ${JR(ie)} too.` : `${be} The busiest day of the last ${JR(ie)} was ${ye.day}, at ${ro(ye.average,1)} on average: that is a past day, not now.`
```

#### 926. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11856-L11857` → after: `L11856-L11857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11856-L11857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11856-L11857) · [Before (L11856-L11857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11856-L11857)

```diff
-           const YB = new Map((0, ZO.W)(OB).map((BB => [yP(BB.dateMs), BB.plays]))),
-             DB = Date.parse(`${OB.endDay}T00:00:00Z`),
+           const ye = new Map((0, Xi.R)(ie).map((ee => [oR(ee.dateMs), ee.plays]))),
+             be = Date.parse(`${ie.endDay}T00:00:00Z`),
```

#### 927. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11859` → after: `L11859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11859) · [Before (L11859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11859)

```diff
-             oB = Date.parse(`${QB}T00:00:00Z`),
+             Ke = Date.parse(`${Me}T00:00:00Z`),
```

#### 928. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11896` → after: `L11896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11896) · [Before (L11896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11896)

```diff
-           if (null === YB) return `The game was updated on ${OB}, too recently to see what it changed.`;
+           if (null === ye) return `The game was updated on ${ie}, too recently to see what it changed.`;
```

#### 929. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11903` → after: `L11903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11903) · [Before (L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11903)

```diff
-           return `The game was updated on ${OB}. Leaving out the update day, plays per day averaged ${vM(GB.average)} over the ${jP(GB.days)} before it and ${vM(YB.average)} over the ${jP(YB.days)} after it (${DB}): plays were ${QB}. The first table's change compares whole weeks  … [truncated]
+           return `The game was updated on ${ie}. Leaving out the update day, plays per day averaged ${ro(He.average)} over the ${JR(He.days)} before it and ${ro(ye.average)} over the ${JR(ye.days)} after it (${be}): plays were ${Me}. The first table's change compares whole weeks  … [truncated]
```

#### 930. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11908-L11909` → after: `L11908-L11909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11908-L11909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11908-L11909) · [Before (L11908-L11909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11908-L11909)

```diff
-           const QB = null !== (OB = null === (GB = BB.stats) || void 0 === GB ? void 0 : GB.sessionDurationHistogram) && void 0 !== OB ? OB : null,
-             oB = null === QB ? null : (0, ZO.V)(QB.sessionCounts, QB.maxBucketMinute);
+           const Me = null !== (ie = null === (He = ee.stats) || void 0 === He ? void 0 : He.sessionDurationHistogram) && void 0 !== ie ? ie : null,
+             Ke = null === Me ? null : (0, Xi.Q)(Me.sessionCounts, Me.maxBucketMinute);
```

#### 931. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11913` → after: `L11913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11913) · [Before (L11913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11913)

```diff
-             baselineCurve: null !== (YB = null === (DB = BB.baseline) || void 0 === DB ? void 0 : DB.dropoffCurve) && void 0 !== YB ? YB : null
+             baselineCurve: null !== (ye = null === (be = ee.baseline) || void 0 === be ? void 0 : be.dropoffCurve) && void 0 !== ye ? ye : null
```

#### 932. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11918` → after: `L11918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11918) · [Before (L11918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11918)

```diff
-           return 1 === BB ? "in the first minute (0 to 1 min)" : `between ${BB-1} and ${BB} minutes in`
+           return 1 === ee ? "in the first minute (0 to 1 min)" : `between ${ee-1} and ${ee} minutes in`
```

#### 933. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11928` → after: `L11928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11928) · [Before (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11928)

```diff
-           } = PB, pB = (0, ZO.j)(zB), qB = null === lB ? null : RG(lB), ZB = Aq.filter((BB => BB <= zB.maxBucketMinute)).map((BB => {
+           } = Re, fe = (0, Xi.k)(ke), Te = null === qe ? null : EH(qe), pe = WT.filter((ee => ee <= ke.maxBucketMinute)).map((ee => {
```

#### 934. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11932-L11933` → after: `L11932-L11933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11932-L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11932-L11933) · [Before (L11932-L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11932-L11933)

```diff
-             return [`${BB} min`, xM(YB), xM(void 0 === YB ? null : 100 - YB), xM(DB), YP(YB, DB)]
-           })), NB = (null !== (GB = null === (YB = zB.points[zB.maxBucketMinute]) || void 0 === YB ? void 0 : YB.percent) && void 0 !== GB ? GB : 0) > 50, RB = `${pB.medianMinute}${NB?"+":""} min`, WB = null !== (DB = null === qB || void 0 === qB ? void 0 : qB.medianMinute) && vo … [truncated]
+             return [`${ee} min`, eR(ye), eR(void 0 === ye ? null : 100 - ye), eR(be), MR(ye, be)]
+           })), Xe = (null !== (He = null === (ye = ke.points[ke.maxBucketMinute]) || void 0 === ye ? void 0 : ye.percent) && void 0 !== He ? He : 0) > 50, ze = `${fe.medianMinute}${Xe?"+":""} min`, Be = null !== (be = null === Te || void 0 === Te ? void 0 : Te.medianMinute) && vo … [truncated]
```

#### 935. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11935` → after: `L11935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11935) · [Before (L11935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11935)

```diff
-           null !== OB && void 0 !== OB && OB.mostEnded && VB.push(`- The minute that loses the most sessions: ${Fq(OB.mostEnded)}.`), null !== OB && void 0 !== OB && OB.mostAboveMedian && OB.mostAboveMedian.minute !== (null === (QB = OB.mostEnded) || void 0 === QB ? void 0 : QB.m … [truncated]
+           null !== ie && void 0 !== ie && ie.mostEnded && ge.push(`- The minute that loses the most sessions: ${LT(ie.mostEnded)}.`), null !== ie && void 0 !== ie && ie.mostAboveMedian && ie.mostAboveMedian.minute !== (null === (Me = ie.mostEnded) || void 0 === Me ? void 0 : Me.m … [truncated]
```

#### 936. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11952` → after: `L11952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11952) · [Before (L11952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11952)

```diff
-                 return `${OB} (${sM(GB)} min)`
+                 return `${ie} (${Qo(He)} min)`
```

#### 937. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11954` → after: `L11954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11954) · [Before (L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11954)

```diff
-             if (0 === QB.length) return `- No custom event happens in the first ${OB} minutes of a game on average: the earliest is ${oB(DB[0])}. So the events can't say why sessions end before then.`;
+             if (0 === Me.length) return `- No custom event happens in the first ${ie} minutes of a game on average: the earliest is ${Ke(be[0])}. So the events can't say why sessions end before then.`;
```

#### 938. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11956` → after: `L11956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11956) · [Before (L11956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11956)

```diff
-               yB = QB.length > Lq ? ` and ${QB.length-Lq} more` : "",
+               Fe = Me.length > vT ? ` and ${Me.length-vT} more` : "",
```

#### 939. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11963-L11965` → after: `L11963-L11965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11963-L11965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11963-L11965) · [Before (L11963-L11965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11963-L11965)

```diff
-               zB = PB ? ` None comes within ${GB} min, so no custom event is why sessions end in the minute losing the most.` : "";
-             return `- Custom events in the first ${OB} minutes of a game on average: ${jB.join(", ")}${yB}.${zB||JB}`
-           }(BB, Math.max(iq, null !== (oB = null === OB || void 0 === OB || null === (jB = OB.mostEnded) || void 0 === jB ? void 0 : jB.minute) && void 0 !== oB ? oB : 0), null !== (yB = null === OB || void 0 === OB || null === (JB = OB.mostEnded) || void 0 === JB ? void 0 : JB.m … [truncated]
+               ke = Re ? ` None comes within ${He} min, so no custom event is why sessions end in the minute losing the most.` : "";
+             return `- Custom events in the first ${ie} minutes of a game on average: ${Ue.join(", ")}${Fe}.${ke||Je}`
+           }(ee, Math.max(CT, null !== (Ke = null === ie || void 0 === ie || null === (Ue = ie.mostEnded) || void 0 === Ue ? void 0 : Ue.minute) && void 0 !== Ke ? Ke : 0), null !== (Fe = null === ie || void 0 === ie || null === (Je = ie.mostEnded) || void 0 === Je ? void 0 : Je.m … [truncated]
```

#### 940. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11971` → after: `L11971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11971) · [Before (L11971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11971)

```diff
-               return (null !== (GB = OB.players) && void 0 !== GB ? GB : -1) - (null !== (YB = BB.players) && void 0 !== YB ? YB : -1) || BB.timeMs - OB.timeMs
+               return (null !== (He = ie.players) && void 0 !== He ? He : -1) - (null !== (ye = ee.players) && void 0 !== ye ? ye : -1) || ee.timeMs - ie.timeMs
```

#### 941. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11980` → after: `L11980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11980) · [Before (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11980)

```diff
-               DB = 1 === OB.minute ? "the first minute" : `the first ${OB.minute} minutes`;
+               be = 1 === ie.minute ? "the first minute" : `the first ${ie.minute} minutes`;
```

#### 942. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11982` → after: `L11982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11982) · [Before (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11982)

```diff
-               return `- What kills players in ${DB} on average, the most first${YB.some((BB=>{let{categories:OB}=BB;return(null!==OB&&void 0!==OB?OB:[]).length>1}))?" (maps added up)":""}: ${Rq(YB)}.`
+               return `- What kills players in ${be} on average, the most first${ye.some((ee=>{let{categories:ie}=ee;return(null!==ie&&void 0!==ie?ie:[]).length>1}))?" (maps added up)":""}: ${OT(ye)}.`
```

#### 943. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11984-L11986` → after: `L11984-L11986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11984-L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11984-L11986) · [Before (L11984-L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11984-L11986)

```diff
-             const QB = GB.reduce(((BB, OB) => OB.timeMs < BB.timeMs ? OB : BB));
-             return `- No death comes in ${DB} on average: the earliest, ${Wq(QB)}, comes later, so dying or waiting to respawn isn't why sessions end then.`
-           }(BB, null !== (MB = null === OB || void 0 === OB ? void 0 : OB.mostEnded) && void 0 !== MB ? MB : null);
+             const Me = He.reduce(((ee, ie) => ie.timeMs < ee.timeMs ? ie : ee));
+             return `- No death comes in ${be} on average: the earliest, ${dT(Me)}, comes later, so dying or waiting to respawn isn't why sessions end then.`
+           }(ee, null !== (oe = null === ie || void 0 === ie ? void 0 : ie.mostEnded) && void 0 !== oe ? oe : null);
```

#### 944. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L11992-L11993` → after: `L11992-L11993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R11992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L11992-L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L11992-L11993) · [Before (L11992-L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L11992-L11993)

```diff
-             GB = null === OB.medianEndedPercent || null === OB.medianStillPercent ? "" : ` (median custom game: ${xM(OB.medianEndedPercent)} end, ${xM(OB.medianStillPercent)} keep playing)`;
-           return `${xM(OB.endedPercent)} of all sessions end in that minute and ${xM(OB.stillPercent)} keep playing${GB}`
+             He = null === ie.medianEndedPercent || null === ie.medianStillPercent ? "" : ` (median custom game: ${eR(ie.medianEndedPercent)} end, ${eR(ie.medianStillPercent)} keep playing)`;
+           return `${eR(ie.endedPercent)} of all sessions end in that minute and ${eR(ie.stillPercent)} keep playing${He}`
```

#### 945. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12006` → after: `L12006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12006) · [Before (L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12006)

```diff
-           return `${Kq(BB.minute)}, when ${mq(BB)}${OB===TM?"":`: this game is ${OB}${GB}`}`
+           return `${VT(ee.minute)}, when ${cT(ee)}${ie===Io?"":`: this game is ${ie}${He}`}`
```

#### 946. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12038` → after: `L12038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12038) · [Before (L12038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12038)

```diff
-               return GB === OB || GB.startsWith(`${OB}: `)
+               return He === ie || He.startsWith(`${ie}: `)
```

#### 947. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12055` → after: `L12055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12055) · [Before (L12055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12055)

```diff
-                 names: `${OB.step.from} ${OB.step.to}`,
+                 names: `${ie.step.from} ${ie.step.to}`,
```

#### 948. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12067` → after: `L12067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12067) · [Before (L12067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12067)

```diff
-                 names: `${YB.eventType} ${DB.from}`,
+                 names: `${ye.eventType} ${be.from}`,
```

#### 949. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12091-L12092` → after: `L12091-L12092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12091-L12092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12091-L12092) · [Before (L12091-L12092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12091-L12092)

```diff
-               yB = (null !== (OB = null === (GB = BB.flow) || void 0 === GB ? void 0 : GB.edges) && void 0 !== OB ? OB : []).flatMap((BB => [BB.from, BB.to].map(tj))),
-               JB = gp(null !== (YB = null === (DB = BB.playerTotals) || void 0 === DB ? void 0 : DB.playerTotals) && void 0 !== YB ? YB : {}, gq).filter((BB => !yB.some((OB => OB === BB.eventType || OB.startsWith(`${BB.eventType}: `))))).slice(0, aq),
+               Fe = (null !== (ie = null === (He = ee.flow) || void 0 === He ? void 0 : He.edges) && void 0 !== ie ? ie : []).flatMap((ee => [ee.from, ee.to].map(QU))),
+               Je = uf(null !== (ye = null === (be = ee.playerTotals) || void 0 === be ? void 0 : be.playerTotals) && void 0 !== ye ? ye : {}, uT).filter((ee => !Fe.some((ie => ie === ee.eventType || ie.startsWith(`${ee.eventType}: `))))).slice(0, IT),
```

#### 950. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12097-L12098` → after: `L12097-L12098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12097-L12098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12097-L12098) · [Before (L12097-L12098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12097-L12098)

```diff
-                     const oB = null !== (DB = null === OB || void 0 === OB ? void 0 : OB[YB]) && void 0 !== DB ? DB : null,
-                       jB = null !== (QB = null === OB || void 0 === OB ? void 0 : OB[YB + 1]) && void 0 !== QB ? QB : null;
+                     const Ke = null !== (be = null === ie || void 0 === ie ? void 0 : ie[ye]) && void 0 !== be ? be : null,
+                       Ue = null !== (Me = null === ie || void 0 === ie ? void 0 : ie[ye + 1]) && void 0 !== Me ? Me : null;
```

#### 951. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12111` → after: `L12111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12111) · [Before (L12111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12111)

```diff
-                   mostAboveMedian: null !== DB && YB(DB) >= Xp ? DB : null
+                   mostAboveMedian: null !== be && ye(be) >= lf ? be : null
```

#### 952. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12113` → after: `L12113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12113) · [Before (L12113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12113)

```diff
-               }(MB.curve.points.map((BB => BB.percent)), null !== (QB = null === (oB = MB.baselineCurve) || void 0 === oB ? void 0 : oB.survivalPercents.map((BB => BB.p50))) && void 0 !== QB ? QB : null),
+               }(oe.curve.points.map((ee => ee.percent)), null !== (Me = null === (Ke = oe.baselineCurve) || void 0 === Ke ? void 0 : Ke.survivalPercents.map((ee => ee.p50))) && void 0 !== Me ? Me : null),
```

#### 953. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12116-L12117` → after: `L12116-L12117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12116-L12117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12116-L12117) · [Before (L12116-L12117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12116-L12117)

```diff
-                 current: (0, ZO.Q)(zB.rankingWindow).avgDailyPlays,
-                 previous: (0, ZO.Q)(zB.previousRankingWindow).avgDailyPlays
+                 current: (0, Xi.J)(ke.rankingWindow).avgDailyPlays,
+                 previous: (0, Xi.J)(ke.previousRankingWindow).avgDailyPlays
```

#### 954. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12135` → after: `L12135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12135) · [Before (L12135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12135)

```diff
-           return ` Those who didn't reach ${BB.to} got to ${BB.from}: change ${function(BB){return`what players face once they reach "${BB.from.replace(/"/g,"'")}"`}(BB)}, not ${BB.to} itself.`
+           return ` Those who didn't reach ${ee.to} got to ${ee.from}: change ${function(ee){return`what players face once they reach "${ee.from.replace(/"/g,"'")}"`}(ee)}, not ${ee.to} itself.`
```

#### 955. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12138-L12139` → after: `L12138-L12139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12138-L12139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12138-L12139) · [Before (L12138-L12139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12138-L12139)

```diff
-         function Cq(BB, OB) {
-           switch (BB.kind) {
+         function rT(ee, ie) {
+           switch (ee.kind) {
```

#### 956. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12142-L12145` → after: `L12142-L12145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12142-L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12142-L12145) · [Before (L12142-L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12142-L12145)

```diff
-                 step: OB,
-                 mostLost: GB
-               } = BB, YB = null === OB.start ? null : Qq(OB.players, OB.fromPlayers, OB.start.players), DB = null !== OB.start && OB.start.name !== OB.from && null !== YB ? ` Only ${xM(100*Math.min(1,OB.players/OB.start.players))} of the ${vM(OB.start.players)} players at the flo … [truncated]
-               return `The biggest problem in the event flow (players who started it in the past week) is ${zq(OB)}: ${pq(OB)}.${bq(Eq(OB))}${DB}${QB}`
+                 step: ie,
+                 mostLost: He
+               } = ee, ye = null === ie.start ? null : JT(ie.players, ie.fromPlayers, ie.start.players), be = null !== ie.start && ie.start.name !== ie.from && null !== ye ? ` Only ${eR(100*Math.min(1,ie.players/ie.start.players))} of the ${ro(ie.start.players)} players at the flo … [truncated]
+               return `The biggest problem in the event flow (players who started it in the past week) is ${pT(ie)}: ${zT(ie)}.${GT(nT(ie))}${be}${Me}`
```

#### 957. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12149-L12153` → after: `L12149-L12153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12149-L12153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12149-L12153) · [Before (L12149-L12153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12149-L12153)

```diff
-                 progression: OB,
-                 step: GB,
-                 mostLost: YB
-               } = BB, DB = null === YB ? "" : ` The step the most players didn't get past (in number) is ${yq(YB,OB.eventType)}.`, QB = OB.values[0], oB = Qq(GB.reached, GB.from.players, QB.players), jB = QB.value === GB.from.value || null === oB ? "" : ` Of the ${vM(QB.players)} … [truncated]
-               return `The biggest problem in ${OB.eventType} (players since logging began) is ${yq(GB,OB.eventType)}.${bq(wq(GB,OB.eventType))}${jB}${DB}`
+                 progression: ie,
+                 step: He,
+                 mostLost: ye
+               } = ee, be = null === ye ? "" : ` The step the most players didn't get past (in number) is ${kT(ye,ie.eventType)}.`, Me = ie.values[0], Ke = JT(He.reached, He.from.players, Me.players), Ue = Me.value === He.from.value || null === Ke ? "" : ` Of the ${ro(Me.players)} … [truncated]
+               return `The biggest problem in ${ie.eventType} (players since logging began) is ${kT(He,ie.eventType)}.${GT(ST(He,ie.eventType))}${Ue}${be}`
```

#### 958. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12157-L12159` → after: `L12157-L12159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12157-L12159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12157-L12159) · [Before (L12157-L12159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12157-L12159)

```diff
-                 minute: GB
-               } = BB;
-               return `More sessions end ${Kq(GB.minute)} than in a typical game, over the last ${jP(OB)}: ${mq(GB)}. These are shares of sessions, each time someone plays, not of players.`
+                 minute: He
+               } = ee;
+               return `More sessions end ${VT(He.minute)} than in a typical game, over the last ${JR(ie)}: ${cT(He)}. These are shares of sessions, each time someone plays, not of players.`
```

#### 959. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12162` → after: `L12162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12162) · [Before (L12162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12162)

```diff
-               return `Plays per day fell to ${vM(BB.current)} over the last ${OB} days, from ${vM(BB.previous)} over the ${OB} days before (${tM(BB.current,BB.previous)}).`
+               return `Plays per day fell to ${ro(ee.current)} over the last ${ie} days, from ${ro(ee.previous)} over the ${ie} days before (${iR(ee.current,ee.previous)}).`
```

#### 960. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12166-L12172` → after: `L12166-L12172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12166-L12172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12166-L12172) · [Before (L12166-L12172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12166-L12172)

```diff
-         function Hq(BB, OB) {
-           const GB = "flowStep" === (null === OB || void 0 === OB ? void 0 : OB.kind) ? {
-             from: OB.step.from,
-             to: OB.step.to
-           } : "progressStep" === (null === OB || void 0 === OB ? void 0 : OB.kind) ? {
-             from: MP(OB.progression.eventType, OB.step.from.value),
-             to: MP(OB.progression.eventType, OB.step.to.value)
+         function QT(ee, ie) {
+           const He = "flowStep" === (null === ie || void 0 === ie ? void 0 : ie.kind) ? {
+             from: ie.step.from,
+             to: ie.step.to
+           } : "progressStep" === (null === ie || void 0 === ie ? void 0 : ie.kind) ? {
+             from: kR(ie.progression.eventType, ie.step.from.value),
+             to: kR(ie.progression.eventType, ie.step.to.value)
```

#### 961. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12174-L12175` → after: `L12174-L12175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12174-L12175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12174-L12175) · [Before (L12174-L12175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12174-L12175)

```diff
-           if (null === GB) return null;
-           return Bl(Gq(BB, (BB => tz(BB) || GB.from.includes(BB) || GB.to.includes(BB))), GB.from, GB.to)
+           if (null === He) return null;
+           return yq(KT(ee, (ee => Hq(ee) || He.from.includes(ee) || He.to.includes(ee))), He.from, He.to)
```

#### 962. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12178-L12179` → after: `L12178-L12179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12178-L12179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12178-L12179) · [Before (L12178-L12179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12178-L12179)

```diff
-         function vq(BB) {
-           const OB = BB => `${BB.name} (${sM(BB.timeMs)} min)`,
+         function ep(ee) {
+           const ie = ee => `${ee.name} (${Qo(ee.timeMs)} min)`,
```

#### 963. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12181-L12188` → after: `L12181-L12188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12181-L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12181-L12188) · [Before (L12181-L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12181-L12188)

```diff
-               window: GB,
-               atStep: YB,
-               elsewhere: DB
-             } = BB;
-           if (null === GB || YB.length + DB.length === 0) return " Studio can't tell what stops players at this step.";
-           const QB = [...YB, ...DB].sort(((BB, OB) => {
-               var GB, YB;
-               return (null !== (GB = OB.players) && void 0 !== GB ? GB : -1) - (null !== (YB = BB.players) && void 0 !== YB ? YB : -1)
+               window: He,
+               atStep: ye,
+               elsewhere: be
+             } = ee;
+           if (null === He || ye.length + be.length === 0) return " Studio can't tell what stops players at this step.";
+           const Me = [...ye, ...be].sort(((ee, ie) => {
+               var He, ye;
+               return (null !== (He = ie.players) && void 0 !== He ? He : -1) - (null !== (ye = ee.players) && void 0 !== ye ? ye : -1)
```

#### 964. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12190-L12210` → after: `L12190-L12210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12190-L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12190-L12210) · [Before (L12190-L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12190-L12210)

```diff
-             oB = ` Deaths, most players first (since logging began${QB.some((BB=>{let{categories:OB}=BB;return(null!==OB&&void 0!==OB?OB:[]).length>1}))?", maps added up":""}): ${Rq(QB)}.`,
-             jB = `between ${OB(GB.from)} and ${OB(GB.to)} on average`,
-             yB = Ol(BB);
-           return null !== yB ? `${oB} The first, ${Wq(yB)}, comes ${jB}, so it is the one death that may stop players here.` : `${oB} The first, ${Wq(QB[0])}, doesn't come ${jB}, so Studio can't tell what stops players here.`
-         }
- 
-         function sq(BB, OB) {
-           var GB, YB;
-           if (null === OB.biggestProblem) return [];
-           const DB = OB.stepDeaths;
-           return ["### Biggest problem Studio found", "", `${Cq(OB.biggestProblem,null!==(GB=null===(YB=BB.stats)||void 0===YB?void 0:YB.rankingWindow.days)&&void 0!==GB?GB:aM)}${null===DB?"":vq(DB)}`]
-         }
- 
-         function xq(BB, OB) {
-           const GB = OB.biggestProblem;
-           if (null === GB) return null;
- ... (5 more removed lines; see GitHub link above)
+             Ke = ` Deaths, most players first (since logging began${Me.some((ee=>{let{categories:ie}=ee;return(null!==ie&&void 0!==ie?ie:[]).length>1}))?", maps added up":""}): ${OT(Me)}.`,
+             Ue = `between ${ie(He.from)} and ${ie(He.to)} on average`,
+             Fe = bq(ee);
+           return null !== Fe ? `${Ke} The first, ${dT(Fe)}, comes ${Ue}, so it is the one death that may stop players here.` : `${Ke} The first, ${dT(Me[0])}, doesn't come ${Ue}, so Studio can't tell what stops players here.`
+         }
+ 
+         function ip(ee, ie) {
+           var He, ye;
+           if (null === ie.biggestProblem) return [];
+           const be = ie.stepDeaths;
+           return ["### Biggest problem Studio found", "", `${rT(ie.biggestProblem,null!==(He=null===(ye=ee.stats)||void 0===ye?void 0:ye.rankingWindow.days)&&void 0!==He?He:jo)}${null===be?"":ep(be)}`]
+         }
+ 
+         function Hp(ee, ie) {
+           const He = ie.biggestProblem;
+           if (null === He) return null;
+ ... (5 more added lines; see GitHub link above)
```

#### 965. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12212` → after: `L12212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12212) · [Before (L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12212)

```diff
-           switch (GB.kind) {
+           switch (He.kind) {
```

#### 966. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12215-L12224` → after: `L12215-L12224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12215-L12224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12215-L12224) · [Before (L12215-L12224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12215-L12224)

```diff
-               const BB = function(BB, OB, GB) {
-                   let YB = [];
-                   var DB;
-                   if ("flowStep" === BB.kind ? YB = (null !== (DB = null === OB || void 0 === OB ? void 0 : OB.steps) && void 0 !== DB ? DB : []).filter((OB => OB !== BB.step && OB.isChain && OB.fromPlayers >= GB)).map((BB => BB.share)) : "progressStep" === BB.kind && (YB = BB.pr … [truncated]
-                   const QB = YB.sort(((BB, OB) => BB - OB)),
-                     oB = Math.floor(QB.length / 2);
-                   return 100 * (QB.length % 2 === 1 ? QB[oB] : (QB[oB - 1] + QB[oB]) / 2)
-                 }(GB, OB.flow, cM),
-                 DB = `your game's other steps, where ${xM(BB)} of players reach the next one`;
-               if ("flowStep" === GB.kind) {
+               const ee = function(ee, ie, He) {
+                   let ye = [];
+                   var be;
+                   if ("flowStep" === ee.kind ? ye = (null !== (be = null === ie || void 0 === ie ? void 0 : ie.steps) && void 0 !== be ? be : []).filter((ie => ie !== ee.step && ie.isChain && ie.fromPlayers >= He)).map((ee => ee.share)) : "progressStep" === ee.kind && (ye = ee.pr … [truncated]
+                   const Me = ye.sort(((ee, ie) => ee - ie)),
+                     Ke = Math.floor(Me.length / 2);
+                   return 100 * (Me.length % 2 === 1 ? Me[Ke] : (Me[Ke - 1] + Me[Ke]) / 2)
+                 }(He, ie.flow, So),
+                 be = `your game's other steps, where ${eR(ee)} of players reach the next one`;
+               if ("flowStep" === He.kind) {
```

#### 967. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12226-L12228` → after: `L12226-L12228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12226-L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12226-L12228) · [Before (L12226-L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12226-L12228)

```diff
-                   step: OB
-                 } = GB;
-                 return YB(tp(100 * OB.share, BB), `of players at ${OB.from} who reach ${lq(OB)}`, DB, "eventFlow")
+                   step: ie
+                 } = He;
+                 return ye(yT(100 * ie.share, ee), `of players at ${ie.from} who reach ${XT(ie)}`, be, "eventFlow")
```

#### 968. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12231-L12234` → after: `L12231-L12234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12231-L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12231-L12234) · [Before (L12231-L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12231-L12234)

```diff
-                 progression: QB,
-                 step: oB
-               } = GB, jB = tp(100 * oB.share, BB), yB = BB => By(QB.eventType, BB), JB = oB.reached > oB.to.players ? " or a later one" : "";
-               return YB(jB, `of players at ${yB(oB.from.value)} who reach ${yB(oB.to.value)}${JB}`, DB, "playersPerEvent")
+                 progression: Me,
+                 step: Ke
+               } = He, Ue = yT(100 * Ke.share, ee), Fe = ee => eF(Me.eventType, ee), Je = Ke.reached > Ke.to.players ? " or a later one" : "";
+               return ye(Ue, `of players at ${Fe(Ke.from.value)} who reach ${Fe(Ke.to.value)}${Je}`, be, "playersPerEvent")
```

#### 969. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12237-L12238` → after: `L12237-L12238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12237-L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12237-L12238) · [Before (L12237-L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12237-L12238)

```diff
-               var DB, QB, oB, jB;
-               const OB = dq(BB),
+               var be, Me, Ke, Ue;
+               const ie = YT(ee),
```

#### 970. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12240-L12245` → after: `L12240-L12245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12240-L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12240-L12245) · [Before (L12240-L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12240-L12245)

```diff
-                   minute: yB
-                 } = GB.minute,
-                 JB = null === OB || void 0 === OB || null === (DB = OB.curve.points[yB]) || void 0 === DB ? void 0 : DB.percent;
-               if (null === OB || void 0 === JB) return null;
-               const MB = null !== (QB = null === (oB = OB.baselineCurve) || void 0 === oB || null === (jB = oB.survivalPercents[yB]) || void 0 === jB ? void 0 : jB.p50) && void 0 !== QB ? QB : null;
-               return YB(tp(JB, MB), `of sessions still going after ${yB} ${1===yB?"minute":"minutes"}`, `a typical Bloxd game, where ${xM(MB)} are`, "playersStillPlaying")
+                   minute: Fe
+                 } = He.minute,
+                 Je = null === ie || void 0 === ie || null === (be = ie.curve.points[Fe]) || void 0 === be ? void 0 : be.percent;
+               if (null === ie || void 0 === Je) return null;
+               const oe = null !== (Me = null === (Ke = ie.baselineCurve) || void 0 === Ke || null === (Ue = Ke.survivalPercents[Fe]) || void 0 === Ue ? void 0 : Ue.p50) && void 0 !== Me ? Me : null;
+               return ye(yT(Je, oe), `of sessions still going after ${Fe} ${1===Fe?"minute":"minutes"}`, `a typical Bloxd game, where ${eR(oe)} are`, "playersStillPlaying")
```

#### 971. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12248-L12249` → after: `L12248-L12249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12248-L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12248-L12249) · [Before (L12248-L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12248-L12249)

```diff
-               var yB, JB;
-               const OB = null !== (yB = null === (JB = BB.stats) || void 0 === JB ? void 0 : JB.rankingWindow.days) && void 0 !== yB ? yB : aM;
+               var Fe, Je;
+               const ie = null !== (Fe = null === (Je = ee.stats) || void 0 === Je ? void 0 : Je.rankingWindow.days) && void 0 !== Fe ? Fe : jo;
```

#### 972. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12259-L12275` → after: `L12259-L12275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12259-L12275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12259-L12275) · [Before (L12259-L12275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12259-L12275)

```diff
-         const tq = 8, BZ = ["spawn", "shop", "exit", "lobby", "key", "boss room", "start area"], OZ = 20, GZ = .02;
- 
-         function YZ(BB) {
-           const OB = new Map;
-           let GB = 0;
-           for (const [QB, oB] of Object.entries(BB.frequencies)) {
-             const BB = Math.floor(Number(QB) / tq) * tq;
-             for (const [jB, yB] of Object.entries(oB)) {
-               const oB = Number(jB);
-               for (const [jB, JB] of Object.entries(yB)) {
-                 var YB, DB;
-                 if (JB <= 0) continue;
-                 const yB = Math.floor(Number(jB) / tq) * tq,
-                   MB = `${BB},${yB}`,
-                   PB = null !== (YB = OB.get(MB)) && void 0 !== YB ? YB : {
-                     x: BB,
- ... (1 more removed lines; see GitHub link above)
+         const yp = 8, bp = ["spawn", "shop", "exit", "lobby", "key", "boss room", "start area"], Mp = 20, Kp = .02;
+ 
+         function Up(ee) {
+           const ie = new Map;
+           let He = 0;
+           for (const [Me, Ke] of Object.entries(ee.frequencies)) {
+             const ee = Math.floor(Number(Me) / yp) * yp;
+             for (const [Ue, Fe] of Object.entries(Ke)) {
+               const Ke = Number(Ue);
+               for (const [Ue, Je] of Object.entries(Fe)) {
+                 var ye, be;
+                 if (Je <= 0) continue;
+                 const Fe = Math.floor(Number(Ue) / yp) * yp,
+                   oe = `${ee},${Fe}`,
+                   Re = null !== (ye = ie.get(oe)) && void 0 !== ye ? ye : {
+                     x: ee,
+ ... (1 more added lines; see GitHub link above)
```

#### 973. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12281` → after: `L12281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12281) · [Before (L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12281)

```diff
-                 PB.count += JB, PB.sumX += Number(QB) * JB, PB.sumZ += Number(jB) * JB, PB.countByY.set(oB, (null !== (DB = PB.countByY.get(oB)) && void 0 !== DB ? DB : 0) + JB), OB.set(MB, PB), GB += JB
+                 Re.count += Je, Re.sumX += Number(Me) * Je, Re.sumZ += Number(Ue) * Je, Re.countByY.set(Ke, (null !== (be = Re.countByY.get(Ke)) && void 0 !== be ? be : 0) + Je), ie.set(oe, Re), He += Je
```

#### 974. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12286-L12290` → after: `L12286-L12290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12286-L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12286-L12290) · [Before (L12286-L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12286-L12290)

```diff
-             areas: [...OB.values()].map((BB => {
-               let OB = 0,
-                 GB = -1;
-               return BB.countByY.forEach(((BB, YB) => {
-                 (BB > GB || BB === GB && YB < OB) && (OB = YB, GB = BB)
+             areas: [...ie.values()].map((ee => {
+               let ie = 0,
+                 He = -1;
+               return ee.countByY.forEach(((ee, ye) => {
+                 (ee > He || ee === He && ye < ie) && (ie = ye, He = ee)
```

#### 975. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12292-L12297` → after: `L12292-L12297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12292-L12297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12292-L12297) · [Before (L12292-L12297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12292-L12297)

```diff
-                 x: BB.x,
-                 z: BB.z,
-                 count: BB.count,
-                 busiestY: OB,
-                 centreX: BB.sumX / BB.count,
-                 centreZ: BB.sumZ / BB.count
+                 x: ee.x,
+                 z: ee.z,
+                 count: ee.count,
+                 busiestY: ie,
+                 centreX: ee.sumX / ee.count,
+                 centreZ: ee.sumZ / ee.count
```

#### 976. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12299-L12300` → after: `L12299-L12300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12299-L12300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12299-L12300) · [Before (L12299-L12300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12299-L12300)

```diff
-             })).sort(((BB, OB) => OB.count - BB.count || BB.x - OB.x || BB.z - OB.z)),
-             total: GB
+             })).sort(((ee, ie) => ie.count - ee.count || ee.x - ie.x || ee.z - ie.z)),
+             total: He
```

#### 977. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12304` → after: `L12304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12304) · [Before (L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12304)

```diff
-         function DZ(BB, OB) {
+         function Fp(ee, ie) {
```

#### 978. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12306-L12311` → after: `L12306-L12311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12306-L12311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12306-L12311) · [Before (L12306-L12311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12306-L12311)

```diff
-             areas: GB,
-             total: YB
-           } = YZ(BB);
-           return YB <= 0 ? [] : GB.filter((BB => BB.count / YB >= GZ)).slice(0, OB).map((BB => ({
-             area: BB,
-             share: xM(BB.count / YB * 100, 1)
+             areas: He,
+             total: ye
+           } = Up(ee);
+           return ye <= 0 ? [] : He.filter((ee => ee.count / ye >= Kp)).slice(0, ie).map((ee => ({
+             area: ee,
+             share: eR(ee.count / ye * 100, 1)
```

#### 979. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12315-L12321` → after: `L12315-L12321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12315-L12321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12315-L12321) · [Before (L12315-L12321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12315-L12321)

```diff
-         function QZ(BB, OB) {
-           const GB = new Map,
-             YB = (BB, OB, YB) => {
-               var DB;
-               const QB = JSON.stringify([BB, OB.x, OB.z]),
-                 oB = null !== (DB = GB.get(QB)) && void 0 !== DB ? DB : {
-                   area: OB,
+         function Jp(ee, ie) {
+           const He = new Map,
+             ye = (ee, ie, ye) => {
+               var be;
+               const Me = JSON.stringify([ee, ie.x, ie.z]),
+                 Ke = null !== (be = He.get(Me)) && void 0 !== be ? be : {
+                   area: ie,
```

#### 980. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12324` → after: `L12324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12324) · [Before (L12324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12324)

```diff
-               oB.facts.push(YB), GB.set(QB, oB)
+               Ke.facts.push(ye), He.set(Me, Ke)
```

#### 981. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12326-L12328` → after: `L12326-L12328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12326-L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12326-L12328) · [Before (L12326-L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12326-L12328)

```diff
-             DB = [...BB.heatmaps].sort(((BB, OB) => OB.players.totalCount - BB.players.totalCount)).slice(0, OB.heatmapCategoryCount);
-           for (const jB of DB) {
-             const BB = "" === jB.gameCategoryId ? "" : ` in ${jB.gameCategoryId}`;
+             be = [...ee.heatmaps].sort(((ee, ie) => ie.players.totalCount - ee.players.totalCount)).slice(0, ie.heatmapCategoryCount);
+           for (const Ue of be) {
+             const ee = "" === Ue.gameCategoryId ? "" : ` in ${Ue.gameCategoryId}`;
```

#### 982. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12330-L12331` → after: `L12330-L12331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12330-L12331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12330-L12331) · [Before (L12330-L12331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12330-L12331)

```diff
-                 area: GB,
-                 share: DB
+                 area: He,
+                 share: be
```

#### 983. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12333` → after: `L12333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12333) · [Before (L12333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12333)

```diff
-               of DZ(jB.players, OB.playerAreaCount)) YB(jB.gameCategoryId, GB, `${DB} of all play time${BB} was spent here`)
+               of Fp(Ue.players, ie.playerAreaCount)) ye(Ue.gameCategoryId, He, `${be} of all play time${ee} was spent here`)
```

#### 984. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12335-L12338` → after: `L12335-L12338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12335-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12335-L12338) · [Before (L12335-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12335-L12338)

```diff
-           const QB = BB.heatmaps.flatMap((BB => BB.events.map((OB => ({
-             gameCategoryId: BB.gameCategoryId,
-             event: OB
-           }))))).filter((OB => {
+           const Me = ee.heatmaps.flatMap((ee => ee.events.map((ie => ({
+             gameCategoryId: ee.gameCategoryId,
+             event: ie
+           }))))).filter((ie => {
```

#### 985. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12340-L12343` → after: `L12340-L12343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12340-L12343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12340-L12343) · [Before (L12340-L12343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12340-L12343)

```diff
-               event: GB
-             } = OB;
-             return GB.heatmap.totalCount >= OZ && "timed" !== lM(GB.eventType, GB.eventValue, BB.worldCode)
-           })).sort(((BB, OB) => OB.event.heatmap.totalCount - BB.event.heatmap.totalCount)).slice(0, OB.eventHeatmapCount);
+               event: He
+             } = ie;
+             return He.heatmap.totalCount >= Mp && "timed" !== qo(He.eventType, He.eventValue, ee.worldCode)
+           })).sort(((ee, ie) => ie.event.heatmap.totalCount - ee.event.heatmap.totalCount)).slice(0, ie.eventHeatmapCount);
```

#### 986. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12345-L12346` → after: `L12345-L12346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12345-L12346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12345-L12346) · [Before (L12345-L12346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12345-L12346)

```diff
-               gameCategoryId: jB,
-               event: yB
+               gameCategoryId: Ue,
+               event: Fe
```

#### 987. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12348-L12351` → after: `L12348-L12351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12348-L12351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12348-L12351) · [Before (L12348-L12351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12348-L12351)

```diff
-             of QB) {
-             const GB = MP(yB.eventType, yB.eventValue),
-               DB = "" === jB ? "" : ` in ${jB}`,
-               QB = "named" === lM(yB.eventType, yB.eventValue, BB.worldCode);
+             of Me) {
+             const He = kR(Fe.eventType, Fe.eventValue),
+               be = "" === Ue ? "" : ` in ${Ue}`,
+               Me = "named" === qo(Fe.eventType, Fe.eventValue, ee.worldCode);
```

#### 988. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12353-L12354` → after: `L12353-L12354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12353-L12354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12353-L12354) · [Before (L12353-L12354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12353-L12354)

```diff
-                 area: BB,
-                 share: oB
+                 area: ee,
+                 share: Ke
```

#### 989. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12356` → after: `L12356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12356) · [Before (L12356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12356)

```diff
-               of DZ(yB.heatmap, OB.eventAreaCount)) YB(jB, BB, QB ? `this is only where the \`${GB}\` event${DB} is logged (${oB} of them), which tells nothing about what players do here: base no idea on it` : `${oB} of all \`${GB}\` events${DB} happen here`)
+               of Fp(Fe.heatmap, ie.eventAreaCount)) ye(Ue, ee, Me ? `this is only where the \`${He}\` event${be} is logged (${Ke} of them), which tells nothing about what players do here: base no idea on it` : `${Ke} of all \`${He}\` events${be} happen here`)
```

#### 990. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12364-L12365` → after: `L12364-L12365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12364-L12365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12364-L12365) · [Before (L12364-L12365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12364-L12365)

```diff
-             const DB = 1 === YB.length ? YB[0] : `${YB.slice(0,-1).join(", ")} and ${YB[YB.length-1]}`;
-             return `- Place P${OB+1}, ${function(BB){return`x ${BB.x} to ${BB.x+tq-1}, z ${BB.z} to ${BB.z+tq-1} (height y ${BB.busiestY})`}(GB)}: ${DB}.`
+             const be = 1 === ye.length ? ye[0] : `${ye.slice(0,-1).join(", ")} and ${ye[ye.length-1]}`;
+             return `- Place P${ie+1}, ${function(ee){return`x ${ee.x} to ${ee.x+yp-1}, z ${ee.z} to ${ee.z+yp-1} (height y ${ee.busiestY})`}(He)}: ${be}.`
```

#### 991. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12367` → after: `L12367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12367) · [Before (L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12367)

```diff
-           return ["### Busiest places (heatmaps, past week)", "", `Seen from above, the map is split into squares ${tq} blocks wide. Each square holding at least ${xM(100*GZ)} of play time, or of one of the commonest custom events with a position, is a place, named P1, P2 and so  … [truncated]
+           return ["### Busiest places (heatmaps, past week)", "", `Seen from above, the map is split into squares ${yp} blocks wide. Each square holding at least ${eR(100*Kp)} of play time, or of one of the commonest custom events with a position, is a place, named P1, P2 and so  … [truncated]
```

#### 992. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12375` → after: `L12375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12375) · [Before (L12375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12375)

```diff
-             object: null !== (OB = GB[2]) && void 0 !== OB ? OB : null
+             object: null !== (ie = He[2]) && void 0 !== ie ? ie : null
```

#### 993. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12385-L12387` → after: `L12385-L12387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12385-L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12385-L12387) · [Before (L12385-L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12385-L12387)

```diff
-                 DB = null === BB.object ? "" : ` inside \`${BB.object}\``,
-                 QB = null !== BB.object && void 0 !== YB && OB ? `, never as \`${BB.object}.${YB} = \u2026\`` : "";
-               return `, or for a constant's line, as \`${BB.line}\` with a new number, "replace the line \`${BB.line}\`${DB}"${QB}`
+                 be = null === ee.object ? "" : ` inside \`${ee.object}\``,
+                 Me = null !== ee.object && void 0 !== ye && ie ? `, never as \`${ee.object}.${ye} = \u2026\`` : "";
+               return `, or for a constant's line, as \`${ee.line}\` with a new number, "replace the line \`${ee.line}\`${be}"${Me}`
```

#### 994. `bundles/bloxd.io/chunks/js/117.js` (Changed code · before: `L12389-L12392` → after: `L12389-L12392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41R12389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-eaff12dca693426c82f73addff4de1d45ddbce34803ddba03d6d28b20d2bca41) · [After (L12389-L12392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/117.js#L12389-L12392) · [Before (L12389-L12392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/117.js#L12389-L12392)

```diff
-             yB = null === YB ? "" : ` ${YB}${` After the ${OB?"steps":"paragraph"}, add one \`\`\`js block, ${OB?"not in a step, ":""}of at most ${OB?2:4} lines of code: the lines to paste inside a callback, not the callback around them, or a "current line" from my code's summary … [truncated]
-             JB = oB ? ` Pick it from "${kl}" when one fits my game, moving its constant the way it says.` : "",
-             MB = null !== DB && void 0 !== DB && DB.statName ? ` ${oP(DB.statName,QB)}` : "",
-             PB = `\`### ${UM}: <${OB?"an easy change":"the change"}, in at most 8 plain words>\``;
+             Fe = null === ye ? "" : ` ${ye}${` After the ${ie?"steps":"paragraph"}, add one \`\`\`js block, ${ie?"not in a step, ":""}of at most ${ie?2:4} lines of code: the lines to paste inside a callback, not the callback around them, or a "current line" from my code's summary … [truncated]
+             Je = Ke ? ` Pick it from "${Pq}" when one fits my game, moving its constant the way it says.` : "",
+             oe = null !== be && void 0 !== be && be.statName ? ` ${FR(be.statName,Me)}` : "",
+             Re = `\`### ${to}: <${ie?"an easy change":"the change"}, in at most 8 plain words>\``;
```
