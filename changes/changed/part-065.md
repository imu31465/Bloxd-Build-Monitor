# Changed — Bundle Modifications Report (Part 065 / 082)

- **Updated at**: `2026-11-28T02:07 JST`
- **Part**: `65 / 82` (**401** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 064](part-064.md) · [Part 066 →](part-066.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (u88b9b.1969c480 → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (156 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab)

#### 59. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L779-L780` → after: `L779-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L779-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L779-L780) · [Before (L779-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L779-L780)

```diff
-         this.replay.setSessionProperties(this.frustration.tags(), !1), this.replay.addReplayMarker(ye.h.frustration, {
-           signal: Xi.e.indexOf(ee)
+         this.replay.setSessionProperties(this.frustration.tags(), !1), this.replay.addReplayMarker(mW.l.frustration, {
+           signal: ji.h.indexOf(WW)
```

#### 60. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L792` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L792) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L792)

```diff
-         if (0 === this.moveSubscriptions.length && (null !== (ee = null === (ie = this.currentStay) || void 0 === ie ? void 0 : ie.ladder.furthestStepIndex) && void 0 !== ee ? ee : 1 / 0) < Wi) {
+         if (0 === this.moveSubscriptions.length && (null !== (WW = null === (iW = this.currentStay) || void 0 === iW ? void 0 : iW.ladder.furthestStepIndex) && void 0 !== WW ? WW : 1 / 0) < Yi) {
```

#### 61. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L796)

```diff
-           this.moveSubscriptions = [Mi.h.subscribe("usedKeyboard", ee), Mi.h.subscribe("stickMoved", ee)]
+           this.moveSubscriptions = [Ni.l.subscribe("usedKeyboard", WW), Ni.l.subscribe("stickMoved", WW)]
```

#### 62. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L800)

```diff
-         for (const ee of this.moveSubscriptions) Mi.h.unsubscribe(ee);
+         for (const WW of this.moveSubscriptions) Ni.l.unsubscribe(WW);
```

#### 63. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L809)

```diff
-       return null !== (ie = Di.find((ie => ee.includes(ie)))) && void 0 !== ie ? ie : "none"
+       return null !== (iW = Hi.find((iW => WW.includes(iW)))) && void 0 !== iW ? iW : "none"
```

#### 64. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L863` → after: `L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L863) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L863)

```diff
-             return Ai(ie.lastHitchAtMs, ee.nowMs, 15e3) && be.push("quit_after_hitch"), Ai(ie.lastDeathAtMs, ee.nowMs, 15e3) && be.push("quit_after_death"), ee.loading ? be.push("quit_during_load") : "page" !== ee.quitFrom || ee.inGame && !ee.menuOpen || be.push("quit_in_menu"),  … [truncated]
+             return ui(iW.lastHitchAtMs, WW.nowMs, 15e3) && EW.push("quit_after_hitch"), ui(iW.lastDeathAtMs, WW.nowMs, 15e3) && EW.push("quit_after_death"), WW.loading ? EW.push("quit_during_load") : "page" !== WW.quitFrom || WW.inGame && !WW.menuOpen || EW.push("quit_in_menu"),  … [truncated]
```

#### 65. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L867)

```diff
-             return Ai(ie.lastDeathAtMs, ee, 1e4) || Ai(null !== (He = ie.lastErrorAtMs) && void 0 !== He ? He : null, ee, 1e4)
+             return ui(iW.lastDeathAtMs, WW, 1e4) || ui(null !== (OW = iW.lastErrorAtMs) && void 0 !== OW ? OW : null, WW, 1e4)
```

#### 66. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L878-L879` → after: `L878-L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L878-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L878-L879) · [Before (L878-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L878-L879)

```diff
-         ie.includes("quit_during_load") && (ye.last_load_step = null !== (be = this.lastLoadStep) && void 0 !== be ? be : "none");
-         null !== ee.gameName && (ye.game_name_with_variation = ee.gameName, ye.game_name = (0, Qe.Xb)(ee.gameName));
+         iW.includes("quit_during_load") && (mW.last_load_step = null !== (EW = this.lastLoadStep) && void 0 !== EW ? EW : "none");
+         null !== WW.gameName && (mW.game_name_with_variation = WW.gameName, mW.game_name = (0, QW.Tb)(WW.gameName));
```

#### 67. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L988` → after: `L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L988) · [Before (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L988)

```diff
-     var ai = He(7142);
+     var ei = OW(7502);
```

#### 68. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1003-L1004` → after: `L1003-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1003-L1004) · [Before (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1003-L1004)

```diff
-             in_game: "inGame" === yi.e.get("gameState"),
-             menu_open: (0, oi.o)(),
+             in_game: "inGame" === mi.d.get("gameState"),
+             menu_open: (0, ti.l)(),
```

#### 69. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1007` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1007) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1007)

```diff
-         })), Mi.h.subscribe("leaveGame", (() => {
+         })), Ni.l.subscribe("leaveGame", (() => {
```

#### 70. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1015` → after: `L1015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1015) · [Before (L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1015)

```diff
-         const ye = (0, Ki.e)().gameNameWithVariation;
+         const mW = (0, Pi.d)().gameNameWithVariation;
```

#### 71. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1017-L1018` → after: `L1017-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1017-L1018) · [Before (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1017-L1018)

```diff
-         const be = null !== (ie = (0, ai.g)(ee)) && void 0 !== ie ? ie : ee;
-         this.counts.set(be, (null !== (He = this.counts.get(be)) && void 0 !== He ? He : 0) + 1), this.timer ??= setTimeout((() => {
+         const EW = null !== (iW = (0, ei.g)(WW)) && void 0 !== iW ? iW : WW;
+         this.counts.set(EW, (null !== (OW = this.counts.get(EW)) && void 0 !== OW ? OW : 0) + 1), this.timer ??= setTimeout((() => {
```

#### 72. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1036` → after: `L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1036) · [Before (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1036)

```diff
-           game_name: null === this.game ? null : (0, Qe.Xb)(this.game),
+           game_name: null === this.game ? null : (0, QW.Tb)(this.game),
```

#### 73. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1042` → after: `L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1042) · [Before (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1042)

```diff
-     var xi = He(153);
+     var gi = OW(154);
```

#### 74. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1046` → after: `L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1046) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1046)

```diff
-       return null !== (ie = null === (He = xi.k[ee]) || void 0 === He ? void 0 : He.toLowerCase()) && void 0 !== ie ? ie : String(ee)
+       return null !== (iW = null === (OW = gi.k[WW]) || void 0 === OW ? void 0 : OW.toLowerCase()) && void 0 !== iW ? iW : String(WW)
```

#### 75. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1154` → after: `L1154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1154) · [Before (L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1154)

```diff
-         this.replay = ee, this.quitContext = ie, this.settings = yi.e.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
+         this.replay = WW, this.quitContext = iW, this.settings = mi.d.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
```

#### 76. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1157` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1157) · [Before (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1157)

```diff
-         Mi.h.subscribe("purchaseStarted", (ee => {
+         Ni.l.subscribe("purchaseStarted", (WW => {
```

#### 77. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1164` → after: `L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1164) · [Before (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1164)

```diff
-         })), Mi.h.subscribe("purchaseEnded", (ee => {
+         })), Ni.l.subscribe("purchaseEnded", (WW => {
```

#### 78. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1171` → after: `L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1171) · [Before (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1171)

```diff
-         })), Mi.h.subscribe("adRequested", (ee => {
+         })), Ni.l.subscribe("adRequested", (WW => {
```

#### 79. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1181` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1181) · [Before (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1181)

```diff
-         })), Mi.h.subscribe("appManagerUpdated|soundOnFromAd", (ee => {
+         })), Ni.l.subscribe("appManagerUpdated|soundOnFromAd", (WW => {
```

#### 80. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1183-L1184` → after: `L1183-L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1183-L1184) · [Before (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1183-L1184)

```diff
-         })), Mi.h.subscribe("appManagerUpdated|clientEscMenuOptions", (ee => {
-           yi.e.isApplyingDefaults ? this.settings = ee : this.onSettingsChanged(ee)
+         })), Ni.l.subscribe("appManagerUpdated|clientEscMenuOptions", (WW => {
+           mi.d.isApplyingDefaults ? this.settings = WW : this.onSettingsChanged(WW)
```

#### 81. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1192-L1193` → after: `L1192-L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1192-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1192-L1193) · [Before (L1192-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1192-L1193)

```diff
-           ad_kind: null !== (ee = null === ye || void 0 === ye ? void 0 : ye.adKind) && void 0 !== ee ? ee : "unknown",
-           provider: null !== (ie = null === ye || void 0 === ye ? void 0 : ye.provider) && void 0 !== ie ? ie : null,
+           ad_kind: null !== (WW = null === mW || void 0 === mW ? void 0 : mW.adKind) && void 0 !== WW ? WW : "unknown",
+           provider: null !== (iW = null === mW || void 0 === mW ? void 0 : mW.provider) && void 0 !== iW ? iW : null,
```

#### 82. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1210` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1210) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1210)

```diff
-           in_game: "inGame" === yi.e.get("gameState")
+           in_game: "inGame" === mi.d.get("gameState")
```

#### 83. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1228-L1229` → after: `L1228-L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1228-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1228-L1229) · [Before (L1228-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1228-L1229)

```diff
-       switch ((0, Ge.z)(ee)) {
-         case re.e.DISCORD_GUILD:
+       switch ((0, zW.A)(WW)) {
+         case FW.b.DISCORD_GUILD:
```

#### 84. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1231)

```diff
-         case re.e.DISCORD_DM:
+         case FW.b.DISCORD_DM:
```

#### 85. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1234` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1234) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1234)

```diff
-           return (0, Ge.K)(ee) ? "public" : "private"
+           return (0, zW.R)(WW) ? "public" : "private"
```

#### 86. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1252)

```diff
-             Mi.h.yR("sessionReplayGameQuit", {
+             Ni.l.iZ("sessionReplayGameQuit", {
```

#### 87. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1254)

```diff
-               gameName: "string" === typeof ye ? ye : null
+               gameName: "string" === typeof mW ? mW : null
```

#### 88. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1257-L1258` → after: `L1257-L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1257-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1257-L1258) · [Before (L1257-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1257-L1258)

```diff
-           isMenuOpen: oi.o,
-           isJoinAbandoned: Ji.i,
+           isMenuOpen: ti.l,
+           isJoinAbandoned: wi.f,
```

#### 89. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1263-L1264` → after: `L1263-L1264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1263-L1264) · [Before (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1263-L1264)

```diff
-             isTouchScreen: () => yi.e.get("isTouchScreen"),
-             getInputDevice: () => yi.e.get("activeInputDevice"),
+             isTouchScreen: () => mi.d.get("isTouchScreen"),
+             getInputDevice: () => mi.d.get("activeInputDevice"),
```

#### 90. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1268` → after: `L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1268) · [Before (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1268)

```diff
-               Mi.h.yR("sessionReplayStayProgress", ee)
+               Ni.l.iZ("sessionReplayStayProgress", WW)
```

#### 91. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1274` → after: `L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1274) · [Before (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1274)

```diff
-         const ee = (0, Ri.c)(),
+         const WW = (0, Zi.e)(),
```

#### 92. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1277` → after: `L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1277) · [Before (L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1277)

```diff
-         const He = yi.e.get("gameState");
+         const OW = mi.d.get("gameState");
```

#### 93. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1281` → after: `L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1281) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1281)

```diff
-           this.qE()
+           this.Hk()
```

#### 94. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1292` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1292) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1292)

```diff
-           const ye = null !== (ie = null === (He = this.flows.stay) || void 0 === He ? void 0 : He.playableAtMs) && void 0 !== ie ? ie : null;
+           const mW = null !== (iW = null === (OW = this.flows.stay) || void 0 === OW ? void 0 : OW.playableAtMs) && void 0 !== iW ? iW : null;
```

#### 95. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1301` → after: `L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1301) · [Before (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1301)

```diff
-         Mi.h.subscribe("joinedGame", (ee => {
+         Ni.l.subscribe("joinedGame", (WW => {
```

#### 96. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1306-L1307` → after: `L1306-L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1306-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1306-L1307) · [Before (L1306-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1306-L1307)

```diff
-           (0, Ji.i)() || this.onJoinedGame(ie, He)
-         })), Mi.h.subscribe("leaveGame", (() => {
+           (0, wi.f)() || this.onJoinedGame(iW, OW)
+         })), Ni.l.subscribe("leaveGame", (() => {
```

#### 97. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1309` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1309) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1309)

```diff
-           const He = null !== (ee = null === (ie = this.flows.stay) || void 0 === ie ? void 0 : ie.name) && void 0 !== ee ? ee : null;
+           const OW = null !== (WW = null === (iW = this.flows.stay) || void 0 === iW ? void 0 : iW.name) && void 0 !== WW ? WW : null;
```

#### 98. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1311` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1311) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1311)

```diff
-         })), Mi.h.subscribe("replayViewer|replayLoaded", (() => {
+         })), Ni.l.subscribe("replayViewer|replayLoaded", (() => {
```

#### 99. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1314)

```diff
-         })), Mi.h.subscribe("matchmakeAndPlayStepCompleted", (ee => {
+         })), Ni.l.subscribe("matchmakeAndPlayStepCompleted", (WW => {
```

#### 100. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1319` → after: `L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1319) · [Before (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1319)

```diff
-         })), Mi.h.subscribe("leftPlayPage", (() => {
+         })), Ni.l.subscribe("leftPlayPage", (() => {
```

#### 101. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1321` → after: `L1321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1321) · [Before (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1321)

```diff
-         })), Mi.h.subscribe("joinFailed", (ee => {
+         })), Ni.l.subscribe("joinFailed", (WW => {
```

#### 102. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1329` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1329) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1329)

```diff
-             game_name_with_variation: (0, Ki.e)().requestedGameNameWithVariation,
+             game_name_with_variation: (0, Pi.d)().requestedGameNameWithVariation,
```

#### 103. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1332` → after: `L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1332) · [Before (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1332)

```diff
-         })), Mi.h.subscribe("kickedForAfk", (() => {
+         })), Ni.l.subscribe("kickedForAfk", (() => {
```

#### 104. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1334-L1335` → after: `L1334-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1334-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1334-L1335) · [Before (L1334-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1334-L1335)

```diff
-           this.leaves.kickedForAfk(null !== (ee = null === (ie = this.flows.stay) || void 0 === ie ? void 0 : ie.name) && void 0 !== ee ? ee : null)
-         })), Mi.h.subscribe("unwantedLeftGame", (ee => {
+           this.leaves.kickedForAfk(null !== (WW = null === (iW = this.flows.stay) || void 0 === iW ? void 0 : iW.name) && void 0 !== WW ? WW : null)
+         })), Ni.l.subscribe("unwantedLeftGame", (WW => {
```

#### 105. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1342)

```diff
-         })), Mi.h.subscribe("appManagerUpdated|gameState", (ee => {
+         })), Ni.l.subscribe("appManagerUpdated|gameState", (WW => {
```

#### 106. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1344` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1344) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1344)

```diff
-             entry_source: yi.e.get("gameEntrySource")
+             entry_source: mi.d.get("gameEntrySource")
```

#### 107. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1348)

```diff
-         })), Mi.h.subscribe("appManagerUpdated|gameEntrySource", (ee => {
+         })), Ni.l.subscribe("appManagerUpdated|gameEntrySource", (WW => {
```

#### 108. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1352` → after: `L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1352) · [Before (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1352)

```diff
-         })), Mi.h.subscribe("sessionReplayPlayerKill", (ee => {
+         })), Ni.l.subscribe("sessionReplayPlayerKill", (WW => {
```

#### 109. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1362)

```diff
-         (0, Ji.i)() || (0, Ki.g)() || (null === this.flows.stay && this.joinConnectedGame(), this.replay.capture("game_playable", {
+         (0, wi.f)() || (0, Pi.f)() || (null === this.flows.stay && this.joinConnectedGame(), this.replay.capture("game_playable", {
```

#### 110. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1368)

```diff
-         if ((0, Ki.g)()) return;
+         if ((0, Pi.f)()) return;
```

#### 111. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1372` → after: `L1372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1372) · [Before (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1372)

```diff
-         } = (0, Ki.e)();
+         } = (0, Pi.d)();
```

#### 112. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1377-L1379` → after: `L1377-L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1377-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1377-L1379) · [Before (L1377-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1377-L1379)

```diff
-         const He = (0, Ge.K)(ie),
-           ye = yi.e.get("gameEntrySource");
-         this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, ee, "autoReconnect" === ye || "manualReconnect" === ye), "inGame" === yi.e.get("gameState") && this.flows.gamePlayable();
+         const OW = (0, zW.R)(iW),
+           mW = mi.d.get("gameEntrySource");
+         this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, WW, "autoReconnect" === mW || "manualReconnect" === mW), "inGame" === mi.d.get("gameState") && this.flows.gamePlayable();
```

#### 113. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1382` → after: `L1382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1382) · [Before (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1382)

```diff
-             game_name: (0, Qe.Xb)(ee),
+             game_name: (0, QW.Tb)(WW),
```

#### 114. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1385-L1386` → after: `L1385-L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1385-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1385-L1386) · [Before (L1385-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1385-L1386)

```diff
-             game_analytics_id: (0, ei.c)(ee, He),
-             is_custom_game: (0, ii.k)(ee),
+             game_analytics_id: (0, Wi.e)(WW, OW),
+             is_custom_game: (0, ii.i)(WW),
```

#### 115. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1395` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1395) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1395)

```diff
-           $screen_name: Me.is_custom_game ? `custom: ${Me.game_analytics_id}` : Me.game_name
+           $screen_name: NW.is_custom_game ? `custom: ${NW.game_analytics_id}` : NW.game_name
```

#### 116. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1425` → after: `L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1425) · [Before (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1425)

```diff
-             }), this.replay.addReplayMarker(ye.h.death, Me)
+             }), this.replay.addReplayMarker(mW.l.death, NW)
```

#### 117. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1445` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1445) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1445)

```diff
-         this.flows.YR();
+         this.flows.hZ();
```

#### 118. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1447-L1449` → after: `L1447-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1447-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1447-L1449) · [Before (L1447-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1447-L1449)

```diff
-         this.replay.addFpsSample(Me && He && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / ie : null);
-         const Ke = Me ? Hi.c.getLastColyseusPingMs() : null;
-         null !== Ke && this.replay.addPingSample(Ke), this.framesThisTick = 0, this.lastTickMs = ee, this.ticks++, this.ticks % 2 === 0 && (Me && this.inputSinceActiveMarker && this.replay.addReplayMarker(ye.h.active), this.inputSinceActiveMarker = !1), this.replay.markClockIfDue … [truncated]
+         this.replay.addFpsSample(NW && OW && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / iW : null);
+         const PW = NW ? Oi.b.getLastColyseusPingMs() : null;
+         null !== PW && this.replay.addPingSample(PW), this.framesThisTick = 0, this.lastTickMs = WW, this.ticks++, this.ticks % 2 === 0 && (NW && this.inputSinceActiveMarker && this.replay.addReplayMarker(mW.l.active), this.inputSinceActiveMarker = !1), this.replay.markClockIfDue … [truncated]
```

#### 119. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1452-L1454` → after: `L1452-L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1452-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1452-L1454) · [Before (L1452-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1452-L1454)

```diff
-     var ni = He(1155),
-       ji = He(1141),
-       si = He(40584);
+     var Ri = OW(1194),
+       Gi = OW(1185),
+       Ii = OW(41035);
```

#### 120. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1464` → after: `L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1464) · [Before (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1464)

```diff
-       return si.g.fetch(ee, {
+       return Ii.f.fetch(WW, {
```

#### 121. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1470` → after: `L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1470) · [Before (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1470)

```diff
-         signal: (0, ni.v)(3e4)
+         signal: (0, Ri.t)(3e4)
```

#### 122. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1477` → after: `L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1477) · [Before (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1477)

```diff
-         this.uploadToken = ee, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (ie = be.url) && void 0 !==  … [truncated]
+         this.uploadToken = WW, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (iW = EW.url) && void 0 !==  … [truncated]
```

#### 123. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1510` → after: `L1510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1510) · [Before (L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1510)

```diff
-         ie.properties.length > 32768 || ie.event.length > 64 || Ii(this.uploadToken) + He > 102400 ? console.warn(`Session replay timeline event ${ie.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
+         iW.properties.length > 32768 || iW.event.length > 64 || ai(this.uploadToken) + OW > 102400 ? console.warn(`Session replay timeline event ${iW.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
```

#### 124. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1554` → after: `L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1554) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1554)

```diff
-         He.length < ee.events.length && console.error(`Session replay timeline: dropped ${ee.events.length-He.length} events after 3 attempts.`), this.retries.push(...He), this.trimToCap()
+         OW.length < WW.events.length && console.error(`Session replay timeline: dropped ${WW.events.length-OW.length} events after 3 attempts.`), this.retries.push(...OW), this.trimToCap()
```

#### 125. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1569` → after: `L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1569) · [Before (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1569)

```diff
-         return null === be ? 408 === ye.status || 429 === ye.status || ye.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${ye.status}; dropped ${ee.events.length} events.`), "dropped") : "rejected" in be ? be.retryable ? "retryLater" : ( … [truncated]
+         return null === EW ? 408 === mW.status || 429 === mW.status || mW.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${mW.status}; dropped ${WW.events.length} events.`), "dropped") : "rejected" in EW ? EW.retryable ? "retryLater" : ( … [truncated]
```

#### 126. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1572-L1574` → after: `L1572-L1574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1572-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1572-L1574) · [Before (L1572-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1572-L1574)

```diff
-     var Qi = He(40602),
-       eH = He(5086),
-       iH = He(1268);
+     var Qi = OW(41052),
+       WO = OW(5386),
+       iO = OW(1303);
```

#### 127. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1606` → after: `L1606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1606) · [Before (L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1606)

```diff
-           }(ee.posthog.projectApiKey), be.e.init(ee.posthog.projectApiKey, Le({
+           }(WW.posthog.projectApiKey), EW.g.init(WW.posthog.projectApiKey, DW({
```

#### 128. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1612-L1613` → after: `L1612-L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1612-L1613) · [Before (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1612-L1613)

```diff
-             showsChat: (0, ye.q)(He),
-             allowAutomatedBrowsers: (0, eH.d)((0, eH.i)(), !1),
+             showsChat: (0, mW.s)(OW),
+             allowAutomatedBrowsers: (0, WO.d)((0, WO.g)(), !1),
```

#### 129. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1622` → after: `L1622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1622) · [Before (L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1622)

```diff
-           })), Ke && be.e.startSessionRecording({
+           })), PW && EW.g.startSessionRecording({
```

#### 130. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1624-L1625` → after: `L1624-L1625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1624-L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1624-L1625) · [Before (L1624-L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1624-L1625)

```diff
-           }), this.expectedSessionId = He.recordingId, be.e.onSessionId((ee => {
-             ee !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${ee} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
+           }), this.expectedSessionId = OW.recordingId, EW.g.onSessionId((WW => {
+             WW !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${WW} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
```

#### 131. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1638` → after: `L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1638) · [Before (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1638)

```diff
-               client_build: ve.b
+               client_build: pW.d
```

#### 132. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1640` → after: `L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1640) · [Before (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1640)

```diff
-             be.e.register(ye), null !== ee.videoStatus && be.e.register({
+             EW.g.register(mW), null !== WW.videoStatus && EW.g.register({
```

#### 133. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1642` → after: `L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1642) · [Before (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1642)

```diff
-             }), be.e.setPersonProperties(ye, {
+             }), EW.g.setPersonProperties(mW, {
```

#### 134. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1646` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1646) · [Before (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1646)

```diff
-           }(ee, Ke), this.fpsMonitor = new Me.c({
+           }(WW, PW), this.fpsMonitor = new NW.b({
```

#### 135. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1650` → after: `L1650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1650) · [Before (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1650)

```diff
-               }), Mi.h.yR("sessionReplayLowFps", {
+               }), Ni.l.iZ("sessionReplayLowFps", {
```

#### 136. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1659` → after: `L1659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1659) · [Before (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1659)

```diff
-               }), Mi.h.yR("sessionReplayLowFps", {
+               }), Ni.l.iZ("sessionReplayLowFps", {
```

#### 137. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1664)

```diff
-             dashboardHost: null !== (ie = ee.posthog.dashboardHost) && void 0 !== ie ? ie : ee.posthog.apiHost,
+             dashboardHost: null !== (iW = WW.posthog.dashboardHost) && void 0 !== iW ? iW : WW.posthog.apiHost,
```

#### 138. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1666` → after: `L1666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1666) · [Before (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1666)

```diff
-             getSessionId: () => be.e.get_session_id(),
+             getSessionId: () => EW.g.get_session_id(),
```

#### 139. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1675` → after: `L1675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1675) · [Before (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1675)

```diff
-         be.e.capture(ee, ie)
+         EW.g.capture(WW, iW)
```

#### 140. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1678` → after: `L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1678) · [Before (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1678)

```diff
-         be.e.capture(ee, ie, {
+         EW.g.capture(WW, iW, {
```

#### 141. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1684` → after: `L1684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1684) · [Before (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1684)

```diff
-         be.e.capture(ee, ie, {
+         EW.g.capture(WW, iW, {
```

#### 142. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1705` → after: `L1705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1705) · [Before (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1705)

```diff
-         be.e.register({
+         EW.g.register({
```

#### 143. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1717` → after: `L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1717) · [Before (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1717)

```diff
-         be.e.stopSessionRecording(), be.e.register({
+         EW.g.stopSessionRecording(), EW.g.register({
```

#### 144. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1722` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1722) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1722)

```diff
-         this.stopDomRecording(), be.e.set_config({
+         this.stopDomRecording(), EW.g.set_config({
```

#### 145. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1731` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1731) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1731)

```diff
-         return !(null === (ee = be.e.sessionRecording) || void 0 === ee || !ee.started) && (Ce().rrweb.record.takeFullSnapshot(), !0)
+         return !(null === (WW = EW.g.sessionRecording) || void 0 === WW || !WW.started) && (VW().rrweb.record.takeFullSnapshot(), !0)
```

#### 146. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1750` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1750) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1750)

```diff
-         this.clockMarked = this.addReplayMarker(ye.h.clock, {
+         this.clockMarked = this.addReplayMarker(mW.l.clock, {
```

#### 147. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1761` → after: `L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1761) · [Before (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1761)

```diff
-         return (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || be.e.sessionRecordingStarted()) && null !== (ie = null === (He = be.e.sessionRecording) || void 0 === He ? void 0 : He.tryAddCustomEvent(ee, ye)) && void 0 !== ie && ie
+         return (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || EW.g.sessionRecordingStarted()) && null !== (iW = null === (OW = EW.g.sessionRecording) || void 0 === OW ? void 0 : OW.tryAddCustomEvent(WW, mW)) && void 0 !== iW && iW
```

#### 148. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1764` → after: `L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1764) · [Before (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1764)

```diff
-         this.unregisterGameContext(), this.gameContextKeys = Object.keys(ie), be.e.register(ie), this.firstGameJoined || (this.firstGameJoined = !0, be.e.setPersonProperties(void 0, {
+         this.unregisterGameContext(), this.gameContextKeys = Object.keys(iW), EW.g.register(iW), this.firstGameJoined || (this.firstGameJoined = !0, EW.g.setPersonProperties(void 0, {
```

#### 149. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1781` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1781) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1781)

```diff
-         be.e.register(ee), ie && be.e.setPersonProperties(ee)
+         EW.g.register(WW), iW && EW.g.setPersonProperties(WW)
```

#### 150. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1800-L1801` → after: `L1800-L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1800-L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1800-L1801) · [Before (L1800-L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1800-L1801)

```diff
-         ie !== this.lastTagsJson && (this.lastTagsJson = ie, be.e.register(ee), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
-           this.personUpdateTimer = null, be.e.setPersonProperties(this.tags.toProperties())
+         iW !== this.lastTagsJson && (this.lastTagsJson = iW, EW.g.register(WW), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
+           this.personUpdateTimer = null, EW.g.setPersonProperties(this.tags.toProperties())
```

#### 151. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1805` → after: `L1805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1805) · [Before (L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1805)

```diff
-         for (const ee of this.gameContextKeys) be.e.unregister(ee);
+         for (const WW of this.gameContextKeys) EW.g.unregister(WW);
```

#### 152. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1810)

```diff
-   40602: (ee, ie, He) => {
+   41052: (WW, iW, OW) => {
```

#### 153. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1823` → after: `L1823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1823) · [Before (L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1823)

```diff
-   40584: (ee, ie, He) => {
+   41035: (WW, iW, OW) => {
```

#### 154. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1825-L1826` → after: `L1825-L1826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1825-L1826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1825-L1826) · [Before (L1825-L1826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1825-L1826)

```diff
-       d: () => ye,
-       g: () => Me,
+       e: () => mW,
+       f: () => NW,
```

#### 155. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1859` → after: `L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1859) · [Before (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1859)

```diff
-         return (null !== (ie = this.inFlightLabels.get(ee)) && void 0 !== ie ? ie : 0) > 0
+         return (null !== (iW = this.inFlightLabels.get(WW)) && void 0 !== iW ? iW : 0) > 0
```

#### 156. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1872` → after: `L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1872) · [Before (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1872)

```diff
-         void 0 !== ee && this.inFlightLabels.set(ee, (null !== (He = this.inFlightLabels.get(ee)) && void 0 !== He ? He : 0) + ie)
+         void 0 !== WW && this.inFlightLabels.set(WW, (null !== (OW = this.inFlightLabels.get(WW)) && void 0 !== OW ? OW : 0) + iW)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (142 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db)

#### 1. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1-L2)

```diff
- export const id = 62;
- export const ids = [62];
+ export const id = 63;
+ export const ids = [63];
```

#### 2. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4)

```diff
-   40640: () => {
+   41099: () => {
```

#### 3. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L26)

```diff
-           return "symbol" == ee(He) ? He : He + ""
+           return "symbol" == WW(OW) ? OW : OW + ""
```

#### 4. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L114)

```diff
-       new RegExp(`^${Te.source}`, "i"), new RegExp(Te.source, "gi"), "0".repeat(32), "0".repeat(16);
+       new RegExp(`^${bW.source}`, "i"), new RegExp(bW.source, "gi"), "0".repeat(32), "0".repeat(16);
```

#### 5. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L179)

```diff
-         const ye = `${ee}.${String(He)}`;
+         const mW = `${WW}.${String(OW)}`;
```

#### 6. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L213)

```diff
-               return "function" == typeof ee ? null !== (ie = ee.__rrweb_layer__) && void 0 !== ie ? ie : ee.__posthog_layer__ : void 0
+               return "function" == typeof WW ? null !== (iW = WW.__rrweb_layer__) && void 0 !== iW ? iW : WW.__posthog_layer__ : void 0
```

#### 7. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L235)

```diff
-             Oe = (null == ee ? void 0 : ee.toString().includes("[native code]")) ? ee : null
+             SW = (null == WW ? void 0 : WW.toString().includes("[native code]")) ? WW : null
```

#### 8. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L306` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L306) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L306)

```diff
-         }, me = [], le = 0, ue = (ie = ee) && ie > 0 ? ie : null, xe = De(), Le = Pe)
+         }, CW = [], XW = 0, fW = (iW = WW) && iW > 0 ? iW : null, gW = HW(), DW = nW)
```

#### 9. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L317)

```diff
-         } : (ce -= 1) > 0 ? Ce : (Ce.durationMs = De() - xe, Ce.deferredStylesheetCount = le, je.deferredCount += le, ue = null, ae(Ce.durationMs, Le) ? Ce : ve = Ce)
+         } : (vW -= 1) > 0 ? VW : (VW.durationMs = HW() - gW, VW.deferredStylesheetCount = XW, RW.deferredCount += XW, fW = null, eW(VW.durationMs, DW) ? VW : pW = VW)
```

#### 10. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L408` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L408) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L408)

```diff
-           return "symbol" == yi(ie) ? ie : ie + ""
+           return "symbol" == mi(iW) ? iW : iW + ""
```

#### 11. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L439-L440` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L439-L440) · [Before (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L439-L440)

```diff
-         const He = ["@import", `url(${JSON.stringify(ee.href)})`];
-         return "" === ee.layerName ? He.push("layer") : ee.layerName && He.push(`layer(${ee.layerName})`), ee.supportsText && He.push(`supports(${ee.supportsText})`), ee.media.length && He.push(ee.media.mediaText), He.join(" ") + ";"
+         const OW = ["@import", `url(${JSON.stringify(WW.href)})`];
+         return "" === WW.layerName ? OW.push("layer") : WW.layerName && OW.push(`layer(${WW.layerName})`), WW.supportsText && OW.push(`supports(${WW.supportsText})`), WW.media.length && OW.push(WW.media.mediaText), OW.join(" ") + ";"
```

#### 12. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L499` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L499) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L499)

```diff
-           return ee && null !== (ie = null === (He = this.getMeta(ee)) || void 0 === He ? void 0 : He.id) && void 0 !== ie ? ie : -1
+           return WW && null !== (iW = null === (OW = this.getMeta(WW)) || void 0 === OW ? void 0 : OW.id) && void 0 !== iW ? iW : -1
```

#### 13. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L501)

```diff
-         Abe(ee) {
+         AmW(WW) {
```

#### 14. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L527` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L527) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L527)

```diff
-           const He = this.Abe(ee);
+           const OW = this.AmW(WW);
```

#### 15. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L566` → after: `L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L566) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L566)

```diff
-         return ye ? be ? Ke && Oi.has(gi(He)) ? ye : "*".repeat(ye.length) : Me ? Me(He, ye, ie) : ye : ye
+         return mW ? EW ? PW && Ki.has(Mi(OW)) ? mW : "*".repeat(mW.length) : NW ? NW(OW, mW, iW) : mW : mW
```

#### 16. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L588-L590` → after: `L588-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L588-L590) · [Before (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L588-L590)

```diff
-           if (wi.test(Ue) || Di.test(Ue)) return `url(${Fe}${Ue}${Fe})`;
-           if (Pi.test(Ue)) return `url(${Fe}${Ue}${Fe})`;
-           if ("/" === Ue[0]) return `url(${Fe}${function(ee){let ie="";return ie=ee.indexOf("//")>-1?ee.split("/").slice(0,3).join("/"):ee.split("/")[0],ie=ie.split("?")[0],ie}(ie)+Ue}${Fe})`;
+           if (Ji.test(LW) || Hi.test(LW)) return `url(${cW}${LW}${cW})`;
+           if (ni.test(LW)) return `url(${cW}${LW}${cW})`;
+           if ("/" === LW[0]) return `url(${cW}${function(WW){let iW="";return iW=WW.indexOf("//")>-1?WW.split("/").slice(0,3).join("/"):WW.split("/")[0],iW=iW.split("?")[0],iW}(iW)+LW}${cW})`;
```

#### 17. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L595)

```diff
-           return `url(${Fe}${Je.join("/")}${Fe})`
+           return `url(${cW}${wW.join("/")}${cW})`
```

#### 18. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L652-L653` → after: `L652-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L652-L653) · [Before (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L652-L653)

```diff
-                   const Ke = be.toDataURL(He || "image/webp", null != ye ? ye : .4),
-                     Ue = ie.length > Ke.length ? Ke : ie;
+                   const PW = EW.toDataURL(OW || "image/webp", null != mW ? mW : .4),
+                     LW = iW.length > PW.length ? PW : iW;
```

#### 19. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L712)

```diff
-         }(ee, ye) : "style" === He ? Ai(ye, Si(ee)) : "object" === ie && "data" === He ? li(ee, ye) : ye : li(ee, ye)
+         }(WW, mW) : "style" === OW ? ui(mW, qi(WW)) : "object" === iW && "data" === OW ? Bi(WW, mW) : mW : Bi(WW, mW)
```

#### 20. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L742)

```diff
-               if (be.closest(`.${ie}`)) return !0
+               if (EW.closest(`.${iW}`)) return !0
```

#### 21. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L805` → after: `L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L805) · [Before (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L805)

```diff
-         if (Ae >= Ye) return yH = !0, HH || (HH = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${Ye}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
+         if (uW >= oW) return mO = !0, OO || (OO = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${oW}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
```

#### 22. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L967` → after: `L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L967) · [Before (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L967)

```diff
-                         console.warn(`Cannot inline img src=${ye}! Error: ${ee}`)
+                         console.warn(`Cannot inline img src=${mW}! Error: ${WW}`)
```

#### 23. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L987-L990` → after: `L987-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L987-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L987-L990) · [Before (L987-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L987-L990)

```diff
-                     rr_width: `${ie}px`,
-                     rr_height: `${ye}px`,
-                     rr_left: `${Math.floor(be+((null===(De=He.defaultView)||void 0===De?void 0:De.scrollX)||0))}px`,
-                     rr_top: `${Math.floor(Me+((null===(Pe=He.defaultView)||void 0===Pe?void 0:Pe.scrollY)||0))}px`
+                     rr_width: `${iW}px`,
+                     rr_height: `${mW}px`,
+                     rr_left: `${Math.floor(EW+((null===(HW=OW.defaultView)||void 0===HW?void 0:HW.scrollX)||0))}px`,
+                     rr_top: `${Math.floor(NW+((null===(nW=OW.defaultView)||void 0===nW?void 0:nW.scrollY)||0))}px`
```

#### 24. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1054` → after: `L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1054) · [Before (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1054)

```diff
-                     console.warn(`Cannot get CSS styles from text's parentNode. Error: ${ie}`, ee)
+                     console.warn(`Cannot get CSS styles from text's parentNode. Error: ${iW}`, WW)
```

#### 25. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1114` → after: `L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1114) · [Before (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1114)

```diff
-                 return null !== (ie = null == ye ? void 0 : ye[1]) && void 0 !== ie ? ie : null
+                 return null !== (iW = null == mW ? void 0 : mW[1]) && void 0 !== iW ? iW : null
```

#### 26. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1413)

```diff
-           Abe: () => (console.warn(RH), null),
+           AmW: () => (console.warn(ZO), null),
```

#### 27. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1500` → after: `L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1500) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1500)

```diff
-         return ee ? ee.nodeType === ee.ELEMENT_NODE ? ee : we.parentElement(ee) : null
+         return WW ? WW.nodeType === WW.ELEMENT_NODE ? WW : hW.parentElement(WW) : null
```

#### 28. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1554` → after: `L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1554) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1554)

```diff
-           return null !== (ie = this.styleIDMap.get(ee)) && void 0 !== ie ? ie : -1
+           return null !== (iW = this.styleIDMap.get(WW)) && void 0 !== iW ? iW : -1
```

#### 29. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1586)

```diff
-         return "boolean" == typeof He ? He : function(ee) {
+         return "boolean" == typeof OW ? OW : function(WW) {
```

#### 30. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1631)

```diff
-         aH = (ee, ie) => `${ee}@${ie}`,
+         eO = (WW, iW) => `${WW}@${iW}`,
```

#### 31. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1643` → after: `L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1643) · [Before (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1643)

```diff
-                 He = De() - ee, ye = ie, ce > 0 || ae(He, null != ye ? ye : Pe) || He > ne.slowestBatchMs && (ne.slowestBatchMs = He)
+                 OW = HW() - WW, mW = iW, vW > 0 || eW(OW, null != mW ? mW : nW) || OW > qW.slowestBatchMs && (qW.slowestBatchMs = OW)
```

#### 32. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1815` → after: `L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1815) · [Before (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1815)

```diff
-                     Ke = null !== (ie = ee.attributeNamespace) && void 0 !== ie ? ie : null;
+                     PW = null !== (iW = WW.attributeNamespace) && void 0 !== iW ? iW : null;
```

#### 33. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1820-L1822` → after: `L1820-L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1820-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1820-L1822) · [Before (L1820-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1820-L1822)

```diff
-                       if ("http://www.w3.org/1999/xlink" === He) return `xlink:${ie}`;
-                       if ("http://www.w3.org/XML/1998/namespace" === He) return `xml:${ie}`;
-                       if ("http://www.w3.org/2000/xmlns/" === He) return "xmlns" === ie ? ie : `xmlns:${ie}`;
+                       if ("http://www.w3.org/1999/xlink" === OW) return `xlink:${iW}`;
+                       if ("http://www.w3.org/XML/1998/namespace" === OW) return `xml:${iW}`;
+                       if ("http://www.w3.org/2000/xmlns/" === OW) return "xmlns" === iW ? iW : `xmlns:${iW}`;
```

#### 34. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1824` → after: `L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1824) · [Before (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1824)

```diff
-                       return be ? `${be}:${ie}` : ie
+                       return EW ? `${EW}:${iW}` : iW
```

#### 35. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1864` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1864) · [Before (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1864)

```diff
-                         ye !== ie.style.getPropertyValue(ee) || be !== ie.style.getPropertyPriority(ee) ? Je.styleDiff[ee] = "" === be ? ye : [ye, be] : Je._unchangedStyles[ee] = [ye, be]
+                         mW !== iW.style.getPropertyValue(WW) || EW !== iW.style.getPropertyPriority(WW) ? wW.styleDiff[WW] = "" === EW ? mW : [mW, EW] : wW._unchangedStyles[WW] = [mW, EW]
```

#### 36. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2066` → after: `L2066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2066) · [Before (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2066)

```diff
-             const Re = `${Je},${oe}`;
+             const ZW = `${wW},${tW}`;
```

#### 37. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2117` → after: `L2117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2117) · [Before (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2117)

```diff
-         Ke = He.getId("#document" === ie.nodeName ? ie : we.host(ie));
+         PW = OW.getId("#document" === iW.nodeName ? iW : hW.host(iW));
```

#### 38. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2383` → after: `L2383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2383) · [Before (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2383)

```diff
-                 "radio" === pe && Xe && Te && He.querySelectorAll(`input[type="radio"][name="${Xe}"]`).forEach((ee => {
+                 "radio" === jW && UW && bW && OW.querySelectorAll(`input[type="radio"][name="${UW}"]`).forEach((WW => {
```

#### 39. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2552` → after: `L2552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2552) · [Before (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2552)

```diff
-                 return Me.CSSStyleSheet.prototype.insertRule.apply(this, [`${ee} { ${ie} }`, He])
+                 return NW.CSSStyleSheet.prototype.insertRule.apply(this, [`${WW} { ${iW} }`, OW])
```

#### 40. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2765` → after: `L2765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2765) · [Before (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2765)

```diff
-                   fontSource: "string" == typeof ie ? ie : JSON.stringify(Array.from(new Uint8Array(ie)))
+                   fontSource: "string" == typeof iW ? iW : JSON.stringify(Array.from(new Uint8Array(iW)))
```

#### 41. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2813` → after: `L2813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2813) · [Before (L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2813)

```diff
-                 zp: Ue
+                 kj: LW
```

#### 42. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2832` → after: `L2832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2832) · [Before (L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2832)

```diff
-                   console.warn(`Custom element callback failed for ${ie}`)
+                   console.warn(`Custom element callback failed for ${iW}`)
```

#### 43. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2838` → after: `L2838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2838) · [Before (L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2838)

```diff
-           for (const ie of ee.plugins) Re(`plugin:${ie.name}`, (() => ie.observer(ie.callback, He, ie.options)))
+           for (const iW of WW.plugins) ZW(`plugin:${iW.name}`, (() => iW.observer(iW.callback, OW, iW.options)))
```

#### 44. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2873` → after: `L2873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2873) · [Before (L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2873)

```diff
-             return "number" != typeof ie || 0 > ie ? ie : null !== (ye = (He || this.getLocalIdToRemoteIdMap(ee)).get(ie)) && void 0 !== ye ? ye : -1
+             return "number" != typeof iW || 0 > iW ? iW : null !== (mW = (OW || this.getLocalIdToRemoteIdMap(WW)).get(iW)) && void 0 !== mW ? mW : -1
```

#### 45. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2906` → after: `L2906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2906) · [Before (L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2906)

```diff
-             return null !== (ie = null !== (He = null === (ye = this.attachedIframes.get(ee)) || void 0 === ye ? void 0 : ye.element) && void 0 !== He ? He : this.iframeElementsById.get(ee)) && void 0 !== ie ? ie : null
+             return null !== (iW = null !== (OW = null === (mW = this.attachedIframes.get(WW)) || void 0 === mW ? void 0 : mW.element) && void 0 !== OW ? OW : this.iframeElementsById.get(WW)) && void 0 !== iW ? iW : null
```

#### 46. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3058` → after: `L3058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3058) · [Before (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3058)

```diff
-                     return ie.data.zp.forEach((ie => {
+                     return iW.data.kj.forEach((iW => {
```

#### 47. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3092` → after: `L3092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3092) · [Before (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3092)

```diff
-               He = (null == ie ? void 0 : ie.element) || this.iframeElementsById.get(ee) || this.mirror.Abe(ee);
+               OW = (null == iW ? void 0 : iW.element) || this.iframeElementsById.get(WW) || this.mirror.AmW(WW);
```

#### 48. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3159` → after: `L3159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3159) · [Before (L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3159)

```diff
-             const Me = null !== (He = null === (be = we.host(ee)) || void 0 === be ? void 0 : be.ownerDocument) && void 0 !== He ? He : ie,
+             const NW = null !== (OW = null === (EW = hW.host(WW)) || void 0 === EW ? void 0 : EW.ownerDocument) && void 0 !== OW ? OW : iW,
```

#### 49. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3334` → after: `L3334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3334) · [Before (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3334)

```diff
-                     return ie && "object" == typeof ie ? ie : null
+                     return iW && "object" == typeof iW ? iW : null
```

#### 50. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3343` → after: `L3343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3343) · [Before (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3343)

```diff
-                     usage: "number" == typeof Me.usage ? Me.usage | Ue : Ue
+                     usage: "number" == typeof NW.usage ? NW.usage | LW : LW
```

#### 51. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3440` → after: `L3440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3440) · [Before (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3440)

```diff
-         console.warn(`[replay] canvas capture: ${ee}`, ...He)
+         console.warn(`[replay] canvas capture: ${WW}`, ...OW)
```

#### 52. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3501` → after: `L3501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3501) · [Before (L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3501)

```diff
-               return Wy(`disabled because the encode worker did not start. ${dy}`, ee), void Fe()
+               return ym(`disabled because the encode worker did not start. ${Ym}`, WW), void cW()
```

#### 53. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3506` → after: `L3506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3506) · [Before (L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3506)

```diff
-               ke = !0, Wy(`stopped because the encode worker failed. ${dy}`, ee), cancelAnimationFrame(pe), null === (ie = oe.terminate) || void 0 === ie || ie.call(oe), this.resetFrameDedup = null
+               xW = !0, ym(`stopped because the encode worker failed. ${Ym}`, WW), cancelAnimationFrame(jW), null === (iW = tW.terminate) || void 0 === iW || iW.call(tW), this.resetFrameDedup = null
```

#### 54. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3812` → after: `L3812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3812) · [Before (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3812)

```diff
-                           if (ie.media && "string" == typeof ie.media.mediaText) return `@media ${ie.media.mediaText} {`;
+                           if (iW.media && "string" == typeof iW.media.mediaText) return `@media ${iW.media.mediaText} {`;
```

#### 55. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3816` → after: `L3816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3816) · [Before (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3816)

```diff
-                             return `${ee.selectorText} {${He?" "+He:""}`
+                             return `${WW.selectorText} {${OW?" "+OW:""}`
```

#### 56. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3818` → after: `L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3818) · [Before (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3818)

```diff
-                           if ("containerName" in ie) return "string" != typeof ie.containerQuery || ie.containerName && !Xi.test(ie.containerName) ? null : `@container ${ie.containerName?`${ie.containerName} `:""}${ie.containerQuery} {`;
+                           if ("containerName" in iW) return "string" != typeof iW.containerQuery || iW.containerName && !ji.test(iW.containerName) ? null : `@container ${iW.containerName?`${iW.containerName} `:""}${iW.containerQuery} {`;
```

#### 57. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3827` → after: `L3827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3827) · [Before (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3827)

```diff
-                             return "" === ye || "Object" === ye || "CSSSupportsRule" === ye ? `@supports ${ie.conditionText} {` : null
+                             return "" === mW || "Object" === mW || "CSSSupportsRule" === mW ? `@supports ${iW.conditionText} {` : null
```

#### 58. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3829` → after: `L3829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3829) · [Before (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3829)

```diff
-                           return "string" == typeof ie.name ? "keyText" in ie.cssRules[0] ? Xi.test(ie.name) ? `@keyframes ${ie.name} {` : null : "" === ie.name ? "@layer {" : zi.test(ie.name) ? `@layer ${ie.name} {` : null : null
+                           return "string" == typeof iW.name ? "keyText" in iW.cssRules[0] ? ji.test(iW.name) ? `@keyframes ${iW.name} {` : null : "" === iW.name ? "@layer {" : Ui.test(iW.name) ? `@layer ${iW.name} {` : null : null
```

#### 59. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3913` → after: `L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3913) · [Before (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3913)

```diff
-                     let Ke = ee > 0 ? ee : 1;
+                     let PW = WW > 0 ? WW : 1;
```

#### 60. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3942` → after: `L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3942) · [Before (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3942)

```diff
-                   text: () => He ? ye : null,
+                   text: () => OW ? mW : null,
```

#### 61. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3981` → after: `L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3981) · [Before (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3981)

```diff
-                   oe && this.pendingDeferredSheets.delete(Ke), ae(Re = De() - Fe, null != (ke = Je) ? ke : Pe) || (je.totalMs += Re, Re > je.slowestSliceMs && (je.slowestSliceMs = Re))
+                   tW && this.pendingDeferredSheets.delete(PW), eW(ZW = HW() - cW, null != (xW = wW) ? xW : nW) || (RW.totalMs += ZW, ZW > RW.slowestSliceMs && (RW.slowestSliceMs = ZW))
```

#### 62. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4187` → after: `L4187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4187) · [Before (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4187)

```diff
-           } : void 0 !== Be ? Be : {
+           } : void 0 !== sW ? sW : {
```

#### 63. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4228` → after: `L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4228) · [Before (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4228)

```diff
-                   const ee = ay.Abe(ye.node.id);
+                   const WW = em.AmW(mW.node.id);
```

#### 64. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4562` → after: `L4562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4562) · [Before (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4562)

```diff
-               const He = ay.Abe(ie);
+               const OW = em.AmW(iW);
```

#### 65. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4712` → after: `L4712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4712) · [Before (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4712)

```diff
-                 Me = null !== (ee = null !== (ie = null !== (He = null !== (ye = be.fullscreenElement) && void 0 !== ye ? ye : be.webkitFullscreenElement) && void 0 !== He ? He : be.mozFullScreenElement) && void 0 !== ie ? ie : be.msFullscreenElement) && void 0 !== ee ? ee : null … [truncated]
+                 NW = null !== (WW = null !== (iW = null !== (OW = null !== (mW = EW.fullscreenElement) && void 0 !== mW ? mW : EW.webkitFullscreenElement) && void 0 !== OW ? OW : EW.mozFullScreenElement) && void 0 !== iW ? iW : EW.msFullscreenElement) && void 0 !== WW ? WW : null … [truncated]
```

#### 66. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4765` → after: `L4765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4765) · [Before (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4765)

```diff
-       new RegExp(`^${Cy.source}`, "i"), new RegExp(Cy.source, "gi"), "0".repeat(32), "0".repeat(16);
+       new RegExp(`^${pm.source}`, "i"), new RegExp(pm.source, "gi"), "0".repeat(32), "0".repeat(16);
```

#### 67. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4788` → after: `L4788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4788) · [Before (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4788)

```diff
-           return "symbol" == uy(ie) ? ie : ie + ""
+           return "symbol" == Cm(iW) ? iW : iW + ""
```

#### 68. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4804` → after: `L4804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4804) · [Before (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4804)

```diff
-             return this.functionName ? `${this.functionName} (${this.fileName}:${ee}:${ie})` : `${this.fileName}:${ee}:${ie}`
+             return this.functionName ? `${this.functionName} (${this.fileName}:${WW}:${iW})` : `${this.fileName}:${WW}:${iW}`
```

#### 69. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4817` → after: `L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4817) · [Before (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4817)

```diff
-             if (!ie) throw new Error(`Cannot parse given url: ${ee}`);
+             if (!iW) throw new Error(`Cannot parse given url: ${WW}`);
```

#### 70. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4919` → after: `L4919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4919) · [Before (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4919)

```diff
-           be.length > 1 && (He += `:eq(${be.indexOf(ee)})`), ie = He + (ie ? ">" + ie : ""), ee = ye
+           EW.length > 1 && (OW += `:eq(${EW.indexOf(WW)})`), iW = OW + (iW ? ">" + iW : ""), WW = mW
```

#### 71. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4957` → after: `L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4957) · [Before (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4957)

```diff
-             return He.stringLengthLimit && ie.length > He.stringLengthLimit && (ie = `${ie.slice(0,He.stringLengthLimit)}...`), ie
+             return OW.stringLengthLimit && iW.length > OW.stringLengthLimit && (iW = `${iW.slice(0,OW.stringLengthLimit)}...`), iW
```

#### 72. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5002` → after: `L5002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5002) · [Before (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5002)

```diff
-             ie.reason instanceof Error ? (He = ie.reason, be = [ry(`Uncaught (in promise) ${He.name}: ${He.message}`, ye.stringifyOptions)]) : (He = new Error, be = [ry("Uncaught (in promise)", ye.stringifyOptions), ry(ie.reason, ye.stringifyOptions)]), ee({
+             iW.reason instanceof Error ? (OW = iW.reason, EW = [Qm(`Uncaught (in promise) ${OW.name}: ${OW.message}`, mW.stringifyOptions)]) : (OW = new Error, EW = [Qm("Uncaught (in promise)", mW.stringifyOptions), Qm(iW.reason, mW.stringifyOptions)]), WW({
```

#### 73. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5064` → after: `L5064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5064) · [Before (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5064)

```diff
-                   return "function" == typeof ee ? null !== (ie = ee.__rrweb_layer__) && void 0 !== ie ? ie : ee.__posthog_layer__ : void 0
+                   return "function" == typeof WW ? null !== (iW = WW.__rrweb_layer__) && void 0 !== iW ? iW : WW.__posthog_layer__ : void 0
```

#### 74. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5086` → after: `L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5086) · [Before (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5086)

```diff
-       const Kb = null != ib ? ib : {},
+       const LE = null != OE ? OE : {},
```

#### 75. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5104` → after: `L5104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5104) · [Before (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5104)

```diff
-         return ie > He && (ye.warn("min cannot be greater than max."), ie = He), Xb(ee) ? ee > He ? (ye.warn(" cannot be  greater than max: " + He + ". Using max value instead."), He) : ie > ee ? (ye.warn(" cannot be less than min: " + ie + ". Using min value instead."), ie) : ee … [truncated]
+         return iW > OW && (mW.warn("min cannot be greater than max."), iW = OW), kE(WW) ? WW > OW ? (mW.warn(" cannot be  greater than max: " + OW + ". Using max value instead."), OW) : iW > WW ? (mW.warn(" cannot be less than min: " + iW + ". Using min value instead."), iW) : WW … [truncated]
```

#### 76. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5146` → after: `L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5146) · [Before (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5146)

```diff
-           }(db, `Native gzip produced invalid output: ${ee}`)
+           }(yE, `Native gzip produced invalid output: ${WW}`)
```

#### 77. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5245` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5245) · [Before (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5245)

```diff
-               He.error(`You must initialize PostHog before calling ${ee}`)
+               OW.error(`You must initialize PostHog before calling ${WW}`)
```

#### 78. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5247` → after: `L5247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5247) · [Before (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5247)

```diff
-             createLogger: (ie, He) => Yb(`${ee} ${ie}`, He)
+             createLogger: (iW, OW) => dE(`${WW} ${iW}`, OW)
```

#### 79. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5266` → after: `L5266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5266) · [Before (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5266)

```diff
-         } = null != ye ? ye : {};
+         } = null != mW ? mW : {};
```

#### 80. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5280` → after: `L5280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5280) · [Before (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5280)

```diff
-           if (Rb(ee)) return null !== (ie = ee.__posthog_layer__) && void 0 !== ie ? ie : ee.__rrweb_layer__
+           if (xE(WW)) return null !== (iW = WW.__posthog_layer__) && void 0 !== iW ? iW : WW.__rrweb_layer__
```

#### 81. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5347` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5347) · [Before (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5347)

```diff
-             return fb(ee) && ee ? ee : ie
+             return bE(WW) && WW ? WW : iW
```

#### 82. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5374` → after: `L5374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5374) · [Before (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5374)

```diff
-         return Math.min(Qb, null !== (ie = ee.payloadSizeLimitBytes) && void 0 !== ie ? ie : Qb)
+         return Math.min(WN, null !== (iW = WW.payloadSizeLimitBytes) && void 0 !== iW ? iW : WN)
```

#### 83. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5406` → after: `L5406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5406) · [Before (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5406)

```diff
-         return fb(be) && (be = parseInt(be)), be > He ? `[SessionRecording] ${ye} body too large to record (${be} bytes)` : ee
+         return bE(EW) && (EW = parseInt(EW)), EW > OW ? `[SessionRecording] ${mW} body too large to record (${EW} bytes)` : WW
```

#### 84. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5506` → after: `L5506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5506) · [Before (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5506)

```diff
-         return zb(Ke) ? Ke : Me(Ke)
+         return sE(PW) ? PW : NW(PW)
```

#### 85. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5608` → after: `L5608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5608) · [Before (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5608)

```diff
-         return `${wM}: ${ee}`
+         return `${HN}: ${WW}`
```

#### 86. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5612` → after: `L5612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5612) · [Before (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5612)

```diff
-         return `[SessionReplay] Body too large to record (> ${ee} bytes)`
+         return `[SessionReplay] Body too large to record (> ${WW} bytes)`
```

#### 87. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5739` → after: `L5739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5739) · [Before (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5739)

```diff
-             if (Me && Ke) return `Content-Type ${Me} is not supported`;
+             if (NW && PW) return `Content-Type ${NW} is not supported`;
```

#### 88. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6110` → after: `L6110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6110) · [Before (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6110)

```diff
-         return 0 === ie ? qK : (null == ee ? void 0 : ee.get_property(He ? ye + He : be)) === Me ? RK : kK
+         return 0 === iW ? AP : (null == WW ? void 0 : WW.get_property(OW ? mW + OW : EW)) === NW ? xP : lP
```

#### 89. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6116` → after: `L6116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6116) · [Before (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6116)

```diff
-           return "regex" === ie.matching && (null !== (ye = null == He ? void 0 : He.get(ie.url)) && void 0 !== ye ? ye : new RegExp(ie.url)).test(ee)
+           return "regex" === iW.matching && (null !== (mW = null == OW ? void 0 : OW.get(iW.url)) && void 0 !== mW ? mW : new RegExp(iW.url)).test(WW)
```

#### 90. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6121` → after: `L6121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6121) · [Before (L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6121)

```diff
-         return ee.includes("trigger_activated") ? RK : ee.includes("trigger_pending") ? kK : qK
+         return WW.includes("trigger_activated") ? xP : WW.includes("trigger_pending") ? lP : AP
```

#### 91. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6268` → after: `L6268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6268) · [Before (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6268)

```diff
-                   Me = zb(ie) ? !0 === ie : He ? ie === He : !!ie
+                   NW = sE(iW) ? !0 === iW : OW ? iW === OW : !!iW
```

#### 92. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6381` → after: `L6381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6381) · [Before (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6381)

```diff
-         return ie ? KK : "trigger_activated" === He ? UK : "trigger_pending" === He ? FK : !1 === ee.isSampled ? MK : UK
+         return iW ? LP : "trigger_activated" === OW ? cP : "trigger_pending" === OW ? wP : !1 === WW.isSampled ? PP : cP
```

#### 93. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6392` → after: `L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6392) · [Before (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6392)

```diff
-         return He && "trigger_pending" === ie ? FK : He && "trigger_disabled" === ie || ye && !ee.isSampled ? MK : !0 === ee.isSampled ? KK : UK
+         return OW && "trigger_pending" === iW ? wP : OW && "trigger_disabled" === iW || mW && !WW.isSampled ? PP : !0 === WW.isSampled ? LP : cP
```

#### 94. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6520` → after: `L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6520) · [Before (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6520)

```diff
-           var ye = new(ee instanceof aK ? aK : ee instanceof cK ? cK : VK)(He - ie);
+           var mW = new(WW instanceof vP ? vP : WW instanceof gP ? gP : eP)(OW - iW);
```

#### 95. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6696` → after: `L6696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6696) · [Before (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6696)

```diff
-           }, this.vt = ee => this._rrweb.mirror.Abe(ee), this.bt = ee => {
+           }, this.vt = WW => this._rrweb.mirror.AmW(WW), this.bt = WW => {
```

#### 96. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6698` → after: `L6698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6698) · [Before (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6698)

```diff
-             return (null !== (ie = null === (He = ee.removes) || void 0 === He ? void 0 : He.length) && void 0 !== ie ? ie : 0) + (null !== (ye = null === (be = ee.attributes) || void 0 === be ? void 0 : be.length) && void 0 !== ye ? ye : 0) + (null !== (Me = null === (Ke = ee.te … [truncated]
+             return (null !== (iW = null === (OW = WW.removes) || void 0 === OW ? void 0 : OW.length) && void 0 !== iW ? iW : 0) + (null !== (mW = null === (EW = WW.attributes) || void 0 === EW ? void 0 : EW.length) && void 0 !== mW ? mW : 0) + (null !== (NW = null === (PW = WW.te … [truncated]
```

#### 97. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6728-L6729` → after: `L6728-L6729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6728-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6728-L6729) · [Before (L6728-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6728-L6729)

```diff
-             bucketSize: null !== (He = this.it.bucketSize) && void 0 !== He ? He : 100,
-             refillRate: null !== (ye = this.it.refillRate) && void 0 !== ye ? ye : 10,
+             bucketSize: null !== (OW = this.it.bucketSize) && void 0 !== OW ? OW : 100,
+             refillRate: null !== (mW = this.it.refillRate) && void 0 !== mW ? mW : 10,
```

#### 98. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6733` → after: `L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6733) · [Before (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6733)

```diff
-           }), this.dt = null !== (be = this.it.bytesBucketSize) && void 0 !== be ? be : 0, this.ht = null !== (Me = this.it.bytesRefillRate) && void 0 !== Me ? Me : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
+           }), this.dt = null !== (EW = this.it.bytesBucketSize) && void 0 !== EW ? EW : 0, this.ht = null !== (NW = this.it.bytesRefillRate) && void 0 !== NW ? NW : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
```

#### 99. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6735` → after: `L6735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6735) · [Before (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6735)

```diff
-           this.xt = Xb(Ke) && Number.isFinite(Ke) && Ke > 0 ? Ke : 3e5
+           this.xt = kE(PW) && Number.isFinite(PW) && PW > 0 ? PW : 3e5
```

#### 100. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6858` → after: `L6858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6858) · [Before (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6858)

```diff
-           const ye = "person" === ee.type ? He : ie,
+           const mW = "person" === WW.type ? OW : iW,
```

#### 101. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6869` → after: `L6869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6869) · [Before (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6869)

```diff
-         return ie ? ee : "!" + ee
+         return iW ? WW : "!" + WW
```

#### 102. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6904` → after: `L6904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6904) · [Before (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6904)

```diff
-             return Xb(He) ? He : null
+             return kE(OW) ? OW : null
```

#### 103. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6930` → after: `L6930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6930) · [Before (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6930)

```diff
-             oe && (Re ? this.qt("sampled") : dU.warn(`Sample rate (${He}) has determined that this sessionId (${ee}) will not be sent to the server.`)), null === (ie = this._instance.persistence) || void 0 === ie || ie.register({
+             tW && (ZW ? this.qt("sampled") : yL.warn(`Sample rate (${OW}) has determined that this sessionId (${WW}) will not be sent to the server.`)), null === (iW = this._instance.persistence) || void 0 === iW || iW.register({
```

#### 104. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7008` → after: `L7008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7008) · [Before (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7008)

```diff
-               return be ? KK : ye ? FK : MK
+               return EW ? LP : mW ? wP : PP
```

#### 105. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7069` → after: `L7069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7069) · [Before (L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7069)

```diff
-                 Je = "string" == typeof ie && ie !== ee, oe = Xb(He) && He !== Me, Fe = ie === ee && Xb(He) && He === Me && zb(ye) ? ye : null
+                 wW = "string" == typeof iW && iW !== WW, tW = kE(OW) && OW !== NW, cW = iW === WW && kE(OW) && OW === NW && sE(mW) ? mW : null
```

#### 106. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7125` → after: `L7125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7125) · [Before (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7125)

```diff
-             return this.Gt.flatMap((ie => "trigger_pending" !== ie.triggerStatusNoSideEffects(ee) ? [] : ie.getPendingTriggerConditions(ee).map((ee => `trigger group "${ie.group.name}": ${ee}`))))
+             return this.Gt.flatMap((iW => "trigger_pending" !== iW.triggerStatusNoSideEffects(WW) ? [] : iW.getPendingTriggerConditions(WW).map((WW => `trigger group "${iW.group.name}": ${WW}`))))
```

#### 107. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7280` → after: `L7280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7280) · [Before (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7280)

```diff
-           be = 0 > ye ? He : He.slice(ye + 1);
+           EW = 0 > mW ? OW : OW.slice(mW + 1);
```

#### 108. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7282` → after: `L7282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7282) · [Before (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7282)

```diff
-           return ie(be) ? be : void 0
+           return iW(EW) ? EW : void 0
```

#### 109. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7306` → after: `L7306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7306) · [Before (L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7306)

```diff
-           return be.length ? be : void 0
+           return EW.length ? EW : void 0
```

#### 110. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7318` → after: `L7318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7318) · [Before (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7318)

```diff
-               He = "string" == typeof ee ? [ee] : ob(ee) ? ee : [],
+               OW = "string" == typeof WW ? [WW] : ZE(WW) ? WW : [],
```

#### 111. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7330` → after: `L7330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7330) · [Before (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7330)

```diff
-           const ye = "@type" === Je ? Me.length ? "string" == typeof be ? Me[0] : Me : void 0 : "@id" === Je ? nU(uU(ee, Je), ie) : SU(uU(ee, Je), He.maskUrl);
+           const mW = "@type" === wW ? NW.length ? "string" == typeof EW ? NW[0] : NW : void 0 : "@id" === wW ? RL(CL(WW, wW), iW) : qL(CL(WW, wW), OW.maskUrl);
```

#### 112. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7348` → after: `L7348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7348) · [Before (L7348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7348)

```diff
-         return qb(Fe) || sU(Ue, "@graph", Fe), Object.keys(Ue).length ? Ue : null
+         return AE(cW) || IL(LW, "@graph", cW), Object.keys(LW).length ? LW : null
```

#### 113. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7534` → after: `L7534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7534) · [Before (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7534)

```diff
-         return ob(ee) && 0 === ee.length ? (RF = null !== (ie = RF) && void 0 !== ie ? ie : FF([]), RF) : FF(ee)
+         return ZE(WW) && 0 === WW.length ? (xc = null !== (iW = xc) && void 0 !== iW ? iW : wc([]), xc) : wc(WW)
```

#### 114. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7544` → after: `L7544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7544) · [Before (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7544)

```diff
-           return ob(ee) && 0 === ee.length ? RF || (kF = null !== (ie = kF) && void 0 !== ie ? ie : JF([]).then((ee => (RF = ee, ee))).catch((ee => {
+           return ZE(WW) && 0 === WW.length ? xc || (lc = null !== (iW = lc) && void 0 !== iW ? iW : tc([]).then((WW => (xc = WW, WW))).catch((WW => {
```

#### 115. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7665` → after: `L7665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7665) · [Before (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7665)

```diff
-           return Xb(ie) ? ie : null
+           return kE(iW) ? iW : null
```

#### 116. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7669` → after: `L7669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7669) · [Before (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7669)

```diff
-           return null !== (ee = null === (ie = this.re) || void 0 === ie ? void 0 : ie.getMinimumDuration(this.sessionId)) && void 0 !== ee ? ee : null
+           return null !== (WW = null === (iW = this.re) || void 0 === iW ? void 0 : iW.getMinimumDuration(this.sessionId)) && void 0 !== WW ? WW : null
```

#### 117. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7712` → after: `L7712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7712) · [Before (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7712)

```diff
-             return Xb(He) && Xb(ye) ? ye - He : null
+             return kE(OW) && kE(mW) ? mW - OW : null
```

#### 118. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7757-L7760` → after: `L7757-L7760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7757-L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7757-L7760) · [Before (L7757-L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7757-L7760)

```diff
-             Re = null !== (Me = null == oe ? void 0 : oe.maskAllInputs) && void 0 !== Me ? Me : null == Je ? void 0 : Je.maskAllInputs,
-             ke = null !== (Ke = null == oe ? void 0 : oe.maskTextSelector) && void 0 !== Ke ? Ke : null == Je ? void 0 : Je.maskTextSelector,
-             qe = null !== (Ue = null == oe ? void 0 : oe.blockSelector) && void 0 !== Ue ? Ue : null == Je ? void 0 : Je.blockSelector,
-             fe = null !== (Fe = null == oe ? void 0 : oe.maskAllElementAttributes) && void 0 !== Fe ? Fe : null == Je ? void 0 : Je.maskAllElementAttributes;
+             ZW = null !== (NW = null == tW ? void 0 : tW.maskAllInputs) && void 0 !== NW ? NW : null == wW ? void 0 : wW.maskAllInputs,
+             xW = null !== (PW = null == tW ? void 0 : tW.maskTextSelector) && void 0 !== PW ? PW : null == wW ? void 0 : wW.maskTextSelector,
+             lW = null !== (LW = null == tW ? void 0 : tW.blockSelector) && void 0 !== LW ? LW : null == wW ? void 0 : wW.blockSelector,
+             AW = null !== (cW = null == tW ? void 0 : tW.maskAllElementAttributes) && void 0 !== cW ? cW : null == wW ? void 0 : wW.maskAllElementAttributes;
```

#### 119. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7797-L7799` → after: `L7797-L7799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7797-L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7797-L7799) · [Before (L7797-L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7797-L7799)

```diff
-             Je = null !== (ie = null !== (He = null == Ue ? void 0 : Ue.recordCanvas) && void 0 !== He ? He : null == Fe ? void 0 : Fe.enabled) && void 0 !== ie && ie,
-             oe = null !== (ye = null !== (be = null == Ue ? void 0 : Ue.canvasFps) && void 0 !== be ? be : null == Fe ? void 0 : Fe.fps) && void 0 !== ye ? ye : 4;
-           let Re = null !== (Me = null !== (Ke = null == Ue ? void 0 : Ue.canvasQuality) && void 0 !== Ke ? Ke : null == Fe ? void 0 : Fe.quality) && void 0 !== Me ? Me : .4;
+             wW = null !== (iW = null !== (OW = null == LW ? void 0 : LW.recordCanvas) && void 0 !== OW ? OW : null == cW ? void 0 : cW.enabled) && void 0 !== iW && iW,
+             tW = null !== (mW = null !== (EW = null == LW ? void 0 : LW.canvasFps) && void 0 !== EW ? EW : null == cW ? void 0 : cW.fps) && void 0 !== mW ? mW : 4;
+           let ZW = null !== (NW = null !== (PW = null == LW ? void 0 : LW.canvasQuality) && void 0 !== PW ? PW : null == cW ? void 0 : cW.quality) && void 0 !== NW ? NW : .4;
```

#### 120. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7814` → after: `L7814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7814) · [Before (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7814)

```diff
-           return null != He ? He : ie
+           return null != OW ? OW : iW
```

#### 121. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7827` → after: `L7827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7827) · [Before (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7827)

```diff
-             Je = !!(zb(Ue) ? Ue : Fe);
+             wW = !!(sE(LW) ? LW : cW);
```

#### 122. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7840` → after: `L7840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7840) · [Before (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7840)

```diff
-           if (this.oR && Rb(Me))
+           if (this.cZ && xE(NW))
```

#### 123. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7873` → after: `L7873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7873) · [Before (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7873)

```diff
-                   return !He && ie.isInitial ? He : ye(ye({}, ie), {}, {
+                   return !OW && iW.isInitial ? OW : mW(mW({}, iW), {}, {
```

#### 124. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7891` → after: `L7891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7891) · [Before (L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7891)

```diff
-                   return pb(Ke) && Me ? (JM.add(Me), Me) : null != Ke ? Ke : void 0
+                   return UE(PW) && NW ? (tN.add(NW), NW) : null != PW ? PW : void 0
```

#### 125. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7901` → after: `L7901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7901) · [Before (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7901)

```diff
-               })(this._instance.config, this.oR, ee)), {}, {
+               })(this._instance.config, this.cZ, WW)), {}, {
```

#### 126. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7937` → after: `L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7937) · [Before (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7937)

```diff
-             return null !== (He = null == ye ? void 0 : ye.name) && void 0 !== He ? He : null == ye ? void 0 : ye.url
+             return null !== (OW = null == mW ? void 0 : mW.name) && void 0 !== OW ? OW : null == mW ? void 0 : mW.url
```

#### 127. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8007` → after: `L8007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8007) · [Before (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8007)

```diff
-             return Xb(ee) && Number.isFinite(ee) && ee >= 1e3 && 36e5 >= ee ? ee : 6e4
+             return kE(WW) && Number.isFinite(WW) && WW >= 1e3 && 36e5 >= WW ? WW : 6e4
```

#### 128. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8009` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8009) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8009)

```diff
-           return null !== (ie = null === (He = this._instance.config.session_recording) || void 0 === He ? void 0 : He.full_snapshot_interval_millis) && void 0 !== ie ? ie : 3e5
+           return null !== (iW = null === (OW = this._instance.config.session_recording) || void 0 === OW ? void 0 : OW.full_snapshot_interval_millis) && void 0 !== iW ? iW : 3e5
```

#### 129. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8039` → after: `L8039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8039) · [Before (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8039)

```diff
-               const He = "url" === ee ? SM : nM;
+               const OW = "url" === WW ? qN : RN;
```

#### 130. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8058` → after: `L8058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8058) · [Before (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8058)

```diff
-             ie = kb(ee) ? ee : JSON.parse(ee)
+             iW = lE(WW) ? WW : JSON.parse(WW)
```

#### 131. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8064` → after: `L8064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8064) · [Before (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8064)

```diff
-             const ye = null !== (He = ie.cache_timestamp) && void 0 !== He ? He : Date.now();
+             const mW = null !== (OW = iW.cache_timestamp) && void 0 !== OW ? OW : Date.now();
```

#### 132. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8186-L8187` → after: `L8186-L8187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8186-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8186-L8187) · [Before (L8186-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8186-L8187)

```diff
-           const He = `${this.sessionId}:${ee}`;
-           He !== this.Vn && (this.Vn = He, HF.info(`holding buffer: ${ee}. nothing is uploaded until the user interacts with the page`))
+           const OW = `${this.sessionId}:${WW}`;
+           OW !== this.Vn && (this.Vn = OW, mc.info(`holding buffer: ${WW}. nothing is uploaded until the user interacts with the page`))
```

#### 133. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8342-L8343` → after: `L8342-L8343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8342-L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8342-L8343) · [Before (L8342-L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8342-L8343)

```diff
-           const Be = null !== (ye = null !== (be = null !== (Me = null == pe ? void 0 : pe.currentSessionId) && void 0 !== Me ? Me : null == Xe ? void 0 : Xe.nextSessionId) && void 0 !== be ? be : null == ze ? void 0 : ze.sessionId) && void 0 !== ye ? ye : this.Xt,
-             Ee = null !== (Ke = null !== (Ue = null !== (Fe = null == pe ? void 0 : pe.currentWindowId) && void 0 !== Fe ? Fe : null == Xe ? void 0 : Xe.nextWindowId) && void 0 !== Ue ? Ue : null == ze ? void 0 : ze.windowId) && void 0 !== Ke ? Ke : this.je;
+           const sW = null !== (mW = null !== (EW = null !== (NW = null == jW ? void 0 : jW.currentSessionId) && void 0 !== NW ? NW : null == UW ? void 0 : UW.nextSessionId) && void 0 !== EW ? EW : null == kW ? void 0 : kW.sessionId) && void 0 !== mW ? mW : this.Xt,
+             MW = null !== (PW = null !== (LW = null !== (cW = null == jW ? void 0 : jW.currentWindowId) && void 0 !== cW ? cW : null == UW ? void 0 : UW.nextWindowId) && void 0 !== LW ? LW : null == kW ? void 0 : kW.windowId) && void 0 !== PW ? PW : this.je;
```

#### 134. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8436` → after: `L8436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8436) · [Before (L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8436)

```diff
-           return null !== (ee = null === (ie = this.re) || void 0 === ie ? void 0 : ie.getPendingTriggerConditions(this.sessionId)) && void 0 !== ee ? ee : []
+           return null !== (WW = null === (iW = this.re) || void 0 === iW ? void 0 : iW.getPendingTriggerConditions(this.sessionId)) && void 0 !== WW ? WW : []
```

#### 135. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8447` → after: `L8447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8447) · [Before (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8447)

```diff
-             ye = `${this.sessionId}:${He}`;
+             mW = `${this.sessionId}:${OW}`;
```

#### 136. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8450` → after: `L8450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8450) · [Before (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8450)

```diff
-           }), HF.info(`buffering: ${He}`))
+           }), mc.info(`buffering: ${OW}`))
```

#### 137. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8649` → after: `L8649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8649) · [Before (L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8649)

```diff
-             const ee = null != Re ? Re : {},
+             const WW = null != ZW ? ZW : {},
```

#### 138. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8671` → after: `L8671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8671) · [Before (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8671)

```diff
-                 return null !== (ye = He(ee)) && void 0 !== ye ? ye : null
+                 return null !== (mW = OW(WW)) && void 0 !== mW ? mW : null
```

#### 139. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8676` → after: `L8676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8676) · [Before (L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8676)

```diff
-           }), this.ln && (ie.maskAllInputs = null === (be = this.ln.maskAllInputs) || void 0 === be || be, ie.maskTextSelector = null !== (Me = this.ln.maskTextSelector) && void 0 !== Me ? Me : void 0, ie.blockSelector = null !== (Ke = this.ln.blockSelector) && void 0 !== Ke ? Ke … [truncated]
+           }), this.ln && (iW.maskAllInputs = null === (EW = this.ln.maskAllInputs) || void 0 === EW || EW, iW.maskTextSelector = null !== (NW = this.ln.maskTextSelector) && void 0 !== NW ? NW : void 0, iW.blockSelector = null !== (PW = this.ln.blockSelector) && void 0 !== PW ? PW … [truncated]
```

#### 140. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8679` → after: `L8679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8679) · [Before (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8679)

```diff
-           this.Bn = null !== (ee = this.Bn) && void 0 !== ee ? ee : new kU(Fe, {
+           this.Bn = null !== (WW = this.Bn) && void 0 !== WW ? WW : new lL(cW, {
```

#### 141. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8683` → after: `L8683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8683) · [Before (L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8683)

```diff
-               const He = `Too many mutations on node '${ee}'. Rate limiting. This could be due to SVG animations or something similar`;
+               const OW = `Too many mutations on node '${WW}'. Rate limiting. This could be due to SVG animations or something similar`;
```

#### 142. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8713` → after: `L8713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8713) · [Before (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8713)

```diff
-                 return ie.maskAllElementAttributes || ie.maskAttributeFn || (null == He ? void 0 : He.length) && !He.includes("id") ? VU : He => {
+                 return iW.maskAllElementAttributes || iW.maskAttributeFn || (null == OW ? void 0 : OW.length) && !OW.includes("id") ? eL : OW => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (145 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af)

#### 1. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1-L2)

```diff
- export const id = 63;
- export const ids = [63];
+ export const id = 64;
+ export const ids = [64];
```

#### 2. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L4)

```diff
-   40554: (ee, ie, He) => {
+   41001: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L20-L21` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L20-L21) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L20-L21)

```diff
-     var Ue = He(40557).e,
-       Fe = He(40562).d,
+     var LW = OW(41009).c,
+       cW = OW(41012).d,
```

#### 4. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L23)

```diff
-     ie.b = function(ee) {
+     iW.d = function(WW) {
```

#### 5. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L39)

```diff
-   40562: (ee, ie) => {
+   41012: (WW, iW) => {
```

#### 6. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L127)

```diff
-   40557: (ee, ie) => {
+   41009: (WW, iW) => {
```

#### 7. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L175)

```diff
-     }, ie.e = Me
+     }, iW.c = NW
```

#### 8. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L177)

```diff
-   40541: (ee, ie, He) => {
+   40993: (WW, iW, OW) => {
```

#### 9. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L210)

```diff
-     var Ke = He(2966),
+     var PW = OW(3822),
```

#### 10. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L214)

```diff
-     var oe = He(3748);
+     var tW = OW(4605);
```

#### 11. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L216` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L216) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L216)

```diff
-       ke = oe.c,
+       xW = tW.g,
```

#### 12. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L240` → after: `L245-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L245-L246) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L240)

```diff
-         const ie = function(ee) {
+         const iW = UW(WW);
+         this.timestamps.push(WW.timestamp), this.active.push(function(WW) {
```

#### 13. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L242-L244` → after: `L248-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L248-L249) · [Before (L242-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L242-L244)

```diff
-           return ee.type === oe.b.IncrementalSnapshot ? null === (ie = ee.data) || void 0 === ie ? void 0 : ie.source : void 0
-         }(ee);
-         this.timestamps.push(ee.timestamp), this.active.push(fe.includes(ie));
+           return AW.includes(UW(WW)) || WW.type === tW.c.Custom && (null === (iW = WW.data) || void 0 === iW ? void 0 : iW.tag) === tW.l.active
+         }(WW));
```

#### 14. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L248` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L253) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L248)

```diff
-           if (ee.type === oe.b.Custom && "$json_ld" === (null === He || void 0 === He ? void 0 : He.tag)) return;
+           if (WW.type === tW.c.Custom && "$json_ld" === (null === OW || void 0 === OW ? void 0 : OW.tag)) return;
```

#### 15. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L255` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L260) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L255)

```diff
-         if (ee.type === oe.b.Plugin && "rrweb/console@1" === (null === ye || void 0 === ye ? void 0 : ye.plugin)) {
+         if (WW.type === tW.c.Plugin && "rrweb/console@1" === (null === mW || void 0 === mW ? void 0 : mW.plugin)) {
```

#### 16. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L293` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L298) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L293)

```diff
-           if (be = ie ? ee : be, Ue) null !== (Me = ye) && void 0 !== Me && Me.isActive && (He += Math.max(1, ye.end - ye.start)), ye = {
+           if (EW = iW ? WW : EW, LW) null !== (NW = mW) && void 0 !== NW && NW.isActive && (OW += Math.max(1, mW.end - mW.start)), mW = {
```

#### 17. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L321` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L326) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L321)

```diff
-         !this.dR && this.chars + be > this.chunkChars && ye.push(this.finish());
+         !this.sZ && this.chars + EW > this.chunkChars && mW.push(this.finish());
```

#### 18. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L325` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L330) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L325)

```diff
-           !this.dR && this.chars + be.length > this.chunkChars && (ye.push(this.finish()), Me = !1), Me || (this.counter.addMessage(), Me = !0), this.counter.addEvent(ee), this.lines.push(be), this.chars += be.length, this.startMs = Math.min(this.startMs, ee.timestamp), this.endM … [truncated]
+           !this.sZ && this.chars + EW.length > this.chunkChars && (mW.push(this.finish()), NW = !1), NW || (this.counter.addMessage(), NW = !0), this.counter.addEvent(WW), this.lines.push(EW), this.chars += EW.length, this.startMs = Math.min(this.startMs, WW.timestamp), this.endM … [truncated]
```

#### 19. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L329` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L334) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L329)

```diff
-         if (this.dR) return null;
+         if (this.sZ) return null;
```

#### 20. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L401` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L406) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L401)

```diff
-       return Ke.byteLength > Fe || Ue > Je ? (console.warn(`Session replay: dropped a ${Ue}-byte page recording chunk, over the size limits`), null) : {
+       return PW.byteLength > cW || LW > wW ? (console.warn(`Session replay: dropped a ${LW}-byte page recording chunk, over the size limits`), null) : {
```

#### 21. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L409` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L414) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L409)

```diff
-     var de = He(40548);
+     var yW = OW(40999);
```

#### 22. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L417` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L422) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L417)

```diff
-         null === ie || null !== this.tailTimer || this.writer.dR || (this.tailTimer = setTimeout((() => {
+         null === iW || null !== this.tailTimer || this.writer.sZ || (this.tailTimer = setTimeout((() => {
```

#### 23. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L434` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L439) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L434)

```diff
-         if (!this.tickedSinceVideoCut || this.writer.dR) return;
+         if (!this.tickedSinceVideoCut || this.writer.sZ) return;
```

#### 24. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L453` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L458) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L453)

```diff
-               return ie.length <= Je || (console.warn(`Session replay: dropped a page recording chunk of ${ie.length} characters, over the size limits`), !1)
+               return iW.length <= wW || (console.warn(`Session replay: dropped a page recording chunk of ${iW.length} characters, over the size limits`), !1)
```

#### 25. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L487` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L492) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L487)

```diff
-           ee.packed ??= (0, de.c)(ee.text.text)
+           WW.packed ??= (0, yW.d)(WW.text.text)
```

#### 26. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L536-L542` → after: `L541-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L541-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L541-L547) · [Before (L536-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L536-L542)

```diff
-     var te = He(40570);
-     var Ze = He(40572),
-       we = He(3221),
-       De = He(97),
-       Pe = He(103),
-       Ae = He(35),
-       Ye = He(5086);
+     var JW = OW(41014);
+     var hW = OW(41021),
+       HW = OW(4048),
+       nW = OW(100),
+       uW = OW(109),
+       oW = OW(39),
+       dW = OW(5386);
```

#### 27. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L549` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L554) · [Before (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L549)

```diff
-       return "number" === typeof ie && Number.isFinite(ie) ? ie : null
+       return "number" === typeof iW && Number.isFinite(iW) ? iW : null
```

#### 28. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L559` → after: `L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L564) · [Before (L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L559)

```diff
-       return "stream" === ie ? [(0, we.e)()] : "videoFrame" === ie || "bitmap" === ie ? [] : ee
+       return "stream" === iW ? [(0, HW.c)()] : "videoFrame" === iW || "bitmap" === iW ? [] : WW
```

#### 29. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L563-L566` → after: `L568-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L568-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L568-L571) · [Before (L563-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L563-L566)

```diff
-     var ve = He(1155),
-       ue = He(40584),
-       me = He(40592),
-       le = He(40594);
+     var fW = OW(1194),
+       CW = OW(41035),
+       XW = OW(41041),
+       BW = OW(41046);
```

#### 30. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L569` → after: `L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L574) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L569)

```diff
-       return `replayJoiner/${ee}`
+       return `replayJoiner/${WW}`
```

#### 31. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L573` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L578) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L573)

```diff
-         let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ue.g;
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CW.f;
```

#### 32. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L577` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L582) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L577)

```diff
-         const He = (0, me.g)(ee, ie),
+         const OW = (0, XW.h)(WW, iW),
```

#### 33. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L587` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L592) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L587)

```diff
-         return !this.keepalive.isInFlight(Se(ee.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${Le}`, JSON.stringify(ee))
+         return !this.keepalive.isInFlight(qW(WW.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${VW}`, JSON.stringify(WW))
```

#### 34. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L590` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L595) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L590)

```diff
-         const Me = `${this.baseUrl}${ee}`,
+         const NW = `${this.baseUrl}${WW}`,
```

#### 35. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L597` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L602) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L597)

```diff
-             signal: (0, ve.v)(ye)
+             signal: (0, fW.t)(mW)
```

#### 36. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L599-L600` → after: `L604-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L604-L605) · [Before (L599-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L599-L600)

```diff
-           Ue = He <= ue.d ? await this.keepalive.fetch(Me, Ke, He, Se(be)) : await fetch(Me, Ke);
-         if (!Ue.ok) throw new le.b(`Part joiner ${ee} failed with ${Ue.status}`, Ue.status);
+           LW = OW <= CW.e ? await this.keepalive.fetch(NW, PW, OW, qW(EW)) : await fetch(NW, PW);
+         if (!LW.ok) throw new BW.c(`Part joiner ${WW} failed with ${LW.status}`, LW.status);
```

#### 37. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L607` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L612) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L607)

```diff
-         releaseUrl: `${ee.url}${Le}`,
+         releaseUrl: `${WW.url}${VW}`,
```

#### 38. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L610` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L615) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L610)

```diff
-           url: `${ee.url}/v1/relay`,
+           url: `${WW.url}/v1/relay`,
```

#### 39. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L615-L618` → after: `L620-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L620-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L620-L623) · [Before (L615-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L615-L618)

```diff
-     var se = He(7132),
-       Ie = He(40602),
-       he = He(40606),
-       Ne = He(40609);
+     var IW = OW(7493),
+       aW = OW(41052),
+       rW = OW(41056),
+       zW = OW(41063);
```

#### 40. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L621` → after: `L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L626) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L621)

```diff
-       return (0, Ze.b)().manifestUrl
+       return (0, hW.d)().manifestUrl
```

#### 41. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L663` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L668) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L663)

```diff
-         ee > (null !== (He = null === (ye = this.manifest.still) || void 0 === ye ? void 0 : ye.atMs) && void 0 !== He ? He : -1 / 0) && (this.manifest.still = {
+         WW > (null !== (OW = null === (mW = this.manifest.still) || void 0 === mW ? void 0 : mW.atMs) && void 0 !== OW ? OW : -1 / 0) && (this.manifest.still = {
```

#### 42. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L702-L704` → after: `L707-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L707-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L707-L709) · [Before (L702-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L702-L704)

```diff
-         const Me = (0, se.i)(be.furthestStep, ee.furthestStep),
-           Ke = Math.max(null !== (ie = be.unboundKeyPresses) && void 0 !== ie ? ie : 0, null !== (He = ee.unboundKeyPresses) && void 0 !== He ? He : 0);
-         return (Me !== be.furthestStep || Ke !== (null !== (ye = be.unboundKeyPresses) && void 0 !== ye ? ye : 0)) && (void 0 !== Me && (be.furthestStep = Me), Ke > 0 && (be.unboundKeyPresses = Ke), !0)
+         const NW = (0, IW.o)(EW.furthestStep, WW.furthestStep),
+           PW = Math.max(null !== (iW = EW.unboundKeyPresses) && void 0 !== iW ? iW : 0, null !== (OW = WW.unboundKeyPresses) && void 0 !== OW ? OW : 0);
+         return (NW !== EW.furthestStep || PW !== (null !== (mW = EW.unboundKeyPresses) && void 0 !== mW ? mW : 0)) && (void 0 !== NW && (EW.furthestStep = NW), PW > 0 && (EW.unboundKeyPresses = PW), !0)
```

#### 43. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L719` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L724) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L719)

```diff
-         if (this.sending) return void(this.queuedSend = ei(null !== (ie = this.queuedSend) && void 0 !== ie ? ie : [], ee));
+         if (this.sending) return void(this.queuedSend = ii(null !== (iW = this.queuedSend) && void 0 !== iW ? iW : [], WW));
```

#### 44. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L732` → after: `L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L737) · [Before (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L732)

```diff
-           of null !== (ie = this.prepareSend(ee)) && void 0 !== ie ? ie : []) {
+           of null !== (iW = this.prepareSend(WW)) && void 0 !== iW ? iW : []) {
```

#### 45. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L734` → after: `L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L739) · [Before (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L734)

```diff
-           ue.g.sendBeacon(Ge(), JSON.stringify(He)) || (0, he.d)(Ge(), He)
+           CW.f.sendBeacon(FW(), JSON.stringify(OW)) || (0, rW.b)(FW(), OW)
```

#### 46. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L743` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L748) · [Before (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L743)

```diff
-           const ee = await (0, he.d)(Ge(), ie);
+           const WW = await (0, rW.b)(FW(), iW);
```

#### 47. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L865-L866` → after: `L870-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L870-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L870-L871) · [Before (L865-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L865-L866)

```diff
-     var ii = He(40579),
-       Hi = He(5106);
+     var Oi = OW(41028),
+       mi = OW(5397);
```

#### 48. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L888` → after: `L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L893) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L888)

```diff
-           lateUploadUntilMs: ie.expiresAtMs + ii.d,
+           lateUploadUntilMs: iW.expiresAtMs + Oi.e,
```

#### 49. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L892` → after: `L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L897) · [Before (L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L892)

```diff
-         }, null === (be = navigator.locks) || void 0 === be || be.request((0, Hi.w)(ie.recordingId), (() => new Promise((() => {})))), this.putRecording()
+         }, null === (EW = navigator.locks) || void 0 === EW || EW.request((0, mi.u)(iW.recordingId), (() => new Promise((() => {})))), this.putRecording()
```

#### 50. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L946` → after: `L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L951) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L946)

```diff
-         this.record.nextDomSequence = Math.max(null !== (be = this.record.nextDomSequence) && void 0 !== be ? be : 0, ee + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
+         this.record.nextDomSequence = Math.max(null !== (EW = this.record.nextDomSequence) && void 0 !== EW ? EW : 0, WW + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
```

#### 51. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L974` → after: `L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L979) · [Before (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L974)

```diff
-         Ae.i.setItem(Hi.n, !0)
+         oW.i.setItem(mi.j, !0)
```

#### 52. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1038` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1043) · [Before (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1038)

```diff
-     var Ki = He(36938),
+     var Li = OW(37245),
```

#### 53. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1042` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1047) · [Before (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1042)

```diff
-       return Ui()('/*! For license information please see sessionReplayVideo.worker.e6609570.worker.js.LICENSE.txt */\n(()=>{var ee={9:()=>{}},ie={};function He(ye){var be=ie[ye];if(void 0!==be)return be.exports;var Me=ie[ye]={exports:{}};return ee[ye](Me,Me.exports,He),Me.export … [truncated]
+       return ci()('/*! For license information please see sessionReplayVideo.worker.36aaf5cc.worker.js.LICENSE.txt */\n(()=>{var WW={6:()=>{}},iW={};function OW(mW){var EW=iW[mW];if(void 0!==EW)return EW.exports;var NW=iW[mW]={exports:{}};return WW[mW](NW,NW.exports,OW),NW.export … [truncated]
```

#### 54. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1097` → after: `L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1102) · [Before (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1097)

```diff
-         this.requester = "requestFrame" in ye ? ye : this.stream, this.video.muted = !0, this.video.playsInline = !0, this.video.srcObject = this.stream, this.video.play().catch(He), this.video.requestVideoFrameCallback(this.onVideoFrame)
+         this.requester = "requestFrame" in mW ? mW : this.stream, this.video.muted = !0, this.video.playsInline = !0, this.video.srcObject = this.stream, this.video.play().catch(OW), this.video.requestVideoFrameCallback(this.onVideoFrame)
```

#### 55. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1125` → after: `L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1130) · [Before (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1125)

```diff
-             this.stream === ie && (this.stop(), this.onUnavailable(`the canvas capture stream didn't play: ${ee instanceof Error?ee.message:String(ee)}`))
+             this.stream === iW && (this.stop(), this.onUnavailable(`the canvas capture stream didn't play: ${WW instanceof Error?WW.message:String(WW)}`))
```

#### 56. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1150` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1155) · [Before (L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1150)

```diff
-           OR: {
+           xx: {
```

#### 57. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1182` → after: `L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1187) · [Before (L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1182)

```diff
-             const ye = ie.width * ie.height < ee.width * ee.height ? ie : ee;
+             const mW = iW.width * iW.height < WW.width * WW.height ? iW : WW;
```

#### 58. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1200` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1205) · [Before (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1200)

```diff
-           }(0 === He.width ? ie.OR : He, ie.OR, this.grab.maxMacroblocks);
+           }(0 === OW.width ? iW.xx : OW, iW.xx, this.grab.maxMacroblocks);
```

#### 59. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1235` → after: `L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1240) · [Before (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1235)

```diff
-           OR: ie.OR,
+           xx: iW.xx,
```

#### 60. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1250` → after: `L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1255) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1250)

```diff
-         !(ee instanceof DOMException && "InvalidStateError" === ee.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${ee instanceof Error?ee.message:String(ee)}`))
+         !(WW instanceof DOMException && "InvalidStateError" === WW.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${WW instanceof Error?WW.message:String(WW)}`))
```

#### 61. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1263` → after: `L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1268) · [Before (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1263)

```diff
-     var Ti = He(1260);
+     var ji = OW(1301);
```

#### 62. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1275` → after: `L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1280) · [Before (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1275)

```diff
-         const ee = (0, Ti.A)().gameRender();
+         const WW = (0, ji.y)().gameRender();
```

#### 63. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1389` → after: `L1394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1394) · [Before (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1389)

```diff
-             console.warn(`Session replay part joiner failed on video segment ${ie.sequence}; uploading it straight to storage.`, ee), ee instanceof Ei || (this.downUntilMs = this.options.nowMs() + Bi), this.handBack(ie, ee instanceof Ei ? ee.reason : "unreachable")
+             console.warn(`Session replay part joiner failed on video segment ${iW.sequence}; uploading it straight to storage.`, WW), WW instanceof Mi || (this.downUntilMs = this.options.nowMs() + si), this.handBack(iW, WW instanceof Mi ? WW.reason : "unreachable")
```

#### 64. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1414` → after: `L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1419) · [Before (L1414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1414)

```diff
-             if (void 0 === He) throw new Ei("missing", `the joiner asked for part ${ie} of ${ee.parts.length}`);
+             if (void 0 === OW) throw new Mi("missing", `the joiner asked for part ${iW} of ${WW.parts.length}`);
```

#### 65. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1440` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1445) · [Before (L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1440)

```diff
-           return new Ei("refused", `refused: ${ee.reason}`)
+           return new Mi("refused", `refused: ${WW.reason}`)
```

#### 66. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1443` → after: `L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1448) · [Before (L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1443)

```diff
-         return new Ei(ie, `answered ${ee.outcome}`)
+         return new Mi(iW, `answered ${WW.outcome}`)
```

#### 67. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1459` → after: `L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1464) · [Before (L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1459)

```diff
-     const Oi = ue.d;
+     const Si = CW.e;
```

#### 68. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1498` → after: `L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1503) · [Before (L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1498)

```diff
-         if ((null === ie || void 0 === ie ? void 0 : ie.sequence) === ee) return this.telemetry = null, Wi(ie.lJ, this.nowMs()) ? ie.lJ.target : void 0
+         if ((null === iW || void 0 === iW ? void 0 : iW.sequence) === WW) return this.telemetry = null, yi(iW.BL, this.nowMs()) ? iW.BL.target : void 0
```

#### 69. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1506` → after: `L1511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1511) · [Before (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1506)

```diff
-           be = null === ye || void 0 === ye ? void 0 : ye.lJ.get(He);
+           EW = null === mW || void 0 === mW ? void 0 : mW.BL.get(OW);
```

#### 70. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1508` → after: `L1513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1513) · [Before (L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1508)

```diff
-           for (const [Me, Ke] of ye.lJ) Ke.expiresAtMs <= be.expiresAtMs && ye.lJ.delete(Me)
+           for (const [NW, PW] of mW.BL) PW.expiresAtMs <= EW.expiresAtMs && mW.BL.delete(NW)
```

#### 71. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1524` → after: `L1529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1529) · [Before (L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1524)

```diff
-           lJ: new Map,
+           BL: new Map,
```

#### 72. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1530` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1535) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1530)

```diff
-         const He = ee.lJ.get(ie);
+         const OW = WW.BL.get(iW);
```

#### 73. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1536` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1541) · [Before (L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1536)

```diff
-         return this.telemetryAsked === ee || null !== ie && ie.sequence === ee && Wi(ie.lJ, this.nowMs()) ? null : ee
+         return this.telemetryAsked === WW || null !== iW && iW.sequence === WW && yi(iW.BL, this.nowMs()) ? null : WW
```

#### 74. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1595` → after: `L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1600) · [Before (L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1595)

```diff
-               ee.lJ.set(ie + ye, {
+               WW.BL.set(iW + mW, {
```

#### 75. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1600` → after: `L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1605) · [Before (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1600)

```diff
-             return null !== be && be >= this.nextTelemetrySequence() && (null !== (Me = null === (Ke = this.telemetry) || void 0 === Ke ? void 0 : Ke.sequence) && void 0 !== Me ? Me : -1) <= be && void 0 !== He.telemetryTarget && (this.telemetry = {
+             return null !== EW && EW >= this.nextTelemetrySequence() && (null !== (NW = null === (PW = this.telemetry) || void 0 === PW ? void 0 : PW.sequence) && void 0 !== NW ? NW : -1) <= EW && void 0 !== OW.telemetryTarget && (this.telemetry = {
```

#### 76. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1602` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1607) · [Before (L1602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1602)

```diff
-               lJ: {
+               BL: {
```

#### 77. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1626` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1631) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1626)

```diff
-       return `${ee}:${ie}`
+       return `${WW}:${iW}`
```

#### 78. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1657` → after: `L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1662) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1657)

```diff
-           return null !== (ee = this.nextSequence.get("telemetry")) && void 0 !== ee ? ee : 0
+           return null !== (WW = this.nextSequence.get("telemetry")) && void 0 !== WW ? WW : 0
```

#### 79. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1701` → after: `L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1706) · [Before (L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1701)

```diff
-         const ye = null !== (ie = null === (He = ee.part) || void 0 === He ? void 0 : He.sequence) && void 0 !== ie ? ie : null;
+         const mW = null !== (iW = null === (OW = WW.part) || void 0 === OW ? void 0 : OW.sequence) && void 0 !== iW ? iW : null;
```

#### 80. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1707` → after: `L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1712) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1707)

```diff
-             sequence: null !== ye && void 0 !== ye ? ye : this.takeSequence(ee.kind)
+             sequence: null !== mW && void 0 !== mW ? mW : this.takeSequence(WW.kind)
```

#### 81. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1718` → after: `L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1723) · [Before (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1718)

```diff
-         const He = null !== (ie = this.nextSequence.get(ee)) && void 0 !== ie ? ie : 0;
+         const OW = null !== (iW = this.nextSequence.get(WW)) && void 0 !== iW ? iW : 0;
```

#### 82. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1756` → after: `L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1761) · [Before (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1756)

```diff
-             this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= ee.bytes.byteLength, "uploaded" !== ie.type ? (this.callbacks.onDropped(ee, ie.reason, ee.sequence), this.segmentBroken(ee), "refused" !== ie.type || this.stopped || "telemetry" !== ee.kind || (console. … [truncated]
+             this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= WW.bytes.byteLength, "uploaded" !== iW.type ? (this.callbacks.onDropped(WW, iW.reason, WW.sequence), this.segmentBroken(WW), "refused" !== iW.type || this.stopped || "telemetry" !== WW.kind || (console. … [truncated]
```

#### 83. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1773` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1778) · [Before (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1773)

```diff
-                 throw new Error(`rejected for now: ${He.reason}`)
+                 throw new Error(`rejected for now: ${OW.reason}`)
```

#### 84. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1780` → after: `L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1785) · [Before (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1780)

```diff
-               if (ye instanceof le.b && null !== ye.status && ye.status < 500 && !Vi.has(ye.status) && (null === ye.storageCode || !ai.has(ye.storageCode))) return console.warn(`Session replay ${ee.kind} segment ${ee.sequence} refused by storage:`, ye), {
+               if (mW instanceof BW.c && null !== mW.status && mW.status < 500 && !ei.has(mW.status) && (null === mW.storageCode || !vi.has(mW.storageCode))) return console.warn(`Session replay ${WW.kind} segment ${WW.sequence} refused by storage:`, mW), {
```

#### 85. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1791-L1792` → after: `L1796-L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1796-L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1796-L1797) · [Before (L1791-L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1791-L1792)

```diff
-               Me = void 0 === ee.part ? "" : ` part ${ee.part.index}`;
-             if (console.warn(`Session replay ${ee.kind} segment ${ee.sequence}${Me} upload failed:`, ye), ye instanceof le.b && (403 === ye.status && (ie = null, void 0 !== ee.part && this.targets.expire(ee.kind, ee.sequence, ee.part.index)), ++He >= this.options.maxAttempts)) re … [truncated]
+               NW = void 0 === WW.part ? "" : ` part ${WW.part.index}`;
+             if (console.warn(`Session replay ${WW.kind} segment ${WW.sequence}${NW} upload failed:`, mW), mW instanceof BW.c && (403 === mW.status && (iW = null, void 0 !== WW.part && this.targets.expire(WW.kind, WW.sequence, WW.part.index)), ++OW >= this.options.maxAttempts)) re … [truncated]
```

#### 86. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1810` → after: `L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1815) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1810)

```diff
-           return "rejected" in He ? He : {
+           return "rejected" in OW ? OW : {
```

#### 87. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1833` → after: `L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1838) · [Before (L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1833)

```diff
-         return "rejected" in be ? be : {
+         return "rejected" in EW ? EW : {
```

#### 88. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1947` → after: `L1952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1952) · [Before (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1947)

```diff
-           }, null !== (ye = ee.completeUntilIndex) && void 0 !== ye ? ye : 0)
+           }, null !== (mW = WW.completeUntilIndex) && void 0 !== mW ? mW : 0)
```

#### 89. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1975-L1976` → after: `L1980-L1981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L1980-L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1980-L1981) · [Before (L1975-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L1975-L1976)

```diff
-     var Li = He(3214),
-       Ci = He(5081);
+     var Vi = OW(4045),
+       fi = OW(5380);
```

#### 90. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2006` → after: `L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2011) · [Before (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2006)

```diff
-           console.warn("Session replay couldn't start its video; recording DOM and events without it.", ie), this.videoUnavailable(`video couldn't start: ${ie instanceof Error?ie.message:String(ie)}`)
+           console.warn("Session replay couldn't start its video; recording DOM and events without it.", iW), this.videoUnavailable(`video couldn't start: ${iW instanceof Error?iW.message:String(iW)}`)
```

#### 91. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2012` → after: `L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2017) · [Before (L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2012)

```diff
-           Ke = (0, ii.k)(ie),
+           PW = (0, Oi.t)(iW),
```

#### 92. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2023-L2024` → after: `L2028-L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2028-L2029) · [Before (L2023-L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2023-L2024)

```diff
-           console.error("Session replay video worker error.", ee.message), this.worker === Me && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${ee.message||"it didn't load"}`))
-         }, this.worker = Me, this.uploads = Je, this.joiner = Fe, this.deps.debug.joiner = null !== (He = null === Fe || void 0 === Fe ? void 0 : Fe.stats) && void 0 !== He ? He : null, this.videoStarted = !0, this.deps.stills.start();
+           console.error("Session replay video worker error.", WW.message), this.worker === NW && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${WW.message||"it didn't load"}`))
+         }, this.worker = NW, this.uploads = wW, this.joiner = cW, this.deps.debug.joiner = null !== (OW = null === cW || void 0 === cW ? void 0 : cW.stats) && void 0 !== OW ? OW : null, this.videoStarted = !0, this.deps.stills.start();
```

#### 93. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2026` → after: `L2031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2031) · [Before (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2026)

```diff
-           Re = (0, we.e)();
+           ZW = (0, HW.c)();
```

#### 94. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2040` → after: `L2045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2045) · [Before (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2040)

```diff
-           journalRecordingId: null !== (ye = null === (be = this.deps.journal) || void 0 === be ? void 0 : be.recordingId) && void 0 !== ye ? ye : null
+           journalRecordingId: null !== (mW = null === (EW = this.deps.journal) || void 0 === EW ? void 0 : EW.recordingId) && void 0 !== mW ? mW : null
```

#### 95. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2095` → after: `L2100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2100) · [Before (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2095)

```diff
-             }), this.deps.experiment.logStats && console.warn(`Session replay stats: quality level ${ee.level} (${ee.reason})`), this.deps.telemetry.writeEvent("qualityChanged");
+             }), this.deps.experiment.logStats && console.warn(`Session replay stats: quality level ${WW.level} (${WW.reason})`), this.deps.telemetry.writeEvent("qualityChanged");
```

#### 96. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2109` → after: `L2114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2114) · [Before (L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2109)

```diff
-         this.videoStatus = ee, (0, Li.g)("dom_only", this.deps.recording), null !== this.deps.dom() && (0, Ci.g)(ee, ie)
+         this.videoStatus = WW, (0, Vi.i)("dom_only", this.deps.recording), null !== this.deps.dom() && (0, fi.d)(WW, iW)
```

#### 97. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2114` → after: `L2119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2119) · [Before (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2114)

```diff
-         console.warn(`Session replay stats: ${ie} fps encoded, ${ee.encodeWidth}x${ee.encodeHeight} ${ee.hardwareAcceleration}`)
+         console.warn(`Session replay stats: ${iW} fps encoded, ${WW.encodeWidth}x${WW.encodeHeight} ${WW.hardwareAcceleration}`)
```

#### 98. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2134` → after: `L2139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2139) · [Before (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2134)

```diff
-     const ui = 3 * ue.d / 4,
+     const Xi = 3 * CW.e / 4,
```

#### 99. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2140` → after: `L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2145) · [Before (L2140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2140)

```diff
-     var li = He(40617);
+     var qi = OW(41067);
```

#### 100. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2143` → after: `L2148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2148) · [Before (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2143)

```diff
-         maxBytes: ii.g
+         maxBytes: Oi.l
```

#### 101. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2148` → after: `L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2153) · [Before (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2148)

```diff
-         let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ue.g;
+         let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CW.f;
```

#### 102. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2162` → after: `L2167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2167) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2162)

```diff
-         const Me = He.byteLength <= Si.maxBytes ? He : ye;
+         const NW = OW.byteLength <= Ri.maxBytes ? OW : mW;
```

#### 103. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2172` → after: `L2177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2177) · [Before (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2172)

```diff
-         if (this.stopped || null === He || He.atMs <= (null !== (ee = null === (ie = this.queued) || void 0 === ie ? void 0 : ie.atMs) && void 0 !== ee ? ee : -1 / 0)) return;
+         if (this.stopped || null === OW || OW.atMs <= (null !== (WW = null === (iW = this.queued) || void 0 === iW ? void 0 : iW.atMs) && void 0 !== WW ? WW : -1 / 0)) return;
```

#### 104. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2202` → after: `L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2207) · [Before (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2202)

```diff
-         if (this.stopped || null === be || be.atMs <= (null !== (ee = null === (ie = this.manifest.contents.still) || void 0 === ie ? void 0 : ie.atMs) && void 0 !== ee ? ee : -1 / 0)) return;
+         if (this.stopped || null === EW || EW.atMs <= (null !== (WW = null === (iW = this.manifest.contents.still) || void 0 === iW ? void 0 : iW.atMs) && void 0 !== WW ? WW : -1 / 0)) return;
```

#### 105. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2205` → after: `L2210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2210) · [Before (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2205)

```diff
-         const Ke = null !== (ye = null === Me || void 0 === Me ? void 0 : Me.sequence) && void 0 !== ye ? ye : this.nextSequence,
+         const PW = null !== (mW = null === NW || void 0 === NW ? void 0 : NW.sequence) && void 0 !== mW ? mW : this.nextSequence,
```

#### 106. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2217` → after: `L2222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2222) · [Before (L2217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2217)

```diff
-         }, ie, ni, this.keepalive)) && void 0 !== He ? He : null;
+         }, iW, Gi, this.keepalive)) && void 0 !== OW ? OW : null;
```

#### 107. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2222` → after: `L2227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2227) · [Before (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2222)

```diff
-         } = (0, li.j)(ee, ie, ni);
+         } = (0, qi.h)(WW, iW, Gi);
```

#### 108. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2236-L2241` → after: `L2241-L2246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2241-L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2241-L2246) · [Before (L2236-L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2236-L2241)

```diff
-     var si = He(5100),
-       Ii = He(40619),
-       Ni = He(40627),
-       Gi = He(40631),
-       ri = He(7136),
-       Qi = He(7142);
+     var ai = OW(5390),
+       ri = OW(41073),
+       zi = OW(41082),
+       Fi = OW(41084),
+       Qi = OW(7500),
+       WO = OW(7502);
```

#### 109. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2309-L2310` → after: `L2314-L2315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2314-L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2314-L2315) · [Before (L2309-L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2309-L2310)

```diff
-     var HH = He(5109),
-       yH = He(40638);
+     var mO = OW(5399),
+       EO = OW(41091);
```

#### 110. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2315-L2317` → after: `L2320-L2322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2320-L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2320-L2322) · [Before (L2315-L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2315-L2317)

```diff
-         const ye = ie.dryRun ? null : null !== (He = ee.partJoiner) && void 0 !== He ? He : null,
-           be = null === ye ? null : (0, me.k)(je(ye)),
-           Ke = ie.dryRun ? new li.e : new li.i((0, Ze.b)().segmentUploadUrl, {
+         const mW = iW.dryRun ? null : null !== (OW = WW.partJoiner) && void 0 !== OW ? OW : null,
+           EW = null === mW ? null : (0, XW.l)(GW(mW)),
+           PW = iW.dryRun ? new qi.d : new qi.f((0, hW.d)().segmentUploadUrl, {
```

#### 111. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2325` → after: `L2330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2330) · [Before (L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2325)

```diff
-             Fe = "boolean" === typeof Ue ? Ue : null;
+             cW = "boolean" === typeof LW ? LW : null;
```

#### 112. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2328-L2331` → after: `L2333-L2336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2333-L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2333-L2336) · [Before (L2328-L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2328-L2331)

```diff
-             maxFps: null !== (ie = ae("replayMaxFps")) && void 0 !== ie ? ie : Ke.maxFps,
-             maxMacroblocks: null !== (He = ae("replayMaxMacroblocks")) && void 0 !== He ? He : Ke.maxMacroblocks,
-             captureBudgetMsPerSecond: null !== (ye = ae("replayCaptureBudgetMs")) && void 0 !== ye ? ye : Ke.captureBudgetMsPerSecond,
-             captureFrameCostFloorMs: null !== (be = ae("replayCaptureCostFloorMs")) && void 0 !== be ? be : Ke.captureFrameCostFloorMs,
+             maxFps: null !== (iW = vW("replayMaxFps")) && void 0 !== iW ? iW : PW.maxFps,
+             maxMacroblocks: null !== (OW = vW("replayMaxMacroblocks")) && void 0 !== OW ? OW : PW.maxMacroblocks,
+             captureBudgetMsPerSecond: null !== (mW = vW("replayCaptureBudgetMs")) && void 0 !== mW ? mW : PW.captureBudgetMsPerSecond,
+             captureFrameCostFloorMs: null !== (EW = vW("replayCaptureCostFloorMs")) && void 0 !== EW ? EW : PW.captureFrameCostFloorMs,
```

#### 113. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2335` → after: `L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2340) · [Before (L2335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2335)

```diff
-             skipLowMemoryDevices: null !== Fe && void 0 !== Fe ? Fe : Ke.skipLowMemoryDevices
+             skipLowMemoryDevices: null !== cW && void 0 !== cW ? cW : PW.skipLowMemoryDevices
```

#### 114. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2341-L2342` → after: `L2346-L2347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2346-L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2346-L2347) · [Before (L2341-L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2341-L2342)

```diff
-         const oe = (0, HH.e)(this.videoConfig);
-         (0, Li.g)("recorded" === oe ? "video" : "dom_only", ee), this.manifest = new Qe(ee.recordingId, ee.uploadToken, !ie.dryRun, {
+         const tW = (0, mO.b)(this.videoConfig);
+         (0, Vi.i)("recorded" === tW ? "video" : "dom_only", WW), this.manifest = new Wi(WW.recordingId, WW.uploadToken, !iW.dryRun, {
```

#### 115. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2355` → after: `L2360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2360) · [Before (L2355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2355)

```diff
-             if ("videoSegments" === ie) null === (ye = this.video.uploads) || void 0 === ye || ye.listed(He.sequence, null !== (be = He.parts) && void 0 !== be ? be : null);
+             if ("videoSegments" === iW) null === (mW = this.video.uploads) || void 0 === mW || mW.listed(OW.sequence, null !== (EW = OW.parts) && void 0 !== EW ? EW : null);
```

#### 116. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2364` → after: `L2369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2369) · [Before (L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2364)

```diff
-         }), !ie.dryRun && Gi.b.supported && (this.journal = new bi(new Gi.b, ee, this.manifest.contents, (0, Ze.b)())), this.debug = function() {
+         }), !iW.dryRun && Fi.d.supported && (this.journal = new Ni(new Fi.d, WW, this.manifest.contents, (0, hW.d)())), this.debug = function() {
```

#### 117. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2384` → after: `L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2389) · [Before (L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2384)

```diff
-             this.debug.uploadedBytesByKind[ee.kind] = (null !== (He = this.debug.uploadedBytesByKind[ee.kind]) && void 0 !== He ? He : 0) + ee.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(ee.meta, ie, ee.bytes), this.pageExi … [truncated]
+             this.debug.uploadedBytesByKind[WW.kind] = (null !== (OW = this.debug.uploadedBytesByKind[WW.kind]) && void 0 !== OW ? OW : 0) + WW.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(WW.meta, iW, WW.bytes), this.pageExi … [truncated]
```

#### 118. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2388` → after: `L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2393) · [Before (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2388)

```diff
-             if (console.warn(`Session replay dropped a ${ee.kind} segment: ${ie}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === ee.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (ye = this.video.uplo … [truncated]
+             if (console.warn(`Session replay dropped a ${WW.kind} segment: ${iW}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === WW.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (mW = this.video.uplo … [truncated]
```

#### 119. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2399` → after: `L2404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2404) · [Before (L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2399)

```diff
-             this.stop(`uploads refused: ${ee}`)
+             this.stop(`uploads refused: ${WW}`)
```

#### 120. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2443` → after: `L2448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2448) · [Before (L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2443)

```diff
-           const ie = null !== (ee = (0, Ye.f)() ? Pe.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== ee ? ee : Ae.i.getItem("replayPostHogHost");
+           const iW = null !== (WW = (0, dW.f)() ? uW.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== WW ? WW : oW.i.getItem("replayPostHogHost");
```

#### 121. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2449` → after: `L2454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2454) · [Before (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2449)

```diff
-         if (this.ownFpsMonitor = null === Re ? new yH.c({
+         if (this.ownFpsMonitor = null === ZW ? new EO.b({
```

#### 122. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2456` → after: `L2461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2461) · [Before (L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2456)

```diff
-           }) : null, Ue.h.subscribe("sessionReplayLowFps", (ee => {
+           }) : null, LW.l.subscribe("sessionReplayLowFps", (WW => {
```

#### 123. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2461` → after: `L2466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2466) · [Before (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2461)

```diff
-           })), Ue.h.subscribe("sessionReplayStayProgress", (ee => {
+           })), LW.l.subscribe("sessionReplayStayProgress", (WW => {
```

#### 124. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2463` → after: `L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2468) · [Before (L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2463)

```diff
-           })), Ue.h.subscribe("sessionReplayGameQuit", (ee => {
+           })), LW.l.subscribe("sessionReplayGameQuit", (WW => {
```

#### 125. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2469` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2474) · [Before (L2469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2469)

```diff
-           })), null !== ie.currentGame && (this.listStay(ie.currentGame), Ue.h.yR("sessionReplayStayOpened", ie.currentGame.gameNameWithVariation)), this.start(ee.expiresAtMs), this.dom = null, null !== Re) {
+           })), null !== iW.currentGame && (this.listStay(iW.currentGame), LW.l.iZ("sessionReplayStayOpened", iW.currentGame.gameNameWithVariation)), this.start(WW.expiresAtMs), this.dom = null, null !== ZW) {
```

#### 126. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2473` → after: `L2478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2478) · [Before (L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2473)

```diff
-           }, this.journal, new te.e);
+           }, this.journal, new JW.d);
```

#### 127. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2487` → after: `L2492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2492) · [Before (L2487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2487)

```diff
-         return null !== (ee = null === (ie = this.videoConfig) || void 0 === ie ? void 0 : ie.manifestIntervalMs) && void 0 !== ee ? ee : 3e4
+         return null !== (WW = null === (iW = this.videoConfig) || void 0 === iW ? void 0 : iW.manifestIntervalMs) && void 0 !== WW ? WW : 3e4
```

#### 128. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2497` → after: `L2502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2502) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2497)

```diff
-         this.manifest.gameJoined("anonymous" === this.recording.tags.place_mode || null === ie ? He : {
+         this.manifest.gameJoined("anonymous" === this.recording.tags.place_mode || null === iW ? OW : {
```

#### 129. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2505` → after: `L2510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2510) · [Before (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2505)

```diff
-         }), this.flushTelemetry(), this.listStay(ee), Ue.h.yR("sessionReplayStayOpened", ee.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
+         }), this.flushTelemetry(), this.listStay(WW), LW.l.iZ("sessionReplayStayOpened", WW.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
```

#### 130. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2527` → after: `L2532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2532) · [Before (L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2527)

```diff
-         }), Math.max(0, ee - Date.now() - 6e4))), this.pageExit.listen(ie), this.telemetry.attach((0, Ni.c)(), (() => {
+         }), Math.max(0, WW - Date.now() - 6e4))), this.pageExit.listen(iW), this.telemetry.attach((0, zi.e)(), (() => {
```

#### 131. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2536` → after: `L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2541) · [Before (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2536)

```diff
-         (0, HH.h)((() => {
+         (0, mO.c)((() => {
```

#### 132. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2538` → after: `L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2543) · [Before (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2538)

```diff
-         }), ie), null !== this.journal && (0, si.d)(ie)
+         }), iW), null !== this.journal && (0, ai.c)(iW)
```

#### 133. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2543` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2548) · [Before (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2543)

```diff
-           console.warn(`Session replay stopped recording: ${ee}`), this.debug.stoppedReason = ee, this.lifetime.abort();
+           console.warn(`Session replay stopped recording: ${WW}`), this.debug.stoppedReason = WW, this.lifetime.abort();
```

#### 134. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2545` → after: `L2550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2550) · [Before (L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2545)

```diff
-           this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, Ci.j)(), this.telemetry.stop(), this.flushTelemetry(), null === (ie = this.dom) || void 0 === ie || ie.cut(), null === (He = this.dom) || void 0 === He || He.close(), this.video.endVideo(), this … [truncated]
+           this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, fi.h)(), this.telemetry.stop(), this.flushTelemetry(), null === (iW = this.dom) || void 0 === iW || iW.cut(), null === (OW = this.dom) || void 0 === OW || OW.close(), this.video.endVideo(), this … [truncated]
```

#### 135. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2554` → after: `L2559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2559) · [Before (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2554)

```diff
-         } = this.video.canvasWatch, ye = Ke.c.getLastColyseusPingMs();
+         } = this.video.canvasWatch, mW = PW.b.getLastColyseusPingMs();
```

#### 136. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2619` → after: `L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2624) · [Before (L2619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2619)

```diff
-   7136: (ee, ie, He) => {
+   7500: (WW, iW, OW) => {
```

#### 137. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2624` → after: `L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2629) · [Before (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2624)

```diff
-     var ye = He(7142);
+     var mW = OW(7502);
```

#### 138. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2670` → after: `L2675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2675) · [Before (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2670)

```diff
-         He.setUint8(ye, Je), He.setUint32(ye + 1, this.timeUnits(ee), !0), He.setUint16(ye + 5, te(ie.backingWidth), !0), He.setUint16(ye + 7, te(ie.backingHeight), !0), He.setUint16(ye + 9, te(ie.cssWidth), !0), He.setUint16(ye + 11, te(ie.cssHeight), !0), He.setUint16(ye + 13,  … [truncated]
+         OW.setUint8(mW, wW), OW.setUint32(mW + 1, this.timeUnits(WW), !0), OW.setUint16(mW + 5, TW(iW.backingWidth), !0), OW.setUint16(mW + 7, TW(iW.backingHeight), !0), OW.setUint16(mW + 9, TW(iW.cssWidth), !0), OW.setUint16(mW + 11, TW(iW.cssHeight), !0), OW.setUint16(mW + 13,  … [truncated]
```

#### 139. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2685` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2690) · [Before (L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2685)

```diff
-         this.view.setUint8(Me, ke), this.view.setUint32(Me + 1, this.timeUnits(ee), !0), this.view.setUint8(Me + 5, ie), this.view.setUint8(Me + 6, (He ? ze : 0) | (ye ? Be : 0) | (be ? Ee : 0)), this.length += Xe
+         this.view.setUint8(NW, xW), this.view.setUint32(NW + 1, this.timeUnits(WW), !0), this.view.setUint8(NW + 5, iW), this.view.setUint8(NW + 6, (OW ? kW : 0) | (mW ? sW : 0) | (EW ? MW : 0)), this.length += UW
```

#### 140. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2707` → after: `L2712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2712) · [Before (L2707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2707)

```diff
-       if (He < Ke || He > Me || ie.getUint32(0, !0) !== be) throw new Error(`Not a version ${Ke}-${Me} replay telemetry chunk`);
+       if (OW < PW || OW > NW || iW.getUint32(0, !0) !== EW) throw new Error(`Not a version ${PW}-${NW} replay telemetry chunk`);
```

#### 141. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2737` → after: `L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2742) · [Before (L2737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2737)

```diff
-             renderer: null !== (Pe = de[ie.getUint8(De + 15)]) && void 0 !== Pe ? Pe : "unknown",
+             renderer: null !== (nW = YW[iW.getUint8(HW + 15)]) && void 0 !== nW ? nW : "unknown",
```

#### 142. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2746` → after: `L2751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2751) · [Before (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2746)

```diff
-             event: null !== (Ae = We[ie.getUint8(De + 5)]) && void 0 !== Ae ? Ae : "none"
+             event: null !== (uW = yW[iW.getUint8(HW + 5)]) && void 0 !== uW ? uW : "none"
```

#### 143. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2753` → after: `L2758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2758) · [Before (L2753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2753)

```diff
-           if (ee !== ke || !Ze.inputRecorded) throw new Error(`Unknown replay telemetry record type ${ee} at byte ${De}`);
+           if (WW !== xW || !JW.inputRecorded) throw new Error(`Unknown replay telemetry record type ${WW} at byte ${HW}`);
```

#### 144. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2759` → after: `L2764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2764) · [Before (L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2759)

```diff
-               code: null !== (Ye = ye.d[ie.getUint8(De + 5)]) && void 0 !== Ye ? Ye : ye.d[0],
+               code: null !== (oW = mW.c[iW.getUint8(HW + 5)]) && void 0 !== oW ? oW : mW.c[0],
```

#### 145. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2770` → after: `L2775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR2775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2775) · [Before (L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L2770)

```diff
-   36938: ee => {
+   37245: WW => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (u88b9b.1969c480 → 1yqdn.8419f1e1)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a)

#### 1. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L1-L2)

```diff
- export const id = 64;
- export const ids = [64];
+ export const id = 65;
+ export const ids = [65];
```

#### 2. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L4)

```diff
-   40657: (ee, ie, He) => {
+   41118: (WW, iW, OW) => {
```

#### 3. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L8-L13` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L8-L13) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L8-L13)

```diff
-     var ye = He(40579),
-       be = He(35),
-       Me = He(40570),
-       Ke = He(40548),
-       Ue = He(40572),
-       Fe = He(1155);
+     var mW = OW(41028),
+       EW = OW(39),
+       NW = OW(41014),
+       PW = OW(40999),
+       LW = OW(41021),
+       cW = OW(1194);
```

#### 4. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L20-L21` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L20-L21) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L20-L21)

```diff
-         be = (0, Fe.v)(Je),
-         Me = void 0 === He ? be : (0, Fe.k)([He, be]);
+         EW = (0, cW.t)(wW),
+         NW = void 0 === OW ? EW : (0, cW.m)([OW, EW]);
```

#### 5. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L38)

```diff
-         if (!ie.ok) throw new Error(`HTTP ${ie.status}`);
+         if (!iW.ok) throw new Error(`HTTP ${iW.status}`);
```

#### 6. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L43-L49` → after: `L43-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L43-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L43-L49) · [Before (L43-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L43-L49)

```diff
-         return console.warn(`Session replay couldn't ask the part joiner about video segment ${ie}; uploading it from the journal.`, Ue), null
-       }
-     }
-     var Re = He(40606),
-       ke = He(40631),
-       qe = He(5106),
-       fe = He(40609);
+         return console.warn(`Session replay couldn't ask the part joiner about video segment ${iW}; uploading it from the journal.`, LW), null
+       }
+     }
+     var ZW = OW(41056),
+       xW = OW(41084),
+       lW = OW(5397),
+       AW = OW(41063);
```

#### 7. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L61)

```diff
-         return console.warn(`Session replay couldn't mux late ${ye} segment ${be}; skipping it.`, Ue), "refused"
+         return console.warn(`Session replay couldn't mux late ${mW} segment ${EW}; skipping it.`, LW), "refused"
```

#### 8. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L73)

```diff
-         return "rejected" in Ue ? (console.warn(`Session replay late ${ye} segment ${be} refused: ${Ue.reason}`), Ue.retryable ? "retryLater" : "refused") : (await He.put(Ue.uploadUrl, Ke, Me, Ue.ifNoneMatch), "uploaded")
+         return "rejected" in LW ? (console.warn(`Session replay late ${mW} segment ${EW} refused: ${LW.reason}`), LW.retryable ? "retryLater" : "refused") : (await OW.put(LW.uploadUrl, PW, NW, LW.ifNoneMatch), "uploaded")
```

#### 9. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L75)

```diff
-         return console.warn(`Session replay late ${ye} segment ${be} upload failed; trying again later.`, Ue), "retryLater"
+         return console.warn(`Session replay late ${mW} segment ${EW} upload failed; trying again later.`, LW), "retryLater"
```

#### 10. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L81)

```diff
-         Me = (null !== (ye = He.domSegments) && void 0 !== ye ? ye : []).filter((ee => ee.endMs <= be));
+         NW = (null !== (mW = OW.domSegments) && void 0 !== mW ? mW : []).filter((WW => WW.endMs <= EW));
```

#### 11. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L83)

```diff
-       for (const Ke of (0, fe.e)({
+       for (const PW of (0, AW.f)({
```

#### 12. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L94-L98` → after: `L94-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L94-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L94-L98) · [Before (L94-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L94-L98)

```diff
-     var Xe = He(40665),
-       ze = He(40679),
-       Be = He(40726),
-       Ee = He(40750),
-       ge = He(40738);
+     var UW = OW(41120),
+       kW = OW(41142),
+       sW = OW(41179),
+       MW = OW(41205),
+       KW = OW(41190);
```

#### 13. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L106)

```diff
-           format: new ze.i({
+           format: new kW.h({
```

#### 14. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L116-L117` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L116-L117) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L116-L117)

```diff
-           target: new Be.e
-         }), this.source = new Ee.g(ee), this.output.addVideoTrack(this.source), this.pending = this.output.start()
+           target: new sW.f
+         }), this.source = new MW.k(WW), this.output.addVideoTrack(this.source), this.pending = this.output.start()
```

#### 15. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L141)

```diff
-           endUs: null !== (ee = this.addingTimestampUs) && void 0 !== ee ? ee : this.lastTimestampUs + 1e6 * this.frameDurationS
+           endUs: null !== (WW = this.addingTimestampUs) && void 0 !== WW ? WW : this.lastTimestampUs + 1e6 * this.frameDurationS
```

#### 16. `bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3aR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/8c1de74d9c741681470e194be91750d525c8981d...build/bloxd.io/1yqdn.8419f1e1#diff-fe75888c5606496c5274bc949ed44695f38117428019029211c776ad64879b3a) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/1yqdn.8419f1e1/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/8c1de74d9c741681470e194be91750d525c8981d/bundles/bloxd.io/chunks/js/sessionReplayTailRecovery.js#L152)

```diff
-     He(40602);
+     OW(41052);
```
