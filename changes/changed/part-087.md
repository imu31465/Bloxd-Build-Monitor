# Changed — Bundle Modifications Report (Part 087 / 115)

- **Updated at**: `2026-11-27T00:54 JST`
- **Part**: `87 / 115` (**437** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 086](part-086.md) · [Part 088 →](part-088.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e)

#### 8. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L86)

```diff
-         }, this.lastMs = 0, this.hidden = new EU.e, this.hiddenBefore = {
+         }, this.lastMs = 0, this.hidden = new EH.b, this.hiddenBefore = {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L111-L114` → after: `L111-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L111-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L111-L114) · [Before (L111-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L111-L114)

```diff
-             const zU = [`chunks +${YU(UU.chunksReceived,XU.chunksReceived)} got`, `+${YU(UU.chunksCancelled,XU.chunksCancelled)} cancelled`];
-             UU.chunksStored >= 0 && zU.push(`${UU.chunksStored} stored`);
-             const cU = `jobs +${YU(UU.jobsSent,XU.jobsSent)} sent, +${YU(UU.jobsDone,XU.jobsDone)} done, ${UU.jobsInFlight} in flight`;
-             return `${zU.join(", ")}; ${cU}; workers ${UU.workersLive} live, ${UU.workersRetired} retired`
+             const LH = [`chunks +${XH(HH.chunksReceived,BH.chunksReceived)} got`, `+${XH(HH.chunksCancelled,BH.chunksCancelled)} cancelled`];
+             HH.chunksStored >= 0 && LH.push(`${HH.chunksStored} stored`);
+             const AH = `jobs +${XH(HH.jobsSent,BH.jobsSent)} sent, +${XH(HH.jobsDone,BH.jobsDone)} done, ${HH.jobsInFlight} in flight`;
+             return `${LH.join(", ")}; ${AH}; workers ${HH.workersLive} live, ${HH.workersRetired} retired`
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L123` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L123) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L123)

```diff
-         if ((AU > 0 || FU > 0) && (zU.push((0, EU.i)({
+         if ((hH > 0 || tH > 0) && (LH.push((0, EH.c)({
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L127)

```diff
-         const oU = `load ${Math.round((UU-this.lastMs)/1e3)}s: ${zU.join("; ")}`;
+         const zH = `load ${Math.round((HH-this.lastMs)/1e3)}s: ${LH.join("; ")}`;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L144)

```diff
-         return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${UU} other, longest ${this.longest} in ${(0,QU.b)(this.longestMs)} ms at ${this.longestAhead} ahead`
+         return `${this.count} undrawn: ${this.paced} paced, ${this.skipped} skipped, ${HH} other, longest ${this.longest} in ${(0,SH.d)(this.longestMs)} ms at ${this.longestAhead} ahead`
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L182)

```diff
-           this.ahead = UU.headerWord(cU.I.Pacing) & cU.cb.AheadMask, this.frame(XU, zU, yU, QU, UU.headerWord(cU.I.RenderUs) / 1e3, UU.headerWord(cU.I.TicksRun), AU, UU.headerWord(cU.I.RenderPending))
+           this.ahead = HH.headerWord(AH.I.Pacing) & AH.fb.AheadMask, this.frame(BH, LH, rH, SH, HH.headerWord(AH.I.RenderUs) / 1e3, HH.headerWord(AH.I.TicksRun), hH, HH.headerWord(AH.I.RenderPending))
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L199-L200` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L199-L200) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L199-L200)

```diff
-             const cU = [`long frame ${(0,QU.b)(zU.intervalMs)} ms ending at ${(0,QU.b)(zU.endMs)} ms: main ${(0,QU.b)(zU.mainMs)} (render ${(0,QU.b)(zU.renderMs)}, ${zU.ticks} ticks ${(0,QU.b)(zU.tickMs)}), outside ${(0,QU.b)(zU.intervalMs-zU.mainMs)}`, `${zU.rafs} rafs`];
-             zU.pendingBefore >= 0 && cU.push(`pending ${zU.pendingBefore} -> ${zU.pendingAfter} (max ${zU.pendingMax})`), cU.push(this.longTasks.describe(zU.endMs - zU.intervalMs, zU.endMs)), (0, AU.l)("frame", cU.join("; "))
+             const AH = [`long frame ${(0,SH.d)(LH.intervalMs)} ms ending at ${(0,SH.d)(LH.endMs)} ms: main ${(0,SH.d)(LH.mainMs)} (render ${(0,SH.d)(LH.renderMs)}, ${LH.ticks} ticks ${(0,SH.d)(LH.tickMs)}), outside ${(0,SH.d)(LH.intervalMs-LH.mainMs)}`, `${LH.rafs} rafs`];
+             LH.pendingBefore >= 0 && AH.push(`pending ${LH.pendingBefore} -> ${LH.pendingAfter} (max ${LH.pendingMax})`), AH.push(this.longTasks.describe(LH.endMs - LH.intervalMs, LH.endMs)), (0, hH.j)("frame", AH.join("; "))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L210)

```diff
-             null !== XU && (0, AU.l)("frame", XU)
+             null !== BH && (0, hH.j)("frame", BH)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L217)

```diff
-         this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, AU.l)("frame", `start: ${UU} client, ${XU}, dpr ${window.devicePixelRatio}, long tasks ${null!==(zU=this.longTasks.kind)&& … [truncated]
+         this.restart(), this.startedMs = performance.now(), this.lastFlushMs = this.startedMs, this.loadLine.start(this.startedMs), this.scheduleFlush(), (0, hH.j)("frame", `start: ${HH} client, ${BH}, dpr ${window.devicePixelRatio}, long tasks ${null!==(LH=this.longTasks.kind)&& … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L231)

```diff
-         this.flushTimer = setTimeout(this.flush, UU ? aU : pU)
+         this.flushTimer = setTimeout(this.flush, HH ? QH : uH)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L236` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L236) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L236)

```diff
-         (0, yU.c)(zU) ? (this.lastDrawnStartMs >= 0 && (DU.pendingAfter = this.lastPending, this.closeInterval(UU - this.lastDrawnStartMs, UU)), this.lastDrawnStartMs = UU, ZU(DU).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this … [truncated]
+         (0, rH.b)(LH) ? (this.lastDrawnStartMs >= 0 && (CH.pendingAfter = this.lastPending, this.closeInterval(HH - this.lastDrawnStartMs, HH)), this.lastDrawnStartMs = HH, TH(CH).pendingBefore = this.lastPending, this.summary.undrawn.drawn()) : this.lastDrawnStartMs >= 0 && this … [truncated]
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L257)

```diff
-         if (0 === XU.frames) return XU.undrawn.count > 0 && (0, AU.l)("frame", `${UU}s: no frames drawn, ${XU.undrawn.describe()}; pending max ${zU.pendingMax}`), XU.undrawn.count > 0;
+         if (0 === BH.frames) return BH.undrawn.count > 0 && (0, hH.j)("frame", `${HH}s: no frames drawn, ${BH.undrawn.describe()}; pending max ${LH.pendingMax}`), BH.undrawn.count > 0;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L259-L260` → after: `L259-L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L259-L260) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L259-L260)

```diff
-           yU = [`${XU.frames} frames, median ${(0,QU.b)((0,QU.f)(cU,.5))} p95 ${(0,QU.b)((0,QU.f)(cU,.95))} max ${(0,QU.b)(XU.maxMs)} ms, ${XU.slow} over 50, ${XU.shown+XU.dropped} over ${gU}`, `${zU.rafs} rafs, ${XU.undrawn.describe()}`, `main ${(0,QU.b)(zU.mainMs)} ms (render $ … [truncated]
-         return zU.pendingMax >= 0 && yU.push(`pending max ${zU.pendingMax}`), this.ahead >= 0 && yU.push(`${this.ahead} frames ahead`), yU.push(`outliers ${XU.shown} logged, ${XU.dropped} dropped`), (0, AU.l)("frame", `${UU}s: ${yU.join("; ")}`), !0
+           rH = [`${BH.frames} frames, median ${(0,SH.d)((0,SH.g)(AH,.5))} p95 ${(0,SH.d)((0,SH.g)(AH,.95))} max ${(0,SH.d)(BH.maxMs)} ms, ${BH.slow} over 50, ${BH.shown+BH.dropped} over ${MH}`, `${LH.rafs} rafs, ${BH.undrawn.describe()}`, `main ${(0,SH.d)(LH.mainMs)} ms (render $ … [truncated]
+         return LH.pendingMax >= 0 && rH.push(`pending max ${LH.pendingMax}`), this.ahead >= 0 && rH.push(`${this.ahead} frames ahead`), rH.push(`outliers ${BH.shown} logged, ${BH.dropped} dropped`), (0, hH.j)("frame", `${HH}s: ${rH.join("; ")}`), !0
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L269)

```diff
-   34733: (UU, XU, zU) => {
+   34837: (HH, BH, LH) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L271)

```diff
-       return `hidden ${UU.changes} changes, ${Math.round(UU.hiddenMs)} ms`
+       return `hidden ${HH.changes} changes, ${Math.round(HH.hiddenMs)} ms`
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L274-L275` → after: `L274-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L274-L275) · [Before (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L274-L275)

```diff
-       e: () => yU,
-       i: () => cU
+       b: () => rH,
+       c: () => AH
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/frameDebug.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078eR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d9962d3e1b9e6d1f09e8f0f0a1f0dfe78dbd8cc4abed67ec0ead7a2e552b078e) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/frameDebug.js#L282)

```diff
-         this.changes++, document.hidden ? this.hiddenSinceMs = UU : this.hiddenSinceMs >= 0 && (this.hiddenMs += UU - this.hiddenSinceMs, this.hiddenSinceMs = -1)
+         this.changes++, document.hidden ? this.hiddenSinceMs = HH : this.hiddenSinceMs >= 0 && (this.hiddenMs += HH - this.hiddenSinceMs, this.hiddenSinceMs = -1)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L4)

```diff
-   8654: (UU, XU) => {
+   8774: (HH, BH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L9)

```diff
-     XU.c = {
+     BH.b = {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L13)

```diff
-     }, XU.f = XU.c
+     }, BH.d = BH.b
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L15)

```diff
-   8662: (UU, XU) => {
+   8778: (HH, BH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L24)

```diff
-     }, XU.c = XU.b
+     }, BH.e = BH.b
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L26)

```diff
-   8671: (UU, XU) => {
+   8784: (HH, BH) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L31)

```diff
-     XU.b = {
+     BH.d = {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L35)

```diff
-     }, XU.d = XU.b
+     }, BH.g = BH.d
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L37)

```diff
-   8680: (UU, XU) => {
+   8792: (HH, BH) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L42)

```diff
-     XU.b = {
+     BH.d = {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L46)

```diff
-     }, XU.f = XU.b
+     }, BH.f = BH.d
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L48)

```diff
-   8688: (UU, XU) => {
+   8798: (HH, BH) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L81` → after: `L59-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L59-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L59-L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L81)

```diff
-   8706: (UU, XU) => {
+   8806: (HH, BH) => {
+     var LH = "reddit-alien",
+       AH = [],
+       rH = "f281",
+       SH = "M373 138.6c-25.2 0-46.3-17.5-51.9-41-30.6 4.3-54.2 30.7-54.2 62.4l0 .2c47.4 1.8 90.6 15.1 124.9 36.3 12.6-9.7 28.4-15.5 45.5-15.5 41.3 0 74.7 33.4 74.7 74.7 0 29.8-17.4 55.5-42.7 67.5-2.4 86.8-97 156.6-213.2 156.6S45.5 410.1 43 323.4c-25.4-11.9-43-37.7-43-67.7 0-41.3  … [truncated]
+     BH.c = {
+       prefix: "fab",
+       iconName: LH,
+       icon: [512, 512, AH, rH, SH]
+     }, BH.e = BH.c
+   },
+   8815: (HH, BH) => {
+     var LH = "tiktok",
+       AH = [],
+       rH = "e07b",
+       SH = "M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9  … [truncated]
+ ... (7 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L92` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L92) · [Before (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L92)

```diff
-   8714: (UU, XU) => {
+   8823: (HH, BH) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L97)

```diff
-     XU.c = {
+     BH.d = {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L101)

```diff
-     }, XU.e = XU.c
+     }, BH.f = BH.d
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L103)

```diff
-   8719: (UU, XU) => {
+   8832: (HH, BH) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L108)

```diff
-     XU.d = {
+     BH.b = {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L112)

```diff
-     }, XU.h = XU.d
+     }, BH.d = BH.b
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L114)

```diff
-   8724: (UU, XU) => {
+   8840: (HH, BH) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L125)

```diff
-   8651: (UU, XU, zU) => {
+   8765: (HH, BH, LH) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L129-L139` → after: `L129-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L129-L139) · [Before (L129-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L129-L139)

```diff
-     var cU = zU(8654),
-       yU = zU(8662),
-       QU = zU(8671),
-       AU = zU(8680),
-       FU = zU(8688),
-       oU = zU(8697),
-       DU = zU(8701),
-       EU = zU(8706),
-       YU = zU(8714),
-       NU = zU(8719),
-       IU = zU(8724);
+     var AH = LH(8774),
+       rH = LH(8778),
+       SH = LH(8784),
+       hH = LH(8792),
+       tH = LH(8798),
+       zH = LH(8806),
+       CH = LH(8815),
+       EH = LH(8821),
+       XH = LH(8823),
+       GH = LH(8832),
+       YH = LH(8840);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L141-L143` → after: `L141-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L141-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L141-L143) · [Before (L141-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L141-L143)

```diff
-       apple: cU.f,
-       chrome: yU.c,
-       discord: QU.d,
+       apple: AH.d,
+       chrome: rH.e,
+       discord: SH.g,
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L145-L147` → after: `L145-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L145-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L145-L147) · [Before (L145-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L145-L147)

```diff
-       instagram: FU.h,
-       "reddit-alien": oU.i,
-       tiktok: DU.f,
+       instagram: tH.f,
+       "reddit-alien": zH.e,
+       tiktok: CH.g,
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/icons-brands.js` (Changed code · before: `L149-L150` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-ea1d94038385ca8f2d6aebc01f453fe6bdeb894228708df65cfb84fa41e8b2e1) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L149-L150) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-brands.js#L149-L150)

```diff
-       windows: YU.e,
-       "x-twitter": NU.h,
+       windows: XH.f,
+       "x-twitter": GH.d,
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/icons-duotone.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/icons-duotone.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L4)

```diff
-   8643: (UU, XU) => {
+   8755: (HH, BH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L26` → after: `L15-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94bR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94b) · [After (L15-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L15-L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L26)

```diff
-   8640: (UU, XU, zU) => {
+   8763: (HH, BH) => {
+     var LH = "planet-ringed",
+       AH = [129680],
+       rH = "e020",
+       SH = ["M24.6 519.4c-24.7-24.7 5.1-97.7 70.1-186.3 8.7 21.9 21.1 42 36.3 59.4-8.2 12-15.6 23.6-22.1 34.5-3.8 6.5-7.3 12.6-10.3 18.3 5.7-3 11.8-6.4 18.3-10.3 10.9-6.4 22.4-13.8 34.5-22 47.6-32.6 103-78.6 158.9-134.5S412.4 167.1 445 119.5c8.2-12 15.6-23.6 22-34.5 3.8-6.5 7.3-1 … [truncated]
+     BH.e = {
+       prefix: "fad",
+       iconName: LH,
+       icon: [576, 512, AH, rH, SH]
+     }, BH.h = BH.e
+   },
+   8747: (HH, BH, LH) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94b) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L30-L31)

```diff
-     var cU = zU(8643),
-       yU = zU(8649);
+     var AH = LH(8755),
+       rH = LH(8763);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/icons-duotone.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94bR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-d29514b61e395f3dacfb795b59ef55b3a109fc9a41c32034eae586fcee83b94b) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-duotone.js#L34)

```diff
-       "planet-ringed": yU.f
+       "planet-ringed": rH.h
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (15 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L4)

```diff
-   8621: (UU, XU) => {
+   8722: (HH, BH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L9)

```diff
-     XU.d = {
+     BH.c = {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L13)

```diff
-     }, XU.e = XU.d
+     }, BH.f = BH.c
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L15)

```diff
-   8627: (UU, XU) => {
+   8730: (HH, BH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L20)

```diff
-     XU.e = {
+     BH.c = {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L24)

```diff
-     }, XU.h = XU.e
+     }, BH.d = BH.c
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L26)

```diff
-   8629: (UU, XU) => {
+   8735: (HH, BH) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L31)

```diff
-     XU.b = {
+     BH.e = {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L35)

```diff
-     }, XU.e = XU.b
+     }, BH.i = BH.e
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L37-L39` → after: `L37-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L37-L39) · [Before (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L37-L39)

```diff
-   8631: (UU, XU, zU) => {
-     var cU = zU(8635);
-     XU.b = {
+   8741: (HH, BH, LH) => {
+     var AH = LH(8744);
+     BH.c = {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L43)

```diff
-     }, XU.e = XU.b, cU.prefix, cU.iconName, cU.width, cU.height, cU.aliases, cU.unicode, cU.svgPathData, cU.aliases
+     }, BH.g = BH.c, AH.prefix, AH.iconName, AH.width, AH.height, AH.aliases, AH.unicode, AH.svgPathData, AH.aliases
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L45)

```diff
-   8635: (UU, XU) => {
+   8744: (HH, BH) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L59)

```diff
-   8617: (UU, XU, zU) => {
+   8713: (HH, BH, LH) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L63-L67` → after: `L63-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L63-L67) · [Before (L63-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L63-L67)

```diff
-     var cU = zU(8621),
-       yU = zU(8627),
-       QU = zU(8629),
-       AU = zU(8631),
-       FU = zU(8635);
+     var AH = LH(8722),
+       rH = LH(8730),
+       SH = LH(8735),
+       hH = LH(8741),
+       tH = LH(8744);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/icons-regular.js` (Changed code · before: `L69-L72` → after: `L69-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefbR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-87a0cd7634b755ed49966b8e99e5f043440d28ee29f384afaef161124b8dbefb) · [After (L69-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L69-L72) · [Before (L69-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-regular.js#L69-L72)

```diff
-       copy: cU.e,
-       flag: yU.h,
-       heart: QU.e,
-       "user-friends": AU.e,
+       copy: AH.f,
+       flag: rH.d,
+       heart: SH.i,
+       "user-friends": hH.g,
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (78 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65)

#### 1. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L4)

```diff
-   7376: (UU, XU, zU) => {
+   7313: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L8` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L8-L18) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L8)

```diff
-     var cU = zU(7385),
+     var AH = LH(7315),
+       rH = LH(7331),
+       SH = LH(7334),
+       hH = LH(7345),
+       tH = LH(7354),
+       zH = LH(7337),
+       CH = LH(7362),
+       EH = LH(7368),
+       XH = LH(7375),
+       GH = LH(7378),
+       YH = LH(7385),
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L10-L16` → after: `L20-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L20-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L20-L25) · [Before (L10-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L10-L16)

```diff
-       QU = zU(7398),
-       AU = zU(7402),
-       FU = zU(7394),
-       oU = zU(7409),
-       DU = zU(7416),
-       EU = zU(7424),
-       YU = zU(7426),
+       QH = LH(7399),
+       WH = LH(7406),
+       MH = LH(7421),
+       xH = LH(7427),
+       vH = LH(7429),
+       PH = LH(7415),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L18-L19` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L27-L29) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L18-L19)

```diff
-       IU = zU(7442),
-       pU = zU(7450),
+       UH = LH(7440),
+       VH = LH(7448),
+       OH = LH(7456),
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L21-L23` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L31-L33) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L21-L23)

```diff
-       tU = zU(7466),
-       gU = zU(7473),
-       kU = zU(7456),
+       kH = LH(7468),
+       mH = LH(7476),
+       oH = LH(7479),
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L25-L39` → after: `L35-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L35-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L35-L45) · [Before (L25-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L25-L39)

```diff
-       BU = zU(7489),
-       ZU = zU(7493),
-       RU = zU(7496),
-       PU = zU(7498),
-       WU = zU(7507),
-       dU = zU(7512),
-       LU = zU(7515),
-       eU = zU(7517),
-       CU = zU(7523),
-       wU = zU(7531),
-       qU = zU(7533),
-       OU = zU(7544),
-       SU = zU(7550),
-       rU = zU(7558),
-       uU = zU(7564),
+       fH = LH(7487),
+       lH = LH(7494),
+       KH = LH(7503),
+       cH = LH(7520),
+       eH = LH(7525),
+       qH = LH(7534),
+       gH = LH(7537),
+       NH = LH(7540),
+       RH = LH(7549),
+       jH = LH(7557),
+       nH = LH(7566),
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L41-L42` → after: `L47-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L47-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L47-L49) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L41-L42)

```diff
-       iU = zU(7575),
-       HU = zU(7583),
+       DH = LH(7573),
+       wH = LH(7578),
+       ZH = LH(7582),
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L50-L52` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L56-L57) · [Before (L50-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L50-L52)

```diff
-       xU = zU(1394),
-       JU = zU(7607),
-       jU = zU(7616),
+       yH = LH(7610),
+       HB = LH(7612),
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L54-L57` → after: `L59-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L59-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L59-L65) · [Before (L54-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L54-L57)

```diff
-       bU = zU(7626),
-       TU = zU(7629),
-       hU = zU(7641),
-       UX = zU(7647),
+       LB = LH(7625),
+       AB = LH(7630),
+       rB = LH(7639),
+       SB = LH(7642),
+       hB = LH(7645),
+       tB = LH(7648),
+       zB = LH(7652),
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L60-L63` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L69-L70) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L60-L63)

```diff
-       cX = zU(7668),
-       yX = zU(7676),
-       QX = zU(7683),
-       AX = zU(7685),
+       GB = LH(7669),
+       YB = LH(7682),
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L65-L76` → after: `L72-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L72-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L72-L85) · [Before (L65-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L65-L76)

```diff
-       oX = zU(7693),
-       DX = zU(7697),
-       EX = zU(7699),
-       YX = zU(7709),
-       NX = zU(7716),
-       IX = zU(7721),
-       pX = zU(7737),
-       aX = zU(7741),
-       tX = zU(7747),
-       gX = zU(7753),
-       kX = zU(7765),
-       GX = zU(7773),
+       QB = LH(7689),
+       WB = LH(7702),
+       MB = LH(7710),
+       xB = LH(7713),
+       vB = LH(7715),
+       PB = LH(7723),
+       TB = LH(7725),
+       UB = LH(7729),
+       VB = LH(7735),
+       OB = LH(7743),
+       bB = LH(7748),
+       kB = LH(7752),
+       mB = LH(7758),
+       oB = LH(7767),
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L78-L79` → after: `L87-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L87-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L87-L91) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L78-L79)

```diff
-       ZX = zU(7781),
-       RX = zU(7793),
+       fB = LH(7695),
+       lB = LH(7779),
+       KB = LH(7785),
+       cB = LH(7789),
+       eB = LH(7794),
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L81` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L93-L94) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L81)

```diff
-       WX = zU(7806),
+       gB = LH(7803),
+       NB = LH(7817),
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L83-L89` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L96-L97) · [Before (L83-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L83-L89)

```diff
-       LX = zU(7816),
-       eX = zU(7729),
-       CX = zU(7819),
-       wX = zU(7823),
-       qX = zU(7825),
-       OX = zU(7827),
-       SX = zU(7832),
+       jB = LH(7828),
+       nB = LH(7833),
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L91-L101` → after: `L99-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L99-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L99-L113) · [Before (L91-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L91-L101)

```diff
-       uX = zU(7842),
-       fX = zU(7840),
-       iX = zU(7853),
-       HX = zU(7861),
-       MX = zU(7869),
-       vX = zU(7872),
-       VX = zU(7882),
-       sX = zU(7884),
-       nX = zU(7891),
-       mX = zU(7894),
-       lX = zU(7902),
+       DB = LH(7839),
+       wB = LH(7852),
+       ZB = LH(7859),
+       dB = LH(7864),
+       aB = LH(7867),
+       sB = LH(7873),
+       JB = LH(7877),
+       iB = LH(7881),
+       pB = LH(7886),
+       yB = LH(7621),
+       HL = LH(7888),
+       BL = LH(7893),
+       LL = LH(7895),
+       AL = LH(7899),
+       rL = LH(7901),
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L104-L105` → after: `L116-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L116-L118) · [Before (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L104-L105)

```diff
-       jX = zU(7914),
-       KX = zU(7634),
+       tL = LH(7845),
+       zL = LH(7915),
+       CL = LH(7918),
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L107-L115` → after: `L120-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L120-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L120-L125) · [Before (L107-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L107-L115)

```diff
-       TX = zU(7928),
-       hX = zU(7935),
-       Uz = zU(7938),
-       Xz = zU(7941),
-       zz = zU(7874),
-       cz = zU(7949),
-       yz = zU(7953),
-       Qz = zU(7962),
-       Az = zU(7970),
+       XL = LH(7930),
+       GL = LH(7936),
+       YL = LH(7944),
+       uL = LH(7948),
+       QL = LH(7957),
+       WL = LH(7966),
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L117-L122` → after: `L127-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L127-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L127-L131) · [Before (L117-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L117-L122)

```diff
-       oz = zU(7977),
-       Dz = zU(7981),
-       Ez = zU(7985),
-       Yz = zU(7990),
-       Nz = zU(8e3),
-       Iz = zU(8009),
+       xL = LH(7988),
+       vL = LH(7997),
+       PL = LH(8004),
+       TL = LH(8006),
+       UL = LH(8011),
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L125-L133` → after: `L136-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L136-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L136-L144) · [Before (L125-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L125-L133)

```diff
-       tz = zU(8030),
-       gz = zU(7995),
-       kz = zU(8037),
-       Gz = zU(8045),
-       Bz = zU(8052),
-       Zz = zU(8058),
-       Rz = zU(8065),
-       Pz = zU(8071),
-       Wz = zU(8077),
+       mL = LH(8028),
+       oL = LH(8032),
+       IL = LH(8039),
+       fL = LH(8042),
+       lL = LH(8050),
+       KL = LH(8054),
+       cL = LH(8061),
+       eL = LH(8068),
+       qL = LH(8076),
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L135-L150` → after: `L146-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L146-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L146-L159) · [Before (L135-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L135-L150)

```diff
-       Lz = zU(8088),
-       ez = zU(8090),
-       Cz = zU(8096),
-       wz = zU(8102),
-       qz = zU(8111),
-       Oz = zU(8116),
-       Sz = zU(8121),
-       rz = zU(8124),
-       uz = zU(8135),
-       fz = zU(8143),
-       iz = zU(8147),
-       Hz = zU(8152),
-       Mz = zU(8160),
-       vz = zU(8170),
-       Vz = zU(8177),
-       sz = zU(8180),
+       NL = LH(8089),
+       RL = LH(8093),
+       jL = LH(8100),
+       nL = LH(8108),
+       FL = LH(8113),
+       DL = LH(8122),
+       wL = LH(8139),
+       ZL = LH(8145),
+       dL = LH(8148),
+       aL = LH(8151),
+       sL = LH(8156),
+       JL = LH(8161),
+       iL = LH(8173),
+       pL = LH(8175),
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L153-L169` → after: `L162-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L162-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L162-L176) · [Before (L153-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L153-L169)

```diff
-       lz = zU(8192),
-       xz = zU(8196),
-       Jz = zU(8201),
-       jz = zU(7851),
-       Kz = zU(8206),
-       bz = zU(8211),
-       Tz = zU(8214),
-       hz = zU(8222),
-       Uc = zU(7761),
-       Xc = zU(8132),
-       zc = zU(8230),
-       cc = zU(8238),
-       yc = zU(8240),
-       Qc = zU(8247),
-       Ac = zU(8251),
-       Fc = zU(8253),
- ... (1 more removed lines; see GitHub link above)
+       BA = LH(8190),
+       LA = LH(8195),
+       AA = LH(8203),
+       rA = LH(8208),
+       SA = LH(8213),
+       hA = LH(7820),
+       tA = LH(8221),
+       zA = LH(8224),
+       CA = LH(8233),
+       EA = LH(8236),
+       XA = LH(7721),
+       GA = LH(8130),
+       YA = LH(8244),
+       uA = LH(8249),
+       QA = LH(8252),
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L171` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L178-L179) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L171)

```diff
-       Ec = zU(7388),
+       MA = LH(8265),
+       xA = LH(8268),
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L173-L179` → after: `L181-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L181-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L181-L188) · [Before (L173-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L173-L179)

```diff
-       Nc = zU(8274),
-       Ic = zU(8279),
-       pc = zU(8283),
-       ac = zU(8289),
-       tc = zU(8296),
-       gc = zU(8305),
-       kc = zU(8312),
+       PA = LH(8278),
+       TA = LH(7323),
+       UA = LH(8280),
+       VA = LH(8286),
+       OA = LH(8295),
+       bA = LH(8301),
+       kA = LH(8308),
+       mA = LH(8313),
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L181-L207` → after: `L190-L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L190-L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L190-L210) · [Before (L181-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L181-L207)

```diff
-       Bc = zU(8324),
-       Zc = zU(8326),
-       Rc = zU(8300),
-       Pc = zU(7705),
-       Wc = zU(8330),
-       dc = zU(8337),
-       Lc = zU(8340),
-       ec = zU(8351),
-       Cc = zU(8344),
-       wc = zU(8354),
-       qc = zU(8359),
-       Oc = zU(8364),
-       Sc = zU(8370),
-       rc = zU(8377),
-       uc = zU(8380),
-       fc = zU(8382),
- ... (11 more removed lines; see GitHub link above)
+       IA = LH(8328),
+       fA = LH(8333),
+       lA = LH(8339),
+       KA = LH(8343),
+       cA = LH(8318),
+       eA = LH(8352),
+       qA = LH(7676),
+       gA = LH(8356),
+       NA = LH(8363),
+       RA = LH(8365),
+       jA = LH(8381),
+       nA = LH(8372),
+       FA = LH(8383),
+       DA = LH(8387),
+       wA = LH(8396),
+       ZA = LH(8400),
+ ... (5 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L209-L219` → after: `L212-L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L212-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L212-L217) · [Before (L209-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L209-L219)

```diff
-       Kc = zU(8443),
-       bc = zU(8445),
-       Tc = zU(8447),
-       hc = zU(8451),
-       Uy = zU(7787),
-       Xy = zU(8453),
-       zy = zU(8456),
-       cy = zU(8460),
-       yy = zU(8463),
-       Qy = zU(8466),
-       Ay = zU(8469),
+       yA = LH(8444),
+       Hr = LH(8446),
+       Br = LH(8166),
+       Lr = LH(8455),
+       Ar = LH(8461),
+       rr = LH(8464),
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L221-L224` → after: `L219-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L219-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L219-L221) · [Before (L221-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L221-L224)

```diff
-       oy = zU(8476),
-       Dy = zU(8478),
-       Ey = zU(8485),
-       Yy = zU(8494),
+       hr = LH(8479),
+       tr = LH(8484),
+       zr = LH(8491),
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L227-L237` → after: `L225-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L225-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L225-L237) · [Before (L227-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L227-L237)

```diff
-       py = zU(8506),
-       ay = zU(8511),
-       ty = zU(8519),
-       gy = zU(8521),
-       ky = zU(8530),
-       Gy = zU(8534),
-       By = zU(8543),
-       Zy = zU(8552),
-       Ry = zU(8558),
-       Py = zU(8562),
-       Wy = zU(8566),
+       Gr = LH(8507),
+       Yr = LH(8509),
+       ur = LH(8517),
+       Qr = LH(8525),
+       Wr = LH(7738),
+       Mr = LH(8529),
+       xr = LH(8537),
+       vr = LH(8541),
+       Pr = LH(8549),
+       Tr = LH(8554),
+       Ur = LH(8556),
+       Vr = LH(8563),
+       Or = LH(8565),
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L239-L243` → after: `L239-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L239-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L239-L241) · [Before (L239-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L239-L243)

```diff
-       Ly = zU(8575),
-       ey = zU(8580),
-       Cy = zU(8589),
-       wy = zU(8593),
-       qy = zU(8595),
+       kr = LH(8577),
+       mr = LH(8585),
+       or = LH(8594),
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L245-L247` → after: `L243-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L243-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L243-L265) · [Before (L245-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L245-L247)

```diff
-       Sy = zU(8603),
-       ry = zU(8606),
-       uy = zU(8614);
+       fr = LH(8601),
+       lr = LH(8608),
+       Kr = LH(8611),
+       cr = LH(8616),
+       er = LH(8621),
+       qr = LH(8624),
+       gr = LH(8627),
+       Nr = LH(8630),
+       Rr = LH(8638),
+       jr = LH(8643),
+       nr = LH(8648),
+       Fr = LH(8652),
+       Dr = LH(8656),
+       wr = LH(8658),
+       Zr = LH(8662),
+       dr = LH(8670),
+ ... (7 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L249` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L267-L268) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L249)

```diff
-       add: cU.g,
+       add: AH.f,
+       "alarm-clock": rH.g,
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L251-L252` → after: `L270-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L270-L271) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L251-L252)

```diff
-       "angle-down": QU.i,
-       "angle-up": AU.i,
+       "angle-down": hH.g,
+       "angle-up": tH.f,
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L254-L258` → after: `L273-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L273-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L273-L278) · [Before (L254-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L254-L258)

```diff
-       "arrow-down-to-line": oU.f,
-       "arrow-left": DU.d,
-       "arrow-right": EU.h,
-       "arrow-up": YU.h,
-       "arrow-up-from-line": NU.h,
+       archway: CH.e,
+       "arrow-down-to-line": EH.g,
+       "arrow-left": XH.g,
+       "arrow-right": GH.e,
+       "arrow-up": YH.e,
+       "arrow-up-from-line": uH.c,
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L260` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L280) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L260)

```diff
-       arrows: pU.h,
+       arrows: WH.e,
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L265-L266` → after: `L285-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L285-L286) · [Before (L265-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L265-L266)

```diff
-       award: GU.d,
-       backpack: BU.d,
+       award: TH.f,
+       backpack: UH.e,
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L269-L272` → after: `L289-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L289-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L289-L292) · [Before (L269-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L269-L272)

```diff
-       bee: PU.g,
-       bell: WU.h,
-       bells: dU.g,
-       "block-question": LU.f,
+       bee: bH.h,
+       bell: kH.c,
+       bells: mH.f,
+       "block-question": oH.g,
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L274-L275` → after: `L294-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L294-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L294-L295) · [Before (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L274-L275)

```diff
-       boot: CU.e,
-       calendar: wU.d,
+       boot: fH.g,
+       calendar: lH.h,
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L277-L281` → after: `L297-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L297-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L297-L301) · [Before (L277-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L277-L281)

```diff
-       "candy-cane": OU.h,
-       "caret-down": SU.g,
-       "caret-left": rU.d,
-       "caret-right": uU.i,
-       "caret-up": fU.e,
+       "candy-cane": cH.f,
+       "caret-down": eH.f,
+       "caret-left": qH.e,
+       "caret-right": gH.g,
+       "caret-up": NH.g,
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L283-L284` → after: `L303-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L303-L304) · [Before (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L283-L284)

```diff
-       check: HU.h,
-       "chess-knight": MU.h,
+       check: jH.e,
+       "chess-knight": nH.i,
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L286-L287` → after: `L306-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L306-L307) · [Before (L286-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L286-L287)

```diff
-       "child-reaching": VU.d,
-       circle: sU.f,
+       "child-reaching": DH.h,
+       circle: wH.e,
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L291-L292` → after: `L311-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L311-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L311-L312) · [Before (L291-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L291-L292)

```diff
-       "circle-question": xU.c,
-       "circle-xmark": JU.e,
+       "circle-question": sH.i,
+       "circle-xmark": JH.c,
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L294-L296` → after: `L314-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L314-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L314-L316) · [Before (L294-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L294-L296)

```diff
-       "cloud-snow": KU.g,
-       code: bU.e,
-       cog: TU.g,
+       "cloud-snow": pH.e,
+       code: yH.d,
+       cog: HB.f,
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L299-L300` → after: `L319-L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L319-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L319-L320) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L299-L300)

```diff
-       commenting: XX.d,
-       compress: zX.g,
+       commenting: AB.h,
+       compress: rB.f,
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L302-L305` → after: `L322-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L322-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L322-L325) · [Before (L302-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L302-L305)

```diff
-       cookie: yX.c,
-       copy: QX.d,
-       crosshairs: AX.h,
-       crown: FX.f,
+       cookie: hB.f,
+       copy: tB.f,
+       crosshairs: zB.e,
+       crown: CB.g,
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L309-L313` → after: `L329-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L329-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L329-L333) · [Before (L309-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L309-L313)

```diff
-       deer: YX.f,
-       dice: NX.h,
-       dizzy: IX.g,
-       "door-closed": pX.f,
-       "door-open": aX.e,
+       deer: YB.h,
+       dice: uB.f,
+       dizzy: QB.e,
+       "door-closed": WB.e,
+       "door-open": MB.g,
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L315` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L335) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L315)

```diff
-       edit: gX.h,
+       edit: vB.f,
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L317-L319` → after: `L337-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L337-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L337-L339) · [Before (L317-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L317-L319)

```diff
-       "ellipsis-h": GX.e,
-       exclamation: BX.c,
-       "exclamation-triangle": ZX.f,
+       "ellipsis-h": TB.i,
+       exclamation: UB.f,
+       "exclamation-triangle": VB.e,
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L321-L322` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L341-L342) · [Before (L321-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L321-L322)

```diff
-       "external-link": PX.f,
-       eye: WX.g,
+       "external-link": bB.h,
+       eye: kB.h,
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L324` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L344-L345) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L324)

```diff
-       "face-diagonal-mouth": LX.f,
+       eyes: mB.e,
+       "face-diagonal-mouth": IB.i,
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L326` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L347) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L326)

```diff
-       "face-raised-eyebrow": CX.e,
+       "face-raised-eyebrow": lB.g,
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L328` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L349) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L328)

```diff
-       "face-worried": qX.f,
+       "face-worried": cB.h,
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L331-L332` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L352-L353) · [Before (L331-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L331-L332)

```diff
-       "file-alt": rX.h,
-       "file-clipboard": uX.c,
+       "file-alt": gB.g,
+       "file-clipboard": NB.e,
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L334-L343` → after: `L355-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L355-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L355-L364) · [Before (L334-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L334-L343)

```diff
-       "file-text": iX.h,
-       film: HX.g,
-       fire: MX.e,
-       "fist-raised": vX.e,
-       flag: VX.f,
-       folder: sX.f,
-       "folder-image": nX.g,
-       "folder-open": mX.g,
-       gamepad: lX.f,
-       "gamepad-modern": xX.d,
+       "file-text": jB.i,
+       film: nB.h,
+       fire: FB.f,
+       "fist-raised": DB.f,
+       flag: wB.h,
+       folder: ZB.e,
+       "folder-image": dB.h,
+       "folder-open": aB.i,
+       gamepad: sB.h,
+       "gamepad-modern": JB.h,
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L347-L351` → after: `L368-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L368-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L368-L374) · [Before (L347-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L347-L351)

```diff
-       gem: bX.c,
-       globe: TX.g,
-       "grid-2": hX.f,
-       hammer: Uz.d,
-       "hand-back-point-up": Xz.e,
+       gem: HL.e,
+       gift: BL.c,
+       "gingerbread-man": LL.h,
+       globe: AL.d,
+       "grid-2": rL.c,
+       hammer: SL.e,
+       "hand-back-point-up": hL.c,
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L353-L361` → after: `L376-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L376-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L376-L385) · [Before (L353-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L353-L361)

```diff
-       "hand-holding-medical": cz.f,
-       "hand-point-left": yz.h,
-       "hand-wave": Qz.d,
-       "hands-clapping": Az.i,
-       "hat-santa": Fz.f,
-       "hat-winter": oz.f,
-       "hat-witch": Dz.c,
-       heart: Ez.c,
-       "heart-music-camera-bolt": Yz.e,
+       "hand-holding-medical": zL.c,
+       "hand-point-left": CL.f,
+       "hand-wave": EL.h,
+       "hands-clapping": XL.f,
+       "hat-santa": GL.i,
+       "hat-winter": YL.c,
+       "hat-witch": uL.f,
+       "hat-wizard": QL.g,
+       heart: WL.g,
+       "heart-music-camera-bolt": ML.g,
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L364-L366` → after: `L389-L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L389-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L389-L392) · [Before (L364-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L364-L366)

```diff
-       "hourglass-clock": pz.e,
-       "hourglass-empty": az.e,
-       house: uy.f,
+       "hourglass-clock": TL.c,
+       "hourglass-empty": UL.i,
+       house: HS.g,
+       "ice-skate": VL.d,
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L369-L376` → after: `L395-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L395-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L395-L403) · [Before (L369-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L369-L376)

```diff
-       image: kz.f,
-       "image-slash": Gz.g,
-       "info-circle": Bz.f,
-       joystick: Zz.e,
-       "layer-group": Rz.f,
-       "left-from-bracket": Pz.g,
-       lightbulb: Wz.g,
-       link: dz.f,
+       image: kL.e,
+       "image-slash": mL.f,
+       "info-circle": oL.c,
+       joystick: IL.c,
+       "lamp-street": fL.e,
+       "layer-group": lL.g,
+       "left-from-bracket": KL.e,
+       lightbulb: cL.e,
+       link: eL.e,
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L378` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L405) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L378)

```diff
-       "list-squares": ez.e,
+       "list-squares": gL.h,
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L381-L382` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L408-L409) · [Before (L381-L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L381-L382)

```diff
-       lock: qz.h,
-       "lock-open": Oz.g,
+       lock: jL.c,
+       "lock-open": nL.c,
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L384-L387` → after: `L411-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L411-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L411-L415) · [Before (L384-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L384-L387)

```diff
-       male: rz.d,
-       "map-marker-check": uz.f,
-       "map-marker-times": fz.e,
-       "map-marker-xmark": iz.e,
+       male: DL.g,
+       "map-marker-check": wL.d,
+       "map-marker-times": ZL.d,
+       "map-marker-xmark": dL.h,
+       "masks-theater": aL.d,
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L389-L394` → after: `L417-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L417-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L417-L423) · [Before (L389-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L389-L394)

```diff
-       "minus-square": Mz.e,
-       moon: vz.d,
-       mouse: Vz.f,
-       music: sz.c,
-       "music-slash": nz.h,
-       navicon: mz.d,
+       "minus-square": JL.h,
+       moon: iL.g,
+       mouse: pL.c,
+       "mug-hot": yL.d,
+       music: HA.h,
+       "music-slash": BA.i,
+       navicon: LA.f,
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L396-L397` → after: `L425-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L425-L426) · [Before (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L396-L397)

```diff
-       pants: xz.e,
-       "party-horn": Jz.e,
+       pants: rA.g,
+       "party-horn": SA.g,
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L399-L400` → after: `L428-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L428-L429) · [Before (L399-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L399-L400)

```diff
-       pause: Kz.g,
-       paw: bz.e,
+       pause: tA.d,
+       paw: zA.g,
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L402` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L431) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L402)

```diff
-       "pen-field": hz.g,
+       "pen-field": EA.f,
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L405-L412` → after: `L434-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L434-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L434-L441) · [Before (L405-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L405-L412)

```diff
-       "person-arrow-down-to-line": zc.g,
-       "person-arrow-up-from-line": cc.g,
-       "person-falling-burst": yc.e,
-       "person-military-pointing": Qc.c,
-       "person-skiing": Ac.f,
-       "person-running": Fc.f,
-       "person-walking": oc.h,
-       play: Dc.i,
+       "person-arrow-down-to-line": YA.e,
+       "person-arrow-up-from-line": uA.c,
+       "person-falling-burst": QA.g,
+       "person-military-pointing": WA.e,
+       "person-skiing": MA.g,
+       "person-running": xA.g,
+       "person-walking": vA.f,
+       play: PA.d,
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L414-L416` → after: `L443-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L443-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L443-L445) · [Before (L414-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L414-L416)

```diff
-       "plus-circle": Yc.e,
-       "power-off": Nc.e,
-       rainbow: Ic.h,
+       "plus-circle": UA.d,
+       "power-off": VA.c,
+       rainbow: OA.f,
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L418-L420` → after: `L447-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L447-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L447-L449) · [Before (L418-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L418-L420)

```diff
-       recycle: ac.f,
-       "redo-alt": tc.d,
-       refresh: gc.d,
+       recycle: kA.d,
+       "redo-alt": mA.f,
+       refresh: oA.g,
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L422-L424` → after: `L451-L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L451-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L451-L453) · [Before (L422-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L422-L424)

```diff
-       "rocket-launch": Gc.e,
-       "rotate-forward": Bc.f,
-       "rotate-left": Zc.h,
+       "rocket-launch": fA.c,
+       "rotate-forward": lA.e,
+       "rotate-left": KA.f,
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L429-L430` → after: `L459-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L459-L460) · [Before (L429-L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L429-L430)

```diff
-       "shield-alt": Lc.i,
-       "shield-blank": ec.e,
+       "shield-alt": RA.d,
+       "shield-blank": jA.f,
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L432-L439` → after: `L462-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L462-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L462-L470) · [Before (L432-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L432-L439)

```diff
-       shirt: wc.c,
-       shoe: qc.c,
-       "shopping-cart": Oc.h,
-       "sign-out-alt": Sc.i,
-       skull: rc.e,
-       smile: uc.f,
-       snowflake: fc.f,
-       snowman: ic.i,
+       shirt: FA.f,
+       shoe: DA.g,
+       "shopping-cart": wA.g,
+       "sign-out-alt": ZA.e,
+       skull: dA.f,
+       smile: aA.h,
+       snooze: sA.c,
+       snowflake: JA.i,
+       snowman: iA.f,
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L443` → after: `L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L474) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L443)

```diff
-       star: sc.d,
+       star: Lr.e,
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L445-L452` → after: `L476-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L476-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L476-L485) · [Before (L445-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L445-L452)

```diff
-       store: nc.g,
-       subtract: mc.c,
-       "sun-bright": lc.c,
-       swords: xc.d,
-       sync: Jc.e,
-       "t-shirt": ry.b,
-       "tachometer-alt": jc.e,
-       "tachometer-alt-fast": Kc.e,
+       stopwatch: Ar.h,
+       store: rr.f,
+       subtract: Sr.h,
+       "sun-bright": hr.h,
+       swords: tr.g,
+       sync: zr.g,
+       "t-shirt": yr.e,
+       "tachometer-alt": Cr.f,
+       "tachometer-alt-fast": Er.d,
+       "teddy-bear": Xr.e,
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L457-L466` → after: `L491-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L491-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L491-L500) · [Before (L457-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L457-L466)

```diff
-       trophy: Xy.e,
-       truck: zy.f,
-       tshirt: ry.e,
-       "up-from-bracket": cy.h,
-       upload: yy.f,
-       user: Qy.e,
-       "user-astronaut": Ay.e,
-       "user-check": Fy.i,
-       "user-clock": oy.g,
-       "user-friends": Dy.f,
+       trophy: Mr.c,
+       truck: xr.e,
+       tshirt: yr.i,
+       "up-from-bracket": vr.g,
+       upload: Pr.g,
+       user: Tr.g,
+       "user-astronaut": Ur.h,
+       "user-check": Vr.e,
+       "user-clock": Or.f,
+       "user-friends": br.h,
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L471-L474` → after: `L506-L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L506-L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L506-L510) · [Before (L471-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L471-L474)

```diff
-       "user-slash": py.h,
-       "user-unlock": ay.f,
-       "users-crown": ty.d,
-       "users-gear": gy.f,
+       "user-secret": lr.e,
+       "user-slash": Kr.f,
+       "user-unlock": cr.h,
+       "users-crown": er.e,
+       "users-gear": qr.g,
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L476` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L512) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L476)

```diff
-       "video-camera": Gy.d,
+       "video-camera": Nr.c,
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L478` → after: `L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L514) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L478)

```diff
-       "volume-down": Zy.g,
+       "volume-down": jr.f,
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L480-L481` → after: `L516-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L516-L517) · [Before (L480-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L480-L481)

```diff
-       "volume-medium": Py.d,
-       "volume-slash": Wy.e,
+       "volume-medium": Fr.f,
+       "volume-slash": Dr.d,
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L484` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L520) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L484)

```diff
-       "wifi-3": ey.f,
+       "wifi-3": dr.e,
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/icons-solid.js` (Changed code · before: `L486-L489` → after: `L522-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-1ee9f1abf508da867c7a9aef677d980b2d6e531257e1be07280602f44e66df65) · [After (L522-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L522-L525) · [Before (L486-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/icons-solid.js#L486-L489)

```diff
-       wrench: wy.d,
-       x: qy.h,
-       xmark: Oy.e,
-       zap: Sy.d
+       wrench: sr.g,
+       x: Jr.g,
+       xmark: ir.c,
+       zap: pr.f
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (fecih8.fbb4bdb3 → cwj32u.ae3e40c2)

- **File**: `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (1732 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L4)

```diff
-   53839: (UU, XU, zU) => {
+   54623: (HH, BH, LH) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L6-L1730` → after: `L6-L1730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L6-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L6-L1730) · [Before (L6-L1730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L6-L1730)

```diff
-       "./67.png": 53841,
-       "./67_projectile_base.png": 53847,
-       "./67_projectile_boosted.png": 53850,
-       "./AK-47.png": 53853,
-       "./AWP.png": 53859,
-       "./Block-19.png": 53865,
-       "./DMR.png": 53867,
-       "./Deagle.png": 53874,
-       "./Double-barreled.png": 53881,
-       "./FMR.png": 53889,
-       "./GPMG.png": 53894,
-       "./M16.png": 53901,
-       "./M1911.png": 53910,
-       "./MP40.png": 53915,
-       "./Mini Izu.png": 53919,
-       "./Minigun.png": 53921,
- ... (1709 more removed lines; see GitHub link above)
+       "./67.png": 54626,
+       "./67_projectile_base.png": 54630,
+       "./67_projectile_boosted.png": 54633,
+       "./AK-47.png": 54636,
+       "./AWP.png": 54643,
+       "./Block-19.png": 54646,
+       "./DMR.png": 54654,
+       "./Deagle.png": 54656,
+       "./Double-barreled.png": 54665,
+       "./FMR.png": 54669,
+       "./GPMG.png": 54673,
+       "./M16.png": 54676,
+       "./M1911.png": 54682,
+       "./MP40.png": 54686,
+       "./Mini Izu.png": 54689,
+       "./Minigun.png": 54696,
+ ... (1709 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1747` → after: `L1747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1747) · [Before (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1747)

```diff
-     }, yU.resolve = QU, UU.exports = yU, yU.id = 53839
+     }, rH.resolve = SH, HH.exports = rH, rH.id = 54623
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1749` → after: `L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1749) · [Before (L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1749)

```diff
-   53836: (UU, XU, zU) => {
+   54619: (HH, BH, LH) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1769` → after: `L1769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1769) · [Before (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1769)

```diff
-       return null !== (XU = oU.get(UU)) && void 0 !== XU ? XU : ""
+       return null !== (BH = zH.get(HH)) && void 0 !== BH ? BH : ""
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1774` → after: `L1774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1774) · [Before (L1774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1774)

```diff
-       return null === XU ? null : "" === XU ? zU(53549) : zU(53839)(`./${XU}.png`)
+       return null === BH ? null : "" === BH ? LH(54384) : LH(54623)(`./${BH}.png`)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1777` → after: `L1777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1777) · [Before (L1777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1777)

```diff
-   53841: (UU, XU, zU) => {
+   54626: (HH, BH, LH) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1780` → after: `L1780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1780) · [Before (L1780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1780)

```diff
-   53847: (UU, XU, zU) => {
+   54630: (HH, BH, LH) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1783` → after: `L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1783) · [Before (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1783)

```diff
-   53850: (UU, XU, zU) => {
+   54633: (HH, BH, LH) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1786` → after: `L1786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1786) · [Before (L1786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1786)

```diff
-   53853: (UU, XU, zU) => {
+   54636: (HH, BH, LH) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1789` → after: `L1789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1789) · [Before (L1789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1789)

```diff
-   53859: (UU, XU, zU) => {
+   54643: (HH, BH, LH) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1792` → after: `L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1792) · [Before (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1792)

```diff
-   53865: (UU, XU, zU) => {
+   54646: (HH, BH, LH) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1795` → after: `L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1795) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1795)

```diff
-   53867: (UU, XU, zU) => {
+   54654: (HH, BH, LH) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1798` → after: `L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1798) · [Before (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1798)

```diff
-   53874: (UU, XU, zU) => {
+   54656: (HH, BH, LH) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1801` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1801) · [Before (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1801)

```diff
-   53881: (UU, XU, zU) => {
+   54665: (HH, BH, LH) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1804` → after: `L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1804) · [Before (L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1804)

```diff
-   53889: (UU, XU, zU) => {
+   54669: (HH, BH, LH) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1807` → after: `L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1807) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1807)

```diff
-   53894: (UU, XU, zU) => {
+   54673: (HH, BH, LH) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1810)

```diff
-   53901: (UU, XU, zU) => {
+   54676: (HH, BH, LH) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1813` → after: `L1813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1813) · [Before (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1813)

```diff
-   53910: (UU, XU, zU) => {
+   54682: (HH, BH, LH) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1816` → after: `L1816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1816) · [Before (L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1816)

```diff
-   53915: (UU, XU, zU) => {
+   54686: (HH, BH, LH) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1819` → after: `L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1819) · [Before (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1819)

```diff
-   53919: (UU, XU, zU) => {
+   54689: (HH, BH, LH) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1822` → after: `L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1822) · [Before (L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1822)

```diff
-   53921: (UU, XU, zU) => {
+   54696: (HH, BH, LH) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1825` → after: `L1825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1825) · [Before (L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1825)

```diff
-   53926: (UU, XU, zU) => {
+   54705: (HH, BH, LH) => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1828` → after: `L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1828) · [Before (L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1828)

```diff
-   53929: (UU, XU, zU) => {
+   54707: (HH, BH, LH) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1831` → after: `L1831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1831) · [Before (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1831)

```diff
-   53934: (UU, XU, zU) => {
+   54715: (HH, BH, LH) => {
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1834` → after: `L1834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1834) · [Before (L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1834)

```diff
-   53943: (UU, XU, zU) => {
+   54723: (HH, BH, LH) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1837` → after: `L1837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1837) · [Before (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1837)

```diff
-   53948: (UU, XU, zU) => {
+   54726: (HH, BH, LH) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1840` → after: `L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1840) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1840)

```diff
-   53951: (UU, XU, zU) => {
+   54733: (HH, BH, LH) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1843` → after: `L1843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1843) · [Before (L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1843)

```diff
-   53959: (UU, XU, zU) => {
+   54738: (HH, BH, LH) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1846` → after: `L1846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1846) · [Before (L1846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1846)

```diff
-   53963: (UU, XU, zU) => {
+   54745: (HH, BH, LH) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1849` → after: `L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1849) · [Before (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1849)

```diff
-   53965: (UU, XU, zU) => {
+   54753: (HH, BH, LH) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1852` → after: `L1852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1852) · [Before (L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1852)

```diff
-   53971: (UU, XU, zU) => {
+   54755: (HH, BH, LH) => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1855` → after: `L1855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1855) · [Before (L1855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1855)

```diff
-   53973: (UU, XU, zU) => {
+   54759: (HH, BH, LH) => {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1858` → after: `L1858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1858) · [Before (L1858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1858)

```diff
-   53979: (UU, XU, zU) => {
+   54764: (HH, BH, LH) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1861` → after: `L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1861) · [Before (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1861)

```diff
-   53986: (UU, XU, zU) => {
+   54772: (HH, BH, LH) => {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1864` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1864) · [Before (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1864)

```diff
-   53995: (UU, XU, zU) => {
+   54779: (HH, BH, LH) => {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1867` → after: `L1867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1867) · [Before (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1867)

```diff
-   53999: (UU, XU, zU) => {
+   54784: (HH, BH, LH) => {
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1870` → after: `L1870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1870) · [Before (L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1870)

```diff
-   54005: (UU, XU, zU) => {
+   54792: (HH, BH, LH) => {
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1873` → after: `L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1873) · [Before (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1873)

```diff
-   54013: (UU, XU, zU) => {
+   54801: (HH, BH, LH) => {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1876` → after: `L1876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1876) · [Before (L1876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1876)

```diff
-   54022: (UU, XU, zU) => {
+   54809: (HH, BH, LH) => {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1879` → after: `L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1879) · [Before (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1879)

```diff
-   54029: (UU, XU, zU) => {
+   54812: (HH, BH, LH) => {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1882` → after: `L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1882) · [Before (L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1882)

```diff
-   54032: (UU, XU, zU) => {
+   54821: (HH, BH, LH) => {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1885` → after: `L1885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1885) · [Before (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1885)

```diff
-   54040: (UU, XU, zU) => {
+   54824: (HH, BH, LH) => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1888` → after: `L1888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1888) · [Before (L1888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1888)

```diff
-   54043: (UU, XU, zU) => {
+   54833: (HH, BH, LH) => {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1891` → after: `L1891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1891) · [Before (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1891)

```diff
-   54052: (UU, XU, zU) => {
+   54838: (HH, BH, LH) => {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1894` → after: `L1894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1894) · [Before (L1894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1894)

```diff
-   54058: (UU, XU, zU) => {
+   54845: (HH, BH, LH) => {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1897` → after: `L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1897) · [Before (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1897)

```diff
-   54067: (UU, XU, zU) => {
+   54848: (HH, BH, LH) => {
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1900` → after: `L1900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1900) · [Before (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1900)

```diff
-   54071: (UU, XU, zU) => {
+   54853: (HH, BH, LH) => {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1903` → after: `L1903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1903) · [Before (L1903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1903)

```diff
-   54074: (UU, XU, zU) => {
+   54859: (HH, BH, LH) => {
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1906` → after: `L1906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1906) · [Before (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1906)

```diff
-   54078: (UU, XU, zU) => {
+   54862: (HH, BH, LH) => {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1909` → after: `L1909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1909) · [Before (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1909)

```diff
-   54087: (UU, XU, zU) => {
+   54865: (HH, BH, LH) => {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1912` → after: `L1912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1912) · [Before (L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1912)

```diff
-   54090: (UU, XU, zU) => {
+   54871: (HH, BH, LH) => {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1915` → after: `L1915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1915) · [Before (L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1915)

```diff
-   54096: (UU, XU, zU) => {
+   54873: (HH, BH, LH) => {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1918` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1918) · [Before (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1918)

```diff
-   54100: (UU, XU, zU) => {
+   54878: (HH, BH, LH) => {
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1921` → after: `L1921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1921) · [Before (L1921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1921)

```diff
-   54106: (UU, XU, zU) => {
+   54887: (HH, BH, LH) => {
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1924` → after: `L1924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1924) · [Before (L1924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1924)

```diff
-   54110: (UU, XU, zU) => {
+   54889: (HH, BH, LH) => {
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1927` → after: `L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1927) · [Before (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1927)

```diff
-   54115: (UU, XU, zU) => {
+   54894: (HH, BH, LH) => {
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1930` → after: `L1930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1930) · [Before (L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1930)

```diff
-   54122: (UU, XU, zU) => {
+   54900: (HH, BH, LH) => {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1933` → after: `L1933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1933) · [Before (L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1933)

```diff
-   54124: (UU, XU, zU) => {
+   54907: (HH, BH, LH) => {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1936` → after: `L1936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1936) · [Before (L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1936)

```diff
-   54128: (UU, XU, zU) => {
+   54909: (HH, BH, LH) => {
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1939` → after: `L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1939) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1939)

```diff
-   54131: (UU, XU, zU) => {
+   54914: (HH, BH, LH) => {
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1942` → after: `L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1942) · [Before (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1942)

```diff
-   54140: (UU, XU, zU) => {
+   54919: (HH, BH, LH) => {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1945` → after: `L1945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1945) · [Before (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1945)

```diff
-   54143: (UU, XU, zU) => {
+   54928: (HH, BH, LH) => {
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1948` → after: `L1948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1948) · [Before (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1948)

```diff
-   54146: (UU, XU, zU) => {
+   54935: (HH, BH, LH) => {
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1951` → after: `L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1951) · [Before (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1951)

```diff
-   54155: (UU, XU, zU) => {
+   54941: (HH, BH, LH) => {
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1954` → after: `L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1954) · [Before (L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1954)

```diff
-   54159: (UU, XU, zU) => {
+   54945: (HH, BH, LH) => {
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1957` → after: `L1957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1957) · [Before (L1957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1957)

```diff
-   54168: (UU, XU, zU) => {
+   54953: (HH, BH, LH) => {
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1960` → after: `L1960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1960) · [Before (L1960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1960)

```diff
-   54176: (UU, XU, zU) => {
+   54955: (HH, BH, LH) => {
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1963` → after: `L1963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1963) · [Before (L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1963)

```diff
-   54183: (UU, XU, zU) => {
+   54957: (HH, BH, LH) => {
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1966` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1966) · [Before (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1966)

```diff
-   54188: (UU, XU, zU) => {
+   54966: (HH, BH, LH) => {
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1969` → after: `L1969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1969) · [Before (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1969)

```diff
-   54197: (UU, XU, zU) => {
+   54971: (HH, BH, LH) => {
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1972` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1972) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1972)

```diff
-   54201: (UU, XU, zU) => {
+   54979: (HH, BH, LH) => {
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1975` → after: `L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1975) · [Before (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1975)

```diff
-   54203: (UU, XU, zU) => {
+   54987: (HH, BH, LH) => {
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1978` → after: `L1978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1978) · [Before (L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1978)

```diff
-   54205: (UU, XU, zU) => {
+   54990: (HH, BH, LH) => {
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1981` → after: `L1981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1981) · [Before (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1981)

```diff
-   54214: (UU, XU, zU) => {
+   54993: (HH, BH, LH) => {
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1984` → after: `L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1984) · [Before (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1984)

```diff
-   54219: (UU, XU, zU) => {
+   55001: (HH, BH, LH) => {
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1987` → after: `L1987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1987) · [Before (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1987)

```diff
-   54224: (UU, XU, zU) => {
+   55007: (HH, BH, LH) => {
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1990` → after: `L1990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1990) · [Before (L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1990)

```diff
-   54232: (UU, XU, zU) => {
+   55010: (HH, BH, LH) => {
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1993` → after: `L1993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1993) · [Before (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1993)

```diff
-   54234: (UU, XU, zU) => {
+   55013: (HH, BH, LH) => {
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1996` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1996) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1996)

```diff
-   54240: (UU, XU, zU) => {
+   55016: (HH, BH, LH) => {
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L1999` → after: `L1999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1999) · [Before (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L1999)

```diff
-   54248: (UU, XU, zU) => {
+   55024: (HH, BH, LH) => {
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2002` → after: `L2002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2002) · [Before (L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2002)

```diff
-   54251: (UU, XU, zU) => {
+   55028: (HH, BH, LH) => {
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2005` → after: `L2005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2005) · [Before (L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2005)

```diff
-   54259: (UU, XU, zU) => {
+   55030: (HH, BH, LH) => {
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2008` → after: `L2008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2008) · [Before (L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2008)

```diff
-   54266: (UU, XU, zU) => {
+   55034: (HH, BH, LH) => {
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2011` → after: `L2011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2011) · [Before (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2011)

```diff
-   54273: (UU, XU, zU) => {
+   55038: (HH, BH, LH) => {
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2014` → after: `L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2014) · [Before (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2014)

```diff
-   54281: (UU, XU, zU) => {
+   55047: (HH, BH, LH) => {
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2017` → after: `L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2017) · [Before (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2017)

```diff
-   54283: (UU, XU, zU) => {
+   55053: (HH, BH, LH) => {
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2020` → after: `L2020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2020) · [Before (L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2020)

```diff
-   54287: (UU, XU, zU) => {
+   55060: (HH, BH, LH) => {
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2023` → after: `L2023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2023) · [Before (L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2023)

```diff
-   54295: (UU, XU, zU) => {
+   55063: (HH, BH, LH) => {
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2026` → after: `L2026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2026) · [Before (L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2026)

```diff
-   54303: (UU, XU, zU) => {
+   55071: (HH, BH, LH) => {
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2029` → after: `L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2029) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2029)

```diff
-   54311: (UU, XU, zU) => {
+   55077: (HH, BH, LH) => {
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2032` → after: `L2032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2032) · [Before (L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2032)

```diff
-   54317: (UU, XU, zU) => {
+   55079: (HH, BH, LH) => {
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2035` → after: `L2035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2035) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2035)

```diff
-   54322: (UU, XU, zU) => {
+   55082: (HH, BH, LH) => {
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2038` → after: `L2038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2038) · [Before (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2038)

```diff
-   54324: (UU, XU, zU) => {
+   55091: (HH, BH, LH) => {
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2041` → after: `L2041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2041) · [Before (L2041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2041)

```diff
-   54329: (UU, XU, zU) => {
+   55093: (HH, BH, LH) => {
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2044` → after: `L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2044) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2044)

```diff
-   54333: (UU, XU, zU) => {
+   55100: (HH, BH, LH) => {
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2047` → after: `L2047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2047) · [Before (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2047)

```diff
-   54341: (UU, XU, zU) => {
+   55103: (HH, BH, LH) => {
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2050` → after: `L2050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2050) · [Before (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2050)

```diff
-   54348: (UU, XU, zU) => {
+   55111: (HH, BH, LH) => {
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2053` → after: `L2053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2053) · [Before (L2053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2053)

```diff
-   54352: (UU, XU, zU) => {
+   55115: (HH, BH, LH) => {
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2056` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2056) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2056)

```diff
-   54358: (UU, XU, zU) => {
+   55119: (HH, BH, LH) => {
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2059` → after: `L2059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2059) · [Before (L2059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2059)

```diff
-   54367: (UU, XU, zU) => {
+   55121: (HH, BH, LH) => {
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2062` → after: `L2062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2062) · [Before (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2062)

```diff
-   54376: (UU, XU, zU) => {
+   55123: (HH, BH, LH) => {
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2065` → after: `L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2065) · [Before (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2065)

```diff
-   54384: (UU, XU, zU) => {
+   55128: (HH, BH, LH) => {
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2068` → after: `L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2068) · [Before (L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2068)

```diff
-   54391: (UU, XU, zU) => {
+   55130: (HH, BH, LH) => {
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2071` → after: `L2071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2071) · [Before (L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2071)

```diff
-   54395: (UU, XU, zU) => {
+   55136: (HH, BH, LH) => {
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2074` → after: `L2074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2074) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2074)

```diff
-   54402: (UU, XU, zU) => {
+   55144: (HH, BH, LH) => {
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2077` → after: `L2077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2077) · [Before (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2077)

```diff
-   54404: (UU, XU, zU) => {
+   55151: (HH, BH, LH) => {
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2080` → after: `L2080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2080) · [Before (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2080)

```diff
-   54406: (UU, XU, zU) => {
+   55160: (HH, BH, LH) => {
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2083` → after: `L2083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2083) · [Before (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2083)

```diff
-   54408: (UU, XU, zU) => {
+   55163: (HH, BH, LH) => {
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2086` → after: `L2086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2086) · [Before (L2086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2086)

```diff
-   54410: (UU, XU, zU) => {
+   55170: (HH, BH, LH) => {
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2089` → after: `L2089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2089) · [Before (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2089)

```diff
-   54419: (UU, XU, zU) => {
+   55172: (HH, BH, LH) => {
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2092` → after: `L2092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2092) · [Before (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2092)

```diff
-   54428: (UU, XU, zU) => {
+   55174: (HH, BH, LH) => {
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2095` → after: `L2095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2095) · [Before (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2095)

```diff
-   54433: (UU, XU, zU) => {
+   55183: (HH, BH, LH) => {
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2098` → after: `L2098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2098) · [Before (L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2098)

```diff
-   54439: (UU, XU, zU) => {
+   55186: (HH, BH, LH) => {
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2101` → after: `L2101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2101) · [Before (L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2101)

```diff
-   54444: (UU, XU, zU) => {
+   55192: (HH, BH, LH) => {
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2104` → after: `L2104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2104) · [Before (L2104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2104)

```diff
-   54446: (UU, XU, zU) => {
+   55197: (HH, BH, LH) => {
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2107` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2107) · [Before (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2107)

```diff
-   54451: (UU, XU, zU) => {
+   55206: (HH, BH, LH) => {
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2110` → after: `L2110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2110) · [Before (L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2110)

```diff
-   54454: (UU, XU, zU) => {
+   55211: (HH, BH, LH) => {
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2113` → after: `L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2113) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2113)

```diff
-   54461: (UU, XU, zU) => {
+   55213: (HH, BH, LH) => {
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2116` → after: `L2116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2116) · [Before (L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2116)

```diff
-   54469: (UU, XU, zU) => {
+   55220: (HH, BH, LH) => {
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2119` → after: `L2119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2119) · [Before (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2119)

```diff
-   54476: (UU, XU, zU) => {
+   55228: (HH, BH, LH) => {
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2122` → after: `L2122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2122) · [Before (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2122)

```diff
-   54484: (UU, XU, zU) => {
+   55236: (HH, BH, LH) => {
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2125` → after: `L2125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2125) · [Before (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2125)

```diff
-   54487: (UU, XU, zU) => {
+   55242: (HH, BH, LH) => {
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2128` → after: `L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2128) · [Before (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2128)

```diff
-   54494: (UU, XU, zU) => {
+   55250: (HH, BH, LH) => {
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2131` → after: `L2131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2131) · [Before (L2131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2131)

```diff
-   54496: (UU, XU, zU) => {
+   55253: (HH, BH, LH) => {
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2134` → after: `L2134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2134) · [Before (L2134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2134)

```diff
-   54504: (UU, XU, zU) => {
+   55256: (HH, BH, LH) => {
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2137` → after: `L2137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2137) · [Before (L2137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2137)

```diff
-   54512: (UU, XU, zU) => {
+   55259: (HH, BH, LH) => {
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2140` → after: `L2140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2140) · [Before (L2140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2140)

```diff
-   54518: (UU, XU, zU) => {
+   55262: (HH, BH, LH) => {
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2143` → after: `L2143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2143) · [Before (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2143)

```diff
-   54527: (UU, XU, zU) => {
+   55265: (HH, BH, LH) => {
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2146` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2146) · [Before (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2146)

```diff
-   54534: (UU, XU, zU) => {
+   55274: (HH, BH, LH) => {
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2149` → after: `L2149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2149) · [Before (L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2149)

```diff
-   54540: (UU, XU, zU) => {
+   55276: (HH, BH, LH) => {
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2152` → after: `L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2152) · [Before (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2152)

```diff
-   54545: (UU, XU, zU) => {
+   55285: (HH, BH, LH) => {
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2155` → after: `L2155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2155) · [Before (L2155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2155)

```diff
-   54548: (UU, XU, zU) => {
+   55288: (HH, BH, LH) => {
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2158` → after: `L2158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2158) · [Before (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2158)

```diff
-   54556: (UU, XU, zU) => {
+   55291: (HH, BH, LH) => {
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2161` → after: `L2161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2161) · [Before (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2161)

```diff
-   54564: (UU, XU, zU) => {
+   55299: (HH, BH, LH) => {
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2164` → after: `L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2164) · [Before (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2164)

```diff
-   54568: (UU, XU, zU) => {
+   55305: (HH, BH, LH) => {
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2167` → after: `L2167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2167) · [Before (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2167)

```diff
-   54571: (UU, XU, zU) => {
+   55310: (HH, BH, LH) => {
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2170` → after: `L2170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2170) · [Before (L2170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2170)

```diff
-   54578: (UU, XU, zU) => {
+   55315: (HH, BH, LH) => {
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2173` → after: `L2173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2173) · [Before (L2173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2173)

```diff
-   54586: (UU, XU, zU) => {
+   55323: (HH, BH, LH) => {
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2176` → after: `L2176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2176) · [Before (L2176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2176)

```diff
-   54593: (UU, XU, zU) => {
+   55326: (HH, BH, LH) => {
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2179` → after: `L2179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2179) · [Before (L2179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2179)

```diff
-   54597: (UU, XU, zU) => {
+   55335: (HH, BH, LH) => {
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2182` → after: `L2182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2182) · [Before (L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2182)

```diff
-   54599: (UU, XU, zU) => {
+   55339: (HH, BH, LH) => {
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2185` → after: `L2185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2185) · [Before (L2185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2185)

```diff
-   54604: (UU, XU, zU) => {
+   55342: (HH, BH, LH) => {
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2188` → after: `L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2188) · [Before (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2188)

```diff
-   54609: (UU, XU, zU) => {
+   55351: (HH, BH, LH) => {
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2191` → after: `L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2191) · [Before (L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2191)

```diff
-   54617: (UU, XU, zU) => {
+   55357: (HH, BH, LH) => {
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2194` → after: `L2194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2194) · [Before (L2194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2194)

```diff
-   54623: (UU, XU, zU) => {
+   55364: (HH, BH, LH) => {
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2197` → after: `L2197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2197) · [Before (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2197)

```diff
-   54625: (UU, XU, zU) => {
+   55370: (HH, BH, LH) => {
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2200` → after: `L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2200) · [Before (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2200)

```diff
-   54628: (UU, XU, zU) => {
+   55372: (HH, BH, LH) => {
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2203` → after: `L2203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2203) · [Before (L2203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2203)

```diff
-   54633: (UU, XU, zU) => {
+   55374: (HH, BH, LH) => {
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2206` → after: `L2206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2206) · [Before (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2206)

```diff
-   54635: (UU, XU, zU) => {
+   55381: (HH, BH, LH) => {
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2209` → after: `L2209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2209) · [Before (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2209)

```diff
-   54643: (UU, XU, zU) => {
+   55390: (HH, BH, LH) => {
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2212` → after: `L2212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2212) · [Before (L2212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2212)

```diff
-   54648: (UU, XU, zU) => {
+   55395: (HH, BH, LH) => {
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2215` → after: `L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2215) · [Before (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2215)

```diff
-   54656: (UU, XU, zU) => {
+   55397: (HH, BH, LH) => {
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2218` → after: `L2218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2218) · [Before (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2218)

```diff
-   54664: (UU, XU, zU) => {
+   55403: (HH, BH, LH) => {
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2221` → after: `L2221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2221) · [Before (L2221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2221)

```diff
-   54673: (UU, XU, zU) => {
+   55405: (HH, BH, LH) => {
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2224` → after: `L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2224) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2224)

```diff
-   54682: (UU, XU, zU) => {
+   55412: (HH, BH, LH) => {
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2227` → after: `L2227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2227) · [Before (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2227)

```diff
-   54684: (UU, XU, zU) => {
+   55421: (HH, BH, LH) => {
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2230` → after: `L2230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2230) · [Before (L2230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2230)

```diff
-   54686: (UU, XU, zU) => {
+   55429: (HH, BH, LH) => {
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2233` → after: `L2233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2233) · [Before (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2233)

```diff
-   54695: (UU, XU, zU) => {
+   55433: (HH, BH, LH) => {
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2236` → after: `L2236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2236) · [Before (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2236)

```diff
-   54704: (UU, XU, zU) => {
+   55440: (HH, BH, LH) => {
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2239` → after: `L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2239) · [Before (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2239)

```diff
-   54711: (UU, XU, zU) => {
+   55445: (HH, BH, LH) => {
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2242` → after: `L2242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2242) · [Before (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2242)

```diff
-   54714: (UU, XU, zU) => {
+   55447: (HH, BH, LH) => {
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2245` → after: `L2245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2245) · [Before (L2245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2245)

```diff
-   54716: (UU, XU, zU) => {
+   55455: (HH, BH, LH) => {
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2248` → after: `L2248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2248) · [Before (L2248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2248)

```diff
-   54720: (UU, XU, zU) => {
+   55462: (HH, BH, LH) => {
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2251` → after: `L2251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2251) · [Before (L2251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2251)

```diff
-   54726: (UU, XU, zU) => {
+   55467: (HH, BH, LH) => {
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2254` → after: `L2254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2254) · [Before (L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2254)

```diff
-   54735: (UU, XU, zU) => {
+   55471: (HH, BH, LH) => {
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2257` → after: `L2257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2257) · [Before (L2257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2257)

```diff
-   54741: (UU, XU, zU) => {
+   55480: (HH, BH, LH) => {
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2260` → after: `L2260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2260) · [Before (L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2260)

```diff
-   54745: (UU, XU, zU) => {
+   55487: (HH, BH, LH) => {
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2263)

```diff
-   54747: (UU, XU, zU) => {
+   55493: (HH, BH, LH) => {
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2266` → after: `L2266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2266) · [Before (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2266)

```diff
-   54750: (UU, XU, zU) => {
+   55496: (HH, BH, LH) => {
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2269` → after: `L2269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2269) · [Before (L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2269)

```diff
-   54756: (UU, XU, zU) => {
+   55500: (HH, BH, LH) => {
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2272` → after: `L2272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2272) · [Before (L2272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2272)

```diff
-   54759: (UU, XU, zU) => {
+   55502: (HH, BH, LH) => {
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2275` → after: `L2275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2275) · [Before (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2275)

```diff
-   54763: (UU, XU, zU) => {
+   55509: (HH, BH, LH) => {
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2278` → after: `L2278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2278) · [Before (L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2278)

```diff
-   54766: (UU, XU, zU) => {
+   55517: (HH, BH, LH) => {
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2281` → after: `L2281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2281) · [Before (L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2281)

```diff
-   54773: (UU, XU, zU) => {
+   55523: (HH, BH, LH) => {
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2284` → after: `L2284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2284) · [Before (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2284)

```diff
-   54777: (UU, XU, zU) => {
+   55529: (HH, BH, LH) => {
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2287` → after: `L2287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2287) · [Before (L2287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2287)

```diff
-   54783: (UU, XU, zU) => {
+   55538: (HH, BH, LH) => {
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2290` → after: `L2290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2290) · [Before (L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2290)

```diff
-   54788: (UU, XU, zU) => {
+   55541: (HH, BH, LH) => {
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2293` → after: `L2293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2293) · [Before (L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2293)

```diff
-   54796: (UU, XU, zU) => {
+   55550: (HH, BH, LH) => {
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2296` → after: `L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2296) · [Before (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2296)

```diff
-   54805: (UU, XU, zU) => {
+   55558: (HH, BH, LH) => {
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2299` → after: `L2299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2299) · [Before (L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2299)

```diff
-   54809: (UU, XU, zU) => {
+   55561: (HH, BH, LH) => {
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2302)

```diff
-   54816: (UU, XU, zU) => {
+   55564: (HH, BH, LH) => {
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2305` → after: `L2305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2305) · [Before (L2305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2305)

```diff
-   54818: (UU, XU, zU) => {
+   55572: (HH, BH, LH) => {
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2308` → after: `L2308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2308) · [Before (L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2308)

```diff
-   54824: (UU, XU, zU) => {
+   55574: (HH, BH, LH) => {
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2311` → after: `L2311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2311) · [Before (L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2311)

```diff
-   54830: (UU, XU, zU) => {
+   55583: (HH, BH, LH) => {
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2314` → after: `L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2314) · [Before (L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2314)

```diff
-   54832: (UU, XU, zU) => {
+   55589: (HH, BH, LH) => {
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2317` → after: `L2317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2317) · [Before (L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2317)

```diff
-   54841: (UU, XU, zU) => {
+   55595: (HH, BH, LH) => {
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2320` → after: `L2320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2320) · [Before (L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2320)

```diff
-   54845: (UU, XU, zU) => {
+   55604: (HH, BH, LH) => {
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2323` → after: `L2323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2323) · [Before (L2323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2323)

```diff
-   54847: (UU, XU, zU) => {
+   55612: (HH, BH, LH) => {
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2326` → after: `L2326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2326) · [Before (L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2326)

```diff
-   54851: (UU, XU, zU) => {
+   55618: (HH, BH, LH) => {
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2329` → after: `L2329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2329) · [Before (L2329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2329)

```diff
-   54854: (UU, XU, zU) => {
+   55621: (HH, BH, LH) => {
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2332` → after: `L2332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2332) · [Before (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2332)

```diff
-   54863: (UU, XU, zU) => {
+   55630: (HH, BH, LH) => {
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2335` → after: `L2335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2335) · [Before (L2335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2335)

```diff
-   54868: (UU, XU, zU) => {
+   55635: (HH, BH, LH) => {
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2338` → after: `L2338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2338) · [Before (L2338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2338)

```diff
-   54875: (UU, XU, zU) => {
+   55644: (HH, BH, LH) => {
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2341` → after: `L2341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2341) · [Before (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2341)

```diff
-   54884: (UU, XU, zU) => {
+   55646: (HH, BH, LH) => {
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2344` → after: `L2344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2344) · [Before (L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2344)

```diff
-   54886: (UU, XU, zU) => {
+   55649: (HH, BH, LH) => {
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2347` → after: `L2347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2347) · [Before (L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2347)

```diff
-   54888: (UU, XU, zU) => {
+   55652: (HH, BH, LH) => {
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2350` → after: `L2350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2350) · [Before (L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2350)

```diff
-   54890: (UU, XU, zU) => {
+   55661: (HH, BH, LH) => {
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2353` → after: `L2353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2353) · [Before (L2353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2353)

```diff
-   54897: (UU, XU, zU) => {
+   55669: (HH, BH, LH) => {
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2356` → after: `L2356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2356) · [Before (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2356)

```diff
-   54900: (UU, XU, zU) => {
+   55675: (HH, BH, LH) => {
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2359` → after: `L2359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2359) · [Before (L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2359)

```diff
-   54909: (UU, XU, zU) => {
+   55679: (HH, BH, LH) => {
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2362` → after: `L2362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2362) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2362)

```diff
-   54912: (UU, XU, zU) => {
+   55681: (HH, BH, LH) => {
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2365` → after: `L2365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2365) · [Before (L2365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2365)

```diff
-   54916: (UU, XU, zU) => {
+   55687: (HH, BH, LH) => {
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2368` → after: `L2368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2368) · [Before (L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2368)

```diff
-   54922: (UU, XU, zU) => {
+   55695: (HH, BH, LH) => {
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2371` → after: `L2371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2371) · [Before (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2371)

```diff
-   54925: (UU, XU, zU) => {
+   55698: (HH, BH, LH) => {
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2374` → after: `L2374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2374) · [Before (L2374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2374)

```diff
-   54930: (UU, XU, zU) => {
+   55703: (HH, BH, LH) => {
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2377` → after: `L2377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2377) · [Before (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2377)

```diff
-   54936: (UU, XU, zU) => {
+   55708: (HH, BH, LH) => {
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2380` → after: `L2380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2380) · [Before (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2380)

```diff
-   54945: (UU, XU, zU) => {
+   55713: (HH, BH, LH) => {
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2383` → after: `L2383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2383) · [Before (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2383)

```diff
-   54954: (UU, XU, zU) => {
+   55718: (HH, BH, LH) => {
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2386` → after: `L2386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2386) · [Before (L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2386)

```diff
-   54957: (UU, XU, zU) => {
+   55724: (HH, BH, LH) => {
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2389` → after: `L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2389) · [Before (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2389)

```diff
-   54960: (UU, XU, zU) => {
+   55730: (HH, BH, LH) => {
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2392` → after: `L2392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2392) · [Before (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2392)

```diff
-   54966: (UU, XU, zU) => {
+   55733: (HH, BH, LH) => {
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2395` → after: `L2395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2395) · [Before (L2395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2395)

```diff
-   54968: (UU, XU, zU) => {
+   55739: (HH, BH, LH) => {
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2398` → after: `L2398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2398) · [Before (L2398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2398)

```diff
-   54970: (UU, XU, zU) => {
+   55746: (HH, BH, LH) => {
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2401` → after: `L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2401) · [Before (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2401)

```diff
-   54973: (UU, XU, zU) => {
+   55748: (HH, BH, LH) => {
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2404` → after: `L2404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2404) · [Before (L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2404)

```diff
-   54979: (UU, XU, zU) => {
+   55750: (HH, BH, LH) => {
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2407` → after: `L2407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2407) · [Before (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2407)

```diff
-   54986: (UU, XU, zU) => {
+   55758: (HH, BH, LH) => {
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2410` → after: `L2410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2410) · [Before (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2410)

```diff
-   54994: (UU, XU, zU) => {
+   55763: (HH, BH, LH) => {
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2413` → after: `L2413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2413) · [Before (L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2413)

```diff
-   55003: (UU, XU, zU) => {
+   55768: (HH, BH, LH) => {
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2416` → after: `L2416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2416) · [Before (L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2416)

```diff
-   55009: (UU, XU, zU) => {
+   55770: (HH, BH, LH) => {
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2419` → after: `L2419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2419) · [Before (L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2419)

```diff
-   55015: (UU, XU, zU) => {
+   55772: (HH, BH, LH) => {
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2422` → after: `L2422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2422) · [Before (L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2422)

```diff
-   55024: (UU, XU, zU) => {
+   55781: (HH, BH, LH) => {
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2425` → after: `L2425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2425) · [Before (L2425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2425)

```diff
-   55027: (UU, XU, zU) => {
+   55783: (HH, BH, LH) => {
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2428` → after: `L2428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2428) · [Before (L2428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2428)

```diff
-   55030: (UU, XU, zU) => {
+   55788: (HH, BH, LH) => {
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2431` → after: `L2431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2431) · [Before (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2431)

```diff
-   55038: (UU, XU, zU) => {
+   55791: (HH, BH, LH) => {
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2434` → after: `L2434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2434) · [Before (L2434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2434)

```diff
-   55041: (UU, XU, zU) => {
+   55800: (HH, BH, LH) => {
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2437` → after: `L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2437) · [Before (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2437)

```diff
-   55043: (UU, XU, zU) => {
+   55805: (HH, BH, LH) => {
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2440` → after: `L2440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2440) · [Before (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2440)

```diff
-   55050: (UU, XU, zU) => {
+   55807: (HH, BH, LH) => {
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2443` → after: `L2443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2443) · [Before (L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2443)

```diff
-   55052: (UU, XU, zU) => {
+   55811: (HH, BH, LH) => {
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2446` → after: `L2446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2446) · [Before (L2446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2446)

```diff
-   55059: (UU, XU, zU) => {
+   55820: (HH, BH, LH) => {
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2449` → after: `L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2449) · [Before (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2449)

```diff
-   55064: (UU, XU, zU) => {
+   55825: (HH, BH, LH) => {
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2452` → after: `L2452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2452) · [Before (L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2452)

```diff
-   55070: (UU, XU, zU) => {
+   55833: (HH, BH, LH) => {
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2455` → after: `L2455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2455) · [Before (L2455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2455)

```diff
-   55078: (UU, XU, zU) => {
+   55836: (HH, BH, LH) => {
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2458` → after: `L2458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2458) · [Before (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2458)

```diff
-   55080: (UU, XU, zU) => {
+   55843: (HH, BH, LH) => {
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2461` → after: `L2461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2461) · [Before (L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2461)

```diff
-   55088: (UU, XU, zU) => {
+   55849: (HH, BH, LH) => {
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2464` → after: `L2464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2464) · [Before (L2464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2464)

```diff
-   55094: (UU, XU, zU) => {
+   55857: (HH, BH, LH) => {
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2467` → after: `L2467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2467) · [Before (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2467)

```diff
-   55097: (UU, XU, zU) => {
+   55862: (HH, BH, LH) => {
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2470` → after: `L2470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2470) · [Before (L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2470)

```diff
-   55102: (UU, XU, zU) => {
+   55865: (HH, BH, LH) => {
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2473` → after: `L2473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2473) · [Before (L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2473)

```diff
-   55106: (UU, XU, zU) => {
+   55867: (HH, BH, LH) => {
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2476` → after: `L2476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2476) · [Before (L2476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2476)

```diff
-   55109: (UU, XU, zU) => {
+   55875: (HH, BH, LH) => {
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2479` → after: `L2479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2479) · [Before (L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2479)

```diff
-   55115: (UU, XU, zU) => {
+   55883: (HH, BH, LH) => {
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2482` → after: `L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2482) · [Before (L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2482)

```diff
-   55118: (UU, XU, zU) => {
+   55885: (HH, BH, LH) => {
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2485` → after: `L2485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2485) · [Before (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2485)

```diff
-   55121: (UU, XU, zU) => {
+   55891: (HH, BH, LH) => {
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2488` → after: `L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2488) · [Before (L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2488)

```diff
-   55128: (UU, XU, zU) => {
+   55896: (HH, BH, LH) => {
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2491` → after: `L2491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2491) · [Before (L2491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2491)

```diff
-   55131: (UU, XU, zU) => {
+   55900: (HH, BH, LH) => {
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2494` → after: `L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2494) · [Before (L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2494)

```diff
-   55134: (UU, XU, zU) => {
+   55902: (HH, BH, LH) => {
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2497` → after: `L2497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2497) · [Before (L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2497)

```diff
-   55139: (UU, XU, zU) => {
+   55904: (HH, BH, LH) => {
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2500` → after: `L2500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2500) · [Before (L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2500)

```diff
-   55141: (UU, XU, zU) => {
+   55909: (HH, BH, LH) => {
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2503` → after: `L2503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2503) · [Before (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2503)

```diff
-   55149: (UU, XU, zU) => {
+   55913: (HH, BH, LH) => {
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2506` → after: `L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2506) · [Before (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2506)

```diff
-   55152: (UU, XU, zU) => {
+   55917: (HH, BH, LH) => {
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2509` → after: `L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2509) · [Before (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2509)

```diff
-   55161: (UU, XU, zU) => {
+   55923: (HH, BH, LH) => {
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2512` → after: `L2512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2512) · [Before (L2512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2512)

```diff
-   55166: (UU, XU, zU) => {
+   55932: (HH, BH, LH) => {
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2515` → after: `L2515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2515) · [Before (L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2515)

```diff
-   55175: (UU, XU, zU) => {
+   55935: (HH, BH, LH) => {
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2518` → after: `L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2518) · [Before (L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2518)

```diff
-   55184: (UU, XU, zU) => {
+   55937: (HH, BH, LH) => {
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2521` → after: `L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2521) · [Before (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2521)

```diff
-   55187: (UU, XU, zU) => {
+   55939: (HH, BH, LH) => {
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2524` → after: `L2524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2524) · [Before (L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2524)

```diff
-   55191: (UU, XU, zU) => {
+   55941: (HH, BH, LH) => {
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2527` → after: `L2527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2527) · [Before (L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2527)

```diff
-   55193: (UU, XU, zU) => {
+   55950: (HH, BH, LH) => {
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2530` → after: `L2530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2530) · [Before (L2530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2530)

```diff
-   55201: (UU, XU, zU) => {
+   55959: (HH, BH, LH) => {
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2533` → after: `L2533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2533) · [Before (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2533)

```diff
-   55210: (UU, XU, zU) => {
+   55966: (HH, BH, LH) => {
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2536` → after: `L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2536) · [Before (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2536)

```diff
-   55213: (UU, XU, zU) => {
+   55975: (HH, BH, LH) => {
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2539` → after: `L2539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2539) · [Before (L2539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2539)

```diff
-   55215: (UU, XU, zU) => {
+   55977: (HH, BH, LH) => {
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2542` → after: `L2542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2542) · [Before (L2542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2542)

```diff
-   55222: (UU, XU, zU) => {
+   55985: (HH, BH, LH) => {
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2545` → after: `L2545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2545) · [Before (L2545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2545)

```diff
-   55228: (UU, XU, zU) => {
+   55988: (HH, BH, LH) => {
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2548` → after: `L2548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2548) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2548)

```diff
-   55235: (UU, XU, zU) => {
+   55990: (HH, BH, LH) => {
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2551` → after: `L2551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2551) · [Before (L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2551)

```diff
-   55241: (UU, XU, zU) => {
+   55994: (HH, BH, LH) => {
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2554` → after: `L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2554) · [Before (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2554)

```diff
-   55250: (UU, XU, zU) => {
+   55997: (HH, BH, LH) => {
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2557` → after: `L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2557) · [Before (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2557)

```diff
-   55257: (UU, XU, zU) => {
+   56004: (HH, BH, LH) => {
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2560` → after: `L2560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2560) · [Before (L2560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2560)

```diff
-   55265: (UU, XU, zU) => {
+   56013: (HH, BH, LH) => {
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2563` → after: `L2563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2563) · [Before (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2563)

```diff
-   55271: (UU, XU, zU) => {
+   56015: (HH, BH, LH) => {
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2566` → after: `L2566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2566) · [Before (L2566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2566)

```diff
-   55277: (UU, XU, zU) => {
+   56020: (HH, BH, LH) => {
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2569` → after: `L2569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2569) · [Before (L2569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2569)

```diff
-   55285: (UU, XU, zU) => {
+   56023: (HH, BH, LH) => {
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2572` → after: `L2572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2572) · [Before (L2572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2572)

```diff
-   55294: (UU, XU, zU) => {
+   56030: (HH, BH, LH) => {
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2575` → after: `L2575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2575) · [Before (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2575)

```diff
-   55299: (UU, XU, zU) => {
+   56034: (HH, BH, LH) => {
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2578` → after: `L2578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2578) · [Before (L2578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2578)

```diff
-   55307: (UU, XU, zU) => {
+   56036: (HH, BH, LH) => {
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2581` → after: `L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2581) · [Before (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2581)

```diff
-   55309: (UU, XU, zU) => {
+   56039: (HH, BH, LH) => {
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2584` → after: `L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2584) · [Before (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2584)

```diff
-   55312: (UU, XU, zU) => {
+   56047: (HH, BH, LH) => {
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2587` → after: `L2587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2587) · [Before (L2587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2587)

```diff
-   55314: (UU, XU, zU) => {
+   56050: (HH, BH, LH) => {
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2590` → after: `L2590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2590) · [Before (L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2590)

```diff
-   55320: (UU, XU, zU) => {
+   56053: (HH, BH, LH) => {
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2593` → after: `L2593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2593) · [Before (L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2593)

```diff
-   55326: (UU, XU, zU) => {
+   56056: (HH, BH, LH) => {
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2596` → after: `L2596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2596) · [Before (L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2596)

```diff
-   55333: (UU, XU, zU) => {
+   56060: (HH, BH, LH) => {
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2599` → after: `L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2599) · [Before (L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2599)

```diff
-   55341: (UU, XU, zU) => {
+   56068: (HH, BH, LH) => {
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2602` → after: `L2602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2602) · [Before (L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2602)

```diff
-   55346: (UU, XU, zU) => {
+   56072: (HH, BH, LH) => {
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2605` → after: `L2605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2605) · [Before (L2605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2605)

```diff
-   55355: (UU, XU, zU) => {
+   56074: (HH, BH, LH) => {
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2608` → after: `L2608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2608) · [Before (L2608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2608)

```diff
-   55357: (UU, XU, zU) => {
+   56083: (HH, BH, LH) => {
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2611` → after: `L2611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2611) · [Before (L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2611)

```diff
-   55359: (UU, XU, zU) => {
+   56087: (HH, BH, LH) => {
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2614` → after: `L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2614) · [Before (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2614)

```diff
-   55361: (UU, XU, zU) => {
+   56093: (HH, BH, LH) => {
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2617` → after: `L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2617) · [Before (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2617)

```diff
-   55367: (UU, XU, zU) => {
+   56096: (HH, BH, LH) => {
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2620` → after: `L2620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2620) · [Before (L2620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2620)

```diff
-   55372: (UU, XU, zU) => {
+   56101: (HH, BH, LH) => {
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2623` → after: `L2623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2623) · [Before (L2623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2623)

```diff
-   55378: (UU, XU, zU) => {
+   56109: (HH, BH, LH) => {
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2626` → after: `L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2626) · [Before (L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2626)

```diff
-   55384: (UU, XU, zU) => {
+   56112: (HH, BH, LH) => {
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2629` → after: `L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2629) · [Before (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2629)

```diff
-   55392: (UU, XU, zU) => {
+   56118: (HH, BH, LH) => {
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2632` → after: `L2632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2632) · [Before (L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2632)

```diff
-   55400: (UU, XU, zU) => {
+   56120: (HH, BH, LH) => {
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2635` → after: `L2635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2635) · [Before (L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2635)

```diff
-   55406: (UU, XU, zU) => {
+   56128: (HH, BH, LH) => {
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2638` → after: `L2638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2638) · [Before (L2638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2638)

```diff
-   55413: (UU, XU, zU) => {
+   56132: (HH, BH, LH) => {
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2641` → after: `L2641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2641) · [Before (L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2641)

```diff
-   55415: (UU, XU, zU) => {
+   56140: (HH, BH, LH) => {
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2644` → after: `L2644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2644) · [Before (L2644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2644)

```diff
-   55420: (UU, XU, zU) => {
+   56146: (HH, BH, LH) => {
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2647` → after: `L2647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2647) · [Before (L2647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2647)

```diff
-   55426: (UU, XU, zU) => {
+   56155: (HH, BH, LH) => {
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/itemSprites.js` (Changed code · before: `L2650` → after: `L2650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bdR2650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c...build/preprod.bloxd.io/cwj32u.ae3e40c2#diff-f1e774d8792acce6e29f9a5d26351767de96105e5382e037d5d7d1a1601df0bd) · [After (L2650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/cwj32u.ae3e40c2/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2650) · [Before (L2650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/bc0c69f6c5736dd014eb5fe062b571c305cb6d5c/bundles/preprod.bloxd.io/chunks/js/itemSprites.js#L2650)

```diff
-   55435: (UU, XU, zU) => {
+   56158: (HH, BH, LH) => {
```
