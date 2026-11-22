# Changed — Bundle Modifications Report (Part 007 / 047)

- **Updated at**: `2026-11-22T23:29 JST`
- **Part**: `7 / 47` (**316** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 006](part-006.md) · [Part 008 →](part-008.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/191.js` (bqoxjr.2558012f → 3lwmg.ecbaa066 · continued)

- **File**: `bundles/bloxd.io/chunks/js/191.js` (165 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f)

#### 148. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L9432-L9496` → after: `L1268-L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1268-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1268-L1269) · [Before (L9432-L9496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L9432-L9496)

```diff
-       let {
-         controller: FQ
-       } = QQ;
-       const {
-         t: wQ
-       } = (0, sq.y)(), LQ = (0, rq.i)(jL, FQ.getSnapshot());
-       if (null === LQ) return null;
-       const qQ = LQ.fullSet ? "empty" === LQ.fuelState ? {
-         text: wQ("skyblockGame:magmawardHudNoFuel"),
-         tone: "empty"
-       } : null : {
-         text: wQ("skyblockGame:magmawardHudFullSet", {
-           worn: String(LQ.wornCount)
-         }),
-         tone: "partial"
-       };
- ... (49 more removed lines; see GitHub link above)
+       return null === (ek = kk) || "object" !== typeof ek ? ek : [Sk(ek.kK, mk), bk(ek.eK), ek.iK];
+       var ek
```

#### 149. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L9500-L9534` → after: `L1273-L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1273-L1274) · [Before (L9500-L9534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L9500-L9534)

```diff
-       let {
-         controller: FQ
-       } = QQ;
-       const {
-         t: wQ,
-         selectedLanguage: LQ
-       } = (0, sq.y)(), qQ = (0, rq.i)(XL, FQ.getSnapshot());
-       return null === qQ ? null : (0, Iq.jsx)(Sq.d, {
-         placement: "statBars",
-         children: (0, Iq.jsxs)("div", {
-           className: cq()("SkyblockGlowtideChip", {
-             SkyblockGlowtideChipInRange: qQ.inRange
-           }),
-           style: {
-             "--glowtide-colour": qQ.colour
-           },
- ... (19 more removed lines; see GitHub link above)
+       return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.YD), bk(ek.LD)];
+       var ek
```

#### 150. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L9538-L9583` → after: `L1278-L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1278-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1278-L1279) · [Before (L9538-L9583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L9538-L9583)

```diff
-       let {
-         controller: FQ
-       } = QQ;
-       const {
-         t: wQ
-       } = (0, sq.y)(), LQ = (0, rq.i)(VL, FQ.getSnapshot());
-       return null === LQ ? null : (0, Iq.jsx)(Sq.d, {
-         placement: "statBars",
-         children: (0, Iq.jsxs)("div", {
-           className: cq()("SkyblockGlowMeter", {
-             SkyblockGlowMeterFull: LQ.full
-           }),
-           "aria-label": wQ("skyblockGame:glowMeterLabel", {
-             fill: String(LQ.fill),
-             MH: String(LQ.MH)
-           }),
- ... (30 more removed lines; see GitHub link above)
+       return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.gP)];
+       var ek
```

#### 151. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L9587-L9637` → after: `L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1283) · [Before (L9587-L9637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L9587-L9637)

```diff
-       let {
-         controller: FQ
-       } = QQ;
-       const {
-         t: wQ
-       } = (0, sq.y)(), LQ = (0, rq.i)(JL, FQ.getSnapshot());
-       if (null === LQ) return null;
-       const qQ = "waiting" === LQ.phase,
-         oQ = {
-           animationDuration: `${LQ.waitMs}ms`,
-           animationDelay: -LQ.elapsedMs + "ms"
-         },
-         DQ = qQ ? void 0 : {
-           animationDuration: `${LQ.waitMs}ms`
-         };
-       return (0, Iq.jsxs)("div", {
- ... (35 more removed lines; see GitHub link above)
+       return bk(kk)
```

#### 152. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L9641-L9656` → after: `L1287-L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1287-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1287-L1288) · [Before (L9641-L9656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L9641-L9656)

```diff
-       let {
-         chart: FQ,
-         showHere: wQ,
-         className: LQ
-       } = QQ;
-       return (0, Iq.jsx)("div", {
-         className: cq()("SkyblockTideChartGrid", LQ, null !== FQ.pictureName && "Complete"),
-         "aria-hidden": "true",
-         children: FQ.cells.map(((QQ, LQ) => {
-           const qQ = 0 !== (FQ.pulseCells & 1 << LQ),
-             oQ = FQ.castCell === LQ;
-           return (0, Iq.jsx)("span", {
-             className: cq()("SkyblockTideChartCell", `Cell-${QQ}`, qQ && "Pulse", oQ && "Cast", wQ && FQ.hereCell === LQ && "Here")
-           }, `${LQ}:${qQ?`p${FQ.pulseToken}`:""}:${oQ?`c${FQ.castToken}`:""}`)
-         }))
-       })
+       return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.lr), bk(ek.yr), bk(ek.kr), bk(ek.er)];
+       var ek
```

#### 153. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L9660-L9695` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1292) · [Before (L9660-L9695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L9660-L9695)

```diff
-       let {
-         controller: FQ
-       } = QQ;
-       const wQ = (0, rq.i)(nL, FQ.getSnapshot()),
-         {
-           t: LQ
-         } = (0, sq.y)(),
-         qQ = wQ.chip;
-       if (!wQ.enabled || null === qQ) return null;
-       const oQ = LQ("skyblockGame:tideChartsChipLabel", {
-         island: qQ.islandName,
-         lit: String(qQ.lit),
-         ink: String(qQ.ink)
-       });
-       return (0, Iq.jsx)(Sq.d, {
-         placement: "statBars",
- ... (20 more removed lines; see GitHub link above)
+       return Kk(kk)
```

#### 154. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L9699-L9802` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1296) · [Before (L9699-L9802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L9699-L9802)

```diff
-       let {
-         controller: FQ
-       } = QQ;
-       const wQ = (0, rq.i)(nL, FQ.getSnapshot()),
-         {
-           t: LQ
-         } = (0, sq.y)(),
-         qQ = Vq(),
-         oQ = wQ.card;
-       return wQ.enabled && null !== oQ ? (0, Iq.jsx)(aq.d, {
-         show: wQ.open,
-         close: FQ.dismiss,
-         togglePointerLock: !1,
-         className: "SkyblockSkillsOverlay",
-         children: (0, Iq.jsxs)("section", {
-           className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
- ... (88 more removed lines; see GitHub link above)
+       return Kk(kk)
```

#### 155. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L9806-L9865` → after: `L1300-L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1300-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1300-L1301) · [Before (L9806-L9865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L9806-L9865)

```diff
-       var FQ;
-       let {
-         controller: wQ
-       } = QQ;
-       const {
-         selectedLanguage: LQ
-       } = (0, sq.y)(), qQ = LQ.code;
-       (0, WQ.useEffect)((() => {
-         wQ.setTranslator(((QQ, FQ) => (0, sq.u)(qQ, QQ, FQ)), qQ, ((QQ, FQ) => (0, sq.o)(qQ, QQ, FQ)))
-       }), [wQ, qQ]);
-       const oQ = (0, rq.i)(bQ, wQ.map.getSnapshot()),
-         {
-           openInGameMenuName: DQ
-         } = (0, Cq.l)(["openInGameMenuName"]);
-       return (0, Iq.jsxs)(Iq.Fragment, {
-         children: [(0, Iq.jsx)(wk, {
- ... (44 more removed lines; see GitHub link above)
+       return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.FP)];
+       var ek
```

#### 156. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L9869-L9910` → after: `L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1305) · [Before (L9869-L9910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L9869-L9910)

```diff
-       let {
-         controller: FQ
-       } = QQ;
-       return (0, Iq.jsxs)(Iq.Fragment, {
-         children: [(0, Iq.jsx)(Fo, {
-           controller: FQ.map,
-           navigation: FQ.navigation
-         }), (0, Iq.jsx)(qo, {
-           controller: FQ.skills,
-           surface: "menu"
-         }), (0, Iq.jsx)(bo, {
-           controller: FQ.quests,
-           surface: "menu"
-         }), (0, Iq.jsx)(go, {
-           controller: FQ.dungeons
-         }), (0, Iq.jsx)(yo, {
- ... (26 more removed lines; see GitHub link above)
+       return kk
```

#### 157. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L9915-L10158` → after: `L1308-L1310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1308-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1308-L1310) · [Before (L9915-L10158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L9915-L10158)

```diff
-     function zk(QQ, FQ, wQ, LQ, qQ) {
-       const oQ = [],
-         DQ = [],
-         kQ = wQ => {
-           const LQ = QQ.playSound(FQ, wQ.sound, wQ.volume, wQ.rate);
-           LQ && (DQ.push(LQ), void 0 !== wQ.cutAfter && oQ.push(setTimeout((() => {
-             LQ.fade(LQ.getVolume(), 0, 300)
-           }), wQ.cutAfter)))
-         };
-       for (const vQ of function(QQ, FQ) {
-           const wQ = [{
-             sound: "rpgKnifeSlice1",
-             beat: FL,
-             lead: 260,
-             volume: .5,
-             rate: 1
- ... (228 more removed lines; see GitHub link above)
+     function Vk(kk) {
+       return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.ob), bk(ek.Zb)];
+       var ek
```

#### 158. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L10164-L10307` → after: `L1313-L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1313-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1313-L1314) · [Before (L10164-L10307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L10164-L10307)

```diff
-     function Ek(QQ, FQ) {
-       return [{
-         timeFraction: 0,
-         minColor: [255 * QQ[0], 255 * QQ[1], 255 * QQ[2], 1],
-         maxColor: [255 * FQ[0], 255 * FQ[1], 255 * FQ[2], 1]
-       }, {
-         timeFraction: 1,
-         minColor: [0, 0, 0, 1]
-       }]
-     }
-     const nk = [0, 0, 0],
-       gk = {
-         texture: "glint",
-         mipmaps: !1,
-         MH: 24,
-         minLifeTime: .18,
- ... (128 more removed lines; see GitHub link above)
+     function Fk(kk) {
+       return bk(kk)
```

#### 159. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L10309-L10371` → after: `L1316-L1318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1316-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1316-L1318) · [Before (L10309-L10371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L10309-L10371)

```diff
-     var Lv = wQ(1880),
-       qv = wQ(38166);
-     const ov = {
-       "Grey Portal": "Gray"
-     };
-     for (const Hv of qQ.Kc) ov[`${Hv} Portal`] = Hv;
-     const Dv = Object.keys(ov),
-       kv = Object.fromEntries(Dv.map((QQ => [QQ, (0, qQ.Z)(qQ.K[`${(0,qQ.He)(ov[QQ])}Team`])])));
-     Object.fromEntries(Dv.map((QQ => [QQ, qQ.K[`${(0,qQ.He)(ov[QQ])}UiText`]])));
-     class vv {
-       constructor(QQ, FQ) {
-         this.presentation = QQ, this.portal = FQ, this.unlocked = void 0
-       }
-       bx(QQ) {
-         const FQ = !1 === this.unlocked && QQ;
-         this.unlocked = QQ, this.fH();
- ... (47 more removed lines; see GitHub link above)
+ 
+     function uk(kk) {
+       return xk(kk)
```

#### 160. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L11041-L11067` → after: `L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1322) · [Before (L11041-L11067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L11041-L11067)

```diff
-       let FQ, wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
-       if ("number" === typeof QQ) {
-         if (!Number.isFinite(QQ)) return "0";
-         if (Math.abs(QQ) < 100) {
-           const FQ = QQ < 0 ? "-" : "",
-             wQ = Math.abs(QQ);
-           return wQ >= 10 ? `${FQ}${wQ.toFixed(1).replace(/\.0$/,"")}` : `${FQ}${wQ.toFixed(2).replace(/\.?0+$/,"")}`
-         }
-         FQ = BigInt(Math.floor(QQ))
-       } else FQ = QQ;
-       const qQ = FQ < 0n ? -FQ : FQ,
-         oQ = FQ < 0n ? "-" : "",
-         DQ = qQ.toString();
-       if (DQ.length <= wQ) return `${oQ}${DQ}`;
-       const kQ = 3 * Math.floor((DQ.length - 1) / 3);
-       if (kQ < 3) return `${oQ}${DQ}`;
- ... (11 more removed lines; see GitHub link above)
+       return xk(kk)
```

#### 161. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L11086-L11098` → after: `L1326-L1327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1326-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1326-L1327) · [Before (L11086-L11098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L11086-L11098)

```diff
-       const FQ = Math.abs(QQ),
-         wQ = QQ < 0 ? "-" : "";
-       for (const {
-           threshold: LQ,
-           suffix: qQ
-         }
-         of oQ)
-         if (FQ >= LQ) {
-           const QQ = FQ / LQ;
-           if (QQ >= 1e3) return `${wQ}${FQ.toExponential(2).replace("e+","e")}`;
-           let oQ;
-           return oQ = QQ >= 100 ? Math.floor(QQ).toString() : QQ >= 10 ? QQ.toFixed(1).replace(/\.0$/, "") : QQ.toFixed(2).replace(/\.?0+$/, ""), `${wQ}${oQ}${qQ}`
-         } return `${wQ}${FQ}`
+       return null === (ek = kk) || "object" !== typeof ek ? ek : [bk(ek.SP)];
+       var ek
```

#### 162. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L11120-L11121` → after: `L1331-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1331-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1331-L1334) · [Before (L11120-L11121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L11120-L11121)

```diff
-       var FQ = oQ(QQ);
-       return wQ(FQ)
+       return (Mk ??= (0, Dk.i)().map((kk => kk.name)), Mk).map((ek => {
+         return "string" === typeof(ik = kk[ek]) ? bk(ik) : Sk(ik, mk);
+         var ik
+       }))
```

#### 163. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L11125-L11129` → after: `L1338-L1339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1338-L1339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1338-L1339) · [Before (L11125-L11129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L11125-L11129)

```diff
-       if (!wQ.o(LQ, QQ)) {
-         var FQ = new Error("Cannot find module '" + QQ + "'");
-         throw FQ.code = "MODULE_NOT_FOUND", FQ
-       }
-       return LQ[QQ]
+       return null === (ek = kk) || "object" !== typeof ek ? ek : [ek.Nb, ek.Rb, ek.Jb];
+       var ek
```

#### 164. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L11177-L11193` → after: `L1342-L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1342-L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1342-L1349) · [Before (L11177-L11193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L11177-L11193)

```diff
-   18442: QQ => {
-     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgog … [truncated]
-   },
-   20487: QQ => {
-     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444K … [truncated]
-   },
-   22892: QQ => {
-     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
-   },
-   24459: QQ => {
-     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
-   },
-   26092: QQ => {
-     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLE … [truncated]
-   },
-   26105: QQ => {
- ... (1 more removed lines; see GitHub link above)
+   9105: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => fk,
+       e: () => Sk
+     });
+     var Dk = ik(9063);
+     const fk = "Air",
+       Sk = Object.freeze(new Dk.d(fk, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

#### 165. `bundles/bloxd.io/chunks/js/191.js` (Changed code · before: `L11195-L11196` → after: `L1351-L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803fR1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fdc086fc6be43cf89eb083ed6ce41b81932f7f6f5f17969b18d48a29a3f0803f) · [After (L1351-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/191.js#L1351-L1366) · [Before (L11195-L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/191.js#L11195-L11196)

```diff
-   38072: QQ => {
-     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
+   38805: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => Sk,
+       e: () => rk
+     });
+     var Dk = ik(314),
+       fk = ik(4409);
+     const Sk = new Set(fk.p),
+       bk = new Map;
+ 
+     function rk(kk, ek) {
+       let ik = bk.get(ek);
+       void 0 === ik && (ik = new Map, bk.set(ek, ik));
+       let fk = ik.get(kk);
+       return void 0 === fk && (fk = `${kk}${(0,Dk.w)(ek)}`, ik.set(kk, fk)), fk
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/192.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/192.js` (77 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4)

#### 1. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L2)

```diff
- export const ids = [192];
+ export const ids = [51, 192];
```

#### 2. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L4-L36` → after: `L4-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L4-L20) · [Before (L4-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L4-L36)

```diff
-   40929: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => oQ
-     });
-     var LQ = wQ(53),
-       qQ = wQ(2657);
- 
-     function oQ(QQ, FQ, wQ) {
-       const oQ = (0, LQ.useRef)(null),
-         {
-           width: DQ,
-           height: kQ
-         } = (0, qQ.c)(QQ);
-       (0, LQ.useEffect)((() => {
-         const wQ = FQ(QQ.current);
-         return oQ.current = wQ, () => {
- ... (17 more removed lines; see GitHub link above)
+   38128: (kk, ek, ik) => {
+     var Dk = {
+       "./combat_1.png": 38134,
+       "./dungeon_crumbling_crypt.png": 38143,
+       "./dungeon_frozen_hollow.png": 38152,
+       "./dungeon_wildwood_grove.png": 38161,
+       "./dungeons.png": 38165,
+       "./farming_1.png": 38170,
+       "./fishing_1.png": 38176,
+       "./hub.png": 38184,
+       "./island.png": 38192,
+       "./mining_1.png": 38200,
+       "./mining_1_bridge.png": 38203,
+       "./mining_1_gallery.png": 38212,
+       "./mining_1_hollow.png": 38215,
+       "./mining_1_village.png": 38219
+ ... (1 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L38-L46` → after: `L22-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L22-L24) · [Before (L38-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L38-L46)

```diff
-     function oQ(QQ, FQ) {
-       let [wQ, LQ, qQ] = QQ;
-       return [0, .5, 1].map((QQ => ({
-         timeFraction: QQ,
-         rotation: {
-           MQ: "catmull-rom-spline",
-           point: [wQ, LQ, qQ + (.5 === QQ ? FQ : 0)]
-         }
-       })))
+     function fk(kk) {
+       var ek = Sk(kk);
+       return ik(ek)
```

#### 4. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L49-L78` → after: `L27-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L27-L30) · [Before (L49-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L49-L78)

```diff
-     function DQ(QQ, FQ, wQ) {
-       return {
-         YQ: 3200,
-         loop: !0,
-         AQ: {
-           Root: {
-             timeline: [0, .5, 1].map((QQ => ({
-               timeFraction: QQ,
-               position: {
-                 MQ: "catmull-rom-spline",
-                 point: [0, .5 === QQ ? .18 : 0, 0]
-               }
-             })))
-           },
-           HeadMesh: {
-             timeline: [0, .25, .75, 1].map((QQ => ({
- ... (14 more removed lines; see GitHub link above)
+     function Sk(kk) {
+       if (!ik.o(Dk, kk)) {
+         var ek = new Error("Cannot find module '" + kk + "'");
+         throw ek.code = "MODULE_NOT_FOUND", ek
```

#### 5. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L81-L86` → after: `L34-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L34-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L34-L36) · [Before (L81-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L81-L86)

```diff
-     const kQ = DQ([0, 0, 0], [0, 0, 0], .07),
-       vQ = (0, qQ.d)((0, LQ.h)(kQ), "mobIdle"),
-       mQ = DQ([-.2 * Math.PI, -.15 * Math.PI, 0], [-.1 * Math.PI, .18 * Math.PI, 0], .02),
-       uQ = DQ([-.4 * Math.PI, -.15 * Math.PI, 0], [-.3 * Math.PI, .18 * Math.PI, 0], .02),
-       HQ = (0, qQ.d)((0, LQ.h)(mQ), "gunReady"),
-       bQ = (0, qQ.d)((0, LQ.h)(uQ), "gunAimed")
+     fk.keys = function() {
+       return Object.keys(Dk)
+     }, fk.resolve = Sk, kk.exports = fk, fk.id = 38128
```

#### 6. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L88` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L38) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L88)

```diff
-   38164: (QQ, FQ, wQ) => {
+   38226: (kk, ek, ik) => {
```

#### 7. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L90-L91` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L40-L41) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L90-L91)

```diff
-       d: () => qQ,
-       f: () => oQ
+       e: () => fk,
+       i: () => Sk
```

#### 8. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L101` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L51) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L101)

```diff
-       return null !== (FQ = LQ.get(QQ)) && void 0 !== FQ ? FQ : null
+       return null !== (ek = Dk.get(kk)) && void 0 !== ek ? ek : null
```

#### 9. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L104-L112` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L54-L55) · [Before (L104-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L104-L112)

```diff
-   9142: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => DQ,
-       d: () => qQ,
-       g: () => uQ
-     });
-     var LQ = wQ(1560);
- 
-     function qQ(QQ) {
+   38111: (kk, ek, ik) => {
+     function Dk(kk, ek, ik) {
```

#### 10. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L114-L131` → after: `L57-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L57-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L57-L63) · [Before (L114-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L114-L131)

```diff
-       return {
-         ...DQ.store,
-         yaw: DQ.store.yaw + (null !== (FQ = LQ.e[QQ].previewYaw) && void 0 !== FQ ? FQ : 0)
-       }
-     }
-     const oQ = {
-         yaw: .61 * Math.PI,
-         pitch: Math.PI / 2.05,
-         radius: 30,
-         target: [0, 0, 0]
-       },
-       DQ = {
-         player: oQ,
-         store: {
-           ...oQ,
-           radius: 33,
- ... (2 more removed lines; see GitHub link above)
+       const {
+         width: fk,
+         height: Sk
+       } = ik, bk = null !== (Dk = kk.text) && void 0 !== Dk ? Dk : kk, rk = (bk.x / 100 - .5) * fk, Pk = (bk.y / 100 - .5) * Sk, mk = fk / 2 - ek.x;
+       if (null !== kk.text && Math.abs(rk) <= mk && Pk >= ek.top - Sk / 2 && Pk <= Sk / 2 - ek.bottom) return {
+         x: bk.x,
+         y: bk.y
```

#### 11. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L133-L137` → after: `L65-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L65-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L65-L72) · [Before (L133-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L133-L137)

```diff
- 
-     function kQ(QQ, FQ) {
-       QQ instanceof Promise ? QQ.then(FQ).catch((QQ => {
-         console.error("Couldn't open the preview", QQ)
-       })) : FQ(QQ)
+       const Mk = Math.min(0 === rk ? 1 / 0 : mk / Math.abs(rk), Pk > 0 ? (Sk / 2 - ek.bottom) / Pk : Pk < 0 ? (ek.top - Sk / 2) / Pk : 1 / 0);
+       return !Number.isFinite(Mk) || Mk < 0 ? {
+         x: 50,
+         y: 50
+       } : {
+         x: 50 + rk * Mk / fk * 100,
+         y: 50 + Pk * Mk / Sk * 100
+       }
```

#### 12. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L140-L147` → after: `L86-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L86-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L86-L93) · [Before (L140-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L140-L147)

```diff
-       constructor(QQ) {
-         this.opened = null, this.view = null, this.size = null, this.closed = !1, kQ(QQ, (QQ => {
-           this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height), null !== this.view && QQ.show(this.view))
-         }))
-       }
-       show(QQ) {
-         var FQ;
-         this.view = QQ, null === (FQ = this.opened) || void 0 === FQ || FQ.show(QQ)
+       constructor() {
+         let {
+           limit: kk = Dk,
+           windowMs: ek = fk,
+           spacingMs: ik = Sk,
+           now: bk = Date.now
+         } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
+         this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = kk, this.windowMs = ek, this.spacingMs = ik, this.now = bk
```

#### 13. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L149-L154` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L95-L96) · [Before (L149-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L149-L154)

```diff
-       resize(QQ, FQ) {
-         var wQ;
-         this.size = {
-           width: QQ,
-           height: FQ
-         }, null === (wQ = this.opened) || void 0 === wQ || wQ.resize(QQ, FQ)
+       isPacing() {
+         return !this.canSendPriority() || this.isPriorityWaiting()
```

#### 14. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L156-L158` → after: `L98-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L98-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L98-L99) · [Before (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L156-L158)

```diff
-       close() {
-         var QQ;
-         this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
+       canSendPriority() {
+         return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
```

#### 15. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L160-L165` → after: `L101-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L101-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L101-L103) · [Before (L160-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L160-L165)

```diff
-     }
-     class mQ {
-       constructor(QQ) {
-         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(QQ).then((QQ => QQ.ready)), kQ(QQ, (QQ => {
-           this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height))
-         }))
+       tryStart() {
+         for (const kk of this.priority) kk.flush();
+         return !this.isPacing() && (this.start(), !0)
```

#### 16. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L167-L168` → after: `L105-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L105-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L105-L108) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L167-L168)

```diff
-       get dev() {
-         return this.opened.dev
+       start() {
+         this.prune();
+         const kk = this.now();
+         this.sent.push(kk), this.lastSentAt = kk, this.schedule(), this.notify()
```

#### 17. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L170-L172` → after: `L110-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L110-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L110-L113) · [Before (L170-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L170-L172)

```diff
-       isReady() {
-         var QQ, FQ;
-         return null !== (QQ = null === (FQ = this.opened) || void 0 === FQ ? void 0 : FQ.isReady()) && void 0 !== QQ && QQ
+       addPriority(kk) {
+         return this.priority.add(kk), () => {
+           this.priority.delete(kk)
+         }
```

#### 18. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L174-L176` → after: `L115-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L115-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L115-L118) · [Before (L174-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L174-L176)

```diff
-       setCosmetic(QQ, FQ) {
-         var wQ;
-         null === (wQ = this.opened) || void 0 === wQ || wQ.setCosmetic(QQ, FQ)
+       subscribe(kk) {
+         return this.listeners.add(kk), () => {
+           this.listeners.delete(kk)
+         }
```

#### 19. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L178-L180` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L120-L121) · [Before (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L178-L180)

```diff
-       playEmote(QQ) {
-         var FQ;
-         null === (FQ = this.opened) || void 0 === FQ || FQ.playEmote(QQ)
+       dispose() {
+         this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
```

#### 20. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L182-L184` → after: `L123-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L123-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L123-L126) · [Before (L182-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L182-L184)

```diff
-       setOrbit(QQ) {
-         var FQ;
-         null === (FQ = this.opened) || void 0 === FQ || FQ.setOrbit(QQ)
+       isPriorityWaiting() {
+         for (const kk of this.priority)
+           if (kk.waiting()) return !0;
+         return !1
```

#### 21. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L186-L188` → after: `L128-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L128-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L128-L130) · [Before (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L186-L188)

```diff
-       resetCamera() {
-         var QQ;
-         null === (QQ = this.opened) || void 0 === QQ || QQ.resetCamera()
+       prune() {
+         const kk = this.now() - this.windowMs;
+         for (; this.sent.length > 0 && this.sent[0] <= kk;) this.sent.shift()
```

#### 22. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L190-L192` → after: `L132-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L132-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L132-L139) · [Before (L190-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L190-L192)

```diff
-       async untilDrawn(QQ) {
-         var FQ;
-         await this.ready, await (null === (FQ = this.opened) || void 0 === FQ ? void 0 : FQ.untilDrawn(QQ))
+       schedule() {
+         this.clearTimer();
+         const kk = this.now(),
+           ek = this.lastSentAt + this.spacingMs,
+           ik = Math.min(ek > kk ? ek : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
+         ik !== 1 / 0 && (this.timer = setTimeout((() => {
+           this.timer = null, this.prune(), this.schedule(), this.notify()
+         }), Math.max(0, ik - kk)))
```

#### 23. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L194-L199` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L141-L142) · [Before (L194-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L194-L199)

```diff
-       resize(QQ, FQ) {
-         var wQ;
-         this.size = {
-           width: QQ,
-           height: FQ
-         }, null === (wQ = this.opened) || void 0 === wQ || wQ.resize(QQ, FQ)
+       notify() {
+         for (const kk of this.listeners) kk()
```

#### 24. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L201-L203` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L144-L145) · [Before (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L201-L203)

```diff
-       close() {
-         var QQ;
-         this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
+       clearTimer() {
+         null !== this.timer && (clearTimeout(this.timer), this.timer = null)
```

#### 25. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L206-L211` → after: `L148-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L148-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L148-L161) · [Before (L206-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L206-L211)

```diff
-     const uQ = new class {
-       constructor() {
-         this.host = null, this.makeDefault = null
-       }
-       setHost(QQ) {
-         this.host = QQ
+   },
+   38105: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => Dk
+     });
+     class Dk {
+       constructor(kk, ek, ik) {
+         this.tm = kk, this.beforeOpen = ek, this.afterClose = ik, this.open = !1, this.aU = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
+           this.isEnabled() && !this.aU && (this.open = !0, this.beforeOpen(this), this.emit())
+         }, this.close = () => {
+           this.closePanel(!1)
+         }, this.dismiss = () => {
+           this.closePanel(!0)
+         }
```

#### 26. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L213-L214` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L163-L164) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L213-L214)

```diff
-       setDefaultHost(QQ) {
-         this.makeDefault = QQ
+       isOpen() {
+         return this.open
```

#### 27. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L216-L221` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L166-L167) · [Before (L216-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L216-L221)

```diff
-       current() {
-         if (null === this.host) {
-           if (null === this.makeDefault) throw new Error("no preview host");
-           this.host = this.makeDefault()
-         }
-         return this.host
+       showOrRefresh() {
+         this.open ? this.emit() : this.show()
```

#### 28. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L223-L224` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L169-L170) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L223-L224)

```diff
-       openMob(QQ) {
-         return new vQ(this.current().openMob(QQ))
+       closePanel(kk) {
+         this.open = !1, this.onClosed(), this.emit(), this.afterClose(kk)
```

#### 29. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L226-L227` → after: `L172-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L172-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L172-L174) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L226-L227)

```diff
-       openPet(QQ) {
-         return new vQ(this.current().openPet(QQ))
+       onClosed() {}
+       dispose() {
+         this.open = !1, this.emit(), this.aU = !0
```

#### 30. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L229-L230` → after: `L176-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L176-L177) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L229-L230)

```diff
-       openMobLineup(QQ) {
-         return new vQ(this.current().openMobLineup(QQ))
+       isEnabled() {
+         return !0
```

#### 31. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L232-L233` → after: `L179-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L179-L180) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L232-L233)

```diff
-       openCharacter(QQ, FQ) {
-         return new mQ(this.current().openCharacter(QQ, FQ))
+       emit() {
+         this.aU || (this.snapshot = this.buildSnapshot(), this.tm(this.snapshot))
```

#### 32. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L237-L241` → after: `L184-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L184-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L184-L187) · [Before (L237-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L237-L241)

```diff
-   9137: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => LQ.b,
-       c: () => LQ.d,
-       d: () => LQ.g
+   38228: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       SkyblockEntityFacing: () => rk,
+       needsSkyblockEntityFacing: () => bk
```

#### 33. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L243-L251` → after: `L189-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L189-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L189-L201) · [Before (L243-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L243-L251)

```diff
-     var LQ = wQ(9142);
-     class qQ {
-       constructor(QQ) {
-         this.load = QQ, this.loaded = null, this.loading = null
-       }
-       run(QQ) {
-         return null !== this.loaded ? QQ(this.loaded) : (this.loading ??= this.load().then((QQ => (this.loaded = QQ, QQ)), (QQ => {
-           throw this.loading = null, QQ
-         })), this.loading.then(QQ))
+     var Dk = ik(591),
+       fk = ik(4189),
+       Sk = ik(38231);
+ 
+     function bk(kk, ek) {
+       if (kk.metaInfo === Dk.d || "Iron Guardian" === kk.type || "Gold Guardian" === kk.type) return !0;
+       if ("Pig" === kk.type) return "sitting" === kk.pose;
+       if ("Person" !== kk.meshKind || void 0 === kk.meshOpts) return !1;
+       let ik = null === ek || void 0 === ek ? void 0 : ek.get(kk.meshOpts);
+       if (void 0 === ik) {
+         var Sk, bk;
+         const Dk = (0, fk.l)(kk);
+         ik = !1, "pig_napoleon" === (null === Dk || void 0 === Dk || null === (Sk = Dk.opts.textures) || void 0 === Sk ? void 0 : Sk.head) ? ik = !0 : "npc_pig_head" === (null === Dk || void 0 === Dk || null === (bk = Dk.opts.textures) || void 0 === bk ? void 0 : bk.head) && (ik  … [truncated]
```

#### 34. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L253` → after: `L203-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L203-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L203-L206) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L253)

```diff
-     }
+       return "sitting" === ik ? "sitting" === kk.pose : ik
+     }(0, Sk.e)("skyblock", ((kk, ek) => {
+       ek.setFacingTolerance(bk(kk) ? 0 : null)
+     }));
```

#### 35. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L255-L262` → after: `L208-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L208-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L208-L214) · [Before (L255-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L255-L262)

```diff
-       constructor() {
-         this.mobScene = new qQ((() => Promise.all([wQ.e(70), wQ.e(227), wQ.e(226), wQ.e(246), wQ.e(95), wQ.e(247), wQ.e(73), wQ.e(72), wQ.e(244), wQ.e(71), wQ.e(254), wQ.e(248), wQ.e(253), wQ.e(251), wQ.e(243), wQ.e(265), wQ.e(223), wQ.e(238), wQ.e(249), wQ.e(252), wQ.e(75), wQ.e … [truncated]
-       }
-       openMob(QQ) {
-         return this.mobScene.run((FQ => FQ.openMobPreview(QQ)))
-       }
-       openPet(QQ) {
-         return this.mobScene.run((FQ => FQ.openPetPreview(QQ)))
+       constructor(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+         this.api = kk, this.alsoVisit = ek, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = kk => {
+           var ek;
+           const ik = this.api.getEntityInfo(kk);
+           ik && (bk(ik, this.meshFacingCache) && (this.api.setFacingTolerance(kk, 0), this.nextFacing.add(kk)), null === (ek = this.alsoVisit) || void 0 === ek || ek.call(this, kk, ik))
+         }
```

#### 36. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L264-L265` → after: `L216-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L216-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L216-L222) · [Before (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L264-L265)

```diff
-       openMobLineup(QQ) {
-         return this.mobScene.run((FQ => FQ.openMobLineupPreview(QQ)))
+       Px() {
+         const {
+           api: kk
+         } = this, ek = this.nextFacing;
+         kk.forEachEntity(this.visit);
+         for (const ik of this.facing) ek.has(ik) || kk.setFacingTolerance(ik, null);
+         this.facing.clear(), this.nextFacing = this.facing, this.facing = ek
```

#### 37. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L267-L268` → after: `L224-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L224-L226) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L267-L268)

```diff
-       openCharacter(QQ, FQ) {
-         return this.characterScene.run((wQ => wQ.openCharacterPreview(QQ, FQ)))
+       dispose() {
+         for (const kk of this.facing) this.api.setFacingTolerance(kk, null);
+         this.facing.clear(), this.meshFacingCache.clear()
```

#### 38. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L273` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L230) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L273)

```diff
-   41155: (QQ, FQ, wQ) => {
+   38100: (kk, ek, ik) => {
```

#### 39. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L275` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L232) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L275)

```diff
-       FrontlineMvpLineup: () => HQ
+       default: () => KP
```

#### 40. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L277-L283` → after: `L234-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L234-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L234-L249) · [Before (L277-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L277-L283)

```diff
-     var LQ = wQ(53),
-       qQ = wQ(1070),
-       oQ = wQ.n(qQ),
-       DQ = wQ(9137),
-       kQ = wQ(40933),
-       vQ = wQ(40929),
-       mQ = wQ(1107);
+     const Dk = "island";
+     var fk = ik(314);
+     const Sk = (0, fk.nb)([0, 0, -1]),
+       bk = [{
+         name: "S",
+         bearing: (0, fk.nb)([0, 0, 1])
+       }, {
+         name: "E",
+         bearing: (0, fk.nb)([-1, 0, 0])
+       }, {
+         name: "N",
+         bearing: Sk
+       }, {
+         name: "W",
+         bearing: (0, fk.nb)([1, 0, 0])
+       }];
```

#### 41. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L285-L286` → after: `L251-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L251-L252) · [Before (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L285-L286)

```diff
-     function uQ(QQ) {
-       return DQ.d.openMobLineup(QQ)
+     function rk(kk, ek, ik) {
+       return [100 * (ik.mapMaxX - kk) / (ik.mapMaxX - ik.mapMinX), 100 * (ek - ik.mapMinZ) / (ik.mapMaxZ - ik.mapMinZ)]
```

#### 42. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L288-L299` → after: `L254-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L254-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L254-L260) · [Before (L288-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L288-L299)

```diff
-     const HQ = (0, LQ.memo)((function(QQ) {
-       let {
-         players: FQ,
-         className: wQ
-       } = QQ;
-       const qQ = (0, LQ.useRef)(null),
-         DQ = (0, LQ.useMemo)((() => FQ.map((QQ => {
-           let {
-             cosmetics: FQ,
-             size: wQ,
-             heldGun: LQ
-           } = QQ;
+ 
+     function Pk(kk, ek, ik) {
+       const fk = "local" === ek,
+         Sk = kk.background,
+         bk = ek => Sk ? rk(ek[0] - kk.mapOrigin[0], ek[2] - kk.mapOrigin[2], Sk.bounds) : [50, 50],
+         Pk = (kk.insideDungeon ? [] : kk.landmarks).map((kk => {
+           var ek, Dk;
```

#### 43. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L301-L304` → after: `L262-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L262-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L262-L269) · [Before (L301-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L301-L304)

```diff
-             cosmetics: FQ,
-             size: wQ,
-             nC: LQ.name,
-             animation: LQ.aimed ? kQ.e : kQ.g
+             id: kk.id,
+             name: ik(kk.visited && kk.nameKey ? null !== (ek = kk.mapLabelKey) && void 0 !== ek ? ek : kk.nameKey : "skyblockGame:mapUnknown"),
+             icon: kk.visited && null !== (Dk = kk.icon) && void 0 !== Dk ? Dk : "unknown",
+             visited: kk.visited,
+             current: !1,
+             position: bk(kk.position),
+             travelKind: "landmark",
+             travelId: kk.id
```

#### 44. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L306-L345` → after: `L271-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L271-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L271-L335) · [Before (L306-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L306-L345)

```diff
-         }))), [FQ]),
-         HQ = function(QQ) {
-           const [FQ, wQ] = (0, LQ.useState)([]);
-           return (0, LQ.useEffect)((() => {
-             wQ(QQ.map((() => !1)));
-             const FQ = QQ.map(((QQ, FQ) => {
-               let {
-                 showAfterMs: LQ
-               } = QQ;
-               return window.setTimeout((() => {
-                 wQ((QQ => QQ.map(((QQ, wQ) => QQ || wQ === FQ))))
-               }), LQ)
-             }));
-             return () => {
-               for (const QQ of FQ) window.clearTimeout(QQ)
-             }
- ... (24 more removed lines; see GitHub link above)
+         })),
+         Mk = kk.zones.map((ek => {
+           var Dk;
+           return {
+             id: ek.id,
+             name: ik(ek.visited && ek.nameKey ? ek.nameKey : "skyblockGame:mapUnknown"),
+             icon: ek.visited && null !== (Dk = ek.icon) && void 0 !== Dk ? Dk : "unknown",
+             visited: ek.visited,
+             current: ek.id === kk.zoneId,
+             position: ek.position,
+             thumbnail: ek.visited ? ek.id : void 0,
+             travelKind: "zone",
+             travelId: ek.id
+           }
+         })),
+         Kk = kk.insideDungeon || !Sk ? [] : kk.portals.map((kk => {
+ ... (49 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L348-L350` → after: `L338-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L338-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L338-L349) · [Before (L348-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L348-L350)

```diff
-     function kQ(QQ, FQ, wQ, qQ) {
-       const oQ = QQ.YQ <= 0 ? 1 : FQ + wQ * Math.max(0, qQ) / QQ.YQ;
-       return QQ.xQ === LQ.n.LoopOnLastFrame ? oQ % 1 : QQ.xQ === LQ.n.NoLoop && oQ >= 1 ? null : Math.min(1, oQ)
+     function mk(kk) {
+       const ek = new Set;
+       return kk.flatMap((ik => ik.connections.flatMap((Dk => {
+         const fk = kk.find((kk => kk.id === Dk)),
+           Sk = [ik.id, Dk].sort().join("|");
+         return !fk || ek.has(Sk) ? [] : (ek.add(Sk), [{
+           id: `${ik.id}-${Dk}`,
+           start: ik.position,
+           end: fk.position,
+           explored: ik.visited && fk.visited
+         }])
+       }))))
```

#### 46. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L352-L362` → after: `L351-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L351-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L351-L392) · [Before (L352-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L352-L362)

```diff
-     class vQ {
-       createAnimationScript(QQ) {
-         const {
-           YQ: FQ,
-           loop: wQ,
-           AQ: LQ
-         } = QQ;
-         return {
-           YQ: Math.round(FQ),
-           xQ: this.createLoopMode(null !== wQ && void 0 !== wQ && wQ),
-           AQ: this.createNodeSkeletonAnimationScript(null !== LQ && void 0 !== LQ ? LQ : null)
+     var Mk = ik(38105);
+     class Kk extends Mk.d {}
+     const xk = "skyblockMapView";
+     class nk extends Kk {
+       constructor(kk, ek, ik) {
+         let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
+           fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
+           Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
+         super(kk, Dk, fk), this.requestTravel = ek, this.translate = ik, this.now = Sk, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
+           presentation: null,
+           enabled: !1,
+           open: !1,
+           tab: "local",
+           map: null,
+           pending: !1,
+           feedback: ""
+ ... (26 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L365-L374` → after: `L395-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L395-L396) · [Before (L365-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L365-L374)

```diff
-       createLoopMode(QQ) {
-         switch (QQ) {
-           case !1:
-             return LQ.n.NoLoop;
-           case !0:
-             return LQ.n.LoopOnLastFrame;
-           case "hold-on-last-frame":
-             return LQ.n.HoldOnLastFrame
-         }
-         throw new Error(`Invalid loop mode schema: ${QQ}`)
+       getEntities() {
+         return this.entities
```

#### 48. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L376-L383` → after: `L398-L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L398-L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L398-L399) · [Before (L376-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L376-L383)

```diff
-       createNodeSkeletonAnimationScript(QQ) {
-         if (null === QQ) return null;
-         const FQ = {};
-         for (const wQ in QQ) {
-           const LQ = QQ[wQ];
-           FQ[wQ] = this.createNodeAnimationScript(LQ)
-         }
-         return FQ
+       setTranslator(kk) {
+         this.translate = kk, this.emit()
```

#### 49. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L385-L391` → after: `L401-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L401-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L401-L436) · [Before (L385-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L385-L391)

```diff
-       createNodeAnimationScript(QQ) {
-         const {
-           timeline: FQ
-         } = QQ, wQ = FQ.filter((QQ => Number.isFinite(QQ.timeFraction)));
-         return wQ.sort(((QQ, FQ) => QQ.timeFraction - FQ.timeFraction)), {
-           rotation: this.createTimelineFromKeyframes(wQ, "rotation", bQ),
-           position: this.createTimelineFromKeyframes(wQ, "position", xQ)
+       BU(kk) {
+         var ek;
+         if (!this.aU)
+           if ("entities" !== kk.kind)
+             if ("open" !== kk.kind) {
+               var ik, Dk;
+               if ("snapshot" === kk.kind)(null === (ik = kk.snapshot) || void 0 === ik ? void 0 : ik.zoneId) !== (null === (Dk = this.map) || void 0 === Dk ? void 0 : Dk.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = kk.snapshot, !this.map && this.open && thi … [truncated]
+               else if ("travelQueued" === kk.kind) {
+                 var fk;
+                 kk.requestId === (null === (fk = this.pending) || void 0 === fk ? void 0 : fk.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
+               } else if (kk.requestId === (null === (ek = this.pending) || void 0 === ek ? void 0 : ek.requestId)) {
+                 var Sk;
+                 this.pending = null, this.feedbackKey = null !== (Sk = kk.errorKey) && void 0 !== Sk ? Sk : "", null === kk.errorKey && this.close()
+               }
+               this.emit()
+             } else this.show();
+ ... (20 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L394-L400` → after: `L439-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L439-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L439-L472) · [Before (L394-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L394-L400)

```diff
-       createTimelineFromKeyframes(QQ, FQ, wQ) {
-         const LQ = [];
-         for (const vQ of QQ) {
-           const QQ = vQ[FQ];
-           if (QQ) {
-             const FQ = this.createAnimationFrameWithoutPrecomputes(vQ.timeFraction, QQ);
-             uQ(FQ) && LQ.push(FQ)
+     }
+     const Uk = 67.5 * Math.PI / 180;
+ 
+     function Hk(kk, ek) {
+       const ik = Math.abs(kk);
+       if (ik > Uk || ek.trackHalfWidth <= 0) return null;
+       const Dk = ek.trackHalfWidth,
+         fk = ek.screenHalfWidth / (ek.tanHalfFovX * Math.max(.5, Math.cos(ek.pitch))),
+         Sk = Math.min(Math.atan(.6 * Dk / fk), .75 * Uk),
+         bk = fk * Math.tan(Sk);
+       let rk;
+       if (ik <= Sk) rk = fk * Math.tan(ik);
+       else {
+         const kk = Uk - Sk,
+           ek = Math.max(0, fk * kk / (Math.cos(Sk) ** 2 * (Dk - bk)) - 1),
+           Pk = (ik - Sk) / kk;
+ ... (18 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L402` → after: `L474-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L474-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L474-L484) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L402)

```diff
-         }
+         }))
+       }
+     }
+     class lk {
+       constructor(kk, ek, ik, Dk) {
+         this.map = kk, this.kind = ek, this.position = ik, this.alive = Dk, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = ek, this.range = "enemy" === ek ? 48 : 64, this.limit = 12
+       }
+       vy(kk) {
+         if ("enemy" !== this.kind || this.alive(kk.Ai)) return this.position(kk.Ai)
+       }
+       getPoints() {
```

#### 52. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L404-L412` → after: `L486-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L486-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L486-L497) · [Before (L404-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L404-L412)

```diff
-         for (let vQ = 0; vQ < LQ.length; vQ++) {
-           var oQ, DQ, kQ;
-           const QQ = LQ[vQ],
-             FQ = null !== (oQ = LQ[vQ - 1]) && void 0 !== oQ ? oQ : QQ,
-             mQ = null !== (DQ = LQ[vQ + 1]) && void 0 !== DQ ? DQ : QQ,
-             uQ = null !== (kQ = LQ[vQ + 2]) && void 0 !== kQ ? kQ : mQ;
-           qQ.push({
-             ...QQ,
-             ...wQ(FQ.post, FQ.timeFraction, QQ.post, QQ.timeFraction, mQ.pre, mQ.timeFraction, uQ.pre, uQ.timeFraction)
+         for (const Dk of this.map.getEntities()) {
+           if (Dk.kind !== this.kind || "enemy" === this.kind && !this.alive(Dk.compassEntityId)) continue;
+           const fk = this.position(Dk.compassEntityId);
+           var ek, ik;
+           if (fk) kk.push({
+             id: `${this.kind}:${Dk.compassEntityId}`,
+             Ai: Dk.compassEntityId,
+             kind: this.kind,
+             icon: null !== (ek = Dk.icon) && void 0 !== ek ? ek : Dk.npcSkin ? `npc_${Dk.npcSkin}` : this.kind,
+             displayName: Dk.displayName,
+             position: fk,
+             nameKey: null !== (ik = Dk.nameKey) && void 0 !== ik ? ik : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
```

#### 53. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L417-L430` → after: `L502-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L502-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L502-L505) · [Before (L417-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L417-L430)

```diff
-       createAnimationFrameWithoutPrecomputes(QQ, FQ) {
-         let wQ, LQ, qQ = null;
-         var oQ;
-         if ("object" === typeof FQ && "point" in FQ) qQ = null !== (oQ = FQ.MQ) && void 0 !== oQ ? oQ : null, wQ = FQ.point, LQ = FQ.point;
-         else if ("object" === typeof FQ && "pre" in FQ) {
-           var DQ;
-           qQ = null !== (DQ = FQ.MQ) && void 0 !== DQ ? DQ : null, wQ = FQ.pre, LQ = FQ.post
-         } else wQ = FQ, LQ = FQ;
-         return {
-           timeFraction: QQ,
-           MQ: this.createLerpMode(qQ),
-           pre: wQ,
-           post: LQ
-         }
+     }
+     class pk {
+       constructor(kk) {
+         this.map = kk, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
```

#### 54. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L432-L433` → after: `L507-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L507-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L507-L519) · [Before (L432-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L432-L433)

```diff
-       createLerpMode(QQ) {
-         return null === QQ ? LQ.j.Linear : vQ.LERP_MODE_SCHEMA_MAPPING[QQ]
+       getPoints() {
+         const kk = this.map.getSnapshot().map;
+         return !kk || kk.insideDungeon ? [] : kk.portals.map((kk => {
+           var ek;
+           return {
+             id: "portal:" + kk.id,
+             kind: "portal",
+             position: kk.position,
+             nameKey: null !== (ek = kk.nameKey) && void 0 !== ek ? ek : "skyblockGame:compassUnvisitedZone",
+             icon: kk.visited ? "dungeons" === kk.destination ? "portal_orange" : "portal" : "unknown",
+             colour: kk.colour
+           }
+         }))
```

#### 55. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L442` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L524) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L442)

```diff
-         this.animationSchema = QQ
+         this.target = kk, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
```

#### 56. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L444-L474` → after: `L526-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L526-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L526-L534) · [Before (L444-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L444-L474)

```diff
-       createAnimationScript() {
-         const {
-           animation_length: QQ,
-           loop: FQ,
-           bones: wQ
-         } = this.animationSchema;
-         return {
-           YQ: Math.round(1e3 * QQ),
-           xQ: this.createLoopMode(null !== FQ && void 0 !== FQ && FQ),
-           AQ: this.createNodeSkeletonAnimationScript(null !== wQ && void 0 !== wQ ? wQ : null)
-         }
-       }
-       createLoopMode(QQ) {
-         switch (QQ) {
-           case !1:
-             return LQ.n.NoLoop;
- ... (15 more removed lines; see GitHub link above)
+       getPoints() {
+         const kk = this.target();
+         return kk ? [{
+           id: "quest",
+           kind: "quest",
+           icon: "quest",
+           position: kk.position,
+           nameKey: kk.nameKey
+         }] : []
```

#### 57. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L476-L484` → after: `L536-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L536-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L536-L546) · [Before (L476-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L476-L484)

```diff
-       createNodeAnimationScript(QQ) {
-         const {
-           rotation: FQ,
-           position: wQ
-         } = QQ;
-         return {
-           rotation: this.createAnimationTimeline(null !== FQ && void 0 !== FQ ? FQ : null, tQ, bQ, !0),
-           position: this.createAnimationTimeline(null !== wQ && void 0 !== wQ ? wQ : null, MQ, xQ, !1)
-         }
+     }
+ 
+     function Yk(kk, ek, ik) {
+       let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kk.position;
+       const Sk = Dk[0] - ek[0],
+         bk = Dk[2] - ek[2];
+       return {
+         ...kk,
+         position: Dk,
+         offset: fk.c.computeShortestRotation(ik, (0, fk.nb)([Sk, 0, bk])),
+         distance: Math.hypot(Sk, Dk[1] - ek[1], bk)
```

#### 58. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L486-L491` → after: `L548-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L548-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L548-L571) · [Before (L486-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L486-L491)

```diff
-       createAnimationTimeline(QQ, FQ, wQ, LQ) {
-         if (null === QQ) return [];
-         if (Array.isArray(QQ)) {
-           QQ = {
-             "0.0": QQ
-           }
+     }
+     let Lk;
+ 
+     function Ck(kk, ek) {
+       var ik;
+       return (null === (ik = Lk) || void 0 === ik ? void 0 : ik.locale) !== ek && (Lk = {
+         locale: ek,
+         near: new Intl.NumberFormat(ek, {
+           minimumFractionDigits: 1,
+           maximumFractionDigits: 1
+         }),
+         far: new Intl.NumberFormat(ek, {
+           minimumFractionDigits: 0,
+           maximumFractionDigits: 0
+         })
+       }), (kk < 10 ? Lk.near : Lk.far).format(kk)
+ ... (8 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L493-L508` → after: `L573-L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L573-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L573-L591) · [Before (L493-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L493-L508)

```diff
-         const qQ = Object.entries(QQ).map((QQ => {
-           let [wQ, LQ] = QQ;
-           const qQ = Number(wQ) / this.animationSchema.animation_length;
-           return this.createAnimationFrameWithoutPrecomputes(qQ, LQ, FQ)
-         })).filter(uQ);
-         qQ.sort(((QQ, FQ) => QQ.timeFraction - FQ.timeFraction)), LQ && function(QQ) {
-           for (let FQ = 1; FQ < QQ.length; FQ++) {
-             const wQ = QQ[FQ - 1].post,
-               LQ = QQ[FQ],
-               qQ = GQ(LQ.pre),
-               oQ = GQ(LQ.post),
-               DQ = cQ(wQ, LQ.pre);
-             cQ(wQ, qQ) < DQ && (QQ[FQ] = {
-               ...LQ,
-               pre: qQ,
-               post: oQ
+       }
+       frame(kk, ek, ik) {
+         if (ik >= this.refreshAt) {
+           this.refreshAt = ik + 200, this.candidates = [];
+           for (const ek of this.providers.values()) {
+             if (!ek.enabled) continue;
+             const ik = ek.getPoints().map((ek => {
+               const ik = ek.position;
+               return {
+                 point: ek,
+                 distance: Math.hypot(ik[0] - kk[0], ik[1] - kk[1], ik[2] - kk[2])
+               }
+             })).filter((kk => kk.distance <= ek.range)).sort(((kk, ek) => kk.distance - ek.distance)).slice(0, ek.limit);
+             for (const {
+                 point: kk
+               }
+ ... (3 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L511` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L594) · [Before (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L511)

```diff
-         }(qQ);
+         }
```

#### 61. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L513-L522` → after: `L596-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L596-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L596-L606) · [Before (L513-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L513-L522)

```diff
-         for (let mQ = 0; mQ < qQ.length; mQ++) {
-           var DQ, kQ, vQ;
-           const QQ = qQ[mQ],
-             FQ = null !== (DQ = qQ[mQ - 1]) && void 0 !== DQ ? DQ : QQ,
-             LQ = null !== (kQ = qQ[mQ + 1]) && void 0 !== kQ ? kQ : QQ,
-             uQ = null !== (vQ = qQ[mQ + 2]) && void 0 !== vQ ? vQ : LQ;
-           oQ.push({
-             ...QQ,
-             ...wQ(FQ.post, FQ.timeFraction, QQ.post, QQ.timeFraction, LQ.pre, LQ.timeFraction, uQ.pre, uQ.timeFraction)
-           })
+         for (const {
+             point: fk,
+             provider: Sk
+           }
+           of this.candidates) {
+           if (!Sk.enabled) continue;
+           const ik = Sk.vy ? Sk.vy(fk) : fk.position;
+           if (ik) {
+             const Sk = Yk(fk, kk, ek, ik);
+             Math.abs(Sk.offset) <= Uk && Dk.push(Sk)
+           }
```

#### 62. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L526-L543` → after: `L610-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L610-L611) · [Before (L526-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L526-L543)

```diff
-       createAnimationFrameWithoutPrecomputes(QQ, FQ, wQ) {
-         let LQ, qQ, oQ = null;
-         if ("object" === typeof FQ && "post" in FQ) {
-           var DQ;
-           oQ = null !== (DQ = FQ.lerp_mode) && void 0 !== DQ ? DQ : null, qQ = AQ(FQ.post, wQ), LQ = FQ.pre ? AQ(FQ.pre, wQ) : qQ
-         } else {
-           const QQ = AQ(FQ, wQ);
-           qQ = QQ, LQ = QQ
-         }
-         return {
-           timeFraction: QQ,
-           MQ: this.createLerpMode(oQ),
-           pre: LQ,
-           post: qQ
-         }
-       }
- ... (2 more removed lines; see GitHub link above)
+       dispose() {
+         this.providers.clear(), this.candidates = []
```

#### 63. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L548` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L650) · [Before (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L548)

```diff
-       return Number.isFinite(QQ.timeFraction) && HQ(QQ.pre) && HQ(QQ.post)
+       return kk >= Vk ? 1 : kk + 1
```

#### 64. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L552` → after: `L667-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L667-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L667-L677) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L552)

```diff
-       return Number.isFinite(QQ[0]) && Number.isFinite(QQ[1]) && Number.isFinite(QQ[2])
+       let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+       const ik = Math.max(0, Math.floor(kk)),
+         Dk = Math.floor(ik % 1e3 / 100),
+         fk = Math.floor(ik / 1e3),
+         Sk = fk % 60,
+         bk = Math.floor(fk / 60),
+         rk = bk % 60,
+         Pk = Math.floor(bk / 60),
+         mk = kk => kk < 10 ? `0${kk}` : String(kk),
+         Mk = ek ? `.${Dk}` : "";
+       return Pk > 0 ? `${Pk}:${mk(rk)}:${mk(Sk)}${Mk}` : `${rk}:${mk(Sk)}${Mk}`
```

#### 65. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L555-L564` → after: `L744-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L744-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L744-L746) · [Before (L555-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L555-L564)

```diff
-     function bQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
-       const vQ = oQ - FQ,
-         mQ = oQ - LQ,
-         uQ = kQ - LQ,
-         HQ = [null, null, null];
-       for (let bQ = 0; bQ < HQ.length; bQ++) HQ[bQ] = YQ(QQ[bQ], wQ[bQ], qQ[bQ], DQ[bQ], vQ, uQ);
-       return {
-         GQ: mQ,
-         pQ: HQ
-       }
+     function ck(kk, ek) {
+       const ik = Math.floor(5 * kk / (2 * ek + 1));
+       return Math.min(4, Math.max(0, ik))
```

#### 66. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L567-L572` → after: `L756-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L756-L757) · [Before (L567-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L567-L572)

```diff
-     function YQ(QQ, FQ, wQ, LQ, oQ, DQ) {
-       return {
-         CQ: qQ.e.computeShortestRotation(QQ, wQ) / oQ,
-         SQ: qQ.e.computeShortestRotation(FQ, LQ) / DQ,
-         delta: qQ.e.computeShortestRotation(FQ, wQ)
-       }
+     function Jk(kk) {
+       return Math.max(0, kk)
```

#### 67. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L575-L588` → after: `L760-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L760-L761) · [Before (L575-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L575-L588)

```diff
-     function xQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
-       const vQ = oQ - FQ,
-         mQ = oQ - LQ,
-         uQ = kQ - LQ,
-         HQ = [null, null, null];
-       for (let bQ = 0; bQ < HQ.length; bQ++) HQ[bQ] = {
-         CQ: (qQ[bQ] - QQ[bQ]) / vQ,
-         SQ: (DQ[bQ] - wQ[bQ]) / uQ,
-         delta: qQ[bQ] - wQ[bQ]
-       };
-       return {
-         GQ: mQ,
-         pQ: HQ
-       }
+     function ke(kk) {
+       return 1 + .01 * Jk(kk)
```

#### 68. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L591-L592` → after: `L764-L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L764-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L764-L765) · [Before (L591-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L591-L592)

```diff
-     function AQ(QQ, FQ) {
-       return null === FQ ? QQ : FQ(QQ)
+     function ee(kk) {
+       return 1 + .005 * Jk(kk)
```

#### 69. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L596-L597` → after: `L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L769) · [Before (L596-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L596-L597)

```diff
-       const [FQ, wQ, LQ] = QQ, DQ = -(0, oQ.n)(FQ), kQ = -(0, oQ.n)(wQ), vQ = (0, oQ.n)(LQ), mQ = qQ.e.quaternionFromEulerZYX(DQ, kQ, vQ);
-       return qQ.e.eulerYXZFromQuaternion(mQ)
+       return 1 + .005 * Jk(kk)
```

#### 70. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L606` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L773) · [Before (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L606)

```diff
-       return [-QQ[0] * eQ, QQ[1] * eQ, QQ[2] * eQ]
+       return .01 * Jk(kk)
```

#### 71. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L610-L611` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L777) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L610-L611)

```diff
-       const [FQ, wQ, LQ] = QQ;
-       return [FQ >= 0 ? Math.PI - FQ : -Math.PI - FQ, pQ(wQ + Math.PI), pQ(LQ + Math.PI)]
+       return 150 / (150 + Jk(kk))
```

#### 72. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L615` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L781) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L615)

```diff
-       return qQ.e.mod(QQ + Math.PI, 2 * Math.PI) - Math.PI
+       return 1 + .002 * Jk(kk)
```

#### 73. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L619` → after: `L10199-L10405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R10199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L10199-L10405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L10199-L10405) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L619)

```diff
-       return Math.abs(qQ.e.computeShortestRotation(QQ[0], FQ[0])) + Math.abs(qQ.e.computeShortestRotation(QQ[1], FQ[1])) + Math.abs(qQ.e.computeShortestRotation(QQ[2], FQ[2]))
+       return [{
+         timeFraction: 0,
+         minColor: [255 * kk[0], 255 * kk[1], 255 * kk[2], 1],
+         maxColor: [255 * ek[0], 255 * ek[1], 255 * ek[2], 1]
+       }, {
+         timeFraction: 1,
+         minColor: [0, 0, 0, 1]
+       }]
+     }
+     const Or = [0, 0, 0],
+       gr = {
+         texture: "glint",
+         mipmaps: !1,
+         vK: 24,
+         minLifeTime: .18,
+         maxLifeTime: .35,
+ ... (191 more added lines; see GitHub link above)
```

#### 74. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L621` → after: `L10407-L10877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R10407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L10407-L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L10407-L10877) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L621)

```diff
-     const CQ = new vQ
+     const MP = {
+         farming_1: {
+           raises: kk => "NPC" === kk.type && "chef" === kk.variation,
+           rise: .4
+         },
+         fishing_1: {
+           raises: kk => "Draugr Warper" === kk.type,
+           rise: .4
+         }
+       },
+       KP = (kk, ek, ik, Sk) => {
+         let {
+           localPlayerId: bk
+         } = Sk;
+         const rk = new Cf({
+           translate: (kk, ek) => (0, If.x)(cr.f.get().getCurrentLanguageCode(), kk, ek),
+ ... (455 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L623` → after: `L10879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R10879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L10879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L10879) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L623)

```diff
-   36753: (QQ, FQ, wQ) => {
+   35923: (kk, ek, ik) => {
```

#### 76. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L625-L628` → after: `L10881-L10882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R10881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L10881-L10882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L10881-L10882) · [Before (L625-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L625-L628)

```diff
-       e: () => DQ,
-       h: () => oQ,
-       j: () => LQ,
-       n: () => qQ
+       d: () => fk,
+       h: () => Dk
```

#### 77. `bundles/bloxd.io/chunks/js/192.js` (Changed code · before: `L630-L641` → after: `L10884-L11196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4R10884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a72956b091e31a0f93096377f5216072d3ad0a1d42a36863fff6e65613ad28a4) · [After (L10884-L11196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/192.js#L10884-L11196) · [Before (L630-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/192.js#L630-L641)

```diff
-     let LQ = function(QQ) {
-         return QQ[QQ.Linear = 0] = "Linear", QQ[QQ.CatmullRomSpline = 1] = "CatmullRomSpline", QQ
-       }({}),
-       qQ = function(QQ) {
-         return QQ[QQ.NoLoop = 0] = "NoLoop", QQ[QQ.LoopOnLastFrame = 1] = "LoopOnLastFrame", QQ[QQ.HoldOnLastFrame = 2] = "HoldOnLastFrame", QQ
-       }({}),
-       oQ = function(QQ) {
-         return QQ[QQ.Movement = 0] = "Movement", QQ[QQ.Action = 1] = "Action", QQ[QQ.Emote = 2] = "Emote", QQ[QQ.Custom = 3] = "Custom", QQ
-       }({}),
-       DQ = function(QQ) {
-         return QQ[QQ.Start = 0] = "Start", QQ[QQ.Stop = 1] = "Stop", QQ
-       }({})
+     const Dk = "skyblockSkills",
+       fk = "skills_test_gym"
+   },
+   33788: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => fk,
+       e: () => bk
+     });
+     const Dk = [{
+       threshold: 10n ** 180n,
+       suffix: "NoQig"
+     }, {
+       threshold: 10n ** 177n,
+       suffix: "OcQig"
+     }, {
+       threshold: 10n ** 174n,
+ ... (297 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/193.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/193.js` (52 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2)

#### 1. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L4-L38` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L4) · [Before (L4-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L4-L38)

```diff
-   40922: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       MobPreview: () => HQ
-     });
-     var LQ = wQ(53),
-       qQ = wQ(1070),
-       oQ = wQ.n(qQ),
-       DQ = wQ(40929),
-       kQ = wQ(9137),
-       vQ = wQ(40933),
-       mQ = wQ(1107);
- 
-     function uQ(QQ) {
-       return kQ.d.openMob(QQ)
-     }
-     const HQ = (0, LQ.memo)((function(QQ) {
- ... (19 more removed lines; see GitHub link above)
+   38710: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L42-L54` → after: `L8-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L8-L21) · [Before (L42-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L42-L54)

```diff
-     var LQ = wQ(53),
-       qQ = wQ(2657);
- 
-     function oQ(QQ, FQ, wQ) {
-       const oQ = (0, LQ.useRef)(null),
-         {
-           width: DQ,
-           height: kQ
-         } = (0, qQ.c)(QQ);
-       (0, LQ.useEffect)((() => {
-         const wQ = FQ(QQ.current);
-         return oQ.current = wQ, () => {
-           wQ.close(), oQ.current = null
+     class Dk {
+       constructor(kk, ek) {
+         this.read = kk, this.apply = ek, this.release = null
+       }
+       turn(kk, ek) {
+         const ik = null === this.release ? this.read() : this.release.transitionMs;
+         this.stop(!1), this.apply({
+           forcedCameraDirectionTransitionMs: ek,
+           forcedCameraDirection: [kk[0], kk[1], kk[2]]
+         }), this.release = {
+           timer: setTimeout((() => {
+             this.stop(!0)
+           }), ek + 100),
+           transitionMs: ik
```

#### 3. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L56-L60` → after: `L23-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L23-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L23-L32) · [Before (L56-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L56-L60)

```diff
-       }), [QQ, FQ]), (0, LQ.useEffect)((() => {
-         DQ <= 0 || kQ <= 0 || oQ.current.resize(DQ, kQ)
-       }), [DQ, kQ]), (0, LQ.useEffect)((() => {
-         oQ.current.show(wQ)
-       }), [wQ])
+       }
+       dispose() {
+         this.stop(!0)
+       }
+       stop(kk) {
+         null !== this.release && (clearTimeout(this.release.timer), kk && this.apply({
+           forcedCameraDirection: null,
+           forcedCameraDirectionTransitionMs: this.release.transitionMs
+         }), this.release = null)
+       }
```

#### 4. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L63` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L35) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L63)

```diff
-   40933: (QQ, FQ, wQ) => {
+   38231: (kk, ek, ik) => {
```

#### 5. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L65-L67` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L37-L38) · [Before (L65-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L65-L67)

```diff
-       e: () => bQ,
-       g: () => HQ,
-       i: () => vQ
+       d: () => Sk,
+       e: () => fk
```

#### 6. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L69-L70` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L40) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L69-L70)

```diff
-     var LQ = wQ(36768),
-       qQ = wQ(38164);
+     const Dk = new Map;
```

#### 7. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L73-L80` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L43) · [Before (L73-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L73-L80)

```diff
-       let [wQ, LQ, qQ] = QQ;
-       return [0, .5, 1].map((QQ => ({
-         timeFraction: QQ,
-         rotation: {
-           MQ: "catmull-rom-spline",
-           point: [wQ, LQ, qQ + (.5 === QQ ? FQ : 0)]
-         }
-       })))
+       Dk.set(kk, ek)
```

#### 8. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L85-L112` → after: `L62-L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L62-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L62-L68) · [Before (L85-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L85-L112)

```diff
-         YQ: 3200,
-         loop: !0,
-         AQ: {
-           Root: {
-             timeline: [0, .5, 1].map((QQ => ({
-               timeFraction: QQ,
-               position: {
-                 MQ: "catmull-rom-spline",
-                 point: [0, .5 === QQ ? .18 : 0, 0]
-               }
-             })))
-           },
-           HeadMesh: {
-             timeline: [0, .25, .75, 1].map((QQ => ({
-               timeFraction: QQ,
-               rotation: {
- ... (12 more removed lines; see GitHub link above)
+         pos: [ik[0], ik[1], ik[2]],
+         noticeboardSpan: Kk && {
+           width: Kk.rect.width,
+           height: Kk.rect.height
+         },
+         text: null !== (Sk = null === nk || void 0 === nk || null === (bk = nk.persisted) || void 0 === bk || null === (rk = bk.shared) || void 0 === rk ? void 0 : rk.text) && void 0 !== Sk ? Sk : "",
+         textSize: null !== (Pk = null === nk || void 0 === nk || null === (mk = nk.persisted) || void 0 === mk || null === (Mk = mk.shared) || void 0 === Mk ? void 0 : Mk.textSize) && void 0 !== Pk ? Pk : null
```

#### 9. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L122` → after: `L72-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L72-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L72-L82) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L122)

```diff
-   9142: (QQ, FQ, wQ) => {
+   38088: (kk, ek, ik) => {
+     function Dk(kk) {
+       switch (kk.kind) {
+         case void 0:
+         case "flatEmissive":
+           return !1;
+         case "chevronPath":
+         case "furnaceFire":
+           return !0
+       }
+     }
```

#### 10. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L126` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L86) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L126)

```diff
-       g: () => uQ
+       e: () => Dk
```

#### 11. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L128` → after: `L88-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L88-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L88-L229) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L128)

```diff
-     var LQ = wQ(1560);
+     const fk = 4,
+       Sk = 3
+   },
+   38734: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => fk,
+       d: () => Sk
+     });
+     var Dk = ik(314);
+     const fk = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
+     class Sk {
+       constructor(kk) {
+         this.importGame = kk, this.loads = new Map, this.loaded = new Map
+       }
+       load(kk) {
+         const ek = (0, Dk.Db)(kk);
+ ... (126 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L132-L134` → after: `L233-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L233-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L233-L239) · [Before (L132-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L132-L134)

```diff
-       return {
-         ...DQ.store,
-         yaw: DQ.store.yaw + (null !== (FQ = LQ.e[QQ].previewYaw) && void 0 !== FQ ? FQ : 0)
+       const ik = "default" === kk.mode ? "movement" : null !== (ek = kk.playerFacing) && void 0 !== ek ? ek : "movement";
+       return "cursor" === ik ? {
+         facing: ik,
+         mouseTurns: null
+       } : {
+         facing: ik,
+         mouseTurns: "default" !== kk.mode && void 0 !== kk.playerLook ? "look" : "view"
```

#### 13. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L137-L148` → after: `L242-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L242-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L242-L264) · [Before (L137-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L137-L148)

```diff
-     const oQ = {
-         yaw: .61 * Math.PI,
-         pitch: Math.PI / 2.05,
-         radius: 30,
-         target: [0, 0, 0]
-       },
-       DQ = {
-         player: oQ,
-         store: {
-           ...oQ,
-           radius: 33,
-           target: [0, 3.9, 0]
+ 
+     function Sk(kk, ek, ik, fk, Sk, bk) {
+       return bk.SF = 0, bk.mF = 0, bk.pointedAt = void 0, void 0 !== fk ? Sk ? (bk.pointedAt = fk, kk) : (0, Dk.q)(fk.heading) : Sk ? (bk.SF = ek, bk.mF = ik, kk) : (0, Dk.q)(kk + ek)
+     }
+   },
+   38758: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Bk
+     });
+     var Dk = ik(38760),
+       fk = ik(38752),
+       Sk = ik(36583);
+ 
+     function bk(kk, ek, ik, Dk) {
+       if (!(Dk > 0)) return ek;
+       const fk = ek > kk ? Math.min(ek, kk + ik / Dk) : Math.max(ek, kk - ik / Dk);
+ ... (7 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L150` → after: `L266-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L266-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L266-L326) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L150)

```diff
-       };
+       }
+       getScreen() {
+         return this.screen
+       }
+       fadeOut(kk) {
+         !this.isGoingOut() && this.sinceTurnMs < Dk.m.minFadeTurnMs ? this.waiting = {
+           turn: "out",
+           transition: kk
+         } : (this.waiting = null, this.startOut(kk))
+       }
+       fadeIn(kk) {
+         this.isGoingOut() ? this.sinceTurnMs < Dk.m.minFadeTurnMs ? this.waiting = {
+           turn: "in",
+           minMs: kk
+         } : (this.waiting = null, this.startIn(kk)) : this.waiting = null
+       }
+ ... (45 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L153-L155` → after: `L329-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L329-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L329-L340) · [Before (L153-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L153-L155)

```diff
-       QQ instanceof Promise ? QQ.then(FQ).catch((QQ => {
-         console.error("Couldn't open the preview", QQ)
-       })) : FQ(QQ)
+       var ik;
+       return null !== (ik = kk.fov) && void 0 !== ik ? ik : ek.getDefaultFov()
+     }
+ 
+     function Uk(kk, ek, ik, Dk, fk) {
+       const Sk = 2 / Dk,
+         bk = Math.exp(-Sk * fk);
+       for (let rk = 0; rk < kk.length; rk++) {
+         const Dk = kk[rk] - ik[rk],
+           Pk = (ek[rk] + Sk * Dk) * fk;
+         kk[rk] = ik[rk] + (Dk + Pk) * bk, ek[rk] = (ek[rk] - Sk * Pk) * bk
+       }
```

#### 16. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L158-L161` → after: `L343-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L343-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L343-L355) · [Before (L158-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L158-L161)

```diff
-       constructor(QQ) {
-         this.opened = null, this.view = null, this.size = null, this.closed = !1, kQ(QQ, (QQ => {
-           this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height), null !== this.view && QQ.show(this.view))
-         }))
+       constructor(kk, ek, ik, Dk) {
+         var Sk, bk, rk, Pk, mk;
+         this.settings = kk, this.Ux = ek, this.targets = ik, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Cw = [0, 0, 0, 0, 0, 0], this.started = !1, this.a … [truncated]
+           heading: 0,
+           pitch: 0
+         }, this.points = [], this.forward = [0, 0, 0], this.base = {
+           heading: (0, fk.q)((0, Mk.h)(null !== (Sk = kk.viewHeading) && void 0 !== Sk ? Sk : 0)),
+           pitch: (0, fk.h)((0, Mk.h)(null !== (bk = kk.viewElevation) && void 0 !== bk ? bk : 45))
+         }, this.closestDistance = null !== (rk = kk.closestDistance) && void 0 !== rk ? rk : Math.min(6, null !== (Pk = kk.furthestDistance) && void 0 !== Pk ? Pk : 1 / 0), this.furthestDistance = null !== (mk = kk.furthestDistance) && void 0 !== mk ? mk : Math.max(64, this.close … [truncated]
+         const Kk = (0, fk.f)(this.base.heading, this.base.pitch, this.forward),
+           xk = Dk.position,
+           nk = this.closestDistance;
+         this.goal = [xk[0] + Kk[0] * nk, xk[1] + Kk[1] * nk, xk[2] + Kk[2] * nk, nk, this.base.heading, this.base.pitch]
```

#### 17. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L163-L165` → after: `L357-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L357-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L357-L364) · [Before (L163-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L163-L165)

```diff
-       show(QQ) {
-         var FQ;
-         this.view = QQ, null === (FQ = this.opened) || void 0 === FQ || FQ.show(QQ)
+       update(kk, ek, ik) {
+         var Dk, Sk;
+         this.placeGoal(null !== (Dk = this.settings.fov) && void 0 !== Dk ? Dk : this.Ux.getBaseFov()), this.goal[4] = (0, fk.w)(this.smoothed[4], this.base.heading), this.goal[5] = this.base.pitch;
+         const bk = null !== (Sk = this.settings.smoothMs) && void 0 !== Sk ? Sk : 400;
+         !this.started || bk < 1 ? (xk(this.goal, this.smoothed), this.Cw.fill(0), this.started = !0) : Uk(this.smoothed, this.Cw, this.goal, bk, kk), this.angles.heading = this.smoothed[4], this.angles.pitch = (0, fk.h)(this.smoothed[5]), ek.apply(this.angles, ik);
+         const rk = (0, fk.f)(ik.heading, ik.pitch, this.forward);
+         for (let fk = 0; fk < 3; fk++) ik.position[fk] = this.smoothed[fk] - rk[fk] * this.smoothed[3];
+         ik.fov = nk(this.settings, this.Ux)
```

#### 18. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L167-L172` → after: `L366-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L366-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L366-L367) · [Before (L167-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L167-L172)

```diff
-       resize(QQ, FQ) {
-         var wQ;
-         this.size = {
-           width: QQ,
-           height: FQ
-         }, null === (wQ = this.opened) || void 0 === wQ || wQ.resize(QQ, FQ)
+       continueFrom(kk) {
+         kk instanceof Hk && (xk(kk.goal, this.goal), xk(kk.smoothed, this.smoothed), xk(kk.Cw, this.Cw), this.framedTargets = kk.framedTargets, this.started = kk.started)
```

#### 19. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L174` → after: `L369-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L369-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L369-L372) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L174)

```diff
-       close() {
+       reset() {
+         this.Cw.fill(0), this.started = !1
+       }
+       placeGoal(kk) {
```

#### 20. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L176` → after: `L374-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L374-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L374-L407) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L176)

```diff
-         this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
+         let ik = 0;
+         for (const Mk of this.settings.targets) {
+           const kk = this.targets.currentAimPoint(Mk);
+           kk && (0, Pk.g)(kk, this.pointAt(ik++))
+         }
+         if (ik > 0) this.framedTargets = !0;
+         else if (!this.framedTargets) {
+           const kk = this.targets.aimPoint(this.Ux.localPlayerId);
+           kk && (0, Pk.g)(kk, this.pointAt(ik++))
+         }
+         const Dk = this.goal;
+         if (0 === ik) return void(Dk[3] = this.withinDistances(Dk[3]));
+         for (let Pk = 0; Pk < 3; Pk++) {
+           let kk = 1 / 0,
+             ek = -1 / 0;
+           for (let Dk = 0; Dk < ik; Dk++) kk = Math.min(kk, this.points[Dk][Pk]), ek = Math.max(ek, this.points[Dk][Pk]);
+ ... (18 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L181-L183` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L412) · [Before (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L181-L183)

```diff
-         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(QQ).then((QQ => QQ.ready)), kQ(QQ, (QQ => {
-           this.closed ? QQ.close() : (this.opened = QQ, null !== this.size && QQ.resize(this.size.width, this.size.height))
-         }))
+         this.limits = kk, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
```

#### 22. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L185-L186` → after: `L414-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L414-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L414-L415) · [Before (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L185-L186)

```diff
-       get dev() {
-         return this.opened.dev
+       continueFrom(kk) {
+         this.limits && (this.yawOffset = kk.yawOffset, this.pitchOffset = kk.pitchOffset, this.idleMs = kk.idleMs)
```

#### 23. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L188-L190` → after: `L417-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L417-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L417-L434) · [Before (L188-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L188-L190)

```diff
-       isReady() {
-         var QQ, FQ;
-         return null !== (QQ = null === (FQ = this.opened) || void 0 === FQ ? void 0 : FQ.isReady()) && void 0 !== QQ && QQ
+       update(kk, ek) {
+         const ik = this.limits;
+         if (!ik) return;
+         const Dk = Number.isFinite(ek.SF) ? ek.SF : 0,
+           fk = Number.isFinite(ek.mF) ? ek.mF : 0;
+         if (ek.pointedAt) this.idleMs = 0, this.pointedAt = {
+           heading: ek.pointedAt.heading,
+           pitch: ek.pointedAt.pitch
+         };
+         else if (0 !== Dk || 0 !== fk) this.idleMs = 0, this.yawOffset += Dk, this.pitchOffset += fk;
+         else {
+           const ek = Math.max(0, this.idleMs + kk - 200) - Math.max(0, this.idleMs - 200);
+           if (this.idleMs += kk, void 0 !== ik.returnMs && ek > 0) {
+             const kk = ik.returnMs > 0 ? Math.exp(-3 * ek / ik.returnMs) : 0;
+             this.yawOffset *= kk, this.pitchOffset *= kk
+           }
+ ... (2 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L192-L194` → after: `L436-L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L436-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L436-L443) · [Before (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L192-L194)

```diff
-       setCosmetic(QQ, FQ) {
-         var wQ;
-         null === (wQ = this.opened) || void 0 === wQ || wQ.setCosmetic(QQ, FQ)
+       clampOffsets(kk) {
+         if (kk.maxYaw >= 180) this.yawOffset = (0, fk.s)(0, this.yawOffset);
+         else {
+           const ek = (0, Mk.h)(kk.maxYaw);
+           this.yawOffset = Math.max(-ek, Math.min(ek, this.yawOffset))
+         }
+         const ek = (0, Mk.h)(kk.maxPitch);
+         this.pitchOffset = Math.max(-ek, Math.min(ek, this.pitchOffset))
```

#### 25. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L196-L198` → after: `L445-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L445-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L445-L448) · [Before (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L196-L198)

```diff
-       playEmote(QQ) {
-         var FQ;
-         null === (FQ = this.opened) || void 0 === FQ || FQ.playEmote(QQ)
+       apply(kk, ek) {
+         this.pointedAt && this.limits && (this.yawOffset = (0, fk.s)(kk.heading, this.pointedAt.heading), this.pitchOffset = this.pointedAt.pitch - kk.pitch, this.pointedAt = null, this.clampOffsets(this.limits));
+         const ik = (0, fk.h)(kk.pitch + this.pitchOffset);
+         this.pitchOffset = ik - kk.pitch, ek.heading = (0, fk.q)(kk.heading + this.yawOffset), ek.pitch = ik
```

#### 26. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L200-L202` → after: `L450-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L450-L451) · [Before (L200-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L200-L202)

```diff
-       setOrbit(QQ) {
-         var FQ;
-         null === (FQ = this.opened) || void 0 === FQ || FQ.setOrbit(QQ)
+       unapply(kk, ek) {
+         ek.heading = (0, fk.q)(kk.heading - this.yawOffset), ek.pitch = (0, fk.h)(kk.pitch - this.pitchOffset)
```

#### 27. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L204-L206` → after: `L453-L559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L453-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L453-L559) · [Before (L204-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L204-L206)

```diff
-       resetCamera() {
-         var QQ;
-         null === (QQ = this.opened) || void 0 === QQ || QQ.resetCamera()
+     }
+     const lk = 1e-6;
+ 
+     function pk(kk) {
+       return Math.sqrt(kk[0] * kk[0] + kk[1] * kk[1] + kk[2] * kk[2])
+     }
+ 
+     function yk(kk, ek, ik, Dk, fk) {
+       const Sk = fk * fk,
+         bk = Sk * fk;
+       return (2 * bk - 3 * Sk + 1) * kk + (bk - 2 * Sk + fk) * ek + (-2 * bk + 3 * Sk) * ik + (bk - Sk) * Dk
+     }
+ 
+     function Yk(kk, ek, ik, Dk, fk) {
+       const Sk = fk * fk;
+       return (6 * Sk - 6 * fk) * kk + (3 * Sk - 4 * fk + 1) * ek + (-6 * Sk + 6 * fk) * ik + (3 * Sk - 2 * fk) * Dk
+ ... (91 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L208` → after: `L561-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L561-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L561-L586) · [Before (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L208)

```diff
-       async untilDrawn(QQ) {
+       nodeAngles(kk, ek, ik, Dk) {
+         const fk = this.rawNodeAngles(kk, ek, ik, Dk);
+         return "none" !== fk && Vk(Dk) && !this.borrowHeading(this.prevNodes[kk], ek, ik, Dk) && this.borrowHeading(this.nextNodes[kk], ek, ik, Dk), fk
+       }
+       borrowHeading(kk, ek, ik, Dk) {
+         const fk = this.borrowedAngles;
+         return !(kk < 0 || "none" === this.rawNodeAngles(kk, ek, ik, fk) || Vk(fk)) && (Dk.heading = fk.heading, !0)
+       }
+       rawNodeAngles(kk, ek, ik, Dk) {
+         const Sk = this.nodes[kk].keyframe;
+         if (Sk.lookDirection) return (0, fk.n)(Sk.lookDirection, Dk), "aim";
+         if (void 0 !== Sk.lookAt) {
+           const kk = ik(Sk.lookAt);
+           if (kk) return (0, fk.p)(ek, kk, Dk), "aim"
+         }
+         const bk = this.tangents[kk];
+ ... (10 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L210` → after: `L588-L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L588-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L588-L671) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L210)

```diff
-         await this.ready, await (null === (FQ = this.opened) || void 0 === FQ ? void 0 : FQ.untilDrawn(QQ))
+         const Sk = kk[ik];
+         if (pk(Sk) > 1e-9) return (0, fk.n)(Sk, {
+           heading: 0,
+           pitch: 0
+         });
+         const bk = null !== (Dk = this.restDirectionTo(ik, ik + 1, kk, ek)) && void 0 !== Dk ? Dk : this.restDirectionTo(ik, ik - 1, kk, ek);
+         return bk ? (0, fk.n)(bk, {
+           heading: 0,
+           pitch: 0
+         }) : null
+       }
+       restDirectionTo(kk, ek, ik, Dk) {
+         const fk = this.nodes[kk],
+           Sk = this.nodes[ek];
+         if (!Sk || Lk(fk.position, Sk.position) < lk) return null;
+         const [bk, rk] = ek > kk ? [fk, Sk] : [Sk, fk], Pk = Ck(ik[ek], bk.position, rk.position, rk.timeMs - bk.timeMs, Dk, [0, 0, 0]);
+ ... (68 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L212` → after: `L673-L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L673-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L673-L707) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L212)

```diff
-       resize(QQ, FQ) {
+       sample(kk, ek, ik, Dk) {
+         const fk = this.findSegment(this.pathTime(kk));
+         this.samplePosition(fk, Dk.position), this.aim.sample(fk, ek, Dk);
+         const {
+           beforeIndex: Sk,
+           afterIndex: bk
+         } = fk;
+         Dk.fov = dk(fk, Sk >= 0 ? this.fovAt(Sk, ik) : 0, this.fovAt(fk.index, ik), this.fovAt(fk.toIndex, ik), bk >= 0 ? this.fovAt(bk, ik) : 0, Sk >= 0, bk >= 0)
+       }
+       pathTime(kk) {
+         const ek = this.nodes[0].timeMs;
+         if (this.loopMs <= 0 || kk <= ek) return kk;
+         const ik = kk - ek;
+         return ek + ik - this.loopMs * Math.floor(ik / this.loopMs)
+       }
+       findSegment(kk) {
+ ... (19 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L214-L217` → after: `L709-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L709-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L709-L723) · [Before (L214-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L214-L217)

```diff
-         this.size = {
-           width: QQ,
-           height: FQ
-         }, null === (wQ = this.opened) || void 0 === wQ || wQ.resize(QQ, FQ)
+         return null !== (ik = this.nodes[kk].keyframe.fov) && void 0 !== ik ? ik : ek
+       }
+       neighbour(kk, ek) {
+         const ik = this.nodes.length - 1,
+           Dk = kk + ek;
+         return Dk >= 0 && Dk <= ik ? Dk : this.loopMs <= 0 || ik < 2 ? -1 : Dk < 0 ? ik - 1 : 1
+       }
+       gapMs(kk, ek) {
+         const ik = this.nodes.length - 1;
+         if (1 === ek) {
+           const ek = kk === ik ? 0 : kk;
+           return this.nodes[ek + 1].timeMs - this.nodes[ek].timeMs
+         }
+         const Dk = 0 === kk ? ik : kk;
+         return this.nodes[Dk].timeMs - this.nodes[Dk - 1].timeMs
```

#### 32. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L219` → after: `L725-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L725-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L725-L773) · [Before (L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L219)

```diff
-       close() {
+     }
+     class Ik {
+       constructor(kk) {
+         this.Ux = kk, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = ek => kk.getEntityPosition(ek), this.readAimPoint = ek => kk.getEntityAimPoint(ek)
+       }
+       aimPoint(kk) {
+         return "string" !== typeof kk ? (0, Pk.m)(kk, 3) ? kk : null : this.resolve(kk, this.readAimPoint, this.lastAimPoints)
+       }
+       currentAimPoint(kk) {
+         const ek = "string" === typeof kk ? this.Ux.getEntityAimPoint(kk) : kk;
+         return ek && (0, Pk.m)(ek, 3) ? ek : null
+       }
+       feetPosition(kk) {
+         return this.resolve(kk, this.readFeet, this.lastFeet)
+       }
+       heading(kk) {
+ ... (33 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L221` → after: `L775-L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L775-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L775-L782) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L221)

```diff
-         this.closed = !0, null === (QQ = this.opened) || void 0 === QQ || QQ.close(), this.opened = null
+         const fk = this.settings;
+         (0, Pk.g)(fk.position, ik.position), vk(fk.position, fk.lookDirection, null !== (Dk = fk.lookAt) && void 0 !== Dk ? Dk : this.Ux.localPlayerId, this.targets, this.base), ek.apply(this.base, ik), ik.fov = nk(fk, this.Ux)
+       }
+       continueFrom(kk) {
+         kk instanceof Ek && (0, fk.k)(kk.base, this.base)
+       }
+       reset(kk) {
+         Qk(this.base, kk)
```

#### 34. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L224-L226` → after: `L785-L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L785-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L785-L805) · [Before (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L224-L226)

```diff
-     const uQ = new class {
-       constructor() {
-         this.host = null, this.makeDefault = null
+     class hk {
+       constructor(kk, ek, ik, Dk) {
+         this.settings = kk, this.Ux = ek, this.targets = ik, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Cw = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin =  … [truncated]
+       }
+       update(kk, ek, ik) {
+         var Dk, fk, Sk;
+         const bk = this.settings,
+           rk = null !== (Dk = bk.target) && void 0 !== Dk ? Dk : this.Ux.localPlayerId,
+           mk = this.targets.feetPosition(rk);
+         let Mk = !1;
+         mk && (Mk = this.foundFeet && Lk(this.lastFeet, mk) > 32 + .1 * kk, (0, Pk.g)(mk, this.lastFeet), this.foundFeet = !0, this.placeGoal(mk, rk));
+         const Kk = null !== (fk = bk.smoothMs) && void 0 !== fk ? fk : 0;
+         !this.started || Kk < 1 || Mk ? ((0, Pk.g)(this.goal, this.smoothed), this.Cw.fill(0), this.started = !0) : Uk(this.smoothed, this.Cw, this.goal, Kk, kk), Mk && (this.distance = -1), (0, Pk.g)(this.smoothed, ik.position);
+         const xk = !0 === bk.avoidTerrain ? this.pullIn(rk, kk, ik) : 1;
+         let Hk = this.goal;
+         if ("target" === bk.offsetSpace) Hk = ik.position;
+ ... (5 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L228-L229` → after: `L807-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L807-L808) · [Before (L228-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L228-L229)

```diff
-       setHost(QQ) {
-         this.host = QQ
+       continueFrom(kk) {
+         kk instanceof hk && (0, Dk.t)(kk.settings.target, this.settings.target) && ((0, fk.k)(kk.base, this.base), (0, Pk.g)(kk.goal, this.goal), (0, Pk.g)(kk.lastFeet, this.lastFeet), this.foundFeet = kk.foundFeet, (0, Pk.g)(kk.smoothed, this.smoothed), (0, Pk.g)(kk.Cw, this.Cw) … [truncated]
```

#### 36. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L231-L232` → after: `L810-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L810-L811) · [Before (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L231-L232)

```diff
-       setDefaultHost(QQ) {
-         this.makeDefault = QQ
+       reset(kk) {
+         Qk(this.base, kk), this.Cw.fill(0), this.started = !1, this.distance = -1
```

#### 37. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L234-L237` → after: `L813-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L813-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L813-L840) · [Before (L234-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L234-L237)

```diff
-       current() {
-         if (null === this.host) {
-           if (null === this.makeDefault) throw new Error("no preview host");
-           this.host = this.makeDefault()
+       pullIn(kk, ek, ik) {
+         const Dk = this.targets.aimPoint(kk);
+         if (!Dk) return 1;
+         const fk = ik.position,
+           Sk = Lk(Dk, fk);
+         if (!(Sk > 0)) return 1;
+         const bk = this.toCamera;
+         for (let Pk = 0; Pk < 3; Pk++) bk[Pk] = (fk[Pk] - Dk[Pk]) / Sk;
+         const rk = function(kk, ek, ik) {
+           return kk < 0 || ek < kk ? ek : ek + (kk - ek) * Math.exp(-ik / 150)
+         }(this.distance, function(kk, ek, ik, Dk) {
+           const fk = kk.raycastTerrain(ek, ik, Dk);
+           return null !== fk && Number.isFinite(fk) ? Math.min(Dk, Math.max(0, fk - .2)) : Dk
+         }(this.Ux, Dk, bk, Sk), ek);
+         if (Sk - rk < .001) return this.distance = -1, 1;
+         this.distance = rk;
+ ... (12 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L239` → after: `L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L842) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L239)

```diff
-         return this.host
+         this.goal[0] = kk[0] + Dk, this.goal[1] = kk[1] + ik[1], this.goal[2] = kk[2] + fk
```

#### 39. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L241-L242` → after: `L844-L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L844-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L844-L848) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L241-L242)

```diff
-       openMob(QQ) {
-         return new vQ(this.current().openMob(QQ))
+     }
+     class ak {
+       constructor(kk, ek, ik, Dk) {
+         var fk, Sk;
+         this.settings = kk, this.Ux = ek, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = kk.keyframes.length > 0 ? new qk(kk.keyframes, null === (fk = kk.smooth) || void 0 === fk || fk, null !== (Sk = kk.loop) && void 0  … [truncated]
```

#### 40. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L244-L245` → after: `L850-L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L850-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L850-L853) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L244-L245)

```diff
-       openPet(QQ) {
-         return new vQ(this.current().openPet(QQ))
+       update(kk, ek, ik) {
+         this.elapsedMs += kk;
+         const Dk = nk(this.settings, this.Ux);
+         this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, Dk, this.base) : this.base.fov = Dk, (0, Pk.g)(this.base.position, ik.position), ik.fov = this.base.fov, ek.apply(this.base, ik)
```

#### 41. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L247-L248` → after: `L855-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L855-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L855-L856) · [Before (L247-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L247-L248)

```diff
-       openMobLineup(QQ) {
-         return new vQ(this.current().openMobLineup(QQ))
+       continueFrom(kk) {
+         kk instanceof ak && (0, Dk.t)(kk.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = kk.elapsedMs, (0, Pk.c)(kk.base, this.base))
```

#### 42. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L250-L251` → after: `L858-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L858-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L858-L985) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L250-L251)

```diff
-       openCharacter(QQ, FQ) {
-         return new mQ(this.current().openCharacter(QQ, FQ))
+       reset(kk) {
+         Qk(this.base, kk), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
+       }
+     }
+ 
+     function Wk(kk, ek) {
+       return (0, Dk.w)(kk, ek)
+     }
+     class tk {
+       constructor(kk, ek, ik) {
+         var Dk;
+         this.settings = kk, this.Ux = ek, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
+         const fk = null !== ik && ik.settings.mode === kk.mode,
+           Sk = fk ? ik.pose : ek.getDefaultPose();
+         this.pose = (0, Pk.c)(Sk, (0, Pk.k)()), this.lastGoodPose = (0, Pk.c)(fk ? ik.lastGoodPose : Sk, (0, Pk.k)()), this.look = new wk(kk.playerLook), this.targets = null !== (Dk = null === ik || void 0 === ik ? void 0 : ik.targets) && void 0 !== Dk ? Dk : new Ik(ek);
+         const bk = (0, Pk.c)(Sk, (0, Pk.k)());
+ ... (112 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L255` → after: `L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L989) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L255)

```diff
-   9137: (QQ, FQ, wQ) => {
+   38745: (kk, ek, ik) => {
```

#### 44. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L257-L259` → after: `L991-L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L991-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L991-L997) · [Before (L257-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L257-L259)

```diff
-       b: () => LQ.b,
-       c: () => LQ.d,
-       d: () => LQ.g
+       b: () => fk,
+       c: () => rk,
+       g: () => bk,
+       k: () => Sk,
+       l: () => mk,
+       m: () => Pk,
+       o: () => Mk
```

#### 45. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L261-L264` → after: `L999-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L999-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L999-L1010) · [Before (L261-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L261-L264)

```diff
-     var LQ = wQ(9142);
-     class qQ {
-       constructor(QQ) {
-         this.load = QQ, this.loaded = null, this.loading = null
+     var Dk = ik(38752);
+     const fk = {
+       SF: 0,
+       mF: 0
+     };
+ 
+     function Sk() {
+       return {
+         position: [0, 0, 0],
+         heading: 0,
+         pitch: 0,
+         fov: 0
```

#### 46. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L266-L269` → after: `L1012-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L1012-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L1012-L1072) · [Before (L266-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L266-L269)

```diff
-       run(QQ) {
-         return null !== this.loaded ? QQ(this.loaded) : (this.loading ??= this.load().then((QQ => (this.loaded = QQ, QQ)), (QQ => {
-           throw this.loading = null, QQ
-         })), this.loading.then(QQ))
+     }
+ 
+     function bk(kk, ek) {
+       return ek[0] = kk[0], ek[1] = kk[1], ek[2] = kk[2], ek
+     }
+ 
+     function rk(kk, ek) {
+       return bk(kk.position, ek.position), ek.heading = kk.heading, ek.pitch = kk.pitch, ek.fov = kk.fov, ek
+     }
+ 
+     function Pk(kk, ek) {
+       return Array.isArray(kk) && kk.length === ek && kk.every(Number.isFinite)
+     }
+ 
+     function mk(kk) {
+       return Pk(kk.position, 3) && Number.isFinite(kk.heading) && Number.isFinite(kk.pitch) && Number.isFinite(kk.fov)
+ ... (45 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L272-L274` → after: `L1076-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R1076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L1076-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L1076-L1092) · [Before (L272-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L272-L274)

```diff
-     class oQ {
-       constructor() {
-         this.mobScene = new qQ((() => Promise.all([wQ.e(70), wQ.e(227), wQ.e(226), wQ.e(246), wQ.e(95), wQ.e(247), wQ.e(73), wQ.e(72), wQ.e(244), wQ.e(71), wQ.e(254), wQ.e(248), wQ.e(253), wQ.e(251), wQ.e(243), wQ.e(265), wQ.e(223), wQ.e(238), wQ.e(249), wQ.e(252), wQ.e(75), wQ.e … [truncated]
+ 
+     function Uk(kk) {
+       if (!(0, fk.m)(kk, 3)) return;
+       const ek = Math.max(Math.abs(kk[0]), Math.abs(kk[1]), Math.abs(kk[2])),
+         ik = Math.hypot(kk[0] / ek, kk[1] / ek, kk[2] / ek);
+       return 0 === ek || ek * ik < Dk.m.minDirectionLength ? void 0 : [kk[0] / ek / ik, kk[1] / ek / ik, kk[2] / ek / ik]
+     }
+ 
+     function Hk(kk) {
+       if (void 0 !== kk) return "string" === typeof kk ? Sk.includes(kk) ? kk : void 0 : (0, fk.m)(kk, 4) ? [rk(kk[0], 0, 1, 0), rk(kk[1], Dk.m.minEasingY, Dk.m.maxEasingY, 0), rk(kk[2], 0, 1, 1), rk(kk[3], Dk.m.minEasingY, Dk.m.maxEasingY, 1)] : "linear"
+     }
+ 
+     function wk(kk) {
+       if (kk) return {
+         maxYaw: rk(kk.maxYaw, 0, Dk.m.maxPlayerLook, 0),
+         maxPitch: rk(kk.maxPitch, 0, Dk.m.maxPlayerLook, 0),
+ ... (1 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L276-L277` → after: `L1094-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L1094-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L1094-L1106) · [Before (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L276-L277)

```diff
-       openMob(QQ) {
-         return this.mobScene.run((FQ => FQ.openMobPreview(QQ)))
+     }
+     const lk = new RegExp(Dk.d);
+ 
+     function pk(kk) {
+       var ek;
+       if ("object" !== typeof kk || null === kk) return;
+       const ik = Dk.m.maxTransitionMs,
+         fk = Dk.m.minTransitionFadeMs;
+       return {
+         colour: "string" === typeof kk.colour && lk.test(kk.colour) ? kk.colour : Dk.g,
+         outMs: rk(kk.outMs, fk, ik, fk),
+         holdMs: rk(null !== (ek = kk.holdMs) && void 0 !== ek ? ek : 0, 0, ik, 0),
+         inMs: rk(kk.inMs, fk, ik, fk)
```

#### 49. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L279-L280` → after: `L1108-L1128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L1108-L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L1108-L1128) · [Before (L279-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L279-L280)

```diff
-       openPet(QQ) {
-         return this.mobScene.run((FQ => FQ.openPetPreview(QQ)))
+     }
+ 
+     function yk(kk) {
+       return !0 === kk || void 0
+     }
+ 
+     function Yk(kk) {
+       if ("object" !== typeof kk || null === kk) return !1;
+       const ek = kk.lookAt;
+       return Number.isFinite(kk.timeMs) && (0, fk.m)(kk.position, 3) && (void 0 === ek || "string" === typeof ek || (0, fk.m)(ek, 3))
+     }
+ 
+     function Lk(kk) {
+       return {
+         ...kk,
+         timeMs: rk(kk.timeMs, 0, Dk.m.maxPathMs, 0),
+ ... (5 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L282-L283` → after: `L1130-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L1130-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L1130-L1138) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L282-L283)

```diff
-       openMobLineup(QQ) {
-         return this.mobScene.run((FQ => FQ.openMobLineupPreview(QQ)))
+     }
+ 
+     function Ck(kk) {
+       const ek = [];
+       if (!Array.isArray(kk)) return ek;
+       for (const ik of kk.slice(0, Dk.m.maxKeyframes)) {
+         if (!Yk(ik)) continue;
+         const kk = Lk(ik);
+         (0 === ek.length || kk.timeMs > ek[ek.length - 1].timeMs) && ek.push(kk)
```

#### 51. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L285-L286` → after: `L1140-L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L1140-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L1140-L1184) · [Before (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L285-L286)

```diff
-       openCharacter(QQ, FQ) {
-         return this.characterScene.run((wQ => wQ.openCharacterPreview(QQ, FQ)))
+       return ek
+     }
+ 
+     function Ak(kk) {
+       if ("object" !== typeof kk || null === kk) return {
+         mode: "default"
+       };
+       const ek = {
+           blendInMs: Pk(kk.blendInMs, 0, Dk.m.maxBlendInMs),
+           blendEasing: Hk(kk.blendEasing),
+           transition: pk(kk.transition),
+           letterbox: yk(kk.letterbox),
+           hideHud: yk(kk.hideHud)
+         },
+         ik = {
+           mode: "default",
+ ... (29 more added lines; see GitHub link above)
```

#### 52. `bundles/bloxd.io/chunks/js/193.js` (Changed code · before: `L289` → after: `L1187-L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2R1187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-40568fa61fcffce0b645945701bcc18a709070513404ff9d8560475374f1cce2) · [After (L1187-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/193.js#L1187-L1737) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/193.js#L289)

```diff
-     LQ.g.setDefaultHost((() => new oQ))
+   },
+   38245: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => rk
+     });
+     var Dk = ik(1207);
+ 
+     function fk(kk) {
+       const ek = /(\d*\.?\d+)px/.exec(kk);
+       return ek ? Number(ek[1]) : null
+     }
+ 
+     function Sk(kk) {
+       return kk.split(/[\s,]+/).pop()
+     }
+     let bk = !1;
+ ... (535 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/194.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/194.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27)

#### 1. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L4-L7` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/194.js#L4-L7) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/194.js#L4-L7)

```diff
-   9170: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => qQ,
-       f: () => oQ
+   33620: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       getLatestPublishedUpdateLog: () => rk,
+       updateLogsData: () => bk
```

#### 2. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L9-L429` → after: `L9-L2773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L9-L2773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/194.js#L9-L2773) · [Before (L9-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/194.js#L9-L429)

```diff
-     var LQ = wQ(3139);
- 
-     function qQ() {
-       if ("undefined" === typeof BroadcastChannel) return null;
-       const QQ = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
-       try {
-         const FQ = new BroadcastChannel(LQ.f);
-         FQ.postMessage({
-           stored: QQ
-         }), FQ.close()
-       } catch {
-         return null
-       }
-       return QQ
-     }
- 
- ... (405 more removed lines; see GitHub link above)
+     var Dk = ik(789),
+       fk = ik(302);
+     const Sk = "\xa0\xa0\xa0\xa0",
+       bk = [{
+         author: ["Oliver", "Harry"],
+         date: new Date("2026-11-17T16:00:00Z"),
+         title: "\u2728Characters are back in the Store!\u2728",
+         description: "Every character from the Y2K, Spring and Astro packs is back, and you can now buy each one on its own!\n\n\ud83d\udcbf Y2K: Alice, Roy, Ela and Tilly\n\ud83c\udf37 Spring: Harry, Gnome, Poppy and Daisy\n\ud83d\ude80 Astro: Zara, Nova, Rex and Vex\n\nAlready  … [truncated]
+         image: "CosmeticPacks.jpg",
+         onClickImage: {
+           type: "openMenu",
+           menu: fk.r.COSMETIC_SHOP
+         },
+         callToAction: {
+           color: "rainbow",
+           label: "Go to Store!",
+ ... (2749 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/194.js` (Changed code · before: `L432-L437` → after: `L2776-L2779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27R2776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-1b646589dfafb69df0901537330f00ab7735d6900f2004d6835b9182bd6afc27) · [After (L2776-L2779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/194.js#L2776-L2779) · [Before (L432-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/194.js#L432-L437)

```diff
-       const FQ = (0, DQ.q)();
-       return null === FQ ? () => {} : (FQ.onmessage = FQ => {
-         QQ.readPlayerPack((0, kQ.f)(FQ.data))
-       }, () => {
-         FQ.close()
-       })
+       const ek = Date.now();
+       let ik = null;
+       for (const Dk of bk) Dk.date.getTime() > ek || kk && !kk(Dk) || (!ik || Dk.date.getTime() > ik.date.getTime()) && (ik = Dk);
+       return ik
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/195.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/195.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985)

#### 1. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L4-L73` → after: `L4-L5419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L4-L5419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/195.js#L4-L5419) · [Before (L4-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/195.js#L4-L73)

```diff
-   9173: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       packDisplayName: () => xQ,
-       packModelMessage: () => AQ,
-       packModelSummary: () => eQ,
-       refusedPackModels: () => tQ
-     });
-     var LQ = wQ(9181),
-       qQ = wQ(9184);
-     const oQ = "DRACO",
-       DQ = 0,
-       kQ = 1,
-       vQ = 0,
-       mQ = 1,
-       uQ = 32768;
- 
- ... (54 more removed lines; see GitHub link above)
+   33622: function(module, __unused_webpack_exports, __webpack_require__) {
+     var n;
+     this || self, n = function() {
+       return function() {
+         var __webpack_modules__ = {
+             4264: function(kk, ek, ik) {
+               kk.exports = ik(7588)
+             },
+             5036: function(kk, ek, ik) {
+               ik(1719), ik(5677), ik(6394), ik(5334), ik(6969), ik(2021), ik(8328), ik(2129);
+               var Dk = ik(1287);
+               kk.exports = Dk.Promise
+             },
+             2582: function(kk, ek, ik) {
+               ik(1646), ik(6394), ik(2004), ik(462), ik(8407), ik(2429), ik(1172), ik(8288), ik(1274), ik(8201), ik(6626), ik(3211), ik(9952), ik(15), ik(9831), ik(7521), ik(2972), ik(6956), ik(5222), ik(2257);
+               var Dk = ik(1287);
+ ... (5400 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L75-L79` → after: `L5421-L8092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R5421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L5421-L8092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/195.js#L5421-L8092) · [Before (L75-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/195.js#L75-L79)

```diff
-         if (YQ !== kQ) return null;
-         if (xQ === vQ) {
-           return {
-             faces: tQ(),
-             vertices: tQ()
+         var __nested_webpack_exports__ = {};
+         return function() {
+           __nested_webpack_require_223763__.d(__nested_webpack_exports__, {
+             default: function() {
+               return gS
+             }
+           }), __nested_webpack_require_223763__(5441), __nested_webpack_require_223763__(8765);
+           var kk = __nested_webpack_require_223763__(4296),
+             ek = __nested_webpack_require_223763__(5103),
+             ik = {
+               one: function(kk, ek) {
+                 void 0 === ek && (ek = document);
+                 try {
+                   return ek.querySelector(kk) || void 0
+                 } catch (kk) {
+                   return
+ ... (2656 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/195.js` (Changed code · before: `L81-L157` → after: `L8094-L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985R8094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ff2e53c57b8e3bfd5a65ae7e717792a927abc2bcf720cb3f2b9d00b9ea2a4985) · [After (L8094-L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/195.js#L8094-L11892) · [Before (L81-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/195.js#L81-L157)

```diff
-         }
-         if (xQ !== mQ) return null;
-         LQ(), bQ < 2 && HQ();
-         const eQ = HQ();
-         return {
-           faces: HQ(),
-           vertices: eQ
-         }
-       } catch {
-         return null
-       }
-     }
- 
-     function bQ(QQ, FQ, wQ) {
-       var LQ, qQ;
-       if (null === (LQ = null === (qQ = QQ.extensionsUsed) || void 0 === qQ ? void 0 : qQ.includes("KHR_draco_mesh_compression")) || void 0 === LQ || !LQ) return null;
- ... (61 more removed lines; see GitHub link above)
+ 
+           function UD(kk) {
+             var ek, ik, Dk = kk[24].item,
+               fk = (0, bk.nuO)(Dk, kk, kk[31], PD),
+               Sk = fk || function() {
+                 var kk;
+                 return {
+                   c: function() {
+                     kk = (0, bk.fLW)("Missing template")
+                   },
+                   m: function(ek, ik) {
+                     (0, bk.$Tr)(ek, kk, ik)
+                   },
+                   d: function(ek) {
+                     ek && (0, bk.ogt)(kk)
+                   }
+ ... (3783 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/196.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/196.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38)

#### 1. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L4-L8` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/196.js#L4-L8) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/196.js#L4-L8)

```diff
-   9181: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => UQ,
-       e: () => IQ,
-       h: () => rQ
+   33664: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       ALL_DEV_TOOLS: () => bk,
+       coreDevTools: () => mk,
+       devTools: () => Pk
```

#### 2. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L10-L21` → after: `L10-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L10-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/196.js#L10-L37) · [Before (L10-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/196.js#L10-L21)

```diff
-     var LQ = wQ(9184);
-     const qQ = {
-         fileBytes: 4194304,
-         vertices: 65535,
-         indices: 196608,
-         accessorElements: 196608,
-         primitives: 64,
-         nodes: 128,
-         meshes: 64,
-         materials: 8,
-         images: 8,
-         imageSide: 1024
+     var Dk = ik(610),
+       fk = ik(1284),
+       Sk = ik(33673);
+     const bk = new Set(["sceneDownload", "ambientLight", "weaponRaycasts", "chunkBorders"]);
+     async function rk() {
+       const {
+         noaDevTools: kk
+       } = await ik.e(234).then((() => ik(40655)));
+       return kk
+     }
+     const Pk = new class {
+         constructor() {
+           this.loadHost = rk, this.tools = bk
+         }
+         setHost(kk) {
+           this.tools = null === kk ? bk : kk.tools, this.loadHost = null === kk ? rk : async () => kk
+ ... (12 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L24-L48` → after: `L40-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/196.js#L40-L42) · [Before (L24-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/196.js#L24-L48)

```diff
-         items: 1024,
-         perFile: 1024,
-         surfaces: 256,
-         few: 64,
-         bounds: 16,
-         attributeMembers: 32
-       },
-       DQ = 1048576,
-       kQ = "is not a binary glTF 2.0 file",
-       vQ = "loads data from outside the file",
-       mQ = new Set(["KHR_draco_mesh_compression", "KHR_materials_unlit", "KHR_texture_transform", "KHR_materials_specular", "KHR_materials_ior", "KHR_materials_anisotropy"]),
-       uQ = {
-         POSITION: "VEC3",
-         NORMAL: "VEC3",
-         TEXCOORD_0: "VEC2",
-         COLOR_0: "VEC4"
- ... (9 more removed lines; see GitHub link above)
+         tools: Sk.c,
+         downloadScene: async () => {
+           throw new Error("This client can't download the scene")
```

#### 4. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L50-L101` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/196.js#L44-L46) · [Before (L50-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/196.js#L50-L101)

```diff
-         TEXCOORD_1: HQ,
-         TEXCOORD_2: HQ,
-         TEXCOORD_3: HQ,
-         TEXCOORD_4: HQ,
-         TEXCOORD_5: HQ
-       },
-       YQ = new Set(LQ.f.map((QQ => {
-         let [FQ] = QQ;
-         return FQ
-       }))),
-       xQ = {
-         1: "line",
-         2: "line loop",
-         3: "line strip",
-         5: "triangle strip",
-         6: "triangle fan"
- ... (36 more removed lines; see GitHub link above)
+         setAmbientLightIntensity: async () => {
+           throw new Error("This client can't set the ambient light")
+         }
```

#### 5. `bundles/bloxd.io/chunks/js/196.js` (Changed code · before: `L103-L555` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-b843f49f0e535142ef42f73638f5afe28b19d675515151140e417a7fe2a36a38) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/196.js#L48-L50) · [Before (L103-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/196.js#L103-L555)

```diff
-       return 255 === FQ(0) && 216 === FQ(1) ? "JPEG" : 82 === FQ(0) && 73 === FQ(1) && 87 === FQ(8) && 69 === FQ(9) ? "WebP" : 171 === FQ(0) && 75 === FQ(1) && 84 === FQ(2) && 88 === FQ(3) ? "KTX2" : "non-PNG"
-     }
- 
-     function iQ(QQ) {
-       return QQ.length >= 24 && [137, 80, 78, 71, 13, 10, 26, 10].every(((FQ, wQ) => QQ[wQ] === FQ)) && 73 === QQ[12] && 72 === QQ[13] && 68 === QQ[14] && 82 === QQ[15]
-     }
- 
-     function WQ(QQ) {
-       return /^[aeiou]/i.test(QQ) ? `an ${QQ}` : `a ${QQ}`
-     }
- 
-     function RQ(QQ) {
-       const FQ = QQ.byteStride;
-       return void 0 === FQ || Number.isInteger(FQ) && FQ >= 4 && FQ <= 252 && FQ % 4 === 0
-     }
- 
- ... (437 more removed lines; see GitHub link above)
+     Dk.s && Pk.setHost(mk), (0, fk.s)((() => {
+       Pk.setHost(mk)
+     }))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/197.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/197.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b)

#### 1. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/197.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/197.js#L4)

```diff
-   9289: (QQ, FQ, wQ) => {
+   33707: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L7` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/197.js#L8-L14) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/197.js#L7)

```diff
-       i: () => oQ
+       g: () => ye,
+       k: () => Ce,
+       m: () => be,
+       o: () => Pe,
+       q: () => Me,
+       r: () => Le,
+       t: () => me
```

#### 3. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L9-L1367` → after: `L16-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L16-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/197.js#L16-L522) · [Before (L9-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/197.js#L9-L1367)

```diff
-     var LQ = wQ(9252);
-     const qQ = "Air",
-       oQ = Object.freeze(new LQ.g(qQ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
-   },
-   27096: QQ => {
-     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
-   },
-   33141: QQ => {
-     QQ.exports = "data:model/gltf-binary;base64,Z2xURgIAAADsSwAAtDQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjM2fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlw … [truncated]
-   },
-   33149: QQ => {
-     QQ.exports = "data:model/gltf-binary;base64,Z2xURgIAAABkWAAACBEAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiZXh0cmFzIjp7ImJsb3hkQnVpbGRIYXNoIjoiZDk5YzM4OTQifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyNSwi … [truncated]
-   },
-   27104: QQ => {
-     QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
-   },
- ... (1343 more removed lines; see GitHub link above)
+     var Dk = ik(22),
+       fk = ik(99),
+       Sk = ik(1614),
+       bk = ik(4376),
+       rk = ik(2727),
+       Pk = ik(2730),
+       mk = ik(38);
+     const {
+       windows: Mk,
+       target: Kk,
+       stepDown: xk,
+       stepUp: nk,
+       noGain: Uk
+     } = Pk.b, Hk = 1e3 / 60 * 1.08, wk = 1e3 / 55, lk = 1e3 / 45, pk = 1e3 / 30 * .92, yk = 1e3 / 30 * 1.08;
+     class Yk {
+       constructor() {
+ ... (491 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/198.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/198.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31)

#### 1. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L4-L5` → after: `L4-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L4-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L4-L37) · [Before (L4-L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L4-L5)

```diff
-   37286: (QQ, FQ, wQ) => {
-     var LQ = wQ(37294);
+   36403: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Sk
+     });
+     var Dk = ik(60),
+       fk = ik(26);
+ 
+     function Sk(kk, ek) {
+       const [ik, Sk] = (0, Dk.useState)(ek);
+       return (0, Dk.useEffect)((() => {
+         Sk(ek());
+         const ik = fk.j.subscribe(kk, (kk => {
+           Sk(kk)
+         }));
+         return () => {
+           fk.j.unsubscribe(ik)
+ ... (18 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L8-L11` → after: `L40-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L40-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L40-L66) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L8-L11)

```diff
-       for (var FQ, wQ, qQ = 0, oQ = QQ.length, DQ = 0; DQ < QQ.length;) {
-         for (FQ = QQ[DQ], wQ = 0; DQ < oQ && QQ[DQ] === FQ;) ++DQ, ++wQ;
-         qQ += LQ.log2(wQ) / 7 | 0, qQ += LQ.log2(FQ >>> 0) / 7 | 0, qQ += 2
-       }
+       let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bk();
+       return (0, Dk.c)(new Blob([kk], {
+         type: Sk
+       }), ek), ek
+     }
+   },
+   36535: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => bk,
+       f: () => Sk
+     });
+     var Dk = ik(36539);
+     let fk = {
+       open: async () => {
+         throw new Error(Dk.e.viewerLoadFailed.text)
+       },
+ ... (11 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L14-L23` → after: `L69-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L69-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L69-L193) · [Before (L14-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L14-L23)

```diff
-     FQ.size = qQ, FQ.encode = function(QQ, FQ) {
-       FQ || (FQ = new Uint8Array(qQ(QQ)));
-       for (var wQ, LQ, oQ = 0, DQ = FQ.length, kQ = 0; kQ < QQ.length;) {
-         for (wQ = QQ[kQ], LQ = 0; kQ < QQ.length && QQ[kQ] === wQ;) ++kQ, ++LQ;
-         for (; oQ < DQ && LQ >= 128;) FQ[oQ++] = 128 + (127 & LQ), LQ >>>= 7;
-         if (oQ >= DQ) throw new Error("RLE buffer overflow");
-         for (FQ[oQ++] = LQ, wQ >>>= 0; oQ < DQ && wQ >= 128;) FQ[oQ++] = 128 + (127 & wQ), wQ >>>= 7;
-         if (oQ >= DQ) throw new Error("RLE buffer overflow");
-         FQ[oQ++] = wQ
-       }
+   },
+   36539: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => bk,
+       i: () => mk,
+       l: () => Pk
+     });
+     var Dk = ik(26);
+     const fk = 1500,
+       Sk = 1e3,
+       bk = {
+         recordingStarted: {
+           text: "Started recording",
+           type: "Success"
+         },
+         recordingStopped: {
+ ... (109 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L25-L33` → after: `L195-L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L195-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L195-L248) · [Before (L25-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L25-L33)

```diff
-     }, FQ.decode = function(QQ, FQ) {
-       for (var wQ, LQ, qQ, oQ, DQ = FQ.length, kQ = QQ.length, vQ = 0, mQ = 0; mQ < kQ;) {
-         for (wQ = 0, LQ = 0; mQ < kQ && QQ[mQ] >= 128;) wQ += (127 & QQ[mQ++]) << LQ, LQ += 7;
-         if (wQ += QQ[mQ++] << LQ, mQ >= kQ) throw new Error("RLE buffer underrun");
-         if (vQ + wQ > DQ) throw new Error("Chunk buffer overflow");
-         for (qQ = 0, LQ = 0; mQ < kQ && QQ[mQ] >= 128;) qQ += (127 & QQ[mQ++]) << LQ, LQ += 7;
-         if (mQ >= kQ) throw new Error("RLE buffer underrun");
-         for (qQ += QQ[mQ++] << LQ, oQ = 0; oQ < wQ; ++oQ) FQ[vQ++] = qQ
-       }
+     }
+ 
+     function Sk(kk) {
+       return Dk !== kk && (Dk = kk, !0)
+     }
+   },
+   33723: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => Sk,
+       h: () => fk
+     });
+     var Dk = ik(22);
+ 
+     function fk(kk, ek) {
+       return kk && !ek
+     }
+ ... (38 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L37` → after: `L323-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L323-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L323-L329) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L37)

```diff
-   37294: (QQ, FQ) => {
+   36391: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Sk,
+       d: () => fk
+     });
+     let Dk = () => null;
+ 
```

#### 6. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L39-L74` → after: `L331-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L331-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L331-L439) · [Before (L39-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L39-L74)

```diff
-       var FQ = 32;
-       return (QQ &= -QQ) && FQ--, 65535 & QQ && (FQ -= 16), 16711935 & QQ && (FQ -= 8), 252645135 & QQ && (FQ -= 4), 858993459 & QQ && (FQ -= 2), 1431655765 & QQ && (FQ -= 1), FQ
-     }
-     FQ.INT_BITS = 32, FQ.INT_MAX = 2147483647, FQ.INT_MIN = -1 << 31, FQ.sign = function(QQ) {
-       return (QQ > 0) - (QQ < 0)
-     }, FQ.abs = function(QQ) {
-       var FQ = QQ >> 31;
-       return (QQ ^ FQ) - FQ
-     }, FQ.min = function(QQ, FQ) {
-       return FQ ^ (QQ ^ FQ) & -(QQ < FQ)
-     }, FQ.max = function(QQ, FQ) {
-       return QQ ^ (QQ ^ FQ) & -(QQ < FQ)
-     }, FQ.isPow2 = function(QQ) {
-       return !(QQ & QQ - 1) && !!QQ
-     }, FQ.log2 = function(QQ) {
-       var FQ, wQ;
- ... (20 more removed lines; see GitHub link above)
+       Dk = kk
+     }
+ 
+     function Sk(kk, ek) {
+       return Dk(kk, ek)
+     }
+   },
+   36104: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => nk,
+       f: () => fk,
+       g: () => bk,
+       i: () => Pk
+     });
+     var Dk = ik(36113);
+     const fk = "data-camera-fade",
+ ... (93 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L91-L95` → after: `L443-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L443-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L443-L451) · [Before (L91-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L91-L95)

```diff
-   39199: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       emptyColumnHeight: () => pQ,
-       loadHeatmapSchematic: () => cQ,
-       readSchematicBlocks: () => CQ
+   36583: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => bk,
+       e: () => fk,
+       g: () => Sk,
+       h: () => Dk,
+       i: () => Mk,
+       j: () => Kk,
+       n: () => Pk
```

#### 8. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L97-L120` → after: `L453-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L453-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L453-L487) · [Before (L97-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L97-L120)

```diff
-     var LQ = wQ(3627),
-       qQ = wQ.n(LQ),
-       oQ = wQ(3605),
-       DQ = wQ(37286),
-       kQ = wQ(201),
-       vQ = wQ(9195);
-     const mQ = [{
-         name: "x",
-         type: "int"
-       }, {
-         name: "y",
-         type: "int"
-       }, {
-         name: "z",
-         type: "int"
-       }],
- ... (8 more removed lines; see GitHub link above)
+     const Dk = [0, 0, 1, 1],
+       fk = [.42, 0, 1, 1],
+       Sk = [0, 0, .58, 1],
+       bk = [.42, 0, .58, 1];
+ 
+     function rk(kk) {
+       return Math.min(1, Math.max(0, kk))
+     }
+ 
+     function Pk(kk, ek, ik) {
+       const Dk = 1 - ik,
+         fk = ik * ik;
+       return 3 * (Dk * Dk) * ik * kk + 3 * Dk * fk * ek + fk * ik
+     }
+ 
+     function mk(kk, ek, ik) {
+ ... (19 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L122-L126` → after: `L489-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L489-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L489-L500) · [Before (L122-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L122-L126)

```diff
-       }, {
-         name: "dimensions",
-         type: {
-           type: "record",
-           fields: mQ
+         const ek = mk(Dk, Sk, Mk);
+         if (Math.abs(ek) < 1e-6) break;
+         Mk = rk(Mk - kk / ek)
+       }
+       if (!Kk) {
+         let kk = 0,
+           ek = 1;
+         Mk = ik;
+         for (let fk = 0; fk < 12; fk++) {
+           const fk = Pk(Dk, Sk, Mk);
+           if (Math.abs(fk - ik) < 1e-6) break;
+           ik > fk ? kk = Mk : ek = Mk, Mk = (kk + ek) / 2
```

#### 10. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L128-L138` → after: `L502-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L502-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L502-L547) · [Before (L128-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L128-L138)

```diff
-       }, {
-         name: "chunkData",
-         type: {
-           type: "array",
-           items: {
-             type: "record",
-             fields: [...mQ, {
-               name: "rle",
-               type: "bytes"
-             }]
-           }
+       }
+       return Pk(fk, bk, Mk)
+     }
+ 
+     function Kk(kk) {
+       switch (kk) {
+         case "linear":
+           return Dk;
+         case "easeIn":
+           return fk;
+         case "easeOut":
+           return Sk;
+         case "easeInOut":
+           return bk;
+         default:
+           return kk
+ ... (30 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L140-L163` → after: `L549-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L549-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L549-L563) · [Before (L140-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L140-L163)

```diff
-       }],
-       HQ = qQ().Type.forSchema({
-         type: "record",
-         fields: uQ
-       }),
-       bQ = qQ().Type.forSchema({
-         type: "record",
-         fields: [...uQ, {
-           name: "blockData",
-           type: {
-             type: "array",
-             items: {
-               type: "record",
-               fields: [...mQ, {
-                 name: "data",
-                 type: "bytes"
- ... (8 more removed lines; see GitHub link above)
+       }
+       isHeld() {
+         return this.holding && fk() !== this.heldOrientation && (this.holding = !1), this.holding
+       }
+       hold() {
+         this.heldOrientation = fk(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
+           this.holding && (0, Dk.cH)(new Error("Game view size held for 60 s"))
+         }), 6e4)
+       }
+       release() {
+         clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
+           if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
+           else {
+             this.holding = !1;
+             for (const kk of this.resizers) kk()
```

#### 12. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L165-L191` → after: `L565-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L565-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L565-L572) · [Before (L165-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L165-L191)

```diff
-         }]
-       }),
-       YQ = 2,
-       xQ = 6,
-       AQ = {
-         Water: [63, 118, 228],
-         Lava: [232, 110, 30]
-       },
-       tQ = [150, 150, 150],
-       eQ = 16,
-       MQ = 4096,
-       GQ = kQ.e.tx,
-       pQ = -2147483648;
-     async function cQ(QQ) {
-       const FQ = await CQ(new Uint8Array(await QQ.arrayBuffer()), await async function() {
-         const {
- ... (11 more removed lines; see GitHub link above)
+         }), 1e3)
+       }
+       heldSizer(kk) {
+         let ek = !1;
+         return () => {
+           if (ek && this.isHeld()) return null;
+           const ik = kk();
+           return ek ||= null !== ik, ik
```

#### 13. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L198-L222` → after: `L575-L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L575-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L575-L578) · [Before (L198-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L198-L222)

```diff
-     }
-     async function CQ(QQ, FQ) {
-       var wQ;
-       if (QQ.byteLength < 4) throw new Error("The file is too short to be a schematic.");
-       const LQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength).getUint32(0, !0);
-       if (LQ > xQ) throw new Error("The file isn't a schematic this version of Bloxd can read.");
-       const qQ = (LQ >= YQ ? bQ : HQ).decode(oQ.Dx.from(QQ.subarray(4)), 0).value;
-       if (!qQ) throw new Error("The file isn't a schematic.");
-       if (0 === qQ.chunkData.length) throw new Error("The schematic has no blocks in it.");
-       const kQ = null !== (wQ = qQ.pasteOffset) && void 0 !== wQ ? wQ : {
-           x: 0,
-           y: 0,
-           z: 0
-         },
-         vQ = [kQ.x, kQ.y, kQ.z].map((QQ => Math.floor(QQ / GQ))),
-         mQ = qQ.chunkData.map((QQ => ({
- ... (9 more removed lines; see GitHub link above)
+       onRelease(kk) {
+         return this.resizers.add(kk), () => {
+           this.resizers.delete(kk)
+         }
```

#### 14. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L224-L261` → after: `L580-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L580-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L580-L640) · [Before (L224-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L224-L261)

```diff
-       const AQ = (QQ, FQ, wQ) => QQ * GQ * GQ + FQ * GQ + wQ,
-         tQ = (QQ, FQ, wQ) => {
-           var LQ, qQ;
-           const oQ = Math.floor(QQ / GQ),
-             DQ = Math.floor(FQ / GQ),
-             kQ = Math.floor(wQ / GQ);
-           return null !== (LQ = null === (qQ = uQ.get(`${oQ},${DQ},${kQ}`)) || void 0 === qQ ? void 0 : qQ[AQ(QQ - oQ * GQ, FQ - DQ * GQ, wQ - kQ * GQ)]) && void 0 !== LQ ? LQ : 0
-         },
-         MQ = new Map,
-         cQ = [],
-         CQ = [];
-       for (const [oQ, DQ] of mQ.entries()) {
-         const QQ = uQ.get(`${DQ.x},${DQ.y},${DQ.z}`),
-           wQ = [DQ.x * GQ, DQ.y * GQ, DQ.z * GQ],
-           LQ = (FQ, LQ, qQ) => FQ < 0 || LQ < 0 || qQ < 0 || FQ >= GQ || LQ >= GQ || qQ >= GQ ? tQ(wQ[0] + FQ, wQ[1] + LQ, wQ[2] + qQ) : QQ[AQ(FQ, LQ, qQ)],
-           qQ = `${DQ.x},${DQ.z}`;
- ... (22 more removed lines; see GitHub link above)
+     }
+   },
+   36030: (kk, ek, ik) => {
+     const Dk = JSON.parse('{"classicGame":{"loseItemsIfLogOutTip":"You will lose your items if you log out when less than 80hp and hit by a player within the last 8 seconds.","protectLandWithProtectorsTip":"Protect your land and chests with protectors - craft them from diamonds", … [truncated]
+     (0, ik(1172).e)(Dk)
+   },
+   36411: (kk, ek, ik) => {
+     function Dk(kk, ek) {
+       return kk.size === ek.size && [...kk].every((kk => ek.has(kk)))
+     }
+     ik.d(ek, {
+       b: () => Dk
+     })
+   },
+   36329: (kk, ek, ik) => {
+     ik.d(ek, {
+ ... (45 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L263` → after: `L642-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L642-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L642-L649) · [Before (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L263)

```diff
-       if (0 === cQ.length) throw new Error("The schematic has no blocks in it.");
+     }
+ 
+     function mk(kk, ek, ik) {
+       const fk = Pk(kk, ek),
+         {
+           numLines: bk,
+           charsPerLine: rk
+         } = Dk[ik];
```

#### 16. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L265-L271` → after: `L651-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L651-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L651-L652) · [Before (L265-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L265-L271)

```diff
-         name: qQ.name,
-         surface: {
-           positions: Int32Array.from(cQ),
-           colours: Uint8Array.from(CQ),
-           count: cQ.length / 3
-         },
-         columnTops: [...MQ.values()]
+         numLines: Math.max(1, Math.floor(bk / Sk * fk.height)),
+         charsPerLine: Math.max(1, Math.floor(rk * fk.width))
```

#### 17. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L275-L278` → after: `L656-L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L656-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L656-L661) · [Before (L275-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L275-L278)

```diff
-     function SQ(QQ) {
-       if (0 === QQ) return !0;
-       const FQ = vQ.h[QQ];
-       return void 0 === FQ || FQ.wY || FQ.transTex || !1 === FQ.solid
+     function Mk(kk, ek, ik, Dk) {
+       const {
+         numLines: fk,
+         charsPerLine: Sk
+       } = mk(ik, Dk, ek);
+       return yk(kk, fk, Sk, !1)
```

#### 18. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L282-L325` → after: `L666-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L666-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L666-L691) · [Before (L282-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L282-L325)

```diff
-       let FQ = 1 / 0,
-         wQ = -1 / 0,
-         LQ = 1 / 0,
-         qQ = -1 / 0;
-       for (const {
-           chunkX: xQ,
-           chunkZ: AQ,
-           heights: tQ
-         }
-         of QQ) tQ.forEach(((QQ, oQ) => {
-         if (QQ === pQ) return;
-         const DQ = xQ * GQ + oQ % GQ,
-           kQ = AQ * GQ + Math.floor(oQ / GQ);
-         FQ = Math.min(FQ, DQ), wQ = Math.max(wQ, DQ), LQ = Math.min(LQ, kQ), qQ = Math.max(qQ, kQ)
-       }));
-       const oQ = wQ - FQ + 1,
- ... (28 more removed lines; see GitHub link above)
+       return kk.slice(0, Kk)
+     }
+     const nk = 512e3,
+       Uk = 64,
+       Hk = nk;
+ 
+     function wk(kk, ek) {
+       const ik = Math.max(0, Hk - ek),
+         Dk = Math.min(nk, ik);
+       return kk.slice(0, Dk)
+     }
+     const lk = {
+       book: {
+         numLines: 13,
+         charsPerLine: 19,
+         uiFontSize: 1.95
+ ... (10 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L329-L332` → after: `L703-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L703-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L703-L711) · [Before (L329-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L329-L332)

```diff
-     function WQ() {
-       return new Promise((QQ => {
-         setTimeout(QQ, 0)
-       }))
+     function yk(kk, ek, ik, Dk, fk) {
+       (fk || Dk) && (kk = kk.slice(0, null !== fk && void 0 !== fk ? fk : ek * ik));
+       const Sk = kk.split("\n");
+       if (Sk.length > ek && Sk.splice(ek, Sk.length - ek), !Dk)
+         for (let bk = 0; bk < Sk.length; bk++) {
+           const kk = Sk[bk];
+           kk.length > ik && (Sk[bk] = kk.substring(0, ik), Sk.length < ek && Sk.splice(bk + 1, 0, kk.substring(ik)))
+         }
+       return Sk.join("\n")
```

#### 20. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L335` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L714) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L335)

```diff
-   9289: (QQ, FQ, wQ) => {
+   33774: (kk, ek, ik) => {
```

#### 21. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L337-L338` → after: `L716-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L716-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L716-L721) · [Before (L337-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L337-L338)

```diff
-       e: () => qQ,
-       i: () => oQ
+       b: () => Mk,
+       f: () => xk,
+       i: () => Kk,
+       j: () => bk,
+       k: () => mk,
+       l: () => Pk
```

#### 22. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L340-L342` → after: `L723-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L723-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/198.js#L723-L914) · [Before (L340-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/198.js#L340-L342)

```diff
-     var LQ = wQ(9252);
-     const qQ = "Air",
-       oQ = Object.freeze(new LQ.g(qQ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+     var Dk = ik(314);
+     const fk = ["Wood Enchanting Table", "Stone Enchanting Table", "Iron Enchanting Table", "Gold Enchanting Table", "Diamond Enchanting Table"],
+       Sk = {
+         Damage: {
+           translationKey: "enchantments:damageDescription"
+         },
+         "Attack Speed": {
+           translationKey: "enchantments:attackSpeedDescription"
+         },
+         "Critical Damage": {
+           translationKey: "enchantments:criticalDamageDescription"
+         },
+         Protection: {
+           translationKey: "enchantments:protectionDescription"
+         },
+         Health: {
+ ... (176 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/199.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/199.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93)

#### 1. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L4` → after: `L4-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L4-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/199.js#L4-L360) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/199.js#L4)

```diff
-   39913: (QQ, FQ, wQ) => {
+   38682: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => rk,
+       e: () => Sk
+     });
+     var Dk = ik(4019);
+     let fk = null;
+ 
+     function Sk(kk) {
+       return null !== fk && kk === fk
+     }
+ 
+     function bk() {
+       this.oB = !1, this.stopPropagation = !1, this.JB = !1, this.disabled = !1
+     }
+     class rk {
+ ... (341 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L6-L13` → after: `L362-L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L362-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/199.js#L362-L698) · [Before (L6-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/199.js#L6-L13)

```diff
-       FORMER_BLOCK_IMAGE_NAMES: () => LQ.b,
-       textureAnimationData: () => qQ.t,
-       textureNameToIndex: () => qQ.v
-     });
-     var LQ = wQ(38251),
-       qQ = wQ(9195)
-   },
-   9289: (QQ, FQ, wQ) => {
+       startPadGameplay: () => Lk
+     });
+     ik(40123);
+     var Dk = ik(40130),
+       fk = ik(3693),
+       Sk = ik(22),
+       bk = ik(38655),
+       rk = ik(3642),
+       Pk = ik(38666),
+       mk = ik(26),
+       Mk = ik(2704),
+       Kk = ik(38021),
+       xk = ik(8683),
+       nk = ik(40133);
+     const Uk = {
+       yawRadPerSec: 0,
+ ... (321 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L16-L32` → after: `L701-L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L701-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/199.js#L701-L806) · [Before (L16-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/199.js#L16-L32)

```diff
-       i: () => oQ
-     });
-     var LQ = wQ(9252);
-     const qQ = "Air",
-       oQ = Object.freeze(new LQ.g(qQ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
-   },
-   38251: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => LQ,
-       d: () => qQ
-     });
-     const LQ = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((QQ => [QQ, `${QQ}_block`])));
- 
-     function qQ(QQ) {
-       var FQ;
-       return null !== (FQ = LQ.get(QQ)) && void 0 !== FQ ? FQ : QQ
- ... (1 more removed lines; see GitHub link above)
+       h: () => fk,
+       k: () => Sk,
+       l: () => bk
+     });
+     const Dk = 1024,
+       fk = 1024 * Dk;
+ 
+     function Sk(kk) {
+       return 2 ** Math.floor(Math.log2(Math.max(1, kk / fk)))
+     }
+ 
+     function bk(kk) {
+       return (kk / fk).toFixed(1)
+     }
+   },
+   36463: (kk, ek, ik) => {
+ ... (90 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/200.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/200.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f)

#### 1. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L4-L8` → after: `L4-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L4-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L4-L29) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L4-L8)

```diff
-   40040: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => vQ,
-       h: () => kQ,
-       j: () => DQ
+   33784: (kk, ek, ik) => {
+     ik.r(ek), ik.d(ek, {
+       MAX_BLOCK_ID: () => Dk,
+       armourReductionOf: () => Xk,
+       clipSizeOf: () => tk,
+       creativeAltNames: () => re,
+       creativeCategoryOf: () => Jk,
+       creativeItemCategories: () => rk,
+       creativeItemCategoryIcons: () => Pk,
+       creativeItemIds: () => Rk,
+       descriptionOf: () => hk,
+       displayNameOf: () => Ek,
+       dropsNothing: () => Tk,
+       enchantmentPerksOf: () => Gk,
+       gunTypeOf: () => ck,
+       harvestsNullLevelOf: () => Zk,
+ ... (10 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L10-L45` → after: `L31-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L31-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L31-L57) · [Before (L10-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L10-L45)

```diff
-     var LQ = wQ(40047),
-       qQ = wQ(4632),
-       oQ = wQ(40054);
- 
-     function DQ(QQ) {
-       return QQ.payloadKind === qQ.Zb.Msgpack ? (0, LQ.d)(QQ.payload) : void 0
-     }
- 
-     function kQ(QQ, FQ) {
-       if (FQ.payloadKind === qQ.Zb.Bytes || FQ.payloadKind === qQ.Zb.MsgpackBin) return (0, oQ.e)(QQ, FQ.payload)
-     }
- 
-     function vQ(QQ) {
-       return null !== QQ && "object" === typeof QQ
-     }
-   },
- ... (20 more removed lines; see GitHub link above)
+     const Dk = 8558,
+       fk = "''WL&M3GT%cM)MK$YE1aM2'I+F+O_*c^*=%'%%%%%%%K>F>%%)K=H=%%[*W5_5['[R$ZW$S%[X&NH&L5C$W$5,KS&%]]&I%^Z&NM&b7TK$Y6G,Y>%M%M7P6$WD%Vc$LZ$OY$%+Q[&;S$/G$N&W%F$W%F$S$N&G'.F$c%`'1+%)41(1(+49$(2=b$/`N,RN,K/c_&Q0EC$O(''P`&O$%-%%^R2-*)&%;NV/ZT%IT%3XM$%%%%%_U$%b73.%%`-T-%%%%%%L9$M8X7 … [truncated]
+       Sk = "S-$SW$$R&$SG2$)$'$)$4$)$X*$I6$-$%$%$cC1$WD1$%%%$]5$b7$RH4$%$%$%$%$%$%$%$%$%$)$N+$EG&$ZT%$IT%$3$XM$$%$%$%$%$%$Z1$Y[$$O`0$'$'$'$-&+&%&)&4&1&(&1*(*+&4&9&$&(&2&=&E$&'&%&%&%&1%_%$TV3$%$D.$$$Uc&$S$$S$$S$$S$$S$$S$$S$&S$&S$$S$$S$$S$$S$$S$$S$$S$$^1$S$$]I($%$M/$+$N-$%$Z$$%$I6$3 … [truncated]
+       bk = "Crafting Table|Cauldron|Sign|Iron Nugget|Gold Nugget|Diamond Nugget|Moonstone Nugget|Iron Ingot|Gold Ingot|Draugr Knight Sword|Cooked Potato|Cooked Beef|Raw Lamb|Cooked Lamb|Gold Watermelon Stag Antlers|Bear Fur|Cave Golem Eye|Frost Golem Eye|Draugr Knight Heart|Fur B … [truncated]
+       rk = ["building", "colours", "nature", "decoration", "utility", "tools", "combat", "food", "mobs", "materials", "worldTools"],
+       Pk = {
+         building: "Stone Bricks",
+         colours: "Magenta Wool",
+         nature: "Grass Block",
+         decoration: "Lantern",
+         utility: "Workbench",
+         tools: "Iron Pickaxe",
+         combat: "Iron Sword",
+         food: "Apple",
+         mobs: "Pig Spawn Orb",
+         materials: "Iron Bar",
+ ... (11 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L116-L1067` → after: `L62-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L62-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L62-L67) · [Before (L116-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L116-L1067)

```diff
-       const LQ = DQ.encode(wQ);
-       if (LQ.length > qQ.Ib) return !1;
-       const oQ = QQ.memoryView(Uint8Array, QQ.scratch(), LQ.length, "has_effect's name");
-       return !!oQ && (oQ.set(LQ), 1 === QQ.queries.hasEffect(FQ, LQ.length))
-     }
- 
-     function mQ(QQ, FQ, wQ, LQ) {
-       const DQ = QQ.queries.blockData(FQ, wQ, LQ);
-       if (DQ === qQ.Oc) return;
-       const kQ = QQ.memoryView(Uint8Array, QQ.scratch(), DQ, "block_data's answer");
-       return kQ ? JSON.parse(oQ.decode(kQ)) : void 0
-     }
-   },
-   40047: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => qQ,
- ... (936 more removed lines; see GitHub link above)
+       const Dk = xk(kk);
+       let fk = null,
+         Sk = [];
+       return kk => {
+         const bk = Dk(kk);
+         if (0 !== bk) return null === fk && (fk = ek.split(Mk.r), Sk = new Array(fk.length)), Sk[bk - 1] ??= ik(fk[bk - 1])
```

#### 4. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1222` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L76) · [Before (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1222)

```diff
-       return null === QQ || "object" !== typeof QQ ? QQ : [DQ(QQ.Hm), DQ(QQ.bm)]
+       return kk === Mk.e ? null : (0, Mk.A)(kk)
```

#### 5. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1225-L1226` → after: `L84-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L84-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L84-L108) · [Before (L1225-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1225-L1226)

```diff
-     function bQ(QQ) {
-       return null === QQ || "object" !== typeof QQ ? QQ : [oQ(QQ.VQ, mQ), oQ(QQ.pu, mQ)]
+     function Lk(kk, ek, ik) {
+       Yk !== (0, mk.l)() && (Yk = (0, mk.l)(), pk.clear(), yk.clear());
+       let Dk = kk.get(ek);
+       return void 0 === Dk && (Dk = ik(), void 0 !== Dk && kk.set(ek, Dk)), Dk
+     }
+     const Ck = nk("_$QN+###Y$#b'#%$=%/#I'%##7%))+%[%(#%9##%)(#%9(#%?(I$%'('%%('%%('%%('%#(%%%('%%('%%('%#(%%%('%#('%%('%%('%%('%%('%#(%%#(%%#(%%%('%#(%%%(#%I%##%%)M&%A)A%A)b&%b&(Q.%)(#%)(W%%#(1%#(-%#(#%#(Q$%#(G(%/(#%1('%I%$b%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$%%+$+&3(-$?&#%#$3(-$+&#%#$ … [truncated]
+       Ak = nk("J,##O$##$#%/$#%/$#%/$-%9$1%#$)%A$#%b&$1%-$[+%S%$%%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%/$#%9$M2#+%-$#%/$#%/$#%/$#%%$-&/$-%+$9%3$-%E$$b%%I%$A%#$%%=$b(&-$-&#%/$#%/$#%/$#%%$-&)%'$-%#$7%M'$E+%#$%%#$?%K)$5%#$-&#%%$#%+$#%/$#%/$#%/$#%%$-&Q$%#$-& … [truncated]
+       jk = nk(".W]+#%#%#%#%#%#%#%#%%%#%#%#%%%#%#%#", "30|20|16|1|2|5|7|12|8|100|21|24|22|75", Number),
+       sk = nk("&PO+#####%####################$#%#,#%#####,%&#)#,#.#%#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1#$#'#,#0#1$bC$'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$8'#*#/#,#&$1'#*# … [truncated]
+       dk = nk(">W]+#%#)$)%9$", "none|sniper", Uk),
+       Vk = nk("*W]+#%#%#%#%$%#)&%(%%%$%%)$)'%&", "semi_automatic|submachine|rifle|pistol|shotgun", Uk),
+       Fk = xk("]%LV+#c&M.$4_1$44$44$44$49$4/$4/$4/$"),
+       uk = xk("$a&#$9$Z$K?$&;$$[($(c($6Y&$$)$$$$&G%$*$$$*$(V*$Z$V$$$#$$#$&+$$#$$%$$$$$$$$$$&$$$#$$($,E0$$T&$&V$$D$`-$(%$6*$$%$T$M$$$L%$6;$$$$$2$$W:$*D^%$$N%$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$BB$2O'$2*$2*$2*$2*$2*$2*$2*$2*$2*$:*$0=$&^$$$N$$(Q$$$]$$.#$&6$$K%$:.$*I$$*&$*S+$6,$"),
+       qk = nk("$DO+#######%#$ZD$$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%(#$#%#&#'%($U$(.1($'(.1($'(.1($'(.1($2(.+($((.+($((.+($((.+($C&($@$", "1|2|3|4|5", (kk => "" === kk ? null : Number(kk))),
+       Ik = nk("$F(#$%$$&#$)%$)%$0$$,$$%$$&$$6$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$@$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$%$$'$$I$%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$)%$.#$'&$'&$'&$'&$'&$'&$'&$'&$'&$'&$' … [truncated]
+       zk = nk(",QN+####$/#+#+###+#4####1+##S(+$$#2A#$H%#$%0$%0$%0$%0$%0$%0$%0$%0$%0$U.0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0$%0:C/(:.($R$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$($$$#&#'#(#*++#0$%0&&(&$(?+$#(#0$%0&&(&#(,#+$#(#0$%0&&(&#(,#+$#(#0$%0 … [truncated]
+ ... (9 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1230-L1231` → after: `L112-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L112-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L112-L116) · [Before (L1230-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1230-L1231)

```diff
-       return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.Om), DQ(FQ.sm)];
-       var FQ
+       const ek = lk(kk);
+       return null !== ek ? ek : Lk(yk, kk, (() => {
+         var ek;
+         return null !== (ek = (0, Mk.B)(Ek(kk))) && void 0 !== ek ? ek : void 0
+       }))
```

#### 7. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1235-L1236` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L120) · [Before (L1235-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1235-L1236)

```diff
-       return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [FQ.id, FQ.xu];
-       var FQ
+       return Ck(kk)
```

#### 8. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1240-L1241` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L124) · [Before (L1240-L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1240-L1241)

```diff
-       return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [FQ.RF, DQ(FQ.OF), FQ.sF, DQ(FQ.UF), FQ.zF, FQ.lF, FQ.CD, DQ(FQ.SD), DQ(FQ.iD)];
-       var FQ
+       return Ak(kk)
```

#### 9. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1245-L1246` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L128) · [Before (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1245-L1246)

```diff
-       return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [oQ(FQ.km, mQ), FQ.um];
-       var FQ
+       return jk(kk)
```

#### 10. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1250-L1251` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L132) · [Before (L1250-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1250-L1251)

```diff
-       return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [oQ(FQ.Nm, (QQ => DQ(QQ))), DQ(FQ.Tm), FQ.Km];
-       var FQ
+       return sk(kk)
```

#### 11. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1255-L1256` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L136) · [Before (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1255-L1256)

```diff
-       return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [oQ(FQ.Au, mQ), DQ(FQ.tu), FQ.eu];
-       var FQ
+       return dk(kk)
```

#### 12. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1260-L1261` → after: `L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L140) · [Before (L1260-L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1260-L1261)

```diff
-       return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.SL), DQ(FQ.iL)];
-       var FQ
+       return Vk(kk)
```

#### 13. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1265-L1266` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L144) · [Before (L1265-L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1265-L1266)

```diff
-       return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.ou)];
-       var FQ
+       return 0 !== uk(kk)
```

#### 14. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1274-L1279` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L152) · [Before (L1274-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1274-L1279)

```diff
-       return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.hm), DQ(FQ.Jm), DQ(FQ.Hm), DQ(FQ.bm)];
-       var FQ
-     }
- 
-     function SQ(QQ) {
-       return HQ(QQ)
+       return 0 !== Fk(kk)
```

#### 15. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1283` → after: `L156-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L156-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L156-L159) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1283)

```diff
-       return HQ(QQ)
+       const ek = Ik(kk);
+       if (void 0 === ek || ek.startsWith(Mk.q)) return null === ek || void 0 === ek ? void 0 : ek.slice(Mk.q.length);
+       const ik = (0, mk.h)(kk);
+       return void 0 === ik ? void 0 : `${ik}${Mk.r}${ek}`
```

#### 16. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1287-L1288` → after: `L163-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L163-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L163-L164) · [Before (L1287-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1287-L1288)

```diff
-       return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.pD)];
-       var FQ
+       var ek;
+       return null !== (ek = zk(kk)) && void 0 !== ek ? ek : Kk
```

#### 17. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1291` → after: `L168-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L168-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L168-L175) · [Before (L1291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1291)

```diff
-     function RQ(QQ) {
+     function Rk() {
+       if (null === Nk) {
+         const kk = [],
+           ek = new Mk.u(fk);
+         let ik = 0;
+         for (; !ek.done;) ik += (0, Mk.H)(ek.next()), kk.push(ik);
+         Nk = Object.freeze(kk)
+       }
```

#### 18. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1296-L1297` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L180) · [Before (L1296-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1296-L1297)

```diff
-       return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.Bv), DQ(FQ.Qm)];
-       var FQ
+       return Qk(kk)
```

#### 19. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1300-L1301` → after: `L183-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L183-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L183-L185) · [Before (L1300-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1300-L1301)

```diff
-     function sQ(QQ) {
-       return DQ(QQ)
+     function ke(kk, ek) {
+       var ik;
+       return 0 !== ((null !== (ik = vk(kk)) && void 0 !== ik ? ik : 0) & ek)
```

#### 20. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1305` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L189) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1305)

```diff
-       return bQ(QQ)
+       return ke(kk, Mk.c.OnlyInSearch)
```

#### 21. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1309` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L193) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1309)

```diff
-       return bQ(QQ)
+       return ke(kk, Mk.c.OnlyInCategory)
```

#### 22. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1313-L1314` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L197) · [Before (L1313-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1313-L1314)

```diff
-       return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [DQ(FQ.cD)];
-       var FQ
+       return ke(kk, Mk.c.DevOnly)
```

#### 23. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1318-L1321` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L201) · [Before (L1318-L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1318-L1321)

```diff
-       return (uQ ??= (0, LQ.h)().map((QQ => QQ.name)), uQ).map((FQ => {
-         return "string" === typeof(wQ = QQ[FQ]) ? DQ(wQ) : oQ(wQ, mQ);
-         var wQ
-       }))
+       return !ke(kk, Mk.c.HiddenByDefault) && void 0
```

#### 24. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1324-L1326` → after: `L204-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L204-L207) · [Before (L1324-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1324-L1326)

```diff
-     function TQ(QQ) {
-       return null === (FQ = QQ) || "object" !== typeof FQ ? FQ : [FQ.Wu, FQ.Ru, FQ.Ou];
-       var FQ
+     function Se(kk, ek, ik, Dk) {
+       var fk;
+       const Sk = null !== (fk = vk(kk)) && void 0 !== fk ? fk : 0;
+       return 0 !== (Sk & Mk.c.DisabledInPublicLobbies) && ek || 0 !== (Sk & Mk.c.DisabledInProduction) && !0 || !ik || !Dk && 0 !== (Sk & Mk.c.DevOnly)
```

#### 25. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1328-L1346` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L209) · [Before (L1328-L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1328-L1346)

```diff
-   },
-   9289: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => qQ,
-       i: () => oQ
-     });
-     var LQ = wQ(9252);
-     const qQ = "Air",
-       oQ = Object.freeze(new LQ.g(qQ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
-   },
-   38764: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => oQ,
-       i: () => kQ
-     });
-     var LQ = wQ(317),
- ... (3 more removed lines; see GitHub link above)
+     let be = null;
```

#### 26. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1348-L1352` → after: `L211-L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L211-L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/200.js#L211-L225) · [Before (L1348-L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/200.js#L1348-L1352)

```diff
-     function kQ(QQ, FQ) {
-       let wQ = DQ.get(FQ);
-       void 0 === wQ && (wQ = new Map, DQ.set(FQ, wQ));
-       let qQ = wQ.get(QQ);
-       return void 0 === qQ && (qQ = `${QQ}${(0,LQ.A)(FQ)}`, wQ.set(QQ, qQ)), qQ
+     function re() {
+       if (null === be) {
+         const kk = bk.split(Mk.r),
+           ek = new Map,
+           ik = new Mk.u(Sk);
+         let Dk = 0,
+           fk = 0;
+         for (; !ik.done;) {
+           Dk += (0, Mk.H)(ik.next());
+           const Sk = ik.next();
+           ek.set(Dk, Object.freeze(kk.slice(fk, fk + Sk))), fk += Sk
+         }
+         be = ek
+       }
+       return be
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/201.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/201.js` (88 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9)

#### 1. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L4)

```diff
-   38666: (QQ, FQ, wQ) => {
+   41088: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L6)

```diff
-       c: () => LQ
+       b: () => Sk
```

#### 3. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L8-L21` → after: `L8-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L8-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L8-L20) · [Before (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L8-L21)

```diff
-     class LQ {
-       constructor(QQ, FQ) {
-         this.read = QQ, this.apply = FQ, this.release = null
-       }
-       turn(QQ, FQ) {
-         const wQ = null === this.release ? this.read() : this.release.transitionMs;
-         this.stop(!1), this.apply({
-           forcedCameraDirectionTransitionMs: FQ,
-           forcedCameraDirection: [QQ[0], QQ[1], QQ[2]]
-         }), this.release = {
-           timer: setTimeout((() => {
-             this.stop(!0)
-           }), FQ + 100),
-           transitionMs: wQ
+     var Dk = ik(60),
+       fk = ik(2683);
+ 
+     function Sk(kk, ek, ik) {
+       const Sk = (0, Dk.useRef)(null),
+         {
+           width: bk,
+           height: rk
+         } = (0, fk.c)(kk);
+       (0, Dk.useEffect)((() => {
+         const ik = ek(kk.current);
+         return Sk.current = ik, () => {
+           ik.close(), Sk.current = null
```

#### 4. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L23-L32` → after: `L22-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L22-L26) · [Before (L23-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L23-L32)

```diff
-       }
-       dispose() {
-         this.stop(!0)
-       }
-       stop(QQ) {
-         null !== this.release && (clearTimeout(this.release.timer), QQ && this.apply({
-           forcedCameraDirection: null,
-           forcedCameraDirectionTransitionMs: this.release.transitionMs
-         }), this.release = null)
-       }
+       }), [kk, ek]), (0, Dk.useEffect)((() => {
+         bk <= 0 || rk <= 0 || Sk.current.resize(bk, rk)
+       }), [bk, rk]), (0, Dk.useEffect)((() => {
+         Sk.current.show(ik)
+       }), [ik])
```

#### 5. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L35` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L29) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L35)

```diff
-   38174: (QQ, FQ, wQ) => {
+   41093: (kk, ek, ik) => {
```

#### 6. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L37-L38` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L31-L33) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L37-L38)

```diff
-       e: () => oQ,
-       f: () => qQ
+       b: () => xk,
+       c: () => Kk,
+       g: () => Pk
```

#### 7. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L40` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L35-L36) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L40)

```diff
-     const LQ = new Map;
+     var Dk = ik(36754),
+       fk = ik(38226);
```

#### 8. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L43-L47` → after: `L39-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L39-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L39-L46) · [Before (L43-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L43-L47)

```diff
-       LQ.set(QQ, FQ)
-     }
- 
-     function oQ(QQ) {
-       return QQ ? LQ.get(QQ) : void 0
+       let [ik, Dk, fk] = kk;
+       return [0, .5, 1].map((kk => ({
+         timeFraction: kk,
+         rotation: {
+           Wi: "catmull-rom-spline",
+           point: [ik, Dk, fk + (.5 === kk ? ek : 0)]
+         }
+       })))
```

#### 9. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L62-L158` → after: `L51-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L51-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L51-L78) · [Before (L62-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L62-L158)

```diff
-         pos: [wQ[0], wQ[1], wQ[2]],
-         noticeboardSpan: HQ && {
-           width: HQ.rect.width,
-           height: HQ.rect.height
-         },
-         text: null !== (oQ = null === YQ || void 0 === YQ || null === (DQ = YQ.persisted) || void 0 === DQ || null === (kQ = DQ.shared) || void 0 === kQ ? void 0 : kQ.text) && void 0 !== oQ ? oQ : "",
-         textSize: null !== (vQ = null === YQ || void 0 === YQ || null === (mQ = YQ.persisted) || void 0 === mQ || null === (uQ = mQ.shared) || void 0 === uQ ? void 0 : uQ.textSize) && void 0 !== vQ ? vQ : null
-       }
-     }
-   },
-   38039: (QQ, FQ, wQ) => {
-     function LQ(QQ) {
-       switch (QQ.kind) {
-         case void 0:
-         case "flatEmissive":
-           return !1;
- ... (81 more removed lines; see GitHub link above)
+         Ii: 3200,
+         loop: !0,
+         Qi: {
+           Root: {
+             timeline: [0, .5, 1].map((kk => ({
+               timeFraction: kk,
+               position: {
+                 Wi: "catmull-rom-spline",
+                 point: [0, .5 === kk ? .18 : 0, 0]
+               }
+             })))
+           },
+           HeadMesh: {
+             timeline: [0, .25, .75, 1].map((kk => ({
+               timeFraction: kk,
+               rotation: {
+ ... (12 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L162` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L88) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L162)

```diff
-   38700: (QQ, FQ, wQ) => {
+   38226: (kk, ek, ik) => {
```

#### 11. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L166-L173` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L91) · [Before (L166-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L166-L173)

```diff
-       g: () => HQ,
-       h: () => DQ,
-       j: () => xQ,
-       m: () => vQ,
-       n: () => AQ,
-       o: () => mQ,
-       s: () => kQ,
-       v: () => uQ
+       i: () => Sk
```

#### 12. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L175-L177` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L93) · [Before (L175-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L175-L177)

```diff
-     const LQ = Math.PI / 2 - .001,
-       qQ = 2 * Math.PI,
-       oQ = 1e-9;
+     const Dk = new WeakMap;
```

#### 13. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L180-L189` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L96) · [Before (L180-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L180-L189)

```diff
-       FQ.heading = QQ.heading, FQ.pitch = QQ.pitch
-     }
- 
-     function kQ(QQ, FQ) {
-       const wQ = FQ - QQ;
-       return wQ - qQ * Math.floor((wQ + Math.PI) / qQ)
-     }
- 
-     function vQ(QQ, FQ, wQ) {
-       return QQ + kQ(QQ, FQ) * wQ
+       return Dk.set(kk, ek), kk
```

#### 14. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L193-L221` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L100-L101) · [Before (L193-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L193-L221)

```diff
-       if (!Number.isFinite(QQ)) return QQ;
-       const FQ = QQ - qQ * Math.floor(QQ / qQ);
-       return FQ < qQ ? FQ : 0
-     }
- 
-     function uQ(QQ, FQ) {
-       return QQ + kQ(QQ, FQ)
-     }
- 
-     function HQ(QQ) {
-       return Math.max(-LQ, Math.min(LQ, QQ))
-     }
- 
-     function bQ(QQ, FQ, wQ) {
-       const LQ = Math.cos(FQ);
-       return wQ[0] = LQ * Math.sin(QQ), wQ[1] = -Math.sin(FQ), wQ[2] = LQ * Math.cos(QQ), wQ
- ... (13 more removed lines; see GitHub link above)
+       var ek;
+       return null !== (ek = Dk.get(kk)) && void 0 !== ek ? ek : null
```

#### 15. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L224` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L104) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L224)

```diff
-   38734: (QQ, FQ, wQ) => {
+   33801: (kk, ek, ik) => {
```

#### 16. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L226-L227` → after: `L106-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L106-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L106-L108) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L226-L227)

```diff
-       c: () => oQ,
-       d: () => qQ
+       d: () => bk,
+       e: () => fk,
+       f: () => Mk
```

#### 17. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L229` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L110) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L229)

```diff
-     var LQ = wQ(38700);
+     var Dk = ik(1537);
```

#### 18. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L233-L239` → after: `L114-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L114-L116) · [Before (L233-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L233-L239)

```diff
-       const wQ = "default" === QQ.mode ? "movement" : null !== (FQ = QQ.playerFacing) && void 0 !== FQ ? FQ : "movement";
-       return "cursor" === wQ ? {
-         facing: wQ,
-         mouseTurns: null
-       } : {
-         facing: wQ,
-         mouseTurns: "default" !== QQ.mode && void 0 !== QQ.playerLook ? "look" : "view"
+       return {
+         ...bk.store,
+         yaw: bk.store.yaw + (null !== (ek = Dk.c[kk].previewYaw) && void 0 !== ek ? ek : 0)
```

#### 19. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L242-L314` → after: `L119-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L119-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L119-L130) · [Before (L242-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L242-L314)

```diff
- 
-     function oQ(QQ, FQ, wQ, qQ, oQ, DQ) {
-       return DQ.PU = 0, DQ.dU = 0, DQ.pointedAt = void 0, void 0 !== qQ ? oQ ? (DQ.pointedAt = qQ, QQ) : (0, LQ.o)(qQ.heading) : oQ ? (DQ.PU = FQ, DQ.dU = wQ, QQ) : (0, LQ.o)(QQ + FQ)
-     }
-   },
-   38714: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => VQ
-     });
-     var LQ = wQ(38718),
-       qQ = wQ(38700),
-       oQ = wQ(36607);
- 
-     function DQ(QQ, FQ, wQ, LQ) {
-       if (!(LQ > 0)) return FQ;
-       const qQ = FQ > QQ ? Math.min(FQ, QQ + wQ / LQ) : Math.max(FQ, QQ - wQ / LQ);
- ... (57 more removed lines; see GitHub link above)
+     const Sk = {
+         yaw: .61 * Math.PI,
+         pitch: Math.PI / 2.05,
+         radius: 30,
+         target: [0, 0, 0]
+       },
+       bk = {
+         player: Sk,
+         store: {
+           ...Sk,
+           radius: 33,
+           target: [0, 3.9, 0]
```

#### 20. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L316-L322` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L132) · [Before (L316-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L316-L322)

```diff
-         return "in" === this.phase && (FQ.alpha = DQ(FQ.alpha, 0, oQ, this.inMs), FQ.alpha <= 0 && (this.phase = null, this.clearMs = 0)), wQ
-       }
-     }
-     var vQ = wQ(38692),
-       mQ = wQ(38725),
-       uQ = wQ(1870),
-       HQ = wQ(36202);
+       };
```

#### 21. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L325-L340` → after: `L135-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L135-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L135-L137) · [Before (L325-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L325-L340)

```diff
-       for (let wQ = 0; wQ < FQ.length; wQ++) FQ[wQ] = QQ[wQ]
-     }
- 
-     function YQ(QQ, FQ) {
-       var wQ;
-       return null !== (wQ = QQ.fov) && void 0 !== wQ ? wQ : FQ.getDefaultFov()
-     }
- 
-     function xQ(QQ, FQ, wQ, LQ, qQ) {
-       const oQ = 2 / LQ,
-         DQ = Math.exp(-oQ * qQ);
-       for (let kQ = 0; kQ < QQ.length; kQ++) {
-         const LQ = QQ[kQ] - wQ[kQ],
-           vQ = (FQ[kQ] + oQ * LQ) * qQ;
-         QQ[kQ] = wQ[kQ] + (LQ + vQ) * DQ, FQ[kQ] = (FQ[kQ] - oQ * vQ) * DQ
-       }
+       kk instanceof Promise ? kk.then(ek).catch((kk => {
+         console.error("Couldn't open the preview", kk)
+       })) : ek(kk)
```

#### 22. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L343-L370` → after: `L140-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L140-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L140-L143) · [Before (L343-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L343-L370)

```diff
-       constructor(QQ, FQ, wQ, LQ) {
-         var oQ, DQ, kQ, vQ, mQ;
-         this.settings = QQ, this.nH = FQ, this.targets = wQ, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Qt = [0, 0, 0, 0, 0, 0], this.started = !1, this.a … [truncated]
-           heading: 0,
-           pitch: 0
-         }, this.points = [], this.forward = [0, 0, 0], this.base = {
-           heading: (0, qQ.o)((0, uQ.n)(null !== (oQ = QQ.viewHeading) && void 0 !== oQ ? oQ : 0)),
-           pitch: (0, qQ.g)((0, uQ.n)(null !== (DQ = QQ.viewElevation) && void 0 !== DQ ? DQ : 45))
-         }, this.closestDistance = null !== (kQ = QQ.closestDistance) && void 0 !== kQ ? kQ : Math.min(6, null !== (vQ = QQ.furthestDistance) && void 0 !== vQ ? vQ : 1 / 0), this.furthestDistance = null !== (mQ = QQ.furthestDistance) && void 0 !== mQ ? mQ : Math.max(64, this.close … [truncated]
-         const HQ = (0, qQ.e)(this.base.heading, this.base.pitch, this.forward),
-           bQ = LQ.position,
-           YQ = this.closestDistance;
-         this.goal = [bQ[0] + HQ[0] * YQ, bQ[1] + HQ[1] * YQ, bQ[2] + HQ[2] * YQ, YQ, this.base.heading, this.base.pitch]
-       }
-       update(QQ, FQ, wQ) {
-         var LQ, oQ;
- ... (12 more removed lines; see GitHub link above)
+       constructor(kk) {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, rk(kk, (kk => {
+           this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height), null !== this.view && kk.show(this.view))
+         }))
```

#### 23. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L372` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L145) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L372)

```diff
-       placeGoal(QQ) {
+       show(kk) {
```

#### 24. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L374-L401` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L147) · [Before (L374-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L374-L401)

```diff
-         let wQ = 0;
-         for (const uQ of this.settings.targets) {
-           const QQ = this.targets.currentAimPoint(uQ);
-           QQ && (0, vQ.l)(QQ, this.pointAt(wQ++))
-         }
-         if (wQ > 0) this.framedTargets = !0;
-         else if (!this.framedTargets) {
-           const QQ = this.targets.aimPoint(this.nH.localPlayerId);
-           QQ && (0, vQ.l)(QQ, this.pointAt(wQ++))
-         }
-         const LQ = this.goal;
-         if (0 === wQ) return void(LQ[3] = this.withinDistances(LQ[3]));
-         for (let vQ = 0; vQ < 3; vQ++) {
-           let QQ = 1 / 0,
-             FQ = -1 / 0;
-           for (let LQ = 0; LQ < wQ; LQ++) QQ = Math.min(QQ, this.points[LQ][vQ]), FQ = Math.max(FQ, this.points[LQ][vQ]);
- ... (12 more removed lines; see GitHub link above)
+         this.view = kk, null === (ek = this.opened) || void 0 === ek || ek.show(kk)
```

#### 25. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L403-L404` → after: `L149-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L149-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L149-L154) · [Before (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L403-L404)

```diff
-       withinDistances(QQ) {
-         return Math.min(this.furthestDistance, Math.max(this.closestDistance, QQ))
+       resize(kk, ek) {
+         var ik;
+         this.size = {
+           width: kk,
+           height: ek
+         }, null === (ik = this.opened) || void 0 === ik || ik.resize(kk, ek)
```

#### 26. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L406-L407` → after: `L156-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L156-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L156-L158) · [Before (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L406-L407)

```diff
-       pointAt(QQ) {
-         return QQ === this.points.length && this.points.push([0, 0, 0]), this.points[QQ]
+       close() {
+         var kk;
+         this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
```

#### 27. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L412-L448` → after: `L163-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L163-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L163-L165) · [Before (L412-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L412-L448)

```diff
-         this.limits = QQ, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
-       }
-       continueFrom(QQ) {
-         this.limits && (this.yawOffset = QQ.yawOffset, this.pitchOffset = QQ.pitchOffset, this.idleMs = QQ.idleMs)
-       }
-       update(QQ, FQ) {
-         const wQ = this.limits;
-         if (!wQ) return;
-         const LQ = Number.isFinite(FQ.PU) ? FQ.PU : 0,
-           qQ = Number.isFinite(FQ.dU) ? FQ.dU : 0;
-         if (FQ.pointedAt) this.idleMs = 0, this.pointedAt = {
-           heading: FQ.pointedAt.heading,
-           pitch: FQ.pointedAt.pitch
-         };
-         else if (0 !== LQ || 0 !== qQ) this.idleMs = 0, this.yawOffset += LQ, this.pitchOffset += qQ;
-         else {
- ... (21 more removed lines; see GitHub link above)
+         this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(kk).then((kk => kk.ready)), rk(kk, (kk => {
+           this.closed ? kk.close() : (this.opened = kk, null !== this.size && kk.resize(this.size.width, this.size.height))
+         }))
```

#### 28. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L450-L451` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L167-L168) · [Before (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L450-L451)

```diff
-       unapply(QQ, FQ) {
-         FQ.heading = (0, qQ.o)(QQ.heading - this.yawOffset), FQ.pitch = (0, qQ.g)(QQ.pitch - this.pitchOffset)
+       get dev() {
+         return this.opened.dev
```

#### 29. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L453-L543` → after: `L170-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L170-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L170-L172) · [Before (L453-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L453-L543)

```diff
-     }
-     const eQ = 1e-6;
- 
-     function MQ(QQ) {
-       return Math.sqrt(QQ[0] * QQ[0] + QQ[1] * QQ[1] + QQ[2] * QQ[2])
-     }
- 
-     function GQ(QQ, FQ, wQ, LQ, qQ) {
-       const oQ = qQ * qQ,
-         DQ = oQ * qQ;
-       return (2 * DQ - 3 * oQ + 1) * QQ + (DQ - 2 * oQ + qQ) * FQ + (-2 * DQ + 3 * oQ) * wQ + (DQ - oQ) * LQ
-     }
- 
-     function pQ(QQ, FQ, wQ, LQ, qQ) {
-       const oQ = qQ * qQ;
-       return (6 * oQ - 6 * qQ) * QQ + (3 * oQ - 4 * qQ + 1) * FQ + (-6 * oQ + 6 * qQ) * wQ + (3 * oQ - 2 * qQ) * LQ
- ... (75 more removed lines; see GitHub link above)
+       isReady() {
+         var kk, ek;
+         return null !== (kk = null === (ek = this.opened) || void 0 === ek ? void 0 : ek.isReady()) && void 0 !== kk && kk
```

#### 30. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L545-L559` → after: `L174-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L174-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L174-L176) · [Before (L545-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L545-L559)

```diff
-       sample(QQ, FQ, wQ) {
-         const {
-           index: LQ,
-           toIndex: oQ,
-           segmentMs: DQ,
-           curved: kQ
-         } = QQ, vQ = this.fromAngles, mQ = this.toAngles, uQ = this.nodeAngles(LQ, wQ.position, FQ, vQ), HQ = this.nodeAngles(oQ, wQ.position, FQ, mQ);
-         if (DQ > 0 && "aim" !== uQ && "aim" !== HQ && this.liveTangent(QQ, vQ)) return wQ.heading = (0, qQ.o)(vQ.heading), void(wQ.pitch = vQ.pitch);
-         if ("none" === uQ && "none" === HQ) return;
-         !kQ && DQ > 0 && ("tangent" === uQ && this.liveTangent(QQ, vQ), "tangent" === HQ && this.liveTangent(QQ, mQ)), "none" === uQ ? (0, qQ.h)(mQ, vQ) : "none" === HQ && (0, qQ.h)(vQ, mQ);
-         const bQ = kQ && QQ.beforeIndex >= 0 && "none" !== this.nodeAngles(QQ.beforeIndex, wQ.position, FQ, this.beforeAngles),
-           YQ = kQ && QQ.afterIndex >= 0 && "none" !== this.nodeAngles(QQ.afterIndex, wQ.position, FQ, this.afterAngles),
-           xQ = (0, qQ.v)(vQ.heading, mQ.heading),
-           AQ = RQ(QQ, bQ ? (0, qQ.v)(vQ.heading, this.beforeAngles.heading) : 0, vQ.heading, xQ, YQ ? (0, qQ.v)(xQ, this.afterAngles.heading) : 0, bQ, YQ);
-         wQ.heading = (0, qQ.o)(AQ), wQ.pitch = (0, qQ.g)(RQ(QQ, this.beforeAngles.pitch, vQ.pitch, mQ.pitch, this.afterAngles.pitch, bQ, YQ))
+       setCosmetic(kk, ek) {
+         var ik;
+         null === (ik = this.opened) || void 0 === ik || ik.setCosmetic(kk, ek)
```

#### 31. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L561-L563` → after: `L178-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L178-L180) · [Before (L561-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L561-L563)

```diff
-       nodeAngles(QQ, FQ, wQ, LQ) {
-         const qQ = this.rawNodeAngles(QQ, FQ, wQ, LQ);
-         return "none" !== qQ && OQ(LQ) && !this.borrowHeading(this.prevNodes[QQ], FQ, wQ, LQ) && this.borrowHeading(this.nextNodes[QQ], FQ, wQ, LQ), qQ
+       playEmote(kk) {
+         var ek;
+         null === (ek = this.opened) || void 0 === ek || ek.playEmote(kk)
```

#### 32. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L565-L567` → after: `L182-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L182-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L182-L184) · [Before (L565-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L565-L567)

```diff
-       borrowHeading(QQ, FQ, wQ, LQ) {
-         const qQ = this.borrowedAngles;
-         return !(QQ < 0 || "none" === this.rawNodeAngles(QQ, FQ, wQ, qQ) || OQ(qQ)) && (LQ.heading = qQ.heading, !0)
+       setOrbit(kk) {
+         var ek;
+         null === (ek = this.opened) || void 0 === ek || ek.setOrbit(kk)
```

#### 33. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L569-L577` → after: `L186-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L186-L188) · [Before (L569-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L569-L577)

```diff
-       rawNodeAngles(QQ, FQ, wQ, LQ) {
-         const oQ = this.nodes[QQ].keyframe;
-         if (oQ.lookDirection) return (0, qQ.j)(oQ.lookDirection, LQ), "aim";
-         if (void 0 !== oQ.lookAt) {
-           const QQ = wQ(oQ.lookAt);
-           if (QQ) return (0, qQ.n)(FQ, QQ, LQ), "aim"
-         }
-         const DQ = this.tangents[QQ];
-         return DQ ? ((0, qQ.h)(DQ, LQ), "tangent") : "none"
+       resetCamera() {
+         var kk;
+         null === (kk = this.opened) || void 0 === kk || kk.resetCamera()
```

#### 34. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L579-L584` → after: `L190-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L190-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L190-L192) · [Before (L579-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L579-L584)

```diff
-       liveTangent(QQ, FQ) {
-         const wQ = this.nodes[QQ.index].position,
-           LQ = this.nodes[QQ.toIndex].position,
-           oQ = this.derivative;
-         for (let qQ = 0; qQ < 3; qQ++) oQ[qQ] = pQ(wQ[qQ], QQ.fromTangent[qQ], LQ[qQ], QQ.toTangent[qQ], QQ.u);
-         return MQ(oQ) > 1e-9 ? ((0, qQ.j)(oQ, FQ), !0) : !(cQ(wQ, LQ) < eQ) && ((0, qQ.j)(SQ(wQ, LQ, QQ.u < .5 ? QQ.toTangent : QQ.fromTangent, oQ), FQ), !0)
+       async untilDrawn(kk) {
+         var ek;
+         await this.ready, await (null === (ek = this.opened) || void 0 === ek ? void 0 : ek.untilDrawn(kk))
```

#### 35. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L586` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L194) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L586)

```diff
-       nodeTangent(QQ, FQ, wQ) {
+       resize(kk, ek) {
```

#### 36. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L588-L597` → after: `L196-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L196-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L196-L199) · [Before (L588-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L588-L597)

```diff
-         const oQ = QQ[wQ];
-         if (MQ(oQ) > 1e-9) return (0, qQ.j)(oQ, {
-           heading: 0,
-           pitch: 0
-         });
-         const DQ = null !== (LQ = this.restDirectionTo(wQ, wQ + 1, QQ, FQ)) && void 0 !== LQ ? LQ : this.restDirectionTo(wQ, wQ - 1, QQ, FQ);
-         return DQ ? (0, qQ.j)(DQ, {
-           heading: 0,
-           pitch: 0
-         }) : null
+         this.size = {
+           width: kk,
+           height: ek
+         }, null === (ik = this.opened) || void 0 === ik || ik.resize(kk, ek)
```

#### 37. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L599-L604` → after: `L201-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L201-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L201-L203) · [Before (L599-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L599-L604)

```diff
-       restDirectionTo(QQ, FQ, wQ, LQ) {
-         const qQ = this.nodes[QQ],
-           oQ = this.nodes[FQ];
-         if (!oQ || cQ(qQ.position, oQ.position) < eQ) return null;
-         const [DQ, kQ] = FQ > QQ ? [qQ, oQ] : [oQ, qQ], vQ = CQ(wQ[FQ], DQ.position, kQ.position, kQ.timeMs - DQ.timeMs, LQ, [0, 0, 0]);
-         return SQ(DQ.position, kQ.position, vQ, [0, 0, 0])
+       close() {
+         var kk;
+         this.closed = !0, null === (kk = this.opened) || void 0 === kk || kk.close(), this.opened = null
```

#### 38. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L607-L671` → after: `L206-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L206-L208) · [Before (L607-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L607-L671)

```diff
- 
-     function rQ(QQ, FQ) {
-       const wQ = QQ.lookDirection || FQ.lookDirection ? function(QQ, FQ) {
-         if (!QQ || !FQ) return QQ === FQ;
-         const wQ = MQ(QQ),
-           LQ = MQ(FQ);
-         return Math.hypot(QQ[0] / wQ - FQ[0] / LQ, QQ[1] / wQ - FQ[1] / LQ, QQ[2] / wQ - FQ[2] / LQ) < eQ
-       }(QQ.lookDirection, FQ.lookDirection) : (LQ = QQ.lookAt, qQ = FQ.lookAt, "object" !== typeof LQ || "object" !== typeof qQ ? LQ === qQ : cQ(LQ, qQ) < eQ);
-       var LQ, qQ;
-       return cQ(QQ.position, FQ.position) < eQ && QQ.fov === FQ.fov && wQ
-     }
-     class IQ {
-       constructor(QQ, FQ, wQ) {
-         if (this.smooth = FQ, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
-             index: 0,
-             toIndex: 0,
- ... (49 more removed lines; see GitHub link above)
+     const Mk = new class {
+       constructor() {
+         this.host = null, this.makeDefault = null
```

#### 39. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L673-L680` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L210-L211) · [Before (L673-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L673-L680)

```diff
-       sample(QQ, FQ, wQ, LQ) {
-         const qQ = this.findSegment(this.pathTime(QQ));
-         this.samplePosition(qQ, LQ.position), this.aim.sample(qQ, FQ, LQ);
-         const {
-           beforeIndex: oQ,
-           afterIndex: DQ
-         } = qQ;
-         LQ.fov = RQ(qQ, oQ >= 0 ? this.fovAt(oQ, wQ) : 0, this.fovAt(qQ.index, wQ), this.fovAt(qQ.toIndex, wQ), DQ >= 0 ? this.fovAt(DQ, wQ) : 0, oQ >= 0, DQ >= 0)
+       setHost(kk) {
+         this.host = kk
```

#### 40. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L682-L686` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L213-L214) · [Before (L682-L686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L682-L686)

```diff
-       pathTime(QQ) {
-         const FQ = this.nodes[0].timeMs;
-         if (this.loopMs <= 0 || QQ <= FQ) return QQ;
-         const wQ = QQ - FQ;
-         return FQ + wQ - this.loopMs * Math.floor(wQ / this.loopMs)
+       setDefaultHost(kk) {
+         this.makeDefault = kk
```

#### 41. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L688-L695` → after: `L216-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L216-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L216-L221) · [Before (L688-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L688-L695)

```diff
-       findSegment(QQ) {
-         const FQ = this.nodes,
-           wQ = this.segment;
-         let LQ = wQ.index;
-         for (QQ < FQ[LQ].timeMs && (LQ = 0); LQ < FQ.length - 2 && FQ[LQ + 1].timeMs <= QQ;) LQ++;
-         const qQ = Math.min(LQ + 1, FQ.length - 1),
-           DQ = FQ[qQ].timeMs - FQ[LQ].timeMs;
-         return wQ.index = LQ, wQ.toIndex = qQ, wQ.segmentMs = DQ, wQ.u = DQ > 0 ? (0, oQ.l)((QQ - FQ[LQ].timeMs) / DQ, FQ[LQ].easing) : 1, wQ.curved = this.smooth && DQ > 0, wQ.beforeIndex = this.prevNodes[LQ], wQ.afterIndex = this.nextNodes[qQ], wQ.beforeMs = this.prevGaps[LQ],  … [truncated]
+       current() {
+         if (null === this.host) {
+           if (null === this.makeDefault) throw new Error("no preview host");
+           this.host = this.makeDefault()
+         }
+         return this.host
```

#### 42. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L697-L705` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L223-L224) · [Before (L697-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L697-L705)

```diff
-       samplePosition(QQ, FQ) {
-         const {
-           fromTangent: wQ,
-           toTangent: LQ,
-           curved: qQ
-         } = QQ, oQ = this.nodes[QQ.index].position, DQ = this.nodes[QQ.toIndex].position;
-         CQ(this.velocities[QQ.index], oQ, DQ, QQ.segmentMs, qQ, wQ), CQ(this.velocities[QQ.toIndex], oQ, DQ, QQ.segmentMs, qQ, LQ);
-         const kQ = QQ.u;
-         for (let vQ = 0; vQ < 3; vQ++) FQ[vQ] = qQ ? GQ(oQ[vQ], wQ[vQ], DQ[vQ], LQ[vQ], kQ) : oQ[vQ] + (DQ[vQ] - oQ[vQ]) * kQ
+       openMob(kk) {
+         return new Pk(this.current().openMob(kk))
```

#### 43. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L707-L709` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L226-L227) · [Before (L707-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L707-L709)

```diff
-       fovAt(QQ, FQ) {
-         var wQ;
-         return null !== (wQ = this.nodes[QQ].keyframe.fov) && void 0 !== wQ ? wQ : FQ
+       openPet(kk) {
+         return new Pk(this.current().openPet(kk))
```

#### 44. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L711-L714` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L229-L230) · [Before (L711-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L711-L714)

```diff
-       neighbour(QQ, FQ) {
-         const wQ = this.nodes.length - 1,
-           LQ = QQ + FQ;
-         return LQ >= 0 && LQ <= wQ ? LQ : this.loopMs <= 0 || wQ < 2 ? -1 : LQ < 0 ? wQ - 1 : 1
+       openMobLineup(kk) {
+         return new Pk(this.current().openMobLineup(kk))
```

#### 45. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L716-L723` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L232-L233) · [Before (L716-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L716-L723)

```diff
-       gapMs(QQ, FQ) {
-         const wQ = this.nodes.length - 1;
-         if (1 === FQ) {
-           const FQ = QQ === wQ ? 0 : QQ;
-           return this.nodes[FQ + 1].timeMs - this.nodes[FQ].timeMs
-         }
-         const LQ = 0 === QQ ? wQ : QQ;
-         return this.nodes[LQ].timeMs - this.nodes[LQ - 1].timeMs
+       openCharacter(kk, ek) {
+         return new mk(this.current().openCharacter(kk, ek))
```

#### 46. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L728` → after: `L246-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L246-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L246-L251) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L728)

```diff
-         this.nH = QQ, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = FQ => QQ.getEntityPosition(FQ), this.readAimPoint = FQ => QQ.getEntityAimPoint(FQ)
+         this.load = kk, this.loaded = null, this.loading = null
+       }
+       run(kk) {
+         return null !== this.loaded ? kk(this.loaded) : (this.loading ??= this.load().then((kk => (this.loaded = kk, kk)), (kk => {
+           throw this.loading = null, kk
+         })), this.loading.then(kk))
```

#### 47. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L730-L731` → after: `L253-L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L253-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L253-L256) · [Before (L730-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L730-L731)

```diff
-       aimPoint(QQ) {
-         return "string" !== typeof QQ ? (0, vQ.r)(QQ, 3) ? QQ : null : this.resolve(QQ, this.readAimPoint, this.lastAimPoints)
+     }
+     class Sk {
+       constructor() {
+         this.mobScene = new fk((() => Promise.all([ik.e(72), ik.e(230), ik.e(229), ik.e(250), ik.e(96), ik.e(251), ik.e(75), ik.e(74), ik.e(248), ik.e(73), ik.e(258), ik.e(252), ik.e(257), ik.e(255), ik.e(247), ik.e(272), ik.e(226), ik.e(242), ik.e(253), ik.e(256), ik.e(77), ik.e … [truncated]
```

#### 48. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L733-L735` → after: `L258-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L258-L259) · [Before (L733-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L733-L735)

```diff
-       currentAimPoint(QQ) {
-         const FQ = "string" === typeof QQ ? this.nH.getEntityAimPoint(QQ) : QQ;
-         return FQ && (0, vQ.r)(FQ, 3) ? FQ : null
+       openMob(kk) {
+         return this.mobScene.run((ek => ek.openMobPreview(kk)))
```

#### 49. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L737-L738` → after: `L261-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L261-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L261-L262) · [Before (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L737-L738)

```diff
-       feetPosition(QQ) {
-         return this.resolve(QQ, this.readFeet, this.lastFeet)
+       openPet(kk) {
+         return this.mobScene.run((ek => ek.openPetPreview(kk)))
```

#### 50. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L740-L744` → after: `L264-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L264-L265) · [Before (L740-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L740-L744)

```diff
-       heading(QQ) {
-         const FQ = this.nH.getEntityHeading(QQ);
-         if (null !== FQ && Number.isFinite(FQ)) return this.lastHeadings.set(QQ, FQ), FQ;
-         const wQ = this.lastHeadings.get(QQ);
-         return void 0 !== wQ ? wQ : QQ === this.nH.localPlayerId ? 0 : this.heading(this.nH.localPlayerId)
+       openMobLineup(kk) {
+         return this.mobScene.run((ek => ek.openMobLineupPreview(kk)))
```

#### 51. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L746-L749` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L267-L268) · [Before (L746-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L746-L749)

```diff
-       resolve(QQ, FQ, wQ) {
-         const LQ = FQ(QQ);
-         let qQ = wQ.get(QQ);
-         return LQ && (0, vQ.r)(LQ, 3) ? (qQ || (qQ = [0, 0, 0], wQ.set(QQ, qQ)), qQ[0] = LQ[0], qQ[1] = LQ[1], qQ[2] = LQ[2], qQ) : qQ || (QQ === this.nH.localPlayerId ? null : this.resolve(this.nH.localPlayerId, FQ, wQ))
+       openCharacter(kk, ek) {
+         return this.characterScene.run((ik => ik.openCharacterPreview(kk, ek)))
```

#### 52. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L754-L757` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L286) · [Before (L754-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L754-L757)

```diff
-       return {
-         heading: QQ.heading,
-         pitch: QQ.pitch
-       }
+       return bk.h.openMobLineup(kk)
```

#### 53. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L760-L761` → after: `L343-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L343-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L343-L345) · [Before (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L760-L761)

```diff
-     function TQ(QQ, FQ) {
-       Number.isFinite(QQ.heading) && Number.isFinite(QQ.pitch) || (0, qQ.h)(FQ, QQ)
+     function bk(kk) {
+       if ("Ii" in kk) return Ck.createAnimationScript(kk);
+       return new mk(kk).createAnimationScript()
```

#### 54. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L764-L783` → after: `L348-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L348-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L348-L350) · [Before (L764-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L764-L783)

```diff
-     function KQ(QQ, FQ, wQ, LQ, oQ) {
-       if (FQ) return void(0, qQ.j)(FQ, oQ);
-       const DQ = LQ.aimPoint(wQ);
-       DQ && (0, qQ.n)(QQ, DQ, oQ)
-     }
-     class zQ {
-       constructor(QQ, FQ, wQ, LQ) {
-         this.settings = QQ, this.nH = FQ, this.targets = wQ, this.base = void 0, this.base = NQ(LQ)
-       }
-       update(QQ, FQ, wQ) {
-         var LQ;
-         const qQ = this.settings;
-         (0, vQ.l)(qQ.position, wQ.position), KQ(qQ.position, qQ.lookDirection, null !== (LQ = qQ.lookAt) && void 0 !== LQ ? LQ : this.nH.localPlayerId, this.targets, this.base), FQ.apply(this.base, wQ), wQ.fov = YQ(qQ, this.nH)
-       }
-       continueFrom(QQ) {
-         QQ instanceof zQ && (0, qQ.h)(QQ.base, this.base)
- ... (4 more removed lines; see GitHub link above)
+     function rk(kk, ek, ik, fk) {
+       const Sk = kk.Ii <= 0 ? 1 : ek + ik * Math.max(0, fk) / kk.Ii;
+       return kk.zi === Dk.k.LoopOnLastFrame ? Sk % 1 : kk.zi === Dk.k.NoLoop && Sk >= 1 ? null : Math.min(1, Sk)
```

#### 55. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L786-L803` → after: `L353-L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L353-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L353-L362) · [Before (L786-L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L786-L803)

```diff
-       constructor(QQ, FQ, wQ, LQ) {
-         this.settings = QQ, this.nH = FQ, this.targets = wQ, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Qt = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin =  … [truncated]
-       }
-       update(QQ, FQ, wQ) {
-         var LQ, qQ, oQ;
-         const DQ = this.settings,
-           kQ = null !== (LQ = DQ.target) && void 0 !== LQ ? LQ : this.nH.localPlayerId,
-           mQ = this.targets.feetPosition(kQ);
-         let uQ = !1;
-         mQ && (uQ = this.foundFeet && cQ(this.lastFeet, mQ) > 32 + .1 * QQ, (0, vQ.l)(mQ, this.lastFeet), this.foundFeet = !0, this.placeGoal(mQ, kQ));
-         const HQ = null !== (qQ = DQ.smoothMs) && void 0 !== qQ ? qQ : 0;
-         !this.started || HQ < 1 || uQ ? ((0, vQ.l)(this.goal, this.smoothed), this.Qt.fill(0), this.started = !0) : xQ(this.smoothed, this.Qt, this.goal, HQ, QQ), uQ && (this.distance = -1), (0, vQ.l)(this.smoothed, wQ.position);
-         const bQ = !0 === DQ.avoidTerrain ? this.pullIn(kQ, QQ, wQ) : 1;
-         let AQ = this.goal;
-         if ("target" === DQ.offsetSpace) AQ = wQ.position;
-         else if (bQ < 1) {
- ... (2 more removed lines; see GitHub link above)
+       createAnimationScript(kk) {
+         const {
+           Ii: ek,
+           loop: ik,
+           Qi: Dk
+         } = kk;
+         return {
+           Ii: Math.round(ek),
+           zi: this.createLoopMode(null !== ik && void 0 !== ik && ik),
+           Qi: this.createNodeSkeletonAnimationScript(null !== Dk && void 0 !== Dk ? Dk : null)
```

#### 56. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L807-L840` → after: `L365-L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L365-L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L365-L372) · [Before (L807-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L807-L840)

```diff
-       continueFrom(QQ) {
-         QQ instanceof lQ && (0, LQ.z)(QQ.settings.target, this.settings.target) && ((0, qQ.h)(QQ.base, this.base), (0, vQ.l)(QQ.goal, this.goal), (0, vQ.l)(QQ.lastFeet, this.lastFeet), this.foundFeet = QQ.foundFeet, (0, vQ.l)(QQ.smoothed, this.smoothed), (0, vQ.l)(QQ.Qt, this.Qt) … [truncated]
-       }
-       reset(QQ) {
-         TQ(this.base, QQ), this.Qt.fill(0), this.started = !1, this.distance = -1
-       }
-       pullIn(QQ, FQ, wQ) {
-         const LQ = this.targets.aimPoint(QQ);
-         if (!LQ) return 1;
-         const qQ = wQ.position,
-           oQ = cQ(LQ, qQ);
-         if (!(oQ > 0)) return 1;
-         const DQ = this.toCamera;
-         for (let vQ = 0; vQ < 3; vQ++) DQ[vQ] = (qQ[vQ] - LQ[vQ]) / oQ;
-         const kQ = function(QQ, FQ, wQ) {
-           return QQ < 0 || FQ < QQ ? FQ : FQ + (QQ - FQ) * Math.exp(-wQ / 150)
- ... (18 more removed lines; see GitHub link above)
+       createLoopMode(kk) {
+         switch (kk) {
+           case !1:
+             return Dk.k.NoLoop;
+           case !0:
+             return Dk.k.LoopOnLastFrame;
+           case "hold-on-last-frame":
+             return Dk.k.HoldOnLastFrame
```

#### 57. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L842-L853` → after: `L374-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L374-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L374-L383) · [Before (L842-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L842-L853)

```diff
-         this.goal[0] = QQ[0] + LQ, this.goal[1] = QQ[1] + wQ[1], this.goal[2] = QQ[2] + qQ
-       }
-     }
-     class jQ {
-       constructor(QQ, FQ, wQ, LQ) {
-         var qQ, oQ;
-         this.settings = QQ, this.nH = FQ, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = QQ.keyframes.length > 0 ? new IQ(QQ.keyframes, null === (qQ = QQ.smooth) || void 0 === qQ || qQ, null !== (oQ = QQ.loop) && void 0  … [truncated]
-       }
-       update(QQ, FQ, wQ) {
-         this.elapsedMs += QQ;
-         const LQ = YQ(this.settings, this.nH);
-         this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, LQ, this.base) : this.base.fov = LQ, (0, vQ.l)(this.base.position, wQ.position), wQ.fov = this.base.fov, FQ.apply(this.base, wQ)
+         throw new Error(`Invalid loop mode schema: ${kk}`)
+       }
+       createNodeSkeletonAnimationScript(kk) {
+         if (null === kk) return null;
+         const ek = {};
+         for (const ik in kk) {
+           const Dk = kk[ik];
+           ek[ik] = this.createNodeAnimationScript(Dk)
+         }
+         return ek
```

#### 58. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L855-L856` → after: `L385-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L385-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L385-L392) · [Before (L855-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L855-L856)

```diff
-       continueFrom(QQ) {
-         QQ instanceof jQ && (0, LQ.z)(QQ.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = QQ.elapsedMs, (0, vQ.h)(QQ.base, this.base))
+       createNodeAnimationScript(kk) {
+         const {
+           timeline: ek
+         } = kk, ik = ek.filter((kk => Number.isFinite(kk.timeFraction)));
+         return ik.sort(((kk, ek) => kk.timeFraction - ek.timeFraction)), {
+           rotation: this.createTimelineFromKeyframes(ik, "rotation", xk),
+           position: this.createTimelineFromKeyframes(ik, "position", Uk)
+         }
```

#### 59. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L858-L859` → after: `L394-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L394-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L394-L415) · [Before (L858-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L858-L859)

```diff
-       reset(QQ) {
-         TQ(this.base, QQ), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
+       createTimelineFromKeyframes(kk, ek, ik) {
+         const Dk = [];
+         for (const Pk of kk) {
+           const kk = Pk[ek];
+           if (kk) {
+             const ek = this.createAnimationFrameWithoutPrecomputes(Pk.timeFraction, kk);
+             Mk(ek) && Dk.push(ek)
+           }
+         }
+         const fk = [];
+         for (let Pk = 0; Pk < Dk.length; Pk++) {
+           var Sk, bk, rk;
+           const kk = Dk[Pk],
+             ek = null !== (Sk = Dk[Pk - 1]) && void 0 !== Sk ? Sk : kk,
+             mk = null !== (bk = Dk[Pk + 1]) && void 0 !== bk ? bk : kk,
+             Mk = null !== (rk = Dk[Pk + 2]) && void 0 !== rk ? rk : mk;
+ ... (6 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L861-L867` → after: `L417-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L417-L418) · [Before (L861-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L861-L867)

```diff
-     }
- 
-     function aQ(QQ, FQ) {
-       return (0, LQ.D)(QQ, FQ)
-     }
-     class XQ {
-       constructor(QQ, FQ, wQ) {
+       createAnimationFrameWithoutPrecomputes(kk, ek) {
+         let ik, Dk, fk = null;
```

#### 61. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L869-L885` → after: `L420-L430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L420-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L420-L430) · [Before (L869-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L869-L885)

```diff
-         this.settings = QQ, this.nH = FQ, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
-         const qQ = null !== wQ && wQ.settings.mode === QQ.mode,
-           oQ = qQ ? wQ.pose : FQ.getDefaultPose();
-         this.pose = (0, vQ.h)(oQ, (0, vQ.m)()), this.lastGoodPose = (0, vQ.h)(qQ ? wQ.lastGoodPose : oQ, (0, vQ.m)()), this.look = new tQ(QQ.playerLook), this.targets = null !== (LQ = null === wQ || void 0 === wQ ? void 0 : wQ.targets) && void 0 !== LQ ? LQ : new UQ(FQ);
-         const DQ = (0, vQ.h)(oQ, (0, vQ.m)());
-         qQ && wQ.look.unapply(DQ, DQ), this.mode = function(QQ, FQ, wQ, LQ) {
-           switch (QQ.mode) {
-             case "fixed":
-               return new zQ(QQ, FQ, wQ, LQ);
-             case "follow":
-               return new lQ(QQ, FQ, wQ, LQ);
-             case "path":
-               return new jQ(QQ, FQ, wQ, LQ);
-             case "frame":
-               return new AQ(QQ, FQ, wQ, LQ)
-           }
- ... (1 more removed lines; see GitHub link above)
+         if ("object" === typeof ek && "point" in ek) fk = null !== (Sk = ek.Wi) && void 0 !== Sk ? Sk : null, ik = ek.point, Dk = ek.point;
+         else if ("object" === typeof ek && "pre" in ek) {
+           var bk;
+           fk = null !== (bk = ek.Wi) && void 0 !== bk ? bk : null, ik = ek.pre, Dk = ek.post
+         } else ik = ek, Dk = ek;
+         return {
+           timeFraction: kk,
+           Wi: this.createLerpMode(fk),
+           pre: ik,
+           post: Dk
+         }
```

#### 62. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L887-L888` → after: `L432-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L432-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L432-L433) · [Before (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L887-L888)

```diff
-       update(QQ, FQ) {
-         return this.look.update(QQ, FQ), this.mode.update(QQ, this.look, this.pose), (0, vQ.q)(this.pose) ? (0, vQ.h)(this.pose, this.lastGoodPose) : (this.warnedNonFinite || (console.warn("Scripted camera produced a non-finite pose; holding the last good one"), this.warnedNonFin … [truncated]
+       createLerpMode(kk) {
+         return null === kk ? Dk.h.Linear : Pk.LERP_MODE_SCHEMA_MAPPING[kk]
```

#### 63. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L891-L894` → after: `L436-L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L436-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L436-L439) · [Before (L891-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L891-L894)

```diff
- 
-     function fQ(QQ) {
-       return [0, 0, QQ[2], QQ[3]]
-     }
+     Pk.LERP_MODE_SCHEMA_MAPPING = {
+       linear: Dk.h.Linear,
+       "catmull-rom-spline": Dk.h.CatmullRomSpline
+     };
```

#### 64. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L897-L912` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L442) · [Before (L897-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L897-L912)

```diff
-         this.nH = QQ, this.settings = {
-           mode: "default"
-         }, this.pending = null, this.fade = new kQ, this.shot = null, this.blend = null, this.mixed = (0, vQ.m)(), this.output = (0, vQ.m)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
-           length: 3
-         }, (() => [0, 0, 0]))
-       }
-       setSettings(QQ) {
-         const FQ = (0, mQ.b)(QQ);
-         if ((0, LQ.z)(FQ, this.pending ? this.pending.settings : this.settings)) return;
-         const wQ = aQ(this.settings, FQ);
-         if (void 0 !== FQ.transition && !wQ) return this.pending = {
-           settings: FQ,
-           shot: "default" === FQ.mode ? null : new XQ(FQ, this.nH, null)
-         }, void this.fade.fadeOut(FQ.transition);
-         const qQ = null !== this.pending;
-         this.pending = null, !qQ && wQ || this.fade.fadeIn(LQ.o.minTransitionFadeMs), this.show(FQ, !1)
+         this.animationSchema = kk
```

#### 65. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L914-L931` → after: `L444-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L444-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L444-L453) · [Before (L914-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L914-L931)

```diff
-       show(QQ, FQ) {
-         var wQ, qQ;
-         if ((0, LQ.z)(QQ, this.settings)) return;
-         const DQ = !FQ && aQ(this.settings, QQ);
-         this.settings = QQ;
-         const kQ = null !== this.blend && this.blend.elapsedMs > 0,
-           mQ = (0, vQ.h)(this.hasOutput ? this.output : this.nH.getDefaultPose(), (0, vQ.m)());
-         if (this.shot = "default" === QQ.mode ? null : new XQ(QQ, this.nH, FQ ? null : this.shot), DQ) return;
-         const uQ = FQ || !this.shot && !this.hasOutput ? 0 : null !== (wQ = QQ.blendInMs) && void 0 !== wQ ? wQ : 0;
-         if (uQ <= 0) return void(this.blend = null);
-         const HQ = (0, oQ.p)(null !== (qQ = QQ.blendEasing) && void 0 !== qQ ? qQ : "easeInOut");
-         this.blend = {
-           from: mQ,
-           fromScripted: this.hasOutput,
-           headingDelta: NaN,
-           elapsedMs: 0,
- ... (2 more removed lines; see GitHub link above)
+       createAnimationScript() {
+         const {
+           animation_length: kk,
+           loop: ek,
+           bones: ik
+         } = this.animationSchema;
+         return {
+           Ii: Math.round(1e3 * kk),
+           zi: this.createLoopMode(null !== ek && void 0 !== ek && ek),
+           Qi: this.createNodeSkeletonAnimationScript(null !== ik && void 0 !== ik ? ik : null)
```

#### 66. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L934-L952` → after: `L456-L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L456-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L456-L463) · [Before (L934-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L934-L952)

```diff
-       getSettings() {
-         return this.settings
-       }
-       getScreenFade() {
-         return this.fade.getScreen()
-       }
-       getLoadingPositions() {
-         return this.loadingPositions
-       }
-       isActive() {
-         return null !== this.shot || null !== this.blend
-       }
-       update(QQ, FQ) {
-         const wQ = Number.isFinite(QQ) && QQ > 0 ? QQ : 0;
-         if (this.fade.advance(wQ) && null !== this.pending) {
-           const {
- ... (3 more removed lines; see GitHub link above)
+       createLoopMode(kk) {
+         switch (kk) {
+           case !1:
+             return Dk.k.NoLoop;
+           case !0:
+             return Dk.k.LoopOnLastFrame;
+           case "hold_on_last_frame":
+             return Dk.k.HoldOnLastFrame
```

#### 67. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L954-L958` → after: `L465-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L465-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L465-L472) · [Before (L954-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L954-L958)

```diff
-         this.loadingPositions.length = 0;
-         const LQ = this.pending;
-         if (null !== LQ && void 0 !== LQ && LQ.shot) {
-           const QQ = "path" === LQ.settings.mode ? 0 : wQ;
-           this.noteLoadingPosition(LQ.shot.update(QQ, vQ.d).position)
+         throw new Error(`Invalid Blockbench loop mode schema: ${kk}`)
+       }
+       createNodeSkeletonAnimationScript(kk) {
+         if (null === kk) return null;
+         const ek = {};
+         for (const ik in kk) {
+           const Dk = kk[ik];
+           ek[ik] = this.createNodeAnimationScript(Dk)
```

#### 68. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L960-L970` → after: `L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L474) · [Before (L960-L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L960-L970)

```diff
-         if (!this.isActive()) return this.hasOutput = !1, null;
-         const DQ = this.shot ? this.shot.update(wQ, FQ) : this.nH.getDefaultPose();
-         this.shot && this.noteLoadingPosition(DQ.position);
-         const kQ = this.blend;
-         if (!kQ) return this.writeOutput(DQ);
-         kQ.elapsedMs += wQ;
-         const mQ = Math.min(1, kQ.elapsedMs / kQ.durationMs);
-         if (kQ.headingDelta = Number.isFinite(kQ.headingDelta) ? (0, qQ.v)(kQ.headingDelta, DQ.heading - kQ.from.heading) : (0, qQ.s)(kQ.from.heading, DQ.heading), (0, vQ.t)(kQ.from, DQ, kQ.headingDelta, (0, oQ.l)(mQ, kQ.easing), this.mixed), mQ >= 1) {
-           if (this.blend = null, !this.shot) return this.hasOutput = !1, null
-         } else kQ.fromScripted && this.noteLoadingPosition(kQ.from.position);
-         return this.writeOutput(this.mixed)
+         return ek
```

#### 69. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L972-L975` → after: `L476-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L476-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L476-L483) · [Before (L972-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L972-L975)

```diff
-       noteLoadingPosition(QQ) {
-         if (QQ.every(Number.isFinite)) {
-           const FQ = this.loadingPositions;
-           FQ.push((0, vQ.l)(QQ, this.loadingSlots[FQ.length]))
+       createNodeAnimationScript(kk) {
+         const {
+           rotation: ek,
+           position: ik
+         } = kk;
+         return {
+           rotation: this.createAnimationTimeline(null !== ek && void 0 !== ek ? ek : null, wk, xk, !0),
+           position: this.createAnimationTimeline(null !== ik && void 0 !== ik ? ik : null, pk, Uk, !1)
```

#### 70. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L978-L1231` → after: `L486-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L486-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L486-L490) · [Before (L978-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L978-L1231)

```diff
-       writeOutput(QQ) {
-         const FQ = this.output;
-         (0, vQ.q)(QQ) ? (0, vQ.h)(QQ, FQ) : this.hasOutput || (0, vQ.h)(this.nH.getDefaultPose(), FQ), FQ.pitch = (0, qQ.g)(FQ.pitch);
-         const wQ = this.nH.getDefaultFov(),
-           oQ = Number.isFinite(wQ) && wQ > 0 && wQ < 180,
-           DQ = oQ ? Math.min(LQ.o.minFov, wQ) : LQ.o.minFov,
-           kQ = oQ ? Math.max(LQ.o.maxFov, wQ) : LQ.o.maxFov;
-         return FQ.fov = Number.isFinite(FQ.fov) ? Math.min(kQ, Math.max(DQ, FQ.fov)) : kQ, this.hasOutput = !0, FQ
-       }
-     }
-   },
-   38692: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       d: () => qQ,
-       h: () => kQ,
-       l: () => DQ,
- ... (238 more removed lines; see GitHub link above)
+       createAnimationTimeline(kk, ek, ik, Dk) {
+         if (null === kk) return [];
+         if (Array.isArray(kk)) {
+           kk = {
+             "0.0": kk
```

#### 71. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1233-L1243` → after: `L492-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L492-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L492-L508) · [Before (L1233-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1233-L1243)

```diff
-           return null
-         }(QQ, [AQ, ...tQ], YQ);
-         MQ !== AQ && function(QQ, FQ, LQ) {
-           DQ || (DQ = !0, Promise.resolve().then((() => wQ(1087))).then((wQ => {
-             let {
-               pA: qQ
-             } = wQ;
-             qQ(new Error("A canvas didn't take canvasTxt's font"), {
-               font: QQ,
-               iY: FQ,
-               drawnWith: null !== LQ && void 0 !== LQ ? LQ : "the kept font, scaled"
+         }
+         const fk = Object.entries(kk).map((kk => {
+           let [ik, Dk] = kk;
+           const fk = Number(ik) / this.animationSchema.animation_length;
+           return this.createAnimationFrameWithoutPrecomputes(fk, Dk, ek)
+         })).filter(Mk);
+         fk.sort(((kk, ek) => kk.timeFraction - ek.timeFraction)), Dk && function(kk) {
+           for (let ek = 1; ek < kk.length; ek++) {
+             const ik = kk[ek - 1].post,
+               Dk = kk[ek],
+               fk = yk(Dk.pre),
+               Sk = yk(Dk.post),
+               bk = Lk(ik, Dk.pre);
+             Lk(ik, fk) < bk && (kk[ek] = {
+               ...Dk,
+               pre: fk,
+ ... (1 more added lines; see GitHub link above)
```

#### 72. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1259-L1267` → after: `L524-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L524-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L524-L533) · [Before (L1259-L1267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1259-L1267)

```diff
-         return this.drawLines(QQ, FQ, LQ, kQ, vQ, mQ, YQ)
-       },
-       drawLines: function(QQ, FQ, wQ, qQ, oQ, DQ, kQ) {
-         const vQ = wQ + oQ,
-           mQ = qQ + DQ;
-         let uQ, HQ = qQ + DQ / 2 + kQ / 2;
-         "right" === this.align ? (uQ = vQ, QQ.textAlign = "right") : "left" === this.align ? (uQ = wQ, QQ.textAlign = "left") : (uQ = wQ + oQ / 2, QQ.textAlign = "center");
-         for (const LQ of FQ) {
-           QQ.measureText(LQ).width >= oQ && (FQ = FQ.replace(LQ, ""))
+         return Sk
+       }
+       createAnimationFrameWithoutPrecomputes(kk, ek, ik) {
+         let Dk, fk, Sk = null;
+         if ("object" === typeof ek && "post" in ek) {
+           var bk;
+           Sk = null !== (bk = ek.lerp_mode) && void 0 !== bk ? bk : null, fk = Hk(ek.post, ik), Dk = ek.pre ? Hk(ek.pre, ik) : fk
+         } else {
+           const kk = Hk(ek, ik);
+           fk = kk, Dk = kk
```

#### 73. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1302` → after: `L536-L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L536-L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L536-L539) · [Before (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1302)

```diff
-           height: tQ + AQ
+           timeFraction: kk,
+           Wi: this.createLerpMode(Sk),
+           pre: Dk,
+           post: fk
```

#### 74. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1329-L1363` → after: `L542-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L542-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L542-L543) · [Before (L1329-L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1329-L1363)

```diff
-     }
-   },
-   38657: (QQ, FQ, wQ) => {
-     function LQ(QQ, FQ) {
-       return FQ.set(QQ), FQ
-     }
-     wQ.d(FQ, {
-       b: () => LQ
-     })
-   },
-   38188: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => AQ,
-       d: () => xQ,
-       h: () => bQ,
-       k: () => uQ,
- ... (19 more removed lines; see GitHub link above)
+       createLerpMode(kk) {
+         return null === kk ? Dk.h.Linear : mk.LERP_MODE_SCHEMA_MAPPING[kk]
```

#### 75. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1368-L1376` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L548) · [Before (L1368-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1368-L1376)

```diff
-       return uQ(QQ, null, "a leaderboard's rows")
-     }
- 
-     function bQ(QQ, FQ) {
-       var wQ, LQ;
-       return null !== FQ && void 0 !== FQ ? FQ : {
-         status: null !== (wQ = QQ.status) && void 0 !== wQ ? wQ : "loading",
-         entries: null !== (LQ = QQ.entries) && void 0 !== LQ ? LQ : []
-       }
+       return Number.isFinite(kk.timeFraction) && Kk(kk.pre) && Kk(kk.post)
```

#### 76. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1379-L1380` → after: `L551-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L551-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L551-L552) · [Before (L1379-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1379-L1380)

```diff
-     function YQ(QQ, FQ) {
-       return "number" === typeof QQ && Number.isFinite(QQ) && QQ > 0 ? QQ : FQ
+     function Kk(kk) {
+       return Number.isFinite(kk[0]) && Number.isFinite(kk[1]) && Number.isFinite(kk[2])
```

#### 77. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1383-L1389` → after: `L555-L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L555-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L555-L560) · [Before (L1383-L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1383-L1389)

```diff
-     function xQ(QQ, FQ) {
-       const wQ = YQ(QQ.size, 1);
-       let LQ = YQ(QQ.width, YQ(2.5 * wQ, 2.5)),
-         qQ = YQ(QQ.height, YQ(3.75 * wQ, 3.75));
-       Number.isFinite(oQ * qQ / LQ) && Number.isFinite(DQ * LQ / qQ) || (LQ = 2.5, qQ = 3.75);
-       const kQ = qQ / LQ,
-         vQ = Math.max(1, Math.min(oQ, FQ / kQ));
+     function xk(kk, ek, ik, Dk, fk, Sk, bk, rk) {
+       const Pk = Sk - ek,
+         mk = Sk - Dk,
+         Mk = rk - Dk,
+         Kk = [null, null, null];
+       for (let xk = 0; xk < Kk.length; xk++) Kk[xk] = nk(kk[xk], ik[xk], fk[xk], bk[xk], Pk, Mk);
```

#### 78. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1391-L1396` → after: `L562-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L562-L563) · [Before (L1391-L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1391-L1396)

```diff
-         width: LQ,
-         height: qQ,
-         layoutWidth: Math.max(oQ, DQ / kQ),
-         layoutHeight: Math.max(DQ, oQ * kQ),
-         pixelWidth: Math.round(vQ),
-         pixelHeight: Math.round(Math.max(1, Math.min(FQ, vQ * kQ)))
+         Xi: mk,
+         Bi: Kk
```

#### 79. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1401-L1495` → after: `L568-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L568-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L568-L572) · [Before (L1401-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1401-L1495)

```diff
-       QQ.setTransform(1, 0, 0, 1, 0, 0), QQ.fillStyle = qQ.K.defaultNameTagBackground, QQ.fillRect(0, 0, FQ, wQ), QQ.scale(FQ / DQ.layoutWidth, wQ / DQ.layoutHeight), QQ.translate((DQ.layoutWidth - oQ) / 2, 0),
-         function(QQ, FQ, wQ, oQ) {
-           var DQ, uQ, HQ, bQ;
-           const {
-             top: YQ,
-             around: xQ,
-             showPlayerText: AQ,
-             localPlayerDbId: MQ
-           } = wQ, {
-             whiteUiText: GQ,
-             grayUiText: pQ,
-             yellowUiText: cQ
-           } = qQ.K;
-           QQ.textBaseline = "middle";
-           const CQ = function(FQ, wQ, LQ, qQ, oQ, DQ) {
-               let kQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
- ... (79 more removed lines; see GitHub link above)
+       return {
+         oi: fk.c.computeShortestRotation(kk, ik) / Sk,
+         Zi: fk.c.computeShortestRotation(ek, Dk) / bk,
+         delta: fk.c.computeShortestRotation(ek, ik)
+       }
```

#### 80. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1498-L1499` → after: `L575-L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L575-L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L575-L588) · [Before (L1498-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1498-L1499)

```diff
-     function tQ(QQ, FQ) {
-       return Array.isArray(QQ) ? QQ.slice(0, FQ).filter((QQ => QQ && Number.isFinite(QQ.rank) && Number.isFinite(QQ.value))) : []
+     function Uk(kk, ek, ik, Dk, fk, Sk, bk, rk) {
+       const Pk = Sk - ek,
+         mk = Sk - Dk,
+         Mk = rk - Dk,
+         Kk = [null, null, null];
+       for (let xk = 0; xk < Kk.length; xk++) Kk[xk] = {
+         oi: (fk[xk] - kk[xk]) / Pk,
+         Zi: (bk[xk] - ik[xk]) / Mk,
+         delta: fk[xk] - ik[xk]
+       };
+       return {
+         Xi: mk,
+         Bi: Kk
+       }
```

#### 81. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1503-L1509` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L592) · [Before (L1503-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1503-L1509)

```diff
-       const wQ = [];
-       let LQ = !1;
-       return QQ.forEach(((qQ, oQ) => {
-         if (null !== FQ && qQ.value === FQ.value) return void wQ.push(FQ.rank);
-         const DQ = oQ > 0 && qQ.value === QQ[oQ - 1].value;
-         DQ || (LQ = 0 === oQ && 1 !== qQ.rank), wQ.push(DQ && !LQ ? wQ[oQ - 1] : qQ.rank)
-       })), wQ
+       return null === ek ? kk : ek(kk)
```

#### 82. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1520` → after: `L596-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L596-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L596-L597) · [Before (L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1520)

```diff
-       return Array.from(QQ).length
+       const [ek, ik, Dk] = kk, bk = -(0, Sk.h)(ek), rk = -(0, Sk.h)(ik), Pk = (0, Sk.h)(Dk), mk = fk.c.quaternionFromEulerZYX(bk, rk, Pk);
+       return fk.c.eulerYXZFromQuaternion(mk)
```

#### 83. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1524-L1538` → after: `L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L606) · [Before (L1524-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1524-L1538)

```diff
-       const FQ = [""];
-       let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         qQ = "";
-       const oQ = () => {
-         FQ.push(""), wQ = 0, qQ = ""
-       };
-       for (const DQ of QQ.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
-         if (/^\r?\n$/.test(DQ)) oQ();
-         else if (/^\s+$/.test(DQ)) qQ += DQ;
-       else if (DQ.length > 0) {
-         const QQ = Array.from(DQ);
-         wQ > 0 && wQ + qQ.length + QQ.length > LQ && oQ(), FQ[FQ.length - 1] += qQ, wQ += qQ.length, qQ = "";
-         for (const qQ of QQ) wQ >= LQ && oQ(), FQ[FQ.length - 1] += qQ, wQ++
-       }
-       return FQ[FQ.length - 1] += qQ, FQ
+       return [-kk[0] * lk, kk[1] * lk, kk[2] * lk]
```

#### 84. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1550-L1556` → after: `L610-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L610-L611) · [Before (L1550-L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1550-L1556)

```diff
-       if (!QQ) return [...oQ];
-       try {
-         const [FQ, wQ, LQ] = qQ()(QQ).rgb().array();
-         return [FQ / 255, wQ / 255, LQ / 255]
-       } catch (FQ) {
-         return console.warn(`Invalid groundArrowPath colour "${QQ}":`, FQ), [...oQ]
-       }
+       const [ek, ik, Dk] = kk;
+       return [ek >= 0 ? Math.PI - ek : -Math.PI - ek, Yk(ik + Math.PI), Yk(Dk + Math.PI)]
```

#### 85. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1571-L1573` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L615) · [Before (L1571-L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1571-L1573)

```diff
-       var FQ;
-       const wQ = Math.min(screen.width, screen.height) * (null !== (FQ = (0, LQ.e)()) && void 0 !== FQ ? FQ : (0, qQ.j)());
-       return Math.max(window.innerHeight * (0, qQ.j)(), wQ) / (0, qQ.k)(QQ)
+       return fk.c.mod(kk + Math.PI, 2 * Math.PI) - Math.PI
```

#### 86. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1576-L1581` → after: `L618-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L618-L619) · [Before (L1576-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1576-L1581)

```diff
-     function vQ(QQ, FQ, wQ) {
-       return FQ / (2 * Math.tan(wQ / 2)) > DQ ? QQ : mQ(QQ)
-     }
- 
-     function mQ(QQ) {
-       return QQ.map((QQ => QQ.replace(oQ, "/textures/skyBoxes/$1/1024/$2")))
+     function Lk(kk, ek) {
+       return Math.abs(fk.c.computeShortestRotation(kk[0], ek[0])) + Math.abs(fk.c.computeShortestRotation(kk[1], ek[1])) + Math.abs(fk.c.computeShortestRotation(kk[2], ek[2]))
```

#### 87. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1584` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L623) · [Before (L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1584)

```diff
-   33921: (QQ, FQ, wQ) => {
+   36747: (kk, ek, ik) => {
```

#### 88. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L1592-L1737` → after: `L630-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L630-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/201.js#L630-L641) · [Before (L1592-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/201.js#L1592-L1737)

```diff
-     const LQ = {
-         default: {
-           type: "earth",
-           vertexTint: [137, 207, 240]
-         },
-         gloomy: {
-           type: "custom",
-           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
-           ny: "/textures/skyBoxes/gloomy/_ny.jpg",
-           nz: "/textures/skyBoxes/gloomy/_nz.jpg",
-           px: "/textures/skyBoxes/gloomy/_px.jpg",
-           py: "/textures/skyBoxes/gloomy/_py.jpg",
-           pz: "/textures/skyBoxes/gloomy/_pz.jpg"
-         },
-         interstellar: {
-           type: "custom",
- ... (130 more removed lines; see GitHub link above)
+     let Dk = function(kk) {
+         return kk[kk.Linear = 0] = "Linear", kk[kk.CatmullRomSpline = 1] = "CatmullRomSpline", kk
+       }({}),
+       fk = function(kk) {
+         return kk[kk.NoLoop = 0] = "NoLoop", kk[kk.LoopOnLastFrame = 1] = "LoopOnLastFrame", kk[kk.HoldOnLastFrame = 2] = "HoldOnLastFrame", kk
+       }({}),
+       Sk = function(kk) {
+         return kk[kk.Movement = 0] = "Movement", kk[kk.Action = 1] = "Action", kk[kk.Emote = 2] = "Emote", kk[kk.Custom = 3] = "Custom", kk
+       }({}),
+       bk = function(kk) {
+         return kk[kk.Start = 0] = "Start", kk[kk.Stop = 1] = "Stop", kk
+       }({})
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/202.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/202.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9)

#### 1. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/202.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/202.js#L4)

```diff
-   33928: (QQ, FQ, wQ) => {
+   41082: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L6-L15` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/202.js#L6) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/202.js#L6-L15)

```diff
-       animatedBlockTextures: () => vQ,
-       armourAtlasUrl: () => DQ,
-       averageColors: () => mQ,
-       blockAtlasUrls: () => oQ,
-       blockAtlasWidth: () => LQ,
-       buildHash: () => HQ,
-       builtTextureIndexFingerprint: () => uQ,
-       imagesPerAtlas: () => qQ,
-       outputHash: () => bQ,
-       rotatedBlockTextures: () => kQ
+       MobPreview: () => Kk
```

#### 3. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L17-L521` → after: `L8-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L8-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/202.js#L8-L141) · [Before (L17-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/202.js#L17-L521)

```diff
-     const LQ = 8,
-       qQ = [256, 256, 256, 256, 256, 256, 114],
-       oQ = [wQ(33932), wQ(33940), wQ(33943), wQ(33952), wQ(33958), wQ(33961), wQ(33965)],
-       DQ = wQ(33970),
-       kQ = {
-         "alloy_kiln_top[rot[1": wQ(33976),
-         "alloy_kiln_top[rot[2": wQ(33980),
-         "alloy_kiln_top[rot[3": wQ(33982),
-         "alloy_kiln_top[rot[4": wQ(33985),
-         "auto_bench_top[rot[1": wQ(33994),
-         "auto_bench_top[rot[2": wQ(33999),
-         "auto_bench_top[rot[3": wQ(34008),
-         "auto_bench_top[rot[4": wQ(34010),
-         "belt_tunnel_exit_top[rot[1": wQ(34017),
-         "belt_tunnel_exit_top[rot[2": wQ(34022),
-         "belt_tunnel_exit_top[rot[3": wQ(34028),
- ... (489 more removed lines; see GitHub link above)
+     var Dk = ik(60),
+       fk = ik(1021),
+       Sk = ik.n(fk),
+       bk = ik(41088),
+       rk = ik(33799),
+       Pk = ik(41093),
+       mk = ik(1066);
+ 
+     function Mk(kk) {
+       return rk.h.openMob(kk)
+     }
+     const Kk = (0, Dk.memo)((function(kk) {
+       let {
+         mobType: ek,
+         variation: ik = null,
+         animation: fk = Pk.g,
+ ... (118 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L524-L10900` → after: `L144-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L144-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/202.js#L144-L289) · [Before (L524-L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/202.js#L524-L10900)

```diff
-         Unloaded: [
-           [244, 0, 255],
-           [0, 0, 0]
-         ],
-         Dirt: [
-           [133, 98, 77],
-           [139, 102, 80],
-           [127, 92, 74]
-         ],
-         "Messy Dirt": [
-           [123, 87, 59],
-           [129, 90, 62],
-           [118, 81, 57]
-         ],
-         "Grass Block": [
-           [93, 141, 53],
- ... (10361 more removed lines; see GitHub link above)
+         player: Sk,
+         store: {
+           ...Sk,
+           radius: 33,
+           target: [0, 3.9, 0]
+         }
+       };
+ 
+     function rk(kk, ek) {
+       kk instanceof Promise ? kk.then(ek).catch((kk => {
+         console.error("Couldn't open the preview", kk)
+       })) : ek(kk)
+     }
+     class Pk {
+       constructor(kk) {
+         this.opened = null, this.view = null, this.size = null, this.closed = !1, rk(kk, (kk => {
+ ... (130 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/203.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/203.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd)

#### 1. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L4-L6` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/203.js#L4-L7) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/203.js#L4-L6)

```diff
-   35911: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       WasmTextureWorker: () => MQ
+   33828: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => fk,
+       d: () => Sk
```

#### 2. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L8-L11` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/203.js#L9) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/203.js#L8-L11)

```diff
-     var LQ = wQ(609),
-       qQ = wQ(3067),
-       oQ = wQ(35914),
-       DQ = wQ.n(oQ);
+     var Dk = ik(3218);
```

#### 3. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L14-L28` → after: `L12-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L12-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/203.js#L12-L117) · [Before (L14-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/203.js#L14-L28)

```diff
-       return DQ()('(()=>{var QQ={d:(FQ,wQ)=>{for(var LQ in wQ)QQ.o(wQ,LQ)&&!QQ.o(FQ,LQ)&&Object.defineProperty(FQ,LQ,{enumerable:!0,get:wQ[LQ]})},o:(QQ,FQ)=>Object.prototype.hasOwnProperty.call(QQ,FQ),r:QQ=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q … [truncated]
-     }
-     var vQ = wQ(35917),
-       mQ = wQ(3110),
-       uQ = wQ(3126),
-       HQ = wQ(3121),
-       bQ = wQ(3086);
- 
-     function YQ(QQ) {
-       return "" === QQ ? [] : QQ.split("\0")
-     }
- 
-     function xQ(QQ) {
-       if ("" !== QQ)
-         for (const FQ of QQ.split("\n")) console.error(FQ)
+       if ("undefined" === typeof BroadcastChannel) return null;
+       const kk = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
+       try {
+         const ek = new BroadcastChannel(Dk.m);
+         ek.postMessage({
+           stored: kk
+         }), ek.close()
+       } catch {
+         return null
+       }
+       return kk
+     }
+ 
+     function Sk(kk) {
+       const ek = "object" === typeof kk && null !== kk ? kk.stored : null;
+       return "string" === typeof ek ? ek : null
+ ... (90 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L32-L42` → after: `L121-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L121-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/203.js#L121-L132) · [Before (L32-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/203.js#L32-L42)

```diff
-       return async function(QQ, FQ) {
-         const wQ = Object.keys(QQ),
-           LQ = [],
-           qQ = new Map,
-           oQ = new Uint32Array(wQ.length);
-         for (const [DQ, kQ] of wQ.entries()) {
-           const {
-             url: FQ
-           } = QQ[kQ];
-           qQ.has(FQ) || (qQ.set(FQ, LQ.length), LQ.push(FQ)), oQ[DQ] = qQ.get(FQ)
-         }
+       if (null === kk || "player" === ek || !Uk(kk)) return kk;
+       const ik = {
+         ...kk
+       };
+       return kk.textureOverrides && (ik.textureOverrides = lk(kk.textureOverrides, Sk, "texture")), kk.modelOverrides && (ik.modelOverrides = lk(kk.modelOverrides, Sk, "model")), kk.skyBoxes && (ik.skyBoxes = lk(kk.skyBoxes, bk, "sky")), kk.customCss && (ik.customCss = function(k … [truncated]
+         const ek = kk => lk(kk, (kk => "string" === typeof kk && !nk(kk)), "CSS"),
+           {
+             fontFaces: ik,
+             classStyles: Dk
+           } = wk(kk) ? kk : {},
+           fk = {};
+         for (const [Sk, bk] of Object.entries(wk(Dk) ? Dk : {})) fk[Sk] = ek(bk);
```

#### 5. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L44-L86` → after: `L134-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L134-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/203.js#L134-L182) · [Before (L44-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/203.js#L44-L86)

```diff
-           sources: await FQ(LQ),
-           names: wQ.join("\0"),
-           sourceOfName: oQ
-         }
-       }(QQ, (async QQ => {
-         const wQ = await async function(QQ, FQ) {
-           const wQ = new AbortController,
-             LQ = () => {
-               wQ.abort()
-             };
-           FQ.addEventListener("abort", LQ);
-           try {
-             const FQ = await Promise.all(QQ.map((async QQ => {
-               try {
-                 const FQ = await fetch(QQ, {
-                   signal: wQ.signal
- ... (27 more removed lines; see GitHub link above)
+           fontFaces: (Array.isArray(ik) ? ik : []).map(ek),
+           classStyles: fk
+         }
+       }(kk.customCss)), ik
+     }
+ 
+     function wk(kk) {
+       return "object" === typeof kk && null !== kk && !Array.isArray(kk)
+     }
+ 
+     function lk(kk, ek, ik) {
+       const Dk = Object.entries(wk(kk) ? kk : {}),
+         fk = Dk.filter((kk => {
+           let [, ik] = kk;
+           return !ek(ik)
+         }));
+ ... (33 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L89-L97` → after: `L185-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L185-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/203.js#L185-L232) · [Before (L89-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/203.js#L89-L97)

```diff
-         this.worker = QQ, this.failure = void 0, this.abandonStep = null, QQ.addEventListener("error", (QQ => {
-           QQ.preventDefault(), this.failure ??= eQ(QQ)
-         }))
-       }
-       static async generateRequired(QQ, FQ, wQ, oQ) {
-         let DQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uQ.e,
-           mQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
-         const bQ = (0, vQ.k)();
-         if (null !== bQ) throw tQ(new uQ.p(uQ.l.Load, bQ), !1);
+         this.host = kk, this.ready = void 0, this.state = nk, this.playerPack = null, this.onGamePack = !1, this.confirmGamePack = null, this.skippedKey = null, this.ownAnnouncements = new Set, this.listeners = new Map, this.ownListeners = new Set, this.changes = 0, this.picks =  … [truncated]
+       }
+       readyWithin(kk) {
+         return Promise.race([this.ready, new Promise((ek => {
+           setTimeout(ek, kk)
+         }))])
+       }
+       current() {
+         return this.state
+       }
+       playerState() {
+         return {
+           pack: this.playerPack,
+           gameSource: null
+         }
+       }
+ ... (32 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L99` → after: `L234-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L234-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/203.js#L234-L247) · [Before (L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/203.js#L99)

```diff
-         const eQ = new AbortController;
+         const rk = function(kk) {
+           let ek;
+           const ik = new Promise(((ik, Dk) => {
+             ek = setTimeout((() => {
+               Dk(new Error(`no answer in ${kk} ms`))
+             }), kk)
+           }));
+           return ik.catch((() => {})), {
+             passed: ik,
+             clear: () => {
+               clearTimeout(ek)
+             }
+           }
+         }(2e4);
```

#### 8. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L101-L205` → after: `L249-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L249-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/203.js#L249-L286) · [Before (L101-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/203.js#L101-L205)

```diff
-           YQ = new MQ(function() {
-             try {
-               return new kQ
-             } catch (QQ) {
-               throw new uQ.p(uQ.l.Load, `the texture worker failed to start: ${(0,HQ.e)(QQ)}`)
-             }
-           }());
-           const bQ = (0, vQ.b)().catch((QQ => {
-               throw new uQ.p(uQ.l.Load, function(QQ) {
-                 return `the texture module didn't load (${(0,HQ.e)(QQ)})`
-               }(QQ))
-             })),
-             tQ = (async () => {
-               const oQ = function(QQ, FQ, wQ) {
-                 const LQ = [],
-                   qQ = new Map,
- ... (89 more removed lines; see GitHub link above)
+           const kk = await Promise.race([ek.packKey(Sk), rk.passed]);
+           if (null !== kk && this.onGamePack && this.state.gameSource === kk) return;
+           if (null !== kk && kk === this.skippedKey) return void(this.aU || this.picks !== fk || this.usePlayerPack());
+           bk = null === kk ? null : await Promise.race([Hk(Sk, kk, ek), rk.passed])
+         } catch (Kk) {
+           const kk = !this.aU && this.picks === fk && this.holdsOtherGamePack(Sk);
+           return this.host.warn(`the texture pack of ${Sk} didn't load: ${kk?"the player's own shows":"the pack in play stays"}`, Kk), void(kk && this.usePlayerPack())
+         } finally {
+           rk.clear()
+         }
+         if (this.aU || this.picks !== fk) return;
+         null !== bk && (0, mk.f)(bk.pack) && (this.host.warn(`the texture pack of ${Sk} names files on other sites: the player's own shows`, null), bk = null);
+         const Pk = null === bk || await this.confirmed(bk.pack, Sk) ? null : bk.key;
+         this.aU || this.picks !== fk || (null !== Pk && (this.skippedKey = Pk, bk = null), null === bk ? this.usePlayerPack() : (this.onGamePack = !0, this.change({
+           pack: bk.pack,
+           gameSource: bk.key
+ ... (22 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L208-L233` → after: `L289-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L289-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/203.js#L289-L323) · [Before (L208-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/203.js#L208-L233)

```diff
-           QQ = await this.request({
-             type: "optional"
-           }, [])
-         } catch (FQ) {
-           throw tQ(FQ, !0)
-         } finally {
-           this.terminate()
-         }
-         return xQ(QQ.warnings),
-           function(QQ) {
-             let {
-               blocks: FQ,
-               counts: wQ,
-               values: LQ
-             } = QQ;
-             const qQ = {};
- ... (10 more removed lines; see GitHub link above)
+           ik = await this.host.store.getItem(bk.e, !0)
+         } catch (fk) {
+           return void this.host.warn("the stored texture pack didn't read again: the pack in play stays", fk)
+         }
+         if (this.aU || this.ownChanges !== ek) return;
+         const Dk = lk(ik);
+         (0, xk.e)(Dk, this.playerPack) || (this.ownChanges++, this.setOwn(Dk), this.onGamePack || this.change({
+           pack: Dk,
+           gameSource: null
+         }, !1))
+       }
+       joinedWithout() {
+         this.picks++
+       }
+       dispose() {
+         this.aU = !0, this.listeners.clear()
+ ... (19 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L235-L268` → after: `L325-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L325-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/203.js#L325-L389) · [Before (L235-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/203.js#L235-L268)

```diff
-         this.worker.terminate(), null === (QQ = this.abandonStep) || void 0 === QQ || QQ.call(this)
-       }
-       request(QQ, FQ, wQ) {
-         return new Promise(((LQ, qQ) => {
-           if (void 0 !== this.failure) return void qQ(this.failure);
-           let oQ = uQ.t.None,
-             DQ = 0,
-             kQ = null;
-           const vQ = () => {
-             var QQ;
-             null === (QQ = kQ) || void 0 === QQ || QQ.stop(), this.abandonStep = null, this.worker.onmessage = null, this.worker.onerror = null, this.worker.onmessageerror = null
-           };
-           this.abandonStep = () => {
-             vQ(), qQ(new Error("the texture worker was terminated"))
-           }, this.worker.onmessage = FQ => {
-             let {
- ... (18 more removed lines; see GitHub link above)
+         null === kk || this.aU || this.changes > 0 || this.picks > 0 || ((0, mk.f)(kk.pack) ? this.host.warn("the custom game's texture pack names files on other sites: the player's own shows", null) : (this.onGamePack = !0, this.state = {
+           pack: kk.pack,
+           gameSource: null !== (ek = kk.source) && void 0 !== ek ? ek : ""
+         }))
+       }
+       takeStoredOwn(kk) {
+         if (this.playerPicked || this.aU) return;
+         if (this.ownChanges++, this.setOwn(lk(kk)), this.onGamePack) return;
+         const ek = {
+           pack: this.playerPack,
+           gameSource: null
+         };
+         0 === this.changes ? this.state = ek : this.change(ek, !1)
+       }
+       async update() {
+         const kk = this.playerPack,
+ ... (49 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L270-L274` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/203.js#L391) · [Before (L270-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/203.js#L270-L274)

```diff
-             this.worker.postMessage(QQ, FQ), kQ = (0, uQ.u)((() => {
-               vQ();
-               const FQ = new uQ.p("required" === QQ.type ? `${uQ.l.Stalled}${oQ}` : uQ.l.Optional, GQ("the texture worker stopped responding", DQ));
-               qQ(FQ)
-             }))
+             kk(this.state)
```

#### 12. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L276` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/203.js#L393) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/203.js#L276)

```diff
-             vQ(), qQ(mQ)
+             this.host.warn("a texture pack listener threw", ek)
```
