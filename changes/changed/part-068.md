# Changed — Bundle Modifications Report (Part 068 / 086)

- **Updated at**: `2026-11-28T01:59 JST`
- **Part**: `68 / 86` (**385** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 067](part-067.md) · [Part 069 →](part-069.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (gw4e3a.937868ec → 1yqdn.8419f1e1 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (153 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f)

#### 68. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1017-L1018` → after: `L1017-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1017-L1018) · [Before (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1017-L1018)

```diff
-         const DB = null !== (OB = (0, FO.e)(BB)) && void 0 !== OB ? OB : BB;
-         this.counts.set(DB, (null !== (GB = this.counts.get(DB)) && void 0 !== GB ? GB : 0) + 1), this.timer ??= setTimeout((() => {
+         const EW = null !== (iW = (0, ei.g)(WW)) && void 0 !== iW ? iW : WW;
+         this.counts.set(EW, (null !== (OW = this.counts.get(EW)) && void 0 !== OW ? OW : 0) + 1), this.timer ??= setTimeout((() => {
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1036` → after: `L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1036) · [Before (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1036)

```diff
-           game_name: null === this.game ? null : (0, tB.ac)(this.game),
+           game_name: null === this.game ? null : (0, QW.Tb)(this.game),
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1042` → after: `L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1042) · [Before (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1042)

```diff
-     var LO = GB(162);
+     var gi = OW(154);
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1046` → after: `L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1046) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1046)

```diff
-       return null !== (OB = null === (GB = LO.l[BB]) || void 0 === GB ? void 0 : GB.toLowerCase()) && void 0 !== OB ? OB : String(BB)
+       return null !== (iW = null === (OW = gi.k[WW]) || void 0 === OW ? void 0 : OW.toLowerCase()) && void 0 !== iW ? iW : String(WW)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1154` → after: `L1154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1154) · [Before (L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1154)

```diff
-         this.replay = BB, this.quitContext = OB, this.settings = YO.c.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
+         this.replay = WW, this.quitContext = iW, this.settings = mi.d.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1157` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1157) · [Before (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1157)

```diff
-         QO.o.subscribe("purchaseStarted", (BB => {
+         Ni.l.subscribe("purchaseStarted", (WW => {
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1164` → after: `L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1164) · [Before (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1164)

```diff
-         })), QO.o.subscribe("purchaseEnded", (BB => {
+         })), Ni.l.subscribe("purchaseEnded", (WW => {
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1171` → after: `L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1171) · [Before (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1171)

```diff
-         })), QO.o.subscribe("adRequested", (BB => {
+         })), Ni.l.subscribe("adRequested", (WW => {
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1181` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1181) · [Before (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1181)

```diff
-         })), QO.o.subscribe("appManagerUpdated|soundOnFromAd", (BB => {
+         })), Ni.l.subscribe("appManagerUpdated|soundOnFromAd", (WW => {
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1183-L1184` → after: `L1183-L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1183-L1184) · [Before (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1183-L1184)

```diff
-         })), QO.o.subscribe("appManagerUpdated|clientEscMenuOptions", (BB => {
-           YO.c.isApplyingDefaults ? this.settings = BB : this.onSettingsChanged(BB)
+         })), Ni.l.subscribe("appManagerUpdated|clientEscMenuOptions", (WW => {
+           mi.d.isApplyingDefaults ? this.settings = WW : this.onSettingsChanged(WW)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1192-L1193` → after: `L1192-L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1192-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1192-L1193) · [Before (L1192-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1192-L1193)

```diff
-           ad_kind: null !== (BB = null === YB || void 0 === YB ? void 0 : YB.adKind) && void 0 !== BB ? BB : "unknown",
-           provider: null !== (OB = null === YB || void 0 === YB ? void 0 : YB.provider) && void 0 !== OB ? OB : null,
+           ad_kind: null !== (WW = null === mW || void 0 === mW ? void 0 : mW.adKind) && void 0 !== WW ? WW : "unknown",
+           provider: null !== (iW = null === mW || void 0 === mW ? void 0 : mW.provider) && void 0 !== iW ? iW : null,
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1210` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1210) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1210)

```diff
-           in_game: "inGame" === YO.c.get("gameState")
+           in_game: "inGame" === mi.d.get("gameState")
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1228-L1229` → after: `L1228-L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1228-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1228-L1229) · [Before (L1228-L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1228-L1229)

```diff
-       switch ((0, sB.B)(BB)) {
-         case xB.e.DISCORD_GUILD:
+       switch ((0, zW.A)(WW)) {
+         case FW.b.DISCORD_GUILD:
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1231)

```diff
-         case xB.e.DISCORD_DM:
+         case FW.b.DISCORD_DM:
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1234` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1234) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1234)

```diff
-           return (0, sB.Q)(BB) ? "public" : "private"
+           return (0, zW.R)(WW) ? "public" : "private"
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1252)

```diff
-             QO.o.tM("sessionReplayGameQuit", {
+             Ni.l.iZ("sessionReplayGameQuit", {
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1254)

```diff
-               gameName: "string" === typeof YB ? YB : null
+               gameName: "string" === typeof mW ? mW : null
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1257` → after: `L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1257) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1257)

```diff
-           isMenuOpen: MO.r,
+           isMenuOpen: ti.l,
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1263-L1264` → after: `L1263-L1264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1263-L1264) · [Before (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1263-L1264)

```diff
-             isTouchScreen: () => YO.c.get("isTouchScreen"),
-             getInputDevice: () => YO.c.get("activeInputDevice"),
+             isTouchScreen: () => mi.d.get("isTouchScreen"),
+             getInputDevice: () => mi.d.get("activeInputDevice"),
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1268` → after: `L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1268) · [Before (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1268)

```diff
-               QO.o.tM("sessionReplayStayProgress", BB)
+               Ni.l.iZ("sessionReplayStayProgress", WW)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1274` → after: `L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1274) · [Before (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1274)

```diff
-         const BB = (0, PO.b)(),
+         const WW = (0, Zi.e)(),
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1277-L1278` → after: `L1277-L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1277-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1277-L1278) · [Before (L1277-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1277-L1278)

```diff
-         const GB = YO.c.get("gameState");
-         "inGame" === GB ? this.joinConnectedGame() : "loadingScreen" !== GB && "findingLobby" !== GB || this.leaves.joinStarted(), this.subscribeToGameFlow(), new EO(this.replay, this.leaves.quitContext).start(), this.health.start(), this.trackInput(), this.pageEvents.startFirstI … [truncated]
+         const OW = mi.d.get("gameState");
+         "inGame" === OW ? this.joinConnectedGame() : "loadingScreen" !== OW && "findingLobby" !== OW || this.leaves.joinStarted(), this.subscribeToGameFlow(), new Xi(this.replay, this.leaves.quitContext).start(), this.health.start(), this.trackInput(), this.pageEvents.startFirstI … [truncated]
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1281` → after: `L1281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1281) · [Before (L1281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1281)

```diff
-           this.yR()
+           this.Hk()
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1292` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1292) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1292)

```diff
-           const YB = null !== (OB = null === (GB = this.flows.stay) || void 0 === GB ? void 0 : GB.playableAtMs) && void 0 !== OB ? OB : null;
+           const mW = null !== (iW = null === (OW = this.flows.stay) || void 0 === OW ? void 0 : OW.playableAtMs) && void 0 !== iW ? iW : null;
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1301` → after: `L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1301) · [Before (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1301)

```diff
-         QO.o.subscribe("joinedGame", (BB => {
+         Ni.l.subscribe("joinedGame", (WW => {
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1307` → after: `L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1307) · [Before (L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1307)

```diff
-         })), QO.o.subscribe("leaveGame", (() => {
+         })), Ni.l.subscribe("leaveGame", (() => {
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1309` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1309) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1309)

```diff
-           const GB = null !== (BB = null === (OB = this.flows.stay) || void 0 === OB ? void 0 : OB.name) && void 0 !== BB ? BB : null;
+           const OW = null !== (WW = null === (iW = this.flows.stay) || void 0 === iW ? void 0 : iW.name) && void 0 !== WW ? WW : null;
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1311` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1311) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1311)

```diff
-         })), QO.o.subscribe("replayViewer|replayLoaded", (() => {
+         })), Ni.l.subscribe("replayViewer|replayLoaded", (() => {
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1314)

```diff
-         })), QO.o.subscribe("matchmakeAndPlayStepCompleted", (BB => {
+         })), Ni.l.subscribe("matchmakeAndPlayStepCompleted", (WW => {
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1319` → after: `L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1319) · [Before (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1319)

```diff
-         })), QO.o.subscribe("leftPlayPage", (() => {
+         })), Ni.l.subscribe("leftPlayPage", (() => {
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1321` → after: `L1321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1321) · [Before (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1321)

```diff
-         })), QO.o.subscribe("joinFailed", (BB => {
+         })), Ni.l.subscribe("joinFailed", (WW => {
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1329` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1329) · [Before (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1329)

```diff
-             game_name_with_variation: (0, oO.c)().requestedGameNameWithVariation,
+             game_name_with_variation: (0, Pi.d)().requestedGameNameWithVariation,
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1332` → after: `L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1332) · [Before (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1332)

```diff
-         })), QO.o.subscribe("kickedForAfk", (() => {
+         })), Ni.l.subscribe("kickedForAfk", (() => {
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1334-L1335` → after: `L1334-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1334-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1334-L1335) · [Before (L1334-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1334-L1335)

```diff
-           this.leaves.kickedForAfk(null !== (BB = null === (OB = this.flows.stay) || void 0 === OB ? void 0 : OB.name) && void 0 !== BB ? BB : null)
-         })), QO.o.subscribe("unwantedLeftGame", (BB => {
+           this.leaves.kickedForAfk(null !== (WW = null === (iW = this.flows.stay) || void 0 === iW ? void 0 : iW.name) && void 0 !== WW ? WW : null)
+         })), Ni.l.subscribe("unwantedLeftGame", (WW => {
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1342)

```diff
-         })), QO.o.subscribe("appManagerUpdated|gameState", (BB => {
+         })), Ni.l.subscribe("appManagerUpdated|gameState", (WW => {
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1344` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1344) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1344)

```diff
-             entry_source: YO.c.get("gameEntrySource")
+             entry_source: mi.d.get("gameEntrySource")
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1348)

```diff
-         })), QO.o.subscribe("appManagerUpdated|gameEntrySource", (BB => {
+         })), Ni.l.subscribe("appManagerUpdated|gameEntrySource", (WW => {
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1352` → after: `L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1352) · [Before (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1352)

```diff
-         })), QO.o.subscribe("sessionReplayPlayerKill", (BB => {
+         })), Ni.l.subscribe("sessionReplayPlayerKill", (WW => {
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1372` → after: `L1372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1372) · [Before (L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1372)

```diff
-         } = (0, oO.c)();
+         } = (0, Pi.d)();
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1377-L1379` → after: `L1377-L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1377-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1377-L1379) · [Before (L1377-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1377-L1379)

```diff
-         const GB = (0, sB.Q)(OB),
-           YB = YO.c.get("gameEntrySource");
-         this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, BB, "autoReconnect" === YB || "manualReconnect" === YB), "inGame" === YO.c.get("gameState") && this.flows.gamePlayable();
+         const OW = (0, zW.R)(iW),
+           mW = mi.d.get("gameEntrySource");
+         this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, WW, "autoReconnect" === mW || "manualReconnect" === mW), "inGame" === mi.d.get("gameState") && this.flows.gamePlayable();
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1382` → after: `L1382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1382) · [Before (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1382)

```diff
-             game_name: (0, tB.ac)(BB),
+             game_name: (0, QW.Tb)(WW),
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1385-L1386` → after: `L1385-L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1385-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1385-L1386) · [Before (L1385-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1385-L1386)

```diff
-             game_analytics_id: (0, BO.g)(BB, GB),
-             is_custom_game: (0, OO.l)(BB),
+             game_analytics_id: (0, Wi.e)(WW, OW),
+             is_custom_game: (0, ii.i)(WW),
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1395` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1395) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1395)

```diff
-           $screen_name: QB.is_custom_game ? `custom: ${QB.game_analytics_id}` : QB.game_name
+           $screen_name: NW.is_custom_game ? `custom: ${NW.game_analytics_id}` : NW.game_name
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1425` → after: `L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1425) · [Before (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1425)

```diff
-             }), this.replay.addReplayMarker(YB.i.death, QB)
+             }), this.replay.addReplayMarker(mW.l.death, NW)
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1445` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1445) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1445)

```diff
-         this.flows.kP();
+         this.flows.hZ();
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1447` → after: `L1447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1447) · [Before (L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1447)

```diff
-         this.replay.addFpsSample(QB && GB && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / OB : null);
+         this.replay.addFpsSample(NW && OW && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / iW : null);
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1449` → after: `L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1449) · [Before (L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1449)

```diff
-         null !== oB && this.replay.addPingSample(oB), this.framesThisTick = 0, this.lastTickMs = BB, this.ticks++, this.ticks % 2 === 0 && (QB && this.inputSinceActiveMarker && this.replay.addReplayMarker(YB.i.active), this.inputSinceActiveMarker = !1), this.replay.markClockIfDue … [truncated]
+         null !== PW && this.replay.addPingSample(PW), this.framesThisTick = 0, this.lastTickMs = WW, this.ticks++, this.ticks % 2 === 0 && (NW && this.inputSinceActiveMarker && this.replay.addReplayMarker(mW.l.active), this.inputSinceActiveMarker = !1), this.replay.markClockIfDue … [truncated]
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1452-L1454` → after: `L1452-L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1452-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1452-L1454) · [Before (L1452-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1452-L1454)

```diff
-     var aO = GB(1200),
-       eO = GB(1186),
-       TO = GB(40477);
+     var Ri = OW(1194),
+       Gi = OW(1185),
+       Ii = OW(41035);
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1464` → after: `L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1464) · [Before (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1464)

```diff
-       return TO.i.fetch(BB, {
+       return Ii.f.fetch(WW, {
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1477` → after: `L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1477) · [Before (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1477)

```diff
-         this.uploadToken = BB, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (OB = DB.url) && void 0 !==  … [truncated]
+         this.uploadToken = WW, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (iW = EW.url) && void 0 !==  … [truncated]
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1509-L1510` → after: `L1509-L1510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1509-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1509-L1510) · [Before (L1509-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1509-L1510)

```diff
-           GB = (0, TO.m)(JSON.stringify(OB));
-         OB.properties.length > 32768 || OB.event.length > 64 || bO(this.uploadToken) + GB > 102400 ? console.warn(`Session replay timeline event ${OB.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
+           OW = (0, Ii.i)(JSON.stringify(iW));
+         iW.properties.length > 32768 || iW.event.length > 64 || ai(this.uploadToken) + OW > 102400 ? console.warn(`Session replay timeline event ${iW.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1554` → after: `L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1554) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1554)

```diff
-         GB.length < BB.events.length && console.error(`Session replay timeline: dropped ${BB.events.length-GB.length} events after 3 attempts.`), this.retries.push(...GB), this.trimToCap()
+         OW.length < WW.events.length && console.error(`Session replay timeline: dropped ${WW.events.length-OW.length} events after 3 attempts.`), this.retries.push(...OW), this.trimToCap()
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1565` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1565) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1565)

```diff
-           YB = await this.post(this.url, GB, (0, TO.m)(GB)), YB.ok && (DB = await YB.json())
+           mW = await this.post(this.url, OW, (0, Ii.i)(OW)), mW.ok && (EW = await mW.json())
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1569` → after: `L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1569) · [Before (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1569)

```diff
-         return null === DB ? 408 === YB.status || 429 === YB.status || YB.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${YB.status}; dropped ${BB.events.length} events.`), "dropped") : "rejected" in DB ? DB.retryable ? "retryLater" : ( … [truncated]
+         return null === EW ? 408 === mW.status || 429 === mW.status || mW.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${mW.status}; dropped ${WW.events.length} events.`), "dropped") : "rejected" in EW ? EW.retryable ? "retryLater" : ( … [truncated]
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1572-L1574` → after: `L1572-L1574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1572-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1572-L1574) · [Before (L1572-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1572-L1574)

```diff
-     var sO = GB(40497),
-       xO = GB(5102),
-       tO = GB(1308);
+     var Qi = OW(41052),
+       WO = OW(5386),
+       iO = OW(1303);
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1589` → after: `L1589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1589) · [Before (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1589)

```diff
-                 supportedCompression: [DB.d.GZipJS],
+                 supportedCompression: [EW.c.GZipJS],
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1606` → after: `L1606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1606) · [Before (L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1606)

```diff
-           }(BB.posthog.projectApiKey), DB.f.init(BB.posthog.projectApiKey, rB({
+           }(WW.posthog.projectApiKey), EW.g.init(WW.posthog.projectApiKey, DW({
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1612-L1613` → after: `L1612-L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1612-L1613) · [Before (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1612-L1613)

```diff
-             showsChat: (0, YB.q)(GB),
-             allowAutomatedBrowsers: (0, xO.c)((0, xO.j)(), !1),
+             showsChat: (0, mW.s)(OW),
+             allowAutomatedBrowsers: (0, WO.d)((0, WO.g)(), !1),
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1622` → after: `L1622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1622) · [Before (L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1622)

```diff
-           })), oB && DB.f.startSessionRecording({
+           })), PW && EW.g.startSessionRecording({
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1624-L1625` → after: `L1624-L1625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1624-L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1624-L1625) · [Before (L1624-L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1624-L1625)

```diff
-           }), this.expectedSessionId = GB.recordingId, DB.f.onSessionId((BB => {
-             BB !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${BB} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
+           }), this.expectedSessionId = OW.recordingId, EW.g.onSessionId((WW => {
+             WW !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${WW} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1638` → after: `L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1638) · [Before (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1638)

```diff
-               client_build: wB.b
+               client_build: pW.d
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1640` → after: `L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1640) · [Before (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1640)

```diff
-             DB.f.register(YB), null !== BB.videoStatus && DB.f.register({
+             EW.g.register(mW), null !== WW.videoStatus && EW.g.register({
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1642` → after: `L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1642) · [Before (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1642)

```diff
-             }), DB.f.setPersonProperties(YB, {
+             }), EW.g.setPersonProperties(mW, {
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1646` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1646) · [Before (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1646)

```diff
-           }(BB, oB), this.fpsMonitor = new QB.c({
+           }(WW, PW), this.fpsMonitor = new NW.b({
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1650` → after: `L1650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1650) · [Before (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1650)

```diff
-               }), QO.o.tM("sessionReplayLowFps", {
+               }), Ni.l.iZ("sessionReplayLowFps", {
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1659` → after: `L1659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1659) · [Before (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1659)

```diff
-               }), QO.o.tM("sessionReplayLowFps", {
+               }), Ni.l.iZ("sessionReplayLowFps", {
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1664)

```diff
-             dashboardHost: null !== (OB = BB.posthog.dashboardHost) && void 0 !== OB ? OB : BB.posthog.apiHost,
+             dashboardHost: null !== (iW = WW.posthog.dashboardHost) && void 0 !== iW ? iW : WW.posthog.apiHost,
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1666` → after: `L1666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1666) · [Before (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1666)

```diff
-             getSessionId: () => DB.f.get_session_id(),
+             getSessionId: () => EW.g.get_session_id(),
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1675` → after: `L1675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1675) · [Before (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1675)

```diff
-         DB.f.capture(BB, OB)
+         EW.g.capture(WW, iW)
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1678` → after: `L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1678) · [Before (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1678)

```diff
-         DB.f.capture(BB, OB, {
+         EW.g.capture(WW, iW, {
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1684` → after: `L1684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1684) · [Before (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1684)

```diff
-         DB.f.capture(BB, OB, {
+         EW.g.capture(WW, iW, {
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1705` → after: `L1705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1705) · [Before (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1705)

```diff
-         DB.f.register({
+         EW.g.register({
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1717` → after: `L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1717) · [Before (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1717)

```diff
-         DB.f.stopSessionRecording(), DB.f.register({
+         EW.g.stopSessionRecording(), EW.g.register({
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1722` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1722) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1722)

```diff
-         this.stopDomRecording(), DB.f.set_config({
+         this.stopDomRecording(), EW.g.set_config({
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1731` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1731) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1731)

```diff
-         return !(null === (BB = DB.f.sessionRecording) || void 0 === BB || !BB.started) && (XB().rrweb.record.takeFullSnapshot(), !0)
+         return !(null === (WW = EW.g.sessionRecording) || void 0 === WW || !WW.started) && (VW().rrweb.record.takeFullSnapshot(), !0)
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1750` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1750) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1750)

```diff
-         this.clockMarked = this.addReplayMarker(YB.i.clock, {
+         this.clockMarked = this.addReplayMarker(mW.l.clock, {
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1761` → after: `L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1761) · [Before (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1761)

```diff
-         return (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || DB.f.sessionRecordingStarted()) && null !== (OB = null === (GB = DB.f.sessionRecording) || void 0 === GB ? void 0 : GB.tryAddCustomEvent(BB, YB)) && void 0 !== OB && OB
+         return (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || EW.g.sessionRecordingStarted()) && null !== (iW = null === (OW = EW.g.sessionRecording) || void 0 === OW ? void 0 : OW.tryAddCustomEvent(WW, mW)) && void 0 !== iW && iW
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1764` → after: `L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1764) · [Before (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1764)

```diff
-         this.unregisterGameContext(), this.gameContextKeys = Object.keys(OB), DB.f.register(OB), this.firstGameJoined || (this.firstGameJoined = !0, DB.f.setPersonProperties(void 0, {
+         this.unregisterGameContext(), this.gameContextKeys = Object.keys(iW), EW.g.register(iW), this.firstGameJoined || (this.firstGameJoined = !0, EW.g.setPersonProperties(void 0, {
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1781` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1781) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1781)

```diff
-         DB.f.register(BB), OB && DB.f.setPersonProperties(BB)
+         EW.g.register(WW), iW && EW.g.setPersonProperties(WW)
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1800-L1801` → after: `L1800-L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1800-L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1800-L1801) · [Before (L1800-L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1800-L1801)

```diff
-         OB !== this.lastTagsJson && (this.lastTagsJson = OB, DB.f.register(BB), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
-           this.personUpdateTimer = null, DB.f.setPersonProperties(this.tags.toProperties())
+         iW !== this.lastTagsJson && (this.lastTagsJson = iW, EW.g.register(WW), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
+           this.personUpdateTimer = null, EW.g.setPersonProperties(this.tags.toProperties())
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1805` → after: `L1805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1805) · [Before (L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1805)

```diff
-         for (const BB of this.gameContextKeys) DB.f.unregister(BB);
+         for (const WW of this.gameContextKeys) EW.g.unregister(WW);
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1810)

```diff
-   40497: (BB, OB, GB) => {
+   41052: (WW, iW, OW) => {
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1823` → after: `L1823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1823) · [Before (L1823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1823)

```diff
-   40477: (BB, OB, GB) => {
+   41035: (WW, iW, OW) => {
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1826-L1827` → after: `L1826-L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1826-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1826-L1827) · [Before (L1826-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1826-L1827)

```diff
-       i: () => QB,
-       m: () => DB
+       f: () => NW,
+       i: () => EW
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1859` → after: `L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1859) · [Before (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1859)

```diff
-         return (null !== (OB = this.inFlightLabels.get(BB)) && void 0 !== OB ? OB : 0) > 0
+         return (null !== (iW = this.inFlightLabels.get(WW)) && void 0 !== iW ? iW : 0) > 0
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1872` → after: `L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8fR1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-3d3cc30b9cf3f5c4d3e4124d8ae1a2f17f29f7a20abec5bb1ce3d2e48d95dc8f) · [After (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1872) · [Before (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHog.js#L1872)

```diff
-         void 0 !== BB && this.inFlightLabels.set(BB, (null !== (GB = this.inFlightLabels.get(BB)) && void 0 !== GB ? GB : 0) + OB)
+         void 0 !== WW && this.inFlightLabels.set(WW, (null !== (OW = this.inFlightLabels.get(WW)) && void 0 !== OW ? OW : 0) + iW)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (142 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf)

#### 1. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1-L2)

```diff
- export const id = 62;
- export const ids = [62];
+ export const id = 63;
+ export const ids = [63];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4)

```diff
-   40555: () => {
+   41099: () => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L26)

```diff
-           return "symbol" == BB(GB) ? GB : GB + ""
+           return "symbol" == WW(OW) ? OW : OW + ""
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L114)

```diff
-       new RegExp(`^${qB.source}`, "i"), new RegExp(qB.source, "gi"), "0".repeat(32), "0".repeat(16);
+       new RegExp(`^${bW.source}`, "i"), new RegExp(bW.source, "gi"), "0".repeat(32), "0".repeat(16);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L179)

```diff
-         const YB = `${BB}.${String(GB)}`;
+         const mW = `${WW}.${String(OW)}`;
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L213)

```diff
-               return "function" == typeof BB ? null !== (OB = BB.__rrweb_layer__) && void 0 !== OB ? OB : BB.__posthog_layer__ : void 0
+               return "function" == typeof WW ? null !== (iW = WW.__rrweb_layer__) && void 0 !== iW ? iW : WW.__posthog_layer__ : void 0
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L235)

```diff
-             SB = (null == BB ? void 0 : BB.toString().includes("[native code]")) ? BB : null
+             SW = (null == WW ? void 0 : WW.toString().includes("[native code]")) ? WW : null
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L306` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L306) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L306)

```diff
-         }, cB = [], hB = 0, EB = (OB = BB) && OB > 0 ? OB : null, gB = KB(), rB = uB)
+         }, CW = [], XW = 0, fW = (iW = WW) && iW > 0 ? iW : null, gW = HW(), DW = nW)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L317)

```diff
-         } : (LB -= 1) > 0 ? XB : (XB.durationMs = KB() - gB, XB.deferredStylesheetCount = hB, TB.deferredCount += hB, EB = null, iB(XB.durationMs, rB) ? XB : wB = XB)
+         } : (vW -= 1) > 0 ? VW : (VW.durationMs = HW() - gW, VW.deferredStylesheetCount = XW, RW.deferredCount += XW, fW = null, eW(VW.durationMs, DW) ? VW : pW = VW)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L408` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L408) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L408)

```diff
-           return "symbol" == YO(OB) ? OB : OB + ""
+           return "symbol" == mi(iW) ? iW : iW + ""
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L439-L440` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L439-L440) · [Before (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L439-L440)

```diff
-         const GB = ["@import", `url(${JSON.stringify(BB.href)})`];
-         return "" === BB.layerName ? GB.push("layer") : BB.layerName && GB.push(`layer(${BB.layerName})`), BB.supportsText && GB.push(`supports(${BB.supportsText})`), BB.media.length && GB.push(BB.media.mediaText), GB.join(" ") + ";"
+         const OW = ["@import", `url(${JSON.stringify(WW.href)})`];
+         return "" === WW.layerName ? OW.push("layer") : WW.layerName && OW.push(`layer(${WW.layerName})`), WW.supportsText && OW.push(`supports(${WW.supportsText})`), WW.media.length && OW.push(WW.media.mediaText), OW.join(" ") + ";"
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L499` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L499) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L499)

```diff
-           return BB && null !== (OB = null === (GB = this.getMeta(BB)) || void 0 === GB ? void 0 : GB.id) && void 0 !== OB ? OB : -1
+           return WW && null !== (iW = null === (OW = this.getMeta(WW)) || void 0 === OW ? void 0 : OW.id) && void 0 !== iW ? iW : -1
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L501)

```diff
-         yDB(BB) {
+         AmW(WW) {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L527` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L527) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L527)

```diff
-           const GB = this.yDB(BB);
+           const OW = this.AmW(WW);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L566` → after: `L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L566) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L566)

```diff
-         return YB ? DB ? oB && VO.has(AO(GB)) ? YB : "*".repeat(YB.length) : QB ? QB(GB, YB, OB) : YB : YB
+         return mW ? EW ? PW && Ki.has(Mi(OW)) ? mW : "*".repeat(mW.length) : NW ? NW(OW, mW, iW) : mW : mW
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L588-L590` → after: `L588-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L588-L590) · [Before (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L588-L590)

```diff
-           if (kO.test(jB) || dO.test(jB)) return `url(${yB}${jB}${yB})`;
-           if (KO.test(jB)) return `url(${yB}${jB}${yB})`;
-           if ("/" === jB[0]) return `url(${yB}${function(BB){let OB="";return OB=BB.indexOf("//")>-1?BB.split("/").slice(0,3).join("/"):BB.split("/")[0],OB=OB.split("?")[0],OB}(OB)+jB}${yB})`;
+           if (Ji.test(LW) || Hi.test(LW)) return `url(${cW}${LW}${cW})`;
+           if (ni.test(LW)) return `url(${cW}${LW}${cW})`;
+           if ("/" === LW[0]) return `url(${cW}${function(WW){let iW="";return iW=WW.indexOf("//")>-1?WW.split("/").slice(0,3).join("/"):WW.split("/")[0],iW=iW.split("?")[0],iW}(iW)+LW}${cW})`;
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L595)

```diff
-           return `url(${yB}${JB.join("/")}${yB})`
+           return `url(${cW}${wW.join("/")}${cW})`
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L652-L653` → after: `L652-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L652-L653) · [Before (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L652-L653)

```diff
-                   const oB = DB.toDataURL(GB || "image/webp", null != YB ? YB : .4),
-                     jB = OB.length > oB.length ? oB : OB;
+                   const PW = EW.toDataURL(OW || "image/webp", null != mW ? mW : .4),
+                     LW = iW.length > PW.length ? PW : iW;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L712)

```diff
-         }(BB, YB) : "style" === GB ? uO(YB, hO(BB)) : "object" === OB && "data" === GB ? cO(BB, YB) : YB : cO(BB, YB)
+         }(WW, mW) : "style" === OW ? ui(mW, qi(WW)) : "object" === iW && "data" === OW ? Bi(WW, mW) : mW : Bi(WW, mW)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L742)

```diff
-               if (DB.closest(`.${OB}`)) return !0
+               if (EW.closest(`.${iW}`)) return !0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L805` → after: `L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L805) · [Before (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L805)

```diff
-         if (mB >= IB) return OG = !0, BG || (BG = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${IB}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
+         if (uW >= oW) return mO = !0, OO || (OO = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${oW}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L967` → after: `L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L967) · [Before (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L967)

```diff
-                         console.warn(`Cannot inline img src=${YB}! Error: ${BB}`)
+                         console.warn(`Cannot inline img src=${mW}! Error: ${WW}`)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L987-L990` → after: `L987-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L987-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L987-L990) · [Before (L987-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L987-L990)

```diff
-                     rr_width: `${OB}px`,
-                     rr_height: `${YB}px`,
-                     rr_left: `${Math.floor(DB+((null===(KB=GB.defaultView)||void 0===KB?void 0:KB.scrollX)||0))}px`,
-                     rr_top: `${Math.floor(QB+((null===(uB=GB.defaultView)||void 0===uB?void 0:uB.scrollY)||0))}px`
+                     rr_width: `${iW}px`,
+                     rr_height: `${mW}px`,
+                     rr_left: `${Math.floor(EW+((null===(HW=OW.defaultView)||void 0===HW?void 0:HW.scrollX)||0))}px`,
+                     rr_top: `${Math.floor(NW+((null===(nW=OW.defaultView)||void 0===nW?void 0:nW.scrollY)||0))}px`
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1054` → after: `L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1054) · [Before (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1054)

```diff
-                     console.warn(`Cannot get CSS styles from text's parentNode. Error: ${OB}`, BB)
+                     console.warn(`Cannot get CSS styles from text's parentNode. Error: ${iW}`, WW)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1114` → after: `L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1114) · [Before (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1114)

```diff
-                 return null !== (OB = null == YB ? void 0 : YB[1]) && void 0 !== OB ? OB : null
+                 return null !== (iW = null == mW ? void 0 : mW[1]) && void 0 !== iW ? iW : null
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1413)

```diff
-           yDB: () => (console.warn(JG), null),
+           AmW: () => (console.warn(ZO), null),
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1500` → after: `L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR1500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1500) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1500)

```diff
-         return BB ? BB.nodeType === BB.ELEMENT_NODE ? BB : dB.parentElement(BB) : null
+         return WW ? WW.nodeType === WW.ELEMENT_NODE ? WW : hW.parentElement(WW) : null
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1554` → after: `L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1554) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1554)

```diff
-           return null !== (OB = this.styleIDMap.get(BB)) && void 0 !== OB ? OB : -1
+           return null !== (iW = this.styleIDMap.get(WW)) && void 0 !== iW ? iW : -1
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1586)

```diff
-         return "boolean" == typeof GB ? GB : function(BB) {
+         return "boolean" == typeof OW ? OW : function(WW) {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1631)

```diff
-         IG = (BB, OB) => `${BB}@${OB}`,
+         eO = (WW, iW) => `${WW}@${iW}`,
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1643` → after: `L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1643) · [Before (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1643)

```diff
-                 GB = KB() - BB, YB = OB, LB > 0 || iB(GB, null != YB ? YB : uB) || GB > eB.slowestBatchMs && (eB.slowestBatchMs = GB)
+                 OW = HW() - WW, mW = iW, vW > 0 || eW(OW, null != mW ? mW : nW) || OW > qW.slowestBatchMs && (qW.slowestBatchMs = OW)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1815` → after: `L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1815) · [Before (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1815)

```diff
-                     oB = null !== (OB = BB.attributeNamespace) && void 0 !== OB ? OB : null;
+                     PW = null !== (iW = WW.attributeNamespace) && void 0 !== iW ? iW : null;
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1820-L1822` → after: `L1820-L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L1820-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1820-L1822) · [Before (L1820-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1820-L1822)

```diff
-                       if ("http://www.w3.org/1999/xlink" === GB) return `xlink:${OB}`;
-                       if ("http://www.w3.org/XML/1998/namespace" === GB) return `xml:${OB}`;
-                       if ("http://www.w3.org/2000/xmlns/" === GB) return "xmlns" === OB ? OB : `xmlns:${OB}`;
+                       if ("http://www.w3.org/1999/xlink" === OW) return `xlink:${iW}`;
+                       if ("http://www.w3.org/XML/1998/namespace" === OW) return `xml:${iW}`;
+                       if ("http://www.w3.org/2000/xmlns/" === OW) return "xmlns" === iW ? iW : `xmlns:${iW}`;
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1824` → after: `L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1824) · [Before (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1824)

```diff
-                       return DB ? `${DB}:${OB}` : OB
+                       return EW ? `${EW}:${iW}` : iW
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1864` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1864) · [Before (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1864)

```diff
-                         YB !== OB.style.getPropertyValue(BB) || DB !== OB.style.getPropertyPriority(BB) ? JB.styleDiff[BB] = "" === DB ? YB : [YB, DB] : JB._unchangedStyles[BB] = [YB, DB]
+                         mW !== iW.style.getPropertyValue(WW) || EW !== iW.style.getPropertyPriority(WW) ? wW.styleDiff[WW] = "" === EW ? mW : [mW, EW] : wW._unchangedStyles[WW] = [mW, EW]
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2066` → after: `L2066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR2066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2066) · [Before (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2066)

```diff
-             const PB = `${JB},${MB}`;
+             const ZW = `${wW},${tW}`;
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2117` → after: `L2117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR2117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2117) · [Before (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2117)

```diff
-         oB = GB.getId("#document" === OB.nodeName ? OB : dB.host(OB));
+         PW = OW.getId("#document" === iW.nodeName ? iW : hW.host(iW));
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2383` → after: `L2383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR2383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2383) · [Before (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2383)

```diff
-                 "radio" === ZB && NB && qB && GB.querySelectorAll(`input[type="radio"][name="${NB}"]`).forEach((BB => {
+                 "radio" === jW && UW && bW && OW.querySelectorAll(`input[type="radio"][name="${UW}"]`).forEach((WW => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2552` → after: `L2552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR2552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2552) · [Before (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2552)

```diff
-                 return QB.CSSStyleSheet.prototype.insertRule.apply(this, [`${BB} { ${OB} }`, GB])
+                 return NW.CSSStyleSheet.prototype.insertRule.apply(this, [`${WW} { ${iW} }`, OW])
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2765` → after: `L2765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR2765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2765) · [Before (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2765)

```diff
-                   fontSource: "string" == typeof OB ? OB : JSON.stringify(Array.from(new Uint8Array(OB)))
+                   fontSource: "string" == typeof iW ? iW : JSON.stringify(Array.from(new Uint8Array(iW)))
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2813` → after: `L2813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR2813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2813) · [Before (L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2813)

```diff
-                 JZ: jB
+                 kj: LW
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2832` → after: `L2832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR2832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2832) · [Before (L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2832)

```diff
-                   console.warn(`Custom element callback failed for ${OB}`)
+                   console.warn(`Custom element callback failed for ${iW}`)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2838` → after: `L2838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR2838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2838) · [Before (L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2838)

```diff
-           for (const OB of BB.plugins) PB(`plugin:${OB.name}`, (() => OB.observer(OB.callback, GB, OB.options)))
+           for (const iW of WW.plugins) ZW(`plugin:${iW.name}`, (() => iW.observer(iW.callback, OW, iW.options)))
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2873` → after: `L2873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR2873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2873) · [Before (L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2873)

```diff
-             return "number" != typeof OB || 0 > OB ? OB : null !== (YB = (GB || this.getLocalIdToRemoteIdMap(BB)).get(OB)) && void 0 !== YB ? YB : -1
+             return "number" != typeof iW || 0 > iW ? iW : null !== (mW = (OW || this.getLocalIdToRemoteIdMap(WW)).get(iW)) && void 0 !== mW ? mW : -1
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2906` → after: `L2906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR2906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2906) · [Before (L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2906)

```diff
-             return null !== (OB = null !== (GB = null === (YB = this.attachedIframes.get(BB)) || void 0 === YB ? void 0 : YB.element) && void 0 !== GB ? GB : this.iframeElementsById.get(BB)) && void 0 !== OB ? OB : null
+             return null !== (iW = null !== (OW = null === (mW = this.attachedIframes.get(WW)) || void 0 === mW ? void 0 : mW.element) && void 0 !== OW ? OW : this.iframeElementsById.get(WW)) && void 0 !== iW ? iW : null
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3058` → after: `L3058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3058) · [Before (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3058)

```diff
-                     return OB.data.JZ.forEach((OB => {
+                     return iW.data.kj.forEach((iW => {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3092` → after: `L3092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3092) · [Before (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3092)

```diff
-               GB = (null == OB ? void 0 : OB.element) || this.iframeElementsById.get(BB) || this.mirror.yDB(BB);
+               OW = (null == iW ? void 0 : iW.element) || this.iframeElementsById.get(WW) || this.mirror.AmW(WW);
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3159` → after: `L3159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3159) · [Before (L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3159)

```diff
-             const QB = null !== (GB = null === (DB = dB.host(BB)) || void 0 === DB ? void 0 : DB.ownerDocument) && void 0 !== GB ? GB : OB,
+             const NW = null !== (OW = null === (EW = hW.host(WW)) || void 0 === EW ? void 0 : EW.ownerDocument) && void 0 !== OW ? OW : iW,
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3334` → after: `L3334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3334) · [Before (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3334)

```diff
-                     return OB && "object" == typeof OB ? OB : null
+                     return iW && "object" == typeof iW ? iW : null
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3343` → after: `L3343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3343) · [Before (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3343)

```diff
-                     usage: "number" == typeof QB.usage ? QB.usage | jB : jB
+                     usage: "number" == typeof NW.usage ? NW.usage | LW : LW
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3440` → after: `L3440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3440) · [Before (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3440)

```diff
-         console.warn(`[replay] canvas capture: ${BB}`, ...GB)
+         console.warn(`[replay] canvas capture: ${WW}`, ...OW)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3501` → after: `L3501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3501) · [Before (L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3501)

```diff
-               return SY(`disabled because the encode worker did not start. ${VY}`, BB), void yB()
+               return ym(`disabled because the encode worker did not start. ${Ym}`, WW), void cW()
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3506` → after: `L3506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3506) · [Before (L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3506)

```diff
-               zB = !0, SY(`stopped because the encode worker failed. ${VY}`, BB), cancelAnimationFrame(ZB), null === (OB = MB.terminate) || void 0 === OB || OB.call(MB), this.resetFrameDedup = null
+               xW = !0, ym(`stopped because the encode worker failed. ${Ym}`, WW), cancelAnimationFrame(jW), null === (iW = tW.terminate) || void 0 === iW || iW.call(tW), this.resetFrameDedup = null
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3812` → after: `L3812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3812) · [Before (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3812)

```diff
-                           if (OB.media && "string" == typeof OB.media.mediaText) return `@media ${OB.media.mediaText} {`;
+                           if (iW.media && "string" == typeof iW.media.mediaText) return `@media ${iW.media.mediaText} {`;
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3816` → after: `L3816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3816) · [Before (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3816)

```diff
-                             return `${BB.selectorText} {${GB?" "+GB:""}`
+                             return `${WW.selectorText} {${OW?" "+OW:""}`
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3818` → after: `L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3818) · [Before (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3818)

```diff
-                           if ("containerName" in OB) return "string" != typeof OB.containerQuery || OB.containerName && !ZO.test(OB.containerName) ? null : `@container ${OB.containerName?`${OB.containerName} `:""}${OB.containerQuery} {`;
+                           if ("containerName" in iW) return "string" != typeof iW.containerQuery || iW.containerName && !ji.test(iW.containerName) ? null : `@container ${iW.containerName?`${iW.containerName} `:""}${iW.containerQuery} {`;
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3827` → after: `L3827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3827) · [Before (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3827)

```diff
-                             return "" === YB || "Object" === YB || "CSSSupportsRule" === YB ? `@supports ${OB.conditionText} {` : null
+                             return "" === mW || "Object" === mW || "CSSSupportsRule" === mW ? `@supports ${iW.conditionText} {` : null
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3829` → after: `L3829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3829) · [Before (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3829)

```diff
-                           return "string" == typeof OB.name ? "keyText" in OB.cssRules[0] ? ZO.test(OB.name) ? `@keyframes ${OB.name} {` : null : "" === OB.name ? "@layer {" : NO.test(OB.name) ? `@layer ${OB.name} {` : null : null
+                           return "string" == typeof iW.name ? "keyText" in iW.cssRules[0] ? ji.test(iW.name) ? `@keyframes ${iW.name} {` : null : "" === iW.name ? "@layer {" : Ui.test(iW.name) ? `@layer ${iW.name} {` : null : null
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3913` → after: `L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3913) · [Before (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3913)

```diff
-                     let oB = BB > 0 ? BB : 1;
+                     let PW = WW > 0 ? WW : 1;
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3942` → after: `L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3942) · [Before (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3942)

```diff
-                   text: () => GB ? YB : null,
+                   text: () => OW ? mW : null,
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3981` → after: `L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3981) · [Before (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3981)

```diff
-                   MB && this.pendingDeferredSheets.delete(oB), iB(PB = KB() - yB, null != (zB = JB) ? zB : uB) || (TB.totalMs += PB, PB > TB.slowestSliceMs && (TB.slowestSliceMs = PB))
+                   tW && this.pendingDeferredSheets.delete(PW), eW(ZW = HW() - cW, null != (xW = wW) ? xW : nW) || (RW.totalMs += ZW, ZW > RW.slowestSliceMs && (RW.slowestSliceMs = ZW))
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4187` → after: `L4187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4187) · [Before (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4187)

```diff
-           } : void 0 !== WB ? WB : {
+           } : void 0 !== sW ? sW : {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4228` → after: `L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4228) · [Before (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4228)

```diff
-                   const BB = IY.yDB(YB.node.id);
+                   const WW = em.AmW(mW.node.id);
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4562` → after: `L4562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4562) · [Before (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4562)

```diff
-               const GB = IY.yDB(OB);
+               const OW = em.AmW(iW);
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4712` → after: `L4712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4712) · [Before (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4712)

```diff
-                 QB = null !== (BB = null !== (OB = null !== (GB = null !== (YB = DB.fullscreenElement) && void 0 !== YB ? YB : DB.webkitFullscreenElement) && void 0 !== GB ? GB : DB.mozFullScreenElement) && void 0 !== OB ? OB : DB.msFullscreenElement) && void 0 !== BB ? BB : null … [truncated]
+                 NW = null !== (WW = null !== (iW = null !== (OW = null !== (mW = EW.fullscreenElement) && void 0 !== mW ? mW : EW.webkitFullscreenElement) && void 0 !== OW ? OW : EW.mozFullScreenElement) && void 0 !== iW ? iW : EW.msFullscreenElement) && void 0 !== WW ? WW : null … [truncated]
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4765` → after: `L4765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4765) · [Before (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4765)

```diff
-       new RegExp(`^${gY.source}`, "i"), new RegExp(gY.source, "gi"), "0".repeat(32), "0".repeat(16);
+       new RegExp(`^${pm.source}`, "i"), new RegExp(pm.source, "gi"), "0".repeat(32), "0".repeat(16);
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4788` → after: `L4788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4788) · [Before (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4788)

```diff
-           return "symbol" == XY(OB) ? OB : OB + ""
+           return "symbol" == Cm(iW) ? iW : iW + ""
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4804` → after: `L4804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4804) · [Before (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4804)

```diff
-             return this.functionName ? `${this.functionName} (${this.fileName}:${BB}:${OB})` : `${this.fileName}:${BB}:${OB}`
+             return this.functionName ? `${this.functionName} (${this.fileName}:${WW}:${iW})` : `${this.fileName}:${WW}:${iW}`
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4817` → after: `L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4817) · [Before (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4817)

```diff
-             if (!OB) throw new Error(`Cannot parse given url: ${BB}`);
+             if (!iW) throw new Error(`Cannot parse given url: ${WW}`);
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4919` → after: `L4919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4919) · [Before (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4919)

```diff
-           DB.length > 1 && (GB += `:eq(${DB.indexOf(BB)})`), OB = GB + (OB ? ">" + OB : ""), BB = YB
+           EW.length > 1 && (OW += `:eq(${EW.indexOf(WW)})`), iW = OW + (iW ? ">" + iW : ""), WW = mW
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4957` → after: `L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4957) · [Before (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4957)

```diff
-             return GB.stringLengthLimit && OB.length > GB.stringLengthLimit && (OB = `${OB.slice(0,GB.stringLengthLimit)}...`), OB
+             return OW.stringLengthLimit && iW.length > OW.stringLengthLimit && (iW = `${iW.slice(0,OW.stringLengthLimit)}...`), iW
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5002` → after: `L5002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5002) · [Before (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5002)

```diff
-             OB.reason instanceof Error ? (GB = OB.reason, DB = [vY(`Uncaught (in promise) ${GB.name}: ${GB.message}`, YB.stringifyOptions)]) : (GB = new Error, DB = [vY("Uncaught (in promise)", YB.stringifyOptions), vY(OB.reason, YB.stringifyOptions)]), BB({
+             iW.reason instanceof Error ? (OW = iW.reason, EW = [Qm(`Uncaught (in promise) ${OW.name}: ${OW.message}`, mW.stringifyOptions)]) : (OW = new Error, EW = [Qm("Uncaught (in promise)", mW.stringifyOptions), Qm(iW.reason, mW.stringifyOptions)]), WW({
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5064` → after: `L5064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5064) · [Before (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5064)

```diff
-                   return "function" == typeof BB ? null !== (OB = BB.__rrweb_layer__) && void 0 !== OB ? OB : BB.__posthog_layer__ : void 0
+                   return "function" == typeof WW ? null !== (iW = WW.__rrweb_layer__) && void 0 !== iW ? iW : WW.__posthog_layer__ : void 0
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5086` → after: `L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5086) · [Before (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5086)

```diff
-       const DD = null != tY ? tY : {},
+       const LE = null != OE ? OE : {},
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5104` → after: `L5104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5104) · [Before (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5104)

```diff
-         return OB > GB && (YB.warn("min cannot be greater than max."), OB = GB), qD(BB) ? BB > GB ? (YB.warn(" cannot be  greater than max: " + GB + ". Using max value instead."), GB) : OB > BB ? (YB.warn(" cannot be less than min: " + OB + ". Using min value instead."), OB) : BB … [truncated]
+         return iW > OW && (mW.warn("min cannot be greater than max."), iW = OW), kE(WW) ? WW > OW ? (mW.warn(" cannot be  greater than max: " + OW + ". Using max value instead."), OW) : iW > WW ? (mW.warn(" cannot be less than min: " + iW + ". Using min value instead."), iW) : WW … [truncated]
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5146` → after: `L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5146) · [Before (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5146)

```diff
-           }(VD, `Native gzip produced invalid output: ${BB}`)
+           }(yE, `Native gzip produced invalid output: ${WW}`)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5245` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5245) · [Before (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5245)

```diff
-               GB.error(`You must initialize PostHog before calling ${BB}`)
+               OW.error(`You must initialize PostHog before calling ${WW}`)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5247` → after: `L5247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5247) · [Before (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5247)

```diff
-             createLogger: (OB, GB) => uD(`${BB} ${OB}`, GB)
+             createLogger: (iW, OW) => dE(`${WW} ${iW}`, OW)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5266` → after: `L5266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5266) · [Before (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5266)

```diff
-         } = null != YB ? YB : {};
+         } = null != mW ? mW : {};
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5280` → after: `L5280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5280) · [Before (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5280)

```diff
-           if (JD(BB)) return null !== (OB = BB.__posthog_layer__) && void 0 !== OB ? OB : BB.__rrweb_layer__
+           if (xE(WW)) return null !== (iW = WW.__posthog_layer__) && void 0 !== iW ? iW : WW.__rrweb_layer__
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5347` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5347) · [Before (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5347)

```diff
-             return zD(BB) && BB ? BB : OB
+             return bE(WW) && WW ? WW : iW
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5374` → after: `L5374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5374) · [Before (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5374)

```diff
-         return Math.min(sD, null !== (OB = BB.payloadSizeLimitBytes) && void 0 !== OB ? OB : sD)
+         return Math.min(WN, null !== (iW = WW.payloadSizeLimitBytes) && void 0 !== iW ? iW : WN)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5406` → after: `L5406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5406) · [Before (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5406)

```diff
-         return zD(DB) && (DB = parseInt(DB)), DB > GB ? `[SessionRecording] ${YB} body too large to record (${DB} bytes)` : BB
+         return bE(EW) && (EW = parseInt(EW)), EW > OW ? `[SessionRecording] ${mW} body too large to record (${EW} bytes)` : WW
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5506` → after: `L5506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5506) · [Before (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5506)

```diff
-         return ZD(oB) ? oB : QB(oB)
+         return sE(PW) ? PW : NW(PW)
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5608` → after: `L5608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5608) · [Before (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5608)

```diff
-         return `${fQ}: ${BB}`
+         return `${HN}: ${WW}`
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5612` → after: `L5612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5612) · [Before (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5612)

```diff
-         return `[SessionReplay] Body too large to record (> ${BB} bytes)`
+         return `[SessionReplay] Body too large to record (> ${WW} bytes)`
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5739` → after: `L5739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR5739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5739) · [Before (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5739)

```diff
-             if (QB && oB) return `Content-Type ${QB} is not supported`;
+             if (NW && PW) return `Content-Type ${NW} is not supported`;
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6110` → after: `L6110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6110) · [Before (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6110)

```diff
-         return 0 === OB ? Po : (null == BB ? void 0 : BB.get_property(GB ? YB + GB : DB)) === QB ? Jo : Mo
+         return 0 === iW ? AP : (null == WW ? void 0 : WW.get_property(OW ? mW + OW : EW)) === NW ? xP : lP
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6116` → after: `L6116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6116) · [Before (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6116)

```diff
-           return "regex" === OB.matching && (null !== (YB = null == GB ? void 0 : GB.get(OB.url)) && void 0 !== YB ? YB : new RegExp(OB.url)).test(BB)
+           return "regex" === iW.matching && (null !== (mW = null == OW ? void 0 : OW.get(iW.url)) && void 0 !== mW ? mW : new RegExp(iW.url)).test(WW)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6121` → after: `L6121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6121) · [Before (L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6121)

```diff
-         return BB.includes("trigger_activated") ? Jo : BB.includes("trigger_pending") ? Mo : Po
+         return WW.includes("trigger_activated") ? xP : WW.includes("trigger_pending") ? lP : AP
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6268` → after: `L6268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6268) · [Before (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6268)

```diff
-                   QB = ZD(OB) ? !0 === OB : GB ? OB === GB : !!OB
+                   NW = sE(iW) ? !0 === iW : OW ? iW === OW : !!iW
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6381` → after: `L6381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6381) · [Before (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6381)

```diff
-         return OB ? Do : "trigger_activated" === GB ? Qo : "trigger_pending" === GB ? oo : !1 === BB.isSampled ? Yo : Qo
+         return iW ? LP : "trigger_activated" === OW ? cP : "trigger_pending" === OW ? wP : !1 === WW.isSampled ? PP : cP
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6392` → after: `L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6392) · [Before (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6392)

```diff
-         return GB && "trigger_pending" === OB ? oo : GB && "trigger_disabled" === OB || YB && !BB.isSampled ? Yo : !0 === BB.isSampled ? Do : Qo
+         return OW && "trigger_pending" === iW ? wP : OW && "trigger_disabled" === iW || mW && !WW.isSampled ? PP : !0 === WW.isSampled ? LP : cP
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6520` → after: `L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6520) · [Before (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6520)

```diff
-           var YB = new(BB instanceof io ? io : BB instanceof Lo ? Lo : Fo)(GB - OB);
+           var mW = new(WW instanceof vP ? vP : WW instanceof gP ? gP : eP)(OW - iW);
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6696` → after: `L6696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6696) · [Before (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6696)

```diff
-           }, this.vt = BB => this._rrweb.mirror.yDB(BB), this.bt = BB => {
+           }, this.vt = WW => this._rrweb.mirror.AmW(WW), this.bt = WW => {
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6698` → after: `L6698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6698) · [Before (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6698)

```diff
-             return (null !== (OB = null === (GB = BB.removes) || void 0 === GB ? void 0 : GB.length) && void 0 !== OB ? OB : 0) + (null !== (YB = null === (DB = BB.attributes) || void 0 === DB ? void 0 : DB.length) && void 0 !== YB ? YB : 0) + (null !== (QB = null === (oB = BB.te … [truncated]
+             return (null !== (iW = null === (OW = WW.removes) || void 0 === OW ? void 0 : OW.length) && void 0 !== iW ? iW : 0) + (null !== (mW = null === (EW = WW.attributes) || void 0 === EW ? void 0 : EW.length) && void 0 !== mW ? mW : 0) + (null !== (NW = null === (PW = WW.te … [truncated]
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6728-L6729` → after: `L6728-L6729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6728-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6728-L6729) · [Before (L6728-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6728-L6729)

```diff
-             bucketSize: null !== (GB = this.it.bucketSize) && void 0 !== GB ? GB : 100,
-             refillRate: null !== (YB = this.it.refillRate) && void 0 !== YB ? YB : 10,
+             bucketSize: null !== (OW = this.it.bucketSize) && void 0 !== OW ? OW : 100,
+             refillRate: null !== (mW = this.it.refillRate) && void 0 !== mW ? mW : 10,
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6733` → after: `L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6733) · [Before (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6733)

```diff
-           }), this.dt = null !== (DB = this.it.bytesBucketSize) && void 0 !== DB ? DB : 0, this.ht = null !== (QB = this.it.bytesRefillRate) && void 0 !== QB ? QB : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
+           }), this.dt = null !== (EW = this.it.bytesBucketSize) && void 0 !== EW ? EW : 0, this.ht = null !== (NW = this.it.bytesRefillRate) && void 0 !== NW ? NW : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6735` → after: `L6735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6735) · [Before (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6735)

```diff
-           this.xt = qD(oB) && Number.isFinite(oB) && oB > 0 ? oB : 3e5
+           this.xt = kE(PW) && Number.isFinite(PW) && PW > 0 ? PW : 3e5
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6858` → after: `L6858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6858) · [Before (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6858)

```diff
-           const YB = "person" === BB.type ? GB : OB,
+           const mW = "person" === WW.type ? OW : iW,
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6869` → after: `L6869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6869) · [Before (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6869)

```diff
-         return OB ? BB : "!" + BB
+         return iW ? WW : "!" + WW
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6904` → after: `L6904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6904) · [Before (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6904)

```diff
-             return qD(GB) ? GB : null
+             return kE(OW) ? OW : null
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6930` → after: `L6930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR6930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6930) · [Before (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6930)

```diff
-             MB && (PB ? this.qt("sampled") : nj.warn(`Sample rate (${GB}) has determined that this sessionId (${BB}) will not be sent to the server.`)), null === (OB = this._instance.persistence) || void 0 === OB || OB.register({
+             tW && (ZW ? this.qt("sampled") : yL.warn(`Sample rate (${OW}) has determined that this sessionId (${WW}) will not be sent to the server.`)), null === (iW = this._instance.persistence) || void 0 === iW || iW.register({
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7008` → after: `L7008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7008) · [Before (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7008)

```diff
-               return DB ? Do : YB ? oo : Yo
+               return EW ? LP : mW ? wP : PP
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7069` → after: `L7069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7069) · [Before (L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7069)

```diff
-                 JB = "string" == typeof OB && OB !== BB, MB = qD(GB) && GB !== QB, yB = OB === BB && qD(GB) && GB === QB && ZD(YB) ? YB : null
+                 wW = "string" == typeof iW && iW !== WW, tW = kE(OW) && OW !== NW, cW = iW === WW && kE(OW) && OW === NW && sE(mW) ? mW : null
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7125` → after: `L7125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7125) · [Before (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7125)

```diff
-             return this.Gt.flatMap((OB => "trigger_pending" !== OB.triggerStatusNoSideEffects(BB) ? [] : OB.getPendingTriggerConditions(BB).map((BB => `trigger group "${OB.group.name}": ${BB}`))))
+             return this.Gt.flatMap((iW => "trigger_pending" !== iW.triggerStatusNoSideEffects(WW) ? [] : iW.getPendingTriggerConditions(WW).map((WW => `trigger group "${iW.group.name}": ${WW}`))))
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7280` → after: `L7280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7280) · [Before (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7280)

```diff
-           DB = 0 > YB ? GB : GB.slice(YB + 1);
+           EW = 0 > mW ? OW : OW.slice(mW + 1);
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7282` → after: `L7282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7282) · [Before (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7282)

```diff
-           return OB(DB) ? DB : void 0
+           return iW(EW) ? EW : void 0
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7306` → after: `L7306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7306) · [Before (L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7306)

```diff
-           return DB.length ? DB : void 0
+           return EW.length ? EW : void 0
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7318` → after: `L7318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7318) · [Before (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7318)

```diff
-               GB = "string" == typeof BB ? [BB] : yD(BB) ? BB : [],
+               OW = "string" == typeof WW ? [WW] : ZE(WW) ? WW : [],
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7330` → after: `L7330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7330) · [Before (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7330)

```diff
-           const YB = "@type" === JB ? QB.length ? "string" == typeof DB ? QB[0] : QB : void 0 : "@id" === JB ? ej(Ej(BB, JB), OB) : aj(Ej(BB, JB), GB.maskUrl);
+           const mW = "@type" === wW ? NW.length ? "string" == typeof EW ? NW[0] : NW : void 0 : "@id" === wW ? RL(CL(WW, wW), iW) : qL(CL(WW, wW), OW.maskUrl);
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7348` → after: `L7348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7348) · [Before (L7348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7348)

```diff
-         return PD(yB) || bj(jB, "@graph", yB), Object.keys(jB).length ? jB : null
+         return AE(cW) || IL(LW, "@graph", cW), Object.keys(LW).length ? LW : null
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7534` → after: `L7534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7534) · [Before (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7534)

```diff
-         return yD(BB) && 0 === BB.length ? (Py = null !== (OB = Py) && void 0 !== OB ? OB : yy([]), Py) : yy(BB)
+         return ZE(WW) && 0 === WW.length ? (xc = null !== (iW = xc) && void 0 !== iW ? iW : wc([]), xc) : wc(WW)
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7544` → after: `L7544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7544) · [Before (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7544)

```diff
-           return yD(BB) && 0 === BB.length ? Py || (zy = null !== (OB = zy) && void 0 !== OB ? OB : Jy([]).then((BB => (Py = BB, BB))).catch((BB => {
+           return ZE(WW) && 0 === WW.length ? xc || (lc = null !== (iW = lc) && void 0 !== iW ? iW : tc([]).then((WW => (xc = WW, WW))).catch((WW => {
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7665` → after: `L7665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7665) · [Before (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7665)

```diff
-           return qD(OB) ? OB : null
+           return kE(iW) ? iW : null
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7669` → after: `L7669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7669) · [Before (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7669)

```diff
-           return null !== (BB = null === (OB = this.re) || void 0 === OB ? void 0 : OB.getMinimumDuration(this.sessionId)) && void 0 !== BB ? BB : null
+           return null !== (WW = null === (iW = this.re) || void 0 === iW ? void 0 : iW.getMinimumDuration(this.sessionId)) && void 0 !== WW ? WW : null
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7712` → after: `L7712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7712) · [Before (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7712)

```diff
-             return qD(GB) && qD(YB) ? YB - GB : null
+             return kE(OW) && kE(mW) ? mW - OW : null
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7757-L7760` → after: `L7757-L7760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7757-L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7757-L7760) · [Before (L7757-L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7757-L7760)

```diff
-             PB = null !== (QB = null == MB ? void 0 : MB.maskAllInputs) && void 0 !== QB ? QB : null == JB ? void 0 : JB.maskAllInputs,
-             zB = null !== (oB = null == MB ? void 0 : MB.maskTextSelector) && void 0 !== oB ? oB : null == JB ? void 0 : JB.maskTextSelector,
-             lB = null !== (jB = null == MB ? void 0 : MB.blockSelector) && void 0 !== jB ? jB : null == JB ? void 0 : JB.blockSelector,
-             pB = null !== (yB = null == MB ? void 0 : MB.maskAllElementAttributes) && void 0 !== yB ? yB : null == JB ? void 0 : JB.maskAllElementAttributes;
+             ZW = null !== (NW = null == tW ? void 0 : tW.maskAllInputs) && void 0 !== NW ? NW : null == wW ? void 0 : wW.maskAllInputs,
+             xW = null !== (PW = null == tW ? void 0 : tW.maskTextSelector) && void 0 !== PW ? PW : null == wW ? void 0 : wW.maskTextSelector,
+             lW = null !== (LW = null == tW ? void 0 : tW.blockSelector) && void 0 !== LW ? LW : null == wW ? void 0 : wW.blockSelector,
+             AW = null !== (cW = null == tW ? void 0 : tW.maskAllElementAttributes) && void 0 !== cW ? cW : null == wW ? void 0 : wW.maskAllElementAttributes;
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7797-L7799` → after: `L7797-L7799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7797-L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7797-L7799) · [Before (L7797-L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7797-L7799)

```diff
-             JB = null !== (OB = null !== (GB = null == jB ? void 0 : jB.recordCanvas) && void 0 !== GB ? GB : null == yB ? void 0 : yB.enabled) && void 0 !== OB && OB,
-             MB = null !== (YB = null !== (DB = null == jB ? void 0 : jB.canvasFps) && void 0 !== DB ? DB : null == yB ? void 0 : yB.fps) && void 0 !== YB ? YB : 4;
-           let PB = null !== (QB = null !== (oB = null == jB ? void 0 : jB.canvasQuality) && void 0 !== oB ? oB : null == yB ? void 0 : yB.quality) && void 0 !== QB ? QB : .4;
+             wW = null !== (iW = null !== (OW = null == LW ? void 0 : LW.recordCanvas) && void 0 !== OW ? OW : null == cW ? void 0 : cW.enabled) && void 0 !== iW && iW,
+             tW = null !== (mW = null !== (EW = null == LW ? void 0 : LW.canvasFps) && void 0 !== EW ? EW : null == cW ? void 0 : cW.fps) && void 0 !== mW ? mW : 4;
+           let ZW = null !== (NW = null !== (PW = null == LW ? void 0 : LW.canvasQuality) && void 0 !== PW ? PW : null == cW ? void 0 : cW.quality) && void 0 !== NW ? NW : .4;
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7814` → after: `L7814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7814) · [Before (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7814)

```diff
-           return null != GB ? GB : OB
+           return null != OW ? OW : iW
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7827` → after: `L7827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7827) · [Before (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7827)

```diff
-             JB = !!(ZD(jB) ? jB : yB);
+             wW = !!(sE(LW) ? LW : cW);
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7840` → after: `L7840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7840) · [Before (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7840)

```diff
-           if (this.oP && JD(QB))
+           if (this.cZ && xE(NW))
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7873` → after: `L7873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7873) · [Before (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7873)

```diff
-                   return !GB && OB.isInitial ? GB : YB(YB({}, OB), {}, {
+                   return !OW && iW.isInitial ? OW : mW(mW({}, iW), {}, {
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7891` → after: `L7891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7891) · [Before (L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7891)

```diff
-                   return pD(oB) && QB ? (jQ.add(QB), QB) : null != oB ? oB : void 0
+                   return UE(PW) && NW ? (tN.add(NW), NW) : null != PW ? PW : void 0
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7901` → after: `L7901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7901) · [Before (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7901)

```diff
-               })(this._instance.config, this.oP, BB)), {}, {
+               })(this._instance.config, this.cZ, WW)), {}, {
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7937` → after: `L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7937) · [Before (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7937)

```diff
-             return null !== (GB = null == YB ? void 0 : YB.name) && void 0 !== GB ? GB : null == YB ? void 0 : YB.url
+             return null !== (OW = null == mW ? void 0 : mW.name) && void 0 !== OW ? OW : null == mW ? void 0 : mW.url
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8007` → after: `L8007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8007) · [Before (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8007)

```diff
-             return qD(BB) && Number.isFinite(BB) && BB >= 1e3 && 36e5 >= BB ? BB : 6e4
+             return kE(WW) && Number.isFinite(WW) && WW >= 1e3 && 36e5 >= WW ? WW : 6e4
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8009` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8009) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8009)

```diff
-           return null !== (OB = null === (GB = this._instance.config.session_recording) || void 0 === GB ? void 0 : GB.full_snapshot_interval_millis) && void 0 !== OB ? OB : 3e5
+           return null !== (iW = null === (OW = this._instance.config.session_recording) || void 0 === OW ? void 0 : OW.full_snapshot_interval_millis) && void 0 !== iW ? iW : 3e5
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8039` → after: `L8039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8039) · [Before (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8039)

```diff
-               const GB = "url" === BB ? cQ : hQ;
+               const OW = "url" === WW ? qN : RN;
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8058` → after: `L8058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8058) · [Before (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8058)

```diff
-             OB = MD(BB) ? BB : JSON.parse(BB)
+             iW = lE(WW) ? WW : JSON.parse(WW)
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8064` → after: `L8064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8064) · [Before (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8064)

```diff
-             const YB = null !== (GB = OB.cache_timestamp) && void 0 !== GB ? GB : Date.now();
+             const mW = null !== (OW = iW.cache_timestamp) && void 0 !== OW ? OW : Date.now();
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8186-L8187` → after: `L8186-L8187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8186-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8186-L8187) · [Before (L8186-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8186-L8187)

```diff
-           const GB = `${this.sessionId}:${BB}`;
-           GB !== this.Vn && (this.Vn = GB, Gy.info(`holding buffer: ${BB}. nothing is uploaded until the user interacts with the page`))
+           const OW = `${this.sessionId}:${WW}`;
+           OW !== this.Vn && (this.Vn = OW, mc.info(`holding buffer: ${WW}. nothing is uploaded until the user interacts with the page`))
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8342-L8343` → after: `L8342-L8343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8342-L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8342-L8343) · [Before (L8342-L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8342-L8343)

```diff
-           const WB = null !== (YB = null !== (DB = null !== (QB = null == ZB ? void 0 : ZB.currentSessionId) && void 0 !== QB ? QB : null == NB ? void 0 : NB.nextSessionId) && void 0 !== DB ? DB : null == RB ? void 0 : RB.sessionId) && void 0 !== YB ? YB : this.Xt,
-             AB = null !== (oB = null !== (jB = null !== (yB = null == ZB ? void 0 : ZB.currentWindowId) && void 0 !== yB ? yB : null == NB ? void 0 : NB.nextWindowId) && void 0 !== jB ? jB : null == RB ? void 0 : RB.windowId) && void 0 !== oB ? oB : this.je;
+           const sW = null !== (mW = null !== (EW = null !== (NW = null == jW ? void 0 : jW.currentSessionId) && void 0 !== NW ? NW : null == UW ? void 0 : UW.nextSessionId) && void 0 !== EW ? EW : null == kW ? void 0 : kW.sessionId) && void 0 !== mW ? mW : this.Xt,
+             MW = null !== (PW = null !== (LW = null !== (cW = null == jW ? void 0 : jW.currentWindowId) && void 0 !== cW ? cW : null == UW ? void 0 : UW.nextWindowId) && void 0 !== LW ? LW : null == kW ? void 0 : kW.windowId) && void 0 !== PW ? PW : this.je;
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8436` → after: `L8436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8436) · [Before (L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8436)

```diff
-           return null !== (BB = null === (OB = this.re) || void 0 === OB ? void 0 : OB.getPendingTriggerConditions(this.sessionId)) && void 0 !== BB ? BB : []
+           return null !== (WW = null === (iW = this.re) || void 0 === iW ? void 0 : iW.getPendingTriggerConditions(this.sessionId)) && void 0 !== WW ? WW : []
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8447` → after: `L8447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8447) · [Before (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8447)

```diff
-             YB = `${this.sessionId}:${GB}`;
+             mW = `${this.sessionId}:${OW}`;
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8450` → after: `L8450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8450) · [Before (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8450)

```diff
-           }), Gy.info(`buffering: ${GB}`))
+           }), mc.info(`buffering: ${OW}`))
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8649` → after: `L8649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8649) · [Before (L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8649)

```diff
-             const BB = null != PB ? PB : {},
+             const WW = null != ZW ? ZW : {},
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8671` → after: `L8671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8671) · [Before (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8671)

```diff
-                 return null !== (YB = GB(BB)) && void 0 !== YB ? YB : null
+                 return null !== (mW = OW(WW)) && void 0 !== mW ? mW : null
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8676` → after: `L8676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8676) · [Before (L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8676)

```diff
-           }), this.ln && (OB.maskAllInputs = null === (DB = this.ln.maskAllInputs) || void 0 === DB || DB, OB.maskTextSelector = null !== (QB = this.ln.maskTextSelector) && void 0 !== QB ? QB : void 0, OB.blockSelector = null !== (oB = this.ln.blockSelector) && void 0 !== oB ? oB … [truncated]
+           }), this.ln && (iW.maskAllInputs = null === (EW = this.ln.maskAllInputs) || void 0 === EW || EW, iW.maskTextSelector = null !== (NW = this.ln.maskTextSelector) && void 0 !== NW ? NW : void 0, iW.blockSelector = null !== (PW = this.ln.blockSelector) && void 0 !== PW ? PW … [truncated]
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8679` → after: `L8679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8679) · [Before (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8679)

```diff
-           this.Bn = null !== (BB = this.Bn) && void 0 !== BB ? BB : new zj(yB, {
+           this.Bn = null !== (WW = this.Bn) && void 0 !== WW ? WW : new lL(cW, {
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8683` → after: `L8683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8683) · [Before (L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8683)

```diff
-               const GB = `Too many mutations on node '${BB}'. Rate limiting. This could be due to SVG animations or something similar`;
+               const OW = `Too many mutations on node '${WW}'. Rate limiting. This could be due to SVG animations or something similar`;
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8713` → after: `L8713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bfR8713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8ff73beabd771dc2bb28dade52914c91f90e9be7bb82a2d3ad3e09d18f9be2bf) · [After (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8713) · [Before (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8713)

```diff
-                 return OB.maskAllElementAttributes || OB.maskAttributeFn || (null == GB ? void 0 : GB.length) && !GB.includes("id") ? Fj : GB => {
+                 return iW.maskAllElementAttributes || iW.maskAttributeFn || (null == OW ? void 0 : OW.length) && !OW.includes("id") ? eL : OW => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (145 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1-L2)

```diff
- export const id = 63;
- export const ids = [63];
+ export const id = 64;
+ export const ids = [64];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L4)

```diff
-   40436: (BB, OB, GB) => {
+   41001: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L20-L21` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L20-L21) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L20-L21)

```diff
-     var jB = GB(40440).e,
-       yB = GB(40449).b,
+     var LW = OW(41009).c,
+       cW = OW(41012).d,
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L23)

```diff
-     OB.e = function(BB) {
+     iW.d = function(WW) {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L39)

```diff
-   40449: (BB, OB) => {
+   41012: (WW, iW) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L125)

```diff
-     }, OB.b = MB
+     }, iW.d = tW
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L127)

```diff
-   40440: (BB, OB) => {
+   41009: (WW, iW) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L175)

```diff
-     }, OB.e = QB
+     }, iW.c = NW
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L177)

```diff
-   40430: (BB, OB, GB) => {
+   40993: (WW, iW, OW) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L210-L211` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L210-L211) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L210-L211)

```diff
-     var oB = GB(3085),
-       jB = GB(25);
+     var PW = OW(3822),
+       LW = OW(27);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L214)

```diff
-     var MB = GB(3816);
+     var tW = OW(4605);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L216` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L216) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L216)

```diff
-       zB = MB.d,
+       xW = tW.g,
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L240` → after: `L245-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L245-L246) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L240)

```diff
-         const OB = function(BB) {
+         const iW = UW(WW);
+         this.timestamps.push(WW.timestamp), this.active.push(function(WW) {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L242-L244` → after: `L248-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L248-L249) · [Before (L242-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L242-L244)

```diff
-           return BB.type === MB.c.IncrementalSnapshot ? null === (OB = BB.data) || void 0 === OB ? void 0 : OB.source : void 0
-         }(BB);
-         this.timestamps.push(BB.timestamp), this.active.push(pB.includes(OB));
+           return AW.includes(UW(WW)) || WW.type === tW.c.Custom && (null === (iW = WW.data) || void 0 === iW ? void 0 : iW.tag) === tW.l.active
+         }(WW));
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L293` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L298) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L293)

```diff
-           if (DB = OB ? BB : DB, jB) null !== (QB = YB) && void 0 !== QB && QB.isActive && (GB += Math.max(1, YB.end - YB.start)), YB = {
+           if (EW = iW ? WW : EW, LW) null !== (NW = mW) && void 0 !== NW && NW.isActive && (OW += Math.max(1, mW.end - mW.start)), mW = {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L321` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L326) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L321)

```diff
-         !this.NP && this.chars + DB > this.chunkChars && YB.push(this.finish());
+         !this.sZ && this.chars + EW > this.chunkChars && mW.push(this.finish());
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L325` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L330) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L325)

```diff
-           !this.NP && this.chars + DB.length > this.chunkChars && (YB.push(this.finish()), QB = !1), QB || (this.counter.addMessage(), QB = !0), this.counter.addEvent(BB), this.lines.push(DB), this.chars += DB.length, this.startMs = Math.min(this.startMs, BB.timestamp), this.endM … [truncated]
+           !this.sZ && this.chars + EW.length > this.chunkChars && (mW.push(this.finish()), NW = !1), NW || (this.counter.addMessage(), NW = !0), this.counter.addEvent(WW), this.lines.push(EW), this.chars += EW.length, this.startMs = Math.min(this.startMs, WW.timestamp), this.endM … [truncated]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L329` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L334) · [Before (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L329)

```diff
-         if (this.NP) return null;
+         if (this.sZ) return null;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L401` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L406) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L401)

```diff
-       return oB.byteLength > yB || jB > JB ? (console.warn(`Session replay: dropped a ${jB}-byte page recording chunk, over the size limits`), null) : {
+       return PW.byteLength > cW || LW > wW ? (console.warn(`Session replay: dropped a ${LW}-byte page recording chunk, over the size limits`), null) : {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L409` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L414) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L409)

```diff
-     var nB = GB(40432);
+     var yW = OW(40999);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L417` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L422) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L417)

```diff
-         null === OB || null !== this.tailTimer || this.writer.NP || (this.tailTimer = setTimeout((() => {
+         null === iW || null !== this.tailTimer || this.writer.sZ || (this.tailTimer = setTimeout((() => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L434` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L439) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L434)

```diff
-         if (!this.tickedSinceVideoCut || this.writer.NP) return;
+         if (!this.tickedSinceVideoCut || this.writer.sZ) return;
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L453` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L458) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L453)

```diff
-               return OB.length <= JB || (console.warn(`Session replay: dropped a page recording chunk of ${OB.length} characters, over the size limits`), !1)
+               return iW.length <= wW || (console.warn(`Session replay: dropped a page recording chunk of ${iW.length} characters, over the size limits`), !1)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L487` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L492) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L487)

```diff
-           BB.packed ??= (0, nB.c)(BB.text.text)
+           WW.packed ??= (0, yW.d)(WW.text.text)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L536-L542` → after: `L541-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L541-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L541-L547) · [Before (L536-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L536-L542)

```diff
-     var fB = GB(40457);
-     var kB = GB(40464),
-       dB = GB(3349),
-       KB = GB(92),
-       uB = GB(98),
-       mB = GB(31),
-       IB = GB(5102);
+     var JW = OW(41014);
+     var hW = OW(41021),
+       HW = OW(4048),
+       nW = OW(100),
+       uW = OW(109),
+       oW = OW(39),
+       dW = OW(5386);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L548-L549` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L553-L554) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L548-L549)

```diff
-       const OB = mB.g.getItem(BB);
-       return "number" === typeof OB && Number.isFinite(OB) ? OB : null
+       const iW = oW.i.getItem(WW);
+       return "number" === typeof iW && Number.isFinite(iW) ? iW : null
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L553` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L558) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L553)

```diff
-       const DB = mB.g.getItem(BB);
+       const EW = oW.i.getItem(WW);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L558-L559` → after: `L563-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L563-L564) · [Before (L558-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L558-L559)

```diff
-       const OB = mB.g.getItem("replayGrab");
-       return "stream" === OB ? [(0, dB.d)()] : "videoFrame" === OB || "bitmap" === OB ? [] : BB
+       const iW = oW.i.getItem("replayGrab");
+       return "stream" === iW ? [(0, HW.c)()] : "videoFrame" === iW || "bitmap" === iW ? [] : WW
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L563-L566` → after: `L568-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L568-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L568-L571) · [Before (L563-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L563-L566)

```diff
-     var wB = GB(1200),
-       EB = GB(40477),
-       cB = GB(40482),
-       hB = GB(40491);
+     var fW = OW(1194),
+       CW = OW(41035),
+       XW = OW(41041),
+       BW = OW(41046);
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L569` → after: `L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L574) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L569)

```diff
-       return `replayJoiner/${BB}`
+       return `replayJoiner/${WW}`
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L573` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L578) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L573)

```diff
-         let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EB.i;
+         let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CW.f;
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L577` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L582) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L577)

```diff
-         const GB = (0, cB.i)(BB, OB),
+         const OW = (0, XW.h)(WW, iW),
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L584` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L589) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L584)

```diff
-         return this.post("/v1/finish", OB, (0, EB.m)(OB), 3e4, BB.sequence)
+         return this.post("/v1/finish", iW, (0, CW.i)(iW), 3e4, WW.sequence)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L587` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L592) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L587)

```diff
-         return !this.keepalive.isInFlight(aB(BB.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${rB}`, JSON.stringify(BB))
+         return !this.keepalive.isInFlight(qW(WW.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${VW}`, JSON.stringify(WW))
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L590` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L595) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L590)

```diff
-         const QB = `${this.baseUrl}${BB}`,
+         const NW = `${this.baseUrl}${WW}`,
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L600` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L605) · [Before (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L600)

```diff
-         if (!jB.ok) throw new hB.e(`Part joiner ${BB} failed with ${jB.status}`, jB.status);
+         if (!LW.ok) throw new BW.c(`Part joiner ${WW} failed with ${LW.status}`, LW.status);
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L607` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L612) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L607)

```diff
-         releaseUrl: `${BB.url}${rB}`,
+         releaseUrl: `${WW.url}${VW}`,
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L610` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L615) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L610)

```diff
-           url: `${BB.url}/v1/relay`,
+           url: `${WW.url}/v1/relay`,
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L615-L618` → after: `L620-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L620-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L620-L623) · [Before (L615-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L615-L618)

```diff
-     var bB = GB(7028),
-       CB = GB(40497),
-       HB = GB(40505),
-       vB = GB(40514);
+     var IW = OW(7493),
+       aW = OW(41052),
+       rW = OW(41056),
+       zW = OW(41063);
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L621` → after: `L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L626) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L621)

```diff
-       return (0, kB.e)().manifestUrl
+       return (0, hW.d)().manifestUrl
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L663` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L668) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L663)

```diff
-         BB > (null !== (GB = null === (YB = this.manifest.still) || void 0 === YB ? void 0 : YB.atMs) && void 0 !== GB ? GB : -1 / 0) && (this.manifest.still = {
+         WW > (null !== (OW = null === (mW = this.manifest.still) || void 0 === mW ? void 0 : mW.atMs) && void 0 !== OW ? OW : -1 / 0) && (this.manifest.still = {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L702-L704` → after: `L707-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L707-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L707-L709) · [Before (L702-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L702-L704)

```diff
-         const QB = (0, bB.l)(DB.furthestStep, BB.furthestStep),
-           oB = Math.max(null !== (OB = DB.unboundKeyPresses) && void 0 !== OB ? OB : 0, null !== (GB = BB.unboundKeyPresses) && void 0 !== GB ? GB : 0);
-         return (QB !== DB.furthestStep || oB !== (null !== (YB = DB.unboundKeyPresses) && void 0 !== YB ? YB : 0)) && (void 0 !== QB && (DB.furthestStep = QB), oB > 0 && (DB.unboundKeyPresses = oB), !0)
+         const NW = (0, IW.o)(EW.furthestStep, WW.furthestStep),
+           PW = Math.max(null !== (iW = EW.unboundKeyPresses) && void 0 !== iW ? iW : 0, null !== (OW = WW.unboundKeyPresses) && void 0 !== OW ? OW : 0);
+         return (NW !== EW.furthestStep || PW !== (null !== (mW = EW.unboundKeyPresses) && void 0 !== mW ? mW : 0)) && (void 0 !== NW && (EW.furthestStep = NW), PW > 0 && (EW.unboundKeyPresses = PW), !0)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L719` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L724) · [Before (L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L719)

```diff
-         if (this.sending) return void(this.queuedSend = BO(null !== (OB = this.queuedSend) && void 0 !== OB ? OB : [], BB));
+         if (this.sending) return void(this.queuedSend = ii(null !== (iW = this.queuedSend) && void 0 !== iW ? iW : [], WW));
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L732` → after: `L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L737) · [Before (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L732)

```diff
-           of null !== (OB = this.prepareSend(BB)) && void 0 !== OB ? OB : []) {
+           of null !== (iW = this.prepareSend(WW)) && void 0 !== iW ? iW : []) {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L734` → after: `L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L739) · [Before (L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L734)

```diff
-           EB.i.sendBeacon(sB(), JSON.stringify(GB)) || (0, HB.c)(sB(), GB)
+           CW.f.sendBeacon(FW(), JSON.stringify(OW)) || (0, rW.b)(FW(), OW)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L743` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L748) · [Before (L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L743)

```diff
-           const BB = await (0, HB.c)(sB(), OB);
+           const WW = await (0, rW.b)(FW(), iW);
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L865-L866` → after: `L870-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L870-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L870-L871) · [Before (L865-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L865-L866)

```diff
-     var OO = GB(40469),
-       GO = GB(5122);
+     var Oi = OW(41028),
+       mi = OW(5397);
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L888` → after: `L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L893) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L888)

```diff
-           lateUploadUntilMs: OB.expiresAtMs + OO.c,
+           lateUploadUntilMs: iW.expiresAtMs + Oi.e,
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L946` → after: `L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L951) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L946)

```diff
-         this.record.nextDomSequence = Math.max(null !== (DB = this.record.nextDomSequence) && void 0 !== DB ? DB : 0, BB + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
+         this.record.nextDomSequence = Math.max(null !== (EW = this.record.nextDomSequence) && void 0 !== EW ? EW : 0, WW + 1), this.setMarker(), this.journal.queueDom(this.snapshot(), {
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L974` → after: `L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L979) · [Before (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L974)

```diff
-         mB.g.setItem(GO.m, !0)
+         oW.i.setItem(mi.j, !0)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1038` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1043) · [Before (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1038)

```diff
-     var oO = GB(36856),
+     var Li = OW(37245),
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1042` → after: `L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1047) · [Before (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1042)

```diff
-       return jO()('/*! For license information please see sessionReplayVideo.worker.b6cc7875.worker.js.LICENSE.txt */\n(()=>{var BB={7:()=>{}},OB={};function GB(YB){var DB=OB[YB];if(void 0!==DB)return DB.exports;var QB=OB[YB]={exports:{}};return BB[YB](QB,QB.exports,GB),QB.export … [truncated]
+       return ci()('/*! For license information please see sessionReplayVideo.worker.36aaf5cc.worker.js.LICENSE.txt */\n(()=>{var WW={6:()=>{}},iW={};function OW(mW){var EW=iW[mW];if(void 0!==EW)return EW.exports;var NW=iW[mW]={exports:{}};return WW[mW](NW,NW.exports,OW),NW.export … [truncated]
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1097` → after: `L1102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1102) · [Before (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1097)

```diff
-         this.requester = "requestFrame" in YB ? YB : this.stream, this.video.muted = !0, this.video.playsInline = !0, this.video.srcObject = this.stream, this.video.play().catch(GB), this.video.requestVideoFrameCallback(this.onVideoFrame)
+         this.requester = "requestFrame" in mW ? mW : this.stream, this.video.muted = !0, this.video.playsInline = !0, this.video.srcObject = this.stream, this.video.play().catch(OW), this.video.requestVideoFrameCallback(this.onVideoFrame)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1125` → after: `L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1130) · [Before (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1125)

```diff
-             this.stream === OB && (this.stop(), this.onUnavailable(`the canvas capture stream didn't play: ${BB instanceof Error?BB.message:String(BB)}`))
+             this.stream === iW && (this.stop(), this.onUnavailable(`the canvas capture stream didn't play: ${WW instanceof Error?WW.message:String(WW)}`))
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1150` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1155) · [Before (L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1150)

```diff
-           KB: {
+           xx: {
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1182` → after: `L1187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1187) · [Before (L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1182)

```diff
-             const YB = OB.width * OB.height < BB.width * BB.height ? OB : BB;
+             const mW = iW.width * iW.height < WW.width * WW.height ? iW : WW;
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1200` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1205) · [Before (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1200)

```diff
-           }(0 === GB.width ? OB.KB : GB, OB.KB, this.grab.maxMacroblocks);
+           }(0 === OW.width ? iW.xx : OW, iW.xx, this.grab.maxMacroblocks);
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1235` → after: `L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1240) · [Before (L1235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1235)

```diff
-           KB: OB.KB,
+           xx: iW.xx,
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1250` → after: `L1255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1255) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1250)

```diff
-         !(BB instanceof DOMException && "InvalidStateError" === BB.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${BB instanceof Error?BB.message:String(BB)}`))
+         !(WW instanceof DOMException && "InvalidStateError" === WW.name) && ++this.unrecoverableGrabFailures >= 30 && (this.stop(), this.onUnavailable(`canvas grabs keep failing: ${WW instanceof Error?WW.message:String(WW)}`))
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1263` → after: `L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1268) · [Before (L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1263)

```diff
-     var qO = GB(1299);
+     var ji = OW(1301);
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1275` → after: `L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1280) · [Before (L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1275)

```diff
-         const BB = (0, qO.D)().gameRender();
+         const WW = (0, ji.y)().gameRender();
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1389` → after: `L1394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1394) · [Before (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1389)

```diff
-             console.warn(`Session replay part joiner failed on video segment ${OB.sequence}; uploading it straight to storage.`, BB), BB instanceof WO || (this.downUntilMs = this.options.nowMs() + RO), this.handBack(OB, BB instanceof WO ? BB.reason : "unreachable")
+             console.warn(`Session replay part joiner failed on video segment ${iW.sequence}; uploading it straight to storage.`, WW), WW instanceof Mi || (this.downUntilMs = this.options.nowMs() + si), this.handBack(iW, WW instanceof Mi ? WW.reason : "unreachable")
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1414` → after: `L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1419) · [Before (L1414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1414)

```diff
-             if (void 0 === GB) throw new WO("missing", `the joiner asked for part ${OB} of ${BB.parts.length}`);
+             if (void 0 === OW) throw new Mi("missing", `the joiner asked for part ${iW} of ${WW.parts.length}`);
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1440` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1445) · [Before (L1440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1440)

```diff
-           return new WO("refused", `refused: ${BB.reason}`)
+           return new Mi("refused", `refused: ${WW.reason}`)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1443` → after: `L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1448) · [Before (L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1443)

```diff
-         return new WO(OB, `answered ${BB.outcome}`)
+         return new Mi(iW, `answered ${WW.outcome}`)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1498` → after: `L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1503) · [Before (L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1498)

```diff
-         if ((null === OB || void 0 === OB ? void 0 : OB.sequence) === BB) return this.telemetry = null, nO(OB.sJ, this.nowMs()) ? OB.sJ.target : void 0
+         if ((null === iW || void 0 === iW ? void 0 : iW.sequence) === WW) return this.telemetry = null, yi(iW.BL, this.nowMs()) ? iW.BL.target : void 0
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1506` → after: `L1511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1511) · [Before (L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1506)

```diff
-           DB = null === YB || void 0 === YB ? void 0 : YB.sJ.get(GB);
+           EW = null === mW || void 0 === mW ? void 0 : mW.BL.get(OW);
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1508` → after: `L1513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1513) · [Before (L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1508)

```diff
-           for (const [QB, oB] of YB.sJ) oB.expiresAtMs <= DB.expiresAtMs && YB.sJ.delete(QB)
+           for (const [NW, PW] of mW.BL) PW.expiresAtMs <= EW.expiresAtMs && mW.BL.delete(NW)
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1524` → after: `L1529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1529) · [Before (L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1524)

```diff
-           sJ: new Map,
+           BL: new Map,
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1530` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1535) · [Before (L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1530)

```diff
-         const GB = BB.sJ.get(OB);
+         const OW = WW.BL.get(iW);
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1536` → after: `L1541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1541) · [Before (L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1536)

```diff
-         return this.telemetryAsked === BB || null !== OB && OB.sequence === BB && nO(OB.sJ, this.nowMs()) ? null : BB
+         return this.telemetryAsked === WW || null !== iW && iW.sequence === WW && yi(iW.BL, this.nowMs()) ? null : WW
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1595` → after: `L1600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1600) · [Before (L1595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1595)

```diff
-               BB.sJ.set(OB + YB, {
+               WW.BL.set(iW + mW, {
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1600` → after: `L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1605) · [Before (L1600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1600)

```diff
-             return null !== DB && DB >= this.nextTelemetrySequence() && (null !== (QB = null === (oB = this.telemetry) || void 0 === oB ? void 0 : oB.sequence) && void 0 !== QB ? QB : -1) <= DB && void 0 !== GB.telemetryTarget && (this.telemetry = {
+             return null !== EW && EW >= this.nextTelemetrySequence() && (null !== (NW = null === (PW = this.telemetry) || void 0 === PW ? void 0 : PW.sequence) && void 0 !== NW ? NW : -1) <= EW && void 0 !== OW.telemetryTarget && (this.telemetry = {
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1602` → after: `L1607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1607) · [Before (L1602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1602)

```diff
-               sJ: {
+               BL: {
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1626` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1631) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1626)

```diff
-       return `${BB}:${OB}`
+       return `${WW}:${iW}`
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1657` → after: `L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1662) · [Before (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1657)

```diff
-           return null !== (BB = this.nextSequence.get("telemetry")) && void 0 !== BB ? BB : 0
+           return null !== (WW = this.nextSequence.get("telemetry")) && void 0 !== WW ? WW : 0
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1701` → after: `L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1706) · [Before (L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1701)

```diff
-         const YB = null !== (OB = null === (GB = BB.part) || void 0 === GB ? void 0 : GB.sequence) && void 0 !== OB ? OB : null;
+         const mW = null !== (iW = null === (OW = WW.part) || void 0 === OW ? void 0 : OW.sequence) && void 0 !== iW ? iW : null;
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1707` → after: `L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1712) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1707)

```diff
-             sequence: null !== YB && void 0 !== YB ? YB : this.takeSequence(BB.kind)
+             sequence: null !== mW && void 0 !== mW ? mW : this.takeSequence(WW.kind)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1718` → after: `L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1723) · [Before (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1718)

```diff
-         const GB = null !== (OB = this.nextSequence.get(BB)) && void 0 !== OB ? OB : 0;
+         const OW = null !== (iW = this.nextSequence.get(WW)) && void 0 !== iW ? iW : 0;
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1756` → after: `L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1761) · [Before (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1756)

```diff
-             this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= BB.bytes.byteLength, "uploaded" !== OB.type ? (this.callbacks.onDropped(BB, OB.reason, BB.sequence), this.segmentBroken(BB), "refused" !== OB.type || this.stopped || "telemetry" !== BB.kind || (console. … [truncated]
+             this.uploadInFlight = !1, this.queue.shift(), this.queuedBytes -= WW.bytes.byteLength, "uploaded" !== iW.type ? (this.callbacks.onDropped(WW, iW.reason, WW.sequence), this.segmentBroken(WW), "refused" !== iW.type || this.stopped || "telemetry" !== WW.kind || (console. … [truncated]
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1773` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1778) · [Before (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1773)

```diff
-                 throw new Error(`rejected for now: ${GB.reason}`)
+                 throw new Error(`rejected for now: ${OW.reason}`)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1780` → after: `L1785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1785) · [Before (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1780)

```diff
-               if (YB instanceof hB.e && null !== YB.status && YB.status < 500 && !IO.has(YB.status) && (null === YB.storageCode || !FO.has(YB.storageCode))) return console.warn(`Session replay ${BB.kind} segment ${BB.sequence} refused by storage:`, YB), {
+               if (mW instanceof BW.c && null !== mW.status && mW.status < 500 && !ei.has(mW.status) && (null === mW.storageCode || !vi.has(mW.storageCode))) return console.warn(`Session replay ${WW.kind} segment ${WW.sequence} refused by storage:`, mW), {
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1791-L1792` → after: `L1796-L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1796-L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1796-L1797) · [Before (L1791-L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1791-L1792)

```diff
-               QB = void 0 === BB.part ? "" : ` part ${BB.part.index}`;
-             if (console.warn(`Session replay ${BB.kind} segment ${BB.sequence}${QB} upload failed:`, YB), YB instanceof hB.e && (403 === YB.status && (OB = null, void 0 !== BB.part && this.targets.expire(BB.kind, BB.sequence, BB.part.index)), ++GB >= this.options.maxAttempts)) re … [truncated]
+               NW = void 0 === WW.part ? "" : ` part ${WW.part.index}`;
+             if (console.warn(`Session replay ${WW.kind} segment ${WW.sequence}${NW} upload failed:`, mW), mW instanceof BW.c && (403 === mW.status && (iW = null, void 0 !== WW.part && this.targets.expire(WW.kind, WW.sequence, WW.part.index)), ++OW >= this.options.maxAttempts)) re … [truncated]
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1810` → after: `L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1815) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1810)

```diff
-           return "rejected" in GB ? GB : {
+           return "rejected" in OW ? OW : {
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1833` → after: `L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1838) · [Before (L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1833)

```diff
-         return "rejected" in DB ? DB : {
+         return "rejected" in EW ? EW : {
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1947` → after: `L1952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1952) · [Before (L1947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1947)

```diff
-           }, null !== (YB = BB.completeUntilIndex) && void 0 !== YB ? YB : 0)
+           }, null !== (mW = WW.completeUntilIndex) && void 0 !== mW ? mW : 0)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L1975-L1976` → after: `L1980-L1981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L1980-L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1980-L1981) · [Before (L1975-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L1975-L1976)

```diff
-     var gO = GB(3347),
-       rO = GB(5095);
+     var Vi = OW(4045),
+       fi = OW(5380);
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2006` → after: `L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2011) · [Before (L2006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2006)

```diff
-           console.warn("Session replay couldn't start its video; recording DOM and events without it.", OB), this.videoUnavailable(`video couldn't start: ${OB instanceof Error?OB.message:String(OB)}`)
+           console.warn("Session replay couldn't start its video; recording DOM and events without it.", iW), this.videoUnavailable(`video couldn't start: ${iW instanceof Error?iW.message:String(iW)}`)
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2012` → after: `L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2017) · [Before (L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2012)

```diff
-           oB = (0, OO.l)(OB),
+           PW = (0, Oi.t)(iW),
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2023-L2024` → after: `L2028-L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2028-L2029) · [Before (L2023-L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2023-L2024)

```diff
-           console.error("Session replay video worker error.", BB.message), this.worker === QB && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${BB.message||"it didn't load"}`))
-         }, this.worker = QB, this.uploads = JB, this.joiner = yB, this.deps.debug.joiner = null !== (GB = null === yB || void 0 === yB ? void 0 : yB.stats) && void 0 !== GB ? GB : null, this.videoStarted = !0, this.deps.stills.start();
+           console.error("Session replay video worker error.", WW.message), this.worker === NW && (this.endVideo(), this.videoStopped("stopped_error", `video worker failed: ${WW.message||"it didn't load"}`))
+         }, this.worker = NW, this.uploads = wW, this.joiner = cW, this.deps.debug.joiner = null !== (OW = null === cW || void 0 === cW ? void 0 : cW.stats) && void 0 !== OW ? OW : null, this.videoStarted = !0, this.deps.stills.start();
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2026` → after: `L2031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2031) · [Before (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2026)

```diff
-           PB = (0, dB.d)();
+           ZW = (0, HW.c)();
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2040` → after: `L2045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2045) · [Before (L2040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2040)

```diff
-           journalRecordingId: null !== (YB = null === (DB = this.deps.journal) || void 0 === DB ? void 0 : DB.recordingId) && void 0 !== YB ? YB : null
+           journalRecordingId: null !== (mW = null === (EW = this.deps.journal) || void 0 === EW ? void 0 : EW.recordingId) && void 0 !== mW ? mW : null
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2095` → after: `L2100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2100) · [Before (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2095)

```diff
-             }), this.deps.experiment.logStats && console.warn(`Session replay stats: quality level ${BB.level} (${BB.reason})`), this.deps.telemetry.writeEvent("qualityChanged");
+             }), this.deps.experiment.logStats && console.warn(`Session replay stats: quality level ${WW.level} (${WW.reason})`), this.deps.telemetry.writeEvent("qualityChanged");
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2114` → after: `L2119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2119) · [Before (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2114)

```diff
-         console.warn(`Session replay stats: ${OB} fps encoded, ${BB.encodeWidth}x${BB.encodeHeight} ${BB.hardwareAcceleration}`)
+         console.warn(`Session replay stats: ${iW} fps encoded, ${WW.encodeWidth}x${WW.encodeHeight} ${WW.hardwareAcceleration}`)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2140` → after: `L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2145) · [Before (L2140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2140)

```diff
-     var cO = GB(40520);
+     var qi = OW(41067);
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2143` → after: `L2148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2148) · [Before (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2143)

```diff
-         maxBytes: OO.g
+         maxBytes: Oi.l
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2148` → after: `L2153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2153) · [Before (L2148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2148)

```diff
-         let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : EB.i;
+         let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CW.f;
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2162` → after: `L2167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2167) · [Before (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2162)

```diff
-         const QB = GB.byteLength <= hO.maxBytes ? GB : YB;
+         const NW = OW.byteLength <= Ri.maxBytes ? OW : mW;
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2172` → after: `L2177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2177) · [Before (L2172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2172)

```diff
-         if (this.stopped || null === GB || GB.atMs <= (null !== (BB = null === (OB = this.queued) || void 0 === OB ? void 0 : OB.atMs) && void 0 !== BB ? BB : -1 / 0)) return;
+         if (this.stopped || null === OW || OW.atMs <= (null !== (WW = null === (iW = this.queued) || void 0 === iW ? void 0 : iW.atMs) && void 0 !== WW ? WW : -1 / 0)) return;
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2202` → after: `L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2207) · [Before (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2202)

```diff
-         if (this.stopped || null === DB || DB.atMs <= (null !== (BB = null === (OB = this.manifest.contents.still) || void 0 === OB ? void 0 : OB.atMs) && void 0 !== BB ? BB : -1 / 0)) return;
+         if (this.stopped || null === EW || EW.atMs <= (null !== (WW = null === (iW = this.manifest.contents.still) || void 0 === iW ? void 0 : iW.atMs) && void 0 !== WW ? WW : -1 / 0)) return;
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2205` → after: `L2210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2210) · [Before (L2205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2205)

```diff
-         const oB = null !== (YB = null === QB || void 0 === QB ? void 0 : QB.sequence) && void 0 !== YB ? YB : this.nextSequence,
+         const PW = null !== (mW = null === NW || void 0 === NW ? void 0 : NW.sequence) && void 0 !== mW ? mW : this.nextSequence,
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2217` → after: `L2222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2222) · [Before (L2217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2217)

```diff
-         }, OB, aO, this.keepalive)) && void 0 !== GB ? GB : null;
+         }, iW, Gi, this.keepalive)) && void 0 !== OW ? OW : null;
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2236-L2241` → after: `L2241-L2246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2241-L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2241-L2246) · [Before (L2236-L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2236-L2241)

```diff
-     var TO = GB(5116),
-       bO = GB(40523),
-       CO = GB(40529),
-       HO = GB(40537),
-       vO = GB(7036),
-       sO = GB(7043);
+     var ai = OW(5390),
+       ri = OW(41073),
+       zi = OW(41082),
+       Fi = OW(41084),
+       Qi = OW(7500),
+       WO = OW(7502);
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2248` → after: `L2253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2253) · [Before (L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2248)

```diff
-         this.writer = new vO.d((0, CB.e)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
+         this.writer = new Qi.e((0, aW.e)()), this.framesSinceFpsSample = 0, this.lastFpsSampleMs = performance.now(), this.unsubscribers = [], this.actionBits = 0, this.carriedBytes = 0
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2252-L2253` → after: `L2257-L2258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2257-L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2257-L2258) · [Before (L2252-L2253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2252-L2253)

```diff
-           const oB = (0, sO.c)(BB);
-           DB ? this.writer.writeKey(xO(QB), oB, OB, GB, YB) : 0 !== oB && null === (0, sO.e)(BB) && this.writer.writeKey(xO(QB), 0, OB, GB, YB)
+           const PW = (0, WO.e)(WW);
+           EW ? this.writer.writeKey(iO(NW), PW, iW, OW, mW) : 0 !== PW && null === (0, WO.g)(WW) && this.writer.writeKey(iO(NW), 0, iW, OW, mW)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2258` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2263) · [Before (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2258)

```diff
-         })))), this.unsubscribers.push((0, qO.u)((() => {
+         })))), this.unsubscribers.push((0, ji.r)((() => {
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2309-L2310` → after: `L2314-L2315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2314-L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2314-L2315) · [Before (L2309-L2310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2309-L2310)

```diff
-     var BG = GB(5131),
-       OG = GB(40546);
+     var mO = OW(5399),
+       EO = OW(41091);
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2315` → after: `L2320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2320) · [Before (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2315)

```diff
-         const YB = OB.dryRun ? null : null !== (GB = BB.partJoiner) && void 0 !== GB ? GB : null,
+         const mW = iW.dryRun ? null : null !== (OW = WW.partJoiner) && void 0 !== OW ? OW : null,
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2317` → after: `L2322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2322) · [Before (L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2317)

```diff
-           oB = OB.dryRun ? new cO.b : new cO.f((0, kB.e)().segmentUploadUrl, {
+           PW = iW.dryRun ? new qi.d : new qi.f((0, hW.d)().segmentUploadUrl, {
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2324-L2325` → after: `L2329-L2330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2329-L2330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2329-L2330) · [Before (L2324-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2324-L2325)

```diff
-             jB = mB.g.getItem("replaySkipLowMemory"),
-             yB = "boolean" === typeof jB ? jB : null;
+             LW = oW.i.getItem("replaySkipLowMemory"),
+             cW = "boolean" === typeof LW ? LW : null;
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2328-L2331` → after: `L2333-L2336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2333-L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2333-L2336) · [Before (L2328-L2331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2328-L2331)

```diff
-             maxFps: null !== (OB = iB("replayMaxFps")) && void 0 !== OB ? OB : oB.maxFps,
-             maxMacroblocks: null !== (GB = iB("replayMaxMacroblocks")) && void 0 !== GB ? GB : oB.maxMacroblocks,
-             captureBudgetMsPerSecond: null !== (YB = iB("replayCaptureBudgetMs")) && void 0 !== YB ? YB : oB.captureBudgetMsPerSecond,
-             captureFrameCostFloorMs: null !== (DB = iB("replayCaptureCostFloorMs")) && void 0 !== DB ? DB : oB.captureFrameCostFloorMs,
+             maxFps: null !== (iW = vW("replayMaxFps")) && void 0 !== iW ? iW : PW.maxFps,
+             maxMacroblocks: null !== (OW = vW("replayMaxMacroblocks")) && void 0 !== OW ? OW : PW.maxMacroblocks,
+             captureBudgetMsPerSecond: null !== (mW = vW("replayCaptureBudgetMs")) && void 0 !== mW ? mW : PW.captureBudgetMsPerSecond,
+             captureFrameCostFloorMs: null !== (EW = vW("replayCaptureCostFloorMs")) && void 0 !== EW ? EW : PW.captureFrameCostFloorMs,
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2335` → after: `L2340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2340) · [Before (L2335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2335)

```diff
-             skipLowMemoryDevices: null !== yB && void 0 !== yB ? yB : oB.skipLowMemoryDevices
+             skipLowMemoryDevices: null !== cW && void 0 !== cW ? cW : PW.skipLowMemoryDevices
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2355` → after: `L2360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2360) · [Before (L2355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2355)

```diff
-             if ("videoSegments" === OB) null === (YB = this.video.uploads) || void 0 === YB || YB.listed(GB.sequence, null !== (DB = GB.parts) && void 0 !== DB ? DB : null);
+             if ("videoSegments" === iW) null === (mW = this.video.uploads) || void 0 === mW || mW.listed(OW.sequence, null !== (EW = OW.parts) && void 0 !== EW ? EW : null);
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2364` → after: `L2369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2369) · [Before (L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2364)

```diff
-         }), !OB.dryRun && HO.c.supported && (this.journal = new DO(new HO.c, BB, this.manifest.contents, (0, kB.e)())), this.debug = function() {
+         }), !iW.dryRun && Fi.d.supported && (this.journal = new Ni(new Fi.d, WW, this.manifest.contents, (0, hW.d)())), this.debug = function() {
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2384` → after: `L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2389) · [Before (L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2384)

```diff
-             this.debug.uploadedBytesByKind[BB.kind] = (null !== (GB = this.debug.uploadedBytesByKind[BB.kind]) && void 0 !== GB ? GB : 0) + BB.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(BB.meta, OB, BB.bytes), this.pageExi … [truncated]
+             this.debug.uploadedBytesByKind[WW.kind] = (null !== (OW = this.debug.uploadedBytesByKind[WW.kind]) && void 0 !== OW ? OW : 0) + WW.bytes.byteLength, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, this.onSegmentUploaded(WW.meta, iW, WW.bytes), this.pageExi … [truncated]
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2388` → after: `L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2393) · [Before (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2388)

```diff
-             if (console.warn(`Session replay dropped a ${BB.kind} segment: ${OB}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === BB.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (YB = this.video.uplo … [truncated]
+             if (console.warn(`Session replay dropped a ${WW.kind} segment: ${iW}`), this.debug.droppedSegments++, this.debug.uploadBacklogBytes = this.uploader.backlogBytes, "video" === WW.meta.type) this.telemetry.writeEvent("videoSegmentDropped"), null === (mW = this.video.uplo … [truncated]
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2399` → after: `L2404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2404) · [Before (L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2399)

```diff
-             this.stop(`uploads refused: ${BB}`)
+             this.stop(`uploads refused: ${WW}`)
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2435` → after: `L2440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2440) · [Before (L2435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2435)

```diff
-             logStats: !0 === mB.g.getItem("replayLogStats")
+             logStats: !0 === oW.i.getItem("replayLogStats")
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2443` → after: `L2448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2448) · [Before (L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2443)

```diff
-           const OB = null !== (BB = (0, IB.g)() ? uB.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== BB ? BB : mB.g.getItem("replayPostHogHost");
+           const iW = null !== (WW = (0, dW.f)() ? uW.currentUrl.getSearchParam("replayPostHogHost") : null) && void 0 !== WW ? WW : oW.i.getItem("replayPostHogHost");
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2449` → after: `L2454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2454) · [Before (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2449)

```diff
-         if (this.ownFpsMonitor = null === PB ? new OG.c({
+         if (this.ownFpsMonitor = null === ZW ? new EO.b({
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2456` → after: `L2461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2461) · [Before (L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2456)

```diff
-           }) : null, jB.o.subscribe("sessionReplayLowFps", (BB => {
+           }) : null, LW.l.subscribe("sessionReplayLowFps", (WW => {
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2461` → after: `L2466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2466) · [Before (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2461)

```diff
-           })), jB.o.subscribe("sessionReplayStayProgress", (BB => {
+           })), LW.l.subscribe("sessionReplayStayProgress", (WW => {
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2463` → after: `L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2468) · [Before (L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2463)

```diff
-           })), jB.o.subscribe("sessionReplayGameQuit", (BB => {
+           })), LW.l.subscribe("sessionReplayGameQuit", (WW => {
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2469` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2474) · [Before (L2469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2469)

```diff
-           })), null !== OB.currentGame && (this.listStay(OB.currentGame), jB.o.tM("sessionReplayStayOpened", OB.currentGame.gameNameWithVariation)), this.start(BB.expiresAtMs), this.dom = null, null !== PB) {
+           })), null !== iW.currentGame && (this.listStay(iW.currentGame), LW.l.iZ("sessionReplayStayOpened", iW.currentGame.gameNameWithVariation)), this.start(WW.expiresAtMs), this.dom = null, null !== ZW) {
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2473` → after: `L2478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2478) · [Before (L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2473)

```diff
-           }, this.journal, new fB.b);
+           }, this.journal, new JW.d);
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2487` → after: `L2492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2492) · [Before (L2487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2487)

```diff
-         return null !== (BB = null === (OB = this.videoConfig) || void 0 === OB ? void 0 : OB.manifestIntervalMs) && void 0 !== BB ? BB : 3e4
+         return null !== (WW = null === (iW = this.videoConfig) || void 0 === iW ? void 0 : iW.manifestIntervalMs) && void 0 !== WW ? WW : 3e4
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2497` → after: `L2502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2502) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2497)

```diff
-         this.manifest.gameJoined("anonymous" === this.recording.tags.place_mode || null === OB ? GB : {
+         this.manifest.gameJoined("anonymous" === this.recording.tags.place_mode || null === iW ? OW : {
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2505` → after: `L2510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2510) · [Before (L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2505)

```diff
-         }), this.flushTelemetry(), this.listStay(BB), jB.o.tM("sessionReplayStayOpened", BB.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
+         }), this.flushTelemetry(), this.listStay(WW), LW.l.iZ("sessionReplayStayOpened", WW.gameNameWithVariation), this.lowFpsOpen && this.manifest.flagCurrentGame("lowFps"), this.manifest.send())
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2527` → after: `L2532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2532) · [Before (L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2527)

```diff
-         }), Math.max(0, BB - Date.now() - 6e4))), this.pageExit.listen(OB), this.telemetry.attach((0, CO.b)(), (() => {
+         }), Math.max(0, WW - Date.now() - 6e4))), this.pageExit.listen(iW), this.telemetry.attach((0, zi.e)(), (() => {
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2532` → after: `L2537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2537) · [Before (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2532)

```diff
-           (0, bO.d)(BB) && this.manifest.flagCurrentGame("hadError")
+           (0, ri.c)(WW) && this.manifest.flagCurrentGame("hadError")
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2536` → after: `L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2541) · [Before (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2536)

```diff
-         (0, BG.f)((() => {
+         (0, mO.c)((() => {
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2538` → after: `L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2543) · [Before (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2538)

```diff
-         }), OB), null !== this.journal && (0, TO.e)(OB)
+         }), iW), null !== this.journal && (0, ai.c)(iW)
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2543` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2548) · [Before (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2543)

```diff
-           console.warn(`Session replay stopped recording: ${BB}`), this.debug.stoppedReason = BB, this.lifetime.abort();
+           console.warn(`Session replay stopped recording: ${WW}`), this.debug.stoppedReason = WW, this.lifetime.abort();
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2545` → after: `L2550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2550) · [Before (L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2545)

```diff
-           this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, rO.g)(), this.telemetry.stop(), this.flushTelemetry(), null === (OB = this.dom) || void 0 === OB || OB.cut(), null === (GB = this.dom) || void 0 === GB || GB.close(), this.video.endVideo(), this … [truncated]
+           this.stills.stop(), this.video.canvasWatch.stop(), null !== this.dom && (0, fi.h)(), this.telemetry.stop(), this.flushTelemetry(), null === (iW = this.dom) || void 0 === iW || iW.cut(), null === (OW = this.dom) || void 0 === OW || OW.close(), this.video.endVideo(), this … [truncated]
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2619` → after: `L2624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2624) · [Before (L2619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2619)

```diff
-   7036: (BB, OB, GB) => {
+   7500: (WW, iW, OW) => {
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2621-L2622` → after: `L2626-L2627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2626-L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2626-L2627) · [Before (L2621-L2622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2621-L2622)

```diff
-       d: () => kB,
-       g: () => dB
+       e: () => JW,
+       h: () => hW
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2624` → after: `L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2629) · [Before (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2624)

```diff
-     var YB = GB(7043);
+     var mW = OW(7502);
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2670` → after: `L2675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2675) · [Before (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2670)

```diff
-         GB.setUint8(YB, JB), GB.setUint32(YB + 1, this.timeUnits(BB), !0), GB.setUint16(YB + 5, fB(OB.backingWidth), !0), GB.setUint16(YB + 7, fB(OB.backingHeight), !0), GB.setUint16(YB + 9, fB(OB.cssWidth), !0), GB.setUint16(YB + 11, fB(OB.cssHeight), !0), GB.setUint16(YB + 13,  … [truncated]
+         OW.setUint8(mW, wW), OW.setUint32(mW + 1, this.timeUnits(WW), !0), OW.setUint16(mW + 5, TW(iW.backingWidth), !0), OW.setUint16(mW + 7, TW(iW.backingHeight), !0), OW.setUint16(mW + 9, TW(iW.cssWidth), !0), OW.setUint16(mW + 11, TW(iW.cssHeight), !0), OW.setUint16(mW + 13,  … [truncated]
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2685` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2690) · [Before (L2685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2685)

```diff
-         this.view.setUint8(QB, zB), this.view.setUint32(QB + 1, this.timeUnits(BB), !0), this.view.setUint8(QB + 5, OB), this.view.setUint8(QB + 6, (GB ? RB : 0) | (YB ? WB : 0) | (DB ? AB : 0)), this.length += NB
+         this.view.setUint8(NW, xW), this.view.setUint32(NW + 1, this.timeUnits(WW), !0), this.view.setUint8(NW + 5, iW), this.view.setUint8(NW + 6, (OW ? kW : 0) | (mW ? sW : 0) | (EW ? MW : 0)), this.length += UW
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2707` → after: `L2712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2712) · [Before (L2707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2707)

```diff
-       if (GB < oB || GB > QB || OB.getUint32(0, !0) !== DB) throw new Error(`Not a version ${oB}-${QB} replay telemetry chunk`);
+       if (OW < PW || OW > NW || iW.getUint32(0, !0) !== EW) throw new Error(`Not a version ${PW}-${NW} replay telemetry chunk`);
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2737` → after: `L2742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2742) · [Before (L2737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2737)

```diff
-             renderer: null !== (uB = nB[OB.getUint8(KB + 15)]) && void 0 !== uB ? uB : "unknown",
+             renderer: null !== (nW = YW[iW.getUint8(HW + 15)]) && void 0 !== nW ? nW : "unknown",
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2746` → after: `L2751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2751) · [Before (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2746)

```diff
-             event: null !== (mB = UB[OB.getUint8(KB + 5)]) && void 0 !== mB ? mB : "none"
+             event: null !== (uW = yW[iW.getUint8(HW + 5)]) && void 0 !== uW ? uW : "none"
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2753` → after: `L2758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2758) · [Before (L2753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2753)

```diff
-           if (BB !== zB || !kB.inputRecorded) throw new Error(`Unknown replay telemetry record type ${BB} at byte ${KB}`);
+           if (WW !== xW || !JW.inputRecorded) throw new Error(`Unknown replay telemetry record type ${WW} at byte ${HW}`);
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2759` → after: `L2764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2764) · [Before (L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2759)

```diff
-               code: null !== (IB = YB.b[OB.getUint8(KB + 5)]) && void 0 !== IB ? IB : YB.b[0],
+               code: null !== (oW = mW.c[iW.getUint8(HW + 5)]) && void 0 !== oW ? oW : mW.c[0],
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L2770` → after: `L2775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8dR2775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-736114fe781ed455f094072e5221c6360e06dca249458b5f04a8fc2b6714ac8d) · [After (L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2775) · [Before (L2770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayRecorder.js#L2770)

```diff
-   36856: BB => {
+   37245: WW => {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (gw4e3a.937868ec → 1yqdn.8419f1e1)

- **File**: `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3)

#### 1. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L1-L2)

```diff
- export const id = 64;
- export const ids = [64];
+ export const id = 65;
+ export const ids = [65];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L4)

```diff
-   40567: (BB, OB, GB) => {
+   41118: (WW, iW, OW) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L8-L13` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L8-L13) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L8-L13)

```diff
-     var YB = GB(40469),
-       DB = GB(31),
-       QB = GB(40457),
-       oB = GB(40432),
-       jB = GB(40464),
-       yB = GB(1200);
+     var mW = OW(41028),
+       EW = OW(39),
+       NW = OW(41014),
+       PW = OW(40999),
+       LW = OW(41021),
+       cW = OW(1194);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L21)

```diff
-         QB = void 0 === GB ? DB : (0, yB.p)([GB, DB]);
+         NW = void 0 === OW ? EW : (0, cW.m)([OW, EW]);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L38)

```diff
-         if (!OB.ok) throw new Error(`HTTP ${OB.status}`);
+         if (!iW.ok) throw new Error(`HTTP ${iW.status}`);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L43-L49` → after: `L43-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L43-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L43-L49) · [Before (L43-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L43-L49)

```diff
-         return console.warn(`Session replay couldn't ask the part joiner about video segment ${OB}; uploading it from the journal.`, jB), null
-       }
-     }
-     var PB = GB(40505),
-       zB = GB(40537),
-       lB = GB(5122),
-       pB = GB(40514);
+         return console.warn(`Session replay couldn't ask the part joiner about video segment ${iW}; uploading it from the journal.`, LW), null
+       }
+     }
+     var ZW = OW(41056),
+       xW = OW(41084),
+       lW = OW(5397),
+       AW = OW(41063);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L61)

```diff
-         return console.warn(`Session replay couldn't mux late ${YB} segment ${DB}; skipping it.`, jB), "refused"
+         return console.warn(`Session replay couldn't mux late ${mW} segment ${EW}; skipping it.`, LW), "refused"
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L73)

```diff
-         return "rejected" in jB ? (console.warn(`Session replay late ${YB} segment ${DB} refused: ${jB.reason}`), jB.retryable ? "retryLater" : "refused") : (await GB.put(jB.uploadUrl, oB, QB, jB.ifNoneMatch), "uploaded")
+         return "rejected" in LW ? (console.warn(`Session replay late ${mW} segment ${EW} refused: ${LW.reason}`), LW.retryable ? "retryLater" : "refused") : (await OW.put(LW.uploadUrl, PW, NW, LW.ifNoneMatch), "uploaded")
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L75)

```diff
-         return console.warn(`Session replay late ${YB} segment ${DB} upload failed; trying again later.`, jB), "retryLater"
+         return console.warn(`Session replay late ${mW} segment ${EW} upload failed; trying again later.`, LW), "retryLater"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L81)

```diff
-         QB = (null !== (YB = GB.domSegments) && void 0 !== YB ? YB : []).filter((BB => BB.endMs <= DB));
+         NW = (null !== (mW = OW.domSegments) && void 0 !== mW ? mW : []).filter((WW => WW.endMs <= EW));
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L83)

```diff
-       for (const oB of (0, pB.g)({
+       for (const PW of (0, AW.f)({
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js` (Changed code · before: `L94-L98` → after: `L94-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/20c57f143e43d03f624c2f60a7de018653bc65fb...build/preprod.bloxd.io/1yqdn.8419f1e1#diff-8274059e965328429d2020a39cc9ed8e218a810a06d5e4bd5c03caa901a0a4e3) · [After (L94-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/1yqdn.8419f1e1/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L94-L98) · [Before (L94-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/20c57f143e43d03f624c2f60a7de018653bc65fb/bundles/preprod.bloxd.io/chunks/js/sessionReplayTailRecovery.js#L94-L98)

```diff
-     var NB = GB(40572),
-       RB = GB(40589),
-       WB = GB(40641),
-       AB = GB(40669),
-       VB = GB(40650);
+     var UW = OW(41120),
+       kW = OW(41142),
+       sW = OW(41179),
+       MW = OW(41205),
+       KW = OW(41190);
```
