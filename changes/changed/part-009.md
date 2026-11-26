# Changed — Bundle Modifications Report (Part 009 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `9 / 115` (**409** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 008](part-008.md) · [Part 010 →](part-010.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/107.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/107.js` (4031 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0)

#### 1708. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13319` → after: `L13342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13342) · [Before (L13319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13319)

```diff
-         this.client.gameRecorder.stopCapture(), this.recording && this.cleanupScene(), this.stopPlayback(), this.fileHandle = null !== (zU = null === XU || void 0 === XU ? void 0 : XU.fileHandle) && void 0 !== zU ? zU : null, this.fileName = null !== (cU = null !== (yU = null === … [truncated]
+         this.client.gameRecorder.stopCapture(), this.recording && this.cleanupScene(), this.stopPlayback(), this.fileHandle = null !== (LH = null === BH || void 0 === BH ? void 0 : BH.fileHandle) && void 0 !== LH ? LH : null, this.fileName = null !== (AH = null !== (rH = null === … [truncated]
```

#### 1709. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13322` → after: `L13345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13345) · [Before (L13322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13322)

```diff
-         oU && (oU.style.display = "block"), this.recording = UU, (0, RD.o)({
+         zH && (zH.style.display = "block"), this.recording = HH, (0, TC.p)({
```

#### 1710. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13334-L13335` → after: `L13357-L13358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13357-L13358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13357-L13358) · [Before (L13334-L13335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13334-L13335)

```diff
-         }, mI(this.client, this.WN), lI(this.WN, this.recording), tU.k.UY("replayViewer|replayLoaded"), this.recording.ticks.length > 0 && (this.applyTickAtIndex(0, "seek"), this.currentTickIndex = 1), this.isPlaying = !1, DU = this.WN, EU = UU.meta.gameNameWithVariation, YU = () … [truncated]
-           YU() || "QU" === UU.status || ("failed" !== UU.status ? DU.nC(!1) : tU.k.UY(yY.g, UU.messageKey))
+         }, DY(this.client, this.bG), wY(this.bG, this.recording), WH.k.AX("replayViewer|replayLoaded"), this.recording.ticks.length > 0 && (this.applyTickAtIndex(0, "seek"), this.currentTickIndex = 1), this.isPlaying = !1, CH = this.bG, EH = HH.meta.gameNameWithVariation, XH = () … [truncated]
+           XH() || "xB" === HH.status || ("failed" !== HH.status ? CH.IK(!1) : WH.k.AX(AX.d, HH.messageKey))
```

#### 1711. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13337-L13338` → after: `L13360-L13361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13360-L13361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13360-L13361) · [Before (L13337-L13338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13337-L13338)

```diff
-           console.error("Shader pack check failed for a replay", UU), YU() || tU.k.UY(yY.g, "shaderPack:failedToCompile")
-         }))), tU.k.UY("replayViewer|uiRefresh")
+           console.error("Shader pack check failed for a replay", HH), XH() || WH.k.AX(AX.d, "shaderPack:failedToCompile")
+         }))), WH.k.AX("replayViewer|uiRefresh")
```

#### 1712. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13347` → after: `L13370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13370) · [Before (L13347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13347)

```diff
-         this.isPlaying = !0, tU.k.UY("replayViewer|uiRefresh")
+         this.isPlaying = !0, WH.k.AX("replayViewer|uiRefresh")
```

#### 1713. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13350` → after: `L13373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13373) · [Before (L13350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13350)

```diff
-         this.isPlaying = !1, this.tickAccumulator = 0, tU.k.UY("replayViewer|uiRefresh")
+         this.isPlaying = !1, this.tickAccumulator = 0, WH.k.AX("replayViewer|uiRefresh")
```

#### 1714. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13353` → after: `L13376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13376) · [Before (L13353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13353)

```diff
-         this.playbackSpeed = (0, Mp.h)(this.playbackSpeed, UU), tU.k.UY("replayViewer|uiRefresh")
+         this.playbackSpeed = (0, gu.g)(this.playbackSpeed, HH), WH.k.AX("replayViewer|uiRefresh")
```

#### 1715. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13357` → after: `L13380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13380) · [Before (L13357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13357)

```diff
-         const XU = Math.round(UU * this.recording.meta.bq);
+         const BH = Math.round(HH * this.recording.meta.oN);
```

#### 1716. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13368` → after: `L13391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13391) · [Before (L13368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13368)

```diff
-         if (this.tickAccumulator = 0, AU === FU) return this.currentTickIndex = AU + 1, void tU.k.UY("replayViewer|uiRefresh");
+         if (this.tickAccumulator = 0, hH === tH) return this.currentTickIndex = hH + 1, void WH.k.AX("replayViewer|uiRefresh");
```

#### 1717. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13375` → after: `L13398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13398) · [Before (L13375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13375)

```diff
-         tU.k.UY("replayViewer|uiRefresh")
+         WH.k.AX("replayViewer|uiRefresh")
```

#### 1718. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13379` → after: `L13402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13402) · [Before (L13379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13379)

```diff
-         (0, QE.d)() || (0, Vp.e)(this.hasUnsavedChanges, UU)
+         (0, rE.e)() || (0, Ru.e)(this.hasUnsavedChanges, HH)
```

#### 1719. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13383-L13384` → after: `L13406-L13407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13406-L13407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13406-L13407) · [Before (L13383-L13384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13383-L13384)

```diff
-           UU.nC(!0), NY.failForPage(XU)
-         }(this.WN, UU)
+           HH.IK(!0), XX.failForPage(BH)
+         }(this.bG, HH)
```

#### 1720. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13387` → after: `L13410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13410) · [Before (L13387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13387)

```diff
-         if (!(0, QE.d)()) switch (UU) {
+         if (!(0, rE.e)()) switch (HH) {
```

#### 1721. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13393` → after: `L13416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13416) · [Before (L13393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13393)

```diff
-             tU.k.UY("replayViewer|uiActionRequested", UU);
+             WH.k.AX("replayViewer|uiActionRequested", HH);
```

#### 1722. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13422` → after: `L13445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13445) · [Before (L13422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13422)

```diff
-               await (0, sp.c)(np)
+               await (0, ju.d)(nu)
```

#### 1723. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13427` → after: `L13450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13450) · [Before (L13427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13427)

```diff
-         co.d.apply({
+         rz.e.apply({
```

#### 1724. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13429` → after: `L13452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13452) · [Before (L13429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13429)

```diff
-         }), this.WN.qY.AcU.clear(), this.WN.qY.FcU.clear(), this.WN.qY.ocU.length = 0, this.WN.qY.DcU.clear(), this.WN.qY.EcU.clear(), this.WN.qY.YcU.length = 0
+         }), this.bG.cX.PAH.clear(), this.bG.cX.TAH.clear(), this.bG.cX.VAH.length = 0, this.bG.cX.OAH.clear(), this.bG.cX.bAH.clear(), this.bG.cX.kAH.length = 0
```

#### 1725. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13444` → after: `L13467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13467) · [Before (L13444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13444)

```diff
-         (0, hI.i)(this.WN, null !== (UU = null === (XU = this.recording) || void 0 === XU ? void 0 : XU.meta.localPlayerEntityId) && void 0 !== UU ? UU : null),
+         (0, pY.e)(this.bG, null !== (HH = null === (BH = this.recording) || void 0 === BH ? void 0 : BH.meta.localPlayerEntityId) && void 0 !== HH ? HH : null),
```

#### 1726. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13450` → after: `L13473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13473) · [Before (L13450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13450)

```diff
-         }(this.WN, Object.keys(this.lastFullData.items)), this.recording = null, this.fileHandle = null, this.fileName = null, this.hasUnsavedChanges = !1, this.suggestSaveAs = !1, this.cameraMode = "recording", this.lastFullData = {
+         }(this.bG, Object.keys(this.lastFullData.items)), this.recording = null, this.fileHandle = null, this.fileName = null, this.hasUnsavedChanges = !1, this.suggestSaveAs = !1, this.cameraMode = "recording", this.lastFullData = {
```

#### 1727. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13465-L13466` → after: `L13488-L13489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13488-L13489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13488-L13489) · [Before (L13465-L13466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13465-L13466)

```diff
-         for (this.tickAccumulator += this.playbackSpeed; this.tickAccumulator >= 1 && this.currentTickIndex < XU;) this.tickAccumulator -= 1, this.applyTickAtIndex(this.currentTickIndex, "playback"), this.currentTickIndex++, tU.k.UY("replayViewer|uiRefresh");
-         this.currentTickIndex >= XU && (this.isPlaying = !1, tU.k.UY("replayViewer|uiRefresh"))
+         for (this.tickAccumulator += this.playbackSpeed; this.tickAccumulator >= 1 && this.currentTickIndex < BH;) this.tickAccumulator -= 1, this.applyTickAtIndex(this.currentTickIndex, "playback"), this.currentTickIndex++, WH.k.AX("replayViewer|uiRefresh");
+         this.currentTickIndex >= BH && (this.isPlaying = !1, WH.k.AX("replayViewer|uiRefresh"))
```

#### 1728. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13470-L13471` → after: `L13493-L13494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13493-L13494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13493-L13494) · [Before (L13470-L13471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13470-L13471)

```diff
-         mI(this.client, this.WN), lI(this.WN, this.recording);
-         for (let zU = 0; zU <= UU; zU++) tp(this.WN, this.recording.ticks[zU].structuralEvents);
+         DY(this.client, this.bG), wY(this.bG, this.recording);
+         for (let LH = 0; LH <= HH; LH++) Qu(this.bG, this.recording.ticks[LH].structuralEvents);
```

#### 1729. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13477-L13478` → after: `L13500-L13501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13500-L13501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13500-L13501) · [Before (L13477-L13478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13477-L13478)

```diff
-         for (let cU = XU; cU > UU; cU--) gp(this.WN, this.recording.ticks[cU].structuralEvents);
-         mI(this.client, this.WN),
+         for (let AH = BH; AH > HH; AH--) Wu(this.bG, this.recording.ticks[AH].structuralEvents);
+         DY(this.client, this.bG),
```

#### 1730. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13480-L13481` → after: `L13503-L13504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13503-L13504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13503-L13504) · [Before (L13480-L13481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13480-L13481)

```diff
-             for (const XU of Object.keys(UU.qY.Ga.hash)) {
-               const zU = UU.qY.Ga.hash[Number(XU)];
+             for (const BH of Object.keys(HH.cX.WQ.hash)) {
+               const LH = HH.cX.WQ.hash[Number(BH)];
```

#### 1731. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13489` → after: `L13512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13512) · [Before (L13489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13489)

```diff
-                 UU.bloxd.blockAdded(cU, yU, QU, UU.bloxd.pG(cU, yU, QU))
+                 HH.bloxd.blockAdded(AH, rH, SH, HH.bloxd.Fv(AH, rH, SH))
```

#### 1732. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13492` → after: `L13515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13515) · [Before (L13492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13492)

```diff
-           }(this.WN);
+           }(this.bG);
```

#### 1733. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13498` → after: `L13521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13521) · [Before (L13498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13498)

```diff
-         Xp(UU.uiElements), Up(UU.environment), Ap(this.client, this.WN, {}, UU.entities), Cp(this.WN, {}, UU.items), UU.hotbar && EI(this.WN, UU.hotbar), UU.playerHud && II(UU.playerHud), (0, pI.d)(this.client, UU.effects, this.lastFullData.effects, null !== (zU = null === (cU =  … [truncated]
+         Hu(HH.uiElements), yY(HH.environment), Su(this.client, this.bG, {}, HH.entities), mu(this.bG, {}, HH.items), HH.hotbar && CY(this.bG, HH.hotbar), HH.playerHud && GY(HH.playerHud), (0, YY.e)(this.client, HH.effects, this.lastFullData.effects, null !== (LH = null === (AH =  … [truncated]
```

#### 1734. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13502` → after: `L13525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13525) · [Before (L13502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13502)

```diff
-         const cU = null !== (XU = null === (zU = this.recording) || void 0 === zU ? void 0 : zU.meta.localPlayerEntityId) && void 0 !== XU ? XU : null;
+         const AH = null !== (BH = null === (LH = this.recording) || void 0 === LH ? void 0 : LH.meta.localPlayerEntityId) && void 0 !== BH ? BH : null;
```

#### 1735. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13505` → after: `L13528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13528) · [Before (L13505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13505)

```diff
-         yU && this.WN.xG.setPosition(this.WN.pM, yU.position)
+         rH && this.bG.pT.setPosition(this.bG.lF, rH.position)
```

#### 1736. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13535` → after: `L13558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13558) · [Before (L13535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13535)

```diff
-               LY: 0,
+               IX: 0,
```

#### 1737. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13538` → after: `L13561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13561) · [Before (L13538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13538)

```diff
-               easing: TI.h
+               easing: iY.l
```

#### 1738. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13540` → after: `L13563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13563) · [Before (L13540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13540)

```diff
-               LY: 1,
+               IX: 1,
```

#### 1739. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13543` → after: `L13566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13566) · [Before (L13543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13543)

```diff
-               easing: TI.h
+               easing: iY.l
```

#### 1740. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13554` → after: `L13577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13577) · [Before (L13554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13554)

```diff
-         const cU = null !== (XU = null === (zU = this.recording) || void 0 === zU ? void 0 : zU.meta.localPlayerEntityId) && void 0 !== XU ? XU : null;
+         const AH = null !== (BH = null === (LH = this.recording) || void 0 === LH ? void 0 : LH.meta.localPlayerEntityId) && void 0 !== BH ? BH : null;
```

#### 1741. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13557-L13558` → after: `L13580-L13581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13580-L13581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13580-L13581) · [Before (L13557-L13558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13557-L13558)

```diff
-           const yU = null !== (cU = null === zU || void 0 === zU ? void 0 : zU.recordedLocalPlayerEId) && void 0 !== cU ? cU : null;
-           null !== zU && void 0 !== zU && zU.applyRecordedViewState && yU ? (0, hI.e)(UU, yU, XU) : (0, hI.i)(UU, yU);
+           const rH = null !== (AH = null === LH || void 0 === LH ? void 0 : LH.recordedLocalPlayerEId) && void 0 !== AH ? AH : null;
+           null !== LH && void 0 !== LH && LH.applyRecordedViewState && rH ? (0, pY.d)(HH, rH, BH) : (0, pY.e)(HH, rH);
```

#### 1742. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13563-L13567` → after: `L13586-L13590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13586-L13590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13586-L13590) · [Before (L13563-L13567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13563-L13567)

```diff
-             QY: FU,
-             JzU: oU
-           } = (0, sy.f)([AU[0], AU[1], AU[2]]);
-           zE.e.applyReplayView(UU, [QU[0], QU[1], QU[2]], FU, oU)
-         }(this.WN, UU, {
+             zX: tH,
+             CAH: zH
+           } = (0, Fr.d)([hH[0], hH[1], hH[2]]);
+           BE.b.applyReplayView(HH, [SH[0], SH[1], SH[2]], tH, zH)
+         }(this.bG, HH, {
```

#### 1743. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13570` → after: `L13593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13593) · [Before (L13570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13570)

```diff
-         }) : "freecam" !== this.cameraMode && "keyframe" !== this.cameraMode || (0, hI.i)(this.WN, cU)
+         }) : "freecam" !== this.cameraMode && "keyframe" !== this.cameraMode || (0, pY.e)(this.bG, AH)
```

#### 1744. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13576` → after: `L13599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13599) · [Before (L13576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13576)

```diff
-         }, this.hasUnsavedChanges = !0, "keyframe" === this.cameraMode && this.resolveAndApplyCamera(this.getLastAppliedTickIndex()), tU.k.UY("replayViewer|uiRefresh"))
+         }, this.hasUnsavedChanges = !0, "keyframe" === this.cameraMode && this.resolveAndApplyCamera(this.getLastAppliedTickIndex()), WH.k.AX("replayViewer|uiRefresh"))
```

#### 1745. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13585` → after: `L13608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13608) · [Before (L13585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13585)

```diff
-         return Math.min(UU, XU + this.tickAccumulator + this.WN.oXU * this.playbackSpeed)
+         return Math.min(HH, BH + this.tickAccumulator + this.bG.OBH * this.playbackSpeed)
```

#### 1746. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13610` → after: `L13633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13633) · [Before (L13610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13610)

```diff
-               uiElements: gI(cU.uiElements, UU.uiElements, HN.y),
+               uiElements: WY(AH.uiElements, HH.uiElements, gG.v),
```

#### 1747. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13612-L13613` → after: `L13635-L13636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13635-L13636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13635-L13636) · [Before (L13612-L13613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13612-L13613)

```diff
-               entities: kI(cU.entities, UU.entities, HN.l),
-               items: kI(cU.items, UU.items, HN.p),
+               entities: MY(AH.entities, HH.entities, gG.i),
+               items: MY(AH.items, HH.items, gG.o),
```

#### 1748. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13616` → after: `L13639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13639) · [Before (L13616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13616)

```diff
-               playerHud: cU.playerHud ? gI(cU.playerHud, UU.playerHud, HN.q) : void 0,
+               playerHud: AH.playerHud ? WY(AH.playerHud, HH.playerHud, gG.p) : void 0,
```

#### 1749. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13625` → after: `L13648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13648) · [Before (L13625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13625)

```diff
-         this.lastFullData = yU ? PI(cU) : WI(this.lastFullData, cU), (0, FU.Fc)(QU.uiElements) || Xp(QU.uiElements), (0, FU.Fc)(QU.environment) || Up(QU.environment), Ap(this.client, this.WN, AU, QU.entities), Cp(this.WN, oU, QU.items), oI(QU.hotbar) && this.lastFullData.hotbar & … [truncated]
+         this.lastFullData = rH ? UY(AH) : VY(this.lastFullData, AH), (0, tH.Ac)(SH.uiElements) || Hu(SH.uiElements), (0, tH.Ac)(SH.environment) || yY(SH.environment), Su(this.client, this.bG, hH, SH.entities), mu(this.bG, zH, SH.items), tY(SH.hotbar) && this.lastFullData.hotbar & … [truncated]
```

#### 1750. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13627` → after: `L13650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13650) · [Before (L13627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13627)

```diff
-         }(this.WN, QU.ephemeralEvents), "seek" === XU && this.resolveAndApplyCamera(UU), this.moveLocalPlayer(this.lastFullData)
+         }(this.bG, SH.ephemeralEvents), "seek" === BH && this.resolveAndApplyCamera(HH), this.moveLocalPlayer(this.lastFullData)
```

#### 1751. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13632` → after: `L13655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13655) · [Before (L13632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13632)

```diff
-         this.kzU = UU, this.onAcknowledged = XU, this.requestSnapshot = zU, this.onForgotten = cU, this.lastSeq = 0, this.pending = [], this.lastSnapshotRequestAt = Number.NEGATIVE_INFINITY, this.snapshotDue = !1
+         this.KLH = HH, this.onAcknowledged = BH, this.requestSnapshot = LH, this.onForgotten = AH, this.lastSeq = 0, this.pending = [], this.lastSnapshotRequestAt = Number.NEGATIVE_INFINITY, this.snapshotDue = !1
```

#### 1752. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13641` → after: `L13664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13664) · [Before (L13641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13641)

```diff
-         return UU && !UU(this.kzU()) && console.warn("A predicted inventory action did not apply to the inventory it was predicted on"), this.record(UU)
+         return HH && !HH(this.KLH()) && console.warn("A predicted inventory action did not apply to the inventory it was predicted on"), this.record(HH)
```

#### 1753. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13668` → after: `L13691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13691) · [Before (L13668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13668)

```diff
-       VUU(UU, XU) {
+       rBH(HH, BH) {
```

#### 1754. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13670-L13671` → after: `L13693-L13694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13693-L13694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13693-L13694) · [Before (L13670-L13671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13670-L13671)

```diff
-         const zU = this.kzU(),
-           cU = null !== zU.nc;
+         const LH = this.KLH(),
+           AH = null !== LH.qL;
```

#### 1755. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13678-L13679` → after: `L13701-L13702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13701-L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13701-L13702) · [Before (L13678-L13679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13678-L13679)

```diff
-             of this.pending) XU(zU) || console.warn(`Predicted inventory action ${UU} no longer applies after a server snapshot`)
-         })), cU && null === zU.nc
+             of this.pending) BH(LH) || console.warn(`Predicted inventory action ${HH} no longer applies after a server snapshot`)
+         })), AH && null === LH.qL
```

#### 1756. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13682` → after: `L13705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13705) · [Before (L13682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13682)

```diff
-     var xp = zU(38752);
+     var wu = LH(38876);
```

#### 1757. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13685` → after: `L13708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13708) · [Before (L13685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13685)

```diff
-         this.qY = UU, this.pickups = []
+         this.cX = HH, this.pickups = []
```

#### 1758. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13691` → after: `L13714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13714) · [Before (L13691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13691)

```diff
-           drop: null === XU ? zU : null,
+           drop: null === BH ? LH : null,
```

#### 1759. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13699-L13700` → after: `L13722-L13723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13722-L13723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13722-L13723) · [Before (L13699-L13700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13699-L13700)

```diff
-           if ((null === (QU = AU.drop) || void 0 === QU ? void 0 : QU.nD) !== UU) continue;
-           const FU = (0, KF.t)(zU, AU.drop.mD, AU.drop.lD),
+           if ((null === (SH = hH.drop) || void 0 === SH ? void 0 : SH.aE) !== HH) continue;
+           const tH = (0, it.D)(LH, hH.drop.sE, hH.drop.JE),
```

#### 1760. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13702` → after: `L13725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13725) · [Before (L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13702)

```diff
-           AU.serverEId = oU, AU.drop = null, null !== oU && this.qY.hasItem(oU) && (this.hidden(oU) ? AU.hidden = !0 : cU && !yU(oU) && (this.qY.hide(oU), AU.hidden = !0))
+           hH.serverEId = zH, hH.drop = null, null !== zH && this.cX.hasItem(zH) && (this.hidden(zH) ? hH.hidden = !0 : AH && !rH(zH) && (this.cX.hide(zH), hH.hidden = !0))
```

#### 1761. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13734` → after: `L13757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13757) · [Before (L13734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13734)

```diff
-         this.qY.hasItem(UU) && this.qY.show(UU)
+         this.cX.hasItem(HH) && this.cX.show(HH)
```

#### 1762. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13749` → after: `L13772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13772) · [Before (L13749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13749)

```diff
-         this.qY = UU, this.unmatched = new Map, this.byServerEId = new Map, this.checks = null, this.suspended = !1, this.inResumeListing = !1, this.offlinePickups = void 0, this.offlinePickups = new Jp(UU)
+         this.cX = HH, this.unmatched = new Map, this.byServerEId = new Map, this.checks = null, this.suspended = !1, this.inResumeListing = !1, this.offlinePickups = void 0, this.offlinePickups = new Zu(HH)
```

#### 1763. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13764` → after: `L13787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13787) · [Before (L13764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13764)

```diff
-           const UU = this.qY.wG(cU.serverEId);
+           const HH = this.cX.hT(AH.serverEId);
```

#### 1764. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13766-L13767` → after: `L13789-L13790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13789-L13790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13789-L13790) · [Before (L13766-L13767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13766-L13767)

```diff
-             MD: cU.serverEId,
-             sD: null
+             DE: AH.serverEId,
+             dE: null
```

#### 1765. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13771-L13775` → after: `L13794-L13798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13794-L13798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13794-L13798) · [Before (L13771-L13775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13771-L13775)

```diff
-           MD: UU,
-           sD: {
-             nD: cU.seq,
-             mD: cU.itemId,
-             lD: cU.index
+           DE: HH,
+           dE: {
+             aE: AH.seq,
+             sE: AH.itemId,
+             JE: AH.index
```

#### 1766. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13783` → after: `L13806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13806) · [Before (L13783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13783)

```diff
-         yU && this.remove(yU), this.offlinePickups.note(XU, null !== (cU = null === yU || void 0 === yU ? void 0 : yU.serverEId) && void 0 !== cU ? cU : null, zU)
+         rH && this.remove(rH), this.offlinePickups.note(BH, null !== (AH = null === rH || void 0 === rH ? void 0 : rH.serverEId) && void 0 !== AH ? AH : null, LH)
```

#### 1767. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13786` → after: `L13809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13809) · [Before (L13786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13786)

```diff
-         this.predict(UU, XU, zU, cU, (0, xp.n)(yU, QU), (0, xp.m)(QU))
+         this.predict(HH, BH, LH, AH, (0, wu.l)(rH, SH), (0, wu.k)(SH))
```

#### 1768. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13789-L13790` → after: `L13812-L13813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13812-L13813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13812-L13813) · [Before (L13789-L13790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13789-L13790)

```diff
-         const yU = (0, xp.o)(UU);
-         this.predict(UU, zU, cU, {}, (0, xp.h)(XU, yU), (0, xp.g)(yU))
+         const rH = (0, wu.m)(HH);
+         this.predict(HH, LH, AH, {}, (0, wu.h)(BH, rH), (0, wu.d)(rH))
```

#### 1769. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13794` → after: `L13817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13817) · [Before (L13794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13794)

```diff
-         const FU = null !== (AU = this.unmatched.get(UU)) && void 0 !== AU ? AU : [],
+         const tH = null !== (hH = this.unmatched.get(HH)) && void 0 !== hH ? hH : [],
```

#### 1770. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13796` → after: `L13819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13819) · [Before (L13796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13796)

```diff
-             eId: this.qY.spawn(XU, zU, cU, yU, QU),
+             eId: this.cX.spawn(BH, LH, AH, rH, SH),
```

#### 1771. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13799` → after: `L13822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13822) · [Before (L13799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13799)

```diff
-             index: (0, KF.q)(FU.map((UU => UU.itemId)), XU),
+             index: (0, it.w)(tH.map((HH => HH.itemId)), BH),
```

#### 1772. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13819` → after: `L13842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13842) · [Before (L13819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13819)

```diff
-         return null !== (XU = this.all().find((XU => XU.eId === UU))) && void 0 !== XU ? XU : null
+         return null !== (BH = this.all().find((BH => BH.eId === HH))) && void 0 !== BH ? BH : null
```

#### 1773. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13822` → after: `L13845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13845) · [Before (L13822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13822)

```diff
-         if (UU === KF.u) return void(this.inResumeListing = !1);
+         if (HH === it.H) return void(this.inResumeListing = !1);
```

#### 1774. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13855` → after: `L13878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13878) · [Before (L13855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13855)

```diff
-         else if (this.qY.hasItem(XU)) return void this.discard(UU);
+         else if (this.cX.hasItem(BH)) return void this.discard(HH);
```

#### 1775. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13860` → after: `L13883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13883) · [Before (L13860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13860)

```diff
-         return XU ? null === this.qY.wG(XU.eId) ? (this.byServerEId.delete(UU), this.discard(XU), null) : (XU.serverItemArrived = !0, XU.serverMovedAt = Date.now(), this.checks ??= setInterval((() => {
+         return BH ? null === this.cX.hT(BH.eId) ? (this.byServerEId.delete(HH), this.discard(BH), null) : (BH.serverItemArrived = !0, BH.serverMovedAt = Date.now(), this.checks ??= setInterval((() => {
```

#### 1776. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13890-L13891` → after: `L13913-L13914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13913-L13914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13913-L13914) · [Before (L13890-L13891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13890-L13891)

```diff
-           const cU = this.qY.wG(zU.eId),
-             yU = this.qY.wG(zU.serverEId),
+           const AH = this.cX.hT(LH.eId),
+             rH = this.cX.hT(LH.serverEId),
```

#### 1777. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13898` → after: `L13921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13921) · [Before (L13898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13898)

```diff
-         this.byServerEId.delete(UU.serverEId), clearTimeout(UU.timeout), null !== this.qY.wG(UU.serverEId) && this.qY.reveal(UU.serverEId, UU.eId), this.qY.remove(UU.eId)
+         this.byServerEId.delete(HH.serverEId), clearTimeout(HH.timeout), null !== this.cX.hT(HH.serverEId) && this.cX.reveal(HH.serverEId, HH.eId), this.cX.remove(HH.eId)
```

#### 1778. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13915` → after: `L13938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13938) · [Before (L13915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13915)

```diff
-         clearTimeout(UU.timeout), this.qY.remove(UU.eId)
+         clearTimeout(HH.timeout), this.cX.remove(HH.eId)
```

#### 1779. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13920` → after: `L13943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13943) · [Before (L13920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13920)

```diff
-         this.WN = UU
+         this.bG = HH
```

#### 1780. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13923` → after: `L13946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13946) · [Before (L13923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13923)

```diff
-         return (0, Uo.h)(this.WN, null, cU, UU, {
+         return (0, Bz.l)(this.bG, null, AH, HH, {
```

#### 1781. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13926` → after: `L13949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13949) · [Before (L13926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13926)

```diff
-           uX: !0,
+           QL: !0,
```

#### 1782. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13931` → after: `L13954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13954) · [Before (L13931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13931)

```diff
-         this.WN.xG.deleteEntity(UU)
+         this.bG.pT.deleteEntity(HH)
```

#### 1783. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13934` → after: `L13957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13957) · [Before (L13934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13934)

```diff
-         return this.WN.xG.qXU(UU, "position") ? this.WN.xG.wG(UU) : null
+         return this.bG.pT.aBH(HH, "position") ? this.bG.pT.hT(HH) : null
```

#### 1784. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13937` → after: `L13960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13960) · [Before (L13937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13937)

```diff
-         return this.WN.xG.qXU(UU, "itemState")
+         return this.bG.pT.aBH(HH, "itemState")
```

#### 1785. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13940` → after: `L13963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13963) · [Before (L13940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13940)

```diff
-         const zU = this.wG(XU);
+         const LH = this.hT(BH);
```

#### 1786. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13942-L13943` → after: `L13965-L13966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13965-L13966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13965-L13966) · [Before (L13942-L13943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13942-L13943)

```diff
-           this.WN.xG.setPosition(UU, zU);
-           const XU = this.WN.xG.getState(UU, "smoothToServerPos"),
+           this.bG.pT.setPosition(HH, LH);
+           const BH = this.bG.pT.getState(HH, "smoothToServerPos"),
```

#### 1787. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13946` → after: `L13969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13969) · [Before (L13946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13946)

```diff
-         }(0, Uo.x)(this.WN, UU, (0, Uo.m)(this.WN, XU), !0)
+         }(0, Bz.G)(this.bG, HH, (0, Bz.q)(this.bG, BH), !0)
```

#### 1788. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13949` → after: `L13972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13972) · [Before (L13949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13949)

```diff
-         this.WN.xG.qXU(UU, "hidingMeshManager") || (0, Uo.x)(this.WN, UU, null, !0)
+         this.bG.pT.aBH(HH, "hidingMeshManager") || (0, Bz.G)(this.bG, HH, null, !0)
```

#### 1789. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13952` → after: `L13975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13975) · [Before (L13952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13952)

```diff
-         this.WN.xG.nH(UU, "hidingMeshManager")
+         this.bG.pT.fn(HH, "hidingMeshManager")
```

#### 1790. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13955-L13961` → after: `L13978-L13984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13978-L13984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13978-L13984) · [Before (L13955-L13961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13955-L13961)

```diff
-     var Tp = zU(40124),
-       hp = zU(7219),
-       Ua = zU(34784),
-       Xa = zU(4865),
-       za = zU(1885);
-     (0, dA.v)(eA);
-     const ca = new Fo.e((() => zU.e(226).then((() => zU(44220))).then((UU => () => new UU.default))));
+     var Ju = LH(40229),
+       iu = LH(7179),
+       pu = LH(34901),
+       yu = LH(4849),
+       HQ = LH(1868);
+     (0, bh.C)(mh);
+     const BQ = new zz.b((() => LH.e(232).then((() => LH(45022))).then((HH => () => new HH.default))));
```

#### 1791. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13963-L13965` → after: `L13986-L13988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13986-L13988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13986-L13988) · [Before (L13963-L13965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13963-L13965)

```diff
-     const ya = new HD.f((UU => zU(40132)(`./${UU}/${UU}Client`)));
-     for (const Da of HD.b) ya.load(Da).catch((UU => {
-       (0, LA.b)(`${Da}'s client code failed to evaluate`, UU)
+     const LQ = new gC.e((HH => LH(40237)(`./${HH}/${HH}Client`)));
+     for (const tQ of gC.d) LQ.load(tQ).catch((HH => {
+       (0, kh.d)(`${tQ}'s client code failed to evaluate`, HH)
```

#### 1792. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13969` → after: `L13992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13992) · [Before (L13969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13969)

```diff
-         this.WN = UU, this.meshCreator = XU, this.entities = {}, this.ironChestPasskeyCache = new uD, this.cameraController = void 0, this.freeCameraController = void 0, this.scriptedCameraController = void 0, this.environmentController = void 0, this.groundArrowPathController =  … [truncated]
+         this.bG = HH, this.meshCreator = BH, this.entities = {}, this.ironChestPasskeyCache = new cC, this.cameraController = void 0, this.freeCameraController = void 0, this.scriptedCameraController = void 0, this.environmentController = void 0, this.groundArrowPathController =  … [truncated]
```

#### 1793. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13971-L13973` → after: `L13994-L13996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13994-L13996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L13994-L13996) · [Before (L13971-L13973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13971-L13973)

```diff
-             if (rA.e.get("clientEscMenuOptions").showChunkBorders) {
-               const UU = this.WN.camera.wG();
-               return (0, fU.bb)(UU)
+             if (ch.c.get("clientEscMenuOptions").showChunkBorders) {
+               const HH = this.bG.camera.hT();
+               return (0, qH.$)(HH)
```

#### 1794. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13979` → after: `L14002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14002) · [Before (L13979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13979)

```diff
-         }), this.gameRecorder = new bI(this, this.WN), this.gameReplayer = new mp(this, this.WN), this.itemDropPrediction = new Kp(new bp(UU)), (0, iU.onGameResetOnce)((() => {
+         }), this.gameRecorder = new JY(this, this.bG), this.gameReplayer = new Fu(this, this.bG), this.itemDropPrediction = new au(new su(HH)), (0, gH.onGameResetOnce)((() => {
```

#### 1795. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13981` → after: `L14004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14004) · [Before (L13981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13981)

```diff
-         })), this.inventoryPrediction = new lp((() => UU.xG.kzU(UU.pM)), (UU => {
+         })), this.inventoryPrediction = new Du((() => HH.pT.KLH(HH.lF)), (HH => {
```

#### 1796. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13984` → after: `L14007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14007) · [Before (L13984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13984)

```diff
-           (0, iU.sendColyMessage)(KF.Di, null)
+           (0, gH.sendColyMessage)(it.bj, null)
```

#### 1797. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13994` → after: `L14017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14017) · [Before (L13994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13994)

```diff
-         (0, XX.m)(), (0, Ao.e)();
+         (0, BB.l)(), (0, tz.f)();
```

#### 1798. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13997-L13998` → after: `L14020-L14021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14020-L14021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14020-L14021) · [Before (L13997-L13998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L13997-L13998)

```diff
-         const zU = (0, kA.j)(),
-           [cU, yU] = (0, MD.d)(),
+         const LH = (0, xh.i)(),
+           [AH, rH] = (0, NC.g)(),
```

#### 1799. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14003` → after: `L14026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14026) · [Before (L14003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14003)

```diff
-         (0, vD.l)(null);
+         (0, RC.i)(null);
```

#### 1800. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14005-L14006` → after: `L14028-L14029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14028-L14029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14028-L14029) · [Before (L14005-L14006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14005-L14006)

```diff
-           FU = rA.e.get("clientEscMenuOptions");
-         rA.e.reprobeOldIntelDriver(), await (0, Ao.n)("shader pack");
+           tH = ch.c.get("clientEscMenuOptions");
+         ch.c.reprobeOldIntelDriver(), await (0, tz.r)("shader pack");
```

#### 1801. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14008-L14009` → after: `L14031-L14032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14031-L14032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14031-L14032) · [Before (L14008-L14009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14008-L14009)

```diff
-           DU = rA.e.isWebGpuDefaultOff(),
-           EU = FU.useWebGpu || (0, Ua.d)(null !== oU, DU);
+           CH = ch.c.isWebGpuDefaultOff(),
+           EH = tH.useWebGpu || (0, pu.c)(null !== zH, CH);
```

#### 1802. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14011` → after: `L14034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14034) · [Before (L14011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14011)

```diff
-         (0, WA.i)(EU);
+         (0, Oh.k)(EH);
```

#### 1803. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14015` → after: `L14038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14038) · [Before (L14015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14015)

```diff
-           await (0, Ao.n)("renderer");
+           await (0, tz.r)("renderer");
```

#### 1804. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14023` → after: `L14046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14046) · [Before (L14023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14023)

```diff
-             webGpuDefaultOffReason: rA.e.webGpuDefaultOffReason(),
+             webGpuDefaultOffReason: ch.c.webGpuDefaultOffReason(),
```

#### 1805. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14027` → after: `L14050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14050) · [Before (L14027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14027)

```diff
-           if ((0, zF.q)("webgpuloss")) {
+           if ((0, Lt.o)("webgpuloss")) {
```

#### 1806. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14039-L14043` → after: `L14062-L14066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14062-L14066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14062-L14066) · [Before (L14039-L14043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14039-L14043)

```diff
-           const QU = await zU() ? oA.y() : null;
-           if (null === QU || !Eo.e.provideWasmModule(QU)) {
-             (0, dA.i)();
-             const UU = (0, BA.f)();
-             return kX.c.errorWithCode("timeout" === UU || "fetch_failed" === UU ? "Bloxd couldn't finish loading. Check your connection and refresh the page." : "Bloxd couldn't start in this browser. Try another browser, or turn off blockers for this site.", GX.m.INITIALISE_NOA,  … [truncated]
+           const SH = await LH() ? zh.x() : null;
+           if (null === SH || !Xz.d.provideWasmModule(SH)) {
+             (0, bh.m)();
+             const HH = (0, Ph.g)();
+             return xB.e.errorWithCode("timeout" === HH || "fetch_failed" === HH ? "Bloxd couldn't finish loading. Check your connection and refresh the page." : "Bloxd couldn't start in this browser. Try another browser, or turn off blockers for this site.", vB.h.INITIALISE_NOA,  … [truncated]
```

#### 1807. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14047-L14054` → after: `L14070-L14077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14070-L14077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14070-L14077) · [Before (L14047-L14054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14047-L14054)

```diff
-           const aU = null !== (IU = null === yU || void 0 === yU ? void 0 : yU.Hk) && void 0 !== IU ? IU : await (0, WA.f)();
-           await (0, Ao.n)("engine");
-           const GU = rA.e.get("clientEscMenuOptions").antiAliasing;
-           if (nA.d.setRendererMsaa(GU), YU = new UA({
-               HV: UU,
-               Hk: aU,
-               Ua: null !== (gU = null === yU || void 0 === yU ? void 0 : yU.Ua) && void 0 !== gU ? gU : null,
-               bq: pU.f.clientTicksPerSecond,
+           const QH = null !== (YH = null === rH || void 0 === rH ? void 0 : rH.vx) && void 0 !== YH ? YH : await (0, Oh.f)();
+           await (0, tz.r)("engine");
+           const vH = ch.c.get("clientEscMenuOptions").antiAliasing;
+           if (Dh.c.setRendererMsaa(vH), XH = new Hh({
+               Cw: HH,
+               vx: QH,
+               yu: null !== (MH = null === rH || void 0 === rH ? void 0 : rH.yu) && void 0 !== MH ? MH : null,
+               oN: uH.g.clientTicksPerSecond,
```

#### 1808. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14057-L14064` → after: `L14080-L14087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14080-L14087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14080-L14087) · [Before (L14057-L14064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14057-L14064)

```diff
-               IK: !1,
-               NK: !1,
-               aY: pU.f.aY,
-               Qg: pU.f.Qg,
-               zXU: [0, 5, 0],
-               cg: pU.f.cg,
-               zg: pU.f.zg,
-               yg: pU.f.yg,
+               Py: !1,
+               vy: !1,
+               xX: uH.g.xX,
+               yW: uH.g.yW,
+               xBH: [0, 5, 0],
+               iW: uH.g.iW,
+               JW: uH.g.JW,
+               pW: uH.g.pW,
```

#### 1809. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14066-L14072` → after: `L14089-L14095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14089-L14095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14089-L14095) · [Before (L14066-L14072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14066-L14072)

```diff
-               Xa: !FU.disableAmbientOcclusion,
-               IcU: [.92, .8, .5],
-               pcU: 1,
-               nG: [AU.horizontal, AU.vertical],
-               bC: (0, vD.f)(AU),
-               Iw: [BX.e.xz, BX.e.y],
-               HJ: !1,
+               HQ: !tH.disableAmbientOcclusion,
+               oAH: [.92, .8, .5],
+               IAH: 1,
+               jT: [hH.horizontal, hH.vertical],
+               sK: (0, RC.e)(hH),
+               Aq: [PB.c.xz, PB.c.y],
+               Qp: !1,
```

#### 1810. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14074-L14076` → after: `L14097-L14099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14097-L14099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14097-L14099) · [Before (L14074-L14076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14074-L14076)

```diff
-               MN: pU.f.MN,
-               NcU: GU,
-               SN: (0, ZX.e)((() => YU), (() => JU.f.bloxd)),
+               nG: uH.g.nG,
+               mAH: vH,
+               cG: (0, TB.d)((() => XH), (() => aH.f.bloxd)),
```

#### 1811. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14089` → after: `L14112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14112) · [Before (L14089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14089)

```diff
-               meshingWorkerCount: (0, mD.d)() ? 1 : (0, nD.e)(navigator.hardwareConcurrency, (0, rU.isMobile)()),
+               meshingWorkerCount: (0, DC.e)() ? 1 : (0, FC.b)(navigator.hardwareConcurrency, (0, cH.isMobile)()),
```

#### 1812. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14091` → after: `L14114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14114) · [Before (L14091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14091)

```diff
-                 (0, uA.b)("Bloxd stopped drawing the world. Refresh the page to keep playing.")
+                 (0, eh.e)("Bloxd stopped drawing the world. Refresh the page to keep playing.")
```

#### 1813. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14096` → after: `L14119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14119) · [Before (L14096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14096)

```diff
-               acU: (UU, XU) => {
+               fAH: (HH, BH) => {
```

#### 1814. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14100-L14101` → after: `L14123-L14124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14123-L14124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14123-L14124) · [Before (L14100-L14101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14100-L14101)

```diff
-               fluidMeshColumn: (0, RX.k)(),
-               Zp: {
+               fluidMeshColumn: (0, UB.j)(),
+               Pu: {
```

#### 1815. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14106` → after: `L14129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14129) · [Before (L14106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14106)

```diff
-               YXU: {
+               mBH: {
```

#### 1816. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14109` → after: `L14132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14132) · [Before (L14109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14109)

```diff
-               Fp: oU && null !== yU ? {
+               Cu: zH && null !== rH ? {
```

#### 1817. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14116` → after: `L14139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14139) · [Before (L14116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14116)

```diff
-                 "landingPage" === XU ? UU.yB.stopWorkers() : (0, rA.h)(XU) && UU.yB.restartWorkers()
+                 "landingPage" === BH ? HH.vU.stopWorkers() : (0, ch.g)(BH) && HH.vU.restartWorkers()
```

#### 1818. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14118-L14120` → after: `L14141-L14143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14141-L14143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14141-L14143) · [Before (L14118-L14120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14118-L14120)

```diff
-             }(YU), (0, to.g)("js", (0, po.f)(YU, DA.e()), (() => {
-               ao.e.freeSounds()
-             })), (0, Ao.c)() && (YU.nC(!0), NU = !0), function(UU) {
+             }(XH), (0, Mz.g)("js", (0, Qz.h)(XH, Ch.c()), (() => {
+               Wz.c.freeSounds()
+             })), (0, tz.e)() && (XH.IK(!0), GH = !0), function(HH) {
```

#### 1819. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14122` → after: `L14145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14145) · [Before (L14122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14122)

```diff
-               XU && ((0, iA.m)(), (0, zF.q)("webgpuloss") && (0, zF.d)("loseWebGpuDevice", (() => {
+               BH && ((0, gh.l)(), (0, Lt.o)("webgpuloss") && (0, Lt.d)("loseWebGpuDevice", (() => {
```

#### 1820. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14129-L14130` → after: `L14152-L14153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14152-L14153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14152-L14153) · [Before (L14129-L14130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14129-L14130)

```diff
-               (0, iA.m)();
-               const XU = new UF(UU._gl.getExtension("WEBGL_lose_context"), UU.Fa, new TA),
+               (0, gh.l)();
+               const BH = new Ht(HH._gl.getExtension("WEBGL_lose_context"), HH.hQ, new ph),
```

#### 1821. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14141` → after: `L14164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14164) · [Before (L14141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14141)

```diff
-             }(YU.WY.engine), null !== yU && void 0 !== yU && yU.gpuDevice && YU.Fp) {
+             }(XH.mX.engine), null !== rH && void 0 !== rH && rH.gpuDevice && XH.Cu) {
```

#### 1822. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14143` → after: `L14166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14166) · [Before (L14143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14143)

```diff
-             const UU = YU.Fp;
+             const HH = XH.Cu;
```

#### 1823. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14149` → after: `L14172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14172) · [Before (L14149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14149)

```diff
-           YU.qY.on("qa", (() => {
+           XH.cX.on("kQ", (() => {
```

#### 1824. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14151` → after: `L14174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14174) · [Before (L14151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14151)

```diff
-               YU.qY.qa && (0, LD.j)()
+               XH.cX.kQ && (0, bC.i)()
```

#### 1825. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14153` → after: `L14176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14176) · [Before (L14153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14153)

```diff
-           })), dD.c.markGameEngineConstructed()
+           })), OC.e.markGameEngineConstructed()
```

#### 1826. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14155` → after: `L14178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14178) · [Before (L14155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14155)

```diff
-           return (0, dA.i)(), ZU instanceof Error && ZU.message.startsWith("WebGL not supported") ? kX.c.errorWithCode("An issue with your browser is preventing the game from loading. It will work after you have fully closed and re-opened your browser.", GX.m.INITIALISE_WEBGL, {
+           return (0, bh.m)(), TH instanceof Error && TH.message.startsWith("WebGL not supported") ? xB.e.errorWithCode("An issue with your browser is preventing the game from loading. It will work after you have fully closed and re-opened your browser.", vB.h.INITIALISE_WEBGL, {
```

#### 1827. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14158` → after: `L14181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14181) · [Before (L14158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14158)

```diff
-           }) : kX.c.errorWithCode(ZU.toString(), GX.m.INITIALISE_NOA, {
+           }) : xB.e.errorWithCode(TH.toString(), vB.h.INITIALISE_NOA, {
```

#### 1828. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14163-L14164` → after: `L14186-L14187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14186-L14187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14186-L14187) · [Before (L14163-L14164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14163-L14164)

```diff
-         tU.k.UY("matchmakeAndPlayStepCompleted", {
-           step: GX.m.INITIALISE_NOA,
+         WH.k.AX("matchmakeAndPlayStepCompleted", {
+           step: vB.h.INITIALISE_NOA,
```

#### 1829. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14166-L14169` → after: `L14189-L14192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14189-L14192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14189-L14192) · [Before (L14166-L14169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14166-L14169)

```diff
-         }), await (0, Ao.n)("world gen"), (0, Eo.c)(YU), (0, Yo.e)(YU), await (0, Ao.n)("particles"), (0, OU.u)(YU), await (0, Ao.n)("gameplay"), Qa.setupBloxdForGameplay(YU, UU);
-         JU.f.bloxd, JU.f.WN = YU, PD.e.initNoa(YU), (0, Xa.c)(YU), await (0, Ao.n)("registration");
-         const GU = (0, vU.h)(YU).catch((UU => {
-             console.error(UU.stack), (0, uN.Wa)(UU);
+         }), await (0, tz.r)("world gen"), (0, Xz.c)(XH), (0, Gz.c)(XH), await (0, tz.r)("particles"), (0, lH.z)(XH), await (0, tz.r)("gameplay"), AQ.setupBloxdForGameplay(XH, HH);
+         aH.f.bloxd, aH.f.bG = XH, UC.e.initNoa(XH), (0, yu.b)(XH), await (0, tz.r)("registration");
+         const vH = (0, jH.l)(XH).catch((HH => {
+             console.error(HH.stack), (0, cG.TQ)(HH);
```

#### 1830. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14171` → after: `L14194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14194) · [Before (L14171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14171)

```diff
-             return aU.c.getId() !== jU.d && (XU += ' - try switching to the "Default 2" texture pack in settings.'), {
+             return QH.b.getId() !== sH.c && (BH += ' - try switching to the "Default 2" texture pack in settings.'), {
```

#### 1831. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14180` → after: `L14203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14203) · [Before (L14180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14180)

```diff
-           BU = (0, qU.s)(YU).catch((UU => (console.error(UU.stack), {
+           PH = (0, fH.o)(XH).catch((HH => (console.error(HH.stack), {
```

#### 1832. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14188-L14190` → after: `L14211-L14213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14211-L14213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14211-L14213) · [Before (L14188-L14190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14188-L14190)

```diff
-         return Qa.initialAssetLoadedProm = Promise.all([GU, BU]), NU && (0, Ao.q)((() => {
-           YU.nC(!1)
-         })), kX.c.value({
+         return AQ.initialAssetLoadedProm = Promise.all([vH, PH]), GH && (0, tz.t)((() => {
+           XH.IK(!1)
+         })), xB.e.value({
```

#### 1833. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14199` → after: `L14222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14222) · [Before (L14199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14199)

```diff
-         return JU.f.bloxd = yU, UU.bloxd = JU.f.bloxd, zU.init(yU), tX.c.init(), tU.k.UY("newBloxdSetup", yU), {
+         return aH.f.bloxd = rH, HH.bloxd = aH.f.bloxd, LH.init(rH), WB.b.init(), WH.k.AX("newBloxdSetup", rH), {
```

#### 1834. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14205` → after: `L14228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14228) · [Before (L14205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14205)

```diff
-         if (cU.aborted) return kX.c.errorWithCode("Left the game while it loaded", GX.m.CONNECT_TO_GAME_SERVER, {
+         if (AH.aborted) return xB.e.errorWithCode("Left the game while it loaded", vB.h.CONNECT_TO_GAME_SERVER, {
```

#### 1835. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14207` → after: `L14230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14230) · [Before (L14207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14207)

```diff
-           QU: !0
+           xB: !0
```

#### 1836. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14211` → after: `L14234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14234) · [Before (L14211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14211)

```diff
-             (0, rN.h)(yU, (0, rN.e)(cU))
+             (0, KG.k)(rH, (0, KG.g)(AH))
```

#### 1837. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14217` → after: `L14240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14240) · [Before (L14217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14217)

```diff
-           FU = ya.load(XU.gameNameWithVariation).then((() => null), (UU => null !== UU && void 0 !== UU ? UU : new Error("the game's code did not load")));
+           tH = LQ.load(BH.gameNameWithVariation).then((() => null), (HH => null !== HH && void 0 !== HH ? HH : new Error("the game's code did not load")));
```

#### 1838. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14233` → after: `L14256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14256) · [Before (L14233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14233)

```diff
-         tU.k.UY("onStartAssetLoading");
+         WH.k.AX("onStartAssetLoading");
```

#### 1839. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14235` → after: `L14258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14258) · [Before (L14235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14235)

```diff
-         if (!1 === oU.success) return kX.c.errorWithCode(oU.failDetails.reason, GX.m.CONNECT_TO_GAME_SERVER, {
+         if (!1 === zH.success) return xB.e.errorWithCode(zH.failDetails.reason, vB.h.CONNECT_TO_GAME_SERVER, {
```

#### 1840. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14237` → after: `L14260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14260) · [Before (L14237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14237)

```diff
-           QU: !0 === oU.failDetails.goesToUpdateWaiting || AU(),
+           xB: !0 === zH.failDetails.goesToUpdateWaiting || hH(),
```

#### 1841. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14243-L14244` → after: `L14266-L14267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14266-L14267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14266-L14267) · [Before (L14243-L14244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14243-L14244)

```diff
-         tU.k.UY("matchmakeAndPlayStepCompleted", {
-           step: GX.m.CONNECT_TO_GAME_SERVER,
+         WH.k.AX("matchmakeAndPlayStepCompleted", {
+           step: vB.h.CONNECT_TO_GAME_SERVER,
```

#### 1842. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14252-L14253` → after: `L14275-L14276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14275-L14276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14275-L14276) · [Before (L14252-L14253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14252-L14253)

```diff
-           NU = XU => (YU.dispose(), EU.Wk(), EU.leave(), UU.msgHandler === EU && (UU.msgHandler = null), XU),
-           IU = UU => NU(kX.c.errorWithCode("Left the game while it loaded", UU, {
+           GH = BH => (XH.dispose(), EH.Bx(), EH.leave(), HH.msgHandler === EH && (HH.msgHandler = null), BH),
+           YH = HH => GH(xB.e.errorWithCode("Left the game while it loaded", HH, {
```

#### 1843. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14255` → after: `L14278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14278) · [Before (L14255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14255)

```diff
-             QU: !0
+             xB: !0
```

#### 1844. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14257-L14259` → after: `L14280-L14282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14280-L14282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14280-L14282) · [Before (L14257-L14259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14257-L14259)

```diff
-         if (AU()) return IU(GX.m.CONNECT_TO_GAME_SERVER);
-         const [pU, gU] = await Qa.initialAssetLoadedProm, kU = aU.c.getGenerationFailure();
-         if (null !== kU) return AU() ? IU(GX.m.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES) : NU(kX.c.errorWithCode(kU.message, GX.m.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES, {
+         if (hH()) return YH(vB.h.CONNECT_TO_GAME_SERVER);
+         const [uH, MH] = await AQ.initialAssetLoadedProm, xH = QH.b.getGenerationFailure();
+         if (null !== xH) return hH() ? YH(vB.h.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES) : GH(xB.e.errorWithCode(xH.message, vB.h.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES, {
```

#### 1845. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14263` → after: `L14286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14286) · [Before (L14263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14263)

```diff
-         if (!1 === pU.success) return kX.c.errorWithCode(pU.failDetails.reason, GX.m.REGISTRATION, {
+         if (!1 === uH.success) return xB.e.errorWithCode(uH.failDetails.reason, vB.h.REGISTRATION, {
```

#### 1846. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14266` → after: `L14289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14289) · [Before (L14266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14266)

```diff
-         if (!1 === gU.success) return kX.c.errorWithCode(gU.failDetails.reason, GX.m.SETUP_LIFEFORMS, {
+         if (!1 === MH.success) return xB.e.errorWithCode(MH.failDetails.reason, vB.h.SETUP_LIFEFORMS, {
```

#### 1847. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14269` → after: `L14292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14292) · [Before (L14269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14269)

```diff
-         if (AU()) return IU(GX.m.REGISTRATION);
+         if (hH()) return YH(vB.h.REGISTRATION);
```

#### 1848. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14271` → after: `L14294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14294) · [Before (L14271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14271)

```diff
-         if (null !== GU) return NU(kX.c.errorWithCode(String(GU), GX.m.REGISTRATION, {
+         if (null !== vH) return GH(xB.e.errorWithCode(String(vH), vB.h.REGISTRATION, {
```

#### 1849. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14275-L14277` → after: `L14298-L14300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14298-L14300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14298-L14300) · [Before (L14275-L14277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14275-L14277)

```diff
-         const BU = UU.WN,
-           ZU = await NY.applyForGame(BU.Fp, XU.gameNameWithVariation, (() => AU() || QU()));
-         return zo.d.beforeServerListeners && await zo.d.beforeServerListeners(), AU() || "QU" === ZU.status && !QU() ? IU(GX.m.SHADER_PACK) : "failed" === ZU.status ? NU(kX.c.errorWithCode(ZU.messageKey, GX.m.SHADER_PACK, {
+         const PH = HH.bG,
+           TH = await XX.applyForGame(PH.Cu, BH.gameNameWithVariation, (() => hH() || SH()));
+         return Az.e.beforeServerListeners && await Az.e.beforeServerListeners(), hH() || "xB" === TH.status && !SH() ? YH(vB.h.SHADER_PACK) : "failed" === TH.status ? GH(xB.e.errorWithCode(TH.messageKey, vB.h.SHADER_PACK, {
```

#### 1850. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14279` → after: `L14302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14302) · [Before (L14279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14279)

```diff
-         })) : QU() ? NU(kX.c.ok()) : EU.oR() ? NU(kX.c.errorWithCode("You have disconnected from the server.", GX.m.CONNECT_TO_GAME_SERVER, {
+         })) : SH() ? GH(xB.e.ok()) : EH.mV() ? GH(xB.e.errorWithCode("You have disconnected from the server.", vB.h.CONNECT_TO_GAME_SERVER, {
```

#### 1851. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14281` → after: `L14304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14304) · [Before (L14281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14281)

```diff
-         })) : (null !== (FU = BU.Fp) && void 0 !== FU && FU.isRunning() && (0, Tp.f)(XU.userContext, XU.gameNameWithVariation).catch((UU => {
+         })) : (null !== (tH = PH.Cu) && void 0 !== tH && tH.isRunning() && (0, Ju.g)(BH.userContext, BH.gameNameWithVariation).catch((HH => {
```

#### 1852. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14283` → after: `L14306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14306) · [Before (L14283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14283)

```diff
-         })), "ok" === ZU.status && void 0 !== ZU.couldntRun && (0, Tp.e)(ZU.couldntRun), UU.handleServerConnectionInitialised(zU, XU.userContext, EU, YU), kX.c.ok())
+         })), "ok" === TH.status && void 0 !== TH.couldntRun && (0, Ju.d)(TH.couldntRun), HH.handleServerConnectionInitialised(LH, BH.userContext, EH, XH), xB.e.ok())
```

#### 1853. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14296-L14297` → after: `L14319-L14320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14319-L14320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14319-L14320) · [Before (L14296-L14297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14296-L14297)

```diff
-         } = Qa.setupBloxdForGameplay((0, JU.e)(), UU)));
-         const QU = (0, JU.e)(),
+         } = AQ.setupBloxdForGameplay((0, aH.c)(), HH)));
+         const SH = (0, aH.c)(),
```

#### 1854. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14299` → after: `L14322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14322) · [Before (L14299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14299)

```diff
-         return AU.isError() ? AU.asError().forward() : (QU.nC(!1), yU.gameRecorder.onGameSessionStarted(), (0, No.h)(QU), (0, sD.e)(), Qa.hasPlayedFirstGame = !0, kX.c.ok())
+         return hH.isError() ? hH.asError().forward() : (SH.IK(!1), rH.gameRecorder.onGameSessionStarted(), (0, Yz.j)(SH), (0, nC.c)(), AQ.hasPlayedFirstGame = !0, xB.e.ok())
```

#### 1855. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14303` → after: `L14326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14326) · [Before (L14303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14303)

```diff
-         const zU = (0, JU.e)(),
+         const LH = (0, aH.c)(),
```

#### 1856. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14309` → after: `L14332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14332) · [Before (L14309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14309)

```diff
-         return QU.isError() ? QU.asError().forward() : (zU.nC(!1), yU.gameRecorder.onGameSessionStarted(), kX.c.ok())
+         return SH.isError() ? SH.asError().forward() : (LH.IK(!1), rH.gameRecorder.onGameSessionStarted(), xB.e.ok())
```

#### 1857. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14312-L14313` → after: `L14335-L14336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14335-L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14335-L14336) · [Before (L14312-L14313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14312-L14313)

```diff
-         const yU = new Lo(this.WN, UU, XU, new ZD(this.WN), ao.e);
-         this.clientApi = yU, this.clientConnection = cU, cU.setupServerListeners(this.WN, zU, yU)
+         const rH = new kz(this.bG, HH, BH, new PC(this.bG), Wz.c);
+         this.clientApi = rH, this.clientConnection = AH, AH.setupServerListeners(this.bG, LH, rH)
```

#### 1858. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14320-L14323` → after: `L14343-L14346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14343-L14346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14343-L14346) · [Before (L14320-L14323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14320-L14323)

```diff
-           QU = (0, FU.Tb)(cU),
-           AU = (0, FU.Nb)(cU),
-           oU = (0, PX.s)(yU),
-           DU = (0, PX.G)(yU),
+           SH = (0, tH.Wb)(AH),
+           hH = (0, tH.Ob)(AH),
+           zH = (0, VB.v)(rH),
+           CH = (0, VB.N)(rH),
```

#### 1859. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14325` → after: `L14348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14348) · [Before (L14325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14325)

```diff
-             localPlayerId: this.WN.pM
+             localPlayerId: this.bG.lF
```

#### 1860. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14331` → after: `L14354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14354) · [Before (L14331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14331)

```diff
-           (0, LA.b)("No client code for the joined game", pU)
+           (0, kh.d)("No client code for the joined game", uH)
```

#### 1861. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14333` → after: `L14356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14356) · [Before (L14333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14333)

```diff
-         const NU = null !== (UU = null === (XU = YU) || void 0 === XU ? void 0 : XU(DU, oU, AU, EU)) && void 0 !== UU ? UU : {};
+         const GH = null !== (HH = null === (BH = XH) || void 0 === BH ? void 0 : BH(CH, zH, hH, EH)) && void 0 !== HH ? HH : {};
```

#### 1862. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14341` → after: `L14364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14364) · [Before (L14341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14341)

```diff
-         const zU = new Do.c(UU);
+         const LH = new Ez.d(HH);
```

#### 1863. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14349` → after: `L14372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14372) · [Before (L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14349)

```diff
-               reason: (0, za.h)(QU),
+               reason: (0, HQ.g)(SH),
```

#### 1864. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14355` → after: `L14378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14378) · [Before (L14355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14355)

```diff
-         return await zU.connectToServer(this.WN, yU, XU).then((UU => {
+         return await LH.connectToServer(this.bG, rH, BH).then((HH => {
```

#### 1865. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14375` → after: `L14398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14398) · [Before (L14375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14375)

```diff
-         return !!(0, RD.b)().websocketUrl || !!this.msgHandler
+         return !!(0, TC.c)().websocketUrl || !!this.msgHandler
```

#### 1866. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14391` → after: `L14414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14414) · [Before (L14391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14391)

```diff
-         tU.k.UY("unwantedLeftGame", {
+         WH.k.AX("unwantedLeftGame", {
```

#### 1867. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14405` → after: `L14428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14428) · [Before (L14405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14405)

```diff
-         (0, fN.h)(), this.gameRecorder.suspendCaptureForLeave(), console.log("Leaving game"), (0, PA.i)(), this.closeClientGameSession(), NY.endGame(), tU.k.UY("leaveGame", {
+         (0, eG.g)(), this.gameRecorder.suspendCaptureForLeave(), console.log("Leaving game"), (0, Vh.d)(), this.closeClientGameSession(), XX.endGame(), WH.k.AX("leaveGame", {
```

#### 1868. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14407` → after: `L14430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14430) · [Before (L14407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14407)

```diff
-         }), null === (UU = this.msgHandler) || void 0 === UU || UU.Wk(), null === (XU = this.msgHandler) || void 0 === XU || XU.leave(), this.msgHandler = null, delete this.WN.SXU, (0, iU.resetUtil)(), (0, Eo.h)(this.WN), (0, RD.o)({
+         }), null === (HH = this.msgHandler) || void 0 === HH || HH.Bx(), null === (BH = this.msgHandler) || void 0 === BH || BH.leave(), this.msgHandler = null, delete this.bG.JBH, (0, gH.resetUtil)(), (0, Xz.e)(this.bG), (0, TC.p)({
```

#### 1869. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14409` → after: `L14432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14432) · [Before (L14409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14409)

```diff
-         }), this.WN.nC(!0), ao.e.freeSoundsAfterGame(), (0, VD.M)(), this.clientConnection = null, this.clientApi = null, this.leaveGameReloadsPage() && (0, SN.reloadBloxd)(zU)
+         }), this.bG.IK(!0), Wz.c.freeSoundsAfterGame(), (0, jC.O)(), this.clientConnection = null, this.clientApi = null, this.leaveGameReloadsPage() && (0, lG.reloadBloxd)(LH)
```

#### 1870. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14412` → after: `L14435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14435) · [Before (L14412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14412)

```diff
-         return aU.c.isUsingTemporaryTexturePack() || this.isReplayMode()
+         return QH.b.isUsingTemporaryTexturePack() || this.isReplayMode()
```

#### 1871. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14421` → after: `L14444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14444) · [Before (L14421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14421)

```diff
-         this.clientGame = null, this.clientPlugins = null, (0, fD.closeClientGame)(XU, zU), (0, SY.m)(), null === (UU = this.clientApi) || void 0 === UU || UU.disposeGameOutput()
+         this.clientGame = null, this.clientPlugins = null, (0, eC.closeClientGame)(BH, LH), (0, lX.i)(), null === (HH = this.clientApi) || void 0 === HH || HH.disposeGameOutput()
```

#### 1872. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14428` → after: `L14451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14451) · [Before (L14428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14428)

```diff
-         null === (UU = this.clientConnection) || void 0 === UU || UU.dispose(), this.clientConnection = null, null === (XU = this.msgHandler) || void 0 === XU || XU.Wk(), null === (zU = this.msgHandler) || void 0 === zU || zU.leave(), this.msgHandler = null, this.currentConnectio … [truncated]
+         null === (HH = this.clientConnection) || void 0 === HH || HH.dispose(), this.clientConnection = null, null === (BH = this.msgHandler) || void 0 === BH || BH.Bx(), null === (LH = this.msgHandler) || void 0 === LH || LH.leave(), this.msgHandler = null, this.currentConnectio … [truncated]
```

#### 1873. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14430` → after: `L14453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14453) · [Before (L14430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14430)

```diff
-         }), (0, WD.k)()
+         }), (0, VC.g)()
```

#### 1874. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14444` → after: `L14467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14467) · [Before (L14444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14444)

```diff
-             console.error(`Error in client game callback ${UU} with args list ${JSON.stringify(zU)}`, FU)
+             console.error(`Error in client game callback ${HH} with args list ${JSON.stringify(LH)}`, tH)
```

#### 1875. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14452` → after: `L14475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14475) · [Before (L14452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14452)

```diff
-               console.error(`Error in client plugin callback ${UU} with args list ${JSON.stringify(zU)}`, FU)
+               console.error(`Error in client plugin callback ${HH} with args list ${JSON.stringify(LH)}`, tH)
```

#### 1876. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14457` → after: `L14480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14480) · [Before (L14457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14457)

```diff
-         this.WN.Pa = LA.b, this.WN.Wa = uN.Wa, console.log("Defined noa.logErrorMessage"), JU.f.WN && console.log("client csv detection");
+         this.bG.PQ = kh.d, this.bG.TQ = cG.TQ, console.log("Defined noa.logErrorMessage"), aH.f.bG && console.log("client csv detection");
```

#### 1877. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14477` → after: `L14500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14500) · [Before (L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14477)

```diff
-             this.WN.Pa(`Uncaught error in window event listener ${XU}, ${zU}, ${cU}, ${yU}, ${QU}`, QU)
+             this.bG.PQ(`Uncaught error in window event listener ${BH}, ${LH}, ${AH}, ${rH}, ${SH}`, SH)
```

#### 1878. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14480` → after: `L14503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14503) · [Before (L14480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14480)

```diff
-             nA.d.reset(), window.removeEventListener("error", UU)
+             Dh.c.reset(), window.removeEventListener("error", HH)
```

#### 1879. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14487` → after: `L14510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14510) · [Before (L14487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14487)

```diff
-         if (this.entities[UU]) throw new Error(`Entity with id ${UU} already exists`);
+         if (this.entities[HH]) throw new Error(`Entity with id ${HH} already exists`);
```

#### 1880. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14490-L14491` → after: `L14513-L14514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14513-L14514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14513-L14514) · [Before (L14490-L14491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14490-L14491)

```diff
-           Ep: zU
-         }, (0, WD.m)(UU), null === zU || void 0 === zU || zU.initClient(XU)
+           Xu: LH
+         }, (0, VC.k)(HH), null === LH || void 0 === LH || LH.initClient(BH)
```

#### 1881. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14495` → after: `L14518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14518) · [Before (L14495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14495)

```diff
-         null === (cU = this.entities[UU]) || void 0 === cU || null === (yU = cU.Ep) || void 0 === yU || null === (QU = yU.onChangeClient) || void 0 === QU || QU.call(yU, XU, zU)
+         null === (AH = this.entities[HH]) || void 0 === AH || null === (rH = AH.Xu) || void 0 === rH || null === (SH = rH.onChangeClient) || void 0 === SH || SH.call(rH, BH, LH)
```

#### 1882. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14504-L14505` → after: `L14527-L14528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14527-L14528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14527-L14528) · [Before (L14504-L14505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14504-L14505)

```diff
-         ((0, MU.b)(this.WN).disposeEntity(cU), cU !== this.WN.pM) && (null === (yU = this.WN.YM[this.WN.pM]) || void 0 === yU || delete yU[UU], null === (QU = this.WN.YM[this.WN.SXU]) || void 0 === QU || delete QU[UU], (0, JU.b)().removeEntityName(UU));
-         null === (XU = this.entities[UU]) || void 0 === XU || null === (zU = XU.Ep) || void 0 === zU || zU.disposeClient(), delete this.entities[UU]
+         ((0, RH.b)(this.bG).disposeEntity(AH), AH !== this.bG.lF) && (null === (rH = this.bG.mF[this.bG.lF]) || void 0 === rH || delete rH[HH], null === (SH = this.bG.mF[this.bG.JBH]) || void 0 === SH || delete SH[HH], (0, aH.b)().removeEntityName(HH));
+         null === (BH = this.entities[HH]) || void 0 === BH || null === (LH = BH.Xu) || void 0 === LH || LH.disposeClient(), delete this.entities[HH]
```

#### 1883. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14508-L14509` → after: `L14531-L14532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14531-L14532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14531-L14532) · [Before (L14508-L14509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14508-L14509)

```diff
-         const XU = (0, HU.c)(UU);
-         return String(XU) === String(this.WN.pM) ? this.WN.pM : XU
+         const BH = (0, NH.b)(HH);
+         return String(BH) === String(this.bG.lF) ? this.bG.lF : BH
```

#### 1884. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14515` → after: `L14538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14538) · [Before (L14515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14515)

```diff
-         return null !== (XU = null === (zU = this.entities[UU]) || void 0 === zU || null === (cU = zU.colyseusEntity) || void 0 === cU ? void 0 : cU.type) && void 0 !== XU ? XU : null
+         return null !== (BH = null === (LH = this.entities[HH]) || void 0 === LH || null === (AH = LH.colyseusEntity) || void 0 === AH ? void 0 : AH.type) && void 0 !== BH ? BH : null
```

#### 1885. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14519` → after: `L14542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14542) · [Before (L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14519)

```diff
-         return null !== (UU = null === (XU = this.msgHandler) || void 0 === XU || null === (zU = XU.gcU) || void 0 === zU ? void 0 : zU.sessionId) && void 0 !== UU ? UU : null
+         return null !== (HH = null === (BH = this.msgHandler) || void 0 === BH || null === (LH = BH.KAH) || void 0 === LH ? void 0 : LH.sessionId) && void 0 !== HH ? HH : null
```

#### 1886. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14523-L14524` → after: `L14546-L14547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14546-L14547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14546-L14547) · [Before (L14523-L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14523-L14524)

```diff
-         const AU = UU === this.WN.pM ? this.WN.SXU : UU;
-         return null !== (XU = null === (zU = this.msgHandler) || void 0 === zU || null === (cU = zU.gcU) || void 0 === cU || null === (yU = cU.state) || void 0 === yU || null === (QU = yU.entities) || void 0 === QU ? void 0 : QU.get(AU)) && void 0 !== XU ? XU : null
+         const hH = HH === this.bG.lF ? this.bG.JBH : HH;
+         return null !== (BH = null === (LH = this.msgHandler) || void 0 === LH || null === (AH = LH.KAH) || void 0 === AH || null === (rH = AH.state) || void 0 === rH || null === (SH = rH.entities) || void 0 === SH ? void 0 : SH.get(hH)) && void 0 !== BH ? BH : null
```

#### 1887. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14527` → after: `L14550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14550) · [Before (L14527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14527)

```diff
-         const cU = null === (UU = this.msgHandler) || void 0 === UU || null === (XU = UU.gcU) || void 0 === XU || null === (zU = XU.state) || void 0 === zU ? void 0 : zU.items;
+         const AH = null === (HH = this.msgHandler) || void 0 === HH || null === (BH = HH.KAH) || void 0 === BH || null === (LH = BH.state) || void 0 === LH ? void 0 : LH.items;
```

#### 1888. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14533` → after: `L14556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14556) · [Before (L14533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14533)

```diff
-         return null !== (XU = null === (zU = this.msgHandler) || void 0 === zU || null === (cU = zU.gcU) || void 0 === cU || null === (yU = cU.state) || void 0 === yU || null === (QU = yU.items) || void 0 === QU ? void 0 : QU.get(UU)) && void 0 !== XU ? XU : null
+         return null !== (BH = null === (LH = this.msgHandler) || void 0 === LH || null === (AH = LH.KAH) || void 0 === AH || null === (rH = AH.state) || void 0 === rH || null === (SH = rH.items) || void 0 === SH ? void 0 : SH.get(HH)) && void 0 !== BH ? BH : null
```

#### 1889. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14537` → after: `L14560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14560) · [Before (L14537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14537)

```diff
-         return null !== (XU = null === (zU = this.getColyseusEntity(UU)) || void 0 === zU ? void 0 : zU.scale) && void 0 !== XU ? XU : 1
+         return null !== (BH = null === (LH = this.getColyseusEntity(HH)) || void 0 === LH ? void 0 : LH.scale) && void 0 !== BH ? BH : 1
```

#### 1890. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14541` → after: `L14564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14564) · [Before (L14541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14541)

```diff
-         return null !== (UU = this.currentConnectionInfo) && void 0 !== UU ? UU : null
+         return null !== (HH = this.currentConnectionInfo) && void 0 !== HH ? HH : null
```

#### 1891. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14544-L14545` → after: `L14567-L14568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14567-L14568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14567-L14568) · [Before (L14544-L14545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14544-L14545)

```diff
-         (0, MU.b)(this.WN).setEffect(this.toReplicatedStateEId(UU), XU, zU), tU.k.UY("EffectUpdate", {
-           iX: UU,
+         (0, RH.b)(this.bG).setEffect(this.toReplicatedStateEId(HH), BH, LH), WH.k.AX("EffectUpdate", {
+           fH: HH,
```

#### 1892. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14554` → after: `L14577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14577) · [Before (L14554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14554)

```diff
-         return (0, MU.b)(this.WN).getEffects(this.toReplicatedStateEId(UU))
+         return (0, RH.b)(this.bG).getEffects(this.toReplicatedStateEId(HH))
```

#### 1893. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14558` → after: `L14581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14581) · [Before (L14558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14558)

```diff
-         return null !== (zU = null === (cU = this.getEffects(UU)[XU]) || void 0 === cU ? void 0 : cU.level) && void 0 !== zU ? zU : 0
+         return null !== (LH = null === (AH = this.getEffects(HH)[BH]) || void 0 === AH ? void 0 : AH.level) && void 0 !== LH ? LH : 0
```

#### 1894. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14561-L14563` → after: `L14584-L14586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14584-L14586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14584-L14586) · [Before (L14561-L14563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14561-L14563)

```diff
-         const zU = (0, MU.b)(this.WN).removeEffect(this.toReplicatedStateEId(UU), XU);
-         tU.k.UY("RemoveEffect", {
-           iX: UU,
+         const LH = (0, RH.b)(this.bG).removeEffect(this.toReplicatedStateEId(HH), BH);
+         WH.k.AX("RemoveEffect", {
+           fH: HH,
```

#### 1895. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14572` → after: `L14595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14595) · [Before (L14572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14572)

```diff
-       const zU = null !== (XU = null === UU || void 0 === UU ? void 0 : UU.variants) && void 0 !== XU ? XU : [],
+       const LH = null !== (BH = null === HH || void 0 === HH ? void 0 : HH.variants) && void 0 !== BH ? BH : [],
```

#### 1896. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14584` → after: `L14607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14607) · [Before (L14584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14584)

```diff
-           (0, GA.e)(UU, XU)
+           (0, vh.h)(HH, BH)
```

#### 1897. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14592` → after: `L14615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14615) · [Before (L14592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14592)

```diff
-     Qa.hasPlayedFirstGame = !1, Qa.initialAssetLoadedProm = void 0, Qa.initialSetupProm = null, (0, dX.j)(gX.o)
+     AQ.hasPlayedFirstGame = !1, AQ.initialAssetLoadedProm = void 0, AQ.initialSetupProm = null, (0, bB.e)(MB.i)
```

#### 1898. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14594` → after: `L14617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14617) · [Before (L14594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14594)

```diff
-   39983: (UU, XU, zU) => {
+   40091: (HH, BH, LH) => {
```

#### 1899. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14599` → after: `L14622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14622) · [Before (L14599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14599)

```diff
-     var cU = zU(344);
+     var AH = LH(317);
```

#### 1900. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14618` → after: `L14641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14641) · [Before (L14618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14618)

```diff
-               color: cU.H.redUiText
+               color: AH.K.redUiText
```

#### 1901. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14624-L14625` → after: `L14647-L14648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14647-L14648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14647-L14648) · [Before (L14624-L14625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14624-L14625)

```diff
-     var QU = zU(4608),
-       AU = zU(1258);
+     var SH = LH(4617),
+       hH = LH(1182);
```

#### 1902. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14635` → after: `L14658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14658) · [Before (L14635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14635)

```diff
-         xY: 1,
+         aX: 1,
```

#### 1903. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14655` → after: `L14678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14678) · [Before (L14655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14655)

```diff
-         xY: 96,
+         aX: 96,
```

#### 1904. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14737` → after: `L14760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14760) · [Before (L14737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14737)

```diff
-           if (UU !== AU.B) return;
+           if (HH !== hH.y) return;
```

#### 1905. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14759-L14760` → after: `L14782-L14783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14782-L14783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14782-L14783) · [Before (L14759-L14760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14759-L14760)

```diff
-     var kU = zU(5374),
-       GU = zU(5364);
+     var xH = LH(5333),
+       vH = LH(5319);
```

#### 1906. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14781-L14782` → after: `L14804-L14805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14804-L14805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14804-L14805) · [Before (L14781-L14782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14781-L14782)

```diff
-           } = (0, GU.g)(QU);
-           FU && (cU = (0, kU.e)(FU, AU.blips))
+           } = (0, vH.d)(SH);
+           tH && (AH = (0, xH.f)(tH, hH.blips))
```

#### 1907. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14787` → after: `L14810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14810) · [Before (L14787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14787)

```diff
-     var ZU = zU(39988);
+     var TH = LH(40100);
```

#### 1908. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14801` → after: `L14824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14824) · [Before (L14801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14801)

```diff
-       const FU = ((null !== (cU = UU.getMetaInfo(zU).rot) && void 0 !== cU ? cU : 1) - 1) * Math.PI / 2,
+       const tH = ((null !== (AH = HH.getMetaInfo(LH).rot) && void 0 !== AH ? AH : 1) - 1) * Math.PI / 2,
```

#### 1909. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14871` → after: `L14894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14894) · [Before (L14871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14871)

```diff
-         let yU = this.smokes.find((UU => UU.pos[0] === XU[0] && UU.pos[1] === XU[1] && UU.pos[2] === XU[2] && UU.yF === zU));
+         let rH = this.smokes.find((HH => HH.pos[0] === BH[0] && HH.pos[1] === BH[1] && HH.pos[2] === BH[2] && HH.ph === LH));
```

#### 1910. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14874` → after: `L14897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14897) · [Before (L14874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14874)

```diff
-             yF: zU,
+             ph: LH,
```

#### 1911. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14880` → after: `L14903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14903) · [Before (L14880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14880)

```diff
-           const XU = this.smokes.reduce(((UU, XU) => XU.endMs < UU.endMs ? XU : UU));
+           const BH = this.smokes.reduce(((HH, BH) => BH.endMs < HH.endMs ? BH : HH));
```

#### 1912. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14892` → after: `L14915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14915) · [Before (L14892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14892)

```diff
-           const [cU, yU, QU] = XU.pos, AU = zU < XU.endMs && UU.getBlockId(cU, yU, QU) === XU.yF;
+           const [AH, rH, SH] = BH.pos, hH = LH < BH.endMs && HH.getBlockId(AH, rH, SH) === BH.ph;
```

#### 1913. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14923` → after: `L14946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14946) · [Before (L14923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14923)

```diff
-         for (const zU of null !== (XU = this.puffers) && void 0 !== XU ? XU : []) {
+         for (const LH of null !== (BH = this.puffers) && void 0 !== BH ? BH : []) {
```

#### 1914. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14936` → after: `L14959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14959) · [Before (L14936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14936)

```diff
-           return new ZU.f(XU, Math.ceil(4 * cU), CU)
+           return new TH.d(BH, Math.ceil(4 * AH), oH)
```

#### 1915. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14953` → after: `L14976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14976) · [Before (L14953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14953)

```diff
-           zU === AU.C && XU.start(UU, cU)
+           LH === hH.z && BH.start(HH, AH)
```

#### 1916. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14963-L14966` → after: `L14986-L14989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14986-L14989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14986-L14989) · [Before (L14963-L14966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14963-L14966)

```diff
-     var rU = zU(212),
-       uU = zU(39954),
-       fU = zU(39994),
-       iU = zU(39999);
+     var cH = LH(176),
+       eH = LH(40066),
+       qH = LH(40108),
+       gH = LH(40117);
```

#### 1917. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14969` → after: `L14992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14992) · [Before (L14969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14969)

```diff
-         this.api = UU, this.wearer = XU, this.name = zU, this.model = null, this.madeFrom = null, this.perchedWith = null, this.motion = new iU.c, this.shown = !1, this.raised = 0
+         this.api = HH, this.wearer = BH, this.name = LH, this.model = null, this.madeFrom = null, this.perchedWith = null, this.motion = new gH.b, this.shown = !1, this.raised = 0
```

#### 1918. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14973` → after: `L14996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L14996) · [Before (L14973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14973)

```diff
-         const zU = (0, uU.k)(this.name);
+         const LH = (0, eH.h)(this.name);
```

#### 1919. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14985-L14986` → after: `L15008-L15009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15008-L15009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15008-L15009) · [Before (L14985-L14986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14985-L14986)

```diff
-         this.model.setPose(cU.pos, cU.yaw + Math.PI), this.model.setClip(null !== (XU = cU.clip) && void 0 !== XU ? XU : null);
-         const yU = cU.seated ? zU : null;
+         this.model.setPose(AH.pos, AH.yaw + Math.PI), this.model.setClip(null !== (BH = AH.clip) && void 0 !== BH ? BH : null);
+         const rH = AH.seated ? LH : null;
```

#### 1920. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14988` → after: `L15011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15011) · [Before (L14988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L14988)

```diff
-           FX: this.wearer,
+           vB: this.wearer,
```

#### 1921. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15015` → after: `L15038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15038) · [Before (L15015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15015)

```diff
-         const XU = (0, uU.g)(this.name);
+         const BH = (0, eH.d)(this.name);
```

#### 1922. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15024` → after: `L15047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15047) · [Before (L15024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15024)

```diff
-             const UU = (0, fU.c)(XU);
+             const HH = (0, qH.b)(BH);
```

#### 1923. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15044` → after: `L15067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15067) · [Before (L15044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15044)

```diff
-       xU = 1 / rU.f.playerEyeToHeightRatio;
+       dH = 1 / cH.g.playerEyeToHeightRatio;
```

#### 1924. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15094-L15095` → after: `L15117-L15118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15117-L15118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15117-L15118) · [Before (L15094-L15095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15094-L15095)

```diff
-                 FU = void 0 !== (null === QU || void 0 === QU ? void 0 : QU.pet) && (0, uU.k)(QU.pet) ? QU.pet : null,
-                 oU = void 0 !== (null === QU || void 0 === QU ? void 0 : QU.aura) && (0, uU.g)(QU.aura) ? QU.aura : null;
+                 tH = void 0 !== (null === SH || void 0 === SH ? void 0 : SH.pet) && (0, eH.h)(SH.pet) ? SH.pet : null,
+                 zH = void 0 !== (null === SH || void 0 === SH ? void 0 : SH.aura) && (0, eH.d)(SH.aura) ? SH.aura : null;
```

#### 1925. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15103-L15104` → after: `L15126-L15127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15126-L15127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15126-L15127) · [Before (L15103-L15104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15103-L15104)

```diff
-                 petDist: null === FU ? 1 / 0 : DU - (null !== EU && void 0 !== EU && EU.pet ? sU : 0),
-                 auraDist: null === oU ? 1 / 0 : DU - (null !== EU && void 0 !== EU && EU.aura ? sU : 0)
+                 petDist: null === tH ? 1 / 0 : CH - (null !== EH && void 0 !== EH && EH.pet ? FH : 0),
+                 auraDist: null === zH ? 1 / 0 : CH - (null !== EH && void 0 !== EH && EH.aura ? FH : 0)
```

#### 1926. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15117` → after: `L15140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15140) · [Before (L15117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15117)

```diff
-               const zU = null !== (DU = XU.get(yU)) && void 0 !== DU ? DU : {
+               const LH = null !== (CH = BH.get(rH)) && void 0 !== CH ? CH : {
```

#### 1927. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15122-L15123` → after: `L15145-L15146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15145-L15146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15145-L15146) · [Before (L15122-L15123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15122-L15123)

```diff
-                 cU = QU.has(yU) ? AU : null,
-                 tU = FU.has(yU) ? aU : null;
+                 AH = SH.has(rH) ? hH : null,
+                 WH = tH.has(rH) ? QH : null;
```

#### 1928. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15137` → after: `L15160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15160) · [Before (L15137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15137)

```diff
-     var KU = zU(9291);
+     var JH = LH(9426);
```

#### 1929. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15140` → after: `L15163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15163) · [Before (L15140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15140)

```diff
-     var hU = zU(1709);
+     var yH = LH(1689);
```

#### 1930. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15156` → after: `L15179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15179) · [Before (L15156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15156)

```diff
-         xY: 24,
+         aX: 24,
```

#### 1931. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15180` → after: `L15203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15203) · [Before (L15180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15180)

```diff
-         xY: 24,
+         aX: 24,
```

#### 1932. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15231` → after: `L15254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15254) · [Before (L15231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15231)

```diff
-           AU.seen = !0, oU[0] = FU[0], oU[1] = FU[1], oU[2] = FU[2], DU && (AU.lastMovingAt = XU), null !== AU.particles && (!EU || XU - AU.lastMovingAt > 500) && (AU.particles.stop(), AU.particles = null, cU--), DU && EU && null === AU.particles && cU < 32 && (AU.particles = UU. … [truncated]
+           hH.seen = !0, zH[0] = tH[0], zH[1] = tH[1], zH[2] = tH[2], CH && (hH.lastMovingAt = BH), null !== hH.particles && (!EH || BH - hH.lastMovingAt > 500) && (hH.particles.stop(), hH.particles = null, AH--), CH && EH && null === hH.particles && AH < 32 && (hH.particles = HH. … [truncated]
```

#### 1933. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15254` → after: `L15277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15277) · [Before (L15254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15254)

```diff
-           if (zU === bU) XU.PY(UU, cU);
+           if (LH === iH) BH.kX(HH, AH);
```

#### 1934. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15257` → after: `L15280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15280) · [Before (L15257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15257)

```diff
-               XU = `${UU.id}|${UU.value}`;
+               BH = `${HH.id}|${HH.value}`;
```

#### 1935. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15264-L15265` → after: `L15287-L15288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15287-L15288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15287-L15288) · [Before (L15264-L15265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15264-L15265)

```diff
-         LY() {
-           XU.LY(UU)
+         IX() {
+           BH.IX(HH)
```

#### 1936. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15280` → after: `L15303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15303) · [Before (L15280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15280)

```diff
-         localBlockBroken: (0, KU.b)(),
+         localBlockBroken: (0, JH.d)(),
```

#### 1937. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15286` → after: `L15309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15309) · [Before (L15286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15286)

```diff
-       for (const yU of [UU, ...null !== XU && void 0 !== XU ? XU : []]) try {
+       for (const rH of [HH, ...null !== BH && void 0 !== BH ? BH : []]) try {
```

#### 1938. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15294` → after: `L15317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15317) · [Before (L15294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15294)

```diff
-   40137: (UU, XU, zU) => {
+   40245: (HH, BH, LH) => {
```

#### 1939. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15298` → after: `L15321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15321) · [Before (L15298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15298)

```diff
-     var cU = zU(38782);
+     var AH = LH(38905);
```

#### 1940. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15303` → after: `L15326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15326) · [Before (L15303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15303)

```diff
-           placeAgainstBeds: (0, cU.d)()
+           placeAgainstBeds: (0, AH.e)()
```

#### 1941. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15318` → after: `L15341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15341) · [Before (L15318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15318)

```diff
-   40143: (UU, XU, zU) => {
+   40253: (HH, BH, LH) => {
```

#### 1942. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15334` → after: `L15357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15357) · [Before (L15334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15334)

```diff
-   40147: (UU, XU, zU) => {
+   40259: (HH, BH, LH) => {
```

#### 1943. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15341` → after: `L15364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15364) · [Before (L15341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15341)

```diff
-     var AU = zU(39285);
+     var hH = LH(39383);
```

#### 1944. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15350` → after: `L15373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15373) · [Before (L15350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15350)

```diff
-         if (UU.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${UU.id} with < 2 waypoints`);
+         if (HH.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${HH.id} with < 2 waypoints`);
```

#### 1945. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15352` → after: `L15375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15375) · [Before (L15352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15352)

```diff
-         if (!XU) return void(this.unshown.has(UU.itemName) || (this.unshown.add(UU.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${UU.itemName}"`)));
+         if (!BH) return void(this.unshown.has(HH.itemName) || (this.unshown.add(HH.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${HH.itemName}"`)));
```

#### 1946. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15422` → after: `L15445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15445) · [Before (L15422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15422)

```diff
-         null === (UU = this.pipeVisualizer) || void 0 === UU || UU.aG()
+         null === (HH = this.pipeVisualizer) || void 0 === HH || HH.Dv()
```

#### 1947. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15427` → after: `L15450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15450) · [Before (L15427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15427)

```diff
-         const oU = null === (FU = this.api.HzU(UU)) || void 0 === FU ? void 0 : FU.name;
+         const zH = null === (tH = this.api.yLH(HH)) || void 0 === tH ? void 0 : tH.name;
```

#### 1948. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15431` → after: `L15454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15454) · [Before (L15431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15431)

```diff
-     var YU = zU(40151);
+     var XH = LH(40261);
```

#### 1949. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15448-L15449` → after: `L15471-L15472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15471-L15472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15471-L15472) · [Before (L15448-L15449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15448-L15449)

```diff
-         LY: () => {
-           cU.aG()
+         IX: () => {
+           AH.Dv()
```

#### 1950. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15456` → after: `L15479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15479) · [Before (L15456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15456)

```diff
-   40151: (UU, XU, zU) => {
+   40261: (HH, BH, LH) => {
```

#### 1951. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15461` → after: `L15484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15484) · [Before (L15461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15461)

```diff
-     var yU = zU(1709);
+     var rH = LH(1689);
```

#### 1952. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15474` → after: `L15497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15497) · [Before (L15474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15474)

```diff
-   40155: (UU, XU, zU) => {
+   40263: (HH, BH, LH) => {
```

#### 1953. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15490` → after: `L15513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15513) · [Before (L15490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15490)

```diff
-   40158: (UU, XU, zU) => {
+   40265: (HH, BH, LH) => {
```

#### 1954. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15494-L15499` → after: `L15517-L15522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15517-L15522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15517-L15522) · [Before (L15494-L15499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15494-L15499)

```diff
-     var cU = zU(61);
-     var yU = zU(27),
-       QU = zU(1989),
-       AU = zU(31),
-       FU = zU(37325),
-       oU = zU(1106),
+     var AH = LH(45);
+     var rH = LH(15),
+       SH = LH(1981),
+       hH = LH(18),
+       tH = LH(37474),
+       zH = LH(1038),
```

#### 1955. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15501-L15511` → after: `L15524-L15534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15524-L15534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15524-L15534) · [Before (L15501-L15511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15501-L15511)

```diff
-       EU = zU(1492),
-       YU = zU(1193),
-       NU = zU(4968),
-       IU = zU(1408),
-       pU = zU(1494),
-       aU = zU(1993),
-       tU = zU(1420),
-       gU = zU(1978),
-       kU = zU(2047),
-       GU = zU(220);
-     const BU = zU(40162),
+       EH = LH(1450),
+       XH = LH(1123),
+       GH = LH(4941),
+       YH = LH(1344),
+       uH = LH(1455),
+       QH = LH(1986),
+       WH = LH(1365),
+       MH = LH(1967),
+       xH = LH(2051),
+       vH = LH(186);
+     const PH = LH(40267),
```

#### 1956. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15516-L15518` → after: `L15539-L15541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15539-L15541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15539-L15541) · [Before (L15516-L15518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15516-L15518)

```diff
-       const zU = XU ? UU : `${UU}-uncaught`,
-         cU = (0, GU.b)(ZU, zU);
-       return void 0 !== cU || RU.has(zU) || (RU.add(zU), console.warn(`Containment Breach has no mugshot ${zU}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), cU
+       const LH = BH ? HH : `${HH}-uncaught`,
+         AH = (0, vH.d)(TH, LH);
+       return void 0 !== AH || UH.has(LH) || (UH.add(LH), console.warn(`Containment Breach has no mugshot ${LH}: run tools/harnessCutouts/ContainmentMugshotCapture.ts`)), AH
```

#### 1957. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15520` → after: `L15543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15543) · [Before (L15520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15520)

```diff
-     var WU = zU(1305);
+     var OH = LH(1225);
```

#### 1958. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15536-L15537` → after: `L15559-L15560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15559-L15560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15559-L15560) · [Before (L15536-L15537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15536-L15537)

```diff
-       const YU = `${yU}Title`;
-       return (0, WU.jsx)(NU.c, {
+       const XH = `${rH}Title`;
+       return (0, OH.jsx)(GH.b, {
```

#### 1959. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15557` → after: `L15580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15580) · [Before (L15557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15557)

```diff
-             }), AU, (0, WU.jsx)(pU.k, {
+             }), hH, (0, OH.jsx)(uH.q, {
```

#### 1960. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15577` → after: `L15600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15600) · [Before (L15577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15577)

```diff
-       return (0, WU.jsx)(aU.c, {
+       return (0, OH.jsx)(QH.e, {
```

#### 1961. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15589` → after: `L15612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15612) · [Before (L15589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15589)

```diff
-       return (0, IU.b)(yU, !zU), (0, WU.jsx)("span", {
+       return (0, YH.d)(rH, !LH), (0, OH.jsx)("span", {
```

#### 1962. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15606` → after: `L15629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15629) · [Before (L15606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15606)

```diff
-         uD: cU,
+         LX: AH,
```

#### 1963. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15609` → after: `L15632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15632) · [Before (L15609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15609)

```diff
-       return (0, WU.jsx)(tU.d, {
+       return (0, OH.jsx)(WH.g, {
```

#### 1964. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15617` → after: `L15640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15640) · [Before (L15617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15617)

```diff
-           uD: cU
+           LX: AH
```

#### 1965. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15639` → after: `L15662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15662) · [Before (L15639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15639)

```diff
-         uD: yU
+         LX: rH
```

#### 1966. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15643` → after: `L15666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15666) · [Before (L15643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15643)

```diff
-       } = (0, YU.I)(), AU = (0, kU.e)("itemInfo", (UU => UU[zU])), {
+       } = (0, XH.B)(), hH = (0, xH.c)("itemInfo", (HH => HH[LH])), {
```

#### 1967. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15669-L15670` → after: `L15692-L15693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15692-L15693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15692-L15693) · [Before (L15669-L15670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15669-L15670)

```diff
-           }), (0, WU.jsx)(gU.d, {
-             text: null !== (XU = null === AU || void 0 === AU ? void 0 : AU.displayName) && void 0 !== XU ? XU : zU,
+           }), (0, OH.jsx)(MH.b, {
+             text: null !== (BH = null === hH || void 0 === hH ? void 0 : hH.displayName) && void 0 !== BH ? BH : LH,
```

#### 1968. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15675` → after: `L15698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15698) · [Before (L15675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15675)

```diff
-           children: [void 0 !== FU && (0, WU.jsx)(gU.d, {
+           children: [void 0 !== tH && (0, OH.jsx)(MH.b, {
```

#### 1969. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15682` → after: `L15705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15705) · [Before (L15682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15682)

```diff
-               children: QU(`${dU}:chipDroppedBy`)
+               children: SH(`${bH}:chipDroppedBy`)
```

#### 1970. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15691` → after: `L15714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15714) · [Before (L15691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15691)

```diff
-             children: QU(`${dU}:chipYouHave`)
+             children: SH(`${bH}:chipYouHave`)
```

#### 1971. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15697` → after: `L15720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15720) · [Before (L15697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15697)

```diff
-             }), ` / ${cU.toLocaleString()}`]
+             }), ` / ${AH.toLocaleString()}`]
```

#### 1972. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15775` → after: `L15798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15798) · [Before (L15775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15775)

```diff
-     var iU = zU(39324);
+     var gH = LH(39421);
```

#### 1973. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15795-L15797` → after: `L15818-L15820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15818-L15820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15818-L15820) · [Before (L15795-L15797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15795-L15797)

```diff
-         codexAnyDifficulty: `${dU}:codexNeedsAny`,
-         codexNormalOnly: `${dU}:codexNeedsNormal`,
-         codexHardOnly: `${dU}:codexNeedsHard`
+         codexAnyDifficulty: `${bH}:codexNeedsAny`,
+         codexNormalOnly: `${bH}:codexNeedsNormal`,
+         codexHardOnly: `${bH}:codexNeedsHard`
```

#### 1974. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15805-L15807` → after: `L15828-L15830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15828-L15830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15828-L15830) · [Before (L15805-L15807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15805-L15807)

```diff
-         codexContained: `${dU}:codexContainedBadge`,
-         codexEncountered: `${dU}:codexEncounteredBadge`,
-         codexUnidentified: `${dU}:codexUnidentifiedBadge`
+         codexContained: `${bH}:codexContainedBadge`,
+         codexEncountered: `${bH}:codexEncounteredBadge`,
+         codexUnidentified: `${bH}:codexUnidentifiedBadge`
```

#### 1975. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15817` → after: `L15840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15840) · [Before (L15817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15817)

```diff
-       } = (0, YU.I)();
+       } = (0, XH.B)();
```

#### 1976. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15827-L15828` → after: `L15850-L15851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15850-L15851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15850-L15851) · [Before (L15827-L15828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15827-L15828)

```diff
-       } = (0, YU.I)();
-       return "codexUnidentified" === UU.codexEntryState ? XU(`${dU}:codexUnidentifiedName`) : UU.codexEntryName
+       } = (0, XH.B)();
+       return "codexUnidentified" === HH.codexEntryState ? BH(`${bH}:codexUnidentifiedName`) : HH.codexEntryName
```

#### 1977. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15909` → after: `L15932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15932) · [Before (L15909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15909)

```diff
-       } = (0, YU.I)();
+       } = (0, XH.B)();
```

#### 1978. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15912` → after: `L15935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15935) · [Before (L15912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15912)

```diff
-         children: [cU(`${dU}:codexProgress`, {
+         children: [AH(`${bH}:codexProgress`, {
```

#### 1979. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15933` → after: `L15956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15956) · [Before (L15933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15933)

```diff
-       } = (0, YU.I)(), yU = "codexContained" === XU.codexEntryState;
+       } = (0, XH.B)(), rH = "codexContained" === BH.codexEntryState;
```

#### 1980. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15940` → after: `L15963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15963) · [Before (L15940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15940)

```diff
-             children: cU(`${dU}:codexFileNumber`, {
+             children: AH(`${bH}:codexFileNumber`, {
```

#### 1981. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15957` → after: `L15980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15980) · [Before (L15957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15957)

```diff
-               children: [cU(`${dU}:codexContainments`, {
+               children: [AH(`${bH}:codexContainments`, {
```

#### 1982. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15965` → after: `L15988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L15988) · [Before (L15965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15965)

```diff
-               children: cU(`${dU}:codexContainedBadge`)
+               children: AH(`${bH}:codexContainedBadge`)
```

#### 1983. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15977` → after: `L16000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16000) · [Before (L15977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15977)

```diff
-                 children: cU(`${dU}:codexRedacted`)
+                 children: AH(`${bH}:codexRedacted`)
```

#### 1984. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15982` → after: `L16005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16005) · [Before (L15982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15982)

```diff
-                 children: cU(`${dU}:codexHintLabel`)
+                 children: AH(`${bH}:codexHintLabel`)
```

#### 1985. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15999` → after: `L16022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16022) · [Before (L15999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L15999)

```diff
-       const zU = (0, EU.j)(HU, XU.getSnapshot()),
+       const LH = (0, EH.e)(NH, BH.getSnapshot()),
```

#### 1986. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16002` → after: `L16025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16025) · [Before (L16002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16002)

```diff
-         } = (0, YU.I)();
+         } = (0, XH.B)();
```

#### 1987. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16010` → after: `L16033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16033) · [Before (L16010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16010)

```diff
-         title: cU(`${dU}:codexTitle`),
+         title: AH(`${bH}:codexTitle`),
```

#### 1988. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16029` → after: `L16052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16052) · [Before (L16029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16029)

```diff
-     var hU = zU(344);
+     var yH = LH(317);
```

#### 1989. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16035` → after: `L16058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16058) · [Before (L16035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16035)

```diff
-           if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${UU} ${XU}`, this.rollBack)) return;
+           if (!this.open || null === this.board || !this.pacer.send(`${this.command} ${HH} ${BH}`, this.rollBack)) return;
```

#### 1990. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16154` → after: `L16177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16177) · [Before (L16154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16154)

```diff
-         loadoutSlotOptions: XU.loadoutSlotOptions.map((UU => null !== cU && UU.loadoutOptionId === cU.loadoutOptionId ? cU : UU))
+         loadoutSlotOptions: BH.loadoutSlotOptions.map((HH => null !== AH && HH.loadoutOptionId === AH.loadoutOptionId ? AH : HH))
```

#### 1991. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16158` → after: `L16181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16181) · [Before (L16158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16158)

```diff
-         loadoutSlots: UU.loadoutSlots.map((UU => UU === XU ? yU : UU))
+         loadoutSlots: HH.loadoutSlots.map((HH => HH === BH ? rH : HH))
```

#### 1992. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16165` → after: `L16188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16188) · [Before (L16165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16165)

```diff
-         loadoutPerks: UU.loadoutPerks.map((UU => UU.loadoutPerkId === XU.loadoutPerkId ? XU : UU))
+         loadoutPerks: HH.loadoutPerks.map((HH => HH.loadoutPerkId === BH.loadoutPerkId ? BH : HH))
```

#### 1993. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16223` → after: `L16246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16246) · [Before (L16223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16223)

```diff
-         return (null !== (zU = XU.find((UU => UU.loadoutPerkEquipped))) && void 0 !== zU ? zU : XU[0]).loadoutPerkId
+         return (null !== (LH = BH.find((HH => HH.loadoutPerkEquipped))) && void 0 !== LH ? LH : BH[0]).loadoutPerkId
```

#### 1994. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16228-L16229` → after: `L16251-L16252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16251-L16252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16251-L16252) · [Before (L16228-L16229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16228-L16229)

```diff
-     var tX = zU(37604),
-       gX = zU(1294);
+     var WB = LH(37747),
+       MB = LH(1214);
```

#### 1995. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16231-L16236` → after: `L16254-L16259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16254-L16259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16254-L16259) · [Before (L16231-L16236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16231-L16236)

```diff
-         loadoutPrimary: `${dU}:loadoutSlotPrimary`,
-         loadoutSecondary: `${dU}:loadoutSlotSecondary`,
-         loadoutOffensive: `${dU}:loadoutSlotOffensive`,
-         loadoutSelfHelp: `${dU}:loadoutSlotSelfHelp`,
-         loadoutArmour: `${dU}:loadoutSlotArmour`,
-         loadoutPerks: `${dU}:loadoutSlotPerks`
+         loadoutPrimary: `${bH}:loadoutSlotPrimary`,
+         loadoutSecondary: `${bH}:loadoutSlotSecondary`,
+         loadoutOffensive: `${bH}:loadoutSlotOffensive`,
+         loadoutSelfHelp: `${bH}:loadoutSlotSelfHelp`,
+         loadoutArmour: `${bH}:loadoutSlotArmour`,
+         loadoutPerks: `${bH}:loadoutSlotPerks`
```

#### 1996. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16240` → after: `L16263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16263) · [Before (L16240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16240)

```diff
-         DI: "bottom",
+         XY: "bottom",
```

#### 1997. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16253` → after: `L16276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16276) · [Before (L16253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16253)

```diff
-       return (zU, cU) => (null === UU || void 0 === UU ? void 0 : UU.kind) === zU && UU.id === cU ? XU : void 0
+       return (LH, AH) => (null === HH || void 0 === HH ? void 0 : HH.kind) === LH && HH.id === AH ? BH : void 0
```

#### 1998. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16276` → after: `L16299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16299) · [Before (L16276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16276)

```diff
-       const [yU, QU] = UU(`${dU}:${XU}`, {
+       const [rH, SH] = HH(`${bH}:${BH}`, {
```

#### 1999. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16295` → after: `L16318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16318) · [Before (L16295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16295)

```diff
-       } = (0, YU.I)(), AU = XU.loadout, FU = XU.open ? AU.loadoutWalkthrough.map((UU => ({
+       } = (0, XH.B)(), hH = BH.loadout, tH = BH.open ? hH.loadoutWalkthrough.map((HH => ({
```

#### 2000. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16315` → after: `L16338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16338) · [Before (L16315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16315)

```diff
-           kind: "DI",
+           kind: "XY",
```

#### 2001. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16323` → after: `L16346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16346) · [Before (L16323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16323)

```diff
-           return `${UU.kind}:${UU.id}`
+           return `${HH.kind}:${HH.id}`
```

#### 2002. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16356-L16357` → after: `L16379-L16380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16379-L16380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16379-L16380) · [Before (L16356-L16357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16356-L16357)

```diff
-       } = (0, YU.I)(), FU = (0, cU.useRef)(XU);
-       return FU.current = XU, (0, gX.t)("popup", FU, yU), (0, WU.jsxs)(tX.d, {
+       } = (0, XH.B)(), tH = (0, AH.useRef)(BH);
+       return tH.current = BH, (0, MB.r)("popup", tH, rH), (0, OH.jsxs)(WB.g, {
```

#### 2003. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16371-L16372` → after: `L16394-L16395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16394-L16395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16394-L16395) · [Before (L16371-L16372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16371-L16372)

```diff
-             children: AU(`${dU}:operatorName`)
-           }), (0, WU.jsx)(pU.k, {
+             children: hH(`${bH}:operatorName`)
+           }), (0, OH.jsx)(uH.q, {
```

#### 2004. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16374` → after: `L16397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16397) · [Before (L16374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16374)

```diff
-             ariaLabel: AU(`${dU}:loadoutWalkthroughClose`),
+             ariaLabel: hH(`${bH}:loadoutWalkthroughClose`),
```

#### 2005. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16392` → after: `L16415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16415) · [Before (L16392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16392)

```diff
-       } = (0, YU.I)();
+       } = (0, XH.B)();
```

#### 2006. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16395` → after: `L16418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16418) · [Before (L16395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16395)

```diff
-         children: cU(`${dU}:loadoutFree`)
+         children: AH(`${bH}:loadoutFree`)
```

#### 2007. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16401` → after: `L16424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16424) · [Before (L16401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16401)

```diff
-           uD: zU.loadoutCoins
+           LX: LH.loadoutCoins
```

#### 2008. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16407` → after: `L16430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16430) · [Before (L16407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16407)

```diff
-             uD: XU.loadoutHeldPartAmount
+             LX: BH.loadoutHeldPartAmount
```

#### 2009. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16413-L16415` → after: `L16436-L16438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16436-L16438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16436-L16438) · [Before (L16413-L16415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16413-L16415)

```diff
-       loadoutStatFireRate: `${dU}:loadoutUnitPerMinute`,
-       loadoutStatReload: `${dU}:loadoutUnitSeconds`,
-       loadoutStatResupply: `${dU}:loadoutUnitSeconds`
+       loadoutStatFireRate: `${bH}:loadoutUnitPerMinute`,
+       loadoutStatReload: `${bH}:loadoutUnitSeconds`,
+       loadoutStatResupply: `${bH}:loadoutUnitSeconds`
```

#### 2010. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16419` → after: `L16442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16442) · [Before (L16419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16419)

```diff
-       return "loadoutStatPotency" === UU.loadoutStatKind ? (0, hU.Q)(UU.loadoutStatValue) : String(UU.loadoutStatValue)
+       return "loadoutStatPotency" === HH.loadoutStatKind ? (0, yH.T)(HH.loadoutStatValue) : String(HH.loadoutStatValue)
```

#### 2011. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16429` → after: `L16452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16452) · [Before (L16429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16429)

```diff
-       } = (0, YU.I)(), yU = zU.loadoutOptionTiers, QU = null === (XU = yU[0]) || void 0 === XU ? void 0 : XU.loadoutTierStats.map((UU => UU.loadoutStatKind));
+       } = (0, XH.B)(), rH = LH.loadoutOptionTiers, SH = null === (BH = rH[0]) || void 0 === BH ? void 0 : BH.loadoutTierStats.map((HH => HH.loadoutStatKind));
```

#### 2012. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16445-L16446` → after: `L16468-L16469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16468-L16469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16468-L16469) · [Before (L16445-L16446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16445-L16446)

```diff
-               children: cU(`${dU}:loadoutTier`, {
-                 tier: (0, hU.Q)(XU + 1)
+               children: AH(`${bH}:loadoutTier`, {
+                 tier: (0, yH.T)(BH + 1)
```

#### 2013. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16456` → after: `L16479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16479) · [Before (L16456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16456)

```diff
-                 children: [cU(`${dU}:${UU}`), XU && (0, WU.jsx)("span", {
+                 children: [AH(`${bH}:${HH}`), BH && (0, OH.jsx)("span", {
```

#### 2014. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16495` → after: `L16518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16518) · [Before (L16495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16495)

```diff
-       } = (0, YU.I)(), AU = XU.loadout, FU = yU.loadoutOptionOwnedTier, oU = yU.loadoutOptionTiers.length, DU = cU.loadoutSlotEquippedId === yU.loadoutOptionId, EU = FU < oU ? yU.loadoutOptionTiers[FU].loadoutTierCost : null, NU = null !== EU && XX(AU, EU), IU = yU.loadoutOptionI … [truncated]
+       } = (0, XH.B)(), hH = BH.loadout, tH = rH.loadoutOptionOwnedTier, zH = rH.loadoutOptionTiers.length, CH = AH.loadoutSlotEquippedId === rH.loadoutOptionId, EH = tH < zH ? rH.loadoutOptionTiers[tH].loadoutTierCost : null, GH = null !== EH && BB(hH, EH), YH = rH.loadoutOptionI … [truncated]
```

#### 2015. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16500-L16501` → after: `L16523-L16524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16523-L16524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16523-L16524) · [Before (L16500-L16501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16500-L16501)

```diff
-           status: 0 === FU ? QU(`${dU}:loadoutLocked`) : oU > 1 ? QU(`${dU}:loadoutTier`, {
-             tier: (0, hU.Q)(FU)
+           status: 0 === tH ? SH(`${bH}:loadoutLocked`) : zH > 1 ? SH(`${bH}:loadoutTier`, {
+             tier: (0, yH.T)(tH)
```

#### 2016. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16518` → after: `L16541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16541) · [Before (L16518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16518)

```diff
-             }), (0, WU.jsx)(pU.l, {
+             }), (0, OH.jsx)(uH.u, {
```

#### 2017. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16523-L16524` → after: `L16546-L16547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16546-L16547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16546-L16547) · [Before (L16523-L16524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16523-L16524)

```diff
-               children: 0 === FU ? QU(`${dU}:loadoutUnlock`) : QU(`${dU}:loadoutUpgrade`, {
-                 tier: (0, hU.Q)(FU + 1)
+               children: 0 === tH ? SH(`${bH}:loadoutUnlock`) : SH(`${bH}:loadoutUpgrade`, {
+                 tier: (0, yH.T)(tH + 1)
```

#### 2018. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16529-L16530` → after: `L16552-L16553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16552-L16553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16552-L16553) · [Before (L16529-L16530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16529-L16530)

```diff
-             children: QU(`${dU}:loadoutMaxed`)
-           }), FU > 0 && !DU && (0, WU.jsx)(pU.f, {
+             children: SH(`${bH}:loadoutMaxed`)
+           }), tH > 0 && !CH && (0, OH.jsx)(uH.i, {
```

#### 2019. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16535` → after: `L16558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16558) · [Before (L16535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16535)

```diff
-             children: QU(`${dU}:loadoutEquip`)
+             children: SH(`${bH}:loadoutEquip`)
```

#### 2020. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16549` → after: `L16572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16572) · [Before (L16549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16549)

```diff
-       } = (0, YU.I)(), QU = XU.loadout, AU = yX(QU), FU = cU.loadoutPerkId, oU = ZX();
+       } = (0, XH.B)(), SH = BH.loadout, hH = rB(SH), tH = AH.loadoutPerkId, zH = TB();
```

#### 2021. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16554` → after: `L16577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16577) · [Before (L16554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16554)

```diff
-           status: cU.loadoutPerkOwned ? null : yU(`${dU}:loadoutLocked`),
+           status: AH.loadoutPerkOwned ? null : rH(`${bH}:loadoutLocked`),
```

#### 2022. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16568` → after: `L16591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16591) · [Before (L16568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16568)

```diff
-             }), (0, WU.jsx)(pU.l, {
+             }), (0, OH.jsx)(uH.u, {
```

#### 2023. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16573` → after: `L16596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16596) · [Before (L16573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16573)

```diff
-               children: yU(`${dU}:loadoutUnlock`)
+               children: rH(`${bH}:loadoutUnlock`)
```

#### 2024. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16575` → after: `L16598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16598) · [Before (L16575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16575)

```diff
-           }), cU.loadoutPerkOwned && !cU.loadoutPerkEquipped && (0, WU.jsx)(pU.f, {
+           }), AH.loadoutPerkOwned && !AH.loadoutPerkEquipped && (0, OH.jsx)(uH.i, {
```

#### 2025. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16580` → after: `L16603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16603) · [Before (L16580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16580)

```diff
-             children: yU(`${dU}:loadoutEquip`)
+             children: rH(`${bH}:loadoutEquip`)
```

#### 2026. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16583-L16584` → after: `L16606-L16607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16606-L16607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16606-L16607) · [Before (L16583-L16584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16583-L16584)

```diff
-             children: yU(`${dU}:loadoutSocketsFullHint`)
-           }), cU.loadoutPerkEquipped && (0, WU.jsx)(pU.O, {
+             children: rH(`${bH}:loadoutSocketsFullHint`)
+           }), AH.loadoutPerkEquipped && (0, OH.jsx)(uH.W, {
```

#### 2027. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16589` → after: `L16612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16612) · [Before (L16589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16589)

```diff
-             children: yU(`${dU}:loadoutUnequip`)
+             children: rH(`${bH}:loadoutUnequip`)
```

#### 2028. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16605` → after: `L16628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16628) · [Before (L16605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16605)

```diff
-       } = (0, YU.I)();
+       } = (0, XH.B)();
```

#### 2029. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16618` → after: `L16641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16641) · [Before (L16618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16618)

```diff
-           children: AU(`${dU}:loadoutEquippedBadge`)
+           children: hH(`${bH}:loadoutEquippedBadge`)
```

#### 2030. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16677` → after: `L16700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16700) · [Before (L16677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16677)

```diff
-       } = (0, YU.I)(), yU = XU.loadout, QU = ZX();
+       } = (0, XH.B)(), rH = BH.loadout, SH = TB();
```

#### 2031. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16680` → after: `L16703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16703) · [Before (L16680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16680)

```diff
-         "aria-label": cU(`${dU}:loadoutKit`),
+         "aria-label": AH(`${bH}:loadoutKit`),
```

#### 2032. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16728` → after: `L16751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16751) · [Before (L16728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16728)

```diff
-       } = (0, YU.I)(), yU = XU.loadout, QU = yU.loadoutPerks.filter((UU => UU.loadoutPerkEquipped)), AU = ZX();
+       } = (0, XH.B)(), rH = BH.loadout, SH = rH.loadoutPerks.filter((HH => HH.loadoutPerkEquipped)), hH = TB();
```

#### 2033. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16745` → after: `L16768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16768) · [Before (L16745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16745)

```diff
-             children: cU(`${dU}:loadoutPerkCount`, {
+             children: AH(`${bH}:loadoutPerkCount`, {
```

#### 2034. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16768` → after: `L16791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16791) · [Before (L16768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16768)

```diff
-                 children: zU ? zU.loadoutPerkName : cU(`${dU}:loadoutPerkSocketEmpty`)
+                 children: LH ? LH.loadoutPerkName : AH(`${bH}:loadoutPerkSocketEmpty`)
```

#### 2035. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16790` → after: `L16813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16813) · [Before (L16790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16790)

```diff
-       } = (0, YU.I)();
+       } = (0, XH.B)();
```

#### 2036. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16802` → after: `L16825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16825) · [Before (L16802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16802)

```diff
-           children: EU(`${dU}:loadoutEquippedBadge`)
+           children: EH(`${bH}:loadoutEquippedBadge`)
```

#### 2037. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16805` → after: `L16828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16828) · [Before (L16805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16805)

```diff
-           children: EU(`${dU}:loadoutLocked`)
+           children: EH(`${bH}:loadoutLocked`)
```

#### 2038. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16830` → after: `L16853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16853) · [Before (L16830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16830)

```diff
-           buttonRef: yU("DI", UU.loadoutPerkId),
+           buttonRef: rH("XY", HH.loadoutPerkId),
```

#### 2039. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16847` → after: `L16870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16870) · [Before (L16847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16847)

```diff
-           buttonRef: yU("DI", UU.loadoutOptionId),
+           buttonRef: rH("XY", HH.loadoutOptionId),
```

#### 2040. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16872` → after: `L16895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16895) · [Before (L16872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16872)

```diff
-       const zU = (0, EU.j)(NX, XU.getSnapshot()),
+       const LH = (0, EH.e)(GB, BH.getSnapshot()),
```

#### 2041. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16875` → after: `L16898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16898) · [Before (L16875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16875)

```diff
-         } = (0, YU.I)();
+         } = (0, XH.B)();
```

#### 2042. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16884` → after: `L16907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16907) · [Before (L16884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16884)

```diff
-           title: cU(`${dU}:loadoutTitle`),
+           title: AH(`${bH}:loadoutTitle`),
```

#### 2043. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16893-L16894` → after: `L16916-L16917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16916-L16917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16916-L16917) · [Before (L16893-L16894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16893-L16894)

```diff
-               children: cU(`${dU}:loadoutRadioBadge`)
-             }), null !== yU && cU(`${dU}:${yU.loadoutNoticeKey}`, {
+               children: AH(`${bH}:loadoutRadioBadge`)
+             }), null !== rH && AH(`${bH}:${rH.loadoutNoticeKey}`, {
```

#### 2044. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16896` → after: `L16919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16919) · [Before (L16896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16896)

```diff
-               tier: (0, hU.Q)(yU.loadoutNoticeTier),
+               tier: (0, yH.T)(rH.loadoutNoticeTier),
```

#### 2045. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16948` → after: `L16971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R16971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L16971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L16971) · [Before (L16948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16948)

```diff
-           return UU.locatorEntryArmed === zU ? UU : {
+           return HH.locatorEntryArmed === LH ? HH : {
```

#### 2046. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16977` → after: `L17000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17000) · [Before (L16977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16977)

```diff
-         return (null !== (XU = zU.find((UU => UU.locatorEntryArmed))) && void 0 !== XU ? XU : zU[0]).locatorEntryId
+         return (null !== (BH = LH.find((HH => HH.locatorEntryArmed))) && void 0 !== BH ? BH : LH[0]).locatorEntryId
```

#### 2047. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16990-L16992` → after: `L17013-L17015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17013-L17015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17013-L17015) · [Before (L16990-L16992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16990-L16992)

```diff
-         locatorContained: `${dU}:locatorFlavourContained`,
-         locatorEncountered: `${dU}:locatorFlavourEncountered`,
-         locatorUnseen: `${dU}:locatorFlavourUnseen`
+         locatorContained: `${bH}:locatorFlavourContained`,
+         locatorEncountered: `${bH}:locatorFlavourEncountered`,
+         locatorUnseen: `${bH}:locatorFlavourUnseen`
```

#### 2048. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L16996-L16997` → after: `L17019-L17020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17019-L17020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17019-L17020) · [Before (L16996-L16997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L16996-L16997)

```diff
-         codexNormalOnly: `${dU}:locatorAttunedNormal`,
-         codexHardOnly: `${dU}:locatorAttunedHard`
+         codexNormalOnly: `${bH}:locatorAttunedNormal`,
+         codexHardOnly: `${bH}:locatorAttunedHard`
```

#### 2049. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17021` → after: `L17044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17044) · [Before (L17021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17021)

```diff
-       } = (0, YU.I)();
+       } = (0, XH.B)();
```

#### 2050. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17024` → after: `L17047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17047) · [Before (L17024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17024)

```diff
-         children: zU(`${dU}:locatorArmedBadge`)
+         children: LH(`${bH}:locatorArmedBadge`)
```

#### 2051. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17027` → after: `L17050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17050) · [Before (L17027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17027)

```diff
-         children: zU(`${dU}:locatorOwnedBadge`)
+         children: LH(`${bH}:locatorOwnedBadge`)
```

#### 2052. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17040` → after: `L17063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17063) · [Before (L17040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17040)

```diff
-         uD: zU,
+         LX: LH,
```

#### 2053. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17053` → after: `L17076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17076) · [Before (L17053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17053)

```diff
-       } = (0, YU.I)(), QU = cU.locatorEntryId, AU = XU.locators.locatorEntries.find((UU => UU.locatorEntryArmed && UU !== cU));
+       } = (0, XH.B)(), SH = AH.locatorEntryId, hH = BH.locators.locatorEntries.find((HH => HH.locatorEntryArmed && HH !== AH));
```

#### 2054. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17056` → after: `L17079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17079) · [Before (L17056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17056)

```diff
-         children: [cU.locatorEntryArmed && (0, WU.jsx)(pU.O, {
+         children: [AH.locatorEntryArmed && (0, OH.jsx)(uH.W, {
```

#### 2055. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17061-L17062` → after: `L17084-L17085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17084-L17085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17084-L17085) · [Before (L17061-L17062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17061-L17062)

```diff
-           children: yU(`${dU}:locatorDisarm`)
-         }), cU.locatorEntryOwned && !cU.locatorEntryArmed && (0, WU.jsx)(pU.f, {
+           children: rH(`${bH}:locatorDisarm`)
+         }), AH.locatorEntryOwned && !AH.locatorEntryArmed && (0, OH.jsx)(uH.i, {
```

#### 2056. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17067` → after: `L17090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17090) · [Before (L17067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17067)

```diff
-           children: yU(`${dU}:locatorArm`)
+           children: rH(`${bH}:locatorArm`)
```

#### 2057. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17073` → after: `L17096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17096) · [Before (L17073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17073)

```diff
-           }), (0, WU.jsx)(pU.l, {
+           }), (0, OH.jsx)(uH.u, {
```

#### 2058. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17078` → after: `L17101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17101) · [Before (L17078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17078)

```diff
-             children: yU(`${dU}:locatorBuy`)
+             children: rH(`${bH}:locatorBuy`)
```

#### 2059. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17082` → after: `L17105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17105) · [Before (L17082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17082)

```diff
-           children: yU(`${dU}:locatorReplacesHint`, {
+           children: rH(`${bH}:locatorReplacesHint`, {
```

#### 2060. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17109` → after: `L17132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17132) · [Before (L17109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17109)

```diff
-       } = (0, YU.I)(), QU = KX[cU.locatorEntryDifficulty];
+       } = (0, XH.B)(), SH = JB[AH.locatorEntryDifficulty];
```

#### 2061. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17120` → after: `L17143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17143) · [Before (L17120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17120)

```diff
-             name: yU(`${dU}:locatorName`, {
+             name: rH(`${bH}:locatorName`, {
```

#### 2062. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17128` → after: `L17151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17151) · [Before (L17128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17128)

```diff
-             children: yU(cU.locatorEntryArmed ? `${dU}:locatorFlavourArmed` : jX[cU.locatorEntryStanding])
+             children: rH(AH.locatorEntryArmed ? `${bH}:locatorFlavourArmed` : sB[AH.locatorEntryStanding])
```

#### 2063. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17134` → after: `L17157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17157) · [Before (L17134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17134)

```diff
-             children: yU(`${dU}:locatorUsage`)
+             children: rH(`${bH}:locatorUsage`)
```

#### 2064. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17148` → after: `L17171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17171) · [Before (L17148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17148)

```diff
-       const zU = (0, EU.j)(xX, XU.getSnapshot()),
+       const LH = (0, EH.e)(dB, BH.getSnapshot()),
```

#### 2065. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17151` → after: `L17174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17174) · [Before (L17151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17151)

```diff
-         } = (0, YU.I)(),
+         } = (0, XH.B)(),
```

#### 2066. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17159` → after: `L17182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17182) · [Before (L17159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17159)

```diff
-         title: cU(`${dU}:locatorTitle`),
+         title: AH(`${bH}:locatorTitle`),
```

#### 2067. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17169-L17170` → after: `L17192-L17193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17192-L17193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17192-L17193) · [Before (L17169-L17170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17169-L17170)

```diff
-             children: cU(`${dU}:locatorKeeperName`)
-           }), null !== AU && cU(`${dU}:${AU.locatorNoticeKey}`, {
+             children: AH(`${bH}:locatorKeeperName`)
+           }), null !== hH && AH(`${bH}:${hH.locatorNoticeKey}`, {
```

#### 2068. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17221` → after: `L17244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17244) · [Before (L17221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17221)

```diff
-     var Qz = zU(39374);
+     var SL = LH(39461);
```

#### 2069. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17225` → after: `L17248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17248) · [Before (L17225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17225)

```diff
-         this.sendCommand = UU, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new Qz.d({
+         this.sendCommand = HH, this.budget = void 0, this.awaitingReply = !1, this.replyTimer = null, this.listeners = new Set, this.budget = new SL.c({
```

#### 2070. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17258` → after: `L17281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17281) · [Before (L17258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17258)

```diff
-     var Fz = zU(39353);
+     var tL = LH(39451);
```

#### 2071. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17277` → after: `L17300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17300) · [Before (L17277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17277)

```diff
-           (0, FU.r)()
+           (0, tH.t)()
```

#### 2072. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17280` → after: `L17303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17303) · [Before (L17280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17280)

```diff
-           UU && (0, FU.l)()
+           HH && (0, tH.j)()
```

#### 2073. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17286` → after: `L17309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17309) · [Before (L17286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17286)

```diff
-           AU.k.UY(NX, UU, !0)
+           hH.k.AX(GB, HH, !0)
```

#### 2074. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17289` → after: `L17312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17312) · [Before (L17289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17289)

```diff
-           AU.k.UY(HU, UU, !0)
+           hH.k.AX(NH, HH, !0)
```

#### 2075. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17292` → after: `L17315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17315) · [Before (L17292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17292)

```diff
-           AU.k.UY(xX, UU, !0)
+           hH.k.AX(dB, HH, !0)
```

#### 2076. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17297` → after: `L17320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17320) · [Before (L17297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17297)

```diff
-           UU = XU, zU = (0, FU.u)(null, {
+           HH = BH, LH = (0, tH.v)(null, {
```

#### 2077. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17306` → after: `L17329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17329) · [Before (L17306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17306)

```diff
-           }), oU = (0, QU.c)(Dz)
+           }), zH = (0, SH.f)(CL)
```

#### 2078. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17309` → after: `L17332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17332) · [Before (L17309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17309)

```diff
-           "containmentLoadout" === UU ? IU.PY(XU) : "containmentLoadoutClose" === UU ? IU.isOpen() && (IU.close(), (0, FU.j)()) : "containmentCodex" === UU ? pU.PY(XU) : "containmentLocator" === UU && aU.PY(XU)
+           "containmentLoadout" === HH ? YH.kX(BH) : "containmentLoadoutClose" === HH ? YH.isOpen() && (YH.close(), (0, tH.g)()) : "containmentCodex" === HH ? uH.kX(BH) : "containmentLocator" === HH && QH.kX(BH)
```

#### 2079. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17311-L17312` → after: `L17334-L17335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17334-L17335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17334-L17335) · [Before (L17311-L17312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17311-L17312)

```diff
-         LY: () => {
-           XU || yU.e.get("loadingOverlayVisible") || (XU = !0, UU.sendCommand("containmentEntered"))
+         IX: () => {
+           BH || rH.c.get("loadingOverlayVisible") || (BH = !0, HH.sendCommand("containmentEntered"))
```

#### 2080. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17323` → after: `L17346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17346) · [Before (L17323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17323)

```diff
-   40264: (UU, XU, zU) => {
+   40403: (HH, BH, LH) => {
```

#### 2081. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17343` → after: `L17366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17366) · [Before (L17343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17343)

```diff
-   40271: (UU, XU, zU) => {
+   40409: (HH, BH, LH) => {
```

#### 2082. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17359` → after: `L17382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17382) · [Before (L17359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17359)

```diff
-   40275: (UU, XU, zU) => {
+   40411: (HH, BH, LH) => {
```

#### 2083. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17364-L17369` → after: `L17387-L17392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17387-L17392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17387-L17392) · [Before (L17364-L17369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17364-L17369)

```diff
-     var yU = zU(61),
-       QU = zU(37325),
-       AU = zU(37756),
-       FU = zU(37345),
-       oU = zU(1800),
-       DU = zU(31);
+     var rH = LH(45),
+       SH = LH(37474),
+       hH = LH(37912),
+       tH = LH(37496),
+       zH = LH(1789),
+       CH = LH(18);
```

#### 2084. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17463` → after: `L17486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17486) · [Before (L17463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17463)

```diff
-         for (let AU = 0; AU < 4; AU++) zU.push((yU = AU * XU + .35, QU = (AU + 1) * XU - .35, pU(`M${YU+(cU=6+UU)*Math.cos(yU)} ${YU+cU*Math.sin(yU)} A${cU} ${cU} 0 0 1 ${YU+cU*Math.cos(QU)} ${YU+cU*Math.sin(QU)}`, 2)));
+         for (let hH = 0; hH < 4; hH++) LH.push((rH = hH * BH + .35, SH = (hH + 1) * BH - .35, uH(`M${XH+(AH=6+HH)*Math.cos(rH)} ${XH+AH*Math.sin(rH)} A${AH} ${AH} 0 0 1 ${XH+AH*Math.cos(SH)} ${XH+AH*Math.sin(SH)}`, 2)));
```

#### 2085. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17468` → after: `L17491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17491) · [Before (L17468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17468)

```diff
-       marksman: UU => [pU(`M${26-UU/2} ${39+UU/2} L32 33 L${38+UU/2} ${39+UU/2}`, 2), NU(14 - UU, YU, 24 - UU, YU, 1.5), NU(40 + UU, YU, 50 + UU, YU, 1.5), NU(14 - UU, 30, 14 - UU, 34, 1.5), NU(50 + UU, 30, 50 + UU, 34, 1.5)],
+       marksman: HH => [uH(`M${26-HH/2} ${39+HH/2} L32 33 L${38+HH/2} ${39+HH/2}`, 2), GH(14 - HH, XH, 24 - HH, XH, 1.5), GH(40 + HH, XH, 50 + HH, XH, 1.5), GH(14 - HH, 30, 14 - HH, 34, 1.5), GH(50 + HH, 30, 50 + HH, 34, 1.5)],
```

#### 2086. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17477` → after: `L17500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17500) · [Before (L17477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17477)

```diff
-           ]) zU.push(pU(`M${YU+cU*XU} ${YU+yU*(XU-5)} L${YU+cU*XU} ${YU+yU*XU} L${YU+cU*(XU-5)} ${YU+yU*XU}`, 2));
+           ]) LH.push(uH(`M${XH+AH*BH} ${XH+rH*(BH-5)} L${XH+AH*BH} ${XH+rH*BH} L${XH+AH*(BH-5)} ${XH+rH*BH}`, 2));
```

#### 2087. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17490-L17492` → after: `L17513-L17515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17513-L17515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17513-L17515) · [Before (L17490-L17492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17490-L17492)

```diff
-       } = UU, yU = `<${XU}`;
-       for (const [QU, AU] of Object.entries(zU)) yU += ` ${QU}="${AU}"`;
-       return void 0 === cU ? `${yU}/>` : `${yU}>${cU}</${XU}>`
+       } = HH, rH = `<${BH}`;
+       for (const [SH, hH] of Object.entries(LH)) rH += ` ${SH}="${hH}"`;
+       return void 0 === AH ? `${rH}/>` : `${rH}>${AH}</${BH}>`
```

#### 2088. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17517` → after: `L17540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17540) · [Before (L17517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17517)

```diff
-         } = this, QU = yU.isAlive(this.localPlayerId) && null !== (zU = null === (cU = yU.HzU(this.localPlayerId)) || void 0 === cU ? void 0 : cU.name) && void 0 !== zU ? zU : null, AU = (FU = QU) && EU[FU] || null;
+         } = this, SH = rH.isAlive(this.localPlayerId) && null !== (LH = null === (AH = rH.yLH(this.localPlayerId)) || void 0 === AH ? void 0 : AH.name) && void 0 !== LH ? LH : null, hH = (tH = SH) && EH[tH] || null;
```

#### 2089. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17527` → after: `L17550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17550) · [Before (L17527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17527)

```diff
-           IU = null !== oU && void 0 !== oU ? oU : 0;
+           YH = null !== zH && void 0 !== zH ? zH : 0;
```

#### 2090. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17539-L17540` → after: `L17562-L17563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17562-L17563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17562-L17563) · [Before (L17539-L17540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17539-L17540)

```diff
-           return `<svg viewBox="0 0 64 64">${gU[UU](XU).map(kU).join("")}</svg>`
-         }(UU, XU), this.shapes = Array.from(null !== (zU = null === (cU = this.element.firstElementChild) || void 0 === cU ? void 0 : cU.children) && void 0 !== zU ? zU : [])) : XU !== this.drawnGap && (this.drawnGap = XU, function(UU, XU, zU) {
+           return `<svg viewBox="0 0 64 64">${MH[HH](BH).map(xH).join("")}</svg>`
+         }(HH, BH), this.shapes = Array.from(null !== (LH = null === (AH = this.element.firstElementChild) || void 0 === AH ? void 0 : AH.children) && void 0 !== LH ? LH : [])) : BH !== this.drawnGap && (this.drawnGap = BH, function(HH, BH, LH) {
```

#### 2091. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17554` → after: `L17577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17577) · [Before (L17554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17554)

```diff
-         const zU = UU * AU.k / 2;
+         const LH = HH * hH.j / 2;
```

#### 2092. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17558` → after: `L17581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17581) · [Before (L17558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17558)

```diff
-         const XU = 2 + ((0, FU.e)(UU) - 1) * this.gapPerVh;
+         const BH = 2 + ((0, tH.d)(HH) - 1) * this.gapPerVh;
```

#### 2093. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17573` → after: `L17596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17596) · [Before (L17573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17573)

```diff
-         }, this.maxHealth = null, this.sU = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = UU => {
+         }, this.maxHealth = null, this.PA = 1, this.dead = !1, this.enabled = !0, this.cameraHeading = 0, this.token = void 0, this.readHealth = NaN, this.readShield = NaN, this.readMaxHealth = NaN, this.bindElement = HH => {
```

#### 2094. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17575` → after: `L17598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17598) · [Before (L17575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17575)

```diff
-           this.clearHits(), this.root = UU, this.lowLayer = null !== (XU = null === UU || void 0 === UU ? void 0 : UU.querySelector(".FrontlineDamageLow")) && void 0 !== XU ? XU : null, this.arcLayer = null !== (zU = null === UU || void 0 === UU ? void 0 : UU.querySelector(".Fron … [truncated]
+           this.clearHits(), this.root = HH, this.lowLayer = null !== (BH = null === HH || void 0 === HH ? void 0 : HH.querySelector(".FrontlineDamageLow")) && void 0 !== BH ? BH : null, this.arcLayer = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.querySelector(".Fron … [truncated]
```

#### 2095. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17579` → after: `L17602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17602) · [Before (L17579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17579)

```diff
-             vU: zU
+             xA: LH
```

#### 2096. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17602-L17603` → after: `L17625-L17626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17625-L17626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17625-L17626) · [Before (L17602-L17603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17602-L17603)

```diff
-         if (this.readHealth = UU, this.readShield = XU, this.readMaxHealth = zU, null === UU || void 0 === UU || !zU) return this.lastHealthPool = null, this.maxHealth = null, this.sU = 1, this.dead = !1, void this.drawLow();
-         const cU = UU + (null !== XU && void 0 !== XU ? XU : 0);
+         if (this.readHealth = HH, this.readShield = BH, this.readMaxHealth = LH, null === HH || void 0 === HH || !LH) return this.lastHealthPool = null, this.maxHealth = null, this.PA = 1, this.dead = !1, void this.drawLow();
+         const AH = HH + (null !== BH && void 0 !== BH ? BH : 0);
```

#### 2097. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17615` → after: `L17638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17638) · [Before (L17615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17615)

```diff
-         this.dead = UU <= 0, this.dead && this.clearHits(), this.lastHealthPool = cU, this.maxHealth = zU, this.sU = UU > 0 ? UU / zU : 1, this.drawLow()
+         this.dead = HH <= 0, this.dead && this.clearHits(), this.lastHealthPool = AH, this.maxHealth = LH, this.PA = HH > 0 ? HH / LH : 1, this.drawLow()
```

#### 2098. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17635-L17638` → after: `L17658-L17661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17658-L17661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17658-L17661) · [Before (L17635-L17638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17635-L17638)

```diff
-         const UU = dU((ZU - this.sU) / .25),
-           XU = dU((RU - this.sU) / .15000000000000002),
-           zU = this.sU < ZU;
-         this.lowLayer.classList.toggle("Active", zU), this.lowLayer.classList.toggle("Critical", this.sU < RU), this.lowLayer.style.opacity = String(zU ? .55 + .3 * UU + .15 * XU : 0)
+         const HH = bH((TH - this.PA) / .25),
+           BH = bH((UH - this.PA) / .15000000000000002),
+           LH = this.PA < TH;
+         this.lowLayer.classList.toggle("Active", LH), this.lowLayer.classList.toggle("Critical", this.PA < UH), this.lowLayer.style.opacity = String(LH ? .55 + .3 * HH + .15 * BH : 0)
```

#### 2099. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17690` → after: `L17713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17713) · [Before (L17690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17690)

```diff
-         (null === UU.drawnAngle || Math.abs(XU - UU.drawnAngle) > .005) && (UU.drawnAngle = XU, UU.element.style.rotate = `${XU}rad`)
+         (null === HH.drawnAngle || Math.abs(BH - HH.drawnAngle) > .005) && (HH.drawnAngle = BH, HH.element.style.rotate = `${BH}rad`)
```

#### 2100. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17695` → after: `L17718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17718) · [Before (L17695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17695)

```diff
-         let QU = this.flashes.find((XU => null === XU.angle || null === UU ? XU.angle === UU : WU(XU.angle, UU) < .5));
+         let SH = this.flashes.find((BH => null === BH.angle || null === HH ? BH.angle === HH : OH(BH.angle, HH) < .5));
```

#### 2101. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17745` → after: `L17768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17768) · [Before (L17745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17745)

```diff
-         QU.glow.classList.toggle("Everywhere", null === UU), NU.setProperty("--glowX", `${oU}px`), NU.setProperty("--glowY", `${DU}px`), NU.setProperty("--glowRx", `${EU}px`), NU.setProperty("--glowRy", `${YU}px`), QU.element.style.transformOrigin = `${oU}px ${DU}px`, null === (y … [truncated]
+         SH.glow.classList.toggle("Everywhere", null === HH), GH.setProperty("--glowX", `${zH}px`), GH.setProperty("--glowY", `${CH}px`), GH.setProperty("--glowRx", `${EH}px`), GH.setProperty("--glowRy", `${XH}px`), SH.element.style.transformOrigin = `${zH}px ${CH}px`, null === (r … [truncated]
```

#### 2102. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17796` → after: `L17819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17819) · [Before (L17796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17796)

```diff
-     var eU = zU(1106),
+     var mH = LH(1038),
```

#### 2103. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17798-L17802` → after: `L17821-L17825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17821-L17825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17821-L17825) · [Before (L17798-L17802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17798-L17802)

```diff
-       wU = zU(37318),
-       qU = zU(37418),
-       OU = zU(1193),
-       SU = zU(1492),
-       rU = zU(40278);
+       IH = LH(37472),
+       fH = LH(37569),
+       lH = LH(1123),
+       KH = LH(1450),
+       cH = LH(40413);
```

#### 2104. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17819` → after: `L17842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17842) · [Before (L17819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17819)

```diff
-         this.wire = UU, DU.k.UY(uU, UU, !0)
+         this.wire = HH, CH.k.AX(eH, HH, !0)
```

#### 2105. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17827` → after: `L17850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17850) · [Before (L17827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17827)

```diff
-         }, DU.k.UY(fU, this.scoreboard, !0)
+         }, CH.k.AX(qH, this.scoreboard, !0)
```

#### 2106. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17830` → after: `L17853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17853) · [Before (L17830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17830)

```diff
-     var HU = zU(1305);
+     var NH = LH(1225);
```

#### 2107. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17843` → after: `L17866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17866) · [Before (L17843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17843)

```diff
-         className: CU()(XU, `Owner-${yU||"None"}`, `Leader-${AU||"None"}`, {
+         className: oH()(BH, `Owner-${rH||"None"}`, `Leader-${hH||"None"}`, {
```

#### 2108. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17853` → after: `L17876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17876) · [Before (L17853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17853)

```diff
-             width: `${QU}%`
+             width: `${SH}%`
```

#### 2109. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17865` → after: `L17888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17888) · [Before (L17865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17865)

```diff
-         } = (0, OU.I)();
+         } = (0, lH.B)();
```

#### 2110. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17879` → after: `L17902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17902) · [Before (L17879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17879)

```diff
-                   className: CU()("FrontlinePointMarkerHomeTurf", `Team-${yU}`),
+                   className: oH()("FrontlinePointMarkerHomeTurf", `Team-${rH}`),
```

#### 2111. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17912-L17913` → after: `L17935-L17936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17935-L17936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17935-L17936) · [Before (L17912-L17913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17912-L17913)

```diff
-       const QU = (0, SU.j)(uU, XU.getWire()),
-         AU = (0, SU.j)(fU, XU.getScoreboard());
+       const SH = (0, KH.e)(eH, BH.getWire()),
+         hH = (0, KH.e)(qH, BH.getScoreboard());
```

#### 2112. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17955` → after: `L17978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17978) · [Before (L17955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17955)

```diff
-         } = (0, OU.I)();
+         } = (0, lH.B)();
```

#### 2113. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17959` → after: `L17982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R17982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L17982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L17982) · [Before (L17959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17959)

```diff
-             className: CU()("FrontlinePlate", `Status-${cU}`, `Leader-${QU||"None"}`),
+             className: oH()("FrontlinePlate", `Status-${AH}`, `Leader-${SH||"None"}`),
```

#### 2114. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L17993` → after: `L18016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18016) · [Before (L17993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L17993)

```diff
-             className: CU()("FrontlinePlate", "FrontlineAlert", `Tone-${yU}`),
+             className: oH()("FrontlinePlate", "FrontlineAlert", `Tone-${rH}`),
```

#### 2115. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18011` → after: `L18034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18034) · [Before (L18011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18011)

```diff
-         } = (0, OU.I)(), cU = (0, yU.useRef)(null), QU = function(UU, XU) {
+         } = (0, lH.B)(), AH = (0, rH.useRef)(null), SH = function(HH, BH) {
```

#### 2116. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L18016-L18017` → after: `L18039-L18040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R18039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L18039-L18040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/107.js#L18039-L18040) · [Before (L18016-L18017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/107.js#L18016-L18017)

```diff
-             const zU = document.querySelector(`.${qU.f}`),
-               yU = document.querySelector(`.${qU.h}`),
+             const LH = document.querySelector(`.${fH.f}`),
+               rH = document.querySelector(`.${fH.i}`),
```
