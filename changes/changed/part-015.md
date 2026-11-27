# Changed — Bundle Modifications Report (Part 015 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `15 / 86` (**279** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 014](part-014.md) · [Part 016 →](part-016.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/248.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/248.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016)

#### 19. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L506-L511` → after: `L723-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L723-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L723-L733) · [Before (L506-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L506-L511)

```diff
-     BB.exports = yB
-   },
-   37334: (BB, OB, GB) => {
-     const YB = GB(37340),
-       DB = {};
-     for (const oB of Object.keys(YB)) DB[YB[oB]] = oB;
+     const Li = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);
+ 
+     function ci(WW) {
+       return Li.has(WW)
+     }
+     const wi = new Set(ZW.mb);
+ 
+     function ti(WW) {
+       return wi.has(WW)
+     }
+     new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato  … [truncated]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L513-L551` → after: `L735-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L735-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L735-L745) · [Before (L513-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L513-L551)

```diff
-       rgb: {
-         channels: 3,
-         labels: "rgb"
-       },
-       hsl: {
-         channels: 3,
-         labels: "hsl"
-       },
-       hsv: {
-         channels: 3,
-         labels: "hsv"
-       },
-       hwb: {
-         channels: 3,
-         labels: "hwb"
-       },
- ... (23 more removed lines; see GitHub link above)
+         "Maple Log": 10,
+         "Pine Log": 10,
+         "Plum Log": 10,
+         "Cedar Log": 10,
+         "Aspen Log": 10,
+         "Jungle Log": 10,
+         "Palm Log": 10,
+         "Pear Log": 10,
+         "Cherry Log": 10,
+         "Spectral Log": 10,
+         "Mango Log": 10
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L553-L555` → after: `L747-L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L747-L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L747-L758) · [Before (L553-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L553-L555)

```diff
-       ansi16: {
-         channels: 1,
-         labels: ["ansi16"]
+       xi = {
+         Stone: 2,
+         Diorite: 18,
+         Granite: 18,
+         Andesite: 18,
+         "Coal Ore": 10,
+         "Iron Ore": 15,
+         "Gold Ore": 20,
+         "Diamond Ore": 30,
+         "Moonstone Ore": 40,
+         "Block of Coal": 15,
+         "Block of Gold": 30
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L557-L559` → after: `L760-L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L760-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L760-L765) · [Before (L557-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L557-L559)

```diff
-       ansi256: {
-         channels: 1,
-         labels: ["ansi256"]
+       li = {
+         ...xi,
+         ...Object.fromEntries(Object.entries(pW).map((WW => {
+           let [iW, OW] = WW;
+           return [iW, 9 * xi[OW]]
+         })))
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L561-L563` → after: `L767-L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L767-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L767-L786) · [Before (L561-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L561-L563)

```diff
-       hcg: {
-         channels: 3,
-         labels: ["h", "c", "g"]
+       Ai = {
+         Watermelon: 10,
+         Melon: 10,
+         "Wheat|FreshlyGrown": 10,
+         "Rice|FreshlyGrown": 10,
+         "Corn Plant|FreshlyGrown": 10,
+         "Chili Pepper Plant|FreshlyGrown": 10,
+         "Chili Pepper Plant|Lava|FreshlyGrown": 10,
+         "Tomato Plant|FreshlyGrown": 10,
+         "Tomato Plant|Top|FreshlyGrown": 10,
+         "Carrot Plant|FreshlyGrown": 10,
+         "Potato Plant|FreshlyGrown": 10,
+         "Sugar Cane Plant|FreshlyGrown": 10,
+         "Sugar Cane Plant|Top|FreshlyGrown": 10,
+         "Coffee Plant|FreshlyGrown": 10,
+         "Lettuce Plant|FreshlyGrown": 10,
+ ... (4 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L565-L567` → after: `L788-L858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L788-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L788-L858) · [Before (L565-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L565-L567)

```diff
-       apple: {
-         channels: 3,
-         labels: ["r16", "g16", "b16"]
+       bi = {
+         Wheatfish: 25,
+         Darter: 25,
+         "Sunset Minnow": 25,
+         "Root Flounder": 25,
+         "Greenfin Loach": 25,
+         "Red Strongfish": 30,
+         "Green Strongfish": 30,
+         "Boomerang Fish": 30,
+         Seahorse: 30,
+         "Spined Stickleback": 30,
+         "Moon Strongfish": 40,
+         "Boulder Bass": 40,
+         "Grass Snapper": 40,
+         "Crystalized Wheatfish": 55,
+         "Moonstone Pupfish": 55,
+ ... (55 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L569-L587` → after: `L860-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L860-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L860-L870) · [Before (L569-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L569-L587)

```diff
-       gray: {
-         channels: 1,
-         labels: ["gray"]
-       }
-     };
-     BB.exports = QB;
-     for (const oB of Object.keys(QB)) {
-       if (!("channels" in QB[oB])) throw new Error("missing channels property: " + oB);
-       if (!("labels" in QB[oB])) throw new Error("missing channel labels property: " + oB);
-       if (QB[oB].labels.length !== QB[oB].channels) throw new Error("channel and label counts mismatch: " + oB);
-       const {
-         channels: BB,
-         labels: OB
-       } = QB[oB];
-       delete QB[oB].channels, delete QB[oB].labels, Object.defineProperty(QB[oB], "channels", {
-         value: BB
- ... (3 more removed lines; see GitHub link above)
+       Ui = {
+         foraging: [80, 220, 100],
+         combat: [240, 70, 70],
+         mining: [60, 220, 240],
+         farming: [245, 220, 60],
+         fishing: [70, 120, 245],
+         exploration: [255, 180, 70]
+       };
+ 
+     function ki(WW) {
+       return `rgb(${Ui[WW].join(", ")})`
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L589-L608` → after: `L872-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L872-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L872-L992) · [Before (L589-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L589-L608)

```diff
-     QB.rgb.hsl = function(BB) {
-       const OB = BB[0] / 255,
-         GB = BB[1] / 255,
-         YB = BB[2] / 255,
-         DB = Math.min(OB, GB, YB),
-         QB = Math.max(OB, GB, YB),
-         oB = QB - DB;
-       let jB, yB;
-       QB === DB ? jB = 0 : OB === QB ? jB = (GB - YB) / oB : GB === QB ? jB = 2 + (YB - OB) / oB : YB === QB && (jB = 4 + (OB - GB) / oB), jB = Math.min(60 * jB, 360), jB < 0 && (jB += 360);
-       const JB = (DB + QB) / 2;
-       return yB = QB === DB ? 0 : JB <= .5 ? oB / (QB + DB) : oB / (2 - QB - DB), [jB, 100 * yB, 100 * JB]
-     }, QB.rgb.hsv = function(BB) {
-       let OB, GB, YB, DB, QB;
-       const oB = BB[0] / 255,
-         jB = BB[1] / 255,
-         yB = BB[2] / 255,
- ... (4 more removed lines; see GitHub link above)
+ 
+     function si(WW, iW, OW) {
+       if (!OW) return WW(iW);
+       const mW = {};
+       for (const [EW, NW] of Object.entries(OW)) mW[EW] = "string" === typeof NW ? NW : WW(NW.translationKey);
+       return WW(iW, mW)
+     }
+     class Mi {
+       constructor(WW, iW) {
+         this.now = WW, this.getJournal = iW, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.BL = !1, this.onShown = () => {}
+       }
+       enqueue(WW) {
+         const iW = Ki(WW);
+         if (iW) this.pending.push(WW);
+         else {
+           const iW = this.pending.findIndex(Ki);
+ ... (105 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L610-L631` → after: `L994-L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L994-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L994-L1007) · [Before (L610-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L610-L631)

```diff
-       return 0 === MB ? (DB = 0, QB = 0) : (QB = MB / JB, OB = PB(oB), GB = PB(jB), YB = PB(yB), oB === JB ? DB = YB - GB : jB === JB ? DB = 1 / 3 + OB - YB : yB === JB && (DB = 2 / 3 + GB - OB), DB < 0 ? DB += 1 : DB > 1 && (DB -= 1)), [360 * DB, 100 * QB, 100 * JB]
-     }, QB.rgb.hwb = function(BB) {
-       const OB = BB[0],
-         GB = BB[1];
-       let YB = BB[2];
-       const DB = QB.rgb.hsl(BB)[0],
-         oB = 1 / 255 * Math.min(OB, Math.min(GB, YB));
-       return YB = 1 - 1 / 255 * Math.max(OB, Math.max(GB, YB)), [DB, 100 * oB, 100 * YB]
-     }, QB.rgb.cmyk = function(BB) {
-       const OB = BB[0] / 255,
-         GB = BB[1] / 255,
-         YB = BB[2] / 255,
-         DB = Math.min(1 - OB, 1 - GB, 1 - YB);
-       return [100 * ((1 - OB - DB) / (1 - DB) || 0), 100 * ((1 - GB - DB) / (1 - DB) || 0), 100 * ((1 - YB - DB) / (1 - DB) || 0), 100 * DB]
-     }, QB.rgb.keyword = function(BB) {
-       const OB = DB[BB];
- ... (6 more removed lines; see GitHub link above)
+         for (const [wW, tW] of Object.entries(PW)) cW[wW] = iW(tW);
+         return {
+           token: this.token,
+           kind: "npcNote",
+           phase: "completion",
+           title: iW(mW),
+           name: OW(EW, cW),
+           description: null,
+           reward: null,
+           iconItem: LW,
+           accent: null,
+           durationMs: this.expiresAt - this.shownAt,
+           waypointNameKey: null
+         }
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L633-L795` → after: `L1009-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1009-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L1009-L1053) · [Before (L633-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L633-L795)

```diff
-       var oB, jB;
-       return GB
-     }, QB.keyword.rgb = function(BB) {
-       return YB[BB]
-     }, QB.rgb.xyz = function(BB) {
-       let OB = BB[0] / 255,
-         GB = BB[1] / 255,
-         YB = BB[2] / 255;
-       OB = OB > .04045 ? ((OB + .055) / 1.055) ** 2.4 : OB / 12.92, GB = GB > .04045 ? ((GB + .055) / 1.055) ** 2.4 : GB / 12.92, YB = YB > .04045 ? ((YB + .055) / 1.055) ** 2.4 : YB / 12.92;
-       return [100 * (.4124 * OB + .3576 * GB + .1805 * YB), 100 * (.2126 * OB + .7152 * GB + .0722 * YB), 100 * (.0193 * OB + .1192 * GB + .9505 * YB)]
-     }, QB.rgb.lab = function(BB) {
-       const OB = QB.rgb.xyz(BB);
-       let GB = OB[0],
-         YB = OB[1],
-         DB = OB[2];
-       GB /= 95.047, YB /= 100, DB /= 108.883, GB = GB > .008856 ? GB ** (1 / 3) : 7.787 * GB + 16 / 116, YB = YB > .008856 ? YB ** (1 / 3) : 7.787 * YB + 16 / 116, DB = DB > .008856 ? DB ** (1 / 3) : 7.787 * DB + 16 / 116;
- ... (147 more removed lines; see GitHub link above)
+       durationMs() {
+         var WW;
+         if (null !== this.followUp) return 5600;
+         switch (null === (WW = this.current) || void 0 === WW ? void 0 : WW.questCompletionKind) {
+           case "quest":
+             return 4800;
+           case "started":
+             return 4e3;
+           case "skillLevel":
+             return 3e3;
+           case "landmark":
+             return 3500;
+           case "npcNote":
+             return 8e3;
+           default:
+             return 2400
+ ... (29 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L943-L961` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L1058) · [Before (L943-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L943-L961)

```diff
-       const OB = function() {
-           const BB = {},
-             OB = Object.keys(YB);
-           for (let GB = OB.length, YB = 0; YB < GB; YB++) BB[OB[YB]] = {
-             distance: -1,
-             parent: null
-           };
-           return BB
-         }(),
-         GB = [BB];
-       for (OB[BB].distance = 0; GB.length;) {
-         const BB = GB.pop(),
-           DB = Object.keys(YB[BB]);
-         for (let YB = DB.length, QB = 0; QB < YB; QB++) {
-           const YB = DB[QB],
-             oB = OB[YB]; - 1 === oB.distance && (oB.distance = OB[BB].distance + 1, oB.parent = BB, GB.unshift(YB))
- ... (3 more removed lines; see GitHub link above)
+       return Si(WW.questCompletionKind)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L964-L967` → after: `L1061-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1061-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L1061-L1062) · [Before (L964-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L964-L967)

```diff
-     function QB(BB, OB) {
-       return function(GB) {
-         return OB(BB(GB))
-       }
+     function Si(WW) {
+       return "skillLevel" === WW || "landmark" === WW || "npcNote" === WW
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L970-L983` → after: `L1076-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1076-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L1076-L1092) · [Before (L970-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L970-L983)

```diff
-     function oB(BB, OB) {
-       const GB = [OB[BB].parent, BB];
-       let DB = YB[OB[BB].parent][BB],
-         oB = OB[BB].parent;
-       for (; OB[oB].parent;) GB.unshift(OB[oB].parent), DB = QB(YB[OB[oB].parent][oB], DB), oB = OB[oB].parent;
-       return DB.conversion = GB, DB
-     }
-     BB.exports = function(BB) {
-       const OB = DB(BB),
-         GB = {},
-         YB = Object.keys(OB);
-       for (let DB = YB.length, QB = 0; QB < DB; QB++) {
-         const BB = YB[QB];
-         null !== OB[BB].parent && (GB[BB] = oB(BB, OB))
+     function ni(WW) {
+       const iW = new Ji.g(WW);
+       return {
+         radius: 45,
+         squareness: 3,
+         wobbles: Hi.map((WW => {
+           let {
+             lobes: OW,
+             amount: mW
+           } = WW;
+           return {
+             lobes: OW[Math.floor(iW.next() * OW.length)],
+             amount: mW[0] + iW.next() * (mW[1] - mW[0]),
+             phase: 2 * iW.next() * Math.PI
+           }
+         })),
+ ... (1 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L987-L1137` → after: `L1095-L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1095-L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L1095-L1118) · [Before (L987-L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L987-L1137)

```diff
-   },
-   37340: BB => {
-     BB.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
-       brown: [165, 42, 42],
-       burlywood: [222, 184, 135],
- ... (135 more removed lines; see GitHub link above)
+ 
+     function ui(WW) {
+       let {
+         radius: iW,
+         squareness: OW,
+         wobbles: mW,
+         samples: EW
+       } = WW;
+       const NW = [];
+       for (let PW = 0; PW < EW; PW++) {
+         const WW = 2 * Math.PI * PW / EW,
+           LW = Math.cos(WW),
+           cW = Math.sin(WW),
+           wW = iW * (Math.abs(LW) ** OW + Math.abs(cW) ** OW) ** (-1 / OW) * mW.reduce(((iW, OW) => {
+             let {
+               lobes: mW,
+ ... (8 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1139-L1147` → after: `L1120-L1267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1120-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L1120-L1267) · [Before (L1139-L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L1139-L1147)

```diff
-   },
-   37318: (BB, OB, GB) => {
-     var YB = GB(37321),
-       DB = Array.prototype.concat,
-       QB = Array.prototype.slice,
-       oB = BB.exports = function(BB) {
-         for (var OB = [], GB = 0, oB = BB.length; GB < oB; GB++) {
-           var jB = BB[GB];
-           YB(jB) ? OB = DB.call(OB, QB.call(jB)) : OB.push(jB)
+     const oi = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
+     class di {
+       constructor() {
+         this.compassSpacing = 1, this.compassSize = {
+           trackHalfWidth: 0,
+           screenHalfWidth: 0
+         }, this.compass = null, this.terrain = null, this.searchAreaPath = {
+           seed: "",
+           d: ""
+         }, this.searchAreas = {
+           minimap: null,
+           map: null
+         }, this.player = null, this.waypoint = null, this.markerIcon = null, this.waypointMarkerSize = {
+           width: 0,
+           height: 0
+         }, this.waypointInset = {
+ ... (132 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1149-L1153` → after: `L1269-L9777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R1269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L1269-L9777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L1269-L9777) · [Before (L1149-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L1149-L1153)

```diff
-         return OB
-       };
-     oB.wrap = function(BB) {
-       return function() {
-         return BB(oB(arguments))
+       }
+       mountSearchArea(WW, iW) {
+         this.searchAreas[WW] = this.JA ? null : iW, this.render(this.frame)
+       }
+       render(WW) {
+         if (this.JA) return;
+         if (this.frame = WW, this.compass && (ei(this.compass.root, !WW), WW)) {
+           const iW = this.compassSize.trackHalfWidth / 50;
+           WW.compass.cardinals.forEach(((WW, OW) => {
+             const mW = this.cardinals[OW];
+             mW.textContent !== WW.name && (mW.textContent = WW.name), ei(mW, WW.hidden), mW.style.translate = WW.left * iW + "px"
+           }));
+           const OW = new Set;
+           WW.compass.markers.forEach(((mW, EW) => {
+             var NW;
+             OW.add(mW.id);
+ ... (8493 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1157-L1159` → after: `L10286-L10302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R10286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L10286-L10302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/248.js#L10286-L10302) · [Before (L1157-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/248.js#L1157-L1159)

```diff
-   37321: BB => {
-     BB.exports = function(BB) {
-       return !(!BB || "string" === typeof BB) && (BB instanceof Array || Array.isArray(BB) || BB.length >= 0 && (BB.splice instanceof Function || Object.getOwnPropertyDescriptor(BB, BB.length - 1) && "String" !== BB.constructor.name))
+   39722: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => EW,
+       f: () => NW
+     });
+     var mW = OW(39726);
+ 
+     function EW(WW, iW, OW) {
+       return [100 * (OW.mapMaxX - WW) / (OW.mapMaxX - OW.mapMinX), 100 * (iW - OW.mapMinZ) / (OW.mapMaxZ - OW.mapMinZ)]
+     }
+ 
+     function NW(WW, iW, OW, NW) {
+       const [PW, LW] = EW(WW, iW, NW), cW = mW.f - OW;
+       return {
+         rotation: cW,
+         transform: `rotate(${cW}rad) translate(-${PW}%, -${LW}%)`
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/249.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/249.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L4-L14` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/249.js#L4-L6) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/249.js#L4-L14)

```diff
-   37436: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => jO,
-       f: () => RO,
-       j: () => zO,
-       n: () => JO,
-       o: () => lO,
-       q: () => PO,
-       r: () => WO,
-       t: () => MO,
-       w: () => qO
+   37511: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       default: () => yW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L16-L149` → after: `L8-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/249.js#L8-L21) · [Before (L16-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/249.js#L16-L149)

```diff
-     const YB = JSON.parse('{"sounds":{"lavaFlow":{"src":["/sounds/generatedSounds/ambient/lavaFlow.ba535035cf.ogg","/sounds/generatedSounds/ambient/lavaFlow.40571c16d7.m4a"],"ms":34000}}}'),
-       DB = JSON.parse('{"sounds":{"carCrash":{"src":["/sounds/generatedSounds/cars/carCrash.e9cf35a412.ogg","/sounds/generatedSounds/cars/carCrash.378aeb32a4.m4a"],"ms":539.7732426303855},"carDoorClose":{"src":["/sounds/generatedSounds/cars/carDoorClose.792cfcf48d.ogg","/sounds/g … [truncated]
-       QB = JSON.parse('{"sounds":{"crowdAmbience":{"src":["/sounds/generatedSounds/crowd/crowdAmbience.c8437e74dd.ogg","/sounds/generatedSounds/crowd/crowdAmbience.ea6c2e684d.m4a"],"ms":54935.51020408163},"crowdCheer":{"src":["/sounds/generatedSounds/crowd/crowdCheer.d4ed8b2c1c.o … [truncated]
-       oB = JSON.parse('{"sounds":{"cryptWhoosh":{"src":["/sounds/generatedSounds/customGame_horror/cryptWhoosh.844ce087ed.ogg","/sounds/generatedSounds/customGame_horror/cryptWhoosh.c75574f860.m4a"],"ms":1700},"doorKnock":{"src":["/sounds/generatedSounds/customGame_horror/doorKno … [truncated]
-       jB = JSON.parse('{"sounds":{"cloth1":{"src":["/sounds/generatedSounds/dig/cloth1.05a08dc4fb.ogg","/sounds/generatedSounds/dig/cloth1.f8fe54888d.m4a"],"ms":1671.8367346938776},"cloth2":{"src":["/sounds/generatedSounds/dig/cloth2.7829e18f4b.ogg","/sounds/generatedSounds/dig/c … [truncated]
-       yB = JSON.parse('{"sounds":{"extinguisherSpray":{"src":["/sounds/generatedSounds/fire/extinguisherSpray.a0ff717082.ogg","/sounds/generatedSounds/fire/extinguisherSpray.0d3a5c7316.m4a"],"ms":2598.7301587301586},"fireAlarmBell":{"src":["/sounds/generatedSounds/fire/fireAlarmB … [truncated]
-       JB = JSON.parse('{"sounds":{"caughtFish":{"src":["/sounds/generatedSounds/fishing/caughtFish.6e9d3bcd83.ogg","/sounds/generatedSounds/fishing/caughtFish.720027e64c.m4a"],"ms":1976.7573696145125},"reel":{"src":["/sounds/generatedSounds/fishing/reel.0d8a9b6ef7.ogg","/sounds/g … [truncated]
-       MB = JSON.parse('{"sounds":{"game_start_countdown_01":{"src":["/sounds/generatedSounds/gameStart/game_start_countdown_01.cf3394eef0.ogg","/sounds/generatedSounds/gameStart/game_start_countdown_01.3008ea2146.m4a"],"ms":1000.7709750566893},"game_start_countdown_02":{"src":["/ … [truncated]
-       PB = JSON.parse('{"sounds":{"bullet_shell_bounce_general_07":{"src":["/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.1dee1c5e3e.ogg","/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.36191552b5.m4a"],"ms":823.0612244897959},"bullet_shell_bounce … [truncated]
-       zB = JSON.parse('{"sounds":{"pistol_cock_01":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_01.6bb1557b84.ogg","/sounds/generatedSounds/gunPistol/pistol_cock_01.213b7dc7b8.m4a"],"ms":510},"pistol_cock_02":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_02.61a … [truncated]
-       lB = JSON.parse('{"sounds":{"rifle_cock_01":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_01.7f2d42f56d.ogg","/sounds/generatedSounds/gunRifle/rifle_cock_01.7facd07e84.m4a"],"ms":705.3061224489796},"rifle_cock_02":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_ … [truncated]
-       pB = JSON.parse('{"sounds":{"semiAuto_cock_01":{"src":["/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.1bf3b423df.ogg","/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.c1262696d3.m4a"],"ms":500},"semiAuto_cock_02":{"src":["/sounds/generatedSounds/gunSem … [truncated]
-       qB = JSON.parse('{"sounds":{"shotgun_cock_01":{"src":["/sounds/generatedSounds/gunShotgun/shotgun_cock_01.c54ea385b9.ogg","/sounds/generatedSounds/gunShotgun/shotgun_cock_01.ee18a51143.m4a"],"ms":914.2857142857142},"shotgun_cock_02":{"src":["/sounds/generatedSounds/gunShotg … [truncated]
-       ZB = JSON.parse('{"sounds":{"submachine_cock_01":{"src":["/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.32e98c51f0.ogg","/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.afcbd0a497.m4a"],"ms":500},"submachine_cock_02":{"src":["/sounds/generatedSound … [truncated]
-       NB = JSON.parse('{"sounds":{"bearRoar1":{"src":["/sounds/generatedSounds/mobBear/bearRoar1.63c50e53db.ogg","/sounds/generatedSounds/mobBear/bearRoar1.035fff53ae.m4a"],"ms":1011.1791383219954},"bearRoar2":{"src":["/sounds/generatedSounds/mobBear/bearRoar2.78b4410ea2.ogg","/s … [truncated]
-       RB = JSON.parse('{"sounds":{"catHiss1":{"src":["/sounds/generatedSounds/mobCat/catHiss1.33269da18a.ogg","/sounds/generatedSounds/mobCat/catHiss1.930fa86a61.m4a"],"ms":1252.0861678004535},"catHiss2":{"src":["/sounds/generatedSounds/mobCat/catHiss2.f2bda6f1b6.ogg","/sounds/ge … [truncated]
- ... (118 more removed lines; see GitHub link above)
+     var mW = OW(1089),
+       EW = OW.n(mW),
+       NW = OW(1616),
+       PW = OW(1081),
+       LW = OW(805),
+       cW = OW(1172),
+       wW = OW(1532),
+       tW = OW(1605),
+       ZW = OW(4796),
+       xW = OW(1391),
+       lW = OW(4718),
+       AW = OW(3602),
+       bW = OW(1283);
+     const jW = 2;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L152-L156` → after: `L24-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L24-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/249.js#L24-L30) · [Before (L152-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/249.js#L152-L156)

```diff
-       return yO(BB).group
-     }
- 
-     function MO(BB) {
-       return yO(BB).file
+       return "firstPartyGame" === WW.type ? {
+         type: "game",
+         gameNameWithVariation: WW.gameNameWithVariation
+       } : {
+         type: "preview",
+         preview: WW.preview
+       }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L160-L164` → after: `L34-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L34-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/249.js#L34-L48) · [Before (L160-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/249.js#L160-L164)

```diff
-       return oO.has(BB)
-     }
- 
-     function zO(BB, OB) {
-       return lO(BB).includes(OB)
+       let {
+         game: iW,
+         disabled: OW,
+         showPlaceholder: mW
+       } = WW;
+       return null !== iW ? (0, bW.jsx)(lW.d, {
+         source: UW(iW),
+         gameWidth: "100%",
+         useLongRatio: !0,
+         disabled: OW,
+         entrySource: "customGamePlace"
+       }) : mW ? (0, bW.jsx)(lW.c, {
+         gameWidth: "100%",
+         useLongRatio: !0
+       }) : null
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L168-L169` → after: `L52-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L52-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/249.js#L52-L96) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/249.js#L168-L169)

```diff
-       if (!(BB in QO)) throw new Error(`Invalid sound group ${BB}`);
-       return Object.keys(QO[BB].sounds)
+       var iW;
+       let {
+         category: OW,
+         title: mW,
+         tintColour: EW,
+         layout: NW,
+         games: PW,
+         landscape: LW = !1
+       } = WW;
+       const {
+         followsLeader: cW
+       } = (0, AW.d)(), wW = null !== (iW = null === PW || void 0 === PW ? void 0 : PW.slice(0, NW.gameCount)) && void 0 !== iW ? iW : [], ZW = {
+         "--custom-game-place-tint": EW
+       };
+       return (0, bW.jsxs)("div", {
+         className: "CustomGamePlacePanel AnimFadeIn",
+ ... (29 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L174-L178` → after: `L100-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L100-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/249.js#L100-L102) · [Before (L174-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/249.js#L174-L178)

```diff
-       let OB = pO.get(BB);
-       return void 0 === OB && (OB = [...oO.keys()].filter((OB => OB.startsWith(BB))), pO.set(BB, OB)), OB
-     }
-     const ZO = new Map,
-       NO = new Map;
+       let {
+         categories: iW
+       } = WW;
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L180-L189` → after: `L104-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L104-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/249.js#L104-L109) · [Before (L180-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/249.js#L180-L189)

```diff
-     function RO(BB) {
-       const OB = qO(BB),
-         GB = OB[Math.floor(Math.random() * OB.length)];
-       if (OB.length > 1) {
-         const OB = function(BB, OB) {
-           const GB = `${OB}\n${BB}`;
-           let YB = NO.get(GB);
-           return void 0 === YB && (YB = qO(BB).filter((BB => oO.get(BB).group === OB)), NO.set(GB, YB)), YB
-         }(BB, oO.get(GB).group);
-         OB.length > 1 ? ZO.set(GB, OB) : ZO.delete(GB)
+       function OW(WW) {
+         const OW = iW[WW];
+         return (0, bW.jsx)(sW, {
+           ...OW,
+           landscape: !0
+         }, OW.id)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L191` → after: `L111-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L111-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/249.js#L111-L126) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/249.js#L191)

```diff
-       return GB
+       return (0, bW.jsxs)("div", {
+         className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
+         children: [(0, bW.jsxs)("div", {
+           className: "CustomGamePlaceUpper",
+           children: [(0, bW.jsxs)("div", {
+             className: "CustomGamePlaceMain",
+             children: [(0, bW.jsxs)("div", {
+               className: "CustomGamePlaceRow",
+               children: [OW(0), OW(2)]
+             }), OW(1)]
+           }), OW(4)]
+         }), (0, bW.jsxs)("div", {
+           className: "CustomGamePlaceRow",
+           children: [OW(3), OW(5)]
+         })]
+       })
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L193-L212` → after: `L128-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L128-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/249.js#L128-L152) · [Before (L193-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/249.js#L193-L212)

```diff
- 
-     function WO(BB) {
-       return ZO.get(BB)
-     }
-   },
-   37443: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => YB,
-       e: () => QB
-     });
-     const YB = "__default",
-       DB = ["end", "stop", "playerror"];
- 
-     function QB(BB, OB) {
-       const GB = () => {
-         if (function(BB) {
- ... (4 more removed lines; see GitHub link above)
+     const KW = ["section1", "section2", "section3", "section4", "section5", "section6"],
+       SW = {
+         section1: {
+           gameCount: 4,
+           columnCount: 2
+         },
+         section2: {
+           gameCount: 6,
+           columnCount: 6
+         },
+         section3: {
+           gameCount: 8,
+           columnCount: 4
+         },
+         section4: {
+           gameCount: 6,
+ ... (9 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L215-L216` → after: `L155-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L155-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/249.js#L155-L213) · [Before (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/249.js#L215-L216)

```diff
-       for (const YB of DB) BB.on(YB, GB);
-       GB()
+     var YW = OW(1095);
+ 
+     function yW() {
+       var WW;
+       const {
+         t: iW
+       } = (0, cW.B)(), OW = (0, NW.z)(), mW = (0, YW.h)(), xW = (0, ZW.e)({
+         refresh: !0
+       }), lW = OW.customGamePlace;
+       if (!(0, PW.k)(lW)) return (0, bW.jsx)(tW.NavigatePreserveSearch, {
+         to: "/"
+       });
+       const AW = LW.d[lW],
+         jW = PW.d[lW],
+         UW = null !== (WW = null === xW || void 0 === xW ? void 0 : xW[lW]) && void 0 !== WW ? WW : null,
+         kW = [];
+ ... (43 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/250.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/250.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L4-L560` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/250.js#L4) · [Before (L4-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/250.js#L4-L560)

```diff
-   40416: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => YB,
-       e: () => DB
-     });
-     const YB = "The world isn't loaded, so no blocks can be seen.",
-       DB = "The world isn't loaded, so nothing in it can be seen."
-   },
-   39804: (BB, OB, GB) => {
-     function YB(BB) {
-       return !(!BB.lobbyLeaderboardInfo && !BB.lobbyManage)
-     }
-     GB.d(OB, {
-       b: () => YB
-     })
-   },
- ... (541 more removed lines; see GitHub link above)
+   37527: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L566` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/250.js#L9-L10) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/250.js#L566)

```diff
-       k: () => VB
+       n: () => cW,
+       p: () => sW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L568-L694` → after: `L12-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L12-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/250.js#L12-L47) · [Before (L568-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/250.js#L568-L694)

```diff
-     var YB = GB(39954),
-       DB = GB(1217),
-       QB = GB(2050),
-       oB = GB(2059),
-       jB = GB(3708),
-       yB = GB(37500),
-       JB = GB(1350),
-       MB = GB(41593),
-       PB = GB(5313),
-       zB = GB(2617),
-       lB = GB(41600),
-       pB = GB(41602),
-       qB = GB(41652);
-     let ZB = null;
- 
-     function NB(BB) {
- ... (111 more removed lines; see GitHub link above)
+     var mW = OW(649),
+       EW = OW(1876),
+       NW = OW(5551);
+     class PW {
+       constructor(WW, iW) {
+         this.width = WW, this.aZ = iW, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(WW * iW)
+       }
+       push(WW) {
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+         const OW = this.data,
+           mW = this.next * this.width;
+         for (let EW = 0; EW < this.width; EW++) OW[mW + EW] = WW[iW + EW];
+         this.next = (this.next + 1) % this.aZ, this.size = Math.min(this.size + 1, this.aZ)
+       }
+       rows() {
+         let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+ ... (20 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L697-L701` → after: `L50-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L50-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/250.js#L50-L53) · [Before (L697-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/250.js#L697-L701)

```diff
-         inventoryDropRequested: qB.c.events.inventoryDropRequested,
-         chestToggled: qB.c.events.chestToggled,
-         chestRefreshed: qB.c.events.chestRefreshed,
-         inventorySynced: qB.c.events.inventorySynced,
-         enchantingTableOpened: qB.c.events.enchantingTableOpened
+         none: 0,
+         skipped: 1,
+         paced: 2,
+         drawn: 3
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L704-L737` → after: `L56-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L56-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/250.js#L56-L67) · [Before (L704-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/250.js#L704-L737)

```diff
-         removeInventoryItem: qB.c.commands.removeInventoryItem,
-         swapInventorySlots: qB.c.commands.swapInventorySlots,
-         moveInventoryItem: qB.c.commands.moveInventoryItem,
-         quickMoveInventoryItem: qB.c.commands.quickMoveInventoryItem,
-         closeChest: qB.c.commands.closeChest,
-         setInventoryOpen(BB) {
-           (0, PB.m)(zB.y.InventoryOpen, BB ? zB.y.InventoryOpen : 0)
-         },
-         focusCrafting: qB.c.commands.focusCrafting,
-         craftRecipe: qB.c.commands.craftRecipe,
-         salvageItem: qB.c.commands.salvageItem,
-         enchantItem: qB.c.commands.enchantItem,
-         changeIronChestPasskey(BB) {
-           var OB;
-           let {
-             pos: GB,
- ... (18 more removed lines; see GitHub link above)
+         lockGained: 1,
+         lockLost: 2,
+         lockError: 3,
+         visible: 4,
+         hidden: 5,
+         focus: 6,
+         blur: 7,
+         jsClient: 8,
+         wasmClient: 9,
+         droppedCopies: 10,
+         stepsLost: 11,
+         cameraSetsLost: 12
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L739-L741` → after: `L69-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L69-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/250.js#L69-L181) · [Before (L739-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/250.js#L739-L741)

```diff
-       kB = {
-         enchantingOffer: qB.c.queries.enchantingOffer
-       }
+       ZW = 12e3,
+       xW = ["nowMs", "dtMs", "rawX", "rawY", "turnedX", "turnedY", "outcome", "velocityX", "velocityY", "limit"],
+       lW = ["timeStamp", "nowMs", "movementX", "movementY", "locked"],
+       AW = ["nowMs", "dtMs", "heading", "pitch", "kind"],
+       bW = ["nowMs", "source", "headingBefore", "pitchBefore", "headingAfter", "pitchAfter"],
+       jW = ["nowMs", "change", "count"];
+ 
+     function UW(WW) {
+       return "js" === WW ? tW.jsClient : tW.wasmClient
+     }
+     class kW {
+       constructor() {
+         this.steps = new PW(LW, ZW), this.events = new PW(lW.length, ZW), this.frames = new PW(AW.length, ZW), this.cameraSets = new PW(NW.e, 256), this.changes = new PW(jW.length, 256)
+       }
+     }
+     const sW = new class {
+ ... (97 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L743-L750` → after: `L183-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L183-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/250.js#L183-L189) · [Before (L743-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/250.js#L743-L750)

```diff
-   41646: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => YB,
-       c: () => MB,
-       d: () => oB,
-       h: () => DB,
-       j: () => jB,
-       k: () => JB
+   37518: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       LOOK_DEBUG_HEADER: () => tW,
+       endLookDebugTake: () => UW,
+       noteLookDroppedCopy: () => kW,
+       saveLookCapture: () => sW,
+       startLookDebug: () => jW
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L752` → after: `L191-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L191-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/250.js#L191-L216) · [Before (L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/250.js#L752)

```diff
-     class YB extends Error {
+     var mW = OW(5551),
+       EW = OW(3866),
+       NW = OW(2012);
+     const PW = new Map(Object.entries(mW.k).map((WW => {
+       let [iW, OW] = WW;
+       return [OW, iW]
+     })));
+ 
+     function LW(WW) {
+       return (0, NW.x)(WW).toFixed(1)
+     }
+ 
+     function cW(WW, iW) {
+       return `camera set by ${PW.get(WW[iW+1])}: heading ${`${LW(WW[iW+2])} -> ${LW(WW[iW+4])}`} deg, pitch ${`${LW(WW[iW+3])} -> ${LW(WW[iW+5])}`} deg, at ${WW[iW].toFixed(1)} ms`
+     }
+     var wW = OW(37527);
+ ... (10 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L754-L763` → after: `L218-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L218-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/250.js#L218-L340) · [Before (L754-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/250.js#L754-L763)

```diff
-         super(...arguments), this.name = "CoreCorruption"
-       }
-     }
- 
-     function DB(BB) {
-       return BB instanceof RangeError && /call stack/i.test(BB.message) || BB instanceof Error && "InternalError" === BB.name && /recursion/i.test(BB.message)
-     }
-     const QB = /wasm:\/\/|wasm-function\[|\[wasm code\]/;
- 
-     function oB(BB) {
+         this.frames = 0, this.looked = 0, this.idle = 0, this.mD = 0, this.pastLimit = 0, this.lockSkips = 0, this.Yj = 0, this.lost = 0, this.dropped = 0, this.longFrames = 0, this.dtMin = 1 / 0, this.dtMax = 0, this.dtSum = 0, this.raw = [0, 0], this.turned = [0, 0], this.peakR … [truncated]
+       }
+       moved() {
+         return this.events > 0 || 0 !== this.raw[0] || 0 !== this.raw[1] || this.lockSkips > 0 || this.mD > 0 || this.dropped > 0 || this.cameraSets > 0
+       }
+       hasEvent() {
+         return this.mD > 0 || this.pastLimit > 0 || this.bigEvents > 0 || this.dropped > 0 || this.cameraSets > 0
+       }
+     }
+     class AW {
+       constructor() {
+         var WW = this;
+         this.topicOn = (0, EW.t)("look"), this.remote = (0, EW.x)(), this.tally = new lW, this.takes = null, this.started = !1, this.record = function(iW) {
+           let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
+           if (wW.p.step(iW, OW), !WW.topicOn) return;
+           const mW = iW[OW],
+ ... (107 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L765-L815` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/250.js#L342) · [Before (L765-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/250.js#L765-L815)

```diff
-       return BB instanceof WebAssembly.RuntimeError || BB instanceof YB || DB(BB) && QB.test(null !== (OB = BB.stack) && void 0 !== OB ? OB : "")
-     }
- 
-     function jB(BB, OB) {
-       if (oB(BB)) throw BB;
-       console.error(OB, BB)
-     }
- 
-     function yB(BB, OB, GB, DB, QB) {
-       if (OB % DB !== 0 || OB + GB > BB.byteLength) throw new YB(`${QB}: ${GB} bytes at ${OB}, ${DB}-aligned, outside ${BB.byteLength} bytes of memory`)
-     }
- 
-     function JB(BB, OB, GB, YB, DB) {
-       return 0 === GB ? null : (yB(OB, GB, YB * BB.BYTES_PER_ELEMENT, BB.BYTES_PER_ELEMENT, DB), new BB(OB, GB, YB))
-     }
- 
- ... (35 more removed lines; see GitHub link above)
+       null === (WW = bW) || void 0 === WW || WW.endTake()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L819-L852` → after: `L346-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L346-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/250.js#L346-L347) · [Before (L819-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/250.js#L819-L852)

```diff
-       return yB
-     }
- 
-     function PB(BB) {
-       jB.push(BB), null !== yB && JB(BB, yB)
-     }
- 
-     function zB(BB) {
-       return DB ??= Promise.all([GB.e(84), GB.e(111), GB.e(86), GB.e(248), GB.e(89), GB.e(220), GB.e(170), GB.e(249), GB.e(109), GB.e(268), GB.e(238), GB.e(300), GB.e(49), GB.e(217), GB.e(233), GB.e(216), GB.e(207), GB.e(208), GB.e(101), GB.e(134), GB.e(274), GB.e(68)]).then((()  … [truncated]
-         OB.loadAudio(BB), yB = OB;
-         for (const BB of jB) JB(BB, OB);
-         return OB
-       })).catch((BB => {
-         throw DB = null, BB
-       })), DB
-     }
- ... (18 more removed lines; see GitHub link above)
+       var WW;
+       null === (WW = bW) || void 0 === WW || WW.droppedCopy()
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L855-L867` → after: `L350-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L350-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/250.js#L350-L359) · [Before (L855-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/250.js#L855-L867)

```diff
-       const OB = QB;
-       if ((null === OB || void 0 === OB ? void 0 : OB.running) !== BB) throw new Error("the core's session has ended");
-       const GB = await zB(OB.shell.audio).catch((BB => {
-         throw new YB(BB)
-       }));
-       if (null !== oB) return oB;
-       if (QB !== OB || BB.isStopped) throw new Error("the core stopped while the game code loaded");
-       if (oB = GB.startGameHost(BB, OB.shell), null === oB) throw new Error("the core's shared tables didn't read, so the game can't start");
-       return oB
-     }
- 
-     function NB() {
-       null !== oB && (null !== yB ? yB.endGameHost(oB) : oB.closeGame()), oB = null, QB = null
+       var iW;
+       null === (iW = bW) || void 0 === iW || iW.takeRecords();
+       const {
+         clientHintsRead: mW,
+         debugDeviceLines: EW
+       } = await OW.e(35).then((() => OW(35106)));
+       await mW, wW.p.save({
+         ...WW,
+         device: EW()
+       })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/251.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/251.js` (41 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L2)

```diff
- export const ids = [251];
+ export const ids = [251, 610];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L4-L7)

```diff
-   37619: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => VB,
-       f: () => AB
+   44895: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       CharacterCustomisationUI: () => bi
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L9-L20` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L8-L13) · [Before (L9-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L9-L20)

```diff
-     var YB = GB(4662),
-       DB = GB(1480),
-       QB = GB(56),
-       oB = GB(6991),
-       jB = GB(4649),
-       yB = GB(1293),
-       JB = GB(2023),
-       MB = GB(2e3),
-       PB = GB(1485),
-       zB = GB(1175),
-       lB = GB(37627),
-       pB = GB(1090),
+     var mW = OW(62),
+       EW = OW(2959),
+       NW = OW(4703),
+       PW = OW(4683),
+       LW = OW(1107),
+       cW = OW(1089),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L22-L26` → after: `L15-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L15-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L15-L134) · [Before (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L22-L26)

```diff
-       ZB = GB(1338),
-       NB = GB(1383),
-       RB = GB(1268),
-       WB = GB(1282);
-     const AB = "SleepingOverlay";
+       tW = OW(1230),
+       ZW = OW(625),
+       xW = OW(614),
+       lW = OW(1172),
+       AW = OW(3083),
+       bW = OW(1659),
+       jW = OW(3540),
+       UW = OW(37879),
+       kW = OW(3090),
+       sW = OW(4255),
+       MW = OW(2075),
+       KW = OW(1532),
+       SW = OW(3125),
+       YW = OW(3210),
+       yW = OW(25),
+       TW = OW(3702),
+ ... (104 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L28` → after: `L136-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L136-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L136-L142) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L28)

```diff
-     function VB() {
+     function IW(WW) {
+       let {
+         wornOutfit: iW,
+         onApply: OW,
+         onOverwrite: EW,
+         onDelete: NW
+       } = WW;
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L31-L39` → after: `L145-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L145-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L145-L163) · [Before (L31-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L31-L39)

```diff
-       } = (0, zB.H)(), [OB, GB] = (0, QB.useState)(!1), [pB, VB] = (0, QB.useState)(null), [nB, UB] = (0, QB.useState)(1), [fB, kB] = (0, QB.useState)(!1), [dB, KB] = (0, QB.useState)(!1), uB = (0, QB.useRef)(0), mB = (0, QB.useRef)(!1), IB = (0, QB.useRef)(!1), FB = (0, QB.useRe … [truncated]
- 
-       function LB() {
-         const BB = null !== pB && void 0 !== pB ? pB : "Rested Speed";
-         JB.gameBridge.send("wakeUp", dB ? BB : null), iB.current = null, GB(!1), VB(null), UB(1), kB(!1), KB(!1)
-       }
- 
-       function gB() {
-         return !fB && (LB(), !0)
+       } = (0, lW.B)(), {
+         accountId: cW,
+         data: tW
+       } = (0, TW.g)(oW, !1), {
+         userContext: ZW
+       } = (0, LW.e)();
+       async function xW(WW, iW) {
+         const OW = await RW.NotificationProvider.showPromptPopup({
+             title: "homePage:deleteOutfitConfirm",
+             confirmText: "general:delete",
+             cancelText: "general:cancel",
+             destructive: !0
+           }).getResult(),
+           {
+             accountId: mW,
+             data: EW
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L41-L97` → after: `L165-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L165-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L165-L192) · [Before (L41-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L41-L97)

```diff
-       return (0, DB.f)("PlayerPhysicsTypeUpdate", (BB => {
-         BB !== iB.current && (iB.current = BB, BB === oB.o.SLEEPING ? (IB.current || (uB.current = JB.gameBridge.lookup("cameraZoom", null), IB.current = !0), mB.current = !0, JB.gameBridge.send("setCameraZoom", 3), GB(!0), UB(function() {
-           for (const BB of JB.gameBridge.lookup("blocksStandingOn", null)) {
-             if (lB.d.leafBeds.includes(BB)) return console.log(`Found leaf bed: ${BB}`), 1;
-             if (lB.d.woolBeds.includes(BB)) return console.log(`Found woold bed: ${BB}`), 2;
-             if (lB.d.strongBeds.includes(BB)) return console.log(`Found strong bed ${BB}`), 3
-           }
-           return 1
-         }())) : (IB.current = !1, GB(!1), VB(null), UB(1)))
-       })), (0, QB.useEffect)((() => () => {
-         (0, yB.o)(AB)
-       }), []), (0, QB.useEffect)((() => {
-         OB ? (0, yB.p)(AB) : ((0, yB.o)(AB), mB.current && (JB.gameBridge.send("setCameraZoom", uB.current), mB.current = !1))
-       }), [OB]), (0, RB.v)("overlay", FB, gB, OB), (0, WB.jsx)(YB.e, {
-         className: "SleepingOverlay",
-         "data-camera-keeper": "",
- ... (41 more removed lines; see GitHub link above)
+       return (0, mW.useEffect)((() => {
+         oW.ensureLoaded()
+       }), []), null === tW || cW !== ZW.whamm ? null : (0, GW.jsxs)("div", {
+         className: "CosmeticPackGroup SavedOutfits",
+         children: [(0, GW.jsx)("div", {
+           className: "CosmeticPackGroupLabel",
+           children: (0, GW.jsx)("span", {
+             className: "CosmeticPackGroupLabelName",
+             children: PW("homePage:myOutfits")
+           })
+         }), (0, GW.jsx)("div", {
+           className: "CharacterPresetsGrid SavedOutfitsGrid",
+           children: tW.map(((WW, mW) => {
+             const NW = (0, UW.f)(WW);
+             return (0, GW.jsxs)("div", {
+               className: wW()("SavedOutfitSlot", {
+ ... (12 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L99-L133` → after: `L194-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L194-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L194-L211) · [Before (L99-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L99-L133)

```diff
-                 loading: fB,
-                 children: [!dB && (0, WB.jsxs)(WB.Fragment, {
-                   children: [(0, WB.jsx)(NB.b, {
-                     name: "film"
-                   }), " ", BB("classicGame:watchAdToGetRestedPerk")]
-                 }), dB && BB("classicGame:wakeUp")]
-               }), (0, WB.jsxs)("div", {
-                 className: "SleepingOverlayPerkBottomSide",
-                 children: [(0, WB.jsx)("div", {
-                   className: qB()("SleepingOverlayBedIcon", {
-                     SleepingOverlayBedIconActive: 1 === nB
-                   }),
-                   children: (0, WB.jsx)(MB.b, {
-                     text: [{
-                       icon: "Leaf Bed"
-                     }]
- ... (19 more removed lines; see GitHub link above)
+                 children: [NW && (0, GW.jsxs)(GW.Fragment, {
+                   children: [(0, GW.jsx)(pW.c, {
+                     name: "plus"
+                   }), PW("homePage:saveOutfit")]
+                 }), !NW && (0, GW.jsxs)(GW.Fragment, {
+                   children: [(0, GW.jsx)("div", {
+                     className: "SavedOutfitCardPicture",
+                     children: (0, GW.jsx)(qW.e, {
+                       cosmetics: WW
+                     })
+                   }), (0, GW.jsx)(KW.Z, {
+                     padSecondaryLabelKey: "homePage:saveOutfit",
+                     stopPropagation: !0,
+                     onClick: () => {
+                       (0, UW.b)(iW, WW) || (oW.save(mW, iW), EW(mW, WW))
+                     },
+ ... (2 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L136` → after: `L226-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L226-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L226-L312) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L136)

```diff
-             })]
+             }, mW)
+           }))
+         })]
+       })
+     }
+     var aW = OW(344),
+       rW = OW(1427);
+ 
+     function zW() {
+       (0, SW.o)({
+         mode: "self",
+         source: "characterCustomisation",
+         openItem: "superRank"
+       })
+     }
+ 
+ ... (71 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L141` → after: `L317-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L317-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L317-L390) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L141)

```diff
-     const SB = (0, QB.memo)((function(BB) {
+     var QW = OW(37541);
+ 
+     function Wi(WW, iW, OW) {
+       return !(0, vW.z)(WW, iW) && !(0, vW.I)(WW, iW, OW)
+     }
+ 
+     function ii(WW, iW) {
+       return !(0, vW.H)(WW, iW)
+     }
+ 
+     function Oi(WW) {
+       return eW.m.find((iW => (0, eW.g)(iW) === WW))
+     }
+ 
+     function mi(WW, iW, OW) {
+       var mW;
+ ... (58 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L143-L146` → after: `L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L392) · [Before (L143-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L143-L146)

```diff
-         children: OB,
-         restedEffect: GB,
-         fJ: YB,
-         setChosenRestedEffect: DB
+         gets: iW
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L148-L151` → after: `L394-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L394-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L394-L427) · [Before (L148-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L148-L151)

```diff
-       return GB === YB ? (0, WB.jsx)(PB.q, {
-         onClick: BB => {
-           BB.stopPropagation()
-         },
+       const {
+         t: OW
+       } = (0, lW.B)();
+       return (0, GW.jsx)("div", {
+         className: "CharCustomisationGetTriedOn",
+         children: iW.map((WW => {
+           let {
+             kind: iW,
+             pack: mW
+           } = WW;
+           return (0, GW.jsxs)(KW.n, {
+             className: "CharCustomisationGetPiece",
+             onClick: () => {
+               (0, gW.j)(mW, "triedOnGet")
+             },
+             children: [(0, GW.jsx)(pW.c, {
+ ... (18 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L153-L156` → after: `L429-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L429-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L429-L448) · [Before (L153-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L153-L156)

```diff
-       }) : (0, WB.jsx)(PB.j, {
-         onClick: BB => {
-           DB(GB), BB.stopPropagation()
-         },
+       } = WW;
+       return iW ? (0, GW.jsx)(xi, {
+         children: OW
+       }) : OW
+     }
+ 
+     function xi(WW) {
+       var iW;
+       let {
+         children: OW
+       } = WW;
+       const {
+         t: mW
+       } = (0, lW.B)(), {
+         userContext: EW
+       } = (0, LW.e)(), NW = null !== (iW = EW.dailyDrop) && void 0 !== iW && iW.hidden ? mW("dailyDrop:lockedFromHidden") : mW("dailyDrop:lockedFrom");
+ ... (4 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L159-L196` → after: `L451-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L451-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L451-L508) · [Before (L159-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L159-L196)

```diff
-     }))
-   },
-   41562: (BB, OB, GB) => {
-     GB.d(OB, {
-       e: () => vB
-     });
-     var YB = GB(16),
-       DB = GB(25),
-       QB = GB(4678),
-       oB = GB(331),
-       jB = GB(1699),
-       yB = GB(8890),
-       JB = GB(4696),
-       MB = GB(9376),
-       PB = GB(8915),
-       zB = GB(8902),
- ... (22 more removed lines; see GitHub link above)
+     }
+ 
+     function li(WW) {
+       let {
+         pack: iW,
+         ownedPacks: OW,
+         showStoreLink: mW = !1,
+         children: EW
+       } = WW;
+       const {
+         t: NW
+       } = (0, lW.B)(), PW = eW.e[iW].purchasable && !OW.includes(iW) && eW.q.includes(iW), LW = gW.m[iW];
+       return (0, GW.jsxs)("div", {
+         className: wW()("CosmeticPackGroup", {
+           CosmeticPackGroupLocked: PW
+         }),
+ ... (42 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L199-L201` → after: `L597-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L597-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L597-L630) · [Before (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L199-L201)

```diff
-     class dB {
-       constructor(BB, OB) {
-         this.press = BB, this.release = OB, this.downAtMs = null, this.token = null, this.latched = !1
+     const bi = (0, mW.memo)((function(WW) {
+       var iW, OW;
+       let {
+         selectedTab: cW
+       } = WW;
+       const kW = "characters" === cW ? "skin" : cW,
+         {
+           t: SW
+         } = (0, lW.B)(),
+         {
+           userContext: TW,
+           isUserContextUpdating: JW
+         } = (0, LW.e)(),
+         hW = (0, EW.b)(),
+         {
+           gameState: HW
+ ... (18 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L203-L205` → after: `L632-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L632-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L632-L649) · [Before (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L203-L205)

```diff
-       update(BB, OB, GB, YB) {
-         if (BB && null === this.downAtMs) return this.downAtMs = GB, this.latched = YB, void(this.token = this.press(YB));
-         null !== this.downAtMs && (this.latched ? BB && this.end() : !OB && GB - this.downAtMs >= 40 && this.end())
+ 
+       function ki(WW, iW, OW) {
+         var mW, EW, NW;
+         Pi.current = {
+           ...Pi.current,
+           [WW]: iW
+         }, hW(), OW && ((0, QW.d)(TW, [
+           [WW, iW]
+         ]), rW(null));
+         const PW = (0, AW.l)(WW, iW);
+         if (null !== PW && void 0 !== PW && PW.colourGroup && null !== (mW = eW.e[PW.cosmeticPack].colourGroups) && void 0 !== mW && null !== (EW = mW[PW.colourGroup]) && void 0 !== EW && EW.showSwatchSelector) {
+           const OW = (0, AW.h)(iW);
+           OW && BW((iW => ({
+             ...iW,
+             [`${PW.cosmeticPack}_${WW}_${PW.colourGroup}`]: parseInt(OW[1])
+           })))
+ ... (2 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L207-L208` → after: `L651-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L651-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L651-L658) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L207-L208)

```diff
-       isLatched() {
-         return null !== this.downAtMs && this.latched
+ 
+       function si(WW) {
+         uW((iW => {
+           const OW = {
+             ...iW
+           };
+           return delete OW[WW], OW
+         }))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L210-L211` → after: `L660-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L660-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L660-L726) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L210-L211)

```diff
-       unlatch() {
-         this.latched = !1
+ 
+       function Mi(WW, iW) {
+         let {
+           undoable: OW
+         } = iW;
+         Object.keys(nW).length > 0 && uW({});
+         const mW = function(WW, iW, OW, mW) {
+           return Object.entries(WW).filter((WW => {
+             let [EW, NW] = WW;
+             return iW[EW] !== NW && !Wi(EW, NW, OW) && !mW(EW, NW)
+           }))
+         }(WW, Pi.current, Ki, ((WW, iW) => ti(Si, WW, iW)));
+         OW ? mW.length > 0 && rW({
+           kind: "worn",
+           outfit: (0, UW.i)(Pi.current)
+         }) : rW(null);
+ ... (51 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L213-L214` → after: `L728-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L728-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L728-L770) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L213-L214)

```diff
-       cancel() {
-         null !== this.downAtMs && this.end()
+       const di = function(WW, iW) {
+           const OW = new Set,
+             mW = new Set;
+           for (const [EW, NW] of Object.entries(AW.e[WW])) {
+             if (void 0 === NW.colourGroup) continue;
+             const PW = `${NW.cosmeticPack}_${NW.colourGroup}`;
+             (Wi(WW, EW, iW) ? mW : OW).add(PW)
+           }
+           return new Set([...OW].filter((WW => mW.has(WW))))
+         }(kW, Ki),
+         ei = new Map;
+       for (const [mW, EW] of ui) {
+         const WW = [],
+           iW = new Map;
+         for (const mW of EW) {
+           var vi, gi;
+ ... (27 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L216-L218` → after: `L772-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L772-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L772-L778) · [Before (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L216-L218)

```diff
-       end() {
-         const BB = this.token;
-         this.downAtMs = null, this.token = null, this.latched = !1, this.release(BB)
+       const Di = Array.from(ui.keys()),
+         Vi = new Map;
+       for (const [mW, EW] of Object.entries(bW.e)) {
+         const WW = eW.e[EW.cosmeticPack],
+           iW = (0, vW.H)(EW.cosmetics, Ki),
+           OW = void 0 !== Oi(mW);
+         (WW.clientSelectable || OW || iW) && ((!WW.purchasable || iW || Yi) && (Vi.has(EW.cosmeticPack) || Vi.set(EW.cosmeticPack, []), Vi.get(EW.cosmeticPack).push([mW, EW])))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L220-L241` → after: `L780-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L780-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L780-L814) · [Before (L220-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L220-L241)

```diff
-     }
-     const KB = {
-         kind: "specialAction",
-         action: "SpecialAction2"
-       },
-       uB = BB => {
-         let OB = null;
-         const GB = new fB.c,
-           YB = () => {
-             OB && (((BB, OB, GB) => {
-               switch (GB.kind) {
-                 case "reload":
-                   return void OB.specialActionUp("SpecialAction1");
-                 case "specialAction":
-                   return void OB.specialActionUp(GB.action);
-                 case "customButton":
- ... (6 more removed lines; see GitHub link above)
+       const fi = Array.from(Vi.keys()),
+         Ci = Yi ? Ei(cW, nW, Ki) : [],
+         [Xi, Bi] = (0, mW.useState)(!1);
+       return !Xi && (Ci.length > 0 || null !== qW) && Bi(!0), (0, GW.jsxs)("div", {
+         className: "CharCustomisationBody",
+         children: [("cape" === kW || "nameColour" === kW) && !(0, xW.e)(yi) && (0, GW.jsxs)("div", {
+           className: "CharCustomisationBodyHeader",
+           children: [(0, GW.jsx)(pW.c, {
+             name: "bolt"
+           }), SW((0, YW.o)(Date.now()).unlockWithKey), Yi && (0, GW.jsx)(KW.n, {
+             onClick: () => {
+               zW()
+             },
+             children: SW("general:getItNow")
+           })]
+         }), (0, GW.jsxs)("div", {
+ ... (19 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L243-L263` → after: `L816-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L816-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L816-L1056) · [Before (L243-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L243-L263)

```diff
-             })(BB, OB.bodies, OB.action), OB = null)
-           },
-           QB = (GB, DB, QB, oB) => {
-             YB(), OB = {
-               action: DB,
-               bodies: GB,
-               heldBy: QB,
-               atMs: oB
-             }, ((BB, OB, GB) => {
-               switch (GB.kind) {
-                 case "reload":
-                   return OB.reloadGun(), void OB.specialActionDown("SpecialAction1");
-                 case "specialAction":
-                   return void OB.specialActionDown(GB.action);
-                 case "customButton":
-                   return void VB.gameBridge.send("pressCustomButton", {
- ... (5 more removed lines; see GitHub link above)
+             }), fi.map((WW => {
+               const iW = Vi.get(WW);
+               return (0, GW.jsx)(li, {
+                 pack: WW,
+                 ownedPacks: Ki,
+                 showStoreLink: !eW.n.includes(WW) && iW.some((WW => {
+                   let [, {
+                     cosmetics: iW
+                   }] = WW;
+                   return ii(iW, Ki)
+                 })),
+                 children: (0, GW.jsx)("div", {
+                   className: "CharacterPresetsGrid",
+                   children: iW.map((WW => {
+                     let [iW, {
+                       cosmetics: OW
+ ... (225 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L265-L312` → after: `L1058-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1058-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1058-L1093) · [Before (L265-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L265-L312)

```diff
-             })(BB, GB, DB)
-           };
-         return {
-           update: (oB, jB, JB, MB) => {
-             var zB;
-             const lB = (0, nB.m)(BB.contextActionInputs()),
-               pB = null !== (zB = lB[0]) && void 0 !== zB ? zB : KB;
-             (0, UB.e)((0, nB.e)(pB) ? pB : null);
-             const qB = (0, nB.d)(lB);
-             (0, UB.h)(qB);
-             const ZB = (0, yB.h)("actionButton");
-             if (qB) {
-               const BB = GB.update(jB.wasPressed(ZB), jB.isHeld(ZB), JB, MB);
-               "tap" === BB ? QB(oB, pB, [ZB], JB) : "hold" === BB && (PB.c.consumeButton(ZB), DB.o.tM(AB.m, lB))
-             } else GB.release(), jB.wasPressed(ZB) && QB(oB, pB, [ZB], JB);
-             OB && JB - OB.atMs >= 40 && !OB.heldBy.some((BB => (0, SB.P)(jB.frame.values, BB))) && YB()
- ... (32 more removed lines; see GitHub link above)
+             }), Xi && (0, GW.jsxs)("div", {
+               className: "CharCustomisationPreviewActions",
+               children: [Ci.length > 0 && (0, GW.jsx)(Li, {
+                 gets: Ci
+               }), qW && (0, GW.jsxs)(KW.f, {
+                 className: "CharCustomisationUndo",
+                 onClick: () => {
+                   "worn" === qW.kind ? Mi(qW.outfit, {
+                     undoable: !1
+                   }) : (oW.save(qW.slot, qW.outfit), rW(null))
+                 },
+                 children: [(0, GW.jsx)(pW.c, {
+                   name: "rotate-left"
+                 }), SW("general:undo")]
+               })]
+             })]
+ ... (20 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L314-L315` → after: `L1095-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1095-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1095-L1104) · [Before (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L314-L315)

```diff
-           bodies: OB,
-           press: YB
+           onReady: OW,
+           onDrawn: lW,
+           onSetupFailed: AW,
+           owner: bW = "other",
+           framing: jW = "player",
+           forcedCosmetics: UW,
+           LL: kW,
+           emotePlaySeq: sW,
+           turntableFromYaw: MW = null,
+           nametag: KW
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L317-L342` → after: `L1106-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1106-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1106-L1117) · [Before (L317-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L317-L342)

```diff
-         GB(OB, YB)
-       })),
-       HB = {
-         running: !1,
-         latchedAtMs: -1 / 0
-       },
-       vB = BB => {
-         const OB = {
-           x: 0,
-           y: 0,
-           magnitude: 0,
-           headingOffset: 0,
-           jumpHeld: !1,
-           jumpPressed: !1,
-           running: !1,
-           sprintHeld: !1
- ... (10 more removed lines; see GitHub link above)
+         const SW = (0, mW.useRef)(null),
+           {
+             width: YW,
+             height: yW
+           } = (0, EW.d)(SW),
+           TW = (0, mW.useRef)({
+             width: YW,
+             height: yW
+           });
+         TW.current = {
+           width: YW,
+           height: yW
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L344-L381` → after: `L1119-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1119-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1119-L1156) · [Before (L344-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L344-L381)

```diff
-         let KB = !1;
-         const eB = new kB,
-           vB = BB.look,
-           sB = new fB.c,
-           xB = new fB.c,
-           tB = uB(BB),
-           BO = DB.o.subscribe(AB.p, (OB => {
-             tB.pressPicked(BB.bodies(), OB)
-           })),
-           OO = CB(BB, ((BB, OB) => BB.primaryFireDown(!OB)), ((BB, OB) => {
-             BB.primaryFireUp(OB)
-           })),
-           GO = CB(BB, (BB => BB.altFireDown()), ((BB, OB) => {
-             BB.altFireUp(OB)
-           }));
-         let YO = !1,
- ... (22 more removed lines; see GitHub link above)
+         const JW = (0, mW.useRef)(null),
+           hW = (0, mW.useRef)({}),
+           HW = (0, mW.useRef)({}),
+           [nW, uW] = (0, mW.useState)(!1),
+           oW = (0, mW.useRef)(OW);
+         oW.current = OW;
+         const dW = (0, mW.useRef)(lW);
+         dW.current = lW;
+         const eW = (0, mW.useRef)(AW);
+         eW.current = AW;
+         const vW = (0, mW.useRef)(null),
+           gW = (0, mW.useRef)(!1),
+           DW = (0, mW.useRef)(KW);
+         DW.current = KW;
+         const VW = (0, mW.useRef)(!0),
+           pW = (0, mW.useRef)(!1),
+ ... (22 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L383-L450` → after: `L1158-L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1158-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1158-L1163) · [Before (L383-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L383-L450)

```diff
-         let lO = !1;
-         const pO = function(YB, QB, oB) {
-             let jB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-             if (!(0, pB.i)()) return void(lO || (lO = !0, YO = !1, BB.stopMoving()));
-             lO = !1;
-             const JB = (0, zB.k)(),
-               PB = (0, gB.f)(QB, JB.moveDeadzone),
-               lB = (0, yB.h)("sprint");
-             GB = (0, gB.r)(GB, {
-               sprintPressed: YB.wasPressed(lB),
-               magnitude: PB.magnitude,
-               autoSprint: JB.autoSprint,
-               nowMs: oB
-             }), OB.running = GB.running, OB.sprintHeld = YB.isHeld(lB), OB.x = PB.x, OB.y = PB.y, OB.magnitude = PB.speed, OB.headingOffset = PB.headingOffset, PB.magnitude > 0 && (!YO || oB - DO >= 1e3) && (DO = oB, DB.o.tM("stickMoved")), YO = PB.magnitude > 0;
-             const qB = (0, yB.h)("jump");
-             if (OB.jumpHeld = YB.isHeld(qB), OB.jumpPressed = YB.wasPressed(qB), OB.jumpPressed && BB.bodies().jumpDown(), jB) return void BB.move(OB, null);
- ... (52 more removed lines; see GitHub link above)
+           return {
+             updateCosmetic: WW,
+             setAllCosmetics(iW) {
+               for (const mW of NW.p) {
+                 var OW;
+                 WW(mW, null !== (OW = iW[mW]) && void 0 !== OW ? OW : (0, PW.d)(mW))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L462-L467` → after: `L1166-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1166-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1166-L1168) · [Before (L462-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L462-L467)

```diff
-             onFrame: BB => {
-               const OB = performance.now(),
-                 GB = (0, zB.k)(),
-                 YB = (0, gB.s)(BB, (0, gB.l)(GB, (0, yB.h)("pause"), (0, rB.b)().isSupported())),
-                 DB = (0, gB.h)(YB, GB.swapSticks);
-               return (0, lB.k)() ? (QO = !1, (0, ZB.i)() ? (oO = !1, vB.update(DB.look, GB, YB.isHeld((0, yB.h)("use"))), pO(YB, DB.move, OB), void NO(YB, OB)) : (oO || (oO = !0, MB.lostToPadScreen(), zO()), void qO(YB, OB))) : (QO || (PO(), QO = !0), void pO(YB, DB.move, OB))
+             isReady() {
+               var WW, iW;
+               return null !== (WW = null === (iW = JW.current) || void 0 === iW ? void 0 : iW.isReady()) && void 0 !== WW && WW
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L469-L470` → after: `L1170-L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1170-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1170-L1172) · [Before (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L469-L470)

```diff
-             onDeactivate: BB => {
-               (0, lB.k)() && MB.lostToPadScreen(), zO(BB)
+             resetCamera() {
+               var WW;
+               null === (WW = JW.current) || void 0 === WW || WW.resetCamera()
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L472-L484` → after: `L1174-L1183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1174-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1174-L1183) · [Before (L472-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L472-L484)

```diff
-             onPeekFrame: OB => {
-               (0, lB.k)() && (0, ZB.i)(IB.k) && BB.hasPlayer() ? pO(OB, (0, gB.h)(OB, (0, zB.k)().swapSticks).move, performance.now(), !0) : zO()
-             }
-           }),
-           WO = (0, IB.g)(BB),
-           AO = (() => {
-             const BB = DB.o.subscribe(mB.c, (BB => {
-               !BB && (0, lB.k)() && "inGame" === YB.c.get("gameState") && DB.o.tM("showBottomMessage", {
-                 message: [{
-                   translationKey: "controller:disconnected"
-                 }],
-                 timeoutLength: 3e3,
-                 type: "Warning"
+             setOrbit(WW) {
+               var iW;
+               null === (iW = JW.current) || void 0 === iW || iW.setOrbit(WW)
+             },
+             turnCamera(WW) {
+               var iW;
+               const OW = LW.d[jW];
+               null === (iW = JW.current) || void 0 === iW || iW.setOrbit({
+                 ...OW,
+                 yaw: OW.yaw + WW
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L486-L488` → after: `L1185-L1196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1185-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1185-L1196) · [Before (L486-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L486-L488)

```diff
-             }));
-             return () => {
-               DB.o.unsubscribe(BB)
+             },
+             async ensureReadyForCapture(WW) {
+               var iW;
+               await (null === (iW = JW.current) || void 0 === iW ? void 0 : iW.untilDrawn(WW))
+             },
+             getDevTools() {
+               var WW;
+               return null !== (WW = JW.current) && void 0 !== WW && WW.isReady() ? JW.current.dev : null
+             },
+             setNametagShown(WW) {
+               var iW, OW;
+               VW.current = WW, null === (iW = JW.current) || void 0 === iW || iW.setNametag(WW && null !== (OW = DW.current) && void 0 !== OW ? OW : null)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L490-L572` → after: `L1198-L1211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1198-L1211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1198-L1211) · [Before (L490-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L490-L572)

```diff
-           })();
-         return () => {
-           zO(), BB.uninstall(), (0, wB.h)(!1), (0, hB.e)(!1), DB.o.unsubscribe(VB), DB.o.unsubscribe(BO), RO(), WO(), AO(), vB.uninstall()
-         }
-       }
-   },
-   41557: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => pB,
-       g: () => ZB,
-       k: () => lB
-     });
-     var YB = GB(1293),
-       DB = GB(4678),
-       QB = GB(9457),
-       oB = GB(37619),
- ... (67 more removed lines; see GitHub link above)
+           }
+         }), [UW, jW, fW]), (0, mW.useEffect)((() => {
+           const WW = cW.b.register(bW);
+           let iW = !0;
+           const OW = WW => {
+             const OW = JW.current,
+               mW = LW.f.openCharacter(SW.current, jW);
+             if (JW.current = mW, tW = mW, OW) {
+               OW.close();
+               const {
+                 width: WW,
+                 height: iW
+               } = TW.current;
+               WW > 0 && iW > 0 && mW.resize(WW, iW)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L574-L638` → after: `L1213-L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1213-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1213-L1292) · [Before (L574-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L574-L638)

```diff
-           }(OB, GB, {
-             yawBoost: oB,
-             aiming: DB
-           })
-       },
-       oB = (BB, OB) => {
-         const GB = Math.max(0, Math.min(250, OB)) / 1e3;
-         return {
-           Rm: BB.yawRadPerSec * GB,
-           Wm: BB.pitchRadPerSec * GB
-         }
-       },
-       jB = (BB, OB) => OB ? {
-         move: BB.rightStick,
-         look: BB.leftStick
-       } : {
- ... (49 more removed lines; see GitHub link above)
+             HW.current = {}, uW(!1), mW.ready.then((() => {
+               if (iW && JW.current === mW)
+                 if (uW(!0), WW) {
+                   mW.resetCamera();
+                   for (const WW of NW.p) {
+                     var OW;
+                     mW.setCosmetic(WW, null !== (OW = hW.current[WW]) && void 0 !== OW ? OW : (0, PW.d)(WW))
+                   }
+                 } else oW.current()
+             })).catch((WW => {
+               var OW;
+               (console.error("Failed to set up the character preview", WW), iW && JW.current === mW) && (null === (OW = eW.current) || void 0 === OW || OW.call(eW))
+             }))
+           };
+           OW(!1);
+           const mW = {
+ ... (64 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L640` → after: `L1294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1294) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L640)

```diff
-   41570: (BB, OB, GB) => {
+   37541: (WW, iW, OW) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L642-L643` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1296) · [Before (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L642-L643)

```diff
-       c: () => DB,
-       g: () => YB
+       d: () => PW
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L645-L669` → after: `L1298-L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1298-L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1298-L1300) · [Before (L645-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L645-L669)

```diff
-     const YB = BB => {
-       let {
-         mode: OB,
-         sneakHeld: GB,
-         sneakPressed: YB,
-         sneakTogglePressed: DB,
-         descending: QB,
-         canCrouch: oB,
-         toggled: jB
-       } = BB;
-       return oB ? QB ? {
-         crouchHeld: GB,
-         toggled: !1
-       } : "hold" === OB ? {
-         crouchHeld: GB,
-         toggled: DB ? !jB : jB
- ... (9 more removed lines; see GitHub link above)
+     var mW = OW(2037),
+       EW = OW(1584);
+     const NW = new class {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L671` → after: `L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1302) · [Before (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L671)

```diff
-         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
+         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L673-L674` → after: `L1304-L1313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1304-L1313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1304-L1313) · [Before (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L673-L674)

```diff
-       lostToPadScreen() {
-         this.regainPending = !0
+       save(WW, iW) {
+         WW !== this.userContext && this.sendHeld(), this.userContext = WW;
+         for (const [mW, EW] of iW) this.pending.set(mW, EW);
+         if (null !== this.timer) return;
+         const OW = this.lastSentAt + 1100 - Date.now();
+         OW <= 0 ? this.send(WW) : (this.timer = setTimeout((() => {
+           this.sendHeld()
+         }), OW), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
+           "hidden" === document.visibilityState && this.sendHeld()
+         }))))
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L676-L683` → after: `L1315-L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1315-L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1315-L1316) · [Before (L676-L683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L676-L683)

```diff
-       filter(BB, OB) {
-         this.regainPending && (this.regainPending = !1, this.regainedAtMs = OB, this.graceEndsMs = OB + 500);
-         const GB = OB < this.graceEndsMs;
-         return GB && (BB.sneakPressed || BB.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, OB + 300))), BB.sneakHeld ? GB && BB.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
-           sneakHeld: BB.sneakHeld && !this.ignoringHeld,
-           sneakPressed: BB.sneakPressed && !this.ignoringHeld,
-           sneakTogglePressed: BB.sneakTogglePressed && !GB
-         }
+       sendHeld() {
+         null !== this.timer && null !== this.userContext && (clearTimeout(this.timer), this.timer = null, this.send(this.userContext))
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L685-L778` → after: `L1318-L1323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1318-L1323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1318-L1323) · [Before (L685-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L685-L778)

```diff
-     }
-   },
-   41548: (BB, OB, GB) => {
-     GB(9518)
-   },
-   41553: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => WB
-     });
-     var YB = GB(25),
-       DB = GB(9457),
-       QB = GB(9469),
-       oB = GB(8890),
-       jB = GB(8915),
-       yB = GB(8902),
-       JB = GB(41555),
- ... (78 more removed lines; see GitHub link above)
+       send(WW) {
+         const iW = Array.from(this.pending, (WW => {
+           let [iW, OW] = WW;
+           return {
+             NE: iW,
+             PE: OW
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L780` → after: `L1325-L1328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR1325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L1325-L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/251.js#L1325-L1328) · [Before (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/251.js#L780)

```diff
-         })
+         }));
+         this.pending.clear(), this.lastSentAt = Date.now(), EW.e.updateCosmetics(WW, iW).catch((WW => {
+           console.error("Failed to update cosmetics", WW)
+         }))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/252.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/252.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af)

#### 1. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L4)

```diff
-   39127: (BB, OB, GB) => {
+   37559: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L6` → after: `L6-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L6-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L6-L14) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L6)

```diff
-       b: () => pB
+       e: () => Li,
+       h: () => ki,
+       k: () => xi,
+       n: () => wi,
+       r: () => li,
+       s: () => Zi,
+       t: () => si,
+       u: () => ti,
+       x: () => bi
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L8-L10` → after: `L16-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L16-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L16-L69) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L8-L10)

```diff
-     var YB = GB(192),
-       DB = GB(38313);
-     const QB = 1.2,
+     const mW = JSON.parse('{"sounds":{"lavaFlow":{"src":["/sounds/generatedSounds/ambient/lavaFlow.ba535035cf.ogg","/sounds/generatedSounds/ambient/lavaFlow.40571c16d7.m4a"],"ms":34000}}}'),
+       EW = JSON.parse('{"sounds":{"carCrash":{"src":["/sounds/generatedSounds/cars/carCrash.e9cf35a412.ogg","/sounds/generatedSounds/cars/carCrash.378aeb32a4.m4a"],"ms":539.7732426303855},"carDoorClose":{"src":["/sounds/generatedSounds/cars/carDoorClose.792cfcf48d.ogg","/sounds/g … [truncated]
+       NW = JSON.parse('{"sounds":{"crowdAmbience":{"src":["/sounds/generatedSounds/crowd/crowdAmbience.c8437e74dd.ogg","/sounds/generatedSounds/crowd/crowdAmbience.ea6c2e684d.m4a"],"ms":54935.51020408163},"crowdCheer":{"src":["/sounds/generatedSounds/crowd/crowdCheer.d4ed8b2c1c.o … [truncated]
+       PW = JSON.parse('{"sounds":{"cryptWhoosh":{"src":["/sounds/generatedSounds/customGame_horror/cryptWhoosh.844ce087ed.ogg","/sounds/generatedSounds/customGame_horror/cryptWhoosh.c75574f860.m4a"],"ms":1700},"doorKnock":{"src":["/sounds/generatedSounds/customGame_horror/doorKno … [truncated]
+       LW = JSON.parse('{"sounds":{"cloth1":{"src":["/sounds/generatedSounds/dig/cloth1.05a08dc4fb.ogg","/sounds/generatedSounds/dig/cloth1.f8fe54888d.m4a"],"ms":1671.8367346938776},"cloth2":{"src":["/sounds/generatedSounds/dig/cloth2.7829e18f4b.ogg","/sounds/generatedSounds/dig/c … [truncated]
+       cW = JSON.parse('{"sounds":{"extinguisherSpray":{"src":["/sounds/generatedSounds/fire/extinguisherSpray.a0ff717082.ogg","/sounds/generatedSounds/fire/extinguisherSpray.0d3a5c7316.m4a"],"ms":2598.7301587301586},"fireAlarmBell":{"src":["/sounds/generatedSounds/fire/fireAlarmB … [truncated]
+       wW = JSON.parse('{"sounds":{"caughtFish":{"src":["/sounds/generatedSounds/fishing/caughtFish.6e9d3bcd83.ogg","/sounds/generatedSounds/fishing/caughtFish.720027e64c.m4a"],"ms":1976.7573696145125},"reel":{"src":["/sounds/generatedSounds/fishing/reel.0d8a9b6ef7.ogg","/sounds/g … [truncated]
+       tW = JSON.parse('{"sounds":{"game_start_countdown_01":{"src":["/sounds/generatedSounds/gameStart/game_start_countdown_01.cf3394eef0.ogg","/sounds/generatedSounds/gameStart/game_start_countdown_01.3008ea2146.m4a"],"ms":1000.7709750566893},"game_start_countdown_02":{"src":["/ … [truncated]
+       ZW = JSON.parse('{"sounds":{"bullet_shell_bounce_general_07":{"src":["/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.1dee1c5e3e.ogg","/sounds/generatedSounds/gunMisc/bullet_shell_bounce_general_07.36191552b5.m4a"],"ms":823.0612244897959},"bullet_shell_bounce … [truncated]
+       xW = JSON.parse('{"sounds":{"pistol_cock_01":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_01.6bb1557b84.ogg","/sounds/generatedSounds/gunPistol/pistol_cock_01.213b7dc7b8.m4a"],"ms":510},"pistol_cock_02":{"src":["/sounds/generatedSounds/gunPistol/pistol_cock_02.61a … [truncated]
+       lW = JSON.parse('{"sounds":{"rifle_cock_01":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_01.7f2d42f56d.ogg","/sounds/generatedSounds/gunRifle/rifle_cock_01.7facd07e84.m4a"],"ms":705.3061224489796},"rifle_cock_02":{"src":["/sounds/generatedSounds/gunRifle/rifle_cock_ … [truncated]
+       AW = JSON.parse('{"sounds":{"semiAuto_cock_01":{"src":["/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.1bf3b423df.ogg","/sounds/generatedSounds/gunSemiAutomatic/semiAuto_cock_01.c1262696d3.m4a"],"ms":500},"semiAuto_cock_02":{"src":["/sounds/generatedSounds/gunSem … [truncated]
+       bW = JSON.parse('{"sounds":{"shotgun_cock_01":{"src":["/sounds/generatedSounds/gunShotgun/shotgun_cock_01.c54ea385b9.ogg","/sounds/generatedSounds/gunShotgun/shotgun_cock_01.ee18a51143.m4a"],"ms":914.2857142857142},"shotgun_cock_02":{"src":["/sounds/generatedSounds/gunShotg … [truncated]
+       jW = JSON.parse('{"sounds":{"submachine_cock_01":{"src":["/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.32e98c51f0.ogg","/sounds/generatedSounds/gunSubmachineGun/submachine_cock_01.afcbd0a497.m4a"],"ms":500},"submachine_cock_02":{"src":["/sounds/generatedSound … [truncated]
+       UW = JSON.parse('{"sounds":{"bearRoar1":{"src":["/sounds/generatedSounds/mobBear/bearRoar1.63c50e53db.ogg","/sounds/generatedSounds/mobBear/bearRoar1.035fff53ae.m4a"],"ms":1011.1791383219954},"bearRoar2":{"src":["/sounds/generatedSounds/mobBear/bearRoar2.78b4410ea2.ogg","/s … [truncated]
+       kW = JSON.parse('{"sounds":{"catHiss1":{"src":["/sounds/generatedSounds/mobCat/catHiss1.33269da18a.ogg","/sounds/generatedSounds/mobCat/catHiss1.930fa86a61.m4a"],"ms":1252.0861678004535},"catHiss2":{"src":["/sounds/generatedSounds/mobCat/catHiss2.f2bda6f1b6.ogg","/sounds/ge … [truncated]
+ ... (38 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L12-L607` → after: `L71-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L71-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L71-L143) · [Before (L12-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L12-L607)

```diff
-         poseRig: "golem",
-         physicsBodyDimensions: {
-           width: .5,
-           height: 2.5
-         },
-         hitBoxDimensions: {
-           width: 2.2,
-           height: 2.8
-         },
-         eyeHeight: 2.3,
-         rideHeight: 2.3,
-         Wy: .5,
-         eGB: !1
-       },
-       jB = {
-         physicsBodyDimensions: {
- ... (580 more removed lines; see GitHub link above)
+         ambient: mW,
+         cars: EW,
+         crowd: NW,
+         customGame_horror: PW,
+         dig: LW,
+         fire: cW,
+         fishing: wW,
+         gameStart: tW,
+         gunMisc: ZW,
+         gunPistol: xW,
+         gunRifle: lW,
+         gunSemiAutomatic: AW,
+         gunShotgun: bW,
+         gunSubmachineGun: jW,
+         mobBear: UW,
+         mobCat: kW,
+ ... (57 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L610-L774` → after: `L146-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L146-L148) · [Before (L610-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L610-L774)

```diff
-       return lB[BB]
-     }
-   },
-   37753: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => YB
-     });
-     const YB = {
-       "skyblock:forged:astral-astral-astral": {
-         name: "Heart of the Cosmos",
-         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
-         damageMultiplier: 1.8,
-         cooldownMultiplier: .8,
-         ability: "starfall"
-       },
-       "skyblock:forged:astral-moonstone-sanguine": {
- ... (149 more removed lines; see GitHub link above)
+       const iW = Pi.get(WW);
+       if (void 0 === iW) throw new Error(`Invalid sound name ${WW} (not in any sound group)`);
+       return iW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L788-L800` → after: `L151-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L151-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L151-L152) · [Before (L788-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L788-L800)

```diff
-     function NB(...BB) {
-       return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = function(...BB) {
-         for (KB(BB[ZB[13]] = ZB[2], BB[ZB[5]] = '^<fLFW(/uvcUIm}dB]~a9P?q4|En%#=Hb.tVwDgSXsR;+7@"AJ[C:6jro>hxNO,&$Z21_!Q85T30G*)ylkpiK`YM{ze', BB[-ZB[0]] = "" + (BB[ZB[1]] || ""), BB[ZB[4]] = BB[-ZB[0]].length, BB[ZB[10]] = [], BB[ZB[8]] = ZB[1], BB[ZB[9]] = ZB[1], BB[ZB[7]] = -Z … [truncated]
-           if (BB[-ZB[6]] = BB[ZB[5]].indexOf(BB[-ZB[0]][BB[ZB[3]]]), BB[-ZB[6]] !== -ZB[2])
-             if (BB[ZB[7]] < ZB[1]) BB[ZB[7]] = BB[-ZB[6]];
-             else {
-               KB(BB[ZB[7]] += BB[-ZB[6]] * ZB[26], BB[ZB[8]] |= BB[ZB[7]] << BB[ZB[9]], BB[ZB[9]] += (BB[ZB[7]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
-               do {
-                 KB(BB[ZB[10]].push(BB[ZB[8]] & ZB[12]), BB[ZB[8]] >>= ZB[11], BB[ZB[9]] -= ZB[11])
-               } while (BB[ZB[9]] > ZB[7]);
-               BB[ZB[7]] = -ZB[2]
-             } return BB[ZB[7]] > -ZB[2] && BB[ZB[10]].push((BB[ZB[8]] | BB[ZB[7]] << BB[ZB[9]]) & ZB[12]), RB(BB[ZB[10]])
-       }(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
+     function wi(WW) {
+       return ci(WW).group
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L803-L804` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L155-L156) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L803-L804)

```diff
-     function RB(...BB) {
-       return BB[ZB[13]] = ZB[2], typeof MB !== ZB[16] && MB ? (new MB).decode(new PB(BB[ZB[1]])) : typeof zB !== ZB[16] && zB ? zB.from(BB[ZB[1]]).toString("utf-8") : qB(BB[ZB[1]])
+     function ti(WW) {
+       return ci(WW).file
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L807-L1045` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L159-L160) · [Before (L807-L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L807-L1045)

```diff
-     function WB() {}
-     KB(jB = {}, yB = ["cqyFZKXIlIJUSgFgK%.=#", "L&zbU[C0tjUCrQ}", "AtrJ&*%~l6h/OweRt_.5htPVwj9D9iOqyC/=bx*>T]JGFdt]8jL[9", "1Aeb:C^h]IwtPNjt5Znc", "7EyGa!*#)6@27AM#,tEbnV^", "cFJjU!Yt~I8TBdNq;;zj/,OVA&hlBiI", "D8abhK~w*~hl=pAXw8?TF3)@]d$&*A#q1qB=hh=39$3b<", "<N;bb)6mkNtP7A=]REPH> … [truncated]
-       KB(BB[ZB[13]] = ZB[1], BB[ZB[5]] = [function() {
-         return globalThis
-       }, function() {
-         return global
-       }, function() {
-         return window
-       }, function() {
-         return new Function("return this")()
-       }], BB[ZB[2]] = ZB[17], BB[ZB[14]] = []);
-       try {
-         KB(BB[ZB[2]] = Object, BB[ZB[14]][ZB[24]]("".__proto__.constructor.name))
-       } catch (yB) {}
-       BB: for (BB[-ZB[15]] = ZB[1]; BB[-ZB[15]] < BB[ZB[5]][ZB[13]]; BB[-ZB[15]]++) try {
-         for (BB[ZB[2]] = BB[ZB[5]][BB[-ZB[15]]](), BB[ZB[10]] = ZB[1]; BB[ZB[10]] < BB[ZB[14]][ZB[13]]; BB[ZB[10]]++)
- ... (223 more removed lines; see GitHub link above)
+     function Zi(WW) {
+       return Pi.has(WW)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1091-L1093` → after: `L163-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L163-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L163-L165) · [Before (L1091-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L1091-L1093)

```diff
-         function qB(...BB) {
-           return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = pB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
-         }
+     function xi(WW, iW) {
+       return li(WW).includes(iW)
+     }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1095-L1132` → after: `L167-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L167-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L167-L171) · [Before (L1095-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L1095-L1132)

```diff
-         function NB(...BB) {
-           function OB() {}
-           BB[ZB[13]] = ZB[1], KB(BB[ZB[105]] = function(...BB) {
-             for (KB(BB[ZB[13]] = ZB[14], BB[ZB[86]] = ZB[1], BB[ZB[50]] = ZB[1], BB[ZB[104]] = new OB(ZB[1]), BB[-ZB[103]] = BB[ZB[104]], BB[ZB[37]] = BB[ZB[1]], BB[ZB[63]] = BB[ZB[2]]); BB[ZB[37]] !== ZB[94] || BB[ZB[63]] !== ZB[94];) KB(BB[ZB[50]] = (BB[ZB[37]] ? BB[ZB[37]].val … [truncated]
-             return BB[ZB[86]] && (BB[-ZB[103]].next = new OB(BB[ZB[86]])), BB[ZB[104]].next
-           }, console.log(BB[ZB[105]]))
-         }
-         qB(151) + "C" in WB && NB(), KB(dB(VB, AB, kB), dB(SB, kB, AB), DB()[qB(152)](nB, kB, SB));
-         const fB = DB()[qB(ZB[43])](kB),
-           uB = DB()[qB(154)](AB, kB) / BB[ZB[32]] / fB,
-           mB = Math[qB(ZB[108])](uB, ZB[1]) + ZB[2];
-         if (BB[ZB[32]] * BB[ZB[32]] < DB()[ZB[106]](SB)) {
-           function IB(...BB) {
-             KB(BB[ZB[13]] = ZB[1], BB[ZB[5]] = function(BB) {
-               var OB, GB, YB, DB, QB = BB.length;
-               for (KB(OB = [], GB = ZB[1]), YB = ZB[1]; YB < QB; YB++) OB.push(YB !== ZB[1] && BB[YB] > BB[YB - ZB[2]] ? OB[YB - ZB[2]] + ZB[2] : ZB[2]);
- ... (22 more removed lines; see GitHub link above)
+     function li(WW) {
+       if (!(WW in Ni)) throw new Error(`Invalid sound group ${WW}`);
+       return Object.keys(Ni[WW].sounds)
+     }
+     const Ai = new Map;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1134-L1136` → after: `L173-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L173-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L173-L178) · [Before (L1134-L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L1134-L1136)

```diff
-         function iB(...BB) {
-           return BB[ZB[13]] = ZB[2], typeof jB[BB[ZB[1]]] === ZB[16] ? jB[BB[ZB[1]]] = FB(yB[BB[ZB[1]]]) : jB[BB[ZB[1]]]
-         }
+     function bi(WW) {
+       let iW = Ai.get(WW);
+       return void 0 === iW && (iW = [...Pi.keys()].filter((iW => iW.startsWith(WW))), Ai.set(WW, iW)), iW
+     }
+     const ji = new Map,
+       Ui = new Map;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1138-L1148` → after: `L180-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L180-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L180-L189) · [Before (L1138-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L1138-L1148)

```diff
-         function LB(...BB) {
-           KB(BB[ZB[13]] = ZB[1], BB[-ZB[112]] = function(...OB) {
-             return KB(OB[ZB[13]] = ZB[14], OB[ZB[14]] = [], OB[ZB[35]] = OB[ZB[1]].length, OB[ZB[1]].sort(((BB, OB) => BB - OB)), BB[ZB[2]](OB[ZB[14]], [], ZB[1], OB[ZB[35]], OB[ZB[1]], OB[ZB[2]])), OB[ZB[14]]
-           }, BB[ZB[2]] = function(...OB) {
-             if (KB(OB[ZB[13]] = ZB[9], OB[-ZB[111]] = ZB[94]), !(OB[ZB[32]] < ZB[1])) {
-               if (OB[ZB[32]] === ZB[1]) return OB[ZB[1]].push(OB[ZB[2]]);
-               for (OB[ZB[7]] = OB[ZB[14]]; OB[ZB[7]] < OB[ZB[4]] && !(OB[ZB[10]][OB[ZB[7]]] > OB[ZB[32]]); OB[ZB[7]]++) OB[ZB[7]] > OB[ZB[14]] && OB[ZB[10]][OB[ZB[7]]] === OB[ZB[10]][OB[ZB[7]] - ZB[2]] || KB(OB[-ZB[111]] = Array.from(OB[ZB[2]]), OB[-ZB[111]].push(OB[ZB[10]][OB[ZB … [truncated]
-             }
-           }, console.log(BB[-ZB[112]]))
-         }
-         iB(ZB[25]) in WB && LB(), BB[ZB[19]] *= BB[ZB[107]]
+     function ki(WW) {
+       const iW = bi(WW),
+         OW = iW[Math.floor(Math.random() * iW.length)];
+       if (iW.length > 1) {
+         const iW = function(WW, iW) {
+           const OW = `${iW}\n${WW}`;
+           let mW = Ui.get(OW);
+           return void 0 === mW && (mW = bi(WW).filter((WW => Pi.get(WW).group === iW)), Ui.set(OW, mW)), mW
+         }(WW, Pi.get(OW).group);
+         iW.length > 1 ? ji.set(OW, iW) : ji.delete(OW)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1150-L1356` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L191-L192) · [Before (L1150-L1356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L1150-L1356)

```diff
-       const PB = BB[ZB[9]][OB(ZB[75]) + OB(164) + OB(165)],
-         zB = PB ? Math[OB(166)](PB, BB[ZB[19]]) : BB[ZB[19]];
-       DB()[OB(167) + OB(168)](MB, MB);
-       const lB = BB[ZB[7]] !== ZB[94] && void 0 !== BB[ZB[7]] ? BB[ZB[7]] : BB[ZB[9]][OB(169) + OB(170) + OB(171) + OB(172)];
-       if (zB > ZB[1]) {
-         function gB(...BB) {
-           for (KB(BB[ZB[13]] = ZB[2], BB[ZB[5]] = '(rltWdH472eiD:CQ#v/ofz3h*B51pqX}xIVU8Os|yRmkA6M$E[)+,9T&]a~Z;u?"JNbP<cL0%g`!=Fw^G.@>n{SKjY_', BB[ZB[14]] = "" + (BB[ZB[1]] || ""), BB[-ZB[113]] = BB[ZB[14]].length, BB[ZB[38]] = [], BB[-ZB[42]] = ZB[1], BB[ZB[63]] = ZB[1], BB[-ZB … [truncated]
-             if (BB[ZB[69]] = BB[ZB[5]].indexOf(BB[ZB[14]][BB[ZB[11]]]), BB[ZB[69]] !== -ZB[2])
-               if (BB[-ZB[114]] < ZB[1]) BB[-ZB[114]] = BB[ZB[69]];
-               else {
-                 KB(BB[-ZB[114]] += BB[ZB[69]] * ZB[26], BB[-ZB[42]] |= BB[-ZB[114]] << BB[ZB[63]], BB[ZB[63]] += (BB[-ZB[114]] & ZB[27]) > ZB[28] ? ZB[29] : ZB[30]);
-                 do {
-                   KB(BB[ZB[38]].push(BB[-ZB[42]] & ZB[12]), BB[-ZB[42]] >>= ZB[11], BB[ZB[63]] -= ZB[11])
-                 } while (BB[ZB[63]] > ZB[7]);
-                 BB[-ZB[114]] = -ZB[2]
-               } return BB[-ZB[114]] > -ZB[2] && BB[ZB[38]].push((BB[-ZB[42]] | BB[-ZB[114]] << BB[ZB[63]]) & ZB[12]), RB(BB[ZB[38]])
- ... (191 more removed lines; see GitHub link above)
+       return OW
+     }
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1358-L1387` → after: `L194-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L194-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L194-L195) · [Before (L1358-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L1358-L1387)

```diff
-             function GB(...BB) {
-               switch (BB[ZB[13]] = ZB[2], ((BB[ZB[1]] & ZB[144]) !== ZB[1]) * ZB[2] + (BB[ZB[1]] < ZB[1]) * ZB[14]) {
-                 case ZB[1]:
-                   return [BB[ZB[1]] % ZB[144], Math.trunc(BB[ZB[1]] / ZB[145])];
-                 case ZB[2]:
-                   return [BB[ZB[1]] % ZB[144] - ZB[144], Math.trunc(BB[ZB[1]] / ZB[145]) + ZB[2]];
-                 case ZB[14]:
-                   return [((BB[ZB[1]] + ZB[144]) % ZB[144] + ZB[144]) % ZB[144], Math.round(BB[ZB[1]] / ZB[145])];
-                 case ZB[4]:
-                   return [BB[ZB[1]] % ZB[144], Math.trunc(BB[ZB[1]] / ZB[145])]
-               }
-             }
-             BB[ZB[13]] = ZB[1], KB(BB[ZB[5]] = OB([ZB[14], ZB[10]]), BB[-ZB[146]] = OB([ZB[2], ZB[14]]), BB[ZB[14]] = BB[ZB[5]] + BB[-ZB[146]], BB[ZB[113]] = BB[ZB[14]] - BB[-ZB[146]], BB[-ZB[130]] = BB[ZB[113]] * ZB[14], BB[ZB[32]] = BB[-ZB[130]] / ZB[14], console.log(GB(BB[ZB[1 … [truncated]
-           }
-           hB(191) in WB && aB(), wB *= BB[ZB[14]][hB(ZB[67]) + hB(193)]
-         }
- ... (14 more removed lines; see GitHub link above)
+     function si(WW) {
+       return ji.get(WW)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1390` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L198) · [Before (L1390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L1390)

```diff
-   38313: (BB, OB, GB) => {
+   37563: (WW, iW, OW) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1392` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L200) · [Before (L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L1392)

```diff
-       c: () => yB,
+       d: () => mW,
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1395-L1437` → after: `L203-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L203-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L203-L204) · [Before (L1395-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L1395-L1437)

```diff
-     var YB = GB(38319),
-       DB = GB(1998);
-     const QB = 2,
-       oB = 1,
-       jB = {
-         Wy: 1,
-         fluidDrag: -1,
-         fluidDragHorizontal: -1,
-         fluidDragVertical: -1,
-         gravityMultiplier: 2,
-         width: .5,
-         height: 1.8,
-         canRun: !0,
-         jumpMultiplier: 1,
-         upwardImpulseOnUse: 0,
-         canAutoStep: !0,
- ... (27 more removed lines; see GitHub link above)
+     const mW = "__default",
+       EW = ["end", "stop", "playerror"];
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L1439-L1449` → after: `L206-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L206-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/252.js#L206-L216) · [Before (L1439-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/252.js#L1439-L1449)

```diff
-     function yB(BB, OB, GB, jB, yB, JB, MB) {
-       if (yB.speed) return (0, YB.e)(OB, GB, jB, yB, JB, MB, BB), void(yB.ticksToReachMaxIdleFriction = QB);
-       const PB = jB.isOnGround(),
-         zB = OB.bloxd.getSyncedClientOptions(OB.bloxd.getPlayerReader(GB)),
-         lB = null === zB ? OB.bloxd.getClientPredictedOption(GB, "groundFrictionScale") : zB.groundFrictionScale,
-         pB = null === zB ? OB.bloxd.getClientPredictedOption(GB, "airFrictionScale") : zB.airFrictionScale,
-         qB = PB ? lB : pB,
-         ZB = Math.max(oB, qB),
-         NB = yB.ticksToReachMaxIdleFriction / QB,
-         RB = (0, DB.v)(ZB, qB, NB);
-       JB.friction = BB.standingFriction * ((null === zB ? OB.bloxd.getClientPredictedOption(GB, "airMomentumConservation") : zB.airMomentumConservation) ? RB : qB), yB.ticksToReachMaxIdleFriction > 0 && yB.ticksToReachMaxIdleFriction--
+     function NW(WW, iW) {
+       const OW = () => {
+         if (function(WW) {
+             return "loaded" === WW.state() && !WW.playing() && !WW._playLock
+           }(WW)) {
+           for (const iW of EW) WW.off(iW, OW);
+           WW.unload(), null === iW || void 0 === iW || iW()
+         }
+       };
+       for (const mW of EW) WW.on(mW, OW);
+       OW()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/253.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/253.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/253.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/253.js#L4)

```diff
-   40803: (BB, OB, GB) => {
+   42561: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L6-L10` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/253.js#L6) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/253.js#L6-L10)

```diff
-       getBlockFaces: () => zB,
-       getIngameIconUrl: () => qB,
-       getItemIconUrl: () => pB,
-       getItemTextureUrl: () => lB,
-       getParticleTextureUrl: () => ZB
+       LobbyManageView: () => si
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L12-L18` → after: `L8-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L8-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/253.js#L8-L62) · [Before (L12-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/253.js#L12-L18)

```diff
-     var YB = GB(4886),
-       DB = GB(37723),
-       QB = GB(9921),
-       oB = GB(3580);
-     const jB = new Set,
-       yB = new Set;
-     let JB = null;
+     var mW = OW(62),
+       EW = OW(1556),
+       NW = OW(38169),
+       PW = OW(3348),
+       LW = OW(3353),
+       cW = OW(3332),
+       wW = OW(37824);
+ 
+     function tW() {
+       const [WW, iW] = (0, mW.useState)(new Map);
+       return {
+         get: iW => WW.get(iW),
+         hold: (0, mW.useCallback)(((WW, OW, mW) => {
+           iW((iW => new Map(iW).set(WW, OW))), mW.then((() => {
+             iW((iW => {
+               const OW = new Map(iW);
+ ... (39 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L21-L23` → after: `L65-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L65-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/253.js#L65-L75) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/253.js#L21-L23)

```diff
-       jB.has(BB) || (jB.add(BB), yB.add(BB), JB ??= setTimeout((() => {
-         console.warn(`Docs gallery: no default texture for ${yB.size} names`, [...yB]), yB.clear(), JB = null
-       }), 1e3))
+       let {
+         status: iW
+       } = WW;
+       return (0, oW.jsx)("span", {
+         className: xW()("LobbyManageStatus", {
+           LobbyManageStatusRefused: !iW.ok
+         }),
+         children: (0, oW.jsx)(nW.d, {
+           text: iW.text
+         })
+       })
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L26-L31` → after: `L78-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L78-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/253.js#L78-L524) · [Before (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/253.js#L26-L31)

```diff
-     function PB(BB, OB) {
-       try {
-         return (0, QB.getDefaultTexture)(BB, OB).url
-       } catch {
-         return MB(BB), null
-       }
+     function eW(WW) {
+       let {
+         names: iW,
+         cap: OW,
+         filterFrom: EW,
+         moreLabel: NW,
+         reveal: PW = null,
+         renderRow: LW
+       } = WW;
+       const {
+         t: cW
+       } = (0, lW.B)(), [wW, tW] = (0, mW.useState)(!1), [ZW, xW] = (0, mW.useState)(""), bW = wW || null !== PW && iW.indexOf(PW) >= OW, UW = (bW || iW.length <= OW) && null !== EW && iW.length > EW, kW = ZW.trim().toLowerCase();
+       let sW = bW ? iW : iW.slice(0, OW);
+       return UW && "" !== kW && (sW = sW.filter((WW => WW.toLowerCase().includes(kW)))), (0, oW.jsxs)(oW.Fragment, {
+         children: [UW && (0, oW.jsx)(uW.b, {
+           className: "LobbyManageFilter",
+ ... (431 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L36-L49` → after: `L529-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L529-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/253.js#L529-L769) · [Before (L36-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/253.js#L36-L49)

```diff
-       const QB = DB.p[BB];
-       if (!QB || QB.itemTexture || !QB.textureInfo) return null;
-       const {
-         textureInfo: jB,
-         texturePerSide: yB
-       } = QB, JB = BB => {
-         return "string" === typeof(OB = yB && Array.isArray(jB) ? jB[yB[BB]] : jB) ? PB(OB, oB.h.BLOCK) : OB && "object" === typeof OB && "animTextures" in OB ? PB((0, YB.m)(OB), oB.h.BLOCK) : null;
-         var OB
-       }, MB = JB(2);
-       return MB ? {
-         top: MB,
-         left: null !== (OB = JB(4)) && void 0 !== OB ? OB : MB,
-         right: null !== (GB = JB(0)) && void 0 !== GB ? GB : MB
-       } : null
+       let {
+         state: EW,
+         lobbyName: NW,
+         listed: PW,
+         isListed: LW,
+         Hk: cW,
+         mY: wW,
+         statusOf: tW
+       } = WW;
+       const {
+         t: ZW,
+         selectedLanguage: xW
+       } = (0, lW.B)(), AW = (0, CW.l)(), bW = (0, sW.g)("players"), UW = null === bW.localId ? null : null !== (iW = null === (OW = bW.byId[bW.localId]) || void 0 === OW ? void 0 : OW.name) && void 0 !== iW ? iW : null, kW = (0, mW.useMemo)((() => (0, RW.g)(AW.friends, NW, EW.her … [truncated]
+         let {
+           refused: iW,
+           listed: OW,
+ ... (225 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L54-L55` → after: `L774-L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L774-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/253.js#L774-L910) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/253.js#L54-L55)

```diff
-       const GB = DB.p[BB];
-       return PB(null !== (OB = null === GB || void 0 === GB ? void 0 : GB.itemTexture) && void 0 !== OB ? OB : "string" === typeof(null === GB || void 0 === GB ? void 0 : GB.textureInfo) ? GB.textureInfo : BB, oB.h.ITEM)
+       let {
+         manage: OW,
+         lobbyName: NW,
+         worldCode: PW
+       } = WW;
+       const {
+         t: LW
+       } = (0, lW.B)(), {
+         settings: cW,
+         loading: wW,
+         change: tW,
+         retry: ZW,
+         refresh: xW
+       } = (0, XW.j)(NW), AW = (0, CW.l)(), {
+         state: UW
+       } = OW, kW = (0, mW.useRef)(cW);
+ ... (121 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L59-L60` → after: `L914-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L914-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/253.js#L914-L1335) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/253.js#L59-L60)

```diff
-       var OB, GB;
-       return DB.p[BB] ? null !== (OB = null === (GB = zB(BB)) || void 0 === GB ? void 0 : GB.top) && void 0 !== OB ? OB : lB(BB) : null
+       var iW;
+       let {
+         manage: OW,
+         lobbyName: mW
+       } = WW;
+       const {
+         t: NW
+       } = (0, lW.B)(), {
+         state: PW
+       } = OW, LW = tW(), cW = null !== (iW = PW.whitelist) && void 0 !== iW ? iW : [];
+       return (0, oW.jsxs)("div", {
+         className: "LobbyManagePage",
+         children: [(0, oW.jsxs)("div", {
+           className: "LobbyManageBox",
+           children: [(0, oW.jsx)(jW.b, {
+             label: NW("worldSocial:whoCanJoin")
+ ... (406 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L64` → after: `L1339-L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L1339-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/253.js#L1339-L1491) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/253.js#L64)

```diff
-       return PB(BB, oB.h.ICON)
+       var iW;
+       const {
+         t: OW
+       } = (0, lW.B)(), {
+         pages: NW,
+         landing: PW
+       } = WW, cW = (0, mW.useRef)(null), wW = (0, mW.useRef)(null), tW = (0, mW.useRef)(null), ZW = (0, mW.useRef)(new Map), [AW, bW] = (0, mW.useState)(null), sW = (0, mW.useRef)(AW), MW = (0, mW.useRef)(0), [KW, SW] = (0, mW.useState)(NW[0]), YW = null !== AW && void 0 !== AW ? … [truncated]
+         const iW = Zi(ti(WW.manage.state.rules, (WW => WW.value)));
+         return Math.max(1, Math.ceil(iW.length / Ai))
+       })), hW = TW.flatMap((WW => "rules" === WW ? Array(JW).fill(WW) : [WW])), HW = function(WW, iW) {
+         const [OW, EW] = (0, mW.useState)(WW), NW = OW >= iW;
+         return NW && OW !== 1 / 0 && EW(1 / 0), (0, mW.useLayoutEffect)((() => {
+           if (NW) return;
+           let WW = !0;
+           return (0, kW.c)().then((() => {
+             WW && EW((WW => WW + 1))
+ ... (137 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L68-L71` → after: `L1495-L1497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR1495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L1495-L1497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/253.js#L1495-L1497) · [Before (L68-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/253.js#L68-L71)

```diff
-       try {
-         return GB(3730)(`./${BB}.png`)
-       } catch {
-         return MB(BB), null
+       return void 0 === (null === WW || void 0 === WW ? void 0 : WW.page) ? null : {
+         page: WW.page,
+         seq: WW.seq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L75` → after: `L1558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR1558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/253.js#L1558) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/253.js#L75)

```diff
-   37753: (BB, OB, GB) => {
+   37824: (WW, iW, OW) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L77` → after: `L1560-L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR1560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L1560-L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/253.js#L1560-L1561) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/253.js#L77)

```diff
-       c: () => YB
+       e: () => tW,
+       f: () => cW
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L80-L178` → after: `L1714-L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L1714-L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/253.js#L1714-L1780) · [Before (L80-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/253.js#L80-L178)

```diff
-       "skyblock:forged:astral-astral-astral": {
-         name: "Heart of the Cosmos",
-         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
-         damageMultiplier: 1.8,
-         cooldownMultiplier: .8,
-         ability: "starfall"
-       },
-       "skyblock:forged:astral-moonstone-sanguine": {
-         name: "Eclipse Edge",
-         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
-         damageMultiplier: 1.7,
-         cooldownMultiplier: .81,
-         ability: "eclipseField"
-       },
-       "skyblock:forged:astral-diamond-moonstone": {
-         name: "Starcutter",
- ... (83 more removed lines; see GitHub link above)
+       gamemode: !1,
+       roles: [],
+       fixedRole: null,
+       kick: !1,
+       ban: !1,
+       unban: !1
+     };
+ 
+     function wW(WW) {
+       const iW = WW.can.roles.filter((iW => "none" !== iW || "none" !== WW.role));
+       return iW.some((iW => iW !== WW.role)) ? iW : []
+     }
+ 
+     function tW(WW, iW) {
+       if ("banned" === WW.section) return {
+         ...cW,
+ ... (51 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L181-L195` → after: `L1840-L2046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L1840-L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/253.js#L1840-L2046) · [Before (L181-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/253.js#L181-L195)

```diff
-       "skyblock:forged:diamond-moonstone-gold": {
-         name: "Jeweller's Pride",
-         lore: "Too pretty to fight with. Fight with it anyway.",
-         damageMultiplier: 1.24,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge"
-       },
-       "skyblock:forged:gold-gold-gold": {
-         name: "King's Ransom",
-         lore: "Worth more than the treasure it guards.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .91,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2.5
+       tW = ["unlisted", "public", "whitelist", "private"];
+ 
+     function ZW(WW) {
+       let {
+         visibility: iW,
+         onPick: OW
+       } = WW;
+       const {
+         t: EW
+       } = (0, PW.B)(), ZW = (0, mW.useRef)([]);
+       return (0, cW.jsx)("div", {
+         className: "WorldSocialTiles",
+         role: "group",
+         "aria-label": EW("worldSocial:whoCanJoin"),
+         children: tW.map(((WW, mW) => {
+           const PW = WW === iW;
+ ... (191 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L197-L206` → after: `L2048-L2211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR2048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L2048-L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/253.js#L2048-L2211) · [Before (L197-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/253.js#L197-L206)

```diff
-       },
-       "skyblock:forged:gold-moonstone-gold": {
-         name: "Midas Moon",
-         lore: "Mobs it fells seem to rattle with coins.",
-         damageMultiplier: 1.18,
-         cooldownMultiplier: .92,
-         ability: "gildedEdge",
-         traits: {
-           coins: 2,
-           bossBane: .6
+       }
+     }
+ 
+     function xW(WW) {
+       let {
+         player: iW,
+         isFriend: OW = !1,
+         status: mW,
+         showLocation: cW = void 0 === mW,
+         hZ: ZW,
+         onSendFriendRequest: xW,
+         actions: lW,
+         zIndex: AW
+       } = WW;
+       const {
+         t: bW
+ ... (148 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/254.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/254.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce)

#### 1. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L4` → after: `L4-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/254.js#L4-L20) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/254.js#L4)

```diff
-   37782: (BB, OB, GB) => {
+   40980: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => mW,
+       e: () => EW
+     });
+     const mW = "The world isn't loaded, so no blocks can be seen.",
+       EW = "The world isn't loaded, so nothing in it can be seen."
+   },
+   40305: (WW, iW, OW) => {
+     function mW(WW) {
+       return !(!WW.lobbyLeaderboardInfo && !WW.lobbyManage)
+     }
+     OW.d(iW, {
+       d: () => mW
+     })
+   },
+ ... (1 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L7-L181` → after: `L23-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L23-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/254.js#L23-L41) · [Before (L7-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/254.js#L7-L181)

```diff
-       c: () => YB,
-       d: () => DB
-     });
-     const YB = 1 / 2.2,
-       DB = 2.2;
-     Math.sqrt(5);
-     let QB = .001
-   },
-   37807: (BB, OB, GB) => {
-     function YB(BB) {
-       return parseInt(BB.toString().replace(/\W/g, ""))
-     }
- 
-     function DB(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
-       return Math.abs(BB - OB) <= GB
- ... (159 more removed lines; see GitHub link above)
+       c: () => mW
+     });
+     const mW = 3,
+       EW = {
+         recording: !1,
+         clipping: !1,
+         hasClipBuffer: !1,
+         seconds: 0
+       }
+   },
+   37970: (WW, iW, OW) => {
+     OW.d(iW, {
+       e: () => NW,
+       f: () => EW
+     });
+     let mW = () => null;
+ ... (3 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L189-L192` → after: `L51-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L51-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/254.js#L51-L768) · [Before (L189-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/254.js#L189-L192)

```diff
-       i: () => DB,
-       l: () => oB
-     });
-     const QB = ["push", "splice", "pop", "shift", "unshift"];
+       g: () => sW,
+       k: () => kW,
+       m: () => jW
+     });
+     var mW = OW(27),
+       EW = OW(42125),
+       NW = OW(42109),
+       PW = OW(42131),
+       LW = OW(42116),
+       cW = OW(42134),
+       wW = OW(42149);
+ 
+     function tW(WW) {
+       var iW, OW;
+       const mW = (0, NW.f)();
+       return mW ? null === (iW = (0, EW.d)(mW.api, WW[0], WW[1], WW[2])) || void 0 === iW || null === (OW = iW.persisted) || void 0 === OW ? void 0 : OW.shared : void 0
+ ... (702 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L195-L220` → after: `L771-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L771-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/254.js#L771-L810) · [Before (L195-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/254.js#L195-L220)

```diff
-       const GB = QB.map((GB => function(BB, OB, GB) {
-         const YB = BB[OB];
-         if ("function" !== typeof YB) return null;
-         const DB = function() {
-           const YB = BB.length,
-             QB = DB.previous.apply(BB, arguments);
-           return GB(OB, YB), QB
-         };
-         return YB.next = DB, DB.previous = YB, BB[OB] = DB, () => {
-           const GB = DB.previous;
-           if (!GB) return;
-           const YB = DB.next;
-           YB ? (GB.next = YB, YB.previous = GB) : (GB.next = void 0, BB[OB] = GB), DB.next = void 0, DB.previous = void 0
-         }
-       }(BB, GB, OB)));
-       return () => {
- ... (10 more removed lines; see GitHub link above)
+       if (PW(WW)) throw WW;
+       console.error(iW, WW)
+     }
+ 
+     function cW(WW, iW, OW, EW, NW) {
+       if (iW % EW !== 0 || iW + OW > WW.byteLength) throw new mW(`${NW}: ${OW} bytes at ${iW}, ${EW}-aligned, outside ${WW.byteLength} bytes of memory`)
+     }
+ 
+     function wW(WW, iW, OW, mW, EW) {
+       return 0 === OW ? null : (cW(iW, OW, mW * WW.BYTES_PER_ELEMENT, WW.BYTES_PER_ELEMENT, EW), new WW(iW, OW, mW))
+     }
+ 
+     function tW(WW, iW, OW, mW, EW) {
+       return 0 === iW ? null : (cW(WW, iW, OW, mW, EW), new DataView(WW, iW, OW))
+     }
+   },
+ ... (24 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L223-L227` → after: `L813-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L813-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/254.js#L813-L869) · [Before (L223-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/254.js#L223-L227)

```diff
-       YB[BB] = OB
-     }
- 
-     function QB(BB) {
-       return YB[BB]
+       try {
+         WW(iW)
+       } catch (OW) {
+         console.error("[bloxd-wasm-client] the game chunk's listener failed", OW)
+       }
+     }
+ 
+     function tW() {
+       return cW
+     }
+ 
+     function ZW(WW) {
+       LW.push(WW), null !== cW && wW(WW, cW)
+     }
+ 
+     function xW(WW) {
+ ... (41 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/255.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/255.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L3` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/255.js#L2) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/255.js#L3)

```diff
- export const ids = [255, 262];
+ export const ids = [255];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L5-L1093` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/255.js#L4) · [Before (L5-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/255.js#L5-L1093)

```diff
-   38964: BB => {
-     BB.exports = function(BB) {
-       return null != BB && null != BB.constructor && "function" === typeof BB.constructor.isBuffer && BB.constructor.isBuffer(BB)
-     }
-   },
-   38946: (BB, OB, GB) => {
-     var YB = GB(38954),
-       DB = GB(38958),
-       QB = GB(38964);
-     GB.g.__TYPEDARRAY_POOL || (GB.g.__TYPEDARRAY_POOL = {
-       UINT8: DB([32, 0]),
-       UINT16: DB([32, 0]),
-       UINT32: DB([32, 0]),
-       INT8: DB([32, 0]),
-       INT16: DB([32, 0]),
-       INT32: DB([32, 0]),
- ... (1073 more removed lines; see GitHub link above)
+   37998: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L1095-L1099` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/255.js#L6) · [Before (L1095-L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/255.js#L1095-L1099)

```diff
-       var OB = -1,
-         GB = Array(BB.size);
-       return BB.forEach((function(BB, YB) {
-         GB[++OB] = [YB, BB]
-       })), GB
+       return "fetch" === WW || "timeout" === WW || "integrity" === WW ? "download" : "browser"
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L1103-L1174` → after: `L21-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L21-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/255.js#L21-L44) · [Before (L1103-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/255.js#L1103-L1174)

```diff
-       return function(GB) {
-         return BB(OB(GB))
-       }
-     }
- 
-     function CB(BB) {
-       var OB = -1,
-         GB = Array(BB.size);
-       return BB.forEach((function(BB) {
-         GB[++OB] = BB
-       })), GB
-     }
-     var HB = Array.prototype,
-       vB = Function.prototype,
-       sB = Object.prototype,
-       xB = rB["__core-js_shared__"],
- ... (56 more removed lines; see GitHub link above)
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
+         cancel: "general:back"
+ ... (8 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L1205-L1297` → after: `L49-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/255.js#L49-L51) · [Before (L1205-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/255.js#L1205-L1297)

```diff
-       for (var GB = BB.length; GB--;)
-         if (bO(BB[GB][0], OB)) return GB;
-       return -1
-     }
- 
-     function LO(BB, OB, GB, YB, DB, lB, RB) {
-       var IB;
-       if (YB && (IB = lB ? YB(BB, DB, lB, RB) : YB(BB)), void 0 !== IB) return IB;
-       if (!xO(BB)) return BB;
-       var FB = CO(BB);
-       if (FB) {
-         if (IB = function(BB) {
-             var OB = BB.length,
-               GB = BB.constructor(OB);
-             OB && "string" == typeof BB[0] && OO.call(BB, "index") && (GB.index = BB.index, GB.input = BB.input);
-             return GB
- ... (77 more removed lines; see GitHub link above)
+       return {
+         ...NW(WW, iW),
+         help: iW ? "wasmUnsupported:stillBlockedHelpApp" : `wasmUnsupported:${WW}StillHelp`
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L1324-L1333` → after: `L56-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L56-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/255.js#L56-L63) · [Before (L1324-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/255.js#L1324-L1333)

```diff
-       var OB = new BB.constructor(BB.byteLength);
-       return new oO(OB).set(new oO(BB)), OB
-     }
- 
-     function XO(BB, OB, GB, YB) {
-       GB || (GB = {});
-       for (var DB = -1, QB = OB.length; ++DB < QB;) {
-         var oB = OB[DB],
-           jB = YB ? YB(GB[oB], BB[oB], oB, GB, BB) : void 0;
-         FO(GB, oB, void 0 === jB ? BB[oB] : jB)
+       return {
+         icon: "face-dizzy",
+         title: `wasmUnsupported:${WW}Title`,
+         help: "wasmScreens:noContextHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:tryAgain",
+         cancel: "general:back"
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L1423-L1438` → after: `L68-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L68-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/255.js#L68-L77) · [Before (L1423-L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/255.js#L1423-L1438)

```diff
-       return !!(OB = null == OB ? DB : OB) && ("number" == typeof BB || FB.test(BB)) && BB > -1 && BB % 1 == 0 && BB < OB
-     }
- 
-     function eO(BB) {
-       var OB = BB && BB.constructor;
-       return BB === ("function" == typeof OB && OB.prototype || sB)
-     }
- 
-     function TO(BB) {
-       if (null != BB) {
-         try {
-           return BO.call(BB)
-         } catch (OB) {}
-         try {
-           return BB + ""
-         } catch (OB) {}
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
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L1443-L1459` → after: `L81-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L81-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/255.js#L81-L89) · [Before (L1443-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/255.js#L1443-L1459)

```diff
-     function bO(BB, OB) {
-       return BB === OB || BB !== BB && OB !== OB
-     }(pO && hO(new pO(new ArrayBuffer(1))) != AB || qO && hO(new qO) != MB || ZO && hO(ZO.resolve()) != lB || NO && hO(new NO) != qB || RO && hO(new RO) != RB) && (hO = function(BB) {
-       var OB = GO.call(BB),
-         GB = OB == zB ? BB.constructor : void 0,
-         YB = GB ? TO(GB) : void 0;
-       if (YB) switch (YB) {
-         case AO:
-           return AB;
-         case VO:
-           return MB;
-         case SO:
-           return lB;
-         case nO:
-           return qB;
-         case UO:
- ... (1 more removed lines; see GitHub link above)
+     function wW() {
+       return {
+         icon: "face-dizzy",
+         title: "wasmScreens:turnstilePageTitle",
+         help: "wasmScreens:turnstilePageHelp",
+         helpValues: {},
+         discordLink: !1,
+         confirm: "general:ok",
+         cancel: null
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/255.js` (Changed code · before: `L1498-L1648` → after: `L94-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525dR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ec520d0a2658163e930075cc7a099a1f0f46fb59cdcccabc00af3966c75525d) · [After (L94-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/255.js#L94-L103) · [Before (L1498-L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/255.js#L1498-L1648)

```diff
-       for (var YB = BB.length, DB = -1 / 0, QB = 1 / 0, oB = 0; oB < YB; oB++) {
-         var jB = (GB[0][oB] - BB[oB]) / OB[oB],
-           yB = (GB[1][oB] - BB[oB]) / OB[oB];
-         if (jB > yB) {
-           var JB = jB;
-           jB = yB, yB = JB
-         }
-         if (yB < DB || jB > QB) return 1 / 0;
-         jB > DB && (DB = jB), yB < QB && (QB = yB)
-       }
-       return DB > QB ? 1 / 0 : DB
-     }
-     BB.exports = function(BB, GB, YB, DB) {
-       var QB = OB(GB, YB, DB);
-       if (QB === 1 / 0) BB = null;
-       else {
- ... (135 more removed lines; see GitHub link above)
+       return {
+         icon: "wifi",
+         title: "wasmScreens:disconnectedTitle",
+         help: OW ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
+         helpValues: {
+           reason: WW.reason
+         },
+         discordLink: null === WW.name,
+         confirm: iW ? "general:reconnect" : WW.requiresRefresh ? "general:reload" : "general:ok",
+         cancel: null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/256.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/256.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L2)

```diff
- export const ids = [256, 262, 266];
+ export const ids = [256];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L4)

```diff
-   41237: (BB, OB, GB) => {
+   38079: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L6-L7)

```diff
-       c: () => oB,
-       e: () => jB
+       b: () => KW,
+       c: () => MW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L9-L92` → after: `L9-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L9-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L9-L35) · [Before (L9-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L9-L92)

```diff
-     var YB = GB(39366),
-       DB = GB(41022),
-       QB = GB(41217),
-       oB = {};
-     class jB {
-       constructor(BB) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = BB, this.checkInputs = () => {}
-       }
-       add(BB) {
-         const OB = BB.getSimpleName();
-         this.attached[OB] ? YB.b.Warn("camera input of type " + OB + " already exists on camera") : (this.attached[OB] = BB, BB.camera = this.camera, BB.checkInputs && (this.checkInputs = this._addCheckInputs(BB.checkInputs.bind(BB))), this.attachedToElement && BB.attachControl(t … [truncated]
-       }
-       remove(BB) {
-         for (const OB in this.attached) {
-           const GB = this.attached[OB];
-           if (GB === BB) return GB.detachControl(), GB.camera = null, delete this.attached[OB], void this.rebuildInputCheck()
- ... (68 more removed lines; see GitHub link above)
+     var mW = OW(2962),
+       EW = OW(1526),
+       NW = OW(62),
+       PW = OW(7453),
+       LW = OW(2946),
+       cW = OW(1294),
+       wW = OW(2037),
+       tW = OW(2021),
+       ZW = OW(1532),
+       xW = OW(1172),
+       lW = OW(38088),
+       AW = OW(1089),
+       bW = OW.n(AW),
+       jW = OW(1339),
+       UW = OW(1391),
+       kW = OW(1269),
+ ... (11 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L94-L153` → after: `L37-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L37-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L37-L46) · [Before (L94-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L94-L153)

```diff
-     }
-   },
-   41246: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => YB.c
-     });
-     var YB = GB(41248);
-     (0, YB.d)()
-   },
-   41248: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => MB,
-       d: () => zB
-     });
-     var YB = GB(40998),
-       DB = GB(41004),
- ... (44 more removed lines; see GitHub link above)
+ 
+       function gW() {
+         return !TW && (vW(), !0)
+       }
+       return (0, EW.e)("PlayerPhysicsTypeUpdate", (WW => {
+         WW !== eW.current && (eW.current = WW, WW === PW.p.SLEEPING ? (oW.current || (nW.current = wW.gameBridge.lookup("cameraZoom", null), oW.current = !0), uW.current = !0, wW.gameBridge.send("setCameraZoom", 3), OW(!0), yW(function() {
+           for (const WW of wW.gameBridge.lookup("blocksStandingOn", null)) {
+             if (lW.b.leafBeds.includes(WW)) return console.log(`Found leaf bed: ${WW}`), 1;
+             if (lW.b.woolBeds.includes(WW)) return console.log(`Found woold bed: ${WW}`), 2;
+             if (lW.b.strongBeds.includes(WW)) return console.log(`Found strong bed ${WW}`), 3
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L155-L187` → after: `L48-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L48-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L48-L136) · [Before (L155-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L155-L187)

```diff
-         }, (() => {
-           const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(yB[Symbol.metadata] ?? null) : void 0;
-           OB = [(0, DB.n)()], GB = [(0, DB.H)()], (0, YB.h)(null, null, OB, {
-             kind: "field",
-             name: "groundColor",
-             static: !1,
-             private: !1,
-             access: {
-               has: BB => "groundColor" in BB,
-               get: BB => BB.groundColor,
-               set: (BB, OB) => {
-                 BB.groundColor = OB
-               }
-             },
-             metadata: QB
-           }, JB, MB), (0, YB.h)(null, null, GB, {
- ... (17 more removed lines; see GitHub link above)
+           return 1
+         }())) : (oW.current = !1, OW(!1), KW(null), yW(1)))
+       })), (0, NW.useEffect)((() => () => {
+         (0, cW.v)(MW)
+       }), []), (0, NW.useEffect)((() => {
+         iW ? (0, cW.y)(MW) : ((0, cW.v)(MW), uW.current && (wW.gameBridge.send("setCameraZoom", nW.current), uW.current = !1))
+       }), [iW]), (0, kW.r)("overlay", dW, gW, iW), (0, sW.jsx)(mW.e, {
+         className: "SleepingOverlay",
+         "data-camera-keeper": "",
+         in: iW,
+         timeout: 300,
+         nodeRef: dW,
+         unmountOnExit: !0,
+         children: (0, sW.jsx)("div", {
+           ref: dW,
+           onClick: WW => {
+ ... (73 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L189-L194` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L138-L139) · [Before (L189-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L189-L194)

```diff
-         })(), BB
-       })(),
-       PB = !1;
- 
-     function zB() {
-       PB || (PB = !0, yB.b.AddNodeConstructor("Light_Type_3", ((BB, OB) => () => new MB(BB, QB.r.Zero(), OB))), (0, JB.f)("BABYLON.HemisphericLight", MB))
+         })
+       })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L197-L205` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L161) · [Before (L197-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L197-L205)

```diff
-   37885: (BB, OB, GB) => {
-     GB.d(OB, {
-       Color3: () => YB.c,
-       e: () => YB.g
-     });
-     var YB = GB(37894);
-     (0, YB.k)()
-   },
-   38424: (BB, OB, GB) => {
+   42086: (WW, iW, OW) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L209` → after: `L165-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L165-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L165-L187) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L209)

```diff
-     var YB = GB(38432);
+     var mW = OW(25),
+       EW = OW(27),
+       NW = OW(4920),
+       PW = OW(327),
+       LW = OW(1729),
+       cW = OW(9379),
+       wW = OW(4948),
+       tW = OW(9942),
+       ZW = OW(9413),
+       xW = OW(9384),
+       lW = OW(9417),
+       AW = OW(1459),
+       bW = OW(1784),
+       jW = OW(9421),
+       UW = OW(9905),
+       kW = OW(10033),
+ ... (7 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L211-L234` → after: `L189-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L189-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L189-L190) · [Before (L211-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L211-L234)

```diff
-       static GetPlanes(BB) {
-         const OB = [];
-         for (let GB = 0; GB < 6; GB++) OB.push(new YB.c(0, 0, 0, 0));
-         return DB.GetPlanesToRef(BB, OB), OB
-       }
-       static GetNearPlaneToRef(BB, OB) {
-         const GB = BB.m;
-         OB.normal.x = GB[3] + GB[2], OB.normal.y = GB[7] + GB[6], OB.normal.z = GB[11] + GB[10], OB.d = GB[15] + GB[14], OB.normalize()
-       }
-       static GetFarPlaneToRef(BB, OB) {
-         const GB = BB.m;
-         OB.normal.x = GB[3] - GB[2], OB.normal.y = GB[7] - GB[6], OB.normal.z = GB[11] - GB[10], OB.d = GB[15] - GB[14], OB.normalize()
-       }
-       static GetLeftPlaneToRef(BB, OB) {
-         const GB = BB.m;
-         OB.normal.x = GB[3] + GB[0], OB.normal.y = GB[7] + GB[4], OB.normal.z = GB[11] + GB[8], OB.d = GB[15] + GB[12], OB.normalize()
- ... (8 more removed lines; see GitHub link above)
+       constructor() {
+         this.lostAtMs = null
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L236-L238` → after: `L192-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L192-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L192-L193) · [Before (L236-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L236-L238)

```diff
-       static GetBottomPlaneToRef(BB, OB) {
-         const GB = BB.m;
-         OB.normal.x = GB[3] + GB[1], OB.normal.y = GB[7] + GB[5], OB.normal.z = GB[11] + GB[9], OB.d = GB[15] + GB[13], OB.normalize()
+       update(WW, iW) {
+         return WW ? (this.lostAtMs = null, !1) : (this.lostAtMs ??= iW, iW - this.lostAtMs >= 250)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L240-L246` → after: `L195-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L195-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L195-L196) · [Before (L240-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L240-L246)

```diff
-       static GetPlanesToRef(BB, OB) {
-         DB.GetNearPlaneToRef(BB, OB[0]), DB.GetFarPlaneToRef(BB, OB[1]), DB.GetLeftPlaneToRef(BB, OB[2]), DB.GetRightPlaneToRef(BB, OB[3]), DB.GetTopPlaneToRef(BB, OB[4]), DB.GetBottomPlaneToRef(BB, OB[5])
-       }
-       static IsPointInFrustum(BB, OB) {
-         for (let GB = 0; GB < 6; GB++)
-           if (OB[GB].dotCoordinate(BB) < 0) return !1;
-         return !0
+       reset() {
+         this.lostAtMs = null
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L256-L312` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L200-L201) · [Before (L256-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L256-L312)

```diff
-       constructor(BB, OB, GB, DB) {
-         this.normal = new YB.r(BB, OB, GB), this.d = DB
-       }
-       dDB() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new DB(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
-       getHashCode() {
-         let BB = this.normal.getHashCode();
-         return BB = 397 * BB ^ this.d, BB
-       }
- ... (41 more removed lines; see GitHub link above)
+       constructor(WW, iW) {
+         this.press = WW, this.release = iW, this.downAtMs = null, this.token = null, this.latched = !1
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L314-L315` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L203-L205) · [Before (L314-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L314-L315)

```diff
-       static FromArray(BB) {
-         return new DB(BB[0], BB[1], BB[2], BB[3])
+       update(WW, iW, OW, mW) {
+         if (WW && null === this.downAtMs) return this.downAtMs = OW, this.latched = mW, void(this.token = this.press(mW));
+         null !== this.downAtMs && (this.latched ? WW && this.end() : !iW && OW - this.downAtMs >= 40 && this.end())
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L317-L319` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L207-L208) · [Before (L317-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L317-L319)

```diff
-       static FromPoints(BB, OB, GB) {
-         const YB = new DB(0, 0, 0, 0);
-         return YB.copyFromPoints(BB, OB, GB), YB
+       isLatched() {
+         return null !== this.downAtMs && this.latched
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L321-L323` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L210-L211) · [Before (L321-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L321-L323)

```diff
-       static FromPositionAndNormal(BB, OB) {
-         const GB = new DB(0, 0, 0, 0);
-         return this.FromPositionAndNormalToRef(BB, OB, GB)
+       unlatch() {
+         this.latched = !1
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L325-L326` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L213-L214) · [Before (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L325-L326)

```diff
-       static FromPositionAndNormalToRef(BB, OB, GB) {
-         return GB.normal.IU(OB), GB.normal.normalize(), GB.d = -BB.dot(GB.normal), GB
+       cancel() {
+         null !== this.downAtMs && this.end()
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L328-L330` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L216-L218) · [Before (L328-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L328-L330)

```diff
-       static SignedDistanceToPlaneFromPositionAndNormal(BB, OB, GB) {
-         const DB = -(OB.x * BB.x + OB.y * BB.y + OB.z * BB.z);
-         return YB.r.Dot(GB, OB) + DB
+       end() {
+         const WW = this.token;
+         this.downAtMs = null, this.token = null, this.latched = !1, this.release(WW)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L333-L351` → after: `L221-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L221-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L221-L302) · [Before (L333-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L333-L351)

```diff
-     DB._TmpMatrix = YB.d.Identity()
-   },
-   37771: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       Matrix: () => YB.d,
-       Quaternion: () => YB.f,
-       RegisterMathVector: () => YB.j,
-       TmpVectors: () => YB.k,
-       Vector2: () => YB.o,
-       Xp: () => YB.r,
-       Vector4: () => YB.t
-     });
-     var YB = GB(37778);
-     (0, YB.j)()
-   },
-   38769: (BB, OB, GB) => {
- ... (3 more removed lines; see GitHub link above)
+     const HW = {
+         kind: "specialAction",
+         action: "SpecialAction2"
+       },
+       nW = WW => {
+         let iW = null;
+         const OW = new TW.e,
+           mW = () => {
+             iW && (((WW, iW, OW) => {
+               switch (OW.kind) {
+                 case "reload":
+                   return void iW.specialActionUp("SpecialAction1");
+                 case "specialAction":
+                   return void iW.specialActionUp(OW.action);
+                 case "customButton":
+                   return void KW.gameBridge.send("pressCustomButton", {
+ ... (66 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L353-L354` → after: `L304-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L304-L305) · [Before (L353-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L353-L354)

```diff
-       constructor(BB, OB, GB, YB) {
-         this.x = BB, this.y = OB, this.width = GB, this.height = YB
+       constructor(WW) {
+         this.bodies = WW, this.gesture = new TW.e, this.zoomBodies = null
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L356-L357` → after: `L307-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L307-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L307-L311) · [Before (L356-L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L356-L357)

```diff
-       toGlobal(BB, OB) {
-         return new YB(this.x * BB, this.y * OB, this.width * BB, this.height * OB)
+       update(WW, iW, OW, mW, EW) {
+         if (!EW) return this.release(), WW.wasPressed(iW);
+         if (null !== this.zoomBodies) return WW.isHeld(iW) || this.endZoom(), !1;
+         const NW = this.gesture.update(WW.wasPressed(iW), WW.isHeld(iW), OW, mW);
+         return "hold" === NW && WW.isHeld(iW) && (this.zoomBodies = this.bodies(), this.zoomBodies.zoom(!0)), "tap" === NW
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L359-L360` → after: `L313-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L313-L314) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L359-L360)

```diff
-       toGlobalToRef(BB, OB, GB) {
-         return GB.x = this.x * BB, GB.y = this.y * OB, GB.width = this.width * BB, GB.height = this.height * OB, this
+       release() {
+         this.gesture.release(), this.endZoom()
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L362-L363` → after: `L316-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L316-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L316-L318) · [Before (L362-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L362-L363)

```diff
-       clone() {
-         return new YB(this.x, this.y, this.width, this.height)
+       endZoom() {
+         var WW;
+         null === (WW = this.zoomBodies) || void 0 === WW || WW.zoom(!1), this.zoomBodies = null
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L366-L425` → after: `L321-L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L321-L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L321-L513) · [Before (L366-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L366-L425)

```diff
-   },
-   41406: (BB, OB, GB) => {
-     GB.d(OB, {
-       d: () => JB
-     });
-     var YB = GB(37778),
-       DB = GB(37894),
-       QB = GB(41411),
-       oB = GB(41423),
-       jB = GB(41436);
- 
-     function yB(BB) {
-       let OB = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
-       const GB = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
-         QB = [],
-         yB = BB.width || BB.size || 1,
- ... (44 more removed lines; see GitHub link above)
+     var RW = OW(9908),
+       GW = OW(9957);
+     const IW = () => RW.d[(0, xW.m)().tapHoldTime].wheelMs,
+       aW = () => ((0, tW.e)(), (0, GW.e)("controllerMenuKey")),
+       rW = (WW, iW, OW) => new hW((OW => {
+         const mW = WW.bodies();
+         return {
+           bodies: mW,
+           press: iW(mW, OW)
+         }
+       }), (WW => {
+         let {
+           bodies: iW,
+           press: mW
+         } = WW;
+         OW(iW, mW)
+ ... (177 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L446` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L516) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L446)

```diff
-   41452: (BB, OB, GB) => {
+   42078: (WW, iW, OW) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L448` → after: `L518-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L518-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L518-L520) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L448)

```diff
-       d: () => PB
+       e: () => AW,
+       i: () => jW,
+       j: () => lW
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L450-L523` → after: `L522-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L522-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L522-L545) · [Before (L450-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L450-L523)

```diff
-     var YB = GB(37778),
-       DB = GB(41411),
-       QB = GB(41423),
-       oB = GB(41457),
-       jB = GB(41150),
-       yB = GB(39366);
- 
-     function JB(BB) {
-       const OB = [],
-         GB = [],
-         YB = BB.lines,
-         DB = BB.colors,
-         oB = [];
-       let jB = 0;
-       for (let QB = 0; QB < YB.length; QB++) {
-         const BB = YB[QB];
- ... (58 more removed lines; see GitHub link above)
+     var mW = OW(1294),
+       EW = OW(4920),
+       NW = OW(10025),
+       PW = OW(38079),
+       LW = OW(1822),
+       cW = OW(1167),
+       wW = OW(9421),
+       tW = OW(9952),
+       ZW = OW(10038);
+     const xW = {
+         emoteWheel: NW.f,
+         quickChatWheel: tW.e,
+         actionWheel: ZW.o
+       },
+       lW = Object.keys(xW),
+       AW = "dead",
+ ... (8 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L588` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L549) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L588)

```diff
-   41457: (BB, OB, GB) => {
+   42075: (WW, iW, OW) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L591` → after: `L552-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L552-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L552-L558) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L591)

```diff
-       c: () => qB
+       f: () => cW,
+       g: () => LW,
+       k: () => tW,
+       o: () => PW,
+       p: () => NW,
+       t: () => wW,
+       u: () => ZW
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L593-L640` → after: `L560-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L560-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L560-L571) · [Before (L593-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L593-L640)

```diff
-     var YB, DB, QB = GB(37894),
-       oB = GB(41150),
-       jB = GB(41411),
-       yB = GB(41462),
-       JB = GB(41283),
-       MB = GB(41468),
-       PB = GB(40890);
-     class zB extends jB.c {
-       _isShaderMaterial(BB) {
-         return !!BB && "ShaderMaterial" === BB.getClassName()
-       }
-       constructor(BB) {
-         let OB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           YB = arguments.length > 5 ? arguments[5] : void 0,
-           DB = arguments.length > 6 ? arguments[6] : void 0,
-           jB = arguments.length > 7 ? arguments[7] : void 0;
- ... (32 more removed lines; see GitHub link above)
+     var mW = OW(9364);
+     class EW {
+       constructor() {
+         this.fullTiltSinceMs = null
+       }
+       update(WW, iW, OW) {
+         const EW = (0, mW.l)(WW, iW.lookDeadzone);
+         if (Math.hypot(EW.x, EW.y) < .9 || Math.abs(EW.x) < Math.abs(EW.y)) return this.fullTiltSinceMs = null, 1;
+         null === this.fullTiltSinceMs && (this.fullTiltSinceMs = OW);
+         const NW = (PW = iW.lookSensitivityX, Math.min(1, 100 / PW));
+         var PW;
+         return 1 + (1.6 - 1) * Math.max(0, Math.min(1, (OW - this.fullTiltSinceMs - 250 * NW) / (200 * NW)))
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L642-L643` → after: `L573-L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L573-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L573-L574) · [Before (L642-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L642-L643)

```diff
-       get checkCollisions() {
-         return !1
+       reset() {
+         this.fullTiltSinceMs = null
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L645-L655` → after: `L576-L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L576-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L576-L603) · [Before (L645-L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L645-L655)

```diff
-       set checkCollisions(BB) {}
-       _bind(BB, OB) {
-         if (!this._geometry) return this;
-         const GB = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
-         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(OB, GB) : this._geometry._bind(OB, GB, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
-           const {
-             r: BB,
-             g: OB,
-             b: GB
-           } = this.color;
-           this._color4.set(BB, OB, GB, this.alpha), this.material.setColor4("color", this._color4)
+     }
+     const NW = (WW, iW, OW, EW, NW) => {
+         let PW = 1;
+         return "boost" === OW.lookCurve ? PW = WW.update(iW, OW, NW) : WW.reset(),
+           function(WW, iW) {
+             let {
+               yawBoost: OW = 1,
+               aiming: EW = !1
+             } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+             const NW = (0, mW.h)((0, mW.l)(WW, iW.lookDeadzone), iW.lookCurve),
+               PW = 220 * Math.PI / 180,
+               LW = EW ? iW.aimLookSensitivity / 100 : 1,
+               cW = iW.lookSensitivityX / 100 * LW,
+               wW = iW.lookSensitivityY / 100 * LW;
+             return {
+               yawRadPerSec: NW.x * PW * cW * OW * (iW.invertLookX ? -1 : 1),
+ ... (12 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L657-L673` → after: `L605-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L605-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L605-L621) · [Before (L657-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L657-L673)

```diff
-         return this
-       }
-       _draw(BB, OB, GB) {
-         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
-         const YB = this.JF().Lp();
-         return this._unIndexed ? YB.drawArraysType(JB.b.LineListDrawMode, BB.verticesStart, BB.verticesCount, GB) : YB.drawElementsType(JB.b.LineListDrawMode, BB.indexStart, BB.indexCount, GB), this
-       }
-       dispose(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || OB) && this.material?.dispose(!1, !1, !0), super.dispose(BB)
-       }
-       clone(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           GB = arguments.length > 2 ? arguments[2] : void 0;
-         if (OB && void 0 === OB._addToSceneRootNodes) {
-           const GB = OB;
- ... (1 more removed lines; see GitHub link above)
+       },
+       LW = (WW, iW) => iW ? {
+         move: WW.rightStick,
+         look: WW.leftStick
+       } : {
+         move: WW.leftStick,
+         look: WW.rightStick
+       },
+       cW = (WW, iW) => {
+         const OW = (0, mW.l)(WW, iW),
+           EW = Math.min(1, Math.hypot(OW.x, OW.y));
+         return {
+           magnitude: EW,
+           speed: Math.min(1, EW / .8),
+           headingOffset: 0 === EW ? 0 : Math.atan2(OW.x, -OW.y),
+           x: OW.x,
+ ... (1 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L675-L681` → after: `L623-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L623-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L623-L648) · [Before (L675-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L675-L681)

```diff
-         return new zB(BB, this.JF(), OB, this, GB)
-       }
-       createInstance(BB) {
-         const OB = new lB(BB, this);
-         if (this.yX) {
-           OB.yX = {};
-           for (const BB in this.yX) OB.yX[BB] = this.yX[BB]
+       },
+       wW = (WW, iW) => {
+         let {
+           sprintPressed: OW,
+           magnitude: mW,
+           autoSprint: EW,
+           nowMs: NW
+         } = iW;
+         const PW = OW ? NW : WW.latchedAtMs,
+           LW = (WW => {
+             let {
+               running: iW,
+               magnitude: OW,
+               sprintPressed: mW,
+               autoSprint: EW
+             } = WW;
+ ... (10 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L683-L706` → after: `L650-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L650-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L650-L658) · [Before (L683-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L683-L706)

```diff
-         return OB
-       }
-       serialize(BB) {
-         super.serialize(BB), BB.color = this.color.dDB(), BB.alpha = this.alpha
-       }
-       static Parse(BB, OB) {
-         const GB = new zB(BB.name, OB);
-         return GB.color = QB.c.FromArray(BB.color), GB.alpha = BB.alpha, GB
-       }
-     }
-     zB.ForceGLSL = !1;
-     class lB extends yB.b {
-       constructor(BB, OB) {
-         super(BB, OB), this.intersectionThreshold = OB.intersectionThreshold
-       }
-       getClassName() {
- ... (8 more removed lines; see GitHub link above)
+       },
+       tW = (WW, iW, OW) => OW && WW.gyroAiming && "button" === WW.gyroActivation && WW.gyroButton !== iW ? WW.gyroButton : null,
+       ZW = (WW, iW) => iW ? {
+         ...WW,
+         isHeld: OW => OW !== iW && WW.isHeld(OW),
+         wasPressed: OW => OW !== iW && WW.wasPressed(OW),
+         wasReleased: OW => OW !== iW && WW.wasReleased(OW),
+         value: OW => OW === iW ? 0 : WW.value(OW)
+       } : WW
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L708` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L660) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L708)

```diff
-   39358: (BB, OB, GB) => {
+   42089: (WW, iW, OW) => {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L710` → after: `L662-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L662-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L662-L663) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L710)

```diff
-       b: () => QB
+       c: () => EW,
+       f: () => mW
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L712-L715` → after: `L665-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L665-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L665-L688) · [Before (L712-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L712-L715)

```diff
-     var YB = GB(39366);
-     const DB = (BB, OB, GB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : GB && "object" === typeof BB ? {
-       ...BB
-     } : null : BB.clone(OB) : null;
+     const mW = WW => {
+       let {
+         mode: iW,
+         sneakHeld: OW,
+         sneakPressed: mW,
+         sneakTogglePressed: EW,
+         descending: NW,
+         canCrouch: PW,
+         toggled: LW
+       } = WW;
+       return PW ? NW ? {
+         crouchHeld: OW,
+         toggled: !1
+       } : "hold" === iW ? {
+         crouchHeld: OW,
+         toggled: EW ? !LW : LW
+ ... (8 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L717-L746` → after: `L690-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L690-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L690-L702) · [Before (L717-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L717-L746)

```diff
-       static DeepCopy(BB, OB, GB, QB) {
-         let oB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const jB = function(BB) {
-           const OB = [];
-           do {
-             const GB = Object.getOwnPropertyNames(BB);
-             for (const BB of GB) - 1 === OB.indexOf(BB) && OB.push(BB)
-           } while (BB = Object.getPrototypeOf(BB));
-           return OB
-         }(BB);
-         for (const JB of jB) {
-           if ("_" === JB[0] && (!QB || -1 === QB.indexOf(JB))) continue;
-           if (JB.endsWith("Observable")) continue;
-           if (GB && -1 !== GB.indexOf(JB)) continue;
-           const jB = BB[JB],
-             MB = typeof jB;
- ... (14 more removed lines; see GitHub link above)
+       constructor() {
+         this.regainPending = !1, this.regainedAtMs = -1 / 0, this.graceEndsMs = -1 / 0, this.ignoringHeld = !1
+       }
+       lostToPadScreen() {
+         this.regainPending = !0
+       }
+       filter(WW, iW) {
+         this.regainPending && (this.regainPending = !1, this.regainedAtMs = iW, this.graceEndsMs = iW + 500);
+         const OW = iW < this.graceEndsMs;
+         return OW && (WW.sneakPressed || WW.sneakTogglePressed) && (this.graceEndsMs = Math.min(this.regainedAtMs + 1e3, Math.max(this.graceEndsMs, iW + 300))), WW.sneakHeld ? OW && WW.sneakPressed && (this.ignoringHeld = !0) : this.ignoringHeld = !1, {
+           sneakHeld: WW.sneakHeld && !this.ignoringHeld,
+           sneakPressed: WW.sneakPressed && !this.ignoringHeld,
+           sneakTogglePressed: WW.sneakTogglePressed && !OW
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L751-L760` → after: `L707-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L707-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L707-L708) · [Before (L751-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L751-L760)

```diff
-   38589: (BB, OB, GB) => {
-     function YB() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
-         const OB = 16 * Math.random() | 0;
-         return ("x" === BB ? OB : 3 & OB | 8).toString(16)
-       }))
-     }
-     GB.d(OB, {
-       e: () => YB
-     })
+   42060: (WW, iW, OW) => {
+     OW(10079)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L762` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L710) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L762)

```diff
-   39366: (BB, OB, GB) => {
+   42067: (WW, iW, OW) => {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/256.js` (Changed code · before: `L766-L815` → after: `L714-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8a4feb0e265da9259ef3f692bccd3a663e9359b41c6d8a48db87bb3f504fe6d1) · [After (L714-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/256.js#L714-L798) · [Before (L766-L815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/256.js#L766-L815)

```diff
-     class YB {
-       static _CheckLimit(BB, OB) {
-         let GB = YB._LogLimitOutputs[BB];
-         return GB ? GB.current++ : (GB = {
-           limit: OB,
-           current: 1
-         }, YB._LogLimitOutputs[BB] = GB), GB.current <= GB.limit
-       }
-       static _GenerateLimitMessage(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const GB = YB._LogLimitOutputs[BB];
-         if (!GB || !YB.MessageLimitReached) return;
-         const DB = this._Levels[OB];
-         GB.current === GB.limit && YB[DB.name](YB.MessageLimitReached.replace(/%LIMIT%/g, "" + GB.limit).replace(/%TYPE%/g, DB.name ?? ""))
-       }
-       static _AddLogEntry(BB) {
- ... (34 more removed lines; see GitHub link above)
+     var mW = OW(27),
+       EW = OW(10025),
+       NW = OW(10031),
+       PW = OW(9379),
+       LW = OW(9413),
+       cW = OW(9384),
+       wW = OW(42075),
+       tW = OW(42078),
+       ZW = OW(9421),
+       xW = OW(9364),
+       lW = OW(9952),
+       AW = OW(10038);
+     const bW = [{
+         isOpen: EW.g,
+         openButton: () => (0, PW.h)("emoteWheel"),
+         aim: WW => {
+ ... (69 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/257.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/257.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775)

#### 1. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L2)

```diff
- export const ids = [257, 262];
+ export const ids = [257];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L4)

```diff
-   44978: (BB, OB, GB) => {
+   39661: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L8-L23` → after: `L8-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L8-L15) · [Before (L8-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L8-L23)

```diff
-     var YB = GB(44909),
-       DB = GB(40992);
-     let QB = !1;
- 
-     function oB() {
-       QB || (QB = !0, DB.d.prototype._sphericalPolynomialTargetSize = 0, DB.d.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(DB.d.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = YB.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = BB, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
+     var mW = OW(182),
+       EW = OW(38824);
+     const NW = 1.2,
+       PW = {
+         poseRig: "golem",
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L25-L26` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L17-L19) · [Before (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L25-L26)

```diff
-         set: function(BB) {
-           this._texture && (this._texture._sphericalPolynomial = BB)
+         hitBoxDimensions: {
+           width: 2.2,
+           height: 2.8
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L28-L200` → after: `L21-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L21-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L21-L610) · [Before (L28-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L28-L200)

```diff
-         enumerable: !0,
-         configurable: !0
-       }))
-     }
-   },
-   37885: (BB, OB, GB) => {
-     GB.d(OB, {
-       Color3: () => YB.c,
-       e: () => YB.g
-     });
-     var YB = GB(37894);
-     (0, YB.k)()
-   },
-   38424: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => DB
- ... (157 more removed lines; see GitHub link above)
+         eyeHeight: 2.3,
+         rideHeight: 2.3,
+         FP: .5,
+         QiW: !1
+       },
+       LW = {
+         physicsBodyDimensions: {
+           width: .5,
+           height: 2.5
+         },
+         hitBoxDimensions: {
+           width: 1.8,
+           height: 2.6
+         },
+         eyeHeight: 2.3,
+         rideHeight: 2.3,
+ ... (574 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L203` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L613) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L203)

```diff
-   44909: (BB, OB, GB) => {
+   38214: (WW, iW, OW) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L207-L284` → after: `L617-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L617-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L617-L716) · [Before (L207-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L207-L284)

```diff
-     var YB = GB(37778),
-       DB = GB(37807),
-       QB = GB(40985),
-       oB = GB(37782),
-       jB = GB(37894);
-     class yB {
-       constructor(BB, OB, GB, YB) {
-         this.name = BB, this.worldAxisForNormal = OB, this.worldAxisForFileX = GB, this.worldAxisForFileY = YB
-       }
-     }
-     class JB {
-       static _NearestPow2Floor(BB) {
-         return BB <= 1 ? 1 : 1 << Math.floor(Math.log2(BB))
-       }
-       static ConvertCubeMapTextureToSphericalPolynomial(BB) {
-         if (!BB.isCube) return null;
- ... (62 more removed lines; see GitHub link above)
+     const mW = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
+       },
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+         cooldownMultiplier: .81,
+         ability: "eclipseField"
+       },
+       "skyblock:forged:astral-diamond-moonstone": {
+ ... (84 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L286-L303` → after: `L718-L733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L718-L733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L718-L733) · [Before (L286-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L286-L303)

```diff
-         if (BB instanceof Float32Array) return oB;
-         const JB = new(0, BB.constructor)(QB);
-         for (let MB = 0; MB < QB; MB++) JB[MB] = oB[MB] + .5 | 0;
-         return JB
-       }
-       static ConvertCubeMapToSphericalPolynomial(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const GB = OB > 0 ? this._NearestPow2Floor(OB) : 0;
-         if (GB > 0 && BB.size > GB) {
-           const OB = 5 === BB.format ? 4 : 3,
-             YB = ["right", "left", "up", "down", "front", "back"],
-             DB = {};
-           for (const QB of YB) DB[QB] = this._DownsampleFace(BB[QB], BB.size, GB, OB);
-           BB = {
-             ...BB,
-             ...DB,
- ... (2 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:diamond-moonstone-gold": {
+         name: "Jeweller's Pride",
+         lore: "Too pretty to fight with. Fight with it anyway.",
+         damageMultiplier: 1.24,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge"
+       },
+       "skyblock:forged:gold-gold-gold": {
+         name: "King's Ransom",
+         lore: "Worth more than the treasure it guards.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2.5
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L305-L338` → after: `L735-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L735-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L735-L744) · [Before (L305-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L305-L338)

```diff
-         const YB = new QB.c;
-         let yB = 0;
-         const JB = 2 / BB.size,
-           MB = JB,
-           PB = .5 * JB,
-           zB = PB - 1;
-         for (let QB = 0; QB < 6; QB++) {
-           const OB = this._FileFaces[QB],
-             GB = BB[OB.name];
-           let lB = zB;
-           const pB = 5 === BB.format ? 4 : 3;
-           for (let QB = 0; QB < BB.size; QB++) {
-             let qB = zB;
-             for (let MB = 0; MB < BB.size; MB++) {
-               const zB = OB.worldAxisForFileX.scale(qB).add(OB.worldAxisForFileY.scale(lB)).add(OB.worldAxisForNormal);
-               zB.normalize();
- ... (18 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:gold-moonstone-gold": {
+         name: "Midas Moon",
+         lore: "Mobs it fells seem to rattle with coins.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .92,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2,
+           bossBane: .6
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L340-L406` → after: `L746-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L746-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L746-L773) · [Before (L340-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L340-L406)

```diff
-         const lB = 6 * (4 * Math.PI) / 6 / yB;
-         return YB.scaleInPlace(lB), YB.convertIncidentRadianceToIrradiance(), YB.convertIrradianceToLambertianRadiance(), QB.f.FromHarmonics(YB)
-       }
-     }
-     JB._FileFaces = [new yB("right", new YB.r(1, 0, 0), new YB.r(0, 0, -1), new YB.r(0, -1, 0)), new yB("left", new YB.r(-1, 0, 0), new YB.r(0, 0, 1), new YB.r(0, -1, 0)), new yB("up", new YB.r(0, 1, 0), new YB.r(1, 0, 0), new YB.r(0, 0, 1)), new yB("down", new YB.r(0, -1, 0), ne … [truncated]
-   },
-   44762: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => YB.g,
-       d: () => YB.n
-     });
-     var YB = GB(41035);
-     (0, YB.p)()
-   },
-   38589: (BB, OB, GB) => {
-     function YB() {
- ... (51 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:iron-iron-iron": {
+         name: "Old Faithful",
+         lore: "It has never let anyone down. It never will.",
+         damageMultiplier: 1.15,
+         cooldownMultiplier: .94,
+         ability: "warcry"
+       },
+       "skyblock:forged:iron-wood-wood": {
+         name: "Militia Blade",
+         lore: "Handed out at the outpost gate when the rift first opened.",
+         damageMultiplier: 1.09,
+         cooldownMultiplier: .97,
+         ability: "warcry"
+       },
+       "skyblock:forged:stone-stone-stone": {
+ ... (12 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L410-L420` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L777) · [Before (L410-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L410-L420)

```diff
-   63864: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       AsyncLoop: () => YB.b,
-       RegisterTools: () => YB.f,
-       Tools: () => YB.j,
-       className: () => YB.k
-     });
-     var YB = GB(41097);
-     (0, YB.f)()
-   },
-   44999: (BB, OB, GB) => {
+   38831: (WW, iW, OW) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L424-L479` → after: `L781-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L781-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L781-L965) · [Before (L424-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L424-L479)

```diff
-     class YB {
-       constructor(BB) {
-         this._pendingActions = new Array, this._workerInfos = BB.map((BB => ({
-           workerPromise: Promise.resolve(BB),
-           idle: !0
-         })))
-       }
-       dispose() {
-         for (const BB of this._workerInfos) BB.workerPromise.then((BB => {
-           BB.terminate()
-         }));
-         this._workerInfos.length = 0, this._pendingActions.length = 0
-       }
-       push(BB) {
-         this._executeOnIdleWorker(BB) || this._pendingActions.push(BB)
-       }
- ... (40 more removed lines; see GitHub link above)
+     var mW = OW(352),
+       EW = OW.n(mW),
+       NW = OW(2012);
+     let PW;
+     var LW, cW, wW, tW, ZW, xW, lW, AW, bW;
+     const jW = [2, 0, 1, "c", "a", 9, 140, 5, "f", 122, 8, 255, "length", "b", 3, 61, "undefined", void 0, 225, "d", 119, 193, 63, 6, "fromCodePoint", 7, 12, "push", 131, 110, 91, 73, 8191, 88, 13, 14, 4, 236, 139, 160, !1, 79, !0, 84, 104, 115, 123, "e", 178, 248, 74, "g", 179,  … [truncated]
+ 
+     function UW(...WW) {
+       return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = function(...WW) {
+         for (HW(WW[jW[12]] = jW[2], WW[jW[4]] = '5R(_qs*mnEz@fa>7`Le:gDTdNYt^w!vV{puO&bkl#)1WAB6xy/ZQ[XP<IGo2+]?=cMrC3hF8"0,}$%KH94|Sj~;.JiU', WW[jW[0]] = "" + (WW[jW[1]] || ""), WW[jW[3]] = WW[jW[0]].length, WW[-jW[9]] = [], WW[jW[7]] = jW[1], WW[jW[8]] = jW[1], WW[-jW[6]] = -jW … [truncated]
+           if (WW[jW[5]] = WW[jW[4]].indexOf(WW[jW[0]][WW[-jW[2]]]), WW[jW[5]] !== -jW[2])
+             if (WW[-jW[6]] < jW[1]) WW[-jW[6]] = WW[jW[5]];
+             else {
+               HW(WW[-jW[6]] += WW[jW[5]] * jW[30], WW[jW[7]] |= WW[-jW[6]] << WW[jW[8]], WW[jW[8]] += (WW[-jW[6]] & jW[32]) > jW[33] ? jW[34] : jW[35]);
+               do {
+                 HW(WW[-jW[9]].push(WW[jW[7]] & jW[11]), WW[jW[7]] >>= jW[10], WW[jW[8]] -= jW[10])
+ ... (169 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L481-L631` → after: `L967-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L967-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L967-L1026) · [Before (L481-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L481-L631)

```diff
-     }
-     DB.DefaultOptions = {
-       idleTimeElapsedBeforeRelease: 1e3
-     }
-   },
-   63902: (BB, OB, GB) => {
-     GB.r(OB), GB.d(OB, {
-       AbstractThreeMfSerializer: () => Cj,
-       BVHExporter: () => ko,
-       ContentTypeFileName: () => qj,
-       DefaultXmlSerializerFormatOptions: () => ao,
-       DefaultXmlSerializerNumberOptions: () => ho,
-       EXT_lights_area: () => ZD,
-       EXT_mesh_gpu_instancing: () => XY,
-       EXT_texture_avif: () => Do,
-       EXT_texture_webp: () => Bo,
- ... (135 more removed lines; see GitHub link above)
+       const tW = yW;
+       if (HW(EW()[iW(141)](tW, MW, JW), tW[jW[2]] = jW[1], WW[jW[3]] = EW()[iW(142)](tW)), !wW) {
+         function dW(...WW) {
+           function OW(...WW) {
+             return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = function(...WW) {
+               for (HW(WW[jW[12]] = jW[2], WW[jW[4]] = ';qOUtWhkdC,K~0/f_XuTe?|[)Jv@3N*Ra<V8pYmo=>r15#gbzQBHlxPwF4{!9D(EA&"^Gi.M:26}sc$y7]+`ISLZjn%', WW[jW[81]] = "" + (WW[jW[1]] || ""), WW[jW[3]] = WW[jW[81]].length, WW[jW[83]] = [], WW[jW[47]] = jW[1], WW[jW[8]] = jW[1], WW[jW[5 … [truncated]
+                 if (WW[-jW[73]] = WW[jW[4]].indexOf(WW[jW[81]][WW[-jW[82]]]), WW[-jW[73]] !== -jW[2])
+                   if (WW[jW[51]] < jW[1]) WW[jW[51]] = WW[-jW[73]];
+                   else {
+                     HW(WW[jW[51]] += WW[-jW[73]] * jW[30], WW[jW[47]] |= WW[jW[51]] << WW[jW[8]], WW[jW[8]] += (WW[jW[51]] & jW[32]) > jW[33] ? jW[34] : jW[35]);
+                     do {
+                       HW(WW[jW[83]].push(WW[jW[47]] & jW[11]), WW[jW[47]] >>= jW[10], WW[jW[8]] -= jW[10])
+                     } while (WW[jW[8]] > jW[25]);
+                     WW[jW[51]] = -jW[2]
+                   } return WW[jW[51]] > -jW[2] && WW[jW[83]].push((WW[jW[47]] | WW[jW[51]] << WW[jW[8]]) & jW[11]), kW(WW[jW[83]])
+             }(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
+ ... (44 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L633-L635` → after: `L1028-L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L1028-L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L1028-L1030) · [Before (L633-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L633-L635)

```diff
-           if (OB) {
-             const BB = GB.material;
-             BB && jB.push("usemtl " + BB.id)
+ 
+           function fW(...WW) {
+             return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = pW(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L637-L640` → after: `L1032-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L1032-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L1032-L1046) · [Before (L637-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L637-L640)

```diff
-           const lB = GB.geometry;
-           if (!lB) {
-             DB.Tools.Warn("No geometry is present on the mesh");
-             continue
+           DW *= WW[jW[0]][fW(170) + fW(jW[89])]
+         }
+         let VW = WW[jW[0]][vW(172) + vW(173) + "ss"] * xW;
+         if (xW < .3) {
+           function CW(...WW) {
+             for (HW(WW[jW[12]] = jW[2], WW[jW[4]] = ';IEWPRFDblVCX5QwqUB6m$>j+x7KYohTzg%@8!#GsLkv~JO92/_,dZec)[SnM3uy<:r"=]H&A}N|4tf{*p(`1.i0?a^', WW[-jW[88]] = "" + (WW[jW[1]] || ""), WW[jW[14]] = WW[-jW[88]].length, WW[jW[19]] = [], WW[jW[7]] = jW[1], WW[jW[8]] = jW[1], WW[-jW[ … [truncated]
+               if (WW[jW[5]] = WW[jW[4]].indexOf(WW[-jW[88]][WW[jW[10]]]), WW[jW[5]] !== -jW[2])
+                 if (WW[-jW[89]] < jW[1]) WW[-jW[89]] = WW[jW[5]];
+                 else {
+                   HW(WW[-jW[89]] += WW[jW[5]] * jW[30], WW[jW[7]] |= WW[-jW[89]] << WW[jW[8]], WW[jW[8]] += (WW[-jW[89]] & jW[32]) > jW[33] ? jW[34] : jW[35]);
+                   do {
+                     HW(WW[jW[19]].push(WW[jW[7]] & jW[11]), WW[jW[7]] >>= jW[10], WW[jW[8]] -= jW[10])
+                   } while (WW[jW[8]] > jW[25]);
+                   WW[-jW[89]] = -jW[2]
+                 } return WW[-jW[89]] > -jW[2] && WW[jW[19]].push((WW[jW[7]] | WW[-jW[89]] << WW[jW[8]]) & jW[11]), kW(WW[jW[19]])
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L642-L650` → after: `L1048-L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L1048-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L1048-L1050) · [Before (L642-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L642-L650)

```diff
-           const pB = lB.getVerticesData("position"),
-             qB = lB.getVerticesData("normal"),
-             ZB = lB.getVerticesData("uv"),
-             NB = lB.KDB();
-           let RB = 0,
-             WB = 0;
-           if (!pB || !NB) {
-             DB.Tools.Warn("There are no position vertices or indices on the mesh!");
-             continue
+ 
+           function XW(...WW) {
+             return WW[jW[12]] = jW[2], typeof LW[WW[jW[1]]] === jW[16] ? LW[WW[jW[1]]] = CW(cW[WW[jW[1]]]) : LW[WW[jW[1]]]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L652-L667` → after: `L1052-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L1052-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L1052-L1058) · [Before (L652-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L652-L667)

```diff
-           const AB = BB[0].JF().useRightHandedSystem ? 1 : -1;
-           for (let BB = 0; BB < pB.length; BB += 3) jB.push("v " + pB[BB] * AB + " " + pB[BB + 1] + " " + pB[BB + 2]), RB++;
-           if (null != qB)
-             for (let BB = 0; BB < qB.length; BB += 3) jB.push("vn " + qB[BB] * AB + " " + qB[BB + 1] + " " + qB[BB + 2]);
-           if (null != ZB)
-             for (let BB = 0; BB < ZB.length; BB += 2) jB.push("vt " + ZB[BB] + " " + ZB[BB + 1]), WB++;
-           const VB = ["", "", ""],
-             SB = (GB.material || GB.JF().defaultMaterial)._getEffectiveOrientation(GB),
-             [nB, UB] = SB === QB.b.ClockWiseSideOrientation ? [2, 1] : [1, 2];
-           for (let BB = 0; BB < NB.length; BB += 3) {
-             const OB = [String(NB[BB] + yB), String(NB[BB + nB] + yB), String(NB[BB + UB] + yB)],
-               GB = [String(NB[BB] + JB), String(NB[BB + nB] + JB), String(NB[BB + UB] + JB)],
-               YB = OB,
-               DB = null != ZB ? GB : VB,
-               QB = null != qB ? OB : VB;
-             jB.push("f " + YB[0] + "/" + DB[0] + "/" + QB[0] + " " + YB[1] + "/" + DB[1] + "/" + QB[1] + " " + YB[2] + "/" + DB[2] + "/" + QB[2])
+ 
+           function BW(...WW) {
+             function iW() {}
+             WW[jW[12]] = jW[1], HW(WW[-jW[21]] = function(...WW) {
+               for (HW(WW[jW[12]] = jW[0], WW[jW[0]] = jW[1], WW[jW[92]] = jW[1], WW[-jW[90]] = new iW(jW[1]), WW[-jW[93]] = WW[-jW[90]], WW[jW[91]] = WW[jW[1]], WW[jW[25]] = WW[jW[2]]); WW[jW[91]] !== jW[59] || WW[jW[25]] !== jW[59];) HW(WW[jW[92]] = (WW[jW[91]] ? WW[jW[91]].val  … [truncated]
+               return WW[jW[0]] && (WW[-jW[93]].next = new iW(WW[jW[0]])), WW[-jW[90]].next
+             }, console.log(WW[-jW[21]]))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L669-L697` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L1060) · [Before (L669-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L669-L697)

```diff
-           oB && zB && GB.bakeTransformIntoVertices(zB), yB += RB, JB += WB
-         }
-         return jB.join("\n")
-       }
-       static MTL(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
-         const GB = [],
-           YB = BB.material;
-         GB.push("newmtl " + OB), GB.push("  Ns " + YB.specularPower.toFixed(4)), GB.push("  Ni 1.5000"), GB.push("  d " + YB.alpha.toFixed(4)), GB.push("  Tr 0.0000"), GB.push("  Tf 1.0000 1.0000 1.0000"), GB.push("  illum 2"), GB.push("  Ka " + YB.ambientColor.r.toFixed(4) + " " … [truncated]
-         YB.ambientTexture && GB.push("  map_Ka " + YB.ambientTexture.name), YB.diffuseTexture && GB.push("  map_Kd " + YB.diffuseTexture.name), YB.specularTexture && GB.push("  map_Ks " + YB.specularTexture.name), YB.bumpTexture && GB.push("  map_bump -imfchan z " + YB.bumpTextur … [truncated]
-         return GB.join("\n")
-       }
-     }
-     var jB = 0,
-       yB = GB(44762);
-     class JB {
- ... (13 more removed lines; see GitHub link above)
+           XW(174) + "s" in sW && BW(), VW *= xW
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L701-L709` → after: `L1066-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L1066-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L1066-L1075) · [Before (L701-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L701-L709)

```diff
-     var MB = GB(42160),
-       PB = GB(42111),
-       zB = GB(44751),
-       lB = GB(42118),
-       pB = GB(40825),
-       qB = GB(37796),
-       ZB = GB(37885),
-       NB = GB(37807);
-     const RB = NB.HighestCommonFactor,
+   },
+   38824: (WW, iW, OW) => {
+     OW.d(iW, {
+       b: () => cW,
+       e: () => LW
+     });
+     var mW = OW(38831),
+       EW = OW(2012);
+     const NW = 2,
+       PW = 1,
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L711-L715` → after: `L1077-L1113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L1077-L1113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L1077-L1113) · [Before (L711-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L711-L715)

```diff
-         ...NB,
-         TwoPi: 2 * Math.PI,
-         Sign: Math.sign,
-         Log2: Math.log2,
-         HCF: RB
+         FP: 1,
+         fluidDrag: -1,
+         fluidDragHorizontal: -1,
+         fluidDragVertical: -1,
+         gravityMultiplier: 2,
+         width: .5,
+         height: 1.8,
+         canRun: !0,
+         jumpMultiplier: 1,
+         upwardImpulseOnUse: 0,
+         canAutoStep: !0,
+         canAutoStepByBlock: {},
+         riderOffset: [0, 0, 0],
+         pose: "standing",
+         effect: null,
+         standingFriction: 5,
+ ... (21 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/257.js` (Changed code · before: `L14366-L16192` → after: `L1116-L1126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775R1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-934f5250d105f74271b6aaf4204251a07a0c7e37a291dc0a40e88eb0b8f4f775) · [After (L1116-L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/257.js#L1116-L1126) · [Before (L14366-L16192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/257.js#L14366-L16192)

```diff
-     function so(BB) {
-       return "number" === typeof BB || "boolean" === typeof BB || "bigint" === typeof BB || Co(BB)
-     }
-     class xo {
-       constructor(BB, OB) {
-         this._ns = new Map, this._prefixCount = 0, this._builder = BB, this._format = To(OB), this._nFmt = new bo(this._format)
-       }
-       withNamespace() {
-         for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
-         for (const YB of OB) this._assignNamespace(YB);
-         return this
-       }
-       serialize(BB, OB) {
-         if (!(OB = OB ?? Xo(BB))) throw new Error("can not find name for given object");
-         const GB = Eo(OB);
-         GB.ns && this._assignNamespace(GB.ns, "xmlns"), this._gatherNamespaces(BB, new WeakSet);
- ... (1811 more removed lines; see GitHub link above)
+     function cW(WW, iW, OW, LW, cW, wW, tW) {
+       if (cW.speed) return (0, mW.c)(iW, OW, LW, cW, wW, tW, WW), void(cW.ticksToReachMaxIdleFriction = NW);
+       const ZW = LW.isOnGround(),
+         xW = iW.bloxd.getSyncedClientOptions(iW.bloxd.getPlayerReader(OW)),
+         lW = null === xW ? iW.bloxd.getClientPredictedOption(OW, "groundFrictionScale") : xW.groundFrictionScale,
+         AW = null === xW ? iW.bloxd.getClientPredictedOption(OW, "airFrictionScale") : xW.airFrictionScale,
+         bW = ZW ? lW : AW,
+         jW = Math.max(PW, bW),
+         UW = cW.ticksToReachMaxIdleFriction / NW,
+         kW = (0, EW.v)(jW, bW, UW);
+       wW.friction = WW.standingFriction * ((null === xW ? iW.bloxd.getClientPredictedOption(OW, "airMomentumConservation") : xW.airMomentumConservation) ? kW : bW), cW.ticksToReachMaxIdleFriction > 0 && cW.ticksToReachMaxIdleFriction--
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/258.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/258.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44)

#### 1. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L4-L6` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/258.js#L4-L10) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/258.js#L4-L6)

```diff
-   37796: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => DB
+   41327: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       getBlockFaces: () => xW,
+       getIngameIconUrl: () => bW,
+       getItemIconUrl: () => AW,
+       getItemTextureUrl: () => lW,
+       getParticleTextureUrl: () => jW
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L8-L15` → after: `L12-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L12-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/258.js#L12-L23) · [Before (L8-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/258.js#L8-L15)

```diff
-     var YB = GB(37802);
-     class DB {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
-       }
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
-       }
+     var mW = OW(5174),
+       EW = OW(38195),
+       NW = OW(10484),
+       PW = OW(4344);
+     const LW = new Set,
+       cW = new Set;
+     let wW = null;
+ 
+     function tW(WW) {
+       LW.has(WW) || (LW.add(WW), cW.add(WW), wW ??= setTimeout((() => {
+         console.warn(`Docs gallery: no default texture for ${cW.size} names`, [...cW]), cW.clear(), wW = null
+       }), 1e3))
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L17-L32` → after: `L25-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L25-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/258.js#L25-L30) · [Before (L17-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/258.js#L17-L32)

```diff
-     DB.Instances = [], DB.OnEnginesDisposedObservable = new YB.b, DB._LastCreatedScene = null, DB.UseFallbackTexture = !0, DB.FallbackTexture = ""
-   },
-   37793: (BB, OB, GB) => {
-     GB.d(OB, {
-       c: () => YB
-     });
-     class YB {
-       static SetMatrixPrecision(BB) {
-         if (YB.MatrixTrackPrecisionChange = !1, BB && !YB.MatrixUse64Bits && YB.MatrixTrackedMatrices)
-           for (let OB = 0; OB < YB.MatrixTrackedMatrices.length; ++OB) {
-             const BB = YB.MatrixTrackedMatrices[OB],
-               GB = BB._m;
-             BB._m = new Array(16);
-             for (let OB = 0; OB < 16; ++OB) BB._m[OB] = GB[OB]
-           }
-         YB.MatrixUse64Bits = BB, YB.MatrixCurrentType = YB.MatrixUse64Bits ? Array : Float32Array, YB.MatrixTrackedMatrices = null
+ 
+     function ZW(WW, iW) {
+       try {
+         return (0, NW.getDefaultTexture)(WW, iW).url
+       } catch {
+         return tW(WW), null
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L49-L88` → after: `L35-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L35-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/258.js#L35-L49) · [Before (L49-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/258.js#L49-L88)

```diff
-       BB.updateFlag = YB._UpdateFlagSeed++
-     }
- 
-     function QB(BB, OB, GB) {
-       let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       const DB = BB.dDB(),
-         QB = OB.dDB(),
-         oB = DB[0],
-         jB = DB[1],
-         yB = DB[2],
-         JB = DB[3],
-         MB = DB[4],
-         PB = DB[5],
-         zB = DB[6],
-         lB = DB[7],
-         pB = DB[8],
- ... (24 more removed lines; see GitHub link above)
+       var iW, OW;
+       const NW = EW.n[WW];
+       if (!NW || NW.itemTexture || !NW.textureInfo) return null;
+       const {
+         textureInfo: LW,
+         texturePerSide: cW
+       } = NW, wW = WW => {
+         return "string" === typeof(iW = cW && Array.isArray(LW) ? LW[cW[WW]] : LW) ? ZW(iW, PW.g.BLOCK) : iW && "object" === typeof iW && "animTextures" in iW ? ZW((0, mW.l)(iW), PW.g.BLOCK) : null;
+         var iW
+       }, tW = wW(2);
+       return tW ? {
+         top: tW,
+         left: null !== (iW = wW(4)) && void 0 !== iW ? iW : tW,
+         right: null !== (OW = wW(0)) && void 0 !== OW ? OW : tW
+       } : null
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L91-L93` → after: `L52-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/258.js#L52-L55) · [Before (L91-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/258.js#L91-L93)

```diff
-     function oB(BB, OB, GB) {
-       let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-       QB(BB, OB, GB.dDB(), YB), DB(GB)
+     function lW(WW) {
+       var iW;
+       const OW = EW.n[WW];
+       return ZW(null !== (iW = null === OW || void 0 === OW ? void 0 : OW.itemTexture) && void 0 !== iW ? iW : "string" === typeof(null === OW || void 0 === OW ? void 0 : OW.textureInfo) ? OW.textureInfo : WW, PW.g.ITEM)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L96-L99` → after: `L58-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L58-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/258.js#L58-L60) · [Before (L96-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/258.js#L96-L99)

```diff
-     function jB(BB, OB) {
-       let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const YB = BB.dDB();
-       OB[GB] = YB[0], OB[GB + 1] = YB[1], OB[GB + 2] = YB[2], OB[GB + 3] = YB[3], OB[GB + 4] = YB[4], OB[GB + 5] = YB[5], OB[GB + 6] = YB[6], OB[GB + 7] = YB[7], OB[GB + 8] = YB[8], OB[GB + 9] = YB[9], OB[GB + 10] = YB[10], OB[GB + 11] = YB[11], OB[GB + 12] = YB[12], OB[GB + 13]  … [truncated]
+     function AW(WW) {
+       var iW, OW;
+       return EW.n[WW] ? null !== (iW = null === (OW = xW(WW)) || void 0 === OW ? void 0 : OW.top) && void 0 !== iW ? iW : lW(WW) : null
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L102-L104` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/258.js#L63-L64) · [Before (L102-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/258.js#L102-L104)

```diff
-     function yB(BB, OB) {
-       const GB = JB(BB, OB.dDB());
-       return GB && DB(OB), GB
+     function bW(WW) {
+       return ZW(WW, PW.g.ICON)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L107-L162` → after: `L67-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L67-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/258.js#L67-L72) · [Before (L107-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/258.js#L107-L162)

```diff
-     function JB(BB, OB) {
-       const GB = BB.dDB(),
-         YB = GB[0],
-         DB = GB[1],
-         QB = GB[2],
-         oB = GB[3],
-         jB = GB[4],
-         yB = GB[5],
-         JB = GB[6],
-         MB = GB[7],
-         PB = GB[8],
-         zB = GB[9],
-         lB = GB[10],
-         pB = GB[11],
-         qB = GB[12],
-         ZB = GB[13],
- ... (40 more removed lines; see GitHub link above)
+     function jW(WW) {
+       try {
+         return OW(4478)(`./${WW}.png`)
+       } catch {
+         return tW(WW), null
+       }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L166` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/258.js#L75) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/258.js#L166)

```diff
-   37778: (BB, OB, GB) => {
+   38214: (WW, iW, OW) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L168-L174` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/258.js#L77) · [Before (L168-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/258.js#L168-L174)

```diff
-       d: () => qB,
-       f: () => pB,
-       j: () => AB,
-       k: () => NB,
-       o: () => PB,
-       r: () => zB,
-       t: () => lB
+       c: () => mW
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L176-L629` → after: `L79-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L79-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/258.js#L79-L178) · [Before (L176-L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/258.js#L176-L629)

```diff
-     var YB = GB(37782),
-       DB = GB(37785),
-       QB = GB(37793),
-       oB = GB(37796),
-       jB = GB(37807),
-       yB = GB(37816),
-       JB = GB(37823);
-     const MB = BB => parseInt(BB.toString().replace(/\W/g, ""));
-     class PB {
-       constructor() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
-           OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         this.x = BB, this.y = OB
-       }
-       toString() {
-         return `{X: ${this.x} Y: ${this.y}}`
- ... (438 more removed lines; see GitHub link above)
+     const mW = {
+       "skyblock:forged:astral-astral-astral": {
+         name: "Heart of the Cosmos",
+         lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
+         damageMultiplier: 1.8,
+         cooldownMultiplier: .8,
+         ability: "starfall"
+       },
+       "skyblock:forged:astral-moonstone-sanguine": {
+         name: "Eclipse Edge",
+         lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
+         damageMultiplier: 1.7,
+         cooldownMultiplier: .81,
+         ability: "eclipseField"
+       },
+       "skyblock:forged:astral-diamond-moonstone": {
+ ... (84 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L631-L1653` → after: `L180-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L180-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/258.js#L180-L195) · [Before (L631-L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/258.js#L631-L1653)

```diff
-         return GB
-       }
-       equals(BB) {
-         return BB && this._x === BB._x && this._y === BB._y && this._z === BB._z
-       }
-       equalsWithEpsilon(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YB.b;
-         return BB && (0, jB.WithinEpsilon)(this._x, BB._x, OB) && (0, jB.WithinEpsilon)(this._y, BB._y, OB) && (0, jB.WithinEpsilon)(this._z, BB._z, OB)
-       }
-       QyB(BB, OB, GB) {
-         return this._x === BB && this._y === OB && this._z === GB
-       }
-       multiplyInPlace(BB) {
-         return this._x *= BB._x, this._y *= BB._y, this._z *= BB._z, this._isDirty = !0, this
-       }
-       multiply(BB) {
- ... (1007 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:diamond-moonstone-gold": {
+         name: "Jeweller's Pride",
+         lore: "Too pretty to fight with. Fight with it anyway.",
+         damageMultiplier: 1.24,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge"
+       },
+       "skyblock:forged:gold-gold-gold": {
+         name: "King's Ransom",
+         lore: "Worth more than the treasure it guards.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .91,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2.5
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1655-L1684` → after: `L197-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L197-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/258.js#L197-L206) · [Before (L1655-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/258.js#L1655-L1684)

```diff
-         return BB
-       }
-       toAlphaBetaGammaToRef(BB) {
-         const OB = this._z,
-           GB = this._x,
-           YB = this._y,
-           DB = this._w,
-           QB = Math.sqrt(GB * GB + YB * YB),
-           oB = Math.sqrt(OB * OB + DB * DB),
-           jB = 2 * Math.atan2(QB, oB),
-           yB = 2 * Math.atan2(OB, DB),
-           JB = 2 * Math.atan2(YB, GB),
-           MB = (yB + JB) / 2,
-           PB = (yB - JB) / 2;
-         return BB.set(PB, jB, MB), BB
-       }
- ... (14 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:gold-moonstone-gold": {
+         name: "Midas Moon",
+         lore: "Mobs it fells seem to rattle with coins.",
+         damageMultiplier: 1.18,
+         cooldownMultiplier: .92,
+         ability: "gildedEdge",
+         traits: {
+           coins: 2,
+           bossBane: .6
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1686-L2915` → after: `L208-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L208-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/258.js#L208-L235) · [Before (L1686-L2915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/258.js#L1686-L2915)

```diff
-       }
-       toAxisAngleToRef(BB) {
-         let OB;
-         const GB = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
-           YB = this._w;
-         return GB > 0 ? (OB = 2 * Math.atan2(GB, YB), BB.set(this._x / GB, this._y / GB, this._z / GB)) : (OB = 0, BB.set(1, 0, 0)), OB
-       }
-       static FromRotationMatrix(BB) {
-         const OB = new pB;
-         return pB.FromRotationMatrixToRef(BB, OB), OB
-       }
-       static FromRotationMatrixToRef(BB, OB) {
-         const GB = BB.m,
-           YB = GB[0],
-           DB = GB[4],
-           QB = GB[8],
- ... (1214 more removed lines; see GitHub link above)
+       },
+       "skyblock:forged:iron-iron-iron": {
+         name: "Old Faithful",
+         lore: "It has never let anyone down. It never will.",
+         damageMultiplier: 1.15,
+         cooldownMultiplier: .94,
+         ability: "warcry"
+       },
+       "skyblock:forged:iron-wood-wood": {
+         name: "Militia Blade",
+         lore: "Handed out at the outpost gate when the rift first opened.",
+         damageMultiplier: 1.09,
+         cooldownMultiplier: .97,
+         ability: "warcry"
+       },
+       "skyblock:forged:stone-stone-stone": {
+ ... (12 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/259.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/259.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/259.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/259.js#L4)

```diff
-   37894: (BB, OB, GB) => {
+   38249: (WW, iW, OW) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L6-L594` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/259.js#L6-L8) · [Before (L6-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/259.js#L6-L594)

```diff
-       c: () => PB,
-       g: () => zB,
-       k: () => qB,
-       o: () => lB
-     });
-     var YB = GB(37785),
-       DB = GB(37782),
-       QB = GB(37807),
-       oB = GB(37823);
- 
-     function jB(BB) {
-       return Math.pow(BB, DB.d)
-     }
- 
-     function yB(BB) {
-       return BB <= .04045 ? .0773993808 * BB : Math.pow(.947867299 * (BB + .055), 2.4)
- ... (573 more removed lines; see GitHub link above)
+       e: () => NW,
+       h: () => mW,
+       i: () => EW
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L601` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/259.js#L15) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/259.js#L601)

```diff
-   37807: (BB, OB, GB) => {
+   38285: (WW, iW, OW) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L617` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/259.js#L31) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/259.js#L617)

```diff
-       return BB === OB ? BB : Math.random() * (OB - BB) + BB
+       return WW === iW ? WW : Math.random() * (iW - WW) + WW
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L702` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/259.js#L116) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/259.js#L702)

```diff
-       return YB = Math.abs(OB - BB) <= GB ? OB : BB + Math.sign(OB - BB) * GB, YB
+       return mW = Math.abs(iW - WW) <= OW ? iW : WW + Math.sign(iW - WW) * OW, mW
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L708` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/259.js#L122) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/259.js#L708)

```diff
-       return DB = -GB < YB && YB < GB ? OB : SB(BB, OB = BB + YB, GB), DB
+       return EW = -OW < mW && mW < OW ? iW : SW(WW, iW = WW + mW, OW), EW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L721` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/259.js#L135) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/259.js#L721)

```diff
-       return 0 === GB ? OB : kB(OB, GB)
+       return 0 === OW ? iW : JW(iW, OW)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L750` → after: `L164-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L164-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/259.js#L164-L177) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/259.js#L750)

```diff
-   37785: (BB, OB, GB) => {
+   38235: (WW, iW, OW) => {
+     OW.r(iW), OW.d(iW, {
+       Matrix: () => mW.d,
+       Quaternion: () => mW.g,
+       RegisterMathVector: () => mW.j,
+       TmpVectors: () => mW.l,
+       Vector2: () => mW.m,
+       fA: () => mW.q,
+       Vector4: () => mW.r
+     });
+     var mW = OW(38241);
+     (0, mW.j)()
+   },
+   38253: (WW, iW, OW) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L761-L763` → after: `L188-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/259.js#L188-L190) · [Before (L761-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/259.js#L761-L763)

```diff
-       e: () => YB,
-       i: () => DB,
-       l: () => oB
+       c: () => mW,
+       f: () => EW,
+       j: () => PW
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L788` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/259.js#L215) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/259.js#L788)

```diff
-   37823: (BB, OB, GB) => {
+   38299: (WW, iW, OW) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L790-L791` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/259.js#L217-L218) · [Before (L790-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/259.js#L790-L791)

```diff
-       c: () => QB,
-       f: () => DB
+       d: () => NW,
+       h: () => EW
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/260.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/260.js` (31 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L2)

```diff
- export const ids = [260];
+ export const ids = [260, 267];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L4-L6` → after: `L5-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L5-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L5-L25) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L4-L6)

```diff
-   37796: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => DB
+   39459: WW => {
+     WW.exports = function(WW) {
+       return null != WW && null != WW.constructor && "function" === typeof WW.constructor.isBuffer && WW.constructor.isBuffer(WW)
+     }
+   },
+   39443: (WW, iW, OW) => {
+     var mW = OW(39452),
+       EW = OW(39456),
+       NW = OW(39459);
+     OW.g.__TYPEDARRAY_POOL || (OW.g.__TYPEDARRAY_POOL = {
+       UINT8: EW([32, 0]),
+       UINT16: EW([32, 0]),
+       UINT32: EW([32, 0]),
+       INT8: EW([32, 0]),
+       INT16: EW([32, 0]),
+       INT32: EW([32, 0]),
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L8-L11` → after: `L27-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L27-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L27-L93) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L8-L11)

```diff
-     var YB = GB(37802);
-     class DB {
-       static get LastCreatedEngine() {
-         return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
+     var PW = "undefined" !== typeof Uint8ClampedArray,
+       LW = OW.g.__TYPEDARRAY_POOL;
+     LW.UINT8C || (LW.UINT8C = EW([32, 0])), LW.BUFFER || (LW.BUFFER = EW([32, 0]));
+     var cW = LW.DATA,
+       wW = LW.BUFFER;
+ 
+     function tW(WW) {
+       if (WW) {
+         var iW = WW.length || WW.byteLength,
+           OW = mW.log2(iW);
+         cW[OW].push(WW)
+       }
+     }
+ 
+     function ZW(WW) {
+       WW = mW.nextPow2(WW);
+ ... (51 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L13-L14` → after: `L95-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L95-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L95-L128) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L13-L14)

```diff
-       static get LastCreatedScene() {
-         return this._LastCreatedScene
+     }, iW.freeUint8 = iW.freeUint16 = iW.freeUint32 = iW.freeInt8 = iW.freeInt16 = iW.freeInt32 = iW.freeFloat32 = iW.freeFloat = iW.freeFloat64 = iW.freeDouble = iW.freeUint8Clamped = iW.freeDataView = function(WW) {
+       tW(WW.buffer)
+     }, iW.freeArrayBuffer = tW, iW.freeBuffer = function(WW) {
+       wW[mW.log2(WW.length)].push(WW)
+     }, iW.malloc = function(WW, iW) {
+       if (void 0 === iW || "arraybuffer" === iW) return ZW(WW);
+       switch (iW) {
+         case "uint8":
+           return xW(WW);
+         case "uint16":
+           return lW(WW);
+         case "uint32":
+           return AW(WW);
+         case "int8":
+           return bW(WW);
+         case "int16":
+ ... (18 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L19-L56` → after: `L135-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L135-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L135-L241) · [Before (L19-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L19-L56)

```diff
-   39358: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => QB
-     });
-     var YB = GB(39366);
-     const DB = (BB, OB, GB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : GB && "object" === typeof BB ? {
-       ...BB
-     } : null : BB.clone(OB) : null;
-     class QB {
-       static DeepCopy(BB, OB, GB, QB) {
-         let oB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         const jB = function(BB) {
-           const OB = [];
-           do {
-             const GB = Object.getOwnPropertyNames(BB);
-             for (const BB of GB) - 1 === OB.indexOf(BB) && OB.push(BB)
- ... (22 more removed lines; see GitHub link above)
+   39452: (WW, iW) => {
+     function OW(WW) {
+       var iW = 32;
+       return (WW &= -WW) && iW--, 65535 & WW && (iW -= 16), 16711935 & WW && (iW -= 8), 252645135 & WW && (iW -= 4), 858993459 & WW && (iW -= 2), 1431655765 & WW && (iW -= 1), iW
+     }
+     iW.INT_BITS = 32, iW.INT_MAX = 2147483647, iW.INT_MIN = -1 << 31, iW.sign = function(WW) {
+       return (WW > 0) - (WW < 0)
+     }, iW.abs = function(WW) {
+       var iW = WW >> 31;
+       return (WW ^ iW) - iW
+     }, iW.min = function(WW, iW) {
+       return iW ^ (WW ^ iW) & -(WW < iW)
+     }, iW.max = function(WW, iW) {
+       return WW ^ (WW ^ iW) & -(WW < iW)
+     }, iW.isPow2 = function(WW) {
+       return !(WW & WW - 1) && !!WW
+ ... (91 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L62-L67` → after: `L252-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L252-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L252-L287) · [Before (L62-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L62-L67)

```diff
-   38589: (BB, OB, GB) => {
-     function YB() {
-       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
-         const OB = 16 * Math.random() | 0;
-         return ("x" === BB ? OB : 3 & OB | 8).toString(16)
-       }))
+   39485: (WW, iW) => {
+     var OW = "d",
+       mW = "ax",
+       EW = "fp",
+       NW = "es",
+       PW = "rs",
+       LW = "re",
+       cW = "rb",
+       wW = "bs",
+       tW = "be",
+       ZW = "bb",
+       xW = [OW, mW, "vv", PW, LW, cW, "ri", wW, tW, ZW, "bi"];
+ 
+     function lW(WW) {
+       var iW = "bruteForce" + (WW ? "Full" : "Partial"),
+         mW = [],
+ ... (20 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L69-L71` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L289) · [Before (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L69-L71)

```diff
-     GB.d(OB, {
-       e: () => YB
-     })
+     iW.partial = lW(!1), iW.full = lW(!0)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L73-L126` → after: `L291-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L291-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L291-L362) · [Before (L73-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L73-L126)

```diff
-   39366: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => YB
-     });
-     class YB {
-       static _CheckLimit(BB, OB) {
-         let GB = YB._LogLimitOutputs[BB];
-         return GB ? GB.current++ : (GB = {
-           limit: OB,
-           current: 1
-         }, YB._LogLimitOutputs[BB] = GB), GB.current <= GB.limit
-       }
-       static _GenerateLimitMessage(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const GB = YB._LogLimitOutputs[BB];
-         if (!GB || !YB.MessageLimitReached) return;
- ... (38 more removed lines; see GitHub link above)
+   39482: (WW, iW, OW) => {
+     WW.exports = function(WW, iW, OW, NW, tW, hW, HW, nW, uW) {
+       ! function(WW, iW) {
+         var OW = 8 * EW.log2(iW + 1) * (WW + 1) | 0,
+           NW = EW.nextPow2(MW * OW);
+         SW.length < NW && (mW.free(SW), SW = mW.mallocInt32(NW));
+         var PW = EW.nextPow2(KW * OW);
+         YW.length < PW && (mW.free(YW), YW = mW.mallocDouble(PW))
+       }(WW, NW + HW);
+       var oW, dW = 0,
+         eW = 2 * WW;
+       yW(dW++, 0, 0, NW, 0, HW, OW ? 16 : 0, -1 / 0, 1 / 0), OW || yW(dW++, 0, 0, HW, 0, NW, 1, -1 / 0, 1 / 0);
+       for (; dW > 0;) {
+         var vW = (dW -= 1) * MW,
+           gW = SW[vW],
+           DW = SW[vW + 1],
+ ... (56 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L144-L154` → after: `L438-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L438-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L438-L477) · [Before (L144-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L144-L154)

```diff
-   37802: (BB, OB, GB) => {
-     GB.d(OB, {
-       b: () => oB
-     });
-     const YB = "undefined" !== typeof WeakRef;
-     class DB {
-       constructor(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           GB = arguments.length > 2 ? arguments[2] : void 0,
-           YB = arguments.length > 3 ? arguments[3] : void 0;
-         this.initialize(BB, OB, GB, YB)
+   39487: (WW, iW, OW) => {
+     WW.exports = function(WW, iW, OW, PW, LW, cW) {
+       if (PW <= OW + 1) return OW;
+       var wW = OW,
+         tW = PW,
+         ZW = PW + OW >>> 1,
+         xW = 2 * WW,
+         lW = ZW,
+         AW = LW[xW * ZW + iW];
+       for (; wW < tW;) {
+         if (tW - wW < EW) {
+           NW(WW, iW, wW, tW, LW, cW), AW = LW[xW * ZW + iW];
+           break
+         }
+         var bW = tW - wW,
+           jW = Math.random() * bW + wW | 0,
+ ... (24 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L156-L160` → after: `L479-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L479-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L479-L521) · [Before (L156-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L156-L160)

```diff
-       initialize(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           GB = arguments.length > 2 ? arguments[2] : void 0,
-           YB = arguments.length > 3 ? arguments[3] : void 0;
-         return this.mask = BB, this.skipNextObservers = OB, this.target = GB, this.currentTarget = YB, this
+       return mW(WW, iW, OW, ZW, LW, cW, LW[xW * ZW + iW])
+     };
+     var mW = OW(39494)("lo<p0", ["p0"]),
+       EW = 8;
+ 
+     function NW(WW, iW, OW, mW, EW, NW) {
+       for (var PW = 2 * WW, LW = PW * (OW + 1) + iW, cW = OW + 1; cW < mW; ++cW, LW += PW)
+         for (var wW = EW[LW], tW = cW, ZW = PW * (cW - 1); tW > OW && EW[ZW + iW] > wW; --tW, ZW -= PW) {
+           for (var xW = ZW, lW = ZW + PW, AW = 0; AW < PW; ++AW, ++xW, ++lW) {
+             var bW = EW[xW];
+             EW[xW] = EW[lW], EW[lW] = bW
+           }
+           var jW = NW[tW];
+           NW[tW] = NW[tW - 1], NW[tW - 1] = jW
+         }
+     }
+ ... (27 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L163-L166` → after: `L524-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L524-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L524-L770) · [Before (L163-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L163-L166)

```diff
-     class QB {
-       constructor(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         this.callback = BB, this.mask = OB, this.scope = GB, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
+ 
+     function mW(WW, iW, OW) {
+       iW *= 2;
+       var mW = OW[WW *= 2],
+         EW = OW[WW + 1];
+       OW[WW] = OW[iW], OW[WW + 1] = OW[iW + 1], OW[iW] = mW, OW[iW + 1] = EW
+     }
+ 
+     function EW(WW, iW, OW) {
+       iW *= 2, OW[WW *= 2] = OW[iW], OW[WW + 1] = OW[iW + 1]
+     }
+ 
+     function NW(WW, iW, OW, mW) {
+       iW *= 2, OW *= 2;
+       var EW = mW[WW *= 2],
+         NW = mW[WW + 1];
+ ... (231 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L168-L170` → after: `L772-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L772-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L772-L817) · [Before (L168-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L168-L170)

```diff
-       remove() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._remove && this._remove(BB)
+     };
+     var mW = OW(39443),
+       EW = OW(39452),
+       NW = OW(39476),
+       PW = 1 << 28,
+       LW = 1024,
+       cW = mW.mallocInt32(LW),
+       wW = mW.mallocInt32(LW),
+       tW = mW.mallocInt32(LW),
+       ZW = mW.mallocInt32(LW),
+       xW = mW.mallocInt32(LW),
+       lW = mW.mallocInt32(LW),
+       AW = mW.mallocDouble(8192);
+ 
+     function bW(WW, iW, OW, mW) {
+       var EW = iW[mW],
+ ... (30 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L173-L181` → after: `L821-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L821-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L821-L872) · [Before (L173-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L173-L181)

```diff
-     class oB {
-       static FromPromise(BB, OB) {
-         const GB = new oB;
-         return BB.then((BB => {
-           GB.notifyObservers(BB)
-         })).catch((BB => {
-           if (!OB) throw BB;
-           OB.notifyObservers(BB)
-         })), GB
+   },
+   39404: (WW, iW, OW) => {
+     WW.exports = function() {
+       var WW = this;
+       this.components = {}, this.comps = this.components;
+       var iW = this.components,
+         OW = 1,
+         EW = {},
+         NW = [],
+         PW = [],
+         LW = {
+           timeout: !1,
+           removals: [],
+           multiComps: []
+         };
+ 
+ ... (36 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L183-L197` → after: `L874-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L874-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L874-L926) · [Before (L183-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L183-L197)

```diff
-       get observers() {
-         return this._observers
-       }
-       constructor(BB) {
-         let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         this.notifyIfTriggered = OB, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new DB(0), BB && (this._onObserverAdded = BB)
-       }
-       add(BB) {
-         let OB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           GB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-         if (!BB) return null;
-         const DB = new QB(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
-         DB.unregisterOnNextCall = GB, OB ? this._observers.unshift(DB) : this._observers.push(DB), this._onObserverAdded && this._onObserverAdded(DB), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(DB, this._lastNotifiedValue);
-         const oB = YB ? new WeakRef(this) : {
-           deref: () => this
+       this.Tb = EW, this._systems = NW, this._renderSystems = PW, this.sG = function(iW) {
+         var mW = OW++;
+         return Array.isArray(iW) && iW.forEach((iW => WW.zD(mW, iW))), mW
+       }, this.deleteEntity = function(iW) {
+         return Object.keys(EW).forEach((WW => {
+           EW[WW].hash[iW] && cW(iW, WW)
+         })), WW
+       }, this.bOW = function(WW) {
+         if (!WW) throw new Error("Missing component definition");
+         var OW = WW.name;
+         if (!OW) throw new Error("Component definition must have a name property.");
+         if ("string" !== typeof OW) throw new Error("Component name must be a string.");
+         if ("" === OW) throw new Error("Component name must be a non-empty string.");
+         if (EW[OW]) throw new Error(`Component ${OW} already exists.`);
+         var LW = {};
+         return LW.name = OW, LW.multi = !!WW.multi, LW.order = isNaN(WW.order) ? 99 : WW.order, LW.stateConstructor = WW.stateConstructor || null, LW.state = WW.state || {}, LW.mY = WW.mY || null, LW.mH = WW.mH || null, LW.system = WW.system || null, LW.ZY = WW.ZY || null, iW[OW] … [truncated]
+ ... (37 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L199-L203` → after: `L928-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L928-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L928-L1006) · [Before (L199-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L199-L203)

```diff
-         return DB._remove = function() {
-           let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-           const OB = oB.deref();
-           OB && (BB ? OB.remove(DB) : OB._remove(DB))
-         }, DB
+         if (NW.rD = WW, PW.multi) {
+           var cW = LW.hash[WW];
+           cW || (cW = [], LW.add(WW, cW)), cW.push(NW)
+         } else LW.add(WW, NW);
+         return PW.mY && PW.mY(WW, NW), this
+       }, this.liW = function(WW, iW) {
+         var OW = EW[iW];
+         if (!OW) throw new Error(`Unknown component: ${iW}.`);
+         return !!OW.hash[WW]
+       }, this.mV = function(iW, OW) {
+         if (!EW[OW]) throw new Error(`Unknown component: ${OW}.`);
+         return cW(iW, OW), WW
+       }, this.getState = function(WW, iW) {
+         var OW = EW[iW];
+         if (!OW) throw new Error(`Unknown component: ${iW}.`);
+         return OW.hash[WW]
+ ... (63 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L205-L206` → after: `L1008-L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1008-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L1008-L1012) · [Before (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L205-L206)

```diff
-       addOnce(BB) {
-         return this.add(BB, void 0, void 0, void 0, !0)
+       add(WW, iW) {
+         if ("number" === typeof this._map[WW]) {
+           var OW = this._map[WW];
+           this.hash[WW] = iW, this.list[OW] = iW, this._idList[OW] = WW
+         } else this._map[WW] = this.list.length, this.hash[WW] = iW, this.list.push(iW), this._idList.push(WW)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L209-L216` → after: `L1015-L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1015-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L1015-L1296) · [Before (L209-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L209-L216)

```diff
-         if (!BB) return !1;
-         BB._remove = null;
-         return -1 !== this._observers.indexOf(BB) && (this._deferUnregister(BB), !0)
-       }
-       removeCallback(BB, OB) {
-         for (let GB = 0; GB < this._observers.length; GB++) {
-           const YB = this._observers[GB];
-           if (!YB._willBeUnregistered && (YB.callback === BB && (!OB || OB === YB.scope))) return this._deferUnregister(YB), !0
+         var iW = this._map[WW];
+         this.hash[WW] = null, this.list[iW] = null, this._pendingRemovals.push(WW)
+       }
+       dispose() {
+         this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
+       }
+       flush() {
+         for (var WW = 0; WW < this._pendingRemovals.length; WW++) {
+           var OW = this._pendingRemovals[WW];
+           null === this.hash[OW] && iW(this, OW)
+         }
+         this._pendingRemovals.length = 0
+       }
+     }
+   },
+   39234: (WW, iW, OW) => {
+ ... (266 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L249-L253` → after: `L1299-L1333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1299-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L1299-L1333) · [Before (L249-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L249-L253)

```diff
-       notifyObserver(BB, OB) {
-         let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
-         if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = OB), BB._willBeUnregistered) return;
-         const YB = this._eventState;
-         YB.mask = GB, YB.skipNextObservers = !1, BB.unregisterOnNextCall && this._deferUnregister(BB), BB.callback(OB, YB)
+       kW || (kW = new oi);
+       var DW = kW.get(WW);
+       if (DW) return DW;
+       if (kW.set(WW, oW), !dW) var VW = OW ? function(WW) {
+         return function(WW, iW, OW) {
+           var mW = iW(WW);
+           return ri(WW) ? mW : function(WW, iW) {
+             for (var OW = -1, mW = iW.length, EW = WW.length; ++OW < mW;) WW[EW + OW] = iW[OW];
+             return WW
+           }(mW, OW(WW))
+         }(WW, iO, Bi)
+       }(WW) : iO(WW);
+       return function(WW, iW) {
+         for (var OW = -1, mW = WW ? WW.length : 0; ++OW < mW && !1 !== iW(WW[OW], OW, WW););
+       }(VW || WW, (function(EW, NW) {
+         VW && (EW = WW[NW = EW]), ei(oW, NW, gi(EW, iW, OW, mW, NW, WW, kW))
+ ... (19 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L255-L256` → after: `L1335-L1411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1335-L1411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L1335-L1411) · [Before (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L255-L256)

```diff
-       hasObservers() {
-         return this._observers.length - this._numObserversMarkedAsDeleted > 0
+       return OW
+     }
+ 
+     function Ci(WW, iW) {
+       var OW = WW.__data__;
+       return function(WW) {
+         var iW = typeof WW;
+         return "string" == iW || "number" == iW || "symbol" == iW || "boolean" == iW ? "__proto__" !== WW : null === WW
+       }(iW) ? OW["string" == typeof iW ? "string" : "hash"] : OW.map
+     }
+ 
+     function Xi(WW, iW) {
+       var OW = function(WW, iW) {
+         return null == WW ? void 0 : WW[iW]
+       }(WW, iW);
+       return Di(OW) ? OW : void 0
+ ... (61 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L258-L261` → after: `L1413-L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1413-L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L1413-L1503) · [Before (L258-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L258-L261)

```diff
-       clear() {
-         for (; this._observers.length;) {
-           const BB = this._observers.pop();
-           BB && (BB._remove = null)
+       return OW.set(WW, iW), this
+     };
+     var Bi = Zi ? GW(Zi, Object) : function() {
+         return []
+       },
+       qi = function(WW) {
+         return Oi.call(WW)
+       };
+ 
+     function Ri(WW, iW) {
+       return !!(iW = null == iW ? EW : iW) && ("number" == typeof WW || dW.test(WW)) && WW > -1 && WW % 1 == 0 && WW < iW
+     }
+ 
+     function Gi(WW) {
+       var iW = WW && WW.constructor;
+       return WW === ("function" == typeof iW && iW.prototype || zW)
+ ... (75 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L263` → after: `L1505-L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1505-L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L1505-L1640) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L263)

```diff
-         this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
+         if (cW < EW || LW > NW) return 1 / 0;
+         LW > EW && (EW = LW), cW < NW && (NW = cW)
+       }
+       return EW > NW ? 1 / 0 : EW
+     }
+     WW.exports = function(WW, OW, mW, EW) {
+       var NW = iW(OW, mW, EW);
+       if (NW === 1 / 0) WW = null;
+       else {
+         WW = WW || [];
+         for (var PW = 0; PW < OW.length; PW++) WW[PW] = OW[PW] + mW[PW] * NW
+       }
+       return WW
+     }, WW.exports.distance = iW
+   },
+   38900: (WW, iW, OW) => {
+ ... (120 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L265-L266` → after: `L1642-L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1642-L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L1642-L1670) · [Before (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L265-L266)

```diff
-       cleanLastNotifiedState() {
-         this._hasNotified = !1, this._lastNotifiedValue = void 0
+       static GetTopPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[1], iW.normal.y = OW[7] - OW[5], iW.normal.z = OW[11] - OW[9], iW.d = OW[15] - OW[13], iW.normalize()
+       }
+       static GetBottomPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[1], iW.normal.y = OW[7] + OW[5], iW.normal.z = OW[11] + OW[9], iW.d = OW[15] + OW[13], iW.normalize()
+       }
+       static GetPlanesToRef(WW, iW) {
+         EW.GetNearPlaneToRef(WW, iW[0]), EW.GetFarPlaneToRef(WW, iW[1]), EW.GetLeftPlaneToRef(WW, iW[2]), EW.GetRightPlaneToRef(WW, iW[3]), EW.GetTopPlaneToRef(WW, iW[4]), EW.GetBottomPlaneToRef(WW, iW[5])
+       }
+       static IsPointInFrustum(WW, iW) {
+         for (let OW = 0; OW < 6; OW++)
+           if (iW[OW].dotCoordinate(WW) < 0) return !1;
+         return !0
+       }
+ ... (13 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L269-L270` → after: `L1673-L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1673-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L1673-L1733) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L269-L270)

```diff
-         const BB = new oB;
-         return BB._observers = this._observers.slice(0), BB
+         return new EW(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+       getClassName() {
+         return "Plane"
+       }
+       getHashCode() {
+         let WW = this.normal.getHashCode();
+         return WW = 397 * WW ^ this.d, WW
+       }
+       normalize() {
+         const WW = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let iW = 0;
+         return 0 !== WW && (iW = 1 / WW), this.normal.x *= iW, this.normal.y *= iW, this.normal.z *= iW, this.d *= iW, this
+       }
+       transform(WW) {
+         const iW = EW._TmpMatrix;
+ ... (45 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L272-L276` → after: `L1735-L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1735-L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L1735-L1740) · [Before (L272-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L272-L276)

```diff
-       hasSpecificMask() {
-         let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
-         for (const OB of this._observers)
-           if (OB.mask & BB || OB.mask === BB) return !0;
-         return !1
+       static FromPositionAndNormalToRef(WW, iW, OW) {
+         return OW.normal.HJ(iW), OW.normal.normalize(), OW.d = -WW.dot(OW.normal), OW
+       }
+       static SignedDistanceToPlaneFromPositionAndNormal(WW, iW, OW) {
+         const EW = -(iW.x * WW.x + iW.y * WW.y + iW.z * WW.z);
+         return mW.q.Dot(OW, iW) + EW
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L280` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L1745) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L280)

```diff
-   63864: (BB, OB, GB) => {
+   38235: (WW, iW, OW) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L282-L285` → after: `L1747-L1753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1747-L1753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L1747-L1753) · [Before (L282-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L282-L285)

```diff
-       AsyncLoop: () => YB.b,
-       RegisterTools: () => YB.f,
-       Tools: () => YB.j,
-       className: () => YB.k
+       Matrix: () => mW.d,
+       Quaternion: () => mW.g,
+       RegisterMathVector: () => mW.j,
+       TmpVectors: () => mW.l,
+       Vector2: () => mW.m,
+       fA: () => mW.q,
+       Vector4: () => mW.r
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L287-L288` → after: `L1755-L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1755-L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L1755-L1756) · [Before (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L287-L288)

```diff
-     var YB = GB(41097);
-     (0, YB.f)()
+     var mW = OW(38241);
+     (0, mW.j)()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L290` → after: `L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L1758) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L290)

```diff
-   37823: (BB, OB, GB) => {
+   39271: (WW, iW, OW) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L292-L293` → after: `L1760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L1760) · [Before (L292-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L292-L293)

```diff
-       c: () => QB,
-       f: () => DB
+       e: () => mW
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L295-L298` → after: `L1762-L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1762-L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L1762-L1774) · [Before (L295-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L295-L298)

```diff
-     const YB = {};
- 
-     function DB(BB, OB) {
-       YB[BB] = OB
+     class mW {
+       constructor(WW, iW, OW, mW) {
+         this.x = WW, this.y = iW, this.width = OW, this.height = mW
+       }
+       toGlobal(WW, iW) {
+         return new mW(this.x * WW, this.y * iW, this.width * WW, this.height * iW)
+       }
+       toGlobalToRef(WW, iW, OW) {
+         return OW.x = this.x * WW, OW.y = this.y * iW, OW.width = this.width * WW, OW.height = this.height * iW, this
+       }
+       clone() {
+         return new mW(this.x, this.y, this.width, this.height)
+       }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L300-L302` → after: `L1776-L1782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1776-L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/260.js#L1776-L1782) · [Before (L300-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/260.js#L300-L302)

```diff
- 
-     function QB(BB) {
-       return YB[BB]
+   },
+   39088: (WW, iW, OW) => {
+     function mW() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
+         const iW = 16 * Math.random() | 0;
+         return ("x" === WW ? iW : 3 & iW | 8).toString(16)
+       }))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/261.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/261.js` (44 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa)

#### 1. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L2)

```diff
- export const ids = [261];
+ export const ids = [261, 267, 272];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L4)

```diff
-   37843: (BB, OB, GB) => {
+   41753: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L6-L8` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L6-L7) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L6-L8)

```diff
-       b: () => jB,
-       f: () => oB,
-       g: () => DB
+       d: () => PW,
+       f: () => LW
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L10-L12` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L9-L12) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L10-L12)

```diff
-     const YB = 1024,
-       DB = 16,
-       QB = 36e4;
+     var mW = OW(39911),
+       EW = OW(41538),
+       NW = OW(41723),
+       PW = {};
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L15-L25` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L15) · [Before (L15-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L15-L25)

```diff
-         this.boneCount = BB, this.rotation = void 0, this.position = void 0, this.scale = void 0, this.touched = void 0, this.rotation = new Float64Array(3 * BB), this.position = new Float64Array(3 * BB), this.scale = new Float64Array(3 * BB).fill(1), this.touched = new Uint8Arra … [truncated]
-       }
-       clampToLimits() {
-         for (let BB = 0; BB < this.boneCount; BB++)
-           if (0 !== this.touched[BB])
-             for (let OB = 3 * BB; OB < 3 * BB + 3; OB++) {
-               const BB = this.rotation[OB],
-                 GB = this.position[OB],
-                 oB = this.scale[OB];
-               BB >= -36e4 && BB <= QB || (this.rotation[OB] = yB(BB, QB)), GB >= -1024 && GB <= YB || (this.position[OB] = yB(GB, YB)), oB >= -DB && oB <= DB || (this.scale[OB] = yB(oB, DB, 1))
-             }
+         this.attachedToElement = !1, this.attached = {}, this.camera = WW, this.checkInputs = () => {}
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L27-L32` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L17-L19) · [Before (L27-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L27-L32)

```diff
-       reset() {
-         for (let BB = 0; BB < this.boneCount; BB++)
-           if (0 !== this.touched[BB]) {
-             this.touched[BB] = 0;
-             for (let OB = 3 * BB; OB < 3 * BB + 3; OB++) this.rotation[OB] = 0, this.position[OB] = 0, this.scale[OB] = 1
-           }
+       add(WW) {
+         const iW = WW.getSimpleName();
+         this.attached[iW] ? mW.b.Warn("camera input of type " + iW + " already exists on camera") : (this.attached[iW] = WW, WW.camera = this.camera, WW.checkInputs && (this.checkInputs = this._addCheckInputs(WW.checkInputs.bind(WW))), this.attachedToElement && WW.attachControl(t … [truncated]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L34-L54` → after: `L21-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L21-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L21-L58) · [Before (L34-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L34-L54)

```diff
-     }
-     class jB {
-       constructor(BB) {
-         this.rotation = void 0, this.position = void 0, this.scaleDelta = void 0, this.boneWeight = void 0, this.touched = void 0, this.overrides = void 0, this.touchedBones = void 0, this.touchedCount = 0, this.rotation = new Float64Array(3 * BB), this.position = new Float64Arra … [truncated]
-       }
-       touch(BB, OB, GB) {
-         0 === this.touched[BB] && (this.touched[BB] = 1, this.touchedBones[this.touchedCount++] = BB), this.boneWeight[BB] += OB, GB && (this.overrides[BB] = 1)
-       }
-       applyTo(BB, OB, GB) {
-         let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         for (let DB = 0; DB < this.touchedCount; DB++) {
-           const QB = this.touchedBones[DB],
-             oB = this.boneWeight[QB];
-           if (GB || 1 === this.overrides[QB]) {
-             const GB = OB * Math.min(1, oB);
-             for (let OB = 3 * QB; OB < 3 * QB + 3; OB++) BB.rotation[OB] += (this.rotation[OB] / oB - BB.rotation[OB]) * GB, BB.position[OB] += (this.position[OB] / oB - BB.position[OB]) * GB, BB.scale[OB] += (1 + this.scaleDelta[OB] / oB - BB.scale[OB]) * GB
- ... (5 more removed lines; see GitHub link above)
+       remove(WW) {
+         for (const iW in this.attached) {
+           const OW = this.attached[iW];
+           if (OW === WW) return OW.detachControl(), OW.camera = null, delete this.attached[iW], void this.rebuildInputCheck()
+         }
+       }
+       removeByType(WW) {
+         for (const iW in this.attached) {
+           const OW = this.attached[iW];
+           OW.getClassName() === WW && (OW.detachControl(), OW.camera = null, delete this.attached[iW], this.rebuildInputCheck())
+         }
+       }
+       _addCheckInputs(WW) {
+         const iW = this.checkInputs;
+         return () => {
+           iW(), WW()
+ ... (22 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L58-L61` → after: `L62-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L62-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L62-L69) · [Before (L58-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L58-L61)

```diff
-         for (let BB = 0; BB < this.touchedCount; BB++) {
-           const OB = this.touchedBones[BB];
-           this.touched[OB] = 0, this.overrides[OB] = 0, this.boneWeight[OB] = 0;
-           for (let BB = 3 * OB; BB < 3 * OB + 3; BB++) this.rotation[BB] = 0, this.position[BB] = 0, this.scaleDelta[BB] = 0
+         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
+       }
+       serialize(WW) {
+         const iW = {};
+         for (const OW in this.attached) {
+           const WW = this.attached[OW],
+             mW = EW.d.Serialize(WW);
+           iW[WW.getClassName()] = mW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L63` → after: `L71-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L71-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L71-L92) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L63)

```diff
-         this.touchedCount = 0
+         WW.inputsmgr = iW
+       }
+       parse(WW) {
+         const iW = WW.inputsmgr;
+         if (iW) {
+           this.clear();
+           for (const WW in iW) {
+             const OW = PW[WW];
+             if (OW) {
+               const mW = iW[WW],
+                 NW = EW.d.Parse((() => new OW), mW, null);
+               this.add(NW)
+             }
+           }
+         } else
+           for (const OW in this.attached) {
+ ... (6 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L72` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L96) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L72)

```diff
-   37841: (BB, OB, GB) => {
+   41760: (WW, iW, OW) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L74` → after: `L98-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L98-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L98-L105) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L74)

```diff
-       d: () => yB,
+       b: () => mW.c
+     });
+     var mW = OW(41765);
+     (0, mW.e)()
+   },
+   41765: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => tW,
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L77-L85` → after: `L108-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L108-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L108-L191) · [Before (L77-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L77-L85)

```diff
-     var YB = GB(37836),
-       DB = GB(353),
-       QB = GB(1998),
-       oB = GB(37843);
- 
-     function jB(BB) {
-       if ("NG" in BB) return fB.createAnimationScript(BB);
-       return new MB(BB).createAnimationScript()
-     }
+     var mW = OW(41516),
+       EW = OW(41519),
+       NW = OW(38241),
+       PW = OW(38372),
+       LW = OW(41773),
+       cW = OW(41732),
+       wW = OW(38299);
+     let tW = (() => {
+         var WW;
+         let iW, OW, cW = LW.b,
+           wW = [],
+           tW = [],
+           ZW = [],
+           xW = [];
+         return WW = class extends cW {
+           constructor(WW, iW, OW, EW) {
+ ... (68 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L87-L89` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L193-L194) · [Before (L87-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L87-L89)

```diff
-     function yB(BB, OB, GB, DB) {
-       const QB = BB.NG <= 0 ? 1 : OB + GB * Math.max(0, DB) / BB.NG;
-       return BB.WG === YB.m.LoopOnLastFrame ? QB % 1 : BB.WG === YB.m.NoLoop && QB >= 1 ? null : Math.min(1, QB)
+     function xW() {
+       ZW || (ZW = !0, cW.d.AddNodeConstructor("Light_Type_3", ((WW, iW) => () => new tW(WW, NW.q.Zero(), iW))), (0, wW.h)("BABYLON.HemisphericLight", tW))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L92-L102` → after: `L211-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L211-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L211-L214) · [Before (L92-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L92-L102)

```diff
-       createAnimationScript(BB) {
-         const {
-           NG: OB,
-           loop: GB,
-           AG: YB
-         } = BB;
-         return {
-           NG: Math.round(OB),
-           WG: this.createLoopMode(null !== GB && void 0 !== GB && GB),
-           AG: this.createNodeSkeletonAnimationScript(null !== YB && void 0 !== YB ? YB : null)
-         }
+       static GetPlanes(WW) {
+         const iW = [];
+         for (let OW = 0; OW < 6; OW++) iW.push(new mW.c(0, 0, 0, 0));
+         return EW.GetPlanesToRef(WW, iW), iW
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L104-L113` → after: `L216-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L216-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L216-L218) · [Before (L104-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L104-L113)

```diff
-       createLoopMode(BB) {
-         switch (BB) {
-           case !1:
-             return YB.m.NoLoop;
-           case !0:
-             return YB.m.LoopOnLastFrame;
-           case "hold-on-last-frame":
-             return YB.m.HoldOnLastFrame
-         }
-         throw new Error(`Invalid loop mode schema: ${BB}`)
+       static GetNearPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[2], iW.normal.y = OW[7] + OW[6], iW.normal.z = OW[11] + OW[10], iW.d = OW[15] + OW[14], iW.normalize()
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L115-L122` → after: `L220-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L220-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L220-L222) · [Before (L115-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L115-L122)

```diff
-       createNodeSkeletonAnimationScript(BB) {
-         if (null === BB) return null;
-         const OB = {};
-         for (const GB in BB) {
-           const YB = BB[GB];
-           OB[GB] = this.createNodeAnimationScript(YB)
-         }
-         return OB
+       static GetFarPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[2], iW.normal.y = OW[7] - OW[6], iW.normal.z = OW[11] - OW[10], iW.d = OW[15] - OW[14], iW.normalize()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L124-L132` → after: `L224-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L224-L226) · [Before (L124-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L124-L132)

```diff
-       createNodeAnimationScript(BB) {
-         const {
-           timeline: OB
-         } = BB, GB = OB.filter((BB => Number.isFinite(BB.timeFraction)));
-         return GB.sort(((BB, OB) => BB.timeFraction - OB.timeFraction)), {
-           rotation: this.createTimelineFromKeyframes(GB, "rotation", lB),
-           position: this.createTimelineFromKeyframes(GB, "position", qB),
-           scale: this.createTimelineFromKeyframes(GB, "scale", qB, NB)
-         }
+       static GetLeftPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[0], iW.normal.y = OW[7] + OW[4], iW.normal.z = OW[11] + OW[8], iW.d = OW[15] + OW[12], iW.normalize()
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L134-L156` → after: `L228-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L228-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L228-L230) · [Before (L134-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L134-L156)

```diff
-       createTimelineFromKeyframes(BB, OB, GB) {
-         let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB => BB;
-         const DB = [];
-         for (const JB of BB) {
-           const BB = JB[OB];
-           if (BB) {
-             const OB = this.createAnimationFrameWithoutPrecomputes(JB.timeFraction, BB, YB);
-             PB(OB) && DB.push(OB)
-           }
-         }
-         const QB = [];
-         for (let JB = 0; JB < DB.length; JB++) {
-           var oB, jB, yB;
-           const BB = DB[JB],
-             OB = null !== (oB = DB[JB - 1]) && void 0 !== oB ? oB : BB,
-             YB = null !== (jB = DB[JB + 1]) && void 0 !== jB ? jB : BB,
- ... (7 more removed lines; see GitHub link above)
+       static GetRightPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[0], iW.normal.y = OW[7] - OW[4], iW.normal.z = OW[11] - OW[8], iW.d = OW[15] - OW[12], iW.normalize()
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L158-L171` → after: `L232-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L232-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L232-L234) · [Before (L158-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L158-L171)

```diff
-       createAnimationFrameWithoutPrecomputes(BB, OB, GB) {
-         let YB, DB, QB = null;
-         var oB;
-         if ("object" === typeof OB && "point" in OB) QB = null !== (oB = OB.nG) && void 0 !== oB ? oB : null, YB = OB.point, DB = OB.point;
-         else if ("object" === typeof OB && "pre" in OB) {
-           var jB;
-           QB = null !== (jB = OB.nG) && void 0 !== jB ? jB : null, YB = OB.pre, DB = OB.post
-         } else YB = OB, DB = OB;
-         return {
-           timeFraction: BB,
-           nG: this.createLerpMode(QB),
-           pre: GB(YB),
-           post: GB(DB)
-         }
+       static GetTopPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] - OW[1], iW.normal.y = OW[7] - OW[5], iW.normal.z = OW[11] - OW[9], iW.d = OW[15] - OW[13], iW.normalize()
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L173-L174` → after: `L236-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L236-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L236-L246) · [Before (L173-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L173-L174)

```diff
-       createLerpMode(BB) {
-         return null === BB ? YB.j.Linear : JB.LERP_MODE_SCHEMA_MAPPING[BB]
+       static GetBottomPlaneToRef(WW, iW) {
+         const OW = WW.m;
+         iW.normal.x = OW[3] + OW[1], iW.normal.y = OW[7] + OW[5], iW.normal.z = OW[11] + OW[9], iW.d = OW[15] + OW[13], iW.normalize()
+       }
+       static GetPlanesToRef(WW, iW) {
+         EW.GetNearPlaneToRef(WW, iW[0]), EW.GetFarPlaneToRef(WW, iW[1]), EW.GetLeftPlaneToRef(WW, iW[2]), EW.GetRightPlaneToRef(WW, iW[3]), EW.GetTopPlaneToRef(WW, iW[4]), EW.GetBottomPlaneToRef(WW, iW[5])
+       }
+       static IsPointInFrustum(WW, iW) {
+         for (let OW = 0; OW < 6; OW++)
+           if (iW[OW].dotCoordinate(WW) < 0) return !1;
+         return !0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L177-L180` → after: `L249-L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L249-L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L249-L254) · [Before (L177-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L177-L180)

```diff
-     JB.LERP_MODE_SCHEMA_MAPPING = {
-       linear: YB.j.Linear,
-       "catmull-rom-spline": YB.j.CatmullRomSpline
-     };
+   },
+   38939: (WW, iW, OW) => {
+     OW.d(iW, {
+       c: () => EW
+     });
+     var mW = OW(38241);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L182-L195` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L256-L257) · [Before (L182-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L182-L195)

```diff
-       constructor(BB) {
-         this.animationSchema = BB
-       }
-       createAnimationScript() {
-         const {
-           animation_length: BB,
-           loop: OB,
-           bones: GB
-         } = this.animationSchema;
-         return {
-           NG: Math.round(1e3 * BB),
-           WG: this.createLoopMode(null !== OB && void 0 !== OB && OB),
-           AG: this.createNodeSkeletonAnimationScript(null !== GB && void 0 !== GB ? GB : null)
-         }
+       constructor(WW, iW, OW, EW) {
+         this.normal = new mW.q(WW, iW, OW), this.d = EW
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L197-L206` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L259-L260) · [Before (L197-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L197-L206)

```diff
-       createLoopMode(BB) {
-         switch (BB) {
-           case !1:
-             return YB.m.NoLoop;
-           case !0:
-             return YB.m.LoopOnLastFrame;
-           case "hold_on_last_frame":
-             return YB.m.HoldOnLastFrame
-         }
-         throw new Error(`Invalid Blockbench loop mode schema: ${BB}`)
+       wEW() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L208-L215` → after: `L262-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L262-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L262-L263) · [Before (L208-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L208-L215)

```diff
-       createNodeSkeletonAnimationScript(BB) {
-         if (null === BB) return null;
-         const OB = {};
-         for (const GB in BB) {
-           const YB = BB[GB];
-           OB[GB] = this.createNodeAnimationScript(YB)
-         }
-         return OB
+       clone() {
+         return new EW(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L217-L227` → after: `L265-L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L265-L266) · [Before (L217-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L217-L227)

```diff
-       createNodeAnimationScript(BB) {
-         const {
-           rotation: OB,
-           position: GB,
-           scale: YB
-         } = BB;
-         return {
-           rotation: this.createAnimationTimeline(null !== OB && void 0 !== OB ? OB : null, WB, lB, !0),
-           position: this.createAnimationTimeline(null !== GB && void 0 !== GB ? GB : null, VB, qB, !1),
-           scale: this.createAnimationTimeline(null !== YB && void 0 !== YB ? YB : null, ZB, qB, !1)
-         }
+       getClassName() {
+         return "Plane"
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L229-L265` → after: `L268-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L268-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L268-L270) · [Before (L229-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L229-L265)

```diff
-       createAnimationTimeline(BB, OB, GB, YB) {
-         if (null === BB) return [];
-         (Array.isArray(BB) || "number" === typeof BB) && (BB = {
-           "0.0": BB
-         });
-         const DB = Object.entries(BB).map((BB => {
-           let [GB, YB] = BB;
-           const DB = Number(GB) / this.animationSchema.animation_length;
-           return this.createAnimationFrameWithoutPrecomputes(DB, YB, OB)
-         })).filter(PB);
-         DB.sort(((BB, OB) => BB.timeFraction - OB.timeFraction)), YB && function(BB) {
-           for (let OB = 1; OB < BB.length; OB++) {
-             const GB = BB[OB - 1].post,
-               YB = BB[OB],
-               DB = SB(YB.pre),
-               QB = SB(YB.post),
- ... (21 more removed lines; see GitHub link above)
+       getHashCode() {
+         let WW = this.normal.getHashCode();
+         return WW = 397 * WW ^ this.d, WW
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L267-L281` → after: `L272-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L272-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L272-L312) · [Before (L267-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L267-L281)

```diff
-       createAnimationFrameWithoutPrecomputes(BB, OB, GB) {
-         let YB, DB, QB = null;
-         if ("object" === typeof OB && "post" in OB) {
-           var oB;
-           QB = null !== (oB = OB.lerp_mode) && void 0 !== oB ? oB : null, DB = GB(OB.post), YB = void 0 !== OB.pre ? GB(OB.pre) : DB
-         } else {
-           const BB = GB(OB);
-           DB = BB, YB = BB
-         }
-         return {
-           timeFraction: BB,
-           nG: this.createLerpMode(QB),
-           pre: YB,
-           post: DB
-         }
+       normalize() {
+         const WW = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
+         let iW = 0;
+         return 0 !== WW && (iW = 1 / WW), this.normal.x *= iW, this.normal.y *= iW, this.normal.z *= iW, this.d *= iW, this
+       }
+       transform(WW) {
+         const iW = EW._TmpMatrix;
+         WW.invertToRef(iW);
+         const OW = iW.m,
+           mW = this.normal.x,
+           NW = this.normal.y,
+           PW = this.normal.z,
+           LW = this.d,
+           cW = mW * OW[0] + NW * OW[1] + PW * OW[2] + LW * OW[3],
+           wW = mW * OW[4] + NW * OW[5] + PW * OW[6] + LW * OW[7],
+           tW = mW * OW[8] + NW * OW[9] + PW * OW[10] + LW * OW[11],
+ ... (25 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L283-L284` → after: `L314-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L314-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L314-L363) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L283-L284)

```diff
-       createLerpMode(BB) {
-         return null === BB ? YB.j.Linear : MB.LERP_MODE_SCHEMA_MAPPING[BB]
+       static FromArray(WW) {
+         return new EW(WW[0], WW[1], WW[2], WW[3])
+       }
+       static FromPoints(WW, iW, OW) {
+         const mW = new EW(0, 0, 0, 0);
+         return mW.copyFromPoints(WW, iW, OW), mW
+       }
+       static FromPositionAndNormal(WW, iW) {
+         const OW = new EW(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(WW, iW, OW)
+       }
+       static FromPositionAndNormalToRef(WW, iW, OW) {
+         return OW.normal.HJ(iW), OW.normal.normalize(), OW.d = -WW.dot(OW.normal), OW
+       }
+       static SignedDistanceToPlaneFromPositionAndNormal(WW, iW, OW) {
+         const EW = -(iW.x * WW.x + iW.y * WW.y + iW.z * WW.z);
+ ... (34 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L289` → after: `L378-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L378-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L378-L427) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L289)

```diff
-       return Number.isFinite(BB.timeFraction) && zB(BB.pre) && zB(BB.post)
+       let iW = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
+       const OW = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
+         NW = [],
+         cW = WW.width || WW.size || 1,
+         wW = WW.height || WW.size || 1,
+         tW = WW.depth || WW.size || 1,
+         ZW = WW.wrap || !1;
+       let xW = void 0 === WW.topBaseAt ? 1 : WW.topBaseAt,
+         lW = void 0 === WW.bottomBaseAt ? 0 : WW.bottomBaseAt;
+       xW = (xW + 4) % 4, lW = (lW + 4) % 4;
+       let AW = [2, 0, 3, 1][xW],
+         bW = [2, 0, 1, 3][lW],
+         jW = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
+       if (ZW) {
+         iW = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], jW = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
+         let WW = [
+ ... (34 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L293` → after: `L431-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L431-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L431-L435) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L293)

```diff
-       return Number.isFinite(BB[0]) && Number.isFinite(BB[1]) && Number.isFinite(BB[2])
+       let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const mW = new NW.e(WW, OW);
+       iW.sideOrientation = NW.e._GetDefaultSideOrientation(iW.sideOrientation), mW._originalBuilderSideOrientation = iW.sideOrientation;
+       return cW(iW).applyToMesh(mW, iW.updatable), mW
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L296-L304` → after: `L457-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L457-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L457-L483) · [Before (L296-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L296-L304)

```diff
-     function lB(BB, OB, GB, YB, DB, QB, oB, jB) {
-       const yB = QB - OB,
-         JB = QB - YB,
-         MB = jB - YB,
-         PB = [null, null, null];
-       for (let zB = 0; zB < PB.length; zB++) PB[zB] = pB(BB[zB], GB[zB], DB[zB], oB[zB], yB, MB);
-       return {
-         UG: JB,
-         fG: PB
+     function wW(WW) {
+       const iW = [],
+         OW = [],
+         mW = WW.lines,
+         EW = WW.colors,
+         PW = [];
+       let LW = 0;
+       for (let NW = 0; NW < mW.length; NW++) {
+         const WW = mW[NW];
+         for (let mW = 0; mW < WW.length; mW++) {
+           const {
+             x: cW,
+             y: wW,
+             z: tW
+           } = WW[mW];
+           if (OW.push(cW, wW, tW), EW) {
+ ... (11 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L308-L312` → after: `L489-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L489-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L489-L504) · [Before (L308-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L308-L312)

```diff
-     function pB(BB, OB, GB, YB, QB, oB) {
-       return {
-         dG: DB.b.computeShortestRotation(BB, GB) / QB,
-         KG: DB.b.computeShortestRotation(OB, YB) / oB,
-         delta: DB.b.computeShortestRotation(OB, GB)
+     function tW(WW) {
+       const iW = WW.dashSize || 3,
+         OW = WW.gapSize || 1,
+         EW = WW.dashNb || 200,
+         PW = WW.points,
+         LW = [],
+         cW = [],
+         wW = mW.q.Zero();
+       let tW, ZW, xW, lW = 0,
+         AW = 0;
+       for (xW = 0; xW < PW.length - 1; xW++) PW[xW + 1].subtractToRef(PW[xW], wW), lW += wW.length();
+       const bW = lW / EW,
+         jW = iW * bW / (iW + OW);
+       for (xW = 0; xW < PW.length - 1; xW++) {
+         PW[xW + 1].subtractToRef(PW[xW], wW), tW = Math.floor(wW.length() / bW), wW.normalize();
+         for (let WW = 0; WW < tW; WW++) ZW = bW * WW, LW.push(PW[xW].x + ZW * wW.x, PW[xW].y + ZW * wW.y, PW[xW].z + ZW * wW.z), LW.push(PW[xW].x + (ZW + jW) * wW.x, PW[xW].y + (ZW + jW) * wW.y, PW[xW].z + (ZW + jW) * wW.z), cW.push(AW, AW + 1), AW += 2
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L316-L328` → after: `L510-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L510-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/261.js#L510-L525) · [Before (L316-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/261.js#L316-L328)

```diff
-     function qB(BB, OB, GB, YB, DB, QB, oB, jB) {
-       const yB = QB - OB,
-         JB = QB - YB,
-         MB = jB - YB,
-         PB = [null, null, null];
-       for (let zB = 0; zB < PB.length; zB++) PB[zB] = {
-         dG: (DB[zB] - BB[zB]) / yB,
-         KG: (oB[zB] - GB[zB]) / MB,
-         delta: DB[zB] - GB[zB]
-       };
-       return {
-         UG: JB,
-         fG: PB
+     function ZW(WW, iW) {
+       let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+       const mW = iW.instance,
+         EW = iW.lines,
+         NW = iW.colors;
+       if (mW) {
+         const WW = mW.getVerticesData(LW.k.PositionKind);
+         let iW, OW;
+         NW && (iW = mW.getVerticesData(LW.k.ColorKind));
+         let PW = 0,
+           cW = 0;
+         for (let mW = 0; mW < EW.length; mW++) {
+           const LW = EW[mW];
+           for (let EW = 0; EW < LW.length; EW++) WW[PW] = LW[EW].x, WW[PW + 1] = LW[EW].y, WW[PW + 2] = LW[EW].z, NW && iW && (OW = NW[mW], iW[cW] = OW[EW].r, iW[cW + 1] = OW[EW].g, iW[cW + 2] = OW[EW].b, iW[cW + 3] = OW[EW].a, cW += 4), PW += 3
+         }
+         return mW.updateVerticesData(LW.k.PositionKind, WW, !1, !1), NW && iW && mW.updateVerticesData(LW.k.ColorKind, iW, !1, !1), mW.refreshBoundingInfo(), mW
```
