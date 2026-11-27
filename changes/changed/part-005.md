# Changed — Bundle Modifications Report (Part 005 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `5 / 86` (**300** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 004](part-004.md) · [Part 006 →](part-006.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/101.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/101.js` (107 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e)

#### 33. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L175-L179` → after: `L25831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25831) · [Before (L175-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L175-L179)

```diff
-       YB = BB
-     }
- 
-     function jB() {
-       return YB
+       EW.add(WW)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L181-L183` → after: `L25833-L25863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25833-L25863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25833-L25863) · [Before (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L181-L183)

```diff
- 
-     function yB(BB) {
-       DB = BB
+     class PW {
+       constructor(WW, iW) {
+         this.joinSignal = WW, this.onWaiting = iW, this.deadline = null, this.waits = 0, EW.has(WW) && (this.deadline = performance.now())
+       }
+       async waitToAskAgain(WW) {
+         if (this.joinSignal.aborted) return "left";
+         const iW = function(WW, iW) {
+             let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.random;
+             const mW = Math.min(Math.max(WW * 2 ** iW, 2e3), 15e3);
+             return Math.round(mW * (.75 + .5 * OW()))
+           }(WW, this.waits),
+           OW = performance.now();
+         return this.deadline ??= OW + 18e4, OW + iW > this.deadline ? "over" : (this.waits++, this.onWaiting(!0), await
+           function(WW, iW) {
+             if (iW.aborted) return Promise.resolve(!1);
+             return new Promise((OW => {
+ ... (15 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L185-L187` → after: `L25865-L25887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25865-L25887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25865-L25887) · [Before (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L185-L187)

```diff
- 
-     function JB() {
-       return DB
+     async function LW(WW, iW, OW) {
+       let EW = WW;
+       for (;;) {
+         if (!EW.result.isError()) return OW.placed(), EW;
+         const WW = EW.result.asError(),
+           {
+             retryAfterMs: NW,
+             ...PW
+           } = WW.debugResult;
+         if (void 0 === NW) return EW;
+         const LW = await OW.waitToAskAgain(NW);
+         if ("left" === LW) return null;
+         if ("over" === LW) {
+           return {
+             result: mW.b.errorWithCode(WW.message, WW.code, {
+               ...PW,
+ ... (7 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L191` → after: `L25899-L25908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25899-L25908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25899-L25908) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L191)

```diff
-       QB = BB
+       var iW, OW;
+       if ((0, EW.K)(WW)) return !0;
+       const PW = null !== (iW = null === (OW = NW.siteUsedData[NW.siteUsed]) || void 0 === OW ? void 0 : OW.adConfig.showRewardedAds) && void 0 !== iW && iW;
+       for (const EW in WW) {
+         const iW = WW[EW];
+         if (null !== iW && void 0 !== iW && iW.items)
+           for (const WW in iW.items)
+             if ((0, mW.g)(iW.items[WW], PW)) return !1
+       }
+       return !0
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L193-L195` → after: `L25910-L25915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25910-L25915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25910-L25915) · [Before (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L193-L195)

```diff
- 
-     function PB() {
-       return QB
+   },
+   37848: (WW, iW, OW) => {
+     function mW(WW, iW) {
+       for (let OW = 0; OW < WW.length; OW++)
+         if (WW[OW].identifier === iW) return WW[OW];
+       return null
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L198-L200` → after: `L25918-L25919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25918-L25919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25918-L25919) · [Before (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L198-L200)

```diff
-     function zB() {
-       var BB, OB;
-       return !0 === (null === (BB = DB) || void 0 === BB || null === (OB = BB.currentViewer) || void 0 === OB ? void 0 : OB.inPlayback)
+     function EW(WW, iW) {
+       return null !== mW(WW, iW)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L203` → after: `L25926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25926) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L203)

```diff
-   5274: (BB, OB, GB) => {
+   38039: (WW, iW, OW) => {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L206` → after: `L25929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25929) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L206)

```diff
-       E: () => KB,
+       G: () => DW,
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L212` → after: `L25933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25933) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L212)

```diff
-       e: () => AB,
+       h: () => HW,
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L217` → after: `L25938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25938) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L217)

```diff
-       v: () => WB,
+       u: () => oW,
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L219` → after: `L25940-L25941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25940-L25941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25940-L25941) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L219)

```diff
-       z: () => kB
+       x: () => TW,
+       y: () => vW
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L221` → after: `L25943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25943) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L221)

```diff
-     var YB = GB(5276);
+     var mW = OW(39);
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L223-L238` → after: `L25945-L25963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25945-L25963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25945-L25963) · [Before (L223-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L223-L238)

```diff
-       lockPointer: () => !1,
-       unlockPointer: () => {},
-       leaveGame: () => {}
-     };
-     let QB = DB;
- 
-     function oB(BB) {
-       QB = null !== BB && void 0 !== BB ? BB : DB
-     }
- 
-     function jB() {
-       return QB
-     }
-     const yB = new Set,
-       JB = new Set;
-     let MB = -1;
+         codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
+         worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
+       },
+       NW = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
+       PW = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
+       LW = NW.filter((WW => "docsButton" !== WW)),
+       cW = PW.filter((WW => "aiHelperButton" !== WW)),
+       wW = "codeEditorTutorials",
+       tW = {
+         codeBlockIntro: "codeBlockIntroShown",
+         worldCodeIntro: "worldCodeIntroShown"
+       },
+       ZW = {
+         welcome: "welcomeComplete",
+         docsOverview: "docsOverviewComplete",
+         aiHelperOverview: "aiHelperOverviewComplete"
+ ... (3 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L241-L242` → after: `L25966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25966) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L241-L242)

```diff
-     let lB = 0,
-       pB = 0;
+     let jW = null;
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L246-L249` → after: `L25970-L25973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25970-L25973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25970-L25973) · [Before (L246-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L246-L249)

```diff
-     function NB(BB) {
-       return yB.add(BB), () => {
-         yB.delete(BB)
-       }
+     function sW() {
+       kW.forEach((WW => {
+         WW()
+       }))
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L252-L256` → after: `L25976-L25986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25976-L25986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25976-L25986) · [Before (L252-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L252-L256)

```diff
-     function RB(BB, OB) {
-       for (const YB of yB) try {
-         YB(BB)
-       } catch (GB) {
-         OB(GB)
+     function MW() {
+       if (!xW) {
+         const WW = mW.i.getItem(wW);
+         xW = {
+           codeBlockIntroShown: !1,
+           worldCodeIntroShown: !1,
+           welcomeComplete: !1,
+           docsOverviewComplete: !1,
+           aiHelperOverviewComplete: !1,
+           ..."object" === typeof WW && null !== WW ? WW : {}
+         }
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L261-L263` → after: `L25992-L25996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25992-L25996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25992-L25996) · [Before (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L261-L263)

```diff
-       return JB.add(BB), () => {
-         JB.delete(BB)
-       }
+       const iW = MW();
+       iW[WW] || (xW = {
+         ...iW,
+         [WW]: !0
+       }, mW.i.setItem(wW, xW))
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L266-L273` → after: `L25999-L26000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR25999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L25999-L26000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L25999-L26000) · [Before (L266-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L266-L273)

```diff
-     function AB(BB, OB) {
-       const GB = MB < 0 ? 0 : BB - MB;
-       MB = BB;
-       for (const DB of JB) try {
-         DB(GB)
-       } catch (YB) {
-         OB(YB)
-       }
+     function SW(WW) {
+       return "docsOverview" === WW ? NW : "aiHelperOverview" === WW ? PW : lW ? EW[lW] : []
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L277-L279` → after: `L26004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26004) · [Before (L277-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L277-L279)

```diff
-       return PB.add(BB), () => {
-         PB.delete(BB)
-       }
+       return ("worldCodeButton" !== WW || !MW().worldCodeIntroShown) && !UW.has(WW)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L283-L285` → after: `L26008-L26009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26008-L26009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26008-L26009) · [Before (L283-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L283-L285)

```diff
-       return zB.add(BB), () => {
-         zB.delete(BB)
-       }
+       var iW;
+       return (null === (iW = jW) || void 0 === iW ? void 0 : iW.name) === WW ? jW.stepsDone : AW
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L289-L290` → after: `L26012-L26018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26012-L26018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26012-L26018) · [Before (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L289-L290)

```diff
-     function UB(BB) {
-       nB += BB
+     function TW(WW, iW) {
+       if (! function(WW) {
+           return jW ? jW.name === WW : "welcome" === WW
+         }(WW) || !YW(iW) || yW(WW).has(iW)) return !1;
+       if (jW) return !0;
+       const OW = tW[iW];
+       return OW ? !MW()[OW] || bW.has(iW) : !MW()[ZW[WW]]
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L293-L295` → after: `L26021-L26023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26021-L26023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26021-L26023) · [Before (L293-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L293-L295)

```diff
-     function fB() {
-       const BB = nB;
-       return nB = 0, BB
+     function JW(WW) {
+       var iW;
+       return null !== (iW = SW(WW).find((iW => TW(WW, iW)))) && void 0 !== iW ? iW : null
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L299-L301` → after: `L26027-L26028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26027-L26028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26027-L26028) · [Before (L299-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L299-L301)

```diff
-       return qB.add(BB), () => {
-         qB.delete(BB)
-       }
+       var iW;
+       KW(ZW[WW]), (null === (iW = jW) || void 0 === iW ? void 0 : iW.name) === WW && (jW = null)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L305-L307` → after: `L26032-L26036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26032-L26036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26032-L26036) · [Before (L305-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L305-L307)

```diff
-       return ZB.add(BB), () => {
-         ZB.delete(BB)
-       }
+       const iW = (jW ? [jW.name] : ["welcome", "docsOverview"]).find((iW => JW(iW) === WW));
+       if (!iW) return;
+       yW(iW).add(WW);
+       const OW = tW[WW];
+       OW && (KW(OW), jW || bW.add(WW)), null === JW(iW) && hW(iW), sW()
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L310-L311` → after: `L26039-L26044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26039-L26044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26039-L26044) · [Before (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L310-L311)

```diff
-     function KB() {
-       lB = 0, pB = 0, MB = -1
+     function nW(WW, iW) {
+       const OW = SW(WW),
+         mW = yW(WW);
+       for (let EW = OW.indexOf(iW) - 1; EW >= 0; EW--)
+         if (mW.has(OW[EW]) && YW(OW[EW])) return OW[EW];
+       return null
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L315-L318` → after: `L26048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26048) · [Before (L315-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L315-L318)

```diff
-       if ("paced" === BB) return pB += OB, null;
-       if ("drawn" !== BB && "skipped" !== BB) return null;
-       const GB = OB + pB;
-       return pB = 0, GB
+       return null !== nW(WW, iW)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L321-L351` → after: `L26051-L26053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26051-L26053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26051-L26053) · [Before (L321-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L321-L351)

```diff
-     function mB(BB, OB, GB, DB) {
-       const QB = (0, YB.k)(OB),
-         oB = BB > 0 ? performance.now() : 0;
-       for (let YB = 0; YB < BB; YB++)
-         for (const BB of qB) try {
-           BB()
-         } catch (jB) {
-           DB(jB)
-         }
-       if (BB > 0 && UB(performance.now() - oB), null !== GB) {
-         for (const BB of PB) try {
-           BB(GB)
-         } catch (jB) {
-           DB(jB)
-         }
-         lB += GB
- ... (15 more removed lines; see GitHub link above)
+     function oW(WW, iW) {
+       const OW = nW(WW, iW);
+       OW && (yW(WW).delete(OW), sW())
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L353-L366` → after: `L26055-L26060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26055-L26060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26055-L26060) · [Before (L353-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L353-L366)

```diff
-   },
-   41907: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => YB
-     });
-     const YB = {
-       stop: () => YB,
-       fade: () => YB,
-       rate: () => YB,
-       getVolume: () => 0,
-       getRelativeVolume: () => 0,
-       setRelativeVolume: () => YB,
-       setPannerAttr: () => YB,
-       setPosition: () => YB
+ 
+     function dW(WW) {
+       hW(WW), "welcome" === WW && SW("welcome").forEach((WW => {
+         const iW = tW[WW];
+         iW && KW(iW)
+       })), sW()
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L379-L383` → after: `L26064-L26080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26064-L26080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26064-L26080) · [Before (L379-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L379-L383)

```diff
-       let {
-         action: OB,
-         flags: GB
-       } = BB;
-       return "mid-fire" === OB && 0 !== (GB & YB.c.AltLeftClick)
+       jW = {
+         name: WW,
+         stepsDone: new Set
+       }, sW()
+     }
+ 
+     function vW() {
+       (jW || 0 !== AW.size || 0 !== bW.size) && (jW = null, AW.clear(), bW.clear(), sW())
+     }
+ 
+     function gW(WW, iW) {
+       const OW = iW ? WW : lW === WW ? null : lW;
+       OW !== lW && (lW = OW, sW())
+     }
+ 
+     function DW(WW, iW) {
+ ... (1 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L406` → after: `L26089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26089) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L406)

```diff
-   5305: (BB, OB, GB) => {
+   37861: (WW, iW, OW) => {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L411-L412` → after: `L26094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26094) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L411-L412)

```diff
-       i: () => YB,
-       l: () => jB
+       j: () => wW
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L415-L694` → after: `L26107-L26114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26107-L26114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26107-L26114) · [Before (L415-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L415-L694)

```diff
-         Mouse1: 1,
-         Mouse2: 2,
-         Mouse3: 3,
-         "Alt+Left Click": 4,
-         F2: 5,
-         F4: 6,
-         F5: 7,
-         F8: 8,
-         F9: 9,
-         Digit0: 10,
-         Digit1: 11,
-         Digit2: 12,
-         Digit3: 13,
-         Digit4: 14,
-         Digit5: 15,
-         Digit6: 16,
- ... (264 more removed lines; see GitHub link above)
+       Action1: 1,
+       Action2: 2,
+       Action3: 3,
+       Attack: 4,
+       Use: 5,
+       Interact: 6,
+       Boost: 7
+     };
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L697-L701` → after: `L26117-L26126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26117-L26126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26117-L26126) · [Before (L697-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L697-L701)

```diff
-       oB = !0;
-       try {
-         BB()
-       } finally {
-         oB = !1
+       return WW.classList.contains("TouchKeyHit") && lW() ? null : WW.firstElementChild
+     }
+ 
+     function xW(WW) {
+       return WW.classList.contains("TouchKeyHit") && !WW.classList.contains("CanvasZone") ? {
+         whole: !lW(),
+         keyBox: null
+       } : {
+         whole: !1,
+         keyBox: AW(ZW(WW))
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L705-L719` → after: `L26130-L26137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26130-L26137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26130-L26137) · [Before (L705-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L705-L719)

```diff
-     function JB(BB, OB) {
-       if (oB) return !1;
-       switch (BB) {
-         case YB.Q.MouseDown:
-         case YB.Q.MouseUp:
-         case YB.Q.TouchStart:
-         case YB.Q.TouchEnd:
-         case YB.Q.TouchCancel:
-         case YB.Q.TouchButton:
-           return !0;
-         case YB.Q.KeyDown:
-         case YB.Q.KeyUp:
-           return 0 === (OB & DB.d.Repeat) && !(0, QB.i)(document.activeElement);
-         default:
-           return !1
+     function lW() {
+       return document.documentElement.classList.contains(LW.i)
+     }
+ 
+     function AW(WW) {
+       return !(WW instanceof HTMLElement) || WW.offsetWidth <= 0 || WW.offsetHeight <= 0 ? null : {
+         width: WW.offsetWidth,
+         height: WW.offsetHeight
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L724-L726` → after: `L26147-L26151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26147-L26151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26147-L26151) · [Before (L724-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L724-L726)

```diff
-       jB || (jB = !0, queueMicrotask((() => {
-         jB = !1, BB()
-       })))
+       return {
+         x: WW.left + WW.width / 2,
+         y: WW.top + WW.height / 2,
+         radius: Math.min(WW.width, WW.height) / 2
+       }
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L729` → after: `L26219-L26222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26219-L26222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26219-L26222) · [Before (L729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L729)

```diff
-   5313: (BB, OB, GB) => {
+   37998: (WW, iW, OW) => {
+     function mW(WW) {
+       return "fetch" === WW || "timeout" === WW || "integrity" === WW ? "download" : "browser"
+     }
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L735-L737` → after: `L26233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26233) · [Before (L735-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L735-L737)

```diff
-     var YB = GB(2617),
-       DB = GB(2619);
-     const QB = new Set(["button", "checkbox", "color", "file", "image", "radio", "range", "reset", "submit"]);
+     const EW = "https://discord.gg/playbloxd";
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L739-L740` → after: `L26235-L26267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26235-L26267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26235-L26267) · [Before (L739-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L739-L740)

```diff
-     function oB(BB) {
-       return BB instanceof HTMLElement && (!!(BB.isContentEditable || BB instanceof HTMLTextAreaElement || BB instanceof HTMLSelectElement) || BB instanceof HTMLInputElement && !QB.has(BB.type))
+     function NW(WW, iW) {
+       return "download" === WW ? {
+         icon: "wifi",
+         title: "wasmScreens:downloadFailedTitle",
+         help: "wasmScreens:downloadFailedHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:tryAgain",
+         cancel: "general:back"
+       } : "memory" === WW || "noContext" === WW || "graphicsLost" === WW ? {
+         icon: "face-dizzy",
+         title: `wasmUnsupported:${WW}Title`,
+         help: `wasmUnsupported:${WW}Help${iW?"App":""}`,
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:tryAgain",
+ ... (17 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L744-L763` → after: `L26271-L26278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26271-L26278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26271-L26278) · [Before (L744-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L744-L763)

```diff
-       let OB = null;
-       const GB = GB => {
-           const DB = oB(GB);
-           DB !== OB && (OB = DB, BB(YB.f.UiCapture, YB.y.Keyboard, 0, 0, DB ? YB.y.Keyboard : 0))
-         },
-         DB = BB => {
-           GB(BB.target)
-         },
-         QB = BB => {
-           GB(BB.relatedTarget)
-         },
-         jB = () => {
-           GB(document.activeElement)
-         },
-         yB = {
-           capture: !0,
- ... (4 more removed lines; see GitHub link above)
+       return {
+         icon: "face-dizzy",
+         title: `wasmUnsupported:${WW}Title`,
+         help: "wasmScreens:noContextHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:tryAgain",
+         cancel: "general:back"
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L769-L774` → after: `L26283-L26319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26283-L26319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26283-L26319) · [Before (L769-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L769-L774)

```diff
-       var GB;
-       let YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ui";
-       yB.set(YB, (null !== (GB = yB.get(YB)) && void 0 !== GB ? GB : 0) & ~BB | OB & BB);
-       let QB = 0;
-       for (const DB of yB.values()) QB |= DB;
-       return (0, DB.u)(BB, QB & BB)
+       return {
+         icon: "face-dizzy",
+         title: "wasmScreens:crashTitle",
+         help: iW ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
+         helpValues: {
+           code: WW.code
+         },
+         discordLink: iW,
+         confirm: "general:reload",
+         cancel: "general:back"
+       }
+     }
+ 
+     function wW() {
+       return {
+         icon: "face-dizzy",
+ ... (21 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L777` → after: `L26322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26322) · [Before (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L777)

```diff
-   36997: (BB, OB, GB) => {
+   37879: (WW, iW, OW) => {
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L779-L782` → after: `L26324-L26326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26324-L26326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26324-L26326) · [Before (L779-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L779-L782)

```diff
-       d: () => MB,
-       g: () => yB,
-       k: () => jB,
-       o: () => JB
+       b: () => tW,
+       f: () => wW,
+       i: () => cW
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L784-L787` → after: `L26328-L26331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26328-L26331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26328-L26331) · [Before (L784-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L784-L787)

```diff
-     var YB = GB(2034);
-     let DB = null,
-       QB = 0;
-     const oB = new Set;
+     var mW = OW(1230),
+       EW = OW(3540),
+       NW = OW(1659);
+     const PW = mW.p.filter((WW => !NW.h.includes(WW)));
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L789-L790` → after: `L26333-L26334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26333-L26334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26333-L26334) · [Before (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L789-L790)

```diff
-     function jB() {
-       return DB
+     function LW(WW, iW) {
+       return PW.includes(WW) && "string" === typeof iW && (0, EW.h)(WW, iW)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L793` → after: `L26337-L26342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26337-L26342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26337-L26342) · [Before (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L793)

```diff
-     function yB() {
+     function cW(WW) {
+       const iW = {};
+       for (const OW of PW) {
+         const mW = WW[OW];
+         void 0 !== mW && LW(OW, mW) && (iW[OW] = mW)
+       }
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L798-L799` → after: `L26347-L26359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26347-L26359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26347-L26359) · [Before (L798-L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L798-L799)

```diff
-       DB = BB, QB++, (0, YB.b)();
-       for (const OB of oB) OB()
+       return 0 === Object.keys(WW).length
+     }
+ 
+     function tW(WW, iW) {
+       return Object.entries(WW).every((WW => {
+         let [OW, mW] = WW;
+         return iW[OW] === mW
+       }))
+     }
+   },
+   38048: (WW, iW, OW) => {
+     function mW(WW, iW) {
+       return null === WW || null === iW ? WW === iW : WW[0] === iW[0] && WW[1] === iW[1] && WW[2] === iW[2]
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L803` → after: `L26363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26363) · [Before (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L803)

```diff
-       oB.add(BB)
+       return [WW[0] + .5, WW[1] + .5, WW[2] + .5]
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L806` → after: `L26370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26370) · [Before (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L806)

```diff
-   42006: (BB, OB, GB) => {
+   38001: (WW, iW, OW) => {
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L810` → after: `L26375-L26473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26375-L26473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26375-L26473) · [Before (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L810)

```diff
-     const YB = 2e3
+     const mW = {
+         files: {
+           "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
+           "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
+         },
+         dependencies: [],
+         bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in … [truncated]
+         types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
+       },
+       EW = {
+         files: {
+           "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\ … [truncated]
+         },
+         dependencies: ["helpers"],
+         bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in … [truncated]
+         types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every  … [truncated]
+ ... (83 more added lines; see GitHub link above)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L812` → after: `L26475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26475) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L812)

```diff
-   41900: (BB, OB, GB) => {
+   38010: (WW, iW, OW) => {
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L814` → after: `L26477-L26478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26477-L26478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26477-L26478) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L814)

```diff
-       e: () => SB,
+       d: () => cW,
+       f: () => LW,
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L817` → after: `L26481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26481) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L817)

```diff
-       n: () => VB,
+       m: () => wW,
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L819` → after: `L26483-L26485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26483-L26485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26483-L26485) · [Before (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L819)

```diff
-       s: () => nB
+       r: () => AW,
+       v: () => lW,
+       y: () => xW
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L821-L829` → after: `L26487-L26488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26487-L26488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26487-L26488) · [Before (L821-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L821-L829)

```diff
-     var YB = GB(180),
-       DB = GB(16),
-       QB = GB(25),
-       oB = GB(3249),
-       jB = GB(1299),
-       yB = GB(34725),
-       JB = GB(294),
-       MB = GB(92),
-       PB = GB(173);
+     var mW = OW(1230);
+     const EW = ["quickjs", "ses"];
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L831-L841` → after: `L26490-L26491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26490-L26491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26490-L26491) · [Before (L831-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L831-L841)

```diff
-     function zB() {
-       var BB;
-       const OB = (0, oB.L)(),
-         GB = function(BB, OB) {
-           return {
-             sampleCount: BB.antiAliasing ? 4 : 1,
-             n: (0, oB.C)(BB.pixelScale, OB),
-             pixelated: (0, oB.z)(BB.pixelSmoothing)
-           }
-         }(DB.c.get("clientEscMenuOptions"), OB);
-       return GB.sampleCount > 1 && (0, yB.d)() && (GB.sampleCount = 1), GB.n = null !== (BB = (0, yB.p)()) && void 0 !== BB ? BB : GB.n, YB.f.includes((0, MB.getSoftwareRenderer)()) && (GB.sampleCount = 1, GB.n = Math.max(GB.n, (0, oB.C)(PB.o.pixelScale, OB))), GB
+     function NW(WW) {
+       return EW.includes(WW)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L848-L849` → after: `L26494-L26495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26494-L26495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26494-L26495) · [Before (L848-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L848-L849)

```diff
-     function NB() {
-       for (const BB of qB) BB()
+     function PW(WW) {
+       return WW === mW.e || WW === mW.g
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L852-L857` → after: `L26498-L26499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26498-L26499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26498-L26499) · [Before (L852-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L852-L857)

```diff
-     function RB() {
-       if (null === lB) {
-         const BB = document.createElement("div");
-         BB.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;pointer-events:none", BB.setAttribute("aria-hidden", "true"), document.body.append(BB), pB = BB, lB = new oB.d(BB, NB)
-       }
-       return lB
+     function LW(WW, iW) {
+       return WW === mW.e && iW === mW.g || WW === mW.g && iW === mW.e
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L861-L863` → after: `L26503-L26505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26503-L26505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26503-L26505) · [Before (L861-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L861-L863)

```diff
-       const OB = (0, oB.n)(),
-         [GB, YB] = RB().size(OB);
-       return (0, oB.i)(GB, YB, OB, BB.n)
+       const iW = mW.g in WW,
+         OW = mW.e in WW;
+       return iW && OW ? null : iW ? mW.g : OW ? mW.e : null
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L866-L872` → after: `L26508-L26516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26508-L26516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26508-L26516) · [Before (L866-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L866-L872)

```diff
-     function AB(BB) {
-       var OB, GB, YB, DB;
-       const QB = (0, oB.n)(),
-         [yB, JB] = RB().size(QB);
-       if (yB <= 0 || JB <= 0) return null;
-       const MB = (0, oB.i)(yB, JB, QB, zB().n);
-       return (0, oB.g)(BB, MB), BB.style.left = `${null!==(OB=null===(GB=ZB)||void 0===GB?void 0:GB.rect.left)&&void 0!==OB?OB:0}px`, BB.style.top = `${null!==(YB=null===(DB=ZB)||void 0===DB?void 0:DB.rect.top)&&void 0!==YB?YB:0}px`, (0, jB.Q)(BB.style, ZB), MB
+     function wW(WW, iW, OW) {
+       const mW = `${iW}/`;
+       return WW.filter((WW => WW.startsWith(mW))).map((WW => [WW, `${OW}/${WW.slice(mW.length)}`]))
+     }
+ 
+     function tW(WW, iW) {
+       let OW = 0;
+       for (const [mW, EW] of Object.entries(WW)) mW !== iW && (OW += EW.length);
+       return OW
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L876` → after: `L26521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26521) · [Before (L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L876)

```diff
-       ZB = BB, RB(), (0, jB.G)(pB.style, BB, ""), NB()
+       return `${ZW}${WW}`
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L880` → after: `L26525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26525) · [Before (L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L880)

```diff
-       BB.style.imageRendering = (0, oB.P)(OB.pixelated)
+       return `/node_modules/@plugins/${WW}/${iW}`
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L883-L891` → after: `L26528-L26533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26528-L26533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26528-L26533) · [Before (L883-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L883-L891)

```diff
-     function nB(BB, OB) {
-       const GB = (0, QB.p)("appManagerUpdated|clientEscMenuOptions", (() => {
-           SB(BB, zB()), OB()
-         })),
-         YB = (0, yB.A)(OB),
-         DB = (0, JB.o)(OB);
-       return RB(), qB.add(OB), () => {
-         GB(), YB(), DB(), qB.delete(OB)
-       }
+     function AW(WW) {
+       if (!WW.startsWith(ZW)) return null;
+       const iW = WW.slice(ZW.length);
+       return function(WW) {
+         return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(WW)
+       }(iW) ? iW : null
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L894` → after: `L26536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26536) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L894)

```diff
-   42011: (BB, OB, GB) => {
+   38014: (WW, iW, OW) => {
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L898` → after: `L26539-L26542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26539-L26542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26539-L26542) · [Before (L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L898)

```diff
-       d: () => DB
+       e: () => EW,
+       h: () => PW,
+       l: () => cW,
+       n: () => NW
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L900` → after: `L26544-L26547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26544-L26547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26544-L26547) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L900)

```diff
-     let YB = null;
+     var mW = OW(3327);
+     const EW = 5,
+       NW = "[SCHEMATIC]",
+       PW = 1024e4;
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L903` → after: `L26550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26550) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L903)

```diff
-       YB = BB
+       return WW.endsWith(".bloxdschem") && (0, mW.k)(WW.slice(0, -11) + ".ts") && WW.length <= 64
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L907-L912` → after: `L26554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26554) · [Before (L907-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L907-L912)

```diff
-       YB === BB && (YB = null)
-     }
- 
-     function oB() {
-       var BB;
-       null === (BB = YB) || void 0 === BB || BB()
+       return Object.fromEntries(Object.keys(WW).map((WW => [WW, NW])))
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L915` → after: `L26557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26557) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L915)

```diff
-   41964: (BB, OB, GB) => {
+   5605: (WW, iW, OW) => {
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L919-L922` → after: `L26563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26563) · [Before (L919-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L919-L922)

```diff
-       j: () => QB,
-       m: () => PB,
-       q: () => MB,
-       s: () => zB
+       j: () => PW
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L924-L957` → after: `L26565-L26704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26565-L26704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26565-L26704) · [Before (L924-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L924-L957)

```diff
-     var YB = GB(3210);
-     class DB extends Error {
-       constructor(BB, OB, GB) {
-         super(`${"fetch"===BB?"fetching":"decoding"} ${OB} failed`, GB), this.stage = BB, this.source = OB, this.name = "ShellImageError"
-       }
-     }
-     async function QB(BB) {
-       let OB, GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YB.I,
-         QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
-       if ("string" === typeof BB) try {
-         OB = await GB(BB)
-       } catch (oB) {
-         throw new DB("fetch", BB, {
-           cause: oB
-         })
-       } else OB = BB;
- ... (18 more removed lines; see GitHub link above)
+     const mW = ["sine", "triangle", "square", "sawtooth"],
+       EW = 55,
+       NW = {
+         soft: {
+           waveform: "sine",
+           pitchHz: 300,
+           glideSemitones: -.5,
+           durationMs: 80,
+           attackMs: 6,
+           releaseMs: 18,
+           lowpassHz: null,
+           volume: .6,
+           intonation: {
+             variationSemitones: 1.2,
+             declineSemitones: 1.5,
+             questionRiseSemitones: 3.5,
+ ... (124 more added lines; see GitHub link above)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L960-L963` → after: `L26707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26707) · [Before (L960-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L960-L963)

```diff
-       if (oB = BB, null !== BB) {
-         for (const [OB, GB] of jB) BB.ZDB(OB, GB);
-         jB.clear()
-       }
+       return "string" !== typeof WW ? WW : Object.hasOwn(NW, WW) ? NW[WW] : null
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L966-L976` → after: `L26710-L26711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26710-L26711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26710-L26711) · [Before (L966-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L966-L976)

```diff
-     function MB(BB) {
-       const OB = yB++;
-       return oB ? oB.ZDB(OB, BB) : jB.set(OB, BB), OB
-     }
-     async function PB(BB, OB, GB) {
-       const YB = await QB(BB, OB, GB);
-       return {
-         id: MB(YB),
-         width: YB.width,
-         height: YB.height
-       }
+     function LW(WW, iW, OW) {
+       return Math.min(OW, Math.max(iW, WW))
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L980-L983` → after: `L26715-L26736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26715-L26736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26715-L26736) · [Before (L980-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L980-L983)

```diff
-       var OB;
-       const GB = jB.get(BB);
-       if (GB) return GB.close(), void jB.delete(BB);
-       null === (OB = oB) || void 0 === OB || OB.NDB(BB)
+       const iW = LW(WW.durationMs, 10, 500),
+         OW = LW(WW.attackMs, 0, iW),
+         {
+           intonation: EW
+         } = WW;
+       return {
+         waveform: mW.includes(WW.waveform) ? WW.waveform : "sine",
+         pitchHz: LW(WW.pitchHz, 20, 4e3),
+         glideSemitones: LW(WW.glideSemitones, -24, 24),
+         durationMs: iW,
+         attackMs: OW,
+         releaseMs: LW(WW.releaseMs, 0, iW - OW),
+         lowpassHz: null === WW.lowpassHz ? null : LW(WW.lowpassHz, 20, 2e4),
+         volume: LW(WW.volume, 0, 2),
+         intonation: {
+           variationSemitones: LW(EW.variationSemitones, 0, 6),
+ ... (6 more added lines; see GitHub link above)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L986-L993` → after: `L26739-L26741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26739-L26741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26739-L26741) · [Before (L986-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L986-L993)

```diff
-   41911: (BB, OB, GB) => {
-     function YB(BB, OB) {
-       if (!Object.prototype.hasOwnProperty.call(BB, OB)) throw new TypeError("attempted to use private field on non-instance");
-       return BB
-     }
-     GB.d(OB, {
-       e: () => YB
-     })
+   10046: () => {},
+   11084: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/101.js` (Changed code · before: `L995-L1003` → after: `L26743-L26759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6eR26743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5d68e07e781a7e42a43c8ba594fdcd129d4585291cb3dc43a35e9505fa472f6e) · [After (L26743-L26759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/101.js#L26743-L26759) · [Before (L995-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/101.js#L995-L1003)

```diff
-   41913: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => DB
-     });
-     var YB = 0;
- 
-     function DB(BB) {
-       return "__private_" + YB++ + "_" + BB
-     }
+   19237: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm … [truncated]
+   },
+   21195: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
+   },
+   21203: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
+   },
+   21206: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
+   },
+   21210: WW => {
+     WW.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
+   },
+   21219: WW => {
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/102.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/102.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860)

#### 1. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L4-L6)

```diff
-   41543: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       startWasmPadGameplay: () => XB
+   5525: (WW, iW, OW) => {
+     OW.d(iW, {
+       d: () => MW,
+       f: () => UW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L8-L50` → after: `L9-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L9-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L9-L98) · [Before (L8-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L8-L50)

```diff
-     GB(41548);
-     var YB = GB(41553),
-       DB = GB(41562),
-       QB = GB(2050),
-       oB = GB(41579),
-       jB = GB(5287),
-       yB = GB(5274),
-       JB = GB(41587),
-       MB = GB(41593),
-       PB = GB(5305),
-       zB = GB(41675),
-       lB = GB(2619),
-       pB = GB(9518),
-       qB = GB(41555),
-       ZB = GB(9490),
-       NB = GB(39804);
- ... (27 more removed lines; see GitHub link above)
+     var mW = OW(1335),
+       EW = OW(27);
+     var NW = OW(344);
+     var PW = OW(643);
+     var LW = OW(3305),
+       cW = OW(5533),
+       wW = OW(5560),
+       tW = OW(5575);
+     class ZW {
+       constructor(WW, iW, OW, mW, EW, NW) {
+         this.id = WW, this.type = iW, this.parameters = OW, this.tearDownNotification = mW, this.onDonePromise = EW, this.resolveRequest = NW
+       }
+     }
+     const xW = new Set(["primary-fire", "alt-fire", "TouchDig", "TouchInteract", "TouchBoost"]);
+     class lW {
+       constructor(WW, iW, OW, mW, EW, NW) {
+ ... (74 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L52-L54` → after: `L100-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L100-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L100-L131) · [Before (L52-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L52-L54)

```diff
-       IB = () => {
-         const BB = (0, MB.j)();
-         return null !== BB && void 0 !== BB && BB.isCoreRunning ? BB : null
+       timedClick: class {
+         constructor(WW, iW, OW) {
+           var mW;
+           this.resolveRequest = iW, this.tearDownNotification = OW, this.startTime = void 0, this.timeWindowMs = void 0, this.isCompleted = !1, this.parameters = void 0, this.type = "timedClick", this.parameters = WW, this.timeWindowMs = null !== (mW = this.parameters.JN) && void … [truncated]
+         }
+         handleMouseInput(WW) {
+           if (!WW || this.isCompleted) return;
+           Date.now() - this.startTime <= this.timeWindowMs && this.complete(!0)
+         }
+         handleTick() {
+           if (this.isCompleted) return;
+           Date.now() - this.startTime > this.timeWindowMs && this.complete(!1)
+         }
+         complete(WW) {
+           this.isCompleted = !0, this.resolveRequest(WW)
+         }
+ ... (16 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L56-L77` → after: `L133-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L133-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L133-L193) · [Before (L56-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L56-L77)

```diff
-       FB = BB => oB.u.playerFlags(BB.api.apiView, 0),
-       iB = BB => null !== BB && oB.u.targetBlockId(BB.api.apiView, 0) !== oB.fd,
-       LB = () => {
-         const BB = (0, pB.b)(),
-           OB = new qB.d;
-         let GB = !1;
-         const YB = (BB, OB) => {
-             (0, lB.o)(jB.Q.PadLook, oB.Fd.Rate, BB, OB, 0)
-           },
-           DB = () => {
-             GB = !1, OB.reset(), YB(0, 0)
-           };
-         return {
-           update: (DB, QB, yB) => {
-             GB || (BB.discardPending(), GB = !0);
-             const JB = (0, qB.q)(OB, DB, QB, yB, performance.now());
- ... (6 more removed lines; see GitHub link above)
+       gravityBar: class {
+         constructor(WW, iW, OW) {
+           var mW;
+           this.resolveRequest = iW, this.tearDownNotification = OW, this.parameters = void 0, this.type = "gravityBar", this.catchZonePosition = .5, this.catchZoneVelocity = 0, this.isMouseDown = !1, this.moverPosition = .5, this.moverTarget = Math.random(), this.ticksUntilDirect … [truncated]
+           const EW = WW;
+           this.parameters = {
+             ...EW,
+             uN: NW.e.clamp(EW.uN, .05, 1)
+           }, this.progress = null !== (mW = EW.MN) && void 0 !== mW ? mW : 30, this.ticksUntilDirectionChange = this.randomNumTicksUntilDirectionChange()
+         }
+         handleMouseInput(WW) {
+           this.isMouseDown = WW
+         }
+         handleTick(WW) {
+           this.isCompleted || (this.updateMover(), this.updateCatchZone(), this.updateProgress(WW))
+         }
+ ... (45 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L80-L82` → after: `L196-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L196-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L196-L242) · [Before (L80-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L80-L82)

```diff
-       gB = () => {
-         const BB = IB();
-         return null !== BB && 0 !== (FB(BB) & oB.Id.PadSneakToggled)
+       precisionBar: class {
+         constructor(WW, iW, OW) {
+           var mW, EW, PW, LW, cW;
+           this.resolveRequest = iW, this.tearDownNotification = OW, this.startTime = void 0, this.speed = void 0, this.VN = void 0, this.isCompleted = !1, this.markerPosition = 0, this.parameters = void 0, this.type = "precisionBar";
+           const wW = WW;
+           this.parameters = {
+             ...wW,
+             speed: null !== (mW = wW.speed) && void 0 !== mW ? mW : .5,
+             VN: NW.e.clamp(wW.VN, .05, 1),
+             label: null !== (EW = wW.label) && void 0 !== EW ? EW : [{
+               str: "Click when the marker is within the green zone."
+             }],
+             icon: null !== (PW = wW.icon) && void 0 !== PW ? PW : null,
+             scale: null !== (LW = wW.scale) && void 0 !== LW ? LW : 1,
+             rotation: null !== (cW = wW.rotation) && void 0 !== cW ? cW : 0
+           }, this.speed = this.parameters.speed, this.VN = this.parameters.VN, this.startTime = Date.now()
+ ... (31 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L84-L88` → after: `L244-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L244-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L244-L269) · [Before (L84-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L84-L88)

```diff
-       rB = () => {
-         const BB = (BB => {
-           const OB = BB => function() {
-             return (0, zB.d)(), BB(...arguments)
-           };
+       rhythmClick: class {
+         constructor(WW, iW, OW) {
+           this.resolveRequest = iW, this.tearDownNotification = OW, this.parameters = void 0, this.type = "rhythmClick", this.shrinkStartTime = void 0, this.isCompleted = !1, this.successes = 0, this.misses = 0, this.lastClickResult = null, this.parameters = WW, this.shrinkStartT … [truncated]
+         }
+         handleMouseInput(WW) {
+           if (!WW || this.isCompleted) return;
+           const iW = this.getOuterCircleProgress();
+           if (iW <= this.parameters.XN && iW >= -this.parameters.XN) {
+             if (this.successes++, this.lastClickResult = !0, this.successes >= this.parameters.fN) return void this.complete(!0)
+           } else this.handleMiss();
+           this.shrinkStartTime = Date.now()
+         }
+         handleMiss() {
+           this.misses++, this.lastClickResult = !1, !(0, PW.K)(this.parameters.BN) && this.misses > this.parameters.BN ? this.complete(!1) : this.shrinkStartTime = Date.now()
+         }
+         handleTick() {
+ ... (10 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L90-L116` → after: `L271-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L271-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L271-L280) · [Before (L90-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L90-L116)

```diff
-             primaryFireDown: OB((BB => (dB(WB, oB.zd.Down | (BB ? oB.zd.Repeat : 0)), 0))),
-             primaryFireUp: OB((() => {
-               uB(WB)
-             })),
-             altFireDown: OB((() => (KB(AB), 0))),
-             altFireUp: OB((() => {
-               uB(AB)
-             })),
-             jumpDown: OB((() => {
-               mB(SB)
-             })),
-             specialActionDown: OB((BB => {
-               KB(kB[BB])
-             })),
-             specialActionUp: OB((BB => {
-               uB(kB[BB])
- ... (11 more removed lines; see GitHub link above)
+             type: this.type,
+             parameters: this.parameters,
+             state: {
+               outerCircleProgress: this.getOuterCircleProgress(),
+               successes: this.successes,
+               fN: this.parameters.fN,
+               misses: this.misses,
+               lastClickResult: this.lastClickResult
+             },
+             isActive: !0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L118-L194` → after: `L282-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L282-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L282-L316) · [Before (L118-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L118-L194)

```diff
-         })(IB);
-         let OB = !1,
-           GB = null;
-         const YB = () => {
-           var BB;
-           null === (BB = GB) || void 0 === BB || BB(), GB = null
-         };
-         return {
-           bodies: () => BB,
-           look: LB(),
-           move: (BB, GB) => {
-             var DB;
-             YB();
-             const {
-               bits: QB,
-               flips: jB
- ... (61 more removed lines; see GitHub link above)
+         }
+         tearDown() {
+           this.tearDownNotification()
+         }
+       }
+     };
+ 
+     function kW() {
+       (0, tW.j)(LW.y.Qte, jW ? LW.y.Qte : 0), jW ? EW.l.iZ("qteStateUpdated", jW.getState()) : EW.l.iZ("qteStateUpdated", {
+         type: null,
+         typeSpecificParameters: null,
+         isActive: !1
+       })
+     }
+     class sW {
+       constructor(WW, iW) {
+ ... (19 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L196-L199` → after: `L318-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L318-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L318-L333) · [Before (L196-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L196-L199)

```diff
-           },
-           pressTouchButton: BB => {
-             BB ? KB(fB) : uB(fB)
-           }
+           })),
+           LW = Promise.race([NW, PW]).then((() => {})),
+           cW = new ZW(WW, iW, OW, EW, LW, mW);
+         return bW.set(WW, cW), AW.enqueue(cW), jW || this.processNextQTE(), sW.create(NW, PW, EW)
+       }
+       static async processNextQTE() {
+         if (jW || AW.sZ()) return void(AW.sZ() && jW && (jW = null, kW()));
+         const WW = await AW.dequeue();
+         if (!bW.has(WW.id)) return void await this.processNextQTE();
+         bW.delete(WW.id);
+         const iW = new lW(WW.id, WW.type, WW.parameters, WW.resolveRequest, WW.onDonePromise, WW.tearDownNotification);
+         jW = iW, kW();
+         try {
+           await iW.waitUntilDone()
+         } catch (OW) {
+           console.error("Error while waiting for QTE to resolve:", OW.stack)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L201-L207` → after: `L335-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L335-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L335-L347) · [Before (L201-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L201-L207)

```diff
-       },
-       XB = () => {
-         const BB = (0, DB.e)(rB()),
-           OB = (0, YB.b)(),
-           GB = null;
-         return () => {
-           BB(), OB(), null === GB || void 0 === GB || GB()
+         jW === iW && (jW.cleanup(), jW = null, kW()), await this.processNextQTE()
+       }
+       static cancelQTE(WW) {
+         if (jW && jW.id === WW) return jW.tearDown(), jW = null, kW(), void this.processNextQTE();
+         const iW = bW.get(WW);
+         iW && (bW.delete(WW), iW.tearDownNotification())
+       }
+       static getCurrentState() {
+         return jW ? jW.getState() : {
+           type: null,
+           parameters: null,
+           state: null,
+           isActive: !1
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L211` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L357) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L211)

```diff
-   5274: (BB, OB, GB) => {
+   5533: (WW, iW, OW) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L213-L219` → after: `L359-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L359-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L359-L364) · [Before (L213-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L213-L219)

```diff
-       C: () => dB,
-       E: () => KB,
-       I: () => RB,
-       M: () => oB,
-       O: () => jB,
-       P: () => fB,
-       d: () => UB,
+       B: () => hW,
+       D: () => HW,
+       F: () => kW,
+       G: () => PW,
+       K: () => LW,
+       N: () => TW,
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L221` → after: `L366-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L366-L367) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L221)

```diff
-       i: () => mB,
+       g: () => MW,
+       k: () => uW,
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L224` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L371) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L224)

```diff
-       s: () => SB,
+       r: () => sW,
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L226-L227` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L373) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L226-L227)

```diff
-       w: () => VB,
-       z: () => kB
+       x: () => JW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L229` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L375) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L229)

```diff
-     var YB = GB(5276);
+     var mW = OW(5540);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L238` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L384) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L238)

```diff
-       QB = null !== BB && void 0 !== BB ? BB : DB
+       NW = null !== WW && void 0 !== WW ? WW : EW
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L330` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L476) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L330)

```diff
-       const QB = (0, YB.k)(OB),
+       const NW = (0, mW.g)(iW),
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L362` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L508) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L362)

```diff
-   5305: (BB, OB, GB) => {
+   5560: (WW, iW, OW) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L365-L366` → after: `L511-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L511-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L511-L547) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L365-L366)

```diff
-       d: () => QB,
-       g: () => oB,
+       f: () => NW,
+       g: () => LW
+     });
+     var mW = OW(3305),
+       EW = OW(5568);
+ 
+     function NW(WW) {
+       let {
+         action: iW,
+         flags: OW
+       } = WW;
+       return "mid-fire" === iW && 0 !== (OW & mW.e.AltLeftClick)
+     }
+     const PW = new Set;
+ 
+     function LW(WW) {
+ ... (21 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L368` → after: `L549-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L549-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L549-L551) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L368)

```diff
-       l: () => jB
+       m: () => PW,
+       n: () => mW,
+       q: () => LW
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L561-L565` → after: `L744-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L744-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L744-L749) · [Before (L561-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L561-L565)

```diff
-         TouchAction1: 191,
-         TouchAction2: 192,
-         TouchAction3: 193,
-         TouchAttack: 194,
-         TouchUse: 195
+         TouchZoom: 191,
+         TouchAction1: 192,
+         TouchAction2: 193,
+         TouchAction3: 194,
+         TouchAttack: 195,
+         TouchUse: 196
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L635-L636` → after: `L819-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L819-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L819-L821) · [Before (L635-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L635-L636)

```diff
-         "primary-fire": [194],
-         "alt-fire": [195]
+         Zoom: [191],
+         "primary-fire": [195],
+         "alt-fire": [196]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L640` → after: `L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L825) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L640)

```diff
-   41675: (BB, OB, GB) => {
+   5575: (WW, iW, OW) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L643` → after: `L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L828) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L643)

```diff
-       f: () => QB,
+       h: () => PW,
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L646-L668` → after: `L831-L832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L831-L832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L831-L832) · [Before (L646-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L646-L668)

```diff
-     let YB = null;
- 
-     function DB(BB) {
-       YB = BB
-     }
- 
-     function QB(BB) {
-       YB === BB && (YB = null)
-     }
- 
-     function oB() {
-       var BB;
-       null === (BB = YB) || void 0 === BB || BB()
-     }
-   },
-   5313: (BB, OB, GB) => {
- ... (7 more removed lines; see GitHub link above)
+     var mW = OW(3305),
+       EW = OW(3308);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L679` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L843) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L679)

```diff
-           DB !== OB && (OB = DB, BB(YB.f.UiCapture, YB.y.Keyboard, 0, 0, DB ? YB.y.Keyboard : 0))
+           EW !== iW && (iW = EW, WW(mW.k.UiCapture, mW.y.Keyboard, 0, 0, EW ? mW.y.Keyboard : 0))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L703` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L867) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L703)

```diff
-       yB.set(YB, (null !== (GB = yB.get(YB)) && void 0 !== GB ? GB : 0) & ~BB | OB & BB);
+       cW.set(mW, (null !== (OW = cW.get(mW)) && void 0 !== OW ? OW : 0) & ~WW | iW & WW);
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/102.js` (Changed code · before: `L706-L749` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-cf7cde3891a63c83c799f62b871b94f9e54baae7cfb0f8fca9d2a546f76b3860) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/102.js#L870) · [Before (L706-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/102.js#L706-L749)

```diff
-       return (0, DB.u)(BB, QB & BB)
-     }
-   },
-   37633: (BB, OB, GB) => {
-     function YB(BB) {
-       return BB.includes("Leaf Bed")
-     }
- 
-     function DB(BB) {
-       return / Bed(?: Head)?(?:\||$)/.test(BB) && !YB(BB)
-     }
- 
-     function QB(BB) {
-       return BB.includes(" Strongbed")
-     }
- 
- ... (28 more removed lines; see GitHub link above)
+       return (0, EW.z)(WW, NW & WW)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/103.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/103.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78)

#### 1. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/103.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/103.js#L2)

```diff
- export const ids = [103, 104];
+ export const ids = [103];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L4-L11` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/103.js#L4-L8) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/103.js#L4-L11)

```diff
-   5287: (BB, OB, GB) => {
-     GB.d(OB, {
-       $b: () => eB,
-       A: () => nB,
-       Bb: () => iB,
-       Cb: () => TB,
-       E: () => SB,
-       Eb: () => aB,
+   5533: (WW, iW, OW) => {
+     OW.d(iW, {
+       B: () => hW,
+       D: () => HW,
+       F: () => kW,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L15-L32` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/103.js#L11) · [Before (L15-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/103.js#L15-L32)

```diff
-       Kb: () => LB,
-       L: () => YB,
-       Mb: () => XB,
-       O: () => QB,
-       Ob: () => gB,
-       Q: () => AB,
-       R: () => xB,
-       Rb: () => ZB,
-       S: () => PB,
-       Sb: () => KB,
-       Tb: () => dB,
-       W: () => zB,
-       Xb: () => rB,
-       _: () => MB,
-       ac: () => wB,
-       bb: () => JB,
- ... (2 more removed lines; see GitHub link above)
+       N: () => TW,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L34-L38` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/103.js#L13) · [Before (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/103.js#L34-L38)

```diff
-       fb: () => yB,
-       fc: () => hB,
-       h: () => NB,
-       hc: () => fB,
-       jb: () => qB,
+       g: () => MW,
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L44-L56` → after: `L16-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L16-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/103.js#L16-L413) · [Before (L44-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/103.js#L44-L56)

```diff
-       nc: () => DB,
-       ob: () => uB,
-       oc: () => sB,
-       p: () => HB,
-       q: () => lB,
-       sb: () => IB,
-       tb: () => FB,
-       u: () => UB,
-       w: () => CB,
-       xb: () => mB
-     });
-     const YB = 32,
-       DB = 33.333333333333336,
+       n: () => UW,
+       o: () => SW,
+       r: () => sW,
+       v: () => KW,
+       x: () => JW
+     });
+     var mW = OW(5540);
+     const EW = {
+       lockPointer: () => !1,
+       unlockPointer: () => {},
+       leaveGame: () => {}
+     };
+     let NW = EW;
+ 
+     function PW(WW) {
+       NW = null !== WW && void 0 !== WW ? WW : EW
+ ... (382 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L58-L89` → after: `L415-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L415-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/103.js#L415-L475) · [Before (L58-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/103.js#L58-L89)

```diff
-         AbiVersion: 0,
-         Status: 1,
-         LastError: 2,
-         ErrorCount: 3,
-         FrameIndex: 4,
-         TicksRun: 5,
-         TicksDropped: 6,
-         Alpha: 7,
-         NetOutPtr: 8,
-         NetOutLen: 9,
-         WorkerOutPtr: 10,
-         WorkerOutLen: 11,
-         EventsPtr: 12,
-         EventsLen: 13,
-         ScenePtr: 14,
-         SceneLen: 15,
- ... (16 more removed lines; see GitHub link above)
+         forward: [21, 46],
+         backward: [31, 49],
+         left: [30, 47],
+         right: [32, 48],
+         sprint: [50, 51],
+         jump: [59],
+         crouch: [52, 41, 60, 61, 62, 53],
+         "primary-fire": [1],
+         "alt-fire": [3, 22],
+         SpecialAction1: [23],
+         SpecialAction2: [33],
+         ReloadGun: [23],
+         DropItem: [20],
+         "mid-fire": [2, 4],
+         Zoom: [42],
+         SwapCameraZoom: [29, 7],
+ ... (45 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L92-L95` → after: `L478-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L478-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/103.js#L478-L483) · [Before (L92-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/103.js#L92-L95)

```diff
-         NotYet: 0,
-         Drawn: 1,
-         Backstop: 2,
-         HeldBackstop: 3
+         jump: [188],
+         crouch: [189],
+         SwapCameraZoom: [190],
+         Zoom: [191],
+         "primary-fire": [195],
+         "alt-fire": [196]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L97-L631` → after: `L485-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L485-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/103.js#L485-L587) · [Before (L97-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/103.js#L97-L631)

```diff
-       jB = {
-         NotDrawn: 0,
-         Drawn: 1,
-         Paced: 2
-       },
-       yB = {
-         AheadMask: 15,
-         Defaulted: 128,
-         LagsShift: 8,
-         CountMask: 4095
-       },
-       JB = {
-         TerrainDrawn: 1,
-         ChunkRequested: 2,
-         ChunkStored: 4,
-         MeshLanded: 8,
- ... (519 more removed lines; see GitHub link above)
+       LW = [16]
+   },
+   42429: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => tW,
+       f: () => wW,
+       i: () => cW
+     });
+     var mW = OW(5551),
+       EW = OW(3305),
+       NW = OW(5575);
+     let PW = !1,
+       LW = !1;
+ 
+     function cW(WW) {
+       PW = !0;
+ ... (87 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L639-L685` → after: `L590-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L590-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/103.js#L590-L600) · [Before (L639-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/103.js#L639-L685)

```diff
-       fd: () => YB.Sb,
-       gb: () => WB,
-       gc: () => YB.cb,
-       ge: () => gB,
-       hc: () => IB,
-       i: () => qB,
-       ib: () => YB.L,
-       j: () => PO,
-       jd: () => YB.Tb,
-       kc: () => SB,
-       ke: () => LB,
-       ld: () => YB.Xb,
-       le: () => iB,
-       mb: () => YB.O,
-       me: () => yB,
-       n: () => kB,
- ... (31 more removed lines; see GitHub link above)
+       i: () => EW
+     });
+     let mW = null;
+ 
+     function EW(WW) {
+       mW = WW
+     }
+ 
+     function NW(WW) {
+       mW === WW && (mW = null)
+     }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L688-L800` → after: `L603-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L603-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/103.js#L603-L607) · [Before (L688-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/103.js#L688-L800)

```diff
-       return crypto.getRandomValues(new Uint32Array(jB))
-     }
-     const JB = {
-         Ok: 0,
-         Errors: 1,
-         Fatal: 2
-       },
-       MB = 16,
-       PB = {
-         Draws: 1,
-         NetAll: 2,
-         StopForSends: 4
-       },
-       zB = 3,
-       lB = {
-         ShowFog: 1,
- ... (97 more removed lines; see GitHub link above)
+       var WW;
+       null === (WW = mW) || void 0 === WW || WW()
+     }
+   },
+   42416: (WW, iW, OW) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/103.js` (Changed code · before: `L802-L976` → after: `L609-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-ee2bf0c1b34acacbf7df0779ab119fdd501679fd2c6b8890d01cdb710b6f2e78) · [After (L609-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/103.js#L609-L623) · [Before (L802-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/103.js#L802-L976)

```diff
-       return (BB | OB << 8) >>> 0
-     }
- 
-     function LB(BB) {
-       return 255 & BB
-     }
- 
-     function gB(BB) {
-       return BB >>> 8
-     }
- 
-     function rB(BB) {
-       return BB + 3 & -4
-     }
-     const XB = 16777216,
-       wB = 20;
- ... (159 more removed lines; see GitHub link above)
+       if (!Object.prototype.hasOwnProperty.call(WW, iW)) throw new TypeError("attempted to use private field on non-instance");
+       return WW
+     }
+     OW.d(iW, {
+       d: () => mW
+     })
+   },
+   42419: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => EW
+     });
+     var mW = 0;
+ 
+     function EW(WW) {
+       return "__private_" + mW++ + "_" + WW
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/104.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/104.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864)

#### 1. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L4` → after: `L4-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L4-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/104.js#L4-L216) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/104.js#L4)

```diff
-   5287: (BB, OB, GB) => {
+   42056: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       startWasmPadGameplay: () => pW
+     });
+     OW(42060);
+     var mW = OW(42067),
+       EW = OW(42086),
+       NW = OW(2061),
+       PW = OW(42094),
+       LW = OW(5551),
+       cW = OW(5533),
+       wW = OW(42103),
+       tW = OW(42109),
+       ZW = OW(5568),
+       xW = OW(42185),
+       lW = OW(3308),
+ ... (197 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L6-L11` → after: `L218-L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L218-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/104.js#L218-L220) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/104.js#L6-L11)

```diff
-       $b: () => eB,
-       A: () => nB,
-       Bb: () => iB,
-       Cb: () => TB,
-       E: () => SB,
-       Eb: () => aB,
+       B: () => hW,
+       D: () => HW,
+       F: () => kW,
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L15-L32` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/104.js#L223) · [Before (L15-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/104.js#L15-L32)

```diff
-       Kb: () => LB,
-       L: () => YB,
-       Mb: () => XB,
-       O: () => QB,
-       Ob: () => gB,
-       Q: () => AB,
-       R: () => xB,
-       Rb: () => ZB,
-       S: () => PB,
-       Sb: () => KB,
-       Tb: () => dB,
-       W: () => zB,
-       Xb: () => rB,
-       _: () => MB,
-       ac: () => wB,
-       bb: () => JB,
- ... (2 more removed lines; see GitHub link above)
+       N: () => TW,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L34-L35` → after: `L225-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L225-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/104.js#L225-L649) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/104.js#L34-L35)

```diff
-       fb: () => yB,
-       fc: () => hB,
+       g: () => MW,
+       k: () => uW,
+       m: () => nW,
+       n: () => UW,
+       o: () => SW,
+       r: () => sW,
+       v: () => KW,
+       x: () => JW
+     });
+     var mW = OW(5540);
+     const EW = {
+       lockPointer: () => !1,
+       unlockPointer: () => {},
+       leaveGame: () => {}
+     };
+     let NW = EW;
+ ... (409 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L37-L38` → after: `L651-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L651-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/104.js#L651-L763) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/104.js#L37-L38)

```diff
-       hc: () => fB,
-       jb: () => qB,
+       i: () => EW
+     });
+     let mW = null;
+ 
+     function EW(WW) {
+       mW = WW
+     }
+ 
+     function NW(WW) {
+       mW === WW && (mW = null)
+     }
+ 
+     function PW() {
+       var WW;
+       null === (WW = mW) || void 0 === WW || WW()
+     }
+ ... (97 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L48-L53` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/104.js#L767) · [Before (L48-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/104.js#L48-L53)

```diff
-       q: () => lB,
-       sb: () => IB,
-       tb: () => FB,
-       u: () => UB,
-       w: () => CB,
-       xb: () => mB
+       s: () => LW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/104.js` (Changed code · before: `L55-L580` → after: `L769-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864R769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-7817886898e798e27755d694ca4c316815ac3597c9606810abe2672c1adb1864) · [After (L769-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/104.js#L769-L790) · [Before (L55-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/104.js#L55-L580)

```diff
-     const YB = 32,
-       DB = 33.333333333333336,
-       QB = {
-         AbiVersion: 0,
-         Status: 1,
-         LastError: 2,
-         ErrorCount: 3,
-         FrameIndex: 4,
-         TicksRun: 5,
-         TicksDropped: 6,
-         Alpha: 7,
-         NetOutPtr: 8,
-         NetOutLen: 9,
-         WorkerOutPtr: 10,
-         WorkerOutLen: 11,
-         EventsPtr: 12,
- ... (510 more removed lines; see GitHub link above)
+     let mW = function(WW) {
+         return WW[WW.DEFAULT = 0] = "DEFAULT", WW[WW.BOAT = 1] = "BOAT", WW[WW.GLIDER = 2] = "GLIDER", WW[WW.BALLOON = 3] = "BALLOON", WW[WW.SLEEPING = 4] = "SLEEPING", WW[WW.RIDING_MOB = 5] = "RIDING_MOB", WW[WW.CAR = 6] = "CAR", WW[WW.HOVERCRAFT = 7] = "HOVERCRAFT", WW
+       }({}),
+       EW = function(WW) {
+         return WW[WW.WOOD = 0] = "WOOD", WW[WW.OBSIDIAN = 1] = "OBSIDIAN", WW[WW.SPEED = 2] = "SPEED", WW
+       }({}),
+       NW = function(WW) {
+         return WW[WW.WOOD = 0] = "WOOD", WW[WW.IRON = 1] = "IRON", WW[WW.GOLD = 2] = "GOLD", WW[WW.DIAMOND = 3] = "DIAMOND", WW
+       }({}),
+       PW = function(WW) {
+         return WW[WW.YELLOW = 0] = "YELLOW", WW[WW.WHITE = 1] = "WHITE", WW[WW.RED = 2] = "RED", WW[WW.PURPLE = 3] = "PURPLE", WW[WW.PINK = 4] = "PINK", WW[WW.ORANGE = 5] = "ORANGE", WW[WW.MAGENTA = 6] = "MAGENTA", WW[WW.LIME = 7] = "LIME", WW[WW.LIGHT_GRAY = 8] = "LIGHT_GRAY", W … [truncated]
+       }({}),
+       LW = function(WW) {
+         return WW[WW.ROTATION_1 = 0] = "ROTATION_1", WW[WW.ROTATION_2 = 1] = "ROTATION_2", WW[WW.ROTATION_3 = 2] = "ROTATION_3", WW[WW.ROTATION_4 = 3] = "ROTATION_4", WW
+       }({}),
+       cW = function(WW) {
+ ... (6 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/105.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/105.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L2)

```diff
- export const ids = [105, 702];
+ export const ids = [105, 106];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L4-L23` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L4) · [Before (L4-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L4-L23)

```diff
-   44631: (BB, OB, GB) => {
-     async function YB(BB, OB) {
-       const [{
-         clientSideServerUrls: YB
-       }, {
-         postJsonWithMetricsCookiesAndJsonResponse: DB
-       }, {
-         gameBridge: QB
-       }] = await Promise.all([Promise.resolve().then((() => GB(1186))), Promise.resolve().then((() => GB(1121))), Promise.resolve().then((() => GB(2023)))]), oB = QB.latest("connectedGame").websocketUrl;
-       if (!oB) throw new Error("AI Helper: not connected to a game server");
-       const jB = `${YB.getHttpUrlFromWebSocketUrl(oB)}${BB}`;
-       return await DB(jB, OB, {
-         retries: 0
-       })
-     }
-     GB.r(OB), GB.d(OB, {
- ... (4 more removed lines; see GitHub link above)
+   5551: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L25` → after: `L6-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L6-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L6-L53) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L25)

```diff
-       c: () => DB
+       $b: () => qW,
+       Bb: () => eW,
+       C: () => SW,
+       D: () => PW,
+       Db: () => RW,
+       Eb: () => BW,
+       H: () => LW,
+       Hb: () => fW,
+       Jb: () => vW,
+       K: () => mW,
+       M: () => NW,
+       N: () => MW,
+       Nb: () => VW,
+       Ob: () => gW,
+       Qb: () => jW,
+       R: () => FW,
+ ... (32 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L27-L44` → after: `L55-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L55-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L55-L580) · [Before (L27-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L27-L44)

```diff
-     var YB = GB(1282);
- 
-     function DB(BB) {
-       let {
-         href: OB,
-         children: GB
-       } = BB;
-       return (0, YB.jsxs)("a", {
-         className: "WorldCodeAiExternalLink",
-         href: OB,
-         target: "_blank",
-         rel: "noreferrer noopener",
-         children: [GB, " ", (0, YB.jsx)("span", {
-           "aria-hidden": "true",
-           children: "\u2197"
-         })]
- ... (2 more removed lines; see GitHub link above)
+     const mW = 32,
+       EW = 33.333333333333336,
+       NW = {
+         AbiVersion: 0,
+         Status: 1,
+         LastError: 2,
+         ErrorCount: 3,
+         FrameIndex: 4,
+         TicksRun: 5,
+         TicksDropped: 6,
+         Alpha: 7,
+         NetOutPtr: 8,
+         NetOutLen: 9,
+         WorkerOutPtr: 10,
+         WorkerOutLen: 11,
+         EventsPtr: 12,
+ ... (510 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L46-L49` → after: `L582-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L582-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L582-L679) · [Before (L46-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L46-L49)

```diff
-   44629: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       WorldCodeAiPanel: () => kz,
-       default: () => dz
+   5546: (WW, iW, OW) => {
+     OW.d(iW, {
+       $d: () => GW,
+       A: () => bi,
+       Ac: () => mW.pb,
+       Bb: () => Ei,
+       Be: () => AW,
+       C: () => FW,
+       Cd: () => mW.kc,
+       D: () => mW.o,
+       Dc: () => mW.tb,
+       E: () => wW,
+       Eb: () => mW.U,
+       Ed: () => mW.lc,
+       G: () => mW.q,
+       Hb: () => EW.h,
+ ... (82 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L51-L113` → after: `L681-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L681-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L681-L685) · [Before (L51-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L51-L113)

```diff
-     var YB = GB(56),
-       DB = GB(1090),
-       QB = GB.n(DB),
-       oB = GB(1282);
- 
-     function jB(BB) {
-       let {
-         title: OB,
-         children: GB,
-         isCalm: DB = !1,
-         isElsewhere: jB = !1,
-         defaultOpen: yB = !1,
-         isOpen: JB,
-         onToggle: MB,
-         className: PB
-       } = BB;
- ... (47 more removed lines; see GitHub link above)
+     var mW = OW(5551),
+       EW = OW(3305);
+     const NW = Math.round(1e3 / mW.rc),
+       PW = 4,
+       LW = 2;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L115-L162` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L687-L688) · [Before (L115-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L115-L162)

```diff
-     function VB(BB) {
-       return BB === NB.h || BB === NB.n
-     }
- 
-     function SB(BB) {
-       const OB = AB(BB);
-       return null === OB ? BB : `${ZB.d}${OB}`
-     }
-     var nB = GB(204),
-       UB = GB(44559),
-       fB = GB.n(UB);
- 
-     function kB(BB) {
-       const OB = [];
-       let GB = 0;
-       return BB.split("\n").forEach(((BB, YB) => {
- ... (32 more removed lines; see GitHub link above)
+     function cW() {
+       return crypto.getRandomValues(new Uint32Array(LW))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L164-L175` → after: `L690-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L690-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L690-L707) · [Before (L164-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L164-L175)

```diff
- 
-     function uB(BB, OB) {
-       if ("" === OB.trim()) return null;
-       const GB = kB(BB),
-         YB = function(BB) {
-           return BB.split("\n").map((BB => BB.trim())).filter(((BB, OB, GB) => "" !== BB || OB > 0 && OB < GB.length - 1))
-         }(OB),
-         DB = KB(GB, YB, (BB => BB.trim()));
-       if (null !== DB) return {
-         from: DB.from,
-         to: DB.to,
-         isLoose: !DB.isOnly
+     const wW = {
+         Ok: 0,
+         Errors: 1,
+         Fatal: 2
+       },
+       tW = 16,
+       ZW = {
+         Draws: 1,
+         NetAll: 2,
+         StopForSends: 4
+       },
+       xW = 3,
+       lW = {
+         ShowFog: 1,
+         Lighting: 2,
+         ChunkFade: 4,
+ ... (2 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L475-L481` → after: `L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L711) · [Before (L475-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L475-L481)

```diff
-       let OB = BB.replace(/\s+/g, " ").trim();
-       if ("" === OB || YO.test(OB)) return null;
-       if (OB.length > GO) {
-         const BB = OB.slice(0, GO);
-         OB = `${BB.slice(0,Math.max(BB.lastIndexOf(" "),60)).trimEnd()}\u2026`
-       }
-       return OB.charAt(0).toUpperCase() + OB.slice(1)
+       return (WW.nametagsHidden ? YW.NametagsHidden : 0) | (WW.crouchToggle ? YW.CrouchToggle : 0) | (WW.bhopDisabled ? YW.BhopDisabled : 0) | (WW.disableBobbing ? YW.DisableBobbing : 0) | (null !== WW.ezTowering ? YW.EzTowering : 0) | ("jump" === WW.ezTowering ? YW.EzTowerJump : … [truncated]
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L483` → after: `L713-L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L713-L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L713-L747) · [Before (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L483)

```diff
-     const QO = /(?:===?\s*|\bcase\s+|startsWith\(\s*)["'`]\/?([a-zA-Z][\w-]{0,20})/g;
+     const bW = {
+         Flags: 0,
+         PhysicsVersion: 1,
+         InbuiltOverwritten: 2,
+         AltComplete: 3,
+         ProbeUsedProp: 4
+       },
+       jW = {
+         Ready: 1,
+         SendFnReplaced: 2,
+         Butto: 4,
+         IdentityChanged: 32,
+         CheckFuncHit: 128,
+         OriginStackHit: 256
+       },
+       UW = {
+ ... (19 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L486-L488` → after: `L750-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L750-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L750-L755) · [Before (L486-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L486-L488)

```diff
-       var OB, GB;
-       const YB = null === (OB = /\(([^)]*)\)/.exec(BB)) || void 0 === OB || null === (GB = OB[1].split(",")[1]) || void 0 === GB ? void 0 : GB.trim();
-       return YB && /^[A-Za-z_$][\w$]*$/.test(YB) ? [...BB.matchAll(/\b([A-Za-z_$][\w$]*)\s*\(([^()]*)\)/g)].flatMap((BB => BB[2].split(",").some((BB => BB.trim() === YB)) ? [BB[1]] : [])) : []
+       const iW = {
+         off: 0,
+         lit: lW.CellLight,
+         all: lW.CellLight | lW.CellLightUnlit
+       } [WW.cellLight];
+       return (WW.showFog ? lW.ShowFog : 0) | (WW.lighting ? lW.Lighting : 0) | (WW.chunkFade ? lW.ChunkFade : 0) | iW
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L492-L577` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L802) · [Before (L492-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L492-L577)

```diff
-       const GB = new Set,
-         YB = new Set,
-         DB = new Set,
-         QB = Object.values(BB).map((BB => {
-           const OB = aB(BB),
-             GB = OB.filter((BB => "playerCommand" === BB.name)).map((OB => BB.slice(OB.from, OB.to)));
-           return {
-             text: BB,
-             found: OB,
-             own: GB
-           }
-         })),
-         oB = new Set(QB.flatMap((BB => {
-           let {
-             own: OB
-           } = BB;
- ... (70 more removed lines; see GitHub link above)
+       return (WW | iW << 8) >>> 0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L581-L582` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L806) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L581-L582)

```diff
-       const OB = BB.split(/\n|\|/).map((BB => BB.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((BB => "" !== BB)).slice(0, 5).map((BB => BB.length > 90 ? `${BB.slice(0,89).trimEnd()}\u2026` : BB));
-       return OB.length >= 2 ? OB : []
+       return 255 & WW
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L587` → after: `L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L810) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L587)

```diff
-       return BB.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
+       return WW >>> 8
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L591-L594` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L814) · [Before (L591-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L591-L594)

```diff
-       const OB = new Set;
-       for (const GB of BB.matchAll(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/gm)) OB.add(GB[1]);
-       for (const GB of BB.matchAll(/^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|[A-Za-z_$][\w$]*\s*=>)/gm)) OB.add(GB[1]);
-       return [...OB]
+       return WW + 3 & -4
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L596-L627` → after: `L816-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L816-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L816-L827) · [Before (L596-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L596-L627)

```diff
- 
-     function RO(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const YB = new Set(OB),
-         DB = new Map;
-       for (const PB of OB) {
-         var QB;
-         const BB = ZO(PB);
-         DB.set(BB, [...null !== (QB = DB.get(BB)) && void 0 !== QB ? QB : [], PB])
-       }
-       const oB = NO(BB),
-         jB = new Set(NO(GB)),
-         yB = [];
-       let JB = BB;
-       for (const PB of oB) {
-         var MB;
- ... (16 more removed lines; see GitHub link above)
+     const VW = 16777216,
+       pW = 20;
+     const fW = 8,
+       CW = 8,
+       XW = 16777216,
+       BW = {
+         JobResult: 1,
+         WorkerStarted: 2,
+         WorkerLost: 3,
+         WorldgenResult: 4,
+         WorldgenStarted: 5,
+         WorldgenLost: 6
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L631-L632` → after: `L830-L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L830-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L830-L834) · [Before (L631-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L631-L632)

```diff
-         type: "string",
-         description: "A few plain words for the creator on what this change does, under 80 characters"
+         Ok: 0,
+         Refused: 1,
+         Trapped: 2,
+         NotHeld: 3,
+         HeapRefused: 4
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L635-L638` → after: `L838-L839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L838-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L838-L839) · [Before (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L635-L638)

```diff
-         readOnlyHint: !0,
-         destructiveHint: !1,
-         idempotentHint: !0,
-         openWorldHint: !1
+         Lost: 0,
+         Gone: 1
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L640-L1106` → after: `L841-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L841-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L841-L847) · [Before (L640-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L640-L1106)

```diff
-       nO = [{
-         name: "write_file",
-         title: "Write a file",
-         description: "Replaces a file with new code, or makes a new file",
-         inputSchema: {
-           type: "object",
-           properties: {
-             path: {
-               type: "string",
-               description: "The file's path, e.g. index.js"
-             },
-             why: VO,
-             content: {
-               type: "string",
-               description: "The whole new file"
-             }
- ... (451 more removed lines; see GitHub link above)
+       IW = {
+         Init: 1,
+         Mesh: 2,
+         WorldgenSeed: 3,
+         Generate: 4,
+         Retire: 5
+       };
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L1109-L1111` → after: `L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L850) · [Before (L1109-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L1109-L1111)

```diff
-       const OB = nO.find((OB => OB.name === BB));
-       if (!OB) throw new Error(`No AI Helper tool ${BB}`);
-       return OB
+       return WW === IW.WorldgenSeed || WW === IW.Generate
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L1113-L1116` → after: `L852-L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L852-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L852-L929) · [Before (L1113-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L1113-L1116)

```diff
-     const kO = nO.map((BB => BB.name)).filter((BB => "plan" !== BB && "remember" !== BB)).join("|"),
-       dO = new RegExp(String.raw`^(?:\s*(?:We(?:'ll|'d| will| need to| should| must| can(?!'t))|Will use|Need to|Simpler:)(?:[^\n.]*\.(?=[A-Z])|[^\n]*(?:\n+|$))|\s*(?:Now,? )?(?:I'll |I will |[Ll]et's |[Ll]et me )?(?:[Ww]rite|[Mm]ake|[Ss]end|[Oo]utput|[Pp]roduce|[Uu]se|[Dd]o|[Cc] … [truncated]
-       KO = [new RegExp(String.raw`(?:^|[^\w"</=.])(?:${kO})\b(?!\s*\()`), /\btool calls?\b|^(?:so,? )?(?:(?:we(?:'ll| will)?|I'll|let's) (?:produce|output|generate)|now (?:produce|output))\b|^The user (?:wants?|wanted|asks?|asked|requests?|requested|says|said)\b/i, /^We (?:need|h … [truncated]
-       uO = /[.!?](?=[ \t]|[A-Z]|$)|\n|$/g;
+     const rW = 4,
+       zW = 99,
+       FW = {
+         PAIRS_MAX: 16,
+         FIXED_WORDS: 2,
+         PAIR_WORDS: 2,
+         WORDS_MAX: 34
+       },
+       QW = {
+         BYTES: 12,
+         WEBGPU: 1,
+         GL: 2,
+         WEBGPU_LOSSES_MAX: 2,
+         LOST: 0,
+         PIPELINE_FAILED: 1,
+         RESTORE_LOST: 2
+ ... (62 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L1119-L1136` → after: `L932-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L932-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L932-L934) · [Before (L1119-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L1119-L1136)

```diff
-       const OB = BB.trim();
-       return KO.some((BB => BB.test(OB)))
-     }
- 
-     function IO(BB, OB) {
-       const GB = BB.replace(dO, "");
-       return OB ? function(BB) {
-         const OB = BB.indexOf("```"),
-           GB = -1 === OB ? BB : BB.slice(0, OB);
-         let YB = -1,
-           DB = -1,
-           QB = 0;
-         for (const oB of GB.matchAll(uO)) {
-           const BB = oB.index + oB[0].length;
-           mO(GB.slice(QB, BB)) && (YB = -1 === YB ? QB : YB, DB = BB), QB = BB
-         }
- ... (2 more removed lines; see GitHub link above)
+       for (const [iW, OW] of Object.entries(mW.o))
+         if (OW === WW) return iW;
+       return `Unknown${WW}`
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L1142-L1176` → after: `L938-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L938-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L938-L947) · [Before (L1142-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L1142-L1176)

```diff
-       const OB = "string" === typeof BB ? BB.split(/[./:]/).pop() : void 0;
-       return function(BB) {
-         return nO.some((OB => OB.name === BB))
-       }(OB) ? OB : null
-     }
- 
-     function gO(BB, OB) {
-       return GB => {
-         const YB = [];
-         let DB;
-         for (const yB of GB.matchAll(BB)) {
-           var QB;
-           const BB = LO(yB[1]);
-           if (null === BB) continue;
-           const JB = {};
-           for (const GB of yB[2].matchAll(OB)) {
- ... (19 more removed lines; see GitHub link above)
+       return {
+         status: WW[mW.M.Status],
+         lastError: WW[mW.M.LastError],
+         lastErrorDetail: WW[mW.M.LastErrorDetail],
+         errorCount: WW[mW.M.ErrorCount],
+         frameIndex: WW[mW.M.FrameIndex],
+         tickIndex: WW[mW.M.TickIndex],
+         renderPending: WW[mW.M.RenderPending],
+         firstView: WW[mW.M.FirstView],
+         chunksCancelled: WW[mW.M.ChunksCancelled]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L1181-L1194` → after: `L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L960) · [Before (L1181-L1194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L1181-L1194)

```diff
-       return BB.replace(/\\(["\\nt])/g, ((BB, OB) => "n" === OB ? "\n" : "t" === OB ? "\t" : OB))
-     }
- 
-     function XO(BB) {
-       let OB = null !== BB && void 0 !== BB ? BB : {};
-       if ("string" === typeof OB) try {
-         OB = JSON.parse("" === OB ? "{}" : OB)
-       } catch {
-         return null
-       }
-       if ("object" !== typeof OB || null === OB) return null;
-       const GB = {};
-       for (const [YB, DB] of Object.entries(OB)) "string" === typeof DB ? GB[YB] = iO.has(YB) && FO.test(DB) && !DB.includes("\n") ? rO(DB) : DB : "boolean" === typeof DB || "number" === typeof DB ? GB[YB] = String(DB) : "object" !== typeof DB || null === DB || Array.isArray(DB)  … [truncated]
-       return GB
+       return "none" !== WW
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L1198-L1205` → after: `L964-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L964-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L964-L971) · [Before (L1198-L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L1198-L1205)

```diff
-       let GB = 0,
-         YB = !1;
-       for (let DB = OB; DB < BB.length; DB++) {
-         const OB = BB[DB];
-         if (YB) "\\" === OB ? DB++ : '"' === OB && (YB = !1);
-         else if ('"' === OB) YB = !0;
-         else if ("{" === OB) GB++;
-         else if ("}" === OB && (GB--, 0 === GB)) return DB + 1
+       if (!WW) return "none";
+       switch (iW) {
+         case mW.V.Drawn:
+           return "drawn";
+         case mW.V.Paced:
+           return "paced";
+         default:
+           return "skipped"
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/105.js` (Changed code · before: `L1210-L1217` → after: `L975-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ffR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-485b0e035a6abbe71282d183c42df9261efbe25477edbea3e66a3be8c43591ff) · [After (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/105.js#L975-L976) · [Before (L1210-L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/105.js#L1210-L1217)

```diff
-     function EO(BB, OB) {
-       let GB = BB;
-       for (const {
-           call: YB,
-           index: DB
-         }
-         of OB) GB = GB.slice(0, DB) + " ".repeat(YB.source.length) + GB.slice(DB + YB.source.length);
-       return GB
+     function PW(WW) {
+       return "drawn" === WW
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/106.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/106.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66)

#### 1. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L4-L130` → after: `L4-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L4-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/106.js#L4-L53) · [Before (L4-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/106.js#L4-L130)

```diff
-   44437: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       DOCS_AGENT_PART_CHARS: () => gO.c,
-       DOCS_LLMS_FULL_TXT_PATH: () => gO.e,
-       DOCS_LLMS_TXT_PATH: () => gO.h,
-       DOCS_LLMS_TXT_URL: () => gO.l,
-       ROOT_LLMS_TXT_PATH: () => gO.n,
-       allGamemodeSettings: () => YB.b,
-       arcadeModeStaticConfig: () => qB.b,
-       arenaStaticConfig: () => DO,
-       backroomsStaticConfig: () => YO.c,
-       battleBoxStaticConfig: () => yO,
-       bedwarsStaticConfig: () => uB.d,
-       bloxdAggregatorConfig: () => jB.d,
-       bloxdPreprodAggregatorConfig: () => yB.b,
-       bloxdStagingAggregatorConfig: () => JB.b,
- ... (111 more removed lines; see GitHub link above)
+   5551: (WW, iW, OW) => {
+     OW.d(iW, {
+       $b: () => qW,
+       Bb: () => eW,
+       C: () => SW,
+       D: () => PW,
+       Db: () => RW,
+       Eb: () => BW,
+       H: () => LW,
+       Hb: () => fW,
+       Jb: () => vW,
+       K: () => mW,
+       M: () => NW,
+       N: () => MW,
+       Nb: () => VW,
+       Ob: () => gW,
+ ... (34 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/106.js` (Changed code · before: `L132-L505` → after: `L55-L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-eb57953f7bb07b819f5cd0d3f9dc42a287d59c51271713b29b59eb88582f5e66) · [After (L55-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/106.js#L55-L580) · [Before (L132-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/106.js#L132-L505)

```diff
-     var YB = GB(791);
- 
-     function DB(BB) {
-       var OB, GB;
-       return null !== (OB = null === (GB = (0, YB.j)(BB)) || void 0 === GB ? void 0 : GB.defaultListedVariation) && void 0 !== OB ? OB : BB
-     }
-     var QB = GB(1044),
-       oB = GB(1074),
-       jB = GB(789),
-       yB = GB(776),
-       JB = GB(780),
-       MB = GB(774),
-       PB = GB(767),
-       zB = GB(799),
-       lB = GB(825),
-       pB = GB(802),
- ... (358 more removed lines; see GitHub link above)
+     const mW = 32,
+       EW = 33.333333333333336,
+       NW = {
+         AbiVersion: 0,
+         Status: 1,
+         LastError: 2,
+         ErrorCount: 3,
+         FrameIndex: 4,
+         TicksRun: 5,
+         TicksDropped: 6,
+         Alpha: 7,
+         NetOutPtr: 8,
+         NetOutLen: 9,
+         WorkerOutPtr: 10,
+         WorkerOutLen: 11,
+         EventsPtr: 12,
+ ... (510 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/107.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/107.js` (427 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3)

```diff
- export const ids = [10, 13, 14, 16, 17, 19, 21, 23, 24, 25, 27, 29, 107, 152];
+ export const ids = [107, 711];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L5-L33` → after: `L4-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L4-L17) · [Before (L5-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L5-L33)

```diff
-   39980: (BB, OB, GB) => {
-     var YB = {
-       "./bedwars/bedwarsClient": 39987,
-       "./bridgeBattle/bridgeBattleClient": 39993,
-       "./buildAFactory2/buildAFactory2Client": 39142,
-       "./classic/classicClient": 40001,
-       "./classic/smp2Client": 40007,
-       "./clutch/clutchClient": 40014,
-       "./containmentBreach/containmentBreachClient": 40020,
-       "./cooking/cookingClient": 40147,
-       "./defusal/defusalClient": 40152,
-       "./frontline/frontlineClient": 40161,
-       "./goalRush/goalRushClient": 40177,
-       "./greenville/greenvilleClient": 40181,
-       "./hideseek/hideseekClient": 40213,
-       "./luckyBedwars/luckyBedwarsClient": 40220,
- ... (13 more removed lines; see GitHub link above)
+   53658: (WW, iW, OW) => {
+     async function mW(WW, iW) {
+       const [{
+         clientSideServerUrls: mW
+       }, {
+         postJsonWithMetricsCookiesAndJsonResponse: EW
+       }, {
+         gameBridge: NW
+       }] = await Promise.all([Promise.resolve().then((() => OW(1185))), Promise.resolve().then((() => OW(1111))), Promise.resolve().then((() => OW(2037)))]), PW = NW.latest("connectedGame").websocketUrl;
+       if (!PW) throw new Error("AI Helper: not connected to a game server");
+       const LW = `${mW.getHttpUrlFromWebSocketUrl(PW)}${WW}`;
+       return await EW(LW, iW, {
+         retries: 0
+       })
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L37-L43` → after: `L30-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L30-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L30-L43) · [Before (L37-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L37-L43)

```diff
-       return Promise.resolve().then((() => {
-         if (!GB.o(YB, BB)) {
-           var OB = new Error("Cannot find module '" + BB + "'");
-           throw OB.code = "MODULE_NOT_FOUND", OB
-         }
-         return YB[BB]
-       }))
+       let {
+         href: iW,
+         children: OW
+       } = WW;
+       return (0, mW.jsxs)("a", {
+         className: "WorldCodeAiExternalLink",
+         href: iW,
+         target: "_blank",
+         rel: "noreferrer noopener",
+         children: [OW, " ", (0, mW.jsx)("span", {
+           "aria-hidden": "true",
+           children: "\u2197"
+         })]
+       })
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L47-L85` → after: `L46-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L46-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L46-L54) · [Before (L47-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L47-L85)

```diff
-   39508: (BB, OB, GB) => {
-     var YB = {
-       "./animator.ts": 37769,
-       "./autoRemoveMesh.ts": 39515,
-       "./autoRotate.js": 39485,
-       "./bullet.js": 39522,
-       "./cameraShake.ts": 39524,
-       "./cape.ts": 39487,
-       "./crouchingHandler.ts": 39539,
-       "./doOnFirstTick.ts": 39528,
-       "./entityMultilineText.ts": 39542,
-       "./entityName.ts": 39557,
-       "./flashingMeshOverlay.js": 39576,
-       "./floating.ts": 39588,
-       "./forcedCameraTransition.ts": 39597,
-       "./fourLeggedMesh.ts": 39479,
- ... (23 more removed lines; see GitHub link above)
+   53655: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       WorldCodeAiPanel: () => ux,
+       default: () => ox
+     });
+     var mW = OW(62),
+       EW = OW(1089),
+       NW = OW.n(EW),
+       PW = OW(1283);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L88-L89` → after: `L57-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L57-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L57-L85) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L88-L89)

```diff
-       var OB = QB(BB);
-       return GB(OB)
+       let {
+         title: iW,
+         children: OW,
+         isCalm: EW = !1,
+         isElsewhere: LW = !1,
+         defaultOpen: cW = !1,
+         isOpen: wW,
+         onToggle: tW,
+         className: ZW
+       } = WW;
+       const [xW, lW] = (0, mW.useState)(cW), AW = null !== wW && void 0 !== wW ? wW : xW;
+       return (0, PW.jsxs)("div", {
+         className: NW()("WorldCodeAiLog", EW && "WorldCodeAiLog-calm", LW && "WorldCodeAiLog-elsewhere", AW && "WorldCodeAiLog-open", ZW),
+         children: [(0, PW.jsxs)("button", {
+           className: "WorldCodeAiLogToggle",
+           "aria-expanded": AW,
+ ... (13 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L91-L95` → after: `L87-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L87-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L87-L108) · [Before (L91-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L91-L95)

```diff
- 
-     function QB(BB) {
-       if (!GB.o(YB, BB)) {
-         var OB = new Error("Cannot find module '" + BB + "'");
-         throw OB.code = "MODULE_NOT_FOUND", OB
+     var cW = OW(2037),
+       wW = OW(7473),
+       tW = OW(1532),
+       ZW = OW(38041),
+       xW = OW(1391),
+       lW = OW(5488),
+       AW = OW(38026),
+       bW = OW(38060),
+       jW = OW(1685),
+       UW = OW(5582),
+       kW = OW(7463);
+     const sW = new URL(jW.d).host;
+ 
+     function MW(WW) {
+       const iW = WW.trim();
+       let OW;
+ ... (6 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L97` → after: `L110-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L110-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L110-L112) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L97)

```diff
-       return YB[BB]
+       if ("https:" !== OW.protocol && "http:" !== OW.protocol || OW.host !== sW && OW.host !== `www.${sW}`) return null;
+       const mW = OW.pathname.toLowerCase();
+       return KW(mW) || null !== (0, UW.I)(mW) ? mW : (0, UW.G)(mW)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L119-L120` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L116) · [Before (L119-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L119-L120)

```diff
-       var OB = QB(BB);
-       return GB(OB)
+       return WW === UW.k || WW === UW.s
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L124-L128` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L120-L121) · [Before (L124-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L124-L128)

```diff
-       if (!GB.o(YB, BB)) {
-         var OB = new Error("Cannot find module '" + BB + "'");
-         throw OB.code = "MODULE_NOT_FOUND", OB
-       }
-       return YB[BB]
+       const iW = MW(WW);
+       return null === iW ? WW : `${jW.d}${iW}`
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L130-L158` → after: `L123-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L123-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L123-L125) · [Before (L130-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L130-L158)

```diff
-     DB.keys = function() {
-       return Object.keys(YB)
-     }, DB.resolve = QB, BB.exports = DB, DB.id = 39500
-   },
-   40027: (BB, OB, GB) => {
-     var YB = {
-       "./breach-zero-uncaught.webp": 40034,
-       "./breach-zero.webp": 40042,
-       "./brood-father-uncaught.webp": 40050,
-       "./brood-father.webp": 40059,
-       "./carousel-uncaught.webp": 40065,
-       "./carousel.webp": 40068,
-       "./deadlock-uncaught.webp": 40077,
-       "./deadlock.webp": 40085,
-       "./doom-warlord-uncaught.webp": 40092,
-       "./doom-warlord.webp": 40094,
- ... (13 more removed lines; see GitHub link above)
+     var YW = OW(192),
+       yW = OW(53597),
+       TW = OW.n(yW);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L161-L162` → after: `L128-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L128-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L128-L136) · [Before (L161-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L161-L162)

```diff
-       var OB = QB(BB);
-       return GB(OB)
+       const iW = [];
+       let OW = 0;
+       return WW.split("\n").forEach(((WW, mW) => {
+         iW.push({
+           text: WW,
+           from: OW,
+           index: mW
+         }), OW += WW.length + 1
+       })), iW
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L166-L170` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L140) · [Before (L166-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L166-L170)

```diff
-       if (!GB.o(YB, BB)) {
-         var OB = new Error("Cannot find module '" + BB + "'");
-         throw OB.code = "MODULE_NOT_FOUND", OB
-       }
-       return YB[BB]
+       return WW.replace(/^\s*\/\/.*$/, "").replace(/\s+/g, "").replace(/['`]/g, '"').replace(/[;,]+$/, "")
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L203-L220` → after: `L143-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L143-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L143-L157) · [Before (L203-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L203-L220)

```diff
-     function fB(BB, OB, GB, YB, DB, QB, oB, jB, yB) {
-       var JB, MB = NB,
-         PB = RB;
-       for (JB = 0; JB < 3; JB++) {
-         var zB = 0 === JB ? GB : 1 === JB ? YB : DB;
-         MB[JB] = zB + BB[OB + JB], PB[JB] = zB + BB[OB + JB + 3]
-       }
-       if (QB[0] < PB[0] - yB && oB[0] > MB[0] + yB && QB[1] < PB[1] - yB && oB[1] > MB[1] + yB && QB[2] < PB[2] - yB && oB[2] > MB[2] + yB) return -1;
-       var lB = -1 / 0,
-         pB = 1 / 0,
-         qB = -1;
-       for (JB = 0; JB < 3; JB++) {
-         var ZB = jB[JB];
-         if (0 !== ZB) {
-           var AB = ZB > 0 ? (MB[JB] - oB[JB]) / ZB : (PB[JB] - QB[JB]) / ZB,
-             VB = ZB > 0 ? (PB[JB] - yB - QB[JB]) / ZB : (MB[JB] + yB - oB[JB]) / ZB;
- ... (2 more removed lines; see GitHub link above)
+     function HW(WW, iW, OW) {
+       if (0 === iW.length) return null;
+       let mW = null;
+       for (let EW = 0; EW + iW.length <= WW.length; EW++) {
+         if (iW.every(((iW, mW) => OW(WW[EW + mW].text) === iW))) {
+           if (mW) return {
+             ...mW,
+             isOnly: !1
+           };
+           const OW = WW[EW + iW.length - 1];
+           mW = {
+             from: WW[EW].from,
+             to: OW.from + OW.text.length
+           }
+         }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L222` → after: `L159-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L159-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L159-L162) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L222)

```diff
-       return -1 === qB || lB > 1 || pB <= 1e-9 ? -1 : (WB[0] = qB, lB < 0 ? 0 : lB)
+       return mW ? {
+         ...mW,
+         isOnly: !0
+       } : null
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L229-L246` → after: `L165-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L165-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L165-L203) · [Before (L229-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L229-L246)

```diff
-     function mB(BB, OB, GB, JB) {
-       var PB = Math.sqrt(BB[0] * BB[0] + BB[1] * BB[1] + BB[2] * BB[2]);
-       if (0 === PB) return PB;
-       for (var zB = 0; zB < 3; zB++) {
-         var lB = BB[zB] >= 0,
-           pB = lB ? 1 : -1;
-         oB[zB] = pB;
-         var qB = lB ? GB[zB] : OB[zB],
-           ZB = lB ? OB[zB] : GB[zB];
-         YB[zB] = ZB;
-         var NB = Math.floor(qB - pB * JB);
-         DB[zB] = NB, QB[zB] = Math.floor(ZB + pB * JB);
-         var RB = BB[zB] / PB;
-         MB[zB] = RB;
-         var WB = Math.abs(1 / RB);
-         jB[zB] = WB;
- ... (2 more removed lines; see GitHub link above)
+     function nW(WW, iW) {
+       if ("" === iW.trim()) return null;
+       const OW = JW(WW),
+         mW = function(WW) {
+           return WW.split("\n").map((WW => WW.trim())).filter(((WW, iW, OW) => "" !== WW || iW > 0 && iW < OW.length - 1))
+         }(iW),
+         EW = HW(OW, mW, (WW => WW.trim()));
+       if (null !== EW) return {
+         from: EW.from,
+         to: EW.to,
+         isLoose: !EW.isOnly
+       };
+       const NW = WW => WW.trim().replace(/;+$/, ""),
+         PW = HW(OW, mW.map(NW), NW);
+       if (null !== PW) {
+         const OW = WW.indexOf(iW),
+ ... (23 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L251-L259` → after: `L207-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L207-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L207-L209) · [Before (L251-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L251-L259)

```diff
-     function IB(BB, OB, GB, YB, DB, QB, oB) {
-       var jB = function(BB, OB, GB, YB, DB, QB, oB, jB) {
-         for (var yB = 1 / 0, JB = -1, MB = 0; MB < BB.length; MB += 6) {
-           var PB = fB(BB, MB, OB, GB, YB, DB, QB, oB, jB);
-           PB >= 0 && (PB < yB || PB === yB && WB[0] < JB) && (yB = PB, JB = WB[0])
-         }
-         return WB[0] = JB, JB < 0 ? -1 : yB
-       }(BB, OB, GB, YB, DB, QB, oB, uB);
-       jB >= 0 && jB < kB && (kB = jB, dB = WB[0], KB = !0)
+     function uW(WW) {
+       var iW, OW;
+       return null !== (iW = null === (OW = /^[ \t]*/.exec(WW)) || void 0 === OW ? void 0 : OW[0]) && void 0 !== iW ? iW : ""
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L263-L266` → after: `L213-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L213-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L213-L233) · [Before (L263-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L263-L266)

```diff
-       for (var DB = 0; DB < UB; DB++)
-         if (AB[DB] === OB && VB[DB] === GB && SB[DB] === YB) return nB[DB];
-       var QB = BB(OB, GB, YB);
-       return UB < 32 && (AB[UB] = OB, VB[UB] = GB, SB[UB] = YB, nB[UB] = QB, UB++), QB
+       if (iW.from > 0 && "\n" !== WW[iW.from - 1]) return mW;
+       const EW = WW.slice(iW.from, iW.to).split("\n").filter((WW => "" !== WW.trim())),
+         NW = OW.split("\n").filter((WW => "" !== WW.trim()));
+       if (0 === EW.length || 0 === NW.length) return mW;
+       const PW = uW(EW[0]),
+         LW = uW(NW[0]);
+       if (PW === LW) return mW;
+       const cW = NW.length > 1 && NW.length === EW.length && NW.slice(1).every(((WW, iW) => uW(WW) === uW(EW[iW + 1]))),
+         wW = mW.split("\n"),
+         tW = wW.findIndex((WW => "" !== WW.trim()));
+       if (-1 === tW || uW(wW[tW]) === PW) return mW;
+       let ZW = !1;
+       return wW.map(((WW, iW) => {
+         var OW, mW;
+         const EW = ZW;
+         return (null !== (OW = null === (mW = WW.replace(/\\`/g, "").match(/`/g)) || void 0 === mW ? void 0 : mW.length) && void 0 !== OW ? OW : 0) % 2 === 1 && (ZW = !ZW), EW || cW && iW !== tW ? WW : function(WW, iW, OW) {
+ ... (5 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L269-L275` → after: `L236-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L236-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L236-L256) · [Before (L269-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L269-L275)

```diff
-     function iB(BB, OB, GB, YB) {
-       for (var jB = oB[0], yB = oB[1], JB = oB[2], MB = DB[0] + jB, PB = DB[1] + yB, zB = DB[2] + JB, lB = QB[0]; lB != MB; lB += jB)
-         for (var pB = QB[1]; pB != PB; pB += yB)
-           for (var qB = QB[2]; qB != zB; qB += JB) {
-             var ZB = FB(BB, lB, pB, qB);
-             Array.isArray(ZB) && IB(ZB, lB, pB, qB, OB, GB, YB)
-           }
+     function dW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
+       const mW = new Map;
+       for (const LW of WW.split("\n")) {
+         const WW = LW.trim(),
+           iW = WW.replace(/;$/, "");
+         "" === iW || WW.endsWith(";") || mW.has(iW) || mW.set(iW, WW)
+       }
+       const EW = iW.split("\n");
+       let NW = !1;
+       const PW = EW.map(((WW, iW) => {
+         var PW, LW, cW;
+         const wW = NW;
+         (null !== (PW = null === (LW = WW.replace(/\\`/g, "").match(/`/g)) || void 0 === LW ? void 0 : LW.length) && void 0 !== PW ? PW : 0) % 2 === 1 && (NW = !NW);
+         const tW = WW.trim(),
+           ZW = mW.get(tW.replace(/;$/, ""));
+ ... (5 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L278-L288` → after: `L259-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L259-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L259-L261) · [Before (L278-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L278-L288)

```diff
-     function LB(BB, OB, GB, YB, jB, yB) {
-       for (var JB = oB[0], MB = 0 === OB ? DB[0] : QB[0], PB = DB[0] + JB, zB = oB[1], lB = 1 === OB ? DB[1] : QB[1], pB = DB[1] + zB, qB = oB[2], ZB = 2 === OB ? DB[2] : QB[2], NB = DB[2] + qB, RB = MB; RB != PB; RB += JB)
-         for (var WB = lB; WB != pB; WB += zB)
-           for (var AB = ZB; AB != NB; AB += qB) {
-             var VB = BB(RB, WB, AB);
-             if (!1 !== VB && null !== VB && void 0 !== VB) {
-               if (!Array.isArray(VB)) return GB <= kB && (kB = GB, dB = OB, KB = !1), !0;
-               IB(VB, RB, WB, AB, YB, jB, yB)
-             }
-           }
-       return !1
+     function eW(WW) {
+       var iW;
+       return null !== (iW = WW.split("\n").find((WW => "" !== WW.trim()))) && void 0 !== iW ? iW : ""
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L292-L338` → after: `L264-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L264-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L264-L274) · [Before (L292-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L292-L338)

```diff
-     function rB(BB, OB, GB, NB, RB, WB) {
-       var AB = JB,
-         VB = PB,
-         SB = zB,
-         nB = pB;
-       XB(OB, GB), WB || (WB = ZB);
-       var fB = function(BB, OB, GB, JB, PB, zB) {
-         var pB = YB,
-           ZB = QB,
-           NB = oB,
-           RB = yB,
-           WB = MB,
-           AB = 0,
-           VB = 0,
-           SB = 0,
-           nB = 0;
- ... (31 more removed lines; see GitHub link above)
+     function vW(WW, iW) {
+       const OW = new Map;
+       for (const PW of WW) {
+         var mW;
+         OW.set(PW, (null !== (mW = OW.get(PW)) && void 0 !== mW ? mW : 0) + 1)
+       }
+       let EW = 0;
+       for (const PW of iW) {
+         var NW;
+         const WW = null !== (NW = OW.get(PW)) && void 0 !== NW ? NW : 0;
+         WW > 0 && (OW.set(PW, WW - 1), EW++)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L343-L348` → after: `L279-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L279-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L279-L284) · [Before (L343-L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L343-L348)

```diff
-     function XB(BB, OB) {
-       for (var GB = JB, YB = PB, DB = zB, QB = 0; QB < 3; QB++) GB[QB] = +OB[QB], DB[QB] = +BB.max[QB], YB[QB] = +BB.base[QB];
-       for (var oB = 0; oB < 3; oB++) {
-         if (!(Number.isFinite(GB[oB]) && Math.abs(GB[oB]) <= gB)) throw wB("dir", GB, oB);
-         if (!(Number.isFinite(YB[oB]) && Math.abs(YB[oB]) <= gB)) throw wB("base", YB, oB);
-         if (!(Number.isFinite(DB[oB]) && Math.abs(DB[oB]) <= gB)) throw wB("max", DB, oB)
+     function gW(WW) {
+       return {
+         text: WW,
+         pieces: Array.from({
+           length: WW.length - 1
+         }, ((iW, OW) => WW.slice(OW, OW + 2)))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L352-L353` → after: `L288-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L288-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L288-L311) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L352-L353)

```diff
-     function wB(BB, OB, GB) {
-       return new Error("BLOXD VOXEL-SWEEP: non-terminating sweep rejected - " + BB + "[" + GB + "]=" + OB[GB] + " " + BB + "=[" + OB[0] + "," + OB[1] + "," + OB[2] + "]")
+     function DW(WW, iW) {
+       const OW = iW.split("\n").map(hW).filter(Boolean),
+         mW = JW(WW).filter((WW => "" !== hW(WW.text)));
+       if (0 === OW.length || 0 === mW.length) return null;
+       const EW = Math.min(OW.length, mW.length),
+         NW = OW.map(gW),
+         PW = mW.map((WW => gW(hW(WW.text))));
+       let LW = null;
+       for (let ZW = 0; ZW + EW <= mW.length; ZW++) {
+         let WW = 0;
+         for (let iW = 0; iW < EW; iW++) WW += (cW = PW[ZW + iW], wW = NW[iW], cW.text === wW.text ? 1 : 0 === cW.pieces.length || 0 === wW.pieces.length ? 0 : 2 * vW(cW.pieces, wW.pieces) / (cW.pieces.length + wW.pieces.length));
+         WW /= OW.length, (null === LW || WW > LW.score) && (LW = {
+           start: ZW,
+           score: WW
+         })
+       }
+ ... (8 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L365-L366` → after: `L314-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L314-L315) · [Before (L365-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L365-L366)

```diff
-     function DB(BB, OB) {
-       return [Math.floor(BB[0] / OB) * OB, Math.floor(BB[1] / OB) * OB, Math.floor(BB[2] / OB) * OB]
+     function VW(WW) {
+       return TW().isFunctionExpression(WW) || TW().isArrowFunction(WW)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L370-L371` → after: `L319-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L319-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L319-L321) · [Before (L370-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L370-L371)

```diff
-       const OB = (null !== BB && void 0 !== BB ? BB : "").match(/-?\d+(?:\.\d+)?/g);
-       return OB && OB.length >= 3 ? [Number(OB[0]), Number(OB[1]), Number(OB[2])] : null
+       return TW().isExpressionStatement(WW) && TW().isBinaryExpression(WW.expression) && TW().isPropertyAccessExpression(WW.expression.left) && ! function(WW) {
+         return TW().isIdentifier(WW) && ("globalThis" === WW.text || "window" === WW.text || "self" === WW.text)
+       }(WW.expression.left.expression)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L374-L375` → after: `L324-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L324-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L324-L331) · [Before (L374-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L374-L375)

```diff
-     function oB(BB, OB) {
-       return BB === OB ? String(BB) : `${BB}-${OB}`
+     function fW(WW, iW, OW) {
+       let mW = OW;
+       for (const NW of (null !== (EW = TW().getLeadingCommentRanges(WW, iW.getFullStart())) && void 0 !== EW ? EW : []).reverse()) {
+         var EW;
+         if (/\n[^\S\n]*\n/.test(WW.slice(NW.end, mW))) break;
+         mW = NW.pos
+       }
+       return mW
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L378-L387` → after: `L334-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L334-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L334-L358) · [Before (L378-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L378-L387)

```diff
-     function jB(BB, OB, GB, YB) {
-       const DB = [];
-       let QB = new Map;
-       for (let oB = BB[2]; oB < BB[2] + OB; oB++) {
-         const jB = new Map;
-         let yB = BB[0];
-         for (; yB < BB[0] + OB;) {
-           const DB = YB(yB, GB, oB);
-           let JB = yB;
-           for (; JB + 1 < BB[0] + OB && YB(JB + 1, GB, oB) === DB;) JB++;
+     function CW(WW) {
+       var iW;
+       const {
+         parseDiagnostics: OW
+       } = WW;
+       return (null !== (iW = null === OW || void 0 === OW ? void 0 : OW.length) && void 0 !== iW ? iW : 0) > 0
+     }
+ 
+     function XW(WW) {
+       const iW = TW().createSourceFile("worldCode.js", WW, TW().ScriptTarget.Latest, !1, TW().ScriptKind.JS),
+         OW = [],
+         mW = (EW, NW) => {
+           const PW = function(WW) {
+             var iW, OW;
+             if (TW().isFunctionDeclaration(WW)) return null !== (iW = null === (OW = WW.name) || void 0 === OW ? void 0 : OW.text) && void 0 !== iW ? iW : null;
+             if (TW().isVariableStatement(WW) && 1 === WW.declarationList.declarations.length) {
+ ... (9 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L389-L396` → after: `L360-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L360-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L360-L367) · [Before (L389-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L389-L396)

```diff
-             const BB = `${yB} ${JB} ${DB}`,
-               OB = QB.get(BB);
-             OB ? (OB.z1 = oB, QB.delete(BB), jB.set(BB, OB)) : jB.set(BB, {
-               x0: yB,
-               x1: JB,
-               z0: oB,
-               z1: oB,
-               name: DB
+             const mW = EW.getStart(iW);
+             OW.push({
+               name: PW,
+               from: mW,
+               to: EW.getEnd(),
+               commentFrom: fW(WW, EW, mW),
+               topLevel: NW,
+               isProperty: pW(EW)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L399-L401` → after: `L370-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L370-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L370-L377) · [Before (L399-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L399-L401)

```diff
-           yB = JB + 1
-         }
-         DB.push(...QB.values()), QB = jB
+           TW().forEachChild(EW, (WW => {
+             mW(WW, !1)
+           }))
+         };
+       for (const EW of iW.statements) mW(EW, !0);
+       return {
+         functions: OW,
+         hasErrors: CW(iW)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L406-L433` → after: `L381-L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L381-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L381-L382) · [Before (L406-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L406-L433)

```diff
-     function yB(BB, OB, GB, DB) {
-       let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : YB;
-       const yB = [BB[0] + OB - 1, BB[1] + OB - 1, BB[2] + OB - 1],
-         JB = null !== DB && DB.every(((OB, GB) => Math.floor(OB) >= BB[GB] && Math.floor(OB) <= yB[GB])),
-         MB = [`The chunk from ${BB.join(" ")} to ${yB.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
-       null !== DB && MB.push(`The player's feet are at ${DB.map(Math.floor).join(" ")}, ${JB?"in this chunk":"outside this chunk"}.`);
-       const PB = [];
-       for (let YB = BB[1]; YB <= yB[1]; YB++) {
-         const DB = jB(BB, OB, YB, GB).join("; "),
-           QB = PB[PB.length - 1];
-         (null === QB || void 0 === QB ? void 0 : QB.boxes) === DB ? QB.to = YB : PB.push({
-           from: YB,
-           to: YB,
-           boxes: DB
-         })
-       }
- ... (12 more removed lines; see GitHub link above)
+     function BW(WW) {
+       return XW(WW).functions
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L464-L467` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L386) · [Before (L464-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L464-L467)

```diff
-       const [OB, GB] = (0, QB.useState)((() => (0, zB.n)(BB)));
-       return (0, QB.useEffect)((() => (GB((0, zB.n)(BB)), (0, zB.K)((() => {
-         GB((0, zB.n)(BB))
-       })))), [BB]), OB
+       return WW.trim().replace(/^(?:callback:|function\s+)/, "").replace(/\s*\(.*$/s, "").trim()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L471` → after: `L390-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L390-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L390-L394) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L471)

```diff
-       "function" === typeof BB ? BB(OB) : BB && (BB.current = OB)
+       var OW;
+       const mW = WW.filter((WW => WW.name === iW)),
+         EW = mW.filter((WW => !WW.isProperty)),
+         NW = EW.length > 0 ? EW : mW;
+       return null !== (OW = NW.find((WW => WW.topLevel))) && void 0 !== OW ? OW : NW[0]
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L474` → after: `L397-L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L397-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L397-L420) · [Before (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L474)

```diff
-     function ZB(BB) {
+     function GW(WW, iW) {
+       return "" === WW.trim() ? `${iW.trim()}\n` : `${WW.replace(/\s*$/,"")}\n\n${iW.trim()}\n`
+     }
+ 
+     function IW(WW, iW, OW) {
+       const mW = XW(WW),
+         EW = BW(OW),
+         NW = rW(mW.functions, iW, EW);
+       return NW ? zW(WW, mW, NW, EW, OW) : GW(WW, OW)
+     }
+ 
+     function aW(WW, iW, OW) {
+       return void 0 !== rW(BW(WW), iW, BW(OW))
+     }
+ 
+     function rW(WW, iW, OW) {
+ ... (8 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L476-L478` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L422-L423) · [Before (L476-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L476-L478)

```diff
-         tutorial: OB,
-         step: GB,
-         enabled: YB = !0
+         functions: NW,
+         hasErrors: PW
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L480-L481` → after: `L425-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L425-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L425-L452) · [Before (L480-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L480-L481)

```diff
-       const DB = pB(OB);
-       return YB && DB === GB
+       const LW = NW.some((WW => WW.from > OW.from && WW.to <= OW.to && !mW.some((iW => iW.name === WW.name))));
+       if (PW && LW) return null;
+       const cW = /^\s*(?:\/\/|\/\*)/.test(EW) ? OW.commentFrom : OW.from;
+       return WW.slice(0, cW) + dW(WW.slice(cW, OW.to), EW.trim(), eW(WW.slice(OW.to))) + WW.slice(OW.to)
+     }
+ 
+     function FW(WW, iW, OW, mW, EW) {
+       const NW = mW.trim();
+       if (NW.includes("\n") || !NW.endsWith("{")) return null;
+       const PW = XW(WW),
+         LW = PW.functions.find((mW => mW.topLevel && QW(WW, mW.from) <= iW && OW < mW.to && !WW.slice(mW.from, OW).includes("\n"))),
+         cW = XW(EW),
+         wW = cW.functions.filter((WW => WW.topLevel)),
+         tW = !cW.hasErrors && (1 === wW.length || wW.some((WW => WW.name === (null === LW || void 0 === LW ? void 0 : LW.name)))),
+         ZW = 1 === wW.length && wW[0].name !== (null === LW || void 0 === LW ? void 0 : LW.name) ? wW[0].name : void 0,
+         xW = void 0 === ZW ? void 0 : PW.functions.find((WW => WW.topLevel && WW.name === ZW));
+ ... (12 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L485-L487` → after: `L456-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L456-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L456-L458) · [Before (L485-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L485-L487)

```diff
-       const GB = (0, zB.o)(BB),
-         YB = GB.indexOf(OB);
-       return !GB.slice(YB + 1).some((OB => (0, zB.y)(BB, OB)))
+       let OW = iW;
+       for (; OW > 0 && (" " === WW[OW - 1] || "\t" === WW[OW - 1]);) OW--;
+       return 0 === OW || "\n" === WW[OW - 1] ? OW : iW
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L490-L505` → after: `L461-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L461-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L461-L465) · [Before (L490-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L490-L505)

```diff
-     function RB(BB, OB, GB, YB) {
-       let {
-         tutorial: DB,
-         step: QB,
-         waitForClick: oB = !1,
-         onPrevious: jB
-       } = BB;
-       const yB = OB && (0, zB.v)(DB, QB),
-         JB = OB && !NB(DB, QB),
-         PB = oB ? YB : GB;
-       let lB = null;
-       yB ? lB = () => {
-         null === jB || void 0 === jB || jB(), (0, zB.s)(DB, QB)
-       } : JB && (lB = () => {
-         (0, zB.m)(DB)
-       }), (0, MB.v)("popup", null !== PB && void 0 !== PB ? PB : GB, lB, OB && null !== PB, null, yB ? void 0 : "controller:menusSkipTutorial")
+     function Wi(WW, iW, OW) {
+       const mW = iW.trim().toLowerCase();
+       if ("" !== WW.trim() && ("top" === mW || "start" === mW)) return `${OW.trim()}\n\n${WW.replace(/^\s+/,"")}`;
+       const EW = "end" === mW ? void 0 : RW(BW(WW), qW(iW));
+       return EW ? `${WW.slice(0,EW.to)}\n\n${OW.trim()}${WW.slice(EW.to)}` : GW(WW, OW)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L509-L546` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L469) · [Before (L509-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L509-L546)

```diff
-       let {
-         tutorial: OB,
-         step: GB,
-         text: YB,
-         waitForClick: DB = !1,
-         onPrevious: QB
-       } = BB;
-       const {
-         t: oB
-       } = (0, PB.H)(), jB = NB(OB, GB);
-       return (0, lB.jsxs)(lB.Fragment, {
-         children: [(0, lB.jsx)("div", {
-           className: "TutorialStepText",
-           children: YB
-         }), (0, lB.jsxs)("div", {
-           className: "TutorialStepButtons",
- ... (22 more removed lines; see GitHub link above)
+       return [...new Set(BW(WW).filter((WW => WW.topLevel)).map((WW => WW.name)))]
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L548` → after: `L471-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L471-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L471-L472) · [Before (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L548)

```diff
-     const AB = 6;
+     const Oi = 120,
+       mi = /\b(?:my|his|her|their)\s+(?:real\s+|full\s+|first\s+|last\s+)?(?:name|age|school|address|email|phone|birthday)\b|\b(?:i am|i'm)\s+\d+\b|\b\d+\s+years?\s+old\b|\be-?mail\b|\bphone number\b|\bpassword\b|\bwhere (?:i|we) live\b/i;
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L551-L593` → after: `L475-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L475-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L475-L481) · [Before (L551-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L551-L593)

```diff
-       let {
-         rect: OB,
-         margin: GB
-       } = BB;
-       const YB = Math.max(0, OB.top - GB),
-         DB = OB.bottom + GB,
-         QB = Math.max(0, OB.left - GB),
-         oB = OB.right + GB;
-       return (0, lB.jsxs)(lB.Fragment, {
-         children: [(0, lB.jsx)("div", {
-           className: "TutorialSpotlightBackdrop",
-           style: {
-             top: 0,
-             left: 0,
-             right: 0,
-             height: YB
- ... (27 more removed lines; see GitHub link above)
+       let iW = WW.replace(/\s+/g, " ").trim();
+       if ("" === iW || mi.test(iW)) return null;
+       if (iW.length > Oi) {
+         const WW = iW.slice(0, Oi);
+         iW = `${WW.slice(0,Math.max(WW.lastIndexOf(" "),60)).trimEnd()}\u2026`
+       }
+       return iW.charAt(0).toUpperCase() + iW.slice(1)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L597-L634` → after: `L486-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L486-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L486-L501) · [Before (L597-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L597-L634)

```diff
-       let {
-         target: OB,
-         placement: GB,
-         boxRef: YB,
-         className: yB,
-         spotlight: MB = !0,
-         spotlightMargin: PB = AB,
-         children: zB
-       } = BB;
-       const {
-         getArrowProps: pB,
-         getTooltipProps: qB,
-         setTooltipRef: ZB,
-         setTriggerRef: NB,
-         update: RB
-       } = (0, jB.d)({
- ... (22 more removed lines; see GitHub link above)
+       var iW, OW;
+       const mW = null === (iW = /\(([^)]*)\)/.exec(WW)) || void 0 === iW || null === (OW = iW[1].split(",")[1]) || void 0 === OW ? void 0 : OW.trim();
+       return mW && /^[A-Za-z_$][\w$]*$/.test(mW) ? [...WW.matchAll(/\b([A-Za-z_$][\w$]*)\s*\(([^()]*)\)/g)].flatMap((WW => WW[2].split(",").some((WW => WW.trim() === mW)) ? [WW[1]] : [])) : []
+     }
+ 
+     function Li(WW, iW) {
+       const OW = new Set,
+         mW = new Set,
+         EW = new Set,
+         NW = Object.values(WW).map((WW => {
+           const iW = BW(WW),
+             OW = iW.filter((WW => "playerCommand" === WW.name)).map((iW => WW.slice(iW.from, iW.to)));
+           return {
+             text: WW,
+             found: iW,
+             own: OW
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L636-L646` → after: `L503-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L503-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L503-L513) · [Before (L636-L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L636-L646)

```diff
-         }), [BB, OB]), GB
-       }(OB, MB);
-       (0, QB.useEffect)((() => {
-         null === RB || void 0 === RB || RB()
-       }), [WB, RB]), (0, QB.useEffect)((() => {
-         if (MB || !OB || !RB) return;
-         const BB = new ResizeObserver((() => {
-           RB()
-         }));
-         return BB.observe(OB), OB.parentElement && BB.observe(OB.parentElement), () => {
-           BB.disconnect()
+         })),
+         PW = new Set(NW.flatMap((WW => {
+           let {
+             own: iW
+           } = WW;
+           return iW.flatMap(Pi)
+         })));
+       for (const {
+           text: cW,
+           found: wW,
+           own: tW
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L648-L672` → after: `L515-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L515-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L515-L527) · [Before (L648-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L648-L672)

```diff
-       }), [OB, MB, RB]), (0, QB.useEffect)((() => {
-         MB && (null === OB || void 0 === OB || OB.scrollIntoView({
-           block: "nearest",
-           inline: "nearest"
-         }))
-       }), [OB, MB]);
-       const SB = (0, QB.useCallback)((BB => {
-         ZB(BB), YB && (YB.current = BB)
-       }), [ZB, YB]);
-       return (0, oB.createPortal)((0, lB.jsxs)(lB.Fragment, {
-         children: [WB && (0, lB.jsx)(VB, {
-           rect: WB,
-           margin: PB
-         }), (0, lB.jsxs)("div", {
-           ref: SB,
-           ...qB({
- ... (9 more removed lines; see GitHub link above)
+         of NW) {
+         for (const EW of ii(cW)) iW.has(EW) ? OW.add(EW) : mW.add(EW);
+         const WW = [...tW, ...wW.filter((WW => "playerCommand" !== WW.name && PW.has(WW.name))).map((WW => cW.slice(WW.from, WW.to)))],
+           NW = WW.length > 0 || !/\bplayerCommand\b/.test(cW) ? WW : [cW];
+         for (const iW of NW)
+           for (const WW of iW.matchAll(Ni)) EW.add(`/${WW[1].split(/\s/)[0]}`)
+       }
+       const LW = WW => [...WW].slice(0, 12);
+       return {
+         callbacks: LW(OW),
+         commands: LW(EW),
+         functions: LW(mW)
+       }
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L674-L699` → after: `L529-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L529-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L529-L558) · [Before (L674-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L674-L699)

```diff
-     const nB = (0, QB.forwardRef)((function(BB, OB) {
-       let {
-         placement: GB = "right",
-         children: YB,
-         ...DB
-       } = BB;
-       const oB = ZB(DB),
-         jB = (0, QB.useRef)(null),
-         yB = (0, QB.useRef)(null);
-       RB(DB, oB, jB, yB);
-       const [JB, MB] = (0, QB.useState)(null), PB = YB.ref, zB = (0, QB.useCallback)((BB => {
-         yB.current = BB, MB(BB), qB(OB, BB), qB(PB, BB)
-       }), [OB, PB]);
-       return (0, lB.jsxs)(lB.Fragment, {
-         children: [(0, QB.cloneElement)(YB, {
-           ref: zB
- ... (10 more removed lines; see GitHub link above)
+     const ci = new Map([
+       ["onPlayerJoin", "When a player joins"],
+       ["onPlayerLeave", "When a player leaves"],
+       ["onPlayerChat", "When a player chats"],
+       ["playerCommand", "When a player types a /command"],
+       ["tick", "Runs all the time"],
+       ["onPlayerJump", "When a player jumps"],
+       ["onPlayerClick", "When a player clicks"],
+       ["onPlayerAttack", "When a player attacks"],
+       ["onPlayerChangeBlock", "When a player changes a block"],
+       ["onPlayerAttemptChangeBlock", "Before a player changes a block"],
+       ["onPlayerDamagingOtherPlayer", "When a player hits another player"],
+       ["onPlayerKilledOtherPlayer", "When a player defeats another player"],
+       ["onPlayerDamagingMob", "When a player hits a mob"],
+       ["onPlayerKilledMob", "When a player defeats a mob"],
+       ["onMobDamagingPlayer", "When a mob hits a player"],
+ ... (14 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L702-L713` → after: `L561-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L561-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L561-L563) · [Before (L702-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L702-L713)

```diff
-       const OB = ZB(BB),
-         GB = (0, QB.useRef)(null);
-       return RB(BB, OB, GB, null), OB ? (0, oB.createPortal)((0, lB.jsx)("div", {
-         className: "TutorialCentreBackdrop",
-         children: (0, lB.jsx)("div", {
-           ref: GB,
-           className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
-           children: (0, lB.jsx)(WB, {
-             ...BB
-           })
-         })
-       }), (0, JB.i)()) : null
+       const iW = ci.get(WW);
+       if (iW) return iW;
+       return `When: ${WW.replace(/^on/,"").replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase()}`
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L715-L716` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L565) · [Before (L715-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L715-L716)

```diff
-   },
-   39860: (BB, OB, GB) => {
+ 
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L718` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L567) · [Before (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L718)

```diff
-       return void 0 === BB ? void 0 : [BB[0], BB[1], BB[2]]
+       return Array.isArray(WW) && WW.every((WW => "string" === typeof WW))
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L722-L741` → after: `L573-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L573-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L573-L577) · [Before (L722-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L722-L741)

```diff
-       const OB = BB.particles;
-       return {
-         opts: {
-           texture: OB.texture,
-           CP: OB.CP,
-           minLifeTime: OB.minLifeTime,
-           maxLifeTime: OB.maxLifeTime,
-           minSize: OB.minSize,
-           maxSize: OB.maxSize,
-           minEmitPower: OB.minEmitPower,
-           maxEmitPower: OB.maxEmitPower,
-           emitRate: OB.emitRate,
-           gravity: YB(OB.gravity),
-           dir1: YB(OB.dir1),
-           dir2: YB(OB.dir2),
-           colorGradients: OB.colorGradients,
- ... (4 more removed lines; see GitHub link above)
+       var iW, OW;
+       const mW = WW.trim().split(/\s+/).length,
+         EW = new Set((null !== (iW = WW.match(Zi)) && void 0 !== iW ? iW : []).map((WW => WW.toLowerCase().replace(/s$/, "")))).size,
+         NW = (null !== (OW = WW.match(xi)) && void 0 !== OW ? OW : []).length;
+       return EW >= 2 && NW >= 2 || mW >= 30 && NW >= 3
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L762-L763` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L581-L582) · [Before (L762-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L762-L763)

```diff
-       var OB;
-       return null !== (OB = (0, YB.c)(oB, BB)) && void 0 !== OB ? OB : null
+       const iW = WW.split(/\n|\|/).map((WW => WW.replace(/^\s*(?:[-*\u2022]|\d+[.)]|step\s*\d+[:.)]?)\s*/i, "").replace(/\s+/g, " ").trim())).filter((WW => "" !== WW)).slice(0, 5).map((WW => WW.length > 90 ? `${WW.slice(0,89).trimEnd()}\u2026` : WW));
+       return iW.length >= 2 ? iW : []
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L767-L768` → after: `L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L587) · [Before (L767-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L767-L768)

```diff
-       var OB;
-       return null !== (OB = (0, YB.c)(jB, BB)) && void 0 !== OB ? OB : null
+       return WW.replace(/^on/, "").replace(/^player/i, "").toLowerCase()
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L770-L816` → after: `L589-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L589-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L589-L601) · [Before (L770-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L770-L816)

```diff
-   },
-   39869: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => YB,
-       g: () => DB,
-       h: () => QB
-     });
-     class YB {
-       constructor() {
-         this.pose = {
-           pos: [0, 0, 0],
-           yaw: 0,
-           mode: "flying",
-           seated: !1,
-           clip: void 0
-         }, this.lZ = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
- ... (31 more removed lines; see GitHub link above)
+ 
+     function Ui(WW) {
+       const iW = new Set;
+       for (const OW of WW.matchAll(/^(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/gm)) iW.add(OW[1]);
+       for (const OW of WW.matchAll(/^([A-Za-z_$][\w$]*)\s*=\s*(?:async\s+)?(?:function\b|\([^)]*\)\s*=>|[A-Za-z_$][\w$]*\s*=>)/gm)) iW.add(OW[1]);
+       return [...iW]
+     }
+ 
+     function ki(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
+       const mW = new Set(iW),
+         EW = new Map;
+       for (const ZW of iW) {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L818` → after: `L603-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L603-L604) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L818)

```diff
-         return this.started ? yB.yaw += ((NB = ZB - yB.yaw) - 2 * Math.PI * Math.round(NB / (2 * Math.PI))) * Math.min(8 * jB, 1) : yB.yaw = ZB, this.started = !0, yB.seated = "perched" === PB && this.perchLocked, yB.clip = null === (OB = oB.clips) || void 0 === OB ? void 0 : OB[ … [truncated]
+         const WW = ji(ZW);
+         EW.set(WW, [...null !== (NW = EW.get(WW)) && void 0 !== NW ? NW : [], ZW])
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L820-L821` → after: `L606-L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L606-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L606-L617) · [Before (L820-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L820-L821)

```diff
-       reset() {
-         this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
+       const PW = Ui(WW),
+         LW = new Set(Ui(OW)),
+         cW = [];
+       let wW = WW;
+       for (const ZW of PW) {
+         var tW;
+         if (mW.has(ZW) || LW.has(ZW) || !/^(on|player)[A-Z]/.test(ZW)) continue;
+         const WW = null !== (tW = EW.get(ji(ZW))) && void 0 !== tW ? tW : [];
+         1 !== WW.length || PW.includes(WW[0]) || (wW = (0, bi.q)(wW, new RegExp(`${ZW}(?![\\w$])`, "g"), bi.k, (() => WW[0])), cW.push({
+           from: ZW,
+           to: WW[0]
+         }))
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L823-L824` → after: `L619-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L619-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L619-L621) · [Before (L823-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L823-L824)

```diff
-       pG(BB) {
-         return "perched" === BB ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
+       return {
+         code: wW,
+         renames: cW
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L827-L849` → after: `L624-L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L624-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L624-L1101) · [Before (L827-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L827-L849)

```diff
- 
-     function DB(BB, OB) {
-       return BB.bobAmplitude * Math.sin(2 * Math.PI * BB.bobHz * OB)
-     }
- 
-     function QB(BB, OB, GB, YB, DB) {
-       const [QB, oB, jB] = GB;
-       BB[0] = OB[0] + QB * DB + jB * YB, BB[1] = OB[1] + oB, BB[2] = OB[2] - QB * YB + jB * DB
-     }
-   },
-   39965: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => uB
-     });
-     var YB = GB(1834),
-       DB = GB(1400),
- ... (7 more removed lines; see GitHub link above)
+     const si = {
+         functions: "api",
+         callbacks: "callback",
+         "client options": "clientOption"
+       },
+       Mi = Object.keys(si).map((WW => `"${WW}"`)).join(", ").replace(/, ([^,]*)$/, " or $1"),
+       Ki = {
+         type: "string",
+         description: "A few plain words for the creator on what this change does, under 80 characters"
+       },
+       Si = {
+         readOnlyHint: !0,
+         destructiveHint: !1,
+         idempotentHint: !0,
+         openWorldHint: !1
+       },
+ ... (462 more added lines; see GitHub link above)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L852` → after: `L1104-L1105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1104-L1105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1104-L1105) · [Before (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L852)

```diff
-       return "webm" === BB ? MB : PB
+       var iW;
+       return !0 === (null === (iW = Ti(WW)._meta) || void 0 === iW ? void 0 : iW.isLookup)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L856-L858` → after: `L1109-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1109-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1109-L1111) · [Before (L856-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L856-L858)

```diff
-       for (const OB of BB)
-         if ("undefined" !== typeof MediaRecorder && MediaRecorder.isTypeSupported(OB)) return OB;
-       return null
+       const iW = Yi.find((iW => iW.name === WW));
+       if (!iW) throw new Error(`No AI Helper tool ${WW}`);
+       return iW
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L862` → after: `L1119-L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1119-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1119-L1120) · [Before (L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L862)

```diff
-       return null !== lB(zB(BB))
+       const iW = WW.trim();
+       return ni.some((WW => WW.test(iW)))
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L875-L876` → after: `L1123-L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1123-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1123-L1136) · [Before (L875-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L875-L876)

```diff
-     function NB() {
-       return pB("webm") ? "webm" : pB("mp4") ? "mp4" : "webm"
+     function di(WW, iW) {
+       const OW = WW.replace(Hi, "");
+       return iW ? function(WW) {
+         const iW = WW.indexOf("```"),
+           OW = -1 === iW ? WW : WW.slice(0, iW);
+         let mW = -1,
+           EW = -1,
+           NW = 0;
+         for (const PW of OW.matchAll(ui)) {
+           const WW = PW.index + PW[0].length;
+           oi(OW.slice(NW, WW)) && (mW = -1 === mW ? NW : mW, EW = WW), NW = WW
+         }
+         return -1 === EW ? WW : "" !== OW.slice(EW).trim() ? WW.slice(EW).trimStart() : `${WW.slice(0,mW).trimEnd()}\n${WW.slice(OW.length)}`.trim()
+       }(OW) : "" !== OW.trim() ? OW : WW
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L880-L910` → after: `L1142-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1142-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1142-L1145) · [Before (L880-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L880-L910)

```diff
-       let {
-         cards: OB
-       } = BB;
-       return (0, qB.jsx)("div", {
-         className: "ReplayVideoExportOptionCards",
-         children: OB.map((BB => (0, qB.jsxs)("div", {
-           className: "ReplayVideoExportOptionColumn",
-           children: [(0, qB.jsx)("div", {
-             className: jB()("ReplayVideoExportOptionCard", {
-               Selected: BB.selected,
-               Disabled: BB.disabled
-             }),
-             onClick: () => {
-               BB.disabled || BB.onSelect()
-             },
-             children: (0, qB.jsxs)("div", {
- ... (15 more removed lines; see GitHub link above)
+       const iW = "string" === typeof WW ? WW.split(/[./:]/).pop() : void 0;
+       return function(WW) {
+         return Yi.some((iW => iW.name === WW))
+       }(iW) ? iW : null
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L912-L1015` → after: `L1147-L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1147-L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1147-L1164) · [Before (L912-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L912-L1015)

```diff
-     const WB = (0, QB.memo)((function(BB) {
-       let {
-         hasPlaybackMark: OB,
-         canIncludeUi: GB,
-         includeUiDisabledReason: YB,
-         selectionRef: DB,
-         closePopup: oB
-       } = BB;
-       const jB = pB("webm") || pB("mp4"),
-         [MB, PB] = (0, QB.useState)(NB),
-         [zB, lB] = (0, QB.useState)(GB),
-         WB = jB && pB(MB);
-       if (!jB) {
-         const BB = (0, JB.isMobile)() ? "screen recording" : "OBS";
-         return (0, qB.jsxs)("div", {
-           className: "PromptPopupNotification ReplayVideoExportOptionsPopup",
- ... (88 more removed lines; see GitHub link above)
+ 
+     function Di(WW, iW) {
+       return OW => {
+         const mW = [];
+         let EW;
+         for (const cW of OW.matchAll(WW)) {
+           var NW;
+           const WW = gi(cW[1]);
+           if (null === WW) continue;
+           const wW = {};
+           for (const OW of cW[2].matchAll(iW)) {
+             var PW, LW;
+             wW[null !== (PW = OW[1]) && void 0 !== PW ? PW : OW[2]] = null !== (LW = OW[3]) && void 0 !== LW ? LW : OW[4]
+           }(null === (NW = EW) || void 0 === NW ? void 0 : NW.call.name) === WW && "" === OW.slice(EW.index + EW.call.source.length, cW.index).trim() ? mW[mW.length - 1] = {
+             call: {
+               name: WW,
+ ... (2 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1017-L1021` → after: `L1166-L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1166-L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1166-L1171) · [Before (L1017-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1017-L1021)

```diff
-             children: "Export"
-           }), (0, qB.jsx)(yB.Q, {
-             className: "PromptPopupNotificationBodyButton",
-             onClick: () => {
-               DB.options = null, oB()
+             index: EW.index
+           } : mW.push({
+             call: {
+               name: WW,
+               args: wW,
+               source: cW[0]
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1023-L1065` → after: `L1173-L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1173-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1173-L1175) · [Before (L1023-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1023-L1065)

```diff
-             children: "Cancel"
-           })]
-         })]
-       })
-     }));
-     var AB = GB(5353),
-       VB = GB(37692),
-       SB = GB(37694);
-     let nB = null;
- 
-     function UB() {
-       return function() {
-         const BB = (0, SB.c)();
-         for (const {
-             group: OB,
-             dataAttr: GB
- ... (27 more removed lines; see GitHub link above)
+             index: cW.index
+           }), EW = "" === cW[2].trim() && Ti(WW).inputSchema.required.length > 0 ? mW.at(-1) : void 0
+         }
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1067` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1177) · [Before (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1067)

```diff
-       }(): OB().captureStream(Math.max(1, Math.round(GB)))
+       }
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1073` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1181) · [Before (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1073)

```diff
-       BB.holdInput(!1), (0, kB.e)(!1)
+       return WW.replace(/\\(["\\nt])/g, ((WW, iW) => "n" === iW ? "\n" : "t" === iW ? "\t" : iW))
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1075-L1242` → after: `L1183-L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1183-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1183-L1189) · [Before (L1075-L1242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1075-L1242)

```diff
-     async function uB(BB) {
-       var OB, GB;
-       if ((0, kB.b)() || dB) return;
-       const QB = BB();
-       if (!QB) return;
-       dB = !0;
-       let oB = null;
-       const jB = QB.playbackMarkInTick,
-         {
-           canIncludeUi: yB,
-           includeUiDisabledReason: JB
-         } = UB();
-       try {
-         oB = await async function(BB) {
-           let {
-             hasPlaybackMark: OB,
- ... (152 more removed lines; see GitHub link above)
+ 
+     function fi(WW) {
+       let iW = null !== WW && void 0 !== WW ? WW : {};
+       if ("string" === typeof iW) try {
+         iW = JSON.parse("" === iW ? "{}" : iW)
+       } catch {
+         return null
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1258-L1301` → after: `L1197-L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1197-L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1197-L1205) · [Before (L1258-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1258-L1301)

```diff
-     function JB(BB, OB, GB, YB, DB, QB, jB) {
-       const {
-         waveform: yB,
-         pitchHz: JB,
-         attackMs: MB,
-         releaseMs: PB,
-         lowpassHz: zB
-       } = GB, lB = DB + YB.durationMs / 1e3, pB = JB * 2 ** (YB.semitones / 12), qB = BB.createOscillator();
-       qB.type = yB, qB.frequency.setValueAtTime(pB, DB), qB.frequency.exponentialRampToValueAtTime(pB * 2 ** (YB.glideSemitones / 12), lB);
-       const ZB = DB + Math.min(MB, YB.durationMs) / 1e3,
-         NB = BB.createGain();
-       NB.gain.setValueAtTime(0, DB), NB.gain.linearRampToValueAtTime(QB, ZB), NB.gain.linearRampToValueAtTime(QB * oB, Math.max(ZB, lB - PB / 1e3)), NB.gain.linearRampToValueAtTime(0, lB);
-       const RB = [qB];
-       if (null !== zB) {
-         const OB = BB.createBiquadFilter();
-         OB.type = "lowpass", OB.frequency.value = zB, RB.push(OB)
- ... (28 more removed lines; see GitHub link above)
+     function Ci(WW, iW) {
+       let OW = 0,
+         mW = !1;
+       for (let EW = iW; EW < WW.length; EW++) {
+         const iW = WW[EW];
+         if (mW) "\\" === iW ? EW++ : '"' === iW && (mW = !1);
+         else if ('"' === iW) mW = !0;
+         else if ("{" === iW) OW++;
+         else if ("}" === iW && (OW--, 0 === OW)) return EW + 1
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1306-L1314` → after: `L1211-L1217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1211-L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1211-L1217) · [Before (L1306-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1306-L1314)

```diff
-       var GB;
-       const QB = YB.Howler.ctx,
-         oB = YB.Howler.masterGain;
-       if (!QB || !oB || !DB.c.get("soundOnFromAd")) return () => {};
-       const jB = YB.Howler;
-       return null === (GB = jB._autoResume) || void 0 === GB || GB.call(jB), MB(QB, oB, BB, OB, DB.c.get("soundVolume"), (() => {
-         var BB;
-         null === (BB = jB._autoSuspend) || void 0 === BB || BB.call(jB)
-       }))
+       let OW = WW;
+       for (const {
+           call: mW,
+           index: EW
+         }
+         of iW) OW = OW.slice(0, EW) + " ".repeat(mW.source.length) + OW.slice(EW + mW.source.length);
+       return OW
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1316-L1331` → after: `L1219-L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1219-L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1219-L1234) · [Before (L1316-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1316-L1331)

```diff
-   },
-   37054: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       LOOK_DEBUG_HEADER: () => MB,
-       endLookDebugTake: () => NB,
-       noteLookDroppedCopy: () => RB,
-       saveLookCapture: () => WB,
-       startLookDebug: () => ZB
-     });
-     var YB = GB(5287),
-       DB = GB(3136),
-       QB = GB(1998);
-     const oB = new Map(Object.entries(YB.m).map((BB => {
-       let [OB, GB] = BB;
-       return [GB, OB]
-     })));
+     const Bi = new RegExp(`\\b(${Yi.map((WW=>WW.name)).join("|")})\\s*\\(\\s*(?=\\{)`, "g");
+     const qi = {
+         formatCall: (WW, iW) => {
+           const OW = Object.fromEntries(Object.entries(iW).filter((WW => {
+             let [, iW] = WW;
+             return void 0 !== iW
+           })));
+           return `${WW}(${JSON.stringify(OW)})`
+         },
+         declareTools: WW => WW,
+         callStyle: "Make each call with function calling, its code in full: never write a call, or the code it carries, in your answer's words or in a code fence.",
+         fileResult: (WW, iW, OW) => `<file path="${WW}"${OW?' open_in_editor="true"':""}>\n${iW}\n</file>`,
+         editFailure: (WW, iW) => `${WW} failed: ${iW}`,
+         lookupResult: (WW, iW, OW) => `${WW} ${iW}:\n${OW}`
+       },
+       Ri = /(?:<\|start\|>\s*assistant\s*)?<\|channel\|>[^<{]*?\bto=([\w./:-]+)[^{]*?(?=\{)/g;
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1334` → after: `L1237-L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1237-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1237-L1256) · [Before (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1334)

```diff
-       return (0, QB.B)(BB).toFixed(1)
+       const iW = [];
+       for (const EW of WW.matchAll(Ri)) {
+         const NW = gi(EW[1]),
+           PW = EW.index + EW[0].length,
+           LW = Ci(WW, PW),
+           cW = null === LW ? null : fi(WW.slice(PW, LW));
+         if (null !== NW && null !== LW && null !== cW) {
+           var OW, mW;
+           const PW = null !== (OW = null === (mW = WW.slice(LW).match(/^\s*<\|call\|>/)) || void 0 === mW ? void 0 : mW[0]) && void 0 !== OW ? OW : "";
+           iW.push({
+             call: {
+               name: NW,
+               args: cW,
+               source: WW.slice(EW.index, LW + PW.length)
+             },
+             index: EW.index
+ ... (4 more added lines; see GitHub link above)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1337-L1338` → after: `L1259-L1285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1259-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1259-L1285) · [Before (L1337-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1337-L1338)

```diff
-     function yB(BB, OB) {
-       return `camera set by ${oB.get(BB[OB+1])}: heading ${`${jB(BB[OB+2])} -> ${jB(BB[OB+4])}`} deg, pitch ${`${jB(BB[OB+3])} -> ${jB(BB[OB+5])}`} deg, at ${BB[OB].toFixed(1)} ms`
+     function Ii(WW) {
+       var iW, OW, mW, EW;
+       let NW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       if ("object" !== typeof WW || null === WW) return [];
+       const PW = WW;
+       if (Array.isArray(PW.tool_calls)) return PW.tool_calls.flatMap((WW => Ii(WW, !0)));
+       if (void 0 !== PW.tool_call) return Ii(PW.tool_call, !0);
+       if (void 0 !== PW.function) return Ii(PW.function, !0);
+       const LW = null !== (iW = null !== (OW = null !== (mW = null !== (EW = PW.arguments) && void 0 !== EW ? EW : PW.params) && void 0 !== mW ? mW : PW.param) && void 0 !== OW ? OW : PW.args) && void 0 !== iW ? iW : PW.input,
+         cW = gi(PW.tool);
+       if (null !== cW) {
+         const {
+           tool: WW,
+           ...iW
+         } = PW, OW = fi(null !== LW && void 0 !== LW ? LW : iW);
+         return null === OW ? [] : [{
+ ... (11 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1344` → after: `L1289-L1308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1289-L1308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1289-L1308) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1344)

```diff
-       return Number.isFinite(BB) ? String(Math.round(10 * BB) / 10) : String(BB)
+       const iW = [];
+       let OW = WW.indexOf("{");
+       for (; - 1 !== OW;) {
+         const mW = Ci(WW, OW);
+         let EW = [];
+         if (null !== mW) try {
+           EW = Ii(JSON.parse(WW.slice(OW, mW)))
+         } catch {}
+         if (null !== mW && EW.length > 0) {
+           const NW = WW.slice(OW, mW);
+           iW.push(...EW.map((WW => ({
+             call: {
+               ...WW,
+               source: NW
+             },
+             index: OW
+ ... (4 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1348-L1358` → after: `L1312-L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1312-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1312-L1314) · [Before (L1348-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1348-L1358)

```diff
-       return Number.isFinite(BB) ? BB.toFixed(1) : String(BB)
-     }
-     class lB {
-       constructor() {
-         this.frames = 0, this.looked = 0, this.idle = 0, this.vI = 0, this.pastLimit = 0, this.lockSkips = 0, this.pZ = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
-       }
-       moved() {
-         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.vI > 0 || this.dropped > 0 || this.cameraSets > 0
-       }
-       hasEvent() {
-         return this.vI > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
+       if (Array.isArray(WW)) return `[${WW.map(ri).join(", ")}]`;
+       if ("object" === typeof WW && null !== WW) {
+         return `{${Object.entries(WW).map((WW=>{let[iW,OW]=WW;return`${JSON.stringify(iW)}: ${ri(OW)}`})).join(", ")}}`
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1361-L1384` → after: `L1318-L1364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1318-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1318-L1364) · [Before (L1361-L1384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1361-L1384)

```diff
-     class pB {
-       constructor() {
-         var BB = this;
-         this.topicOn = (0, DB.s)("look"), this.remote = (0, DB.u)(), this.tally = new lB, this.takes = null, this.started = !1, this.record = function(OB) {
-           let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-           if (JB.k.step(OB, GB), !BB.topicOn) return;
-           const YB = OB[GB],
-             DB = OB[GB + 1],
-             QB = OB[GB + 2],
-             oB = OB[GB + 3],
-             jB = OB[GB + 4],
-             yB = OB[GB + 5],
-             MB = OB[GB + 6],
-             lB = OB[GB + 7],
-             pB = OB[GB + 8],
-             qB = OB[GB + 9],
- ... (8 more removed lines; see GitHub link above)
+     const zi = {
+         formatCall: (WW, iW) => `<tool_call>\n<function=${WW}>\n${Object.entries(iW).flatMap((WW=>{let[iW,OW]=WW;return void 0===OW?[]:[`<parameter=${iW}>\n${OW}\n</parameter>\n`]})).join("")}</function>\n</tool_call>`,
+         declareTools: (WW, iW, OW) => OW || 0 === iW.length ? WW : `${function(WW){return`# Tools\n\nYou have access to the following functions:\n\n<tools>${WW.map((WW=>`\n${ri({type:"function",function:{name:WW.name,description:WW.description,parameters:WW.inputSchema}})}`)).joi … [truncated]
+         callStyle: "Write each call in your answer as a <tool_call> holding a <function=name> block with a <parameter=name> for each argument, the code inside as it is, not escaped and in full: never as JSON or inside a code fence.",
+         fileResult: (WW, iW, OW) => `<tool_response>\nview_file ${WW}${OW?" (open in the editor)":""}:\n${iW}\n</tool_response>`,
+         editFailure: (WW, iW) => `<tool_response>\nError: ${iW}\n</tool_response>`,
+         lookupResult: (WW, iW, OW) => `<tool_response>\n${WW} ${iW}:\n${OW}\n</tool_response>`
+       },
+       Fi = Di(/(?:<tool_call>\s*)?<function=([\w.:/-]+)>((?:(?!<tool_call\b|<function=)[\s\S])*?(?:<\/parameter>(?=\s*(?:<tool_call\b|<function=|$))|(?=<\/function>|<\/tool_call>)))(?:<\/function>(?:\s*<\/tool_call>)?|<\/tool_call>|\s*(?=<tool_call\b|<function=|$))/g, /<parameter … [truncated]
+       Qi = new Set(["path", "why", "name", "after", "question", "allow_other", "note"]),
+       WO = {
+         formatCall: (WW, iW) => `<tool_call name="${WW}">\n${Object.entries(iW).flatMap((WW=>{let[iW,OW]=WW;return void 0===OW?[]:[`<param name="${iW}">${Qi.has(iW)?OW:`\n${OW}\n`}</param>\n`]})).join("")}</tool_call>`,
+         declareTools: WW => WW,
+         callStyle: "Write each call in your answer as a <tool_call> with a <param> for each argument, the code inside as it is, not escaped and in full: never as JSON, a function call or inside a code fence.",
+         fileResult: (WW, iW, OW) => `<tool_result name="view_file" path="${WW}"${OW?' open_in_editor="true"':""}>\n${iW}\n</tool_result>`,
+         editFailure: (WW, iW) => `<tool_result name="${WW}" is_error="true">\n${iW}\n</tool_result>`,
+ ... (31 more added lines; see GitHub link above)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1386-L1451` → after: `L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1366) · [Before (L1386-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1386-L1451)

```diff
-           ZB.looked++, Number.isFinite(DB) && (ZB.dtMin = Math.min(ZB.dtMin, DB), ZB.dtMax = Math.max(ZB.dtMax, DB), ZB.dtSum += DB, DB > 0 && (ZB.peakRate = Math.max(ZB.peakRate, Math.hypot(jB, yB) / DB))), ZB.raw[0] += QB, ZB.raw[1] += oB, ZB.turned[0] += jB, ZB.turned[1] += yB … [truncated]
-           const NB = Math.abs(QB) > qB || Math.abs(oB) > qB,
-             RB = `raw (${PB(QB)}, ${PB(oB)}) over ${zB(DB)} ms, limit ${PB(qB)}, filter v (${lB.toFixed(3)}, ${pB.toFixed(3)}) px/ms, at ${zB(YB)} ms`;
-           MB === JB.h.vI ? (ZB.vI++, BB.outlier(`spike put right: ${RB} -> turned (${PB(jB)}, ${PB(yB)})`)) : NB ? (ZB.pastLimit++, BB.outlier(`kept past limit: ${RB}`)) : DB > 50 && (ZB.longFrames++, BB.remote || BB.outlier(`long frame: ${RB}, turned in full`))
-         }, this.onMouseMove = BB => {
-           const OB = null !== document.pointerLockElement;
-           if (JB.k.mouseMove(BB, OB), !this.topicOn) return;
-           const GB = this.tally,
-             {
-               movementX: YB,
-               movementY: DB
-             } = BB;
-           GB.events++;
-           const QB = Math.max(Math.abs(YB), Math.abs(DB));
-           GB.eventMax = Math.max(GB.eventMax, QB), QB >= 200 && (GB.bigEvents++, this.eventOutlier(`big mousemove (${YB}, ${DB}) at ${zB(BB.timeStamp)} ms, lock ${OB?"sJ":"free"}`))
-         }, this.onLockChange = () => {
- ... (50 more removed lines; see GitHub link above)
+           return iW
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1453-L1465` → after: `L1368-L1372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1368-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1368-L1372) · [Before (L1453-L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1453-L1465)

```diff
-       }
-       droppedCopy() {
-         this.counted(JB.b.droppedCopies, 1)
-       }
-       counted(BB, OB) {
-         if (0 === OB) return;
-         if (JB.k.change(BB, OB), !this.topicOn) return;
-         const GB = this.tally;
-         BB === JB.b.droppedCopies ? GB.dropped += OB : BB === JB.b.stepsLost ? GB.lost += OB : GB.cameraSetsLost += OB
-       }
-       endTake() {
-         this.takeRecords(), this.takes = null
-       }
+       },
+       EO = ["simple", "qwenXml"];
+ 
+     function NO(WW) {
+       return "deepseek" === WW ? "simple" : WW
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1467` → after: `L1374-L1403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1374-L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1374-L1403) · [Before (L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1467)

```diff
-     let qB = null;
+     const PO = /<\|[a-z_]+\|>/g,
+       LO = /^[ \t]*`{1,2}[ \t]*$/gm,
+       cO = /^[ \t]*<\/(?:tool_call|invoke|function|param(?:eter)?)>[ \t]*$/gm,
+       wO = /^[ \t]*(?:Wait|Oops|Hmm)\b[^\n]*\b(?:redo|re-do|the format|let me (?:fix|try|rewrite|write) (?:that|it|this))\b[^\n]*$/gim,
+       tO = /```[\w-]*/g,
+       ZO = /^[\s[\],]*$/,
+       xO = {
+         use_prefab: 0,
+         add_world_code: 1,
+         write_file: 2,
+         edit_file: 3,
+         replace_function: 4,
+         insert_code: 5,
+         edit_code_in_place: 6,
+         export_game: 7,
+         switch_to_world_code: 8,
+ ... (14 more added lines; see GitHub link above)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1470-L1471` → after: `L1406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1406) · [Before (L1470-L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1470-L1471)

```diff
-       let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-       return qB ??= new pB, qB.start(BB, OB), qB.record
+       return Ti(WW.name).inputSchema.required.every((iW => void 0 !== WW.args[iW]))
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1474-L1476` → after: `L1409-L1415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1409-L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1409-L1415) · [Before (L1474-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1474-L1476)

```diff
-     function NB() {
-       var BB;
-       null === (BB = qB) || void 0 === BB || BB.endTake()
+     function AO(WW, iW) {
+       const OW = gi(WW),
+         mW = fi(iW);
+       return null === OW || null === mW ? null : {
+         name: OW,
+         args: mW
+       }
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1479-L1481` → after: `L1418-L1430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1418-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1418-L1430) · [Before (L1479-L1481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1479-L1481)

```diff
-     function RB() {
-       var BB;
-       null === (BB = qB) || void 0 === BB || BB.droppedCopy()
+     function bO(WW, iW) {
+       const OW = [];
+       for (const mW of function(WW) {
+           const iW = NO(WW),
+             OW = EO.filter((WW => WW !== iW));
+           return [mO[iW], ...WW === iW ? [] : [mO[WW]], ...OW.map((WW => mO[WW])), Gi, ai]
+         }(iW)) OW.push(...mW(Xi(WW, OW)));
+       return OW.map((WW => {
+         let {
+           call: iW
+         } = WW;
+         return iW
+       }))
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1483-L1493` → after: `L1432-L1434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1432-L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1432-L1434) · [Before (L1483-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1483-L1493)

```diff
-     async function WB(BB) {
-       var OB;
-       null === (OB = qB) || void 0 === OB || OB.takeRecords();
-       const {
-         clientHintsRead: YB,
-         debugDeviceLines: DB
-       } = await GB.e(34).then((() => GB(34658)));
-       await YB, JB.k.save({
-         ...BB,
-         device: DB()
-       })
+ 
+     function jO(WW, iW) {
+       return bO(WW, iW).sort(((WW, iW) => xO[WW.name] - xO[iW.name]))
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1495-L1517` → after: `L1436-L1451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1436-L1451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1436-L1451) · [Before (L1495-L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1495-L1517)

```diff
-   },
-   40381: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => lB,
-       e: () => qB,
-       f: () => JB,
-       h: () => PB,
-       l: () => zB,
-       o: () => yB,
-       s: () => oB,
-       u: () => MB,
-       w: () => ZB
-     });
-     var YB = GB(2050),
-       DB = GB(25),
-       QB = GB(2059);
- ... (7 more removed lines; see GitHub link above)
+ 
+     function UO(WW) {
+       return function(WW) {
+         const iW = [...WW.matchAll(tO)],
+           OW = [];
+         let mW = 0;
+         for (; mW < iW.length;) {
+           const EW = iW[mW],
+             NW = iW.at(mW + 1);
+           void 0 !== NW && "```" === NW[0] ? (ZO.test(WW.slice(EW.index + EW[0].length, NW.index)) && OW.push({
+             from: EW.index,
+             to: NW.index + NW[0].length
+           }), mW += 2) : (OW.push({
+             from: EW.index,
+             to: EW.index + EW[0].length
+           }), mW++)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1519-L1532` → after: `L1453-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1453-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1453-L1461) · [Before (L1519-L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1519-L1532)

```diff
-       }), [], (0, QB.h)("_health", "_totalMaxHealth", "_shield", "maxShield")),
-       jB = [{
-         canFly: !1,
-         flying: !1
-       }, {
-         canFly: !1,
-         flying: !0
-       }, {
-         canFly: !0,
-         flying: !1
-       }, {
-         canFly: !0,
-         flying: !0
-       }];
+         let EW = WW;
+         for (const {
+             from: NW,
+             to: PW
+           }
+           of OW.reverse()) EW = EW.slice(0, NW) + EW.slice(PW);
+         return EW
+       }(WW.replace(PO, "").replace(LO, "").replace(cO, "").replace(wO, ""))
+     }
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1534-L1535` → after: `L1463-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1463-L1464) · [Before (L1534-L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1534-L1535)

```diff
-     function yB(BB, OB) {
-       return jB[(BB ? 2 : 0) + (OB ? 1 : 0)]
+     function kO(WW) {
+       return /^(?:on[A-Z]\w*|tick|playerCommand)$/.test(WW)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1537-L1540` → after: `L1466-L1480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1466-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1466-L1480) · [Before (L1537-L1540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1537-L1540)

```diff
-     const JB = (0, QB.i)((function() {
-       var BB;
-       return null !== (BB = YB.e.get("_aura")) && void 0 !== BB ? BB : null
-     }), [], (0, QB.h)("_aura"));
+     const sO = new Set(["tick", "onPlayerJoin", "onPlayerLeave", "onMobDespawned", "onBlockStand", "onBlockStandStart", "onBlockStandStop", "onPlayerJump", "onPlayerSelectInventorySlot", "onEntityCollision", "onChunkLoaded", "onClose"]),
+       MO = {
+         playerCommand: {
+           stopsWhen: WW => `${WW} !== undefined && ${WW} !== false`,
+           passedOn: !1
+         },
+         onPlayerChat: {
+           stopsWhen: WW => `${WW} === false || ${WW} === null`,
+           passedOn: !0
+         },
+         onPlayerDamagingOtherPlayer: {
+           stopsWhen: WW => `${WW} === "preventDamage"`,
+           passedOn: !0
+         }
+       };
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1544-L1556` → after: `L1489-L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1489-L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1489-L1490) · [Before (L1544-L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1544-L1556)

```diff
-         watch: OB => (0, DB.p)("shotPlayer", (GB => {
-           let {
-             playerId: YB,
-             damage: DB,
-             wasCrit: QB,
-             distance: oB
-           } = GB;
-           BB(YB) && OB({
-             damage: DB,
-             wasCrit: QB,
-             distance: oB
-           })
-         }))
+         file: OW,
+         hasErrors: (null !== (iW = null === mW || void 0 === mW ? void 0 : mW.length) && void 0 !== iW ? iW : 0) > 0
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1561-L1576` → after: `L1495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1495) · [Before (L1561-L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1561-L1576)

```diff
-       return (0, QB.b)("chat", (OB => {
-         let {
-           serverChatMsgId: GB,
-           worldCodeLineId: YB,
-           content: DB,
-           chatterEId: QB,
-           chatterObjectsToReplay: oB
-         } = OB;
-         return {
-           serverChatMsgId: null !== GB && void 0 !== GB ? GB : null,
-           worldCodeLineId: null !== YB && void 0 !== YB ? YB : null,
-           content: DB,
-           author: QB ? BB(QB) : null,
-           hiddenFromReplay: !0 === oB
-         }
-       }))
+       return void 0 !== WW && (TW().isFunctionExpression(WW) || TW().isArrowFunction(WW))
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1578-L1586` → after: `L1497-L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1497-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1497-L1509) · [Before (L1578-L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1578-L1586)

```diff
-     const zB = (0, QB.b)("chatRemoved");
-     class lB {
-       constructor() {
-         this.shown = null, this.needed = null, this.neededSince = 0
-       }
-       update(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
-         const GB = this.shown;
-         return BB !== this.needed && (this.needed = BB, this.neededSince = OB, null === BB && (this.shown = null)), this.shown !== this.needed && OB - this.neededSince > 200 && (this.shown = this.needed), this.shown !== GB
+ 
+     function YO(WW) {
+       if (TW().isFunctionDeclaration(WW) && WW.name) return {
+         cZ: WW,
+         nameNode: WW.name
+       };
+       if (TW().isVariableStatement(WW) && 1 === WW.declarationList.declarations.length) {
+         const iW = WW.declarationList.declarations[0],
+           OW = iW.initializer && yO(iW.initializer);
+         if (TW().isIdentifier(iW.name) && SO(OW)) return {
+           cZ: OW,
+           nameNode: iW.name
+         }
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1591-L1593` → after: `L1520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1520) · [Before (L1591-L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1591-L1593)

```diff
-       return [{
-         translationKey: `touchKeys:${BB}`
-       }]
+       return TW().isParenthesizedExpression(WW) ? yO(WW.expression) : WW
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1606-L1610` → after: `L1524-L1527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1524-L1527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1524-L1527) · [Before (L1606-L1610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1606-L1610)

```diff
-       return [{
-         translationKey: "touchKeys:tameWith"
-       }, " ", {
-         icon: BB
-       }]
+       return TW().isExpressionStatement(WW) && TW().isBinaryExpression(WW.expression) && WW.expression.operatorToken.kind === TW().SyntaxKind.EqualsToken && TW().isIdentifier(WW.expression.left) ? {
+         name: WW.expression.left,
+         value: WW.expression.right
+       } : null
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1679-L1685` → after: `L1530-L1531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1530-L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1530-L1531) · [Before (L1679-L1685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1679-L1685)

```diff
-     function yB(BB, OB) {
-       return {
-         item: BB,
-         scale: OB,
-         billboard: arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         thrownRole: !0
-       }
+     function JO(WW) {
+       return TW().isIdentifier(WW) ? [WW.text] : WW.elements.flatMap((WW => TW().isOmittedExpression(WW) ? [] : JO(WW.name)))
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1737-L1754` → after: `L1535-L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1535-L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1535-L1548) · [Before (L1737-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1737-L1754)

```diff
-       const OB = new Set,
-         GB = BB => {
-           const YB = [],
-             DB = new Set;
-           for (const QB of BB) {
-             const BB = QB.hasGeometry && 0 === QB.children.length;
-             if (!BB || !DB.has(QB.name)) {
-               if (OB.has(QB.name.toLowerCase())) throw new Error(`Two nodes are named ${QB.name}`);
-               if (OB.add(QB.name.toLowerCase()), BB) DB.add(QB.name), YB.push(QB.name);
-               else {
-                 if (QB.hasGeometry) throw new Error(`Mesh ${QB.name} has nodes under it: put them in a group beside it`);
-                 YB.push(0 === QB.children.length ? {
-                   nodeName: QB.name
-                 } : {
-                   nodeName: QB.name,
-                   children: GB(QB.children)
- ... (2 more removed lines; see GitHub link above)
+       if (!TW().isVariableStatement(WW)) return null;
+       const iW = WW.declarationList.declarations.find((WW => TW().isIdentifier(WW.name) && "CONFIG" === WW.name.text));
+       return null !== iW && void 0 !== iW && iW.initializer && TW().isObjectLiteralExpression(iW.initializer) ? iW.initializer : null
+     }
+ 
+     function HO(WW, iW) {
+       return iW.statements.map((OW => {
+         var mW;
+         const EW = function(WW, iW, OW) {
+             let mW = OW.getStart(iW);
+             for (const NW of (null !== (EW = TW().getLeadingCommentRanges(WW, OW.getFullStart())) && void 0 !== EW ? EW : []).reverse()) {
+               var EW;
+               if (/\n[^\S\n]*\n/.test(WW.slice(NW.end, mW))) break;
+               mW = NW.pos
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1757` → after: `L1562-L1585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1562-L1585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1562-L1585) · [Before (L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1757)

```diff
-           return YB
+         }
+         const PW = TW().isVariableStatement(OW) ? OW.declarationList.declarations.flatMap((WW => JO(WW.name))) : [];
+         if (hO(OW)) {
+           return {
+             kind: "config",
+             names: ["CONFIG", ...PW.filter((WW => "CONFIG" !== WW))],
+             from: EW,
+             to: OW.getEnd(),
+             node: OW
+           }
+         }
+         if (TW().isVariableStatement(OW)) return {
+           kind: "variable",
+           names: PW,
+           from: EW,
+           to: OW.getEnd(),
+ ... (8 more added lines; see GitHub link above)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1759` → after: `L1587-L1595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1587-L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1587-L1595) · [Before (L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1759)

```diff
-       return GB(BB)
+         const LW = null === (mW = TO(OW)) || void 0 === mW ? void 0 : mW.name.text;
+         return {
+           kind: "other",
+           names: void 0 !== LW && kO(LW) ? [LW] : [],
+           from: EW,
+           to: OW.getEnd(),
+           node: OW
+         }
+       }))
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1762-L1785` → after: `L1598-L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1598-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1598-L1601) · [Before (L1762-L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1762-L1785)

```diff
-     function oO(BB, OB) {
-       const GB = QO(BB),
-         YB = function(BB, OB) {
-           const GB = BB => BB.hasGeometry && 0 === BB.children.length,
-             YB = BB => BB.children.some((BB => GB(BB) ? !OB(BB.name) : !OB(BB.name) && YB(BB))),
-             DB = (BB, YB) => {
-               const oB = new Set;
-               return BB.flatMap((BB => GB(BB) ? !YB && !OB(BB.name) || oB.has(BB.name) ? [] : (oB.add(BB.name), [BB.name]) : OB(BB.name) || YB ? [QB(BB)] : DB(BB.children, !1)))
-             },
-             QB = BB => {
-               const OB = DB(BB.children, !1);
-               return {
-                 nodeName: BB.name,
-                 ...YB(BB) ? {
-                   collapsesTo: BB.name
-                 } : {},
- ... (8 more removed lines; see GitHub link above)
+     function nO(WW) {
+       if (!TW().isPropertyAssignment(WW) && !TW().isShorthandPropertyAssignment(WW)) return null;
+       const iW = WW.name;
+       return TW().isIdentifier(iW) || TW().isStringLiteral(iW) ? iW.text : null
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1788-L1792` → after: `L1604-L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1604-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1604-L1605) · [Before (L1788-L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1788-L1792)

```diff
-     function jO(BB) {
-       return BB.reduce(((BB, OB) => {
-         var GB;
-         return BB + ("string" === typeof OB ? 1 : (void 0 === OB.collapsesTo ? 0 : 1) + jO(null !== (GB = OB.children) && void 0 !== GB ? GB : []))
-       }), 0)
+     function uO(WW, iW) {
+       return WW.lastIndexOf("\n", iW - 1) + 1
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1796-L1845` → after: `L1609-L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1609-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1609-L1611) · [Before (L1796-L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1796-L1845)

```diff
-       const GB = BB => BB.getChildren(),
-         YB = BB => {
-           if ("SF" in BB && !0 === BB.SF) throw new Error(`${BB.name} is drawn as an instance of another mesh`);
-           return "getTotalVertices" in BB && BB.getTotalVertices() > 0
-         },
-         DB = BB => {
-           var OB, DB;
-           return !YB(BB) || GB(BB).length > 0 ? null : `${null!==(OB=null===(DB=BB.material)||void 0===DB?void 0:DB.uniqueId)&&void 0!==OB?OB:"none"} ${BB.getVerticesDataKinds().sort().join(",")}`
-         };
-       ! function(BB, OB, GB) {
-         const YB = new Set,
-           DB = BB => {
-             for (const GB of BB) YB.add(GB.name.toLowerCase()), DB(OB(GB))
-           };
-         DB(BB);
-         const QB = new Set,
- ... (34 more removed lines; see GitHub link above)
+       var OW, mW;
+       const EW = WW.slice(uO(WW, iW), iW);
+       return /^\s*$/.test(EW) ? EW : `${null!==(OW=null===(mW=/^\s*/.exec(EW))||void 0===mW?void 0:mW[0])&&void 0!==OW?OW:""}\t`
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1850-L1851` → after: `L1615-L1648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1615-L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1615-L1648) · [Before (L1850-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1850-L1851)

```diff
-       const YB = CB.h.itemsClient[OB],
-         DB = function(BB) {
+       const mW = WW.slice(uO(WW, iW.getStart(OW)), function(WW, iW) {
+           const OW = WW.indexOf("\n", iW);
+           return -1 === OW ? WW.length : OW
+         }(WW, iW.getEnd())),
+         EW = mW.trim(),
+         NW = /^[\w$"']+\s*:/.test(EW) && "" === WW.slice(uO(WW, iW.getStart(OW)), iW.getStart(OW)).trim() ? mW.replace(/^\s*/, "\t") : `\t${iW.getText(OW)},`;
+       return /,\s*(?:\/\/.*)?$/.test(NW) ? NW : NW.replace(/(\s*(?:\/\/.*)?)$/, ",$1")
+     }
+ 
+     function eO(WW, iW) {
+       let OW = WW;
+       for (const mW of [...iW].sort(((WW, iW) => iW.from - WW.from))) OW = OW.slice(0, mW.from) + mW.text + OW.slice(mW.to);
+       return OW
+     }
+ 
+     function vO(WW) {
+ ... (18 more added lines; see GitHub link above)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1853-L1893` → after: `L1650-L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1650-L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1650-L1723) · [Before (L1853-L1893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1853-L1893)

```diff
-           const GB = (0, sB.u)(BB);
-           if (null !== GB) return tB.e.enabled && tB.e.hasAnimation(GB) ? {
-             vehicleType: GB,
-             moved: tB.e.bonesMoved(GB)
-           } : null;
-           const YB = null === (OB = MB.h[BB]) || void 0 === OB ? void 0 : OB.meshEntityBones;
-           return null !== YB && void 0 !== YB && YB.length ? {
-             vehicleType: null,
-             moved: new Set(YB)
-           } : null
-         }(OB);
-       if (null === DB || void 0 === YB) return null;
-       const QB = BB.UP.kF;
-       let oB = JO.get(QB);
-       oB || (oB = new Map, JO.set(QB, oB));
-       let jB = oB.get(OB);
- ... (25 more removed lines; see GitHub link above)
+           const OW = null === (iW = TO(WW.node)) || void 0 === iW ? void 0 : iW.value;
+           return void 0 !== OW && TW().isIdentifier(OW) && OW.text === LW.text
+         })),
+         wW = WW.filter((WW => WW.names.includes(LW.text))),
+         tW = 1 === wW.length && "function" === wW[0].kind ? YO(wW[0].node) : null;
+       return 1 === cW.length ? tW : null
+     }
+ 
+     function VO(WW) {
+       return WW.parameters.map((WW => TW().isIdentifier(WW.name) ? WW.name.text : null))
+     }
+ 
+     function pO(WW, iW, OW, mW, EW, NW, PW) {
+       var LW;
+       let cW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+       const {
+ ... (58 more added lines; see GitHub link above)
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1895-L1914` → after: `L1725-L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1725-L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1725-L1744) · [Before (L1895-L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1895-L1914)

```diff
-             const {
-               root: MB,
-               meshes: PB
-             } = JB, zB = new Set;
-             for (const ZB of PB) ZB.material && zB.add(ZB.material);
-             for (const ZB of zB) zO(BB.UP, ZB, OB.name);
-             for (const ZB of PB) ZB.mF(), ZB.material ? ZB.sideOrientation = UB.d.ClockWiseSideOrientation : ((0, KB.e)(ZB) || ZB.JF().sF(ZB), ZB.Zk(!1));
-             for (const ZB of PB) ZB.material && BB.UP.YL(ZB);
-             const lB = BB.UP.kF,
-               pB = BB.zp ? {
-                 aShaderPackItem: 4
-               } : null;
-             return lB.newObjectType(YB, MB, {
-               CP: 8,
-               capacityIsConst: !1,
-               strides: {
- ... (4 more removed lines; see GitHub link above)
+             return OW
+           }(tW, mW),
+           EW = WW => {
+             if (!TW().isFunctionLike(WW) && ! function(WW, iW, OW) {
+                 if (!TW().isIfStatement(WW) || !TW().isReturnStatement(WW.thenStatement) || !WW.thenStatement.expression) return !1;
+                 const mW = WW.thenStatement.expression;
+                 return TW().isIdentifier(mW) && iW.has(mW.text) && WW.expression.getText(OW).startsWith(`${mW.text} `)
+               }(WW, OW, iW)) {
+               if (TW().isReturnStatement(WW) && !WW.expression) ZW.push({
+                 from: WW.getStart(iW),
+                 to: WW.getEnd(),
+                 text: `return ${sW}`
+               });
+               else if (TW().isReturnStatement(WW) && WW.expression) {
+                 const mW = CO(WW.expression, OW);
+                 mW && ZW.push({
+ ... (4 more added lines; see GitHub link above)
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1916-L1947` → after: `L1746-L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1746-L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1746-L1760) · [Before (L1916-L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1916-L1947)

```diff
-             }), lB.setPickableForType(YB, null !== GB.vehicleType), lB.setCullableForType(YB, !0), (0, BO.v)(MB), !0
-           }(BB, YB, DB, GB).then((BB => {
-             QB.set(OB, BB ? {
-               status: "ready",
-               typeName: GB
-             } : {
-               status: "failed"
-             })
-           }), (BB => {
-             console.error(`Could not load the bones of ${OB}, so it draws as one mesh\n`, BB), QB.set(OB, {
-               status: "failed"
-             })
-           }));
-         jB = {
-           status: "loading",
-           loaded: yB
- ... (16 more removed lines; see GitHub link above)
+               TW().forEachChild(WW, EW)
+             }
+           };
+         tW.statements.forEach(EW);
+         const NW = tW.statements[tW.statements.length - 1];
+         if (!NW || !TW().isReturnStatement(NW) && !TW().isThrowStatement(NW)) {
+           const OW = tW.getEnd() - 1,
+             mW = NW ? oO(WW, NW.getStart(iW)) : `${WW.slice(uO(WW,wW.getStart(iW)),wW.getStart(iW)).replace(/\S.*$/,"")}\t`,
+             EW = WW.slice(uO(WW, OW), OW),
+             PW = /^\s*$/.test(EW) ? `${mW}return ${sW}\n${EW}` : `\n${mW}return ${sW}\n`;
+           ZW.push({
+             from: /^\s*$/.test(EW) ? uO(WW, OW) : OW,
+             to: OW,
+             text: PW
+           })
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1953-L1956` → after: `L1805-L1809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1805-L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1805-L1809) · [Before (L1953-L1956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1953-L1956)

```diff
-       return BB.flatMap((BB => {
-         var OB;
-         return "string" === typeof BB ? [BB] : [BB.nodeName, ...PO(null !== (OB = BB.children) && void 0 !== OB ? OB : [])]
-       }))
+       const iW = [],
+         OW = WW => {
+           TW().isIdentifier(WW) && iW.push(WW.text), TW().forEachChild(WW, OW)
+         };
+       return OW(WW), iW
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1960-L1964` → after: `L1813-L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1813-L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1813-L1814) · [Before (L1960-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1960-L1964)

```diff
-       OB.name = `${GB}SkeletalVehicleMat`;
-       const YB = (0, kB.U)(OB);
-       (0, kB.J)(YB), (0, DO.d)(OB, (() => {
-         (0, YO.e)(YB, BB), (0, aB.d)(YB, !0)
-       })), (0, DO.g)(OB)
+       var mW, EW;
+       return (0, bi.e)(null !== (mW = null === (EW = WW.body) || void 0 === EW ? void 0 : EW.getText(iW)) && void 0 !== mW ? mW : "", new RegExp(`${OW}\\s*\\(`), bi.k).length > 0
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L1966-L2019` → after: `L1816-L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1816-L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1816-L1843) · [Before (L1966-L2019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L1966-L2019)

```diff
-     const lO = {
-         width: !1,
-         height: !1,
-         depth: !1,
-         diffuseColor: !0,
-         emissiveColor: !0,
-         backFaceCulling: !0,
-         texture: !0,
-         faceUV: !0,
-         animateTexture: !0,
-         hideDist: !1,
-         meshOffset: !1,
-         autoRotate: !1,
-         lineToEId: !1
-       },
-       pO = Object.keys(lO).filter((BB => lO[BB]));
- ... (38 more removed lines; see GitHub link above)
+ 
+     function qO(WW, iW, OW) {
+       var mW;
+       const {
+         owner: EW,
+         heading: NW
+       } = OW, PW = null !== (mW = OW.overrides) && void 0 !== mW ? mW : new Set;
+       if ("" === WW.trim() && !0 !== OW.chainCallbacks) {
+         const WW = `${NW?`${NW}\n`:""}${iW.trim()}\n`,
+           {
+             file: OW,
+             hasErrors: mW
+           } = KO(WW);
+         if (mW) return null;
+         const EW = HO(WW, OW);
+         return {
+ ... (12 more added lines; see GitHub link above)
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2021-L2204` → after: `L1845-L1867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1845-L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1845-L1867) · [Before (L2021-L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2021-L2204)

```diff
-       addBoard(BB, OB, GB, YB) {
-         var DB, QB, oB;
-         this.removeBoard(BB, OB, GB);
-         const jB = this.bloxd.blockDataOwner.getBlockData(BB, OB, GB),
-           yB = null !== (DB = null === jB || void 0 === jB || null === (QB = jB.persisted.shared.text) || void 0 === QB ? void 0 : QB.toString()) && void 0 !== DB ? DB : "",
-           JB = null !== (oB = null === jB || void 0 === jB ? void 0 : jB.persisted.shared.textSize) && void 0 !== oB ? oB : 0;
-         this.addBoardTextEntity([BB, OB, GB], 25, (() => {
-           const BB = {
-             position: vB.Xp.Zero(),
-             rotation: vB.Xp.Zero(),
-             SP: vB.Xp.One()
-           };
-           let OB;
-           "" === yB.trim() ? OB = (0, WB.h)(this.kz.UP, "EmptyBoardMesh") : (OB = this.createBoardTextPlane(yB, JB, 1, 7 / 8, 256), (0, EB.j)(BB, YB, .375), BB.rotation.y += Math.PI, OB.rotation = BB.rotation);
-           return {
-             mesh: OB,
- ... (168 more removed lines; see GitHub link above)
+       const LW = KO(WW),
+         cW = KO(iW);
+       if (LW.hasErrors || cW.hasErrors) return null;
+       const wW = HO(WW, LW.file),
+         tW = HO(iW, cW.file),
+         ZW = new Set(wW.flatMap((WW => WW.names))),
+         xW = new Set(ZW),
+         lW = [],
+         AW = [],
+         bW = [],
+         jW = [];
+       let UW = [];
+       const kW = tW.find((WW => "config" === WW.kind)),
+         sW = wW.find((WW => "config" === WW.kind));
+       if (kW) {
+         const OW = hO(kW.node),
+ ... (7 more added lines; see GitHub link above)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2206-L2261` → after: `L1869-L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1869-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1869-L1905) · [Before (L2206-L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2206-L2261)

```diff
-           }
-           return {
-             uF: null,
-             mesh: null !== (QB = null === (oB = CB.h.itemsClient[OB.blockName]) || void 0 === oB ? void 0 : oB.getMesh(OB.size, GB)) && void 0 !== QB ? QB : null,
-             meshOffset: YB,
-             nameYOffset: jB
-           }
-         }
-         if ("Box" === BB) {
-           var jB;
-           const DB = OB.width || 1,
-             QB = OB.height || 1,
-             oB = OB.depth || 1,
-             zB = DB * QB * oB < 0,
-             lB = zB ? -1 : 1,
-             pB = pO.map((BB => OB[BB])),
- ... (40 more removed lines; see GitHub link above)
+             const cW = [],
+               wW = [],
+               tW = [],
+               ZW = new Map;
+             for (const sW of NW.properties) {
+               const WW = nO(sW);
+               if (null === WW) continue;
+               const OW = LW.get(WW);
+               if (OW) {
+                 if (PW.has(WW) && TW().isPropertyAssignment(OW) && TW().isPropertyAssignment(sW)) {
+                   const mW = sW.initializer.getText(EW);
+                   OW.initializer.getText(iW) !== mW && (cW.push({
+                     from: OW.initializer.getStart(iW),
+                     to: OW.initializer.getEnd(),
+                     text: mW
+                   }), ZW.set(OW, mW), wW.push(WW))
+ ... (21 more added lines; see GitHub link above)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2264-L2285` → after: `L1908-L1935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1908-L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1908-L1935) · [Before (L2264-L2285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2264-L2285)

```diff
-             const {
-               mirror: QB
-             } = (0, eB.c)({
-               name: `${ZB}EntityMesh`,
-               eq: YB,
-               sets: {
-                 ...BB,
-                 backFaceCulling: null === (yB = OB.backFaceCulling) || void 0 === yB || yB
-               },
-               features: BB => {
-                 GB && (0, kB.w)(BB, dB.e, GB), (0, aB.d)(BB, !0), (0, kB.H)(BB)
-               },
-               freeze: !0
-             }), oB = OB.faceUV ? OB.faceUV.map((BB => [BB[0] + .01, BB[1] + .01, BB[2] - .01, BB[3] - .01])) : void 0, jB = (0, WB.q)(this.kz.UP, `${ZB}EntityMesh`, (0, VB.b)({
-               width: lB,
-               height: lB,
- ... (6 more removed lines; see GitHub link above)
+             const AW = void 0 !== lW && !OW.properties.hasTrailingComma,
+               bW = uO(WW, xW),
+               jW = WW.slice(bW, xW);
+             if ("" === jW.trim()) return AW && cW.push({
+               from: lW.getEnd(),
+               to: lW.getEnd(),
+               text: ","
+             }), cW.push({
+               from: bW,
+               to: bW,
+               text: `${tW.join("\n")}\n`
+             }), {
+               edits: cW,
+               settings: wW
+             };
+             const UW = bW + jW.trimEnd().length,
+ ... (12 more added lines; see GitHub link above)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2287-L2384` → after: `L1937-L1953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1937-L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1937-L1953) · [Before (L2287-L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2287-L2384)

```diff
-             jB.rp = !0, jB.Ep = !0, jB.Zk(!1), (0, KB.e)(jB) || jB.JF().sF(jB), SB.set(ZB, jB), UB = jB
-           }
-           const fB = UB.createInstance(`${ZB}EntityMeshInstance`);
-           return fB.SP.set(lB * DB, lB * QB, lB * oB), this.kz.UP.Hq(fB), (0, uB.s)(fB, 0, 0, 0), GB(fB), {
-             uF: null,
-             mesh: fB,
-             meshOffset: null !== (jB = OB.meshOffset) && void 0 !== jB ? jB : RB().pp(0, QB / 2, 0),
-             nameYOffset: QB + .3
-           }
-         }
-         if ("Leaderboard" === BB) {
-           var UB, fB, IB, FB, rB;
-           const BB = OB.eId,
-             YB = function(BB, OB, GB, YB) {
-               var DB, QB;
-               let oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
- ... (82 more removed lines; see GitHub link above)
+           }(WW, LW.file, mW, iW, cW.file, OW, PW);
+           lW.push(...EW.edits), UW = EW.settings
+         } else if (OW) {
+           if (xW.has("CONFIG")) return null;
+           const mW = function(WW, iW) {
+               const OW = iW.statements[0];
+               return OW ? uO(WW, OW.getStart(iW)) : WW.length
+             }(WW, LW.file),
+             EW = mW > 0 && "\n" !== WW[mW - 1] ? "\n" : "";
+           lW.push({
+             from: mW,
+             to: mW,
+             text: `${EW}${iW.slice(kW.from,kW.to)}\n\n`
+           }), UW = OW.properties.flatMap((WW => {
+             const iW = nO(WW);
+             return null === iW ? [] : [iW]
+ ... (1 more added lines; see GitHub link above)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2386-L2406` → after: `L1955-L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1955-L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1955-L1970) · [Before (L2386-L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2386-L2406)

```diff
-         if ("ParticleEmitter" === BB) {
-           var XB;
-           const {
-             particleSystem: BB,
-             mesh: YB
-           } = this.getParticleEmitter(OB, OB.eId, OB.nodeName);
-           if ((0, gB.Q)(OB.eId)) console.error("No eId specified for mesh particle system, will not be possible to update it");
-           else {
-             var wB;
-             (0, gB.Q)(this.bloxd.meshParticleSystems[OB.eId]) && (this.bloxd.meshParticleSystems[OB.eId] = {});
-             const GB = null !== (wB = OB.nodeName) && void 0 !== wB ? wB : "__root__";
-             this.bloxd.meshParticleSystems[OB.eId][GB] = BB, BB.onDispose = () => {
-               var BB, YB;
-               (0, gB.Q)(null === this || void 0 === this || null === (BB = this.bloxd) || void 0 === BB || null === (YB = BB.meshParticleSystems) || void 0 === YB ? void 0 : YB[OB.eId]) || (delete this.bloxd.meshParticleSystems[OB.eId][GB], 0 === Object.keys(this.bloxd.meshPartic … [truncated]
-             }
-           }
- ... (5 more removed lines; see GitHub link above)
+       }
+       const MW = [],
+         KW = (WW, OW) => {
+           const mW = MW[MW.length - 1],
+             EW = void 0 !== mW && mW >= 0 && mW === OW - 1 && !/\n[^\S\n]*\n/.test(iW.slice(tW[mW].to, tW[OW].from)) ? "\n" : "\n\n";
+           AW.push(0 === AW.length ? WW : `${EW}${WW}`), MW.push(OW)
+         };
+       for (const [YW, yW] of tW.entries()) {
+         if ("config" === yW.kind) continue;
+         const mW = iW.slice(yW.from, yW.to);
+         if ("callback" === yW.kind) {
+           const iW = yW.names[0],
+             NW = DO(wW, iW);
+           if (!NW && ZW.has(iW)) {
+             if (!0 === OW.chainCallbacks) continue;
+             return null
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2408-L2417` → after: `L1972-L1974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1972-L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1972-L1974) · [Before (L2408-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2408-L2417)

```diff
-         }
-         if ("Person" === BB) {
-           var EB, cB, hB, TB, sB;
-           const BB = this.kz.UP.kF,
-             YB = (0, mB.n)("Player");
-           BB.Zk(YB, !0), BB.setPosition(YB, 0, 0, 0), BB.setRotationEuler(YB, 0, 0, 0), BB.set(YB, "aOpacity", 1), BB.Jw(YB, "aOpacity", 1);
-           const DB = null === (EB = (0, zB.n)("head", null === (cB = OB.textures) || void 0 === cB ? void 0 : cB.head)) || void 0 === EB ? void 0 : EB.personModel;
-           for (const OB in null === DB || void 0 === DB ? void 0 : DB.nodePositions) {
-             const [GB, QB, oB] = DB.nodePositions[OB];
-             BB.setNodePosition(YB, BB.getNamedNode(YB, OB), GB, QB, oB)
+           if (!NW && !0 !== OW.chainCallbacks) {
+             xW.has(iW) || (KW(mW, YW), bW.push(iW), xW.add(iW));
+             continue
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2419-L2423` → after: `L1976-L1982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1976-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1976-L1982) · [Before (L2419-L2423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2419-L2423)

```diff
-           const QB = null !== (hB = OB.size) && void 0 !== hB ? hB : 1;
-           BB.setScale(YB, QB, QB, -QB);
-           for (const GB of lB.e) {
-             var xB;
-             mB.e.Player.meshApi.updatePlayerCosmetic(null, YB, GB, null === (xB = OB.textures) || void 0 === xB ? void 0 : xB[GB])
+           const PW = `${gO(EW)}${vO(iW)}`,
+             tW = YO(yW.node);
+           if (null === tW || void 0 === tW || !tW.nameNode) continue;
+           if (!xW.has(PW)) {
+             const WW = tW.nameNode.getStart(cW.file) - yW.from,
+               iW = tW.nameNode.getEnd() - yW.from;
+             KW(mW.slice(0, WW) + PW + mW.slice(iW), YW), bW.push(PW), xW.add(PW)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2425-L2429` → after: `L1984-L1989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1984-L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1984-L1989) · [Before (L2425-L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2425-L2429)

```diff
-           return GB(YB), {
-             uF: YB,
-             mesh: null,
-             meshOffset: null !== (TB = OB.meshOffset) && void 0 !== TB ? TB : RB().pp(0, 0, 0),
-             nameYOffset: (null !== (sB = null === DB || void 0 === DB ? void 0 : DB.height) && void 0 !== sB ? sB : pB.f.xZ) * QB + .5
+           const AW = VO(tW.cZ).map(((WW, iW) => null !== WW && void 0 !== WW ? WW : `arg${iW}`));
+           if (!NW) {
+             const WW = `${PW}(${AW.join(", ")})`,
+               OW = `${gO(EW)}Result`;
+             KW(`function ${iW}(${AW.join(", ")}) {\n\t${sO.has(iW)?WW:`const ${OW} = ${WW}\n\treturn ${OW}`}\n}`, -1), bW.push(iW), xW.add(iW);
+             continue
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2431-L2458` → after: `L1991-L1992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1991-L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1991-L1992) · [Before (L2431-L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2431-L2458)

```diff
-         } {
-           const OB = BB;
-           return void console.error("Not implemented custom meshes for type", OB)
-         }
-       }
-       getParticleEmitter(BB, OB, GB) {
-         const YB = `ParticleEmitter|${JSON.stringify(BB)}`,
-           DB = this.kz.UP.JF(),
-           QB = qO.sourcesFor(DB);
-         if (!QB.particleEmitter) {
-           const BB = (0, WB.q)(this.kz.UP, `${YB}EntityMesh`, (0, VB.b)({
-             width: 1,
-             height: 1,
-             depth: 1
-           }));
-           BB.visibility = 0, BB.rp = !0, BB.Ep = !0, BB.Zk(!1), BB.bq = !1, (0, KB.e)(BB) || BB.JF().sF(BB), (0, hB.h)(BB), QB.particleEmitter = BB
- ... (12 more removed lines; see GitHub link above)
+           BO(NW.cZ, LW.file, PW) || (lW.push(...pO(WW, LW.file, NW, iW, PW, AW, EW, !0 === OW.runsLast)), jW.push(iW));
+           continue
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2460-L2510` → after: `L1994-L1997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R1994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L1994-L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L1994-L1997) · [Before (L2460-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2460-L2510)

```diff
-       }
-     }
-     qO.sourcesByScene = new WeakMap, qO.MAX_WARM_PARTICLE_SHADERS = 12, qO.warmParticleShaderKeys = new Set, qO.warmedForScene = null;
-     var ZO = GB(38712),
-       NO = GB(31),
-       RO = GB(1246),
-       WO = GB(162),
-       AO = GB(4914),
-       VO = GB(38325),
-       SO = GB(38449),
-       nO = GB(1217),
-       UO = GB(1360),
-       fO = GB(38903),
-       kO = GB(4505),
-       dO = GB(40329);
-     class KO extends kO.EventEmitter {
- ... (35 more removed lines; see GitHub link above)
+         const NW = yW.names.filter((WW => !xW.has(WW)));
+         if ("other" === yW.kind || yW.names.length > 0 && NW.length === yW.names.length) {
+           KW(mW, YW), bW.push(...NW);
+           for (const WW of NW) xW.add(WW)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2513-L2521` → after: `L2000-L2003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2000-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2000-L2003) · [Before (L2513-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2513-L2521)

```diff
-       XE(BB) {
-         this.element.appendChild(BB)
-       }
-       IK() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         BB || (this.kz.camera.uE = !0), this.UW.bZ = !!BB && this.QE
-       }
-       yE(BB) {
-         this.UW.pE = !!BB && this.lE && this.QE
+       let SW = eO(WW, lW);
+       if (AW.length > 0) {
+         const WW = SW.replace(/\s*$/, "");
+         SW = `${""===WW?"":`${WW}\n\n`}${NW?`${NW}\n`:""}${AW.join("")}\n`
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2523-L2533` → after: `L2005-L2009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2005-L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2005-L2009) · [Before (L2523-L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2523-L2533)

```diff
-       get mw() {
-         return this.Kw.mw
-       }
-       get Iw() {
-         return this.Kw.Iw
-       }
-       get Xw() {
-         return this.Kw.Xw
-       }
-       get Zm() {
-         return this.Kw.Zm
+       return KO(SW).hasErrors ? null : {
+         text: SW,
+         added: bW,
+         chained: jW,
+         settings: UW
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2538-L2547` → after: `L2014-L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2014-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2014-L2017) · [Before (L2538-L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2538-L2547)

```diff
-       var OB = BB.aE || null;
-       "string" === typeof OB && (OB = document.querySelector(OB));
-       var GB = OB || function() {
-         var BB = document.createElement("div");
-         return BB.tabIndex = 1, BB.style.outline = "none", BB.style.position = "fixed", BB.style.left = "0px", BB.style.right = "0px", BB.style.top = "0px", BB.style.bottom = "0px", BB.style.height = "100%", BB.style.overflow = "hidden", document.body.appendChild(BB), document.bo … [truncated]
-       }();
-       return {
-         element: GB,
-         canvas: mO(GB)
-       }
+       const {
+         file: iW
+       } = KO(WW);
+       return new Set(HO(WW, iW).flatMap((WW => WW.names)))
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2551-L2613` → after: `L2021-L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2021-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2021-L2026) · [Before (L2551-L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2551-L2613)

```diff
-       var OB = BB.querySelector("canvas");
-       return OB || ((OB = document.createElement("canvas")).style.position = "absolute", OB.style.left = "0px", OB.style.top = "0px", OB.style.height = "100%", OB.style.width = "100%", OB.id = "noa-canvas", BB.insertBefore(OB, BB.firstChild)), OB
-     }
-     GB(40331);
-     class IO extends kO.EventEmitter {
-       constructor() {
-         super(...arguments), this.snapshots = [], this.depth = 0
-       }
-       TE(BB, OB) {
-         const GB = this._events[BB];
-         if (void 0 === GB) return;
-         if ("function" === typeof GB) return void GB.call(this, OB);
-         const YB = GB.length,
-           DB = this.snapshots[this.depth] ??= [];
-         for (let QB = 0; QB < YB; QB++) DB[QB] = GB[QB];
-         this.depth++;
- ... (47 more removed lines; see GitHub link above)
+       const {
+         file: iW
+       } = KO(WW), OW = new Set, mW = WW => {
+         TW().isCallExpression(WW) && TW().isIdentifier(WW.expression) && OW.add(WW.expression.text), TW().forEachChild(WW, mW)
+       };
+       return mW(iW), OW
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2619-L2649` → after: `L2030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2030) · [Before (L2619-L2649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2619-L2649)

```diff
-       return BB(new cO([0, 0, 0], [1, 1, 1]), 1, 1, 0, 1, null, !1)
-     }
- 
-     function aO() {
-       this.hz = .1, this.fluidDrag = .4, this.az = 2, this.gravity = [0, -10, 0], this.minBounceImpulse = .5
-     }
-     class eO {
-       constructor(BB, OB, GB) {
-         BB = Object.assign(new aO, BB), this.gravity = BB.gravity, this.hz = BB.hz, this.az = BB.az, this.fluidDrag = BB.fluidDrag, this.minBounceImpulse = BB.minBounceImpulse, this.bodies = [], this._tickNext = 0, this._tickEnd = 0, this.gz = BB.gz, this.aT = BB.aT, this.rollbac … [truncated]
-           return new wO(BB, OB, GB, YB, DB, QB, oB)
-         })), this.testSolid = OB, this.testFluid = GB
-       }
-       Xz(BB, OB, GB, YB, DB, QB) {
-         BB = BB || new cO([0, 0, 0], [1, 1, 1]), "undefined" == typeof OB && (OB = 1), "undefined" == typeof GB && (GB = 1), "undefined" == typeof YB && (YB = 0), "undefined" == typeof DB && (DB = 1);
-         var oB = this.lC(BB, OB, GB, YB, DB, QB);
-         return this.bodies.push(oB), oB
- ... (15 more removed lines; see GitHub link above)
+       return !KO(WW).hasErrors
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2657-L2679` → after: `L2033-L2034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2033-L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2033-L2034) · [Before (L2657-L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2657-L2679)

```diff
-     function sO(BB, OB, GB, YB, DB, QB) {
-       let oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "it runs in JS";
-       if (GB instanceof HO) throw GB;
-       OB.wasmFailures++;
-       const jB = ! function(BB) {
-         return BB instanceof Error && Object.getPrototypeOf(BB) === Error.prototype
-       }(GB);
-       let yB = GB instanceof Error ? GB.message : String(GB);
-       if (QB.fatal) {
-         if (GB instanceof WebAssembly.RuntimeError && /unreachable/i.test(GB.message) && null === BB.getLastBloxdWasmPanic()) {
-           const OB = BB.takeBloxdWasmRefusedAllocation();
-           OB > 0 && (yB = `alloc_failed ${OB} bytes; ${yB}`)
-         }
-         BB.markBloxdWasmFailed(GB);
-         const {
-           prefix: OB,
- ... (7 more removed lines; see GitHub link above)
+     function aO(WW, iW) {
+       return TW().isCallExpression(WW) && TW().isPropertyAccessExpression(WW.expression) && "api" === WW.expression.expression.getText(iW)
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2682` → after: `L2037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2037) · [Before (L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2682)

```diff
-     function xO(BB, OB, GB, YB) {
+     function rO(WW, iW) {
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2684-L2690` → after: `L2039-L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2039-L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2039-L2044) · [Before (L2684-L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2684-L2690)

```diff
-       let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bO;
-       const oB = performance.now(),
-         jB = QB.get(BB);
-       if (void 0 !== jB && oB - jB < 6e4) return;
-       QB.set(BB, oB);
-       const yB = OB();
-       YB && console.error(yB), null === (DB = GB.jP) || void 0 === DB || DB.call(GB, yB)
+       const mW = WW.getPropertiesOfType(WW.getNonNullableType(iW)),
+         EW = null !== (OW = mW.find((WW => "color" === WW.name))) && void 0 !== OW ? OW : mW[0];
+       if (!EW) return;
+       const NW = WW.typeToString(WW.getNonNullableType(WW.getTypeOfSymbol(EW))),
+         PW = "color" === EW.name ? '"red"' : NW.includes("number") ? "1" : "boolean" === NW ? "true" : '"..."';
+       return `{ ${EW.name}: ${PW} }`
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2694` → after: `L2048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2048) · [Before (L2694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2694)

```diff
-       return "failed" !== BB.getBloxdWasmStatus()
+       return WW.isUnion() ? WW.types.every((WW => 0 !== (WW.flags & TW().TypeFlags.Object))) : 0 !== (WW.flags & TW().TypeFlags.Object)
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2698-L2723` → after: `L2052-L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2052-L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2052-L2074) · [Before (L2698-L2723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2698-L2723)

```diff
-       if (tO(BB)) try {
-         OB.free()
-       } catch {} else OB.__destroy_into_raw()
-     }
-     var OG = 10,
-       GG = 14,
-       YG = 15,
-       DG = 12,
-       QG = 15,
-       oG = 18,
-       jG = 128,
-       yG = 256,
-       JG = 1024,
-       MG = 2048,
-       PG = 256;
- 
- ... (10 more removed lines; see GitHub link above)
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const mW = WW.getNonNullableType(iW);
+       if (mW.isUnion()) {
+         const iW = [...new Set(mW.types.map((iW => FO(WW, iW, OW))))];
+         return iW.length > 7 ? `${iW.slice(0,7).join(" or ")} or ...` : iW.join(" or ")
+       }
+       if (mW.isStringLiteral()) return `"${mW.value}"`;
+       if (mW.isNumberLiteral()) return `${mW.value}`;
+       if (mW.flags & TW().TypeFlags.StringLike) return "text";
+       if (mW.flags & TW().TypeFlags.NumberLike) return "a number";
+       if (mW.flags & TW().TypeFlags.BooleanLike) return "true or false";
+       if (WW.isTupleType(mW)) {
+         return `[${WW.getTypeArguments(mW).map((iW=>FO(WW,iW,OW+1))).join(", ")}]`
+       }
+       if (WW.isArrayType(mW)) {
+         if (OW > 1) return "a list";
+ ... (7 more added lines; see GitHub link above)
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2726-L2727` → after: `L2077-L2089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2077-L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2077-L2089) · [Before (L2726-L2727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2726-L2727)

```diff
-     function qG() {
-       return !1
+     function QO(WW, iW, OW) {
+       const mW = (iW, OW) => WW.isTypeAssignableTo(iW, OW) || QO(WW, iW, OW),
+         EW = iW => WW.getTypeArguments(iW)[0];
+       if ("string | number" === WW.typeToString(iW)) return !0;
+       if (iW.isUnion() && !(iW.flags & TW().TypeFlags.Boolean)) return iW.types.every((WW => mW(WW, OW)));
+       const NW = WW.getNonNullableType(OW);
+       return (NW.isUnion() ? NW.types : [NW]).some((OW => WW.isTupleType(OW) ? WW.isArrayType(iW) && WW.getTypeArguments(OW).every((WW => mW(EW(iW), WW))) : WW.isArrayType(OW) ? WW.isArrayType(iW) && mW(EW(iW), EW(OW)) : OW.flags & (TW().TypeFlags.Object | TW().TypeFlags.Intersec … [truncated]
+         var EW;
+         if (WW.getTypeOfSymbol(iW).flags & TW().TypeFlags.Undefined) return !0;
+         const NW = OW.getProperty(iW.name),
+           PW = NW ? WW.getTypeOfSymbol(NW) : null === (EW = WW.getIndexInfoOfType(OW, TW().IndexKind.String)) || void 0 === EW ? void 0 : EW.type;
+         return void 0 !== PW && mW(WW.getTypeOfSymbol(iW), PW)
+       })) : OW.isNumberLiteral() && iW.flags === TW().TypeFlags.Number || OW.isStringLiteral() && iW.flags === TW().TypeFlags.String))
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2731-L2732` → after: `L2093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2093) · [Before (L2731-L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2731-L2732)

```diff
-       var GB = (GB, YB, DB) => null !== OB.hT && YB <= OB.hT || BB.testSolid(GB, YB, DB);
-       return GB.solidOwner = BB, GB
+       return TW().isTypeReferenceNode(WW) && TW().isIdentifier(WW.typeName) && iW.has(WW.typeName.text) || !!TW().forEachChild(WW, (WW => Wm(WW, iW) || void 0))
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2736-L2755` → after: `L2097-L2118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2097-L2118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2097-L2118) · [Before (L2736-L2755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2736-L2755)

```diff
-       var GB = OB.testSolid && OB.testSolid.solidOwner;
-       return (!OB.testSolid || void 0 !== GB && GB !== BB) && (OB.testSolid = ZG(BB, OB)), OB.testSolid
-     }
-     const RG = {
-         server: 0,
-         player: 1,
-         client: 2
-       },
-       WG = 32,
-       AG = 32768,
-       VG = [16, 21, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, OG, 13, GG, YG, 0, 3, 6, 9, DG, QG, oG, 1, 2, 4, 8, 16, 32, 64, jG, yG, 512, JG, MG, 8192, 0, 1, 2, PG],
-       SG = [0, 1, 2, 3, RG.server, RG.player, RG.client, 0, 1, 2, 3, 4, 6, 7, 10, 11, 12, 0, 1, 2, AG, 0, 1, 2, 3, 4, 0, 1, 6, 7, 8, 9, 10, 11, 12, 4, 5, 0, 1, 2, 3, 4, 5];
-     let nG = null;
- 
-     function UG(BB) {
-       if (null === nG) {
- ... (4 more removed lines; see GitHub link above)
+       const OW = new Set,
+         mW = EW => {
+           if (aO(EW, WW)) {
+             var NW, PW, LW;
+             const mW = iW.getResolvedSignature(EW),
+               cW = null !== (NW = null === mW || void 0 === mW ? void 0 : mW.getParameters()) && void 0 !== NW ? NW : [],
+               wW = new Set((null !== (PW = null === mW || void 0 === mW || null === (LW = mW.getDeclaration()) || void 0 === LW ? void 0 : LW.typeParameters) && void 0 !== PW ? PW : []).map((WW => WW.name.text)));
+             EW.arguments.forEach(((iW, mW) => {
+               var NW;
+               const PW = null === (NW = cW[mW]) || void 0 === NW ? void 0 : NW.valueDeclaration,
+                 LW = PW && TW().isParameter(PW) ? PW : void 0;
+               if (iW.kind === TW().SyntaxKind.NullKeyword && null !== LW && void 0 !== LW && LW.type && !Wm(LW.type, wW) && !/\b(?:null|any|unknown)\b/.test(LW.type.getText())) {
+                 const iW = !!LW.questionToken || !!LW.initializer || !!LW.dotDotDotToken,
+                   NW = mW === EW.arguments.length - 1,
+                   PW = iW ? NW ? "leave it out" : "give undefined instead" : "give it a value";
+                 OW.add(`${EW.expression.getText(WW)} can't take null as ${cW[mW].name} (value ${mW+1}): ${PW}, or it throws when that line runs.`)
+ ... (6 more added lines; see GitHub link above)
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2759-L2762` → after: `L2122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2122) · [Before (L2759-L2762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2759-L2762)

```diff
-       if (BB.length !== OB.length) return !1;
-       for (let GB = 0; GB < OB.length; GB++)
-         if (BB[GB] !== OB[GB]) return !1;
-       return !0
+       return !!WW && aO(WW, iW) && "createEnchantmentAttributesForItem" === WW.expression.name.text
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2766-L2772` → after: `L2126-L2131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2126-L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2126-L2131) · [Before (L2766-L2772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2766-L2772)

```diff
-       if (Number.isNaN(BB)) return "NaN";
-       if (!Number.isFinite(BB)) return BB > 0 ? "inf" : "-inf";
-       if (0 === BB) return Object.is(BB, -0) ? "-0.0" : "0.0";
-       const OB = Math.abs(BB);
-       if (OB >= 1e16 || OB < 1e-4) return BB.toExponential().replace("e+", "e");
-       const GB = String(BB);
-       return GB.includes(".") ? GB : GB + ".0"
+       let iW = WW;
+       for (; TW().isParenthesizedExpression(iW.parent) || TW().isArrayLiteralExpression(iW.parent) || TW().isSpreadElement(iW.parent) || TW().isSpreadAssignment(iW.parent) || TW().isShorthandPropertyAssignment(iW.parent) || TW().isPropertyAssignment(iW.parent) && iW.parent.initia … [truncated]
+       const {
+         parent: OW
+       } = iW;
+       return TW().isBinaryExpression(OW) && OW.left === iW && OW.operatorToken.kind >= TW().SyntaxKind.FirstAssignment && OW.operatorToken.kind <= TW().SyntaxKind.LastAssignment || (TW().isForOfStatement(OW) || TW().isForInStatement(OW)) && OW.initializer === iW || (TW().isPrefix … [truncated]
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2775-L2778` → after: `L2134-L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2134-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2134-L2142) · [Before (L2775-L2778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2775-L2778)

```diff
-     function dG(BB) {
-       const OB = ["dir", "base", "max", "left"][BB[0]],
-         GB = [BB[2], BB[3], BB[4]].map(kG).join(", ");
-       return "voxel sweep rejected a move it would never finish: " + OB + "[" + BB[1] + "] of [" + GB + "]"
+     function Em(WW, iW, OW, mW) {
+       var EW, NW;
+       if (!iW || "ItemAttributes" !== (null === (EW = mW.getNonNullableType(iW).aliasSymbol) || void 0 === EW ? void 0 : EW.name)) return !1;
+       if (Om(WW, OW)) return !0;
+       const PW = TW().isIdentifier(WW) ? mW.getSymbolAtLocation(WW) : void 0,
+         LW = 1 === (null === PW || void 0 === PW || null === (NW = PW.declarations) || void 0 === NW ? void 0 : NW.length) ? PW.declarations[0] : void 0;
+       if (!LW || !TW().isVariableDeclaration(LW) || !Om(LW.initializer, OW)) return !1;
+       const cW = WW => TW().isIdentifier(WW) && mm(WW) && mW.getSymbolAtLocation(WW) === PW || !0 === TW().forEachChild(WW, cW);
+       return 0 !== (LW.parent.flags & TW().NodeFlags.Const) || !cW(OW)
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2782` → after: `L2146-L2158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2146-L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2146-L2158) · [Before (L2782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2782)

```diff
-       return BB ? OB : 0
+       const OW = new Set,
+         mW = EW => {
+           if (aO(EW, WW)) {
+             var NW, PW;
+             const mW = null !== (NW = null === (PW = iW.getResolvedSignature(EW)) || void 0 === PW ? void 0 : PW.getParameters()) && void 0 !== NW ? NW : [];
+             EW.arguments.forEach(((NW, PW) => {
+               const LW = mW[PW];
+               LW && Em(NW, iW.getTypeOfSymbol(LW), WW, iW) && OW.add(`${EW.expression.getText(WW)} can't take api.createEnchantmentAttributesForItem(...) as ${LW.name} (value ${PW+1}): put it in { customAttributes: ... }, or it throws when that line runs.`)
+             }))
+           }
+           TW().forEachChild(EW, mW)
+         };
+       return mW(WW), [...OW]
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2786-L2817` → after: `L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2162) · [Before (L2786-L2817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2786-L2817)

```diff
-       const OB = KG(BB.wT, 1) | KG(BB.XT, 2) | KG(BB.preventFallOffEdge, 4) | KG(BB.alwaysApplyHorizFriction, 8) | KG(BB.slideOnCollision, 16) | KG(BB.rolledBackLastTick, 32) | KG(BB.depenetrate, 64) | KG(BB.inFluid, jG) | KG(BB.Fz, yG) | KG(BB.Lz, 512) | KG(BB.wakeInFluid, MG),
-         GB = BB.hT;
-       return null === GB ? OB : "number" === typeof GB ? OB | JG : null
-     }
- 
-     function mG(BB, OB, GB, YB, DB) {
-       const QB = lG(GB),
-         oB = pG(GB),
-         jB = BB[QB + GG];
-       YB.ratioInFluid = BB[QB + 8], YB._sleepFrameCount = BB[QB + 9];
-       const yB = YB.resting;
-       yB[0] = BB[QB + OG], yB[1] = BB[QB + OG + 1], yB[2] = BB[QB + OG + 2], IG(YB, "inFluid", jB & jG), IG(YB, "rolledBackLastTick", 32 & jB);
-       const JB = YB.Rz;
-       if (JB) {
-         const {
-           base: BB,
- ... (16 more removed lines; see GitHub link above)
+       return KO(WW).file
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2821-L2823` → after: `L2166-L2169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2166-L2169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2166-L2169) · [Before (L2821-L2823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2821-L2823)

```diff
-       var OB;
-       const GB = iG(BB);
-       return 65536 * (null !== (OB = BB.pC) && void 0 !== OB ? OB : 0) + GB
+       return {
+         from: WW.getFullStart(),
+         to: WW.getEnd()
+       }
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2827-L2840` → after: `L2173-L2213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2173-L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2173-L2213) · [Before (L2827-L2840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2827-L2840)

```diff
-       return Math.max(BB.kl.length, BB.Ul.length)
-     }
- 
-     function LG(BB, OB) {
-       const GB = new Uint8Array(BB + 1),
-         YB = new Uint32Array(BB + 2),
-         DB = [];
-       for (let QB = 0; QB <= BB; QB++) {
-         const BB = OB(QB);
-         if (GB[QB] = gG(BB), Array.isArray(BB)) {
-           if (BB.length % 6 !== 0) return null;
-           for (const OB of BB) {
-             if ("number" !== typeof OB) return null;
-             DB.push(OB)
+       if (!/\buse_?prefab\s*\(/i.test(WW)) return {
+         code: WW,
+         calls: []
+       };
+       const iW = Pm(WW),
+         OW = function(WW) {
+           const iW = new Map;
+           for (const OW of WW.statements)
+             if (TW().isVariableStatement(OW))
+               for (const WW of OW.declarationList.declarations)
+                 if (TW().isIdentifier(WW.name) && "CONFIG" === WW.name.text && WW.initializer && TW().isObjectLiteralExpression(WW.initializer))
+                   for (const OW of WW.initializer.properties) TW().isPropertyAssignment(OW) && (TW().isIdentifier(OW.name) || TW().isStringLiteral(OW.name)) && iW.set(OW.name.text, OW.initializer.getText());
+           return iW
+         }(iW),
+         mW = [],
+         EW = [],
+ ... (25 more added lines; see GitHub link above)
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2843` → after: `L2216-L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2216-L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2216-L2219) · [Before (L2843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2843)

```diff
-         YB[QB + 1] = DB.length
+         EW.push({
+           ...Lm(LW),
+           text: ""
+         })
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2846-L2848` → after: `L2222-L2223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2222-L2223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2222-L2223) · [Before (L2846-L2848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2846-L2848)

```diff
-         kinds: GB,
-         shapeOffsets: YB,
-         shapes: Float64Array.from(DB)
+         code: eO(WW, EW),
+         calls: mW
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2853-L2875` → after: `L2228-L2242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2228-L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2228-L2242) · [Before (L2853-L2875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2853-L2875)

```diff
-       return Array.isArray(BB) ? 2 : BB ? 1 : 0
-     }
-     class rG {
-       constructor(BB) {
-         this.mirror = BB, this.supplied = new Set, this.absentMisses = !1
-       }
-       ZP() {
-         this.supplied.size > 0 && this.supplied.clear(), this.absentMisses = this.mirror.picksSupplyAbsent
-       }
-       supply(BB) {
-         BB.missRounds++, this.absentMisses && this.alreadySupplied() && (this.absentMisses = !1), this.mirror.supplyMisses(this.absentMisses ? "generate" : "load")
-       }
-       alreadySupplied() {
-         const BB = this.mirror.mP,
-           OB = BB.Pl(),
-           GB = this.mirror.wasm.wasmView(Int32Array, BB.zl(), 3 * OB);
- ... (7 more removed lines; see GitHub link above)
+       if (!/=\s*(?:on[A-Z]\w*|tick|playerCommand)\b/.test(WW)) return WW;
+       const iW = Pm(WW),
+         OW = new Set(iW.statements.flatMap((WW => TW().isFunctionDeclaration(WW) && WW.name ? [WW.name.text] : []))),
+         mW = [];
+       for (const EW of iW.statements)
+         if (TW().isExpressionStatement(EW) && TW().isBinaryExpression(EW.expression) && EW.expression.operatorToken.kind === TW().SyntaxKind.EqualsToken && TW().isIdentifier(EW.expression.left) && OW.add(EW.expression.left.text), TW().isVariableStatement(EW))
+           for (const WW of EW.declarationList.declarations) {
+             const iW = WW.initializer;
+             iW && TW().isIdentifier(iW) && kO(iW.text) && !OW.has(iW.text) && mW.push({
+               from: iW.getStart(),
+               to: iW.getEnd(),
+               text: "function () {}"
+             }), iW && TW().isIdentifier(WW.name) && OW.add(WW.name.text)
+           }
+       return eO(WW, mW)
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2878-L2930` → after: `L2245-L2248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2245-L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2245-L2248) · [Before (L2878-L2930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2878-L2930)

```diff
-     function XG(BB, OB, GB) {
-       if (!OB.ZC) throw new Error(`wasm physics: a pick ${GB}, and picks here run only in wasm`);
-       return BB.jsPicks++, OB.ZC()
-     }
-     const wG = null;
-     class EG {
-       constructor(BB) {
-         this.mirror = BB, this.tables = new Map, this.pickIoView = null, this.rounds = void 0, this.rounds = new rG(BB)
-       }
-       pl(BB, OB) {
-         if (!this.mirror.usable()) return XG(BB, OB, "found wasm unusable");
-         let GB;
-         try {
-           GB = this.wasmPick(OB, BB)
-         } catch (YB) {
-           if (YB instanceof CO) throw YB.error;
- ... (37 more removed lines; see GitHub link above)
+     function tm(WW, iW) {
+       if (!WW.includes("api.setBlockRect(")) return WW;
+       const OW = Pm(WW);
+       if (OW.statements.some((WW => {
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2932-L2941` → after: `L2250-L2261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R2250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L2250-L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L2250-L2261) · [Before (L2932-L2941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2932-L2941)

```diff
-           return BB ? BB(GB) && (null === (YB = OB.WC(GB)) || void 0 === YB || YB) : OB.nl(GB)
-         }));
-         return DB ? (YB ??= {
-           index: this.tables.size,
-           registryKey: GB
-         }, this.mirror.mP.Sl(YB.index, DB.kinds, DB.shapeOffsets, DB.shapes, this.mirror.unloadedId), YB.registryKey = GB, this.tables.set(BB, YB), YB.index) : -1
-       }
-       pickIo() {
-         return this.pickIoView ??= new this.mirror.wasm.WasmBufferView(Float64Array, this.mirror.mP.ql(), 12), this.pickIoView.view()
-       }
+           return TW().isFunctionDeclaration(WW) && "fillBox" === (null === (iW = WW.name) || void 0 === iW ? void 0 : iW.text) && 3 !== WW.parameters.length
+         }))) return WW;
+       const mW = [],
+         EW = WW => {
+           var NW;
+           TW().isFunctionDeclaration(WW) && "fillBox" === (null === (NW = WW.name) || void 0 === NW ? void 0 : NW.text) || (aO(WW, OW) && "setBlockRect" === WW.expression.name.text && 3 === WW.arguments.length && !iW.includes(WW.getText()) && mW.push({
+             from: WW.expression.getStart(),
+             to: WW.expression.getEnd(),
+             text: "fillBox"
+           }), TW().forEachChild(WW, EW))
+         };
+       return EW(OW), eO(WW, mW)
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2945-L2991` → after: `L5095-L5101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5095-L5101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5095-L5101) · [Before (L2945-L2991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2945-L2991)

```diff
-       return Number.isInteger(BB) && Math.abs(BB) <= 1073741823
-     }
-     class hG {
-       constructor() {
-         this.engine = null, this.offsets = new Float64Array(6), this.source = null, this.desyncVersion = -1, this.types = [], this.walkRects = [], this.cantRects = [], this.nonEmpty = !1, this.valid = !0, this.packedDesyncs = new WeakMap
-       }
-       setOffsets(BB, OB, GB) {
-         if (!cG(OB[0]) || !cG(OB[1]) || !cG(OB[2])) return !1;
-         this.adopt(BB);
-         const YB = this.offsets;
-         return YB[0] === OB[0] && YB[1] === OB[1] && YB[2] === OB[2] && Object.is(YB[3], GB[0]) && Object.is(YB[4], GB[1]) && Object.is(YB[5], GB[2]) || (YB[0] = OB[0], YB[1] = OB[1], YB[2] = OB[2], YB[3] = GB[0], YB[4] = GB[1], YB[5] = GB[2], BB.Wz(YB[0], YB[1], YB[2], YB[3], YB … [truncated]
-       }
-       uploadOverrides(BB, OB) {
-         var GB, YB, DB, QB;
-         this.adopt(BB);
-         const oB = null !== (GB = null === (YB = OB.getDesyncedBlockCount) || void 0 === YB ? void 0 : YB.call(OB)) && void 0 !== GB ? GB : 0,
- ... (31 more removed lines; see GitHub link above)
+       const {
+         file: iW,
+         hasErrors: OW
+       } = KO(`(${WW})`), mW = iW.statements[0];
+       if (OW || 1 !== iW.statements.length || !mW || !TW().isExpressionStatement(mW)) return null;
+       const EW = mW.expression;
+       return TW().isParenthesizedExpression(EW) ? EW.expression : EW
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L2995-L3002` → after: `L5104-L5105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5104-L5105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5104-L5105) · [Before (L2995-L3002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L2995-L3002)

```diff
-     function eG(BB, OB) {
-       if (6 * BB.length !== OB.length) return !1;
-       for (let GB = 0; GB < BB.length; GB++) {
-         const YB = BB[GB];
-         for (let BB = 0; BB < 6; BB++)
-           if (!Object.is(YB[BB], OB[6 * GB + BB])) return !1
-       }
-       return !0
+     function Am(WW) {
+       return !!(TW().isNumericLiteral(WW) || TW().isStringLiteral(WW) || TW().isNoSubstitutionTemplateLiteral(WW)) || (WW.kind === TW().SyntaxKind.TrueKeyword || WW.kind === TW().SyntaxKind.FalseKeyword || WW.kind === TW().SyntaxKind.NullKeyword || (!TW().isPrefixUnaryExpression( … [truncated]
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3005-L3008` → after: `L5108-L5109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5108-L5109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5108-L5109) · [Before (L3005-L3008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3005-L3008)

```diff
-     function TG(BB, OB) {
-       OB.length = 0;
-       for (const GB of BB)
-         for (let BB = 0; BB < 6; BB++) OB.push(GB[BB])
+     function bm(WW) {
+       return TW().isNumericLiteral(WW) || TW().isPrefixUnaryExpression(WW) && TW().isNumericLiteral(WW.operand)
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3012` → after: `L5113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5113) · [Before (L3012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3012)

```diff
-       return BB === (0 | BB)
+       return TW().isStringLiteral(WW) || TW().isNoSubstitutionTemplateLiteral(WW) ? WW.text : null
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3014-L3025` → after: `L5115-L5133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5115-L5133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5115-L5133) · [Before (L3014-L3025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3014-L3025)

```diff
-     class CG {
-       constructor(BB, OB, GB, YB, DB) {
-         var QB;
-         this.wasm = BB, this.JP = OB, this.options = GB, this.label = YB, this.handling = DB, this.mP = void 0, this.epochStartMs = performance.now(), this.epoch = -1, this.registryState = -1, this.unsupported = !1, this.broken = !1, this.Vp = !1, this.picks = new EG(this), this. … [truncated]
-       }
-       static acquire(BB, OB, GB, YB, DB, QB) {
-         if (!UG(GB)) return null;
-         let oB;
-         try {
-           oB = BB()
-         } catch (jB) {
-           return sO(GB, YB, jB, `${DB} mirror`, "creating it", QB), null
+     const Um = /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g;
+ 
+     function km(WW) {
+       const iW = WW.trim();
+       if ("" === iW) return [];
+       if (iW.startsWith("{")) try {
+         const WW = JSON.parse(iW);
+         if (WW && "object" === typeof WW && !Array.isArray(WW)) return Object.entries(WW).map((WW => {
+           let [iW, OW] = WW;
+           return [iW, JSON.stringify(OW)]
+         }))
+       } catch {}
+       const OW = function(WW) {
+         const iW = lm(WW);
+         if (!iW || !TW().isObjectLiteralExpression(iW)) return null;
+         const OW = [];
+ ... (3 more added lines; see GitHub link above)
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3061-L3068` → after: `L5136-L5151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5136-L5151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5136-L5151) · [Before (L3061-L3068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3061-L3068)

```diff
-       }
-       forgetUnreadable() {
-         if (0 === this.unreadable.size) return;
-         const BB = [...this.unreadable.keys()];
-         this.unreadable.clear();
-         for (const OB of BB) {
-           const [BB, GB, YB] = OB.split(",").map(Number);
-           this.forgetChunk(BB, GB, YB)
+       }(iW.startsWith("{") ? iW : `{${iW}}`);
+       if (OW) return OW;
+       const mW = [];
+       let EW = null,
+         NW = 0;
+       const PW = iW.startsWith("{") ? iW.replace(/^\{/, "").replace(/\}\s*$/, "") : iW;
+       for (const ZW of PW.split("\n")) {
+         var LW, cW, wW, tW;
+         const WW = /\/\//.exec(ZW.replace(Um, (WW => " ".repeat(WW.length)))),
+           iW = (WW ? ZW.slice(0, WW.index) : ZW).trim();
+         if ("" === iW) continue;
+         if (EW && NW > 0) EW[1] += `\n${iW}`;
+         else {
+           const WW = /^["']?([A-Za-z_$][\w$]*)["']?\s*[:=]\s*(.*)$/.exec(iW.replace(/^[-*\u2022]\s*/, ""));
+           if (!WW) continue;
+           EW = [WW[1], WW[2]], mW.push(EW)
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3071-L3100` → after: `L5156-L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5156-L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5156-L5228) · [Before (L3071-L3100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3071-L3100)

```diff
-       pl(BB, OB) {
-         return this.picks.pl(BB, OB)
-       }
-       failed(BB, OB, GB) {
-         this.broken = !0, sO(this.wasm, GB, BB, `${this.label} picks`, OB, this.handling)
-       }
-       qm(BB, OB, GB, YB) {
-         this.usable() && this.mP.Wl(BB, OB, GB, YB)
-       }
-       forgetChunk(BB, OB, GB) {
-         this.usable() && this.mP.Ql(BB, OB, GB)
-       }
-       forgetAll() {
-         this.usable() && this.mP.Dl()
-       }
-       fillChunk(BB, OB, GB, YB) {
- ... (14 more removed lines; see GitHub link above)
+       return mW.map((WW => {
+         let [iW, OW] = WW;
+         return [iW, OW.trim().replace(/[,;]\s*$/, "")]
+       }))
+     }
+ 
+     function sm(WW, iW, OW) {
+       const mW = "string" === WW.kind || "block" === WW.kind || "item" === WW.kind || "mob" === WW.kind;
+       let EW = lm(iW),
+         NW = iW;
+       var PW;
+       if (EW && Am(EW) || !mW || (PW = iW, NW = JSON.stringify(PW.replace(/^["'`]|["'`]$/g, "")), EW = lm(NW)), !EW || !Am(EW)) return {
+         problem: `${WW.key} must be a plain value like ${WW.value}, not ${iW}`
+       };
+       if ("number" === WW.kind && !bm(EW)) return {
+         problem: `${WW.key} must be a number, like ${WW.value}`
+ ... (57 more added lines; see GitHub link above)
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3104-L3107` → after: `L5231-L5234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5231-L5234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5231-L5234) · [Before (L3104-L3107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3104-L3107)

```diff
-           resident: this.mP.Rl(),
-           known: this.mP.yl(),
-           slots: BB,
-           bytes: BB * AG * 2
+           value: cW,
+           ...wW.length > 0 ? {
+             fixed: wW.join(", ")
+           } : {}
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3109-L3125` → after: `L5236-L5250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5236-L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5236-L5250) · [Before (L3109-L3125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3109-L3125)

```diff
-       }
-       epochNow() {
-         return Math.floor((performance.now() - this.epochStartMs) / 1e3)
-       }
-       syncRegistry() {
-         const BB = this.JP,
-           OB = FG(BB);
-         if (OB === this.registryState) return !this.unsupported;
-         this.registryState = OB;
-         const GB = LG(iG(BB), (OB => BB.nl(OB)));
-         if (this.unsupported = null === GB, GB) {
-           const OB = new Uint8Array(GB.kinds.length);
-           for (let GB = 0; GB < OB.length; GB++) OB[GB] = BB.Ul[GB] ? 1 : 0;
-           this.mP.Vl(GB.kinds, GB.shapeOffsets, GB.shapes, OB);
-           const YB = new Uint8Array(GB.kinds.length);
-           for (let GB = 0; GB < YB.length; GB++) YB[GB] = BB.kl[GB] ? 1 : 0;
- ... (1 more removed lines; see GitHub link above)
+       }(WW, EW, WW.names, OW);
+       if (mW) {
+         const iW = jm(EW);
+         if (null === iW) return {
+           problem: `${WW.key} must be text in quotes, like ${WW.value}`
+         };
+         if (("block" === WW.kind || "item" === WW.kind || "mob" === WW.kind) && OW) {
+           const mW = OW(WW.kind, iW);
+           if (null === mW) return {
+             problem: `"${iW}" isn't ${"item"===WW.kind?"an":"a"} ${WW.kind} name, so ${WW.key} kept ${WW.value}`
+           };
+           if (mW !== iW) return {
+             value: JSON.stringify(mW),
+             fixed: `"${iW}" is "${mW}"`
+           }
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3134-L3135` → after: `L5253-L5254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5253-L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5253-L5254) · [Before (L3134-L3135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3134-L3135)

```diff
-       dispose() {
-         this.Vp || (this.Vp = !0, this.options.mP || BG(this.wasm, this.mP))
+       return {
+         value: EW.getText()
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3138-L3150` → after: `L5257-L5273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5257-L5273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5257-L5273) · [Before (L3138-L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3138-L3150)

```diff
-     class HG extends CG {
-       constructor(BB, OB, GB, YB) {
-         super(BB, GB, {
-           unloadedId: 0,
-           picksSupplyAbsent: !1,
-           maxResident: 0,
-           idleSeconds: 0,
-           mP: OB
-         }, "client", YB)
-       }
-       supplyChunk() {
-         throw new Error("The client's chunk store missed a lookup, which it never should")
-       }
+     const Mm = Zm,
+       Km = new Map([
+         ["parkour", "parkour, obbies and races to a finish"],
+         ["pvp", "fighting other players: arenas, kills, last one standing"],
+         ["teams", "teams against each other"],
+         ["survival", "surviving mobs, zombies and waves"],
+         ["tag", "tag, infection, hide and seek: one side chases the other"],
+         ["economy", "coins, shops, upgrades and saved progress"],
+         ["rounds", "lobbies, countdowns and rounds that start and end"],
+         ["building", "building and changing blocks"],
+         ["world", "places, areas and random picks in the world"],
+         ["players", "players' items, health, scores and teleports"],
+         ["screen", "text on players' screens and announcements"]
+       ]);
+ 
+     function Sm(WW) {
+ ... (1 more added lines; see GitHub link above)
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L3152-L3334` → after: `L5275-L5279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R5275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L5275-L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/107.js#L5275-L5279) · [Before (L3152-L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/107.js#L3152-L3334)

```diff
-     var vG = new Float64Array(0),
-       sG = new Float32Array(0);
-     class xG {
-       constructor(BB, OB) {
-         this._rows = BB, this._slot = OB, this._d = vG, this._f = sG, this._o64 = 0, this._o32 = 0, this._restingView = vG, this._velocityView = sG, this._forcesView = sG, this._impulsesView = sG, this._surfaceVelocityView = sG, this._box = null
-       }
-       _view() {
-         var BB = this._rows,
-           OB = this._slot,
-           GB = BB.f64Rows(OB),
-           YB = BB.f32Rows(OB),
-           DB = lG(OB),
-           QB = pG(OB);
-         this._d = GB, this._f = YB, this._o64 = DB, this._o32 = QB, this._restingView = GB.subarray(DB + OG, DB + OG + 3), this._velocityView = YB.subarray(QB + 9, QB + 9 + 3), this._forcesView = YB.subarray(QB + DG, QB + DG + 3), this._impulsesView = YB.subarray(QB + QG, QB + QG … [truncated]
-         var oB = this._box;
-         null !== oB && (oB.base = YB.subarray(QB + 0, QB + 0 + 3), oB.max = YB.subarray(QB + 3, QB + 3 + 3), oB.vec = YB.subarray(QB + 6, QB + 6 + 3))
- ... (167 more removed lines; see GitHub link above)
+ 
+     function Ym(WW) {
+       var iW;
+       const OW = Sm(WW);
+       return null !== (iW = Mm.find((WW => Sm(WW.name) === OW || Sm(WW.title) === OW))) && void 0 !== iW ? iW : null
```
