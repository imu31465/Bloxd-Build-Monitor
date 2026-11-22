# Changed — Bundle Modifications Report (Part 037 / 047)

- **Updated at**: `2026-11-22T23:29 JST`
- **Part**: `37 / 47` (**410** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 036](part-036.md) · [Part 038 →](part-038.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderLite.js` (bqoxjr.2558012f → 3lwmg.ecbaa066 · continued)

- **File**: `bundles/bloxd.io/chunks/js/renderLite.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070)

#### 9. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L93-L95` → after: `L106-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L106-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L106-L109) · [Before (L93-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L93-L95)

```diff
-         this.frames = new eQ, this.events = new GQ, this.links = new AQ, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performance.now(), this.windows = 0, this.rendererLogged = !1, this.gridLogged = !1, this … [truncated]
-           this.restartWindow(performance.now())
-         }, this.fH = () => {
+         this.frames = new yk, this.events = new Lk, this.programLines = new lk, this.compileSummary = new wk("webgpu compiles"), this.hidden = new Uk.e, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performan … [truncated]
+           const kk = performance.now();
+           this.hidden.changed(kk), this.restartWindow(kk)
+         }, this.Px = () => {
```

#### 10. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L98` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L112) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L98)

```diff
-             qQ = (0, uQ.k)(),
+             fk = (0, Mk.g)(),
```

#### 11. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L107-L108` → after: `L121-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L121-L122) · [Before (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L107-L108)

```diff
-           const vQ = wQ.headerWord(DQ.F.GpuTimed),
-             HQ = wQ.headerWord(DQ.F.GpuFrameUs),
+           const Pk = ik.headerWord(bk.L.GpuTimed),
+             Kk = ik.headerWord(bk.L.GpuFrameUs),
```

#### 12. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L114` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L128) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L114)

```diff
-           const YQ = null !== (QQ = null === (FQ = (0, mQ.J)((0, LQ.B)())) || void 0 === FQ ? void 0 : FQ.cLQ()) && void 0 !== QQ ? QQ : 0;
+           const nk = null !== (kk = null === (ek = (0, mk.I)((0, Dk.H)())) || void 0 === ek ? void 0 : ek.Wik()) && void 0 !== kk ? kk : 0;
```

#### 13. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L117-L118` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L131-L132) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L117-L118)

```diff
-               LQ = [`${Math.round(wQ)}s: ${QQ.drawn} drawn (${(QQ.drawn/wQ).toFixed(1)}/s), ${QQ.paced} paced, ${QQ.frames-QQ.drawn-QQ.paced} skipped`, `gap max ${Math.round(QQ.gapMaxMs)} ms, ${QQ.longGaps} over 50 ms`, `render cpu ${QQ.drawn?(QQ.renderUs/QQ.drawn/1e3).toFixed(2) … [truncated]
-             null !== FQ.gpu && LQ.push(`gpu ${FQ.gpu.timed?(FQ.gpu.us/FQ.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${FQ.gpu.timed} timed`);
+               Dk = [`${Math.round(ik)}s: ${kk.drawn} drawn (${(kk.drawn/ik).toFixed(1)}/s), ${kk.paced} paced, ${kk.frames-kk.drawn-kk.paced} skipped`, `gap max ${Math.round(kk.gapMaxMs)} ms, ${kk.longGaps} over 50 ms`, `render cpu ${kk.drawn?(kk.renderUs/kk.drawn/1e3).toFixed(2) … [truncated]
+             null !== ek.gpu && Dk.push(`gpu ${ek.gpu.timed?(ek.gpu.us/ek.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${ek.gpu.timed} timed`);
```

#### 14. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L120-L122` → after: `L134-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L134-L136) · [Before (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L120-L122)

```diff
-             LQ.push(null === qQ ? "draws none yet" : `draws ${(0,kQ.b)(qQ)} (terrain ${qQ.terrainOpaque}+${qQ.terrainTransparent}, pack ${qQ.terrainPack}, meshes ${qQ.regular+qQ.thin+qQ.line+qQ.text}, sky ${qQ.earthSky+qQ.skyMeshes}, particles ${qQ.particles})`);
-             const oQ = null === FQ.gpuBytesBefore ? "" : ` (${FQ.gpuBytes>=FQ.gpuBytesBefore?"+":"-"}${MQ(Math.abs(FQ.gpuBytes-FQ.gpuBytesBefore))})`;
-             return LQ.push(`gpu mem ${MQ(FQ.gpuBytes)} MiB${oQ}`), LQ.push(`pending ${FQ.pending}`, "terrain " + (FQ.terrainDrawn ? "drawn" : "not drawn yet")), FQ.eventsUnlogged > 0 && LQ.push(`${FQ.eventsUnlogged} events unlogged`), LQ.join("; ")
+             Dk.push(null === fk ? "draws none yet" : `draws ${(0,rk.b)(fk)} (terrain ${fk.terrainOpaque}+${fk.terrainTransparent}, pack ${fk.terrainPack}, meshes ${fk.regular+fk.thin+fk.line+fk.text}, sky ${fk.earthSky+fk.skyMeshes}, particles ${fk.particles})`), null !== fk && f … [truncated]
+             const Sk = null === ek.gpuBytesBefore ? "" : ` (${ek.gpuBytes>=ek.gpuBytesBefore?"+":"-"}${Yk(Math.abs(ek.gpuBytes-ek.gpuBytesBefore))})`;
+             return Dk.push(`gpu mem ${Yk(ek.gpuBytes)} MiB${Sk}`), Dk.push(`pending ${ek.pending}`, "terrain " + (ek.terrainDrawn ? "drawn" : "not drawn yet")), ek.eventsUnlogged > 0 && Dk.push(`${ek.eventsUnlogged} events unlogged`), Dk.join("; ")
```

#### 15. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L129-L130` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L143-L144) · [Before (L129-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L129-L130)

```diff
-             pending: wQ.headerWord(DQ.F.RenderPending),
-             terrainDrawn: 0 !== (wQ.headerWord(DQ.F.LoadSteps) & DQ.U.TerrainDrawn),
+             pending: ik.headerWord(bk.L.RenderPending),
+             terrainDrawn: 0 !== (ik.headerWord(bk.L.LoadSteps) & bk._.TerrainDrawn),
```

#### 16. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L133` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L147) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L133)

```diff
-         }, pQ(`${(0,tQ.c)(QQ)}; client ${qQ.j.client} (${qQ.j.reason})`), setInterval(this.fH, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
+         }, Ck(`${(0,pk.d)(kk)}; client ${fk.l.client} (${fk.l.reason})`), setInterval(this.Px, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
```

#### 17. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L136` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L150) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L136)

```diff
-         this.session = QQ, this.frames.frame(FQ, wQ, "drawn" === wQ ? QQ.headerWord(DQ.F.RenderUs) : 0)
+         this.session = kk, this.frames.frame(ek, ik, "drawn" === ik ? kk.headerWord(bk.L.RenderUs) : 0)
```

#### 18. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L145` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L159) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L145)

```diff
-           if (LQ >= DQ.h.RenderDeviceLost && LQ <= DQ.h.RenderSerialLinks) this.event(`render error ${(0,vQ.Dd)(LQ)}${null!==(FQ=null===(wQ=(0,HQ.d)(LQ,qQ))||void 0===wQ?void 0:wQ.words)&&void 0!==FQ?FQ:""} (detail ${qQ})`)
+           if (Dk >= bk.p.RenderDeviceLost && Dk <= bk.p.RenderSerialLinks) this.event(`render error ${(0,Pk.le)(Dk)}${null!==(ek=null===(ik=(0,Kk.e)(Dk,fk))||void 0===ik?void 0:ik.words)&&void 0!==ek?ek:""} (detail ${fk})`)
```

#### 19. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L149` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L163) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L149)

```diff
-         this.event(`render reload: ${QQ?"webgpu":"gl"} ${wQ}, losses ${FQ}${void 0===LQ?"":`: ${LQ}`}`)
+         this.event(`render reload: ${kk?"webgpu":"gl"} ${ik}, losses ${ek}${void 0===Dk?"":`: ${Dk}`}`)
```

#### 20. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L157-L159` → after: `L171-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L171-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L171-L173) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L157-L159)

```diff
-         const qQ = null !== LQ && 0 !== LQ.lastError ? `, last error ${(0,vQ.Dd)(LQ.lastError)} (detail ${LQ.lastErrorDetail})` : "",
-           oQ = wQ instanceof Error ? `${wQ.name}: ${wQ.message}` : null === wQ || void 0 === wQ ? "" : String(wQ);
-         this.event(`core stopped at ${FQ}${qQ}${oQ&&`: ${oQ}`}`)
+         const fk = null !== Dk && 0 !== Dk.lastError ? `, last error ${(0,Pk.le)(Dk.lastError)} (detail ${Dk.lastErrorDetail})` : "",
+           Sk = ik instanceof Error ? `${ik.name}: ${ik.message}` : null === ik || void 0 === ik ? "" : String(ik);
+         this.event(`core stopped at ${ek}${fk}${Sk&&`: ${Sk}`}`)
```

#### 21. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L168` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L182) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L168)

```diff
-         null === FQ || FQ.isStopped ? this.sampled = null : (this.sampled = FQ, this.gpuTimed = FQ.headerWord(DQ.F.GpuTimed), this.gpuUs = FQ.headerWord(DQ.F.GpuFrameUs))
+         null === ek || ek.isStopped ? this.sampled = null : (this.sampled = ek, this.gpuTimed = ek.headerWord(bk.L.GpuTimed), this.gpuUs = ek.headerWord(bk.L.GpuFrameUs))
```

#### 22. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L172-L173` → after: `L186-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L186-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L186-L190) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L172-L173)

```diff
-         for (const LQ of this.links.failures(null === FQ || void 0 === FQ ? void 0 : FQ.linkFailures)) this.event(LQ);
-         const wQ = this.links.summaryLine(null === FQ || void 0 === FQ ? void 0 : FQ.links, QQ);
+         for (const fk of this.programLines.failures(null === ek || void 0 === ek ? void 0 : ek.linkFailures)) this.event(fk);
+         const ik = this.programLines.heldAtBackstop(null === ek || void 0 === ek ? void 0 : ek.heldAtBackstop);
+         null !== ik && Ck(ik);
+         for (const fk of this.programLines.summaryLines(null === ek || void 0 === ek ? void 0 : ek.links, null === ek || void 0 === ek ? void 0 : ek.programUse, kk, this.hidden.totals(kk))) Ck(fk);
+         const Dk = this.compileSummary.line(null === ek || void 0 === ek ? void 0 : ek.compiles, kk);
```

#### 23. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L179` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L196) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L179)

```diff
-         this.gridLogged || void 0 === FQ || (this.gridLogged = !0, pQ(`gl1 grid ${FQ}`))
+         this.gridLogged || void 0 === ek || (this.gridLogged = !0, Ck(`gl1 grid ${ek}`))
```

#### 24. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L186-L188` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L203-L205) · [Before (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L186-L188)

```diff
-           LQ = (0, oQ.q)(),
-           qQ = void 0 === (null === wQ || void 0 === wQ ? void 0 : wQ.parallelCompile) ? "" : `; parallel compile ${wQ.parallelCompile}`;
-         pQ(`renderer gl ${LQ?`${LQ.vendor} / ${LQ.renderer}`:"(not read)"}; terrain fetch ${null!==(QQ=null===wQ||void 0===wQ?void 0:wQ.fetch)&&void 0!==QQ?QQ:"(not noted)"}${qQ}`), pQ(`renderer caps ${null!==(FQ=null===wQ||void 0===wQ?void 0:wQ.caps)&&void 0!==FQ?FQ:"(not noted) … [truncated]
+           Dk = (0, Sk.p)(),
+           fk = void 0 === (null === ik || void 0 === ik ? void 0 : ik.parallelCompile) ? "" : `; parallel compile ${ik.parallelCompile}`;
+         Ck(`renderer gl ${Dk?`${Dk.vendor} / ${Dk.renderer}`:"(not read)"}; terrain fetch ${null!==(kk=null===ik||void 0===ik?void 0:ik.fetch)&&void 0!==kk?kk:"(not noted)"}${fk}`), Ck(`renderer caps ${null!==(ek=null===ik||void 0===ik?void 0:ik.caps)&&void 0!==ek?ek:"(not noted) … [truncated]
```

#### 25. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L197` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L214) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L197)

```diff
-   4544: (QQ, FQ, wQ) => {
+   4637: (kk, ek, ik) => {
```

#### 26. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L200-L201` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L217-L218) · [Before (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L200-L201)

```diff
-       const FQ = QQ.adapter ? `${QQ.adapter.vendor}/${QQ.adapter.architecture}` : "none";
-       return `backend ${QQ.backend}: reason ${QQ.reason}, source ${QQ.source}, adapter ${FQ}`
+       const ek = kk.adapter ? `${kk.adapter.vendor}/${kk.adapter.architecture}` : "none";
+       return `backend ${kk.backend}: reason ${kk.reason}, source ${kk.source}, adapter ${ek}`
```

#### 27. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L204` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L221) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L204)

```diff
-       c: () => LQ
+       d: () => Dk
```

#### 28. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L207` → after: `L224-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L224-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L224-L247) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L207)

```diff
-   40169: (QQ, FQ, wQ) => {
+   33646: (kk, ek, ik) => {
+     function Dk(kk) {
+       return `hidden ${kk.changes} changes, ${Math.round(kk.hiddenMs)} ms`
+     }
+     ik.d(ek, {
+       e: () => fk,
+       i: () => Dk
+     });
+     class fk {
+       constructor() {
+         this.changes = 0, this.hiddenMs = 0, this.hiddenSinceMs = document.hidden ? performance.now() : -1
+       }
+       changed(kk) {
+         this.changes++, document.hidden ? this.hiddenSinceMs = kk : this.hiddenSinceMs >= 0 && (this.hiddenMs += kk - this.hiddenSinceMs, this.hiddenSinceMs = -1)
+       }
+       totals(kk) {
+ ... (8 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L211` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L251) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L211)

```diff
-       j: () => kQ
+       i: () => rk
```

#### 30. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L213-L218` → after: `L253-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L253-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L253-L258) · [Before (L213-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L213-L218)

```diff
-     var LQ = wQ(40003),
-       qQ = wQ(40009);
- 
-     function oQ(QQ) {
-       if (QQ.queries.drawCensus() < LQ.Hb.BYTES) return null;
-       const FQ = QQ.memoryData(QQ.scratch(), LQ.Hb.BYTES, 4, "the draw census");
+     var Dk = ik(40157),
+       fk = ik(40165);
+ 
+     function Sk(kk) {
+       if (kk.queries.drawCensus() < Dk.qb.BYTES) return null;
+       const ek = kk.memoryData(kk.scratch(), Dk.qb.BYTES, 4, "the draw census");
```

#### 31. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L220-L231` → after: `L260-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L260-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L260-L273) · [Before (L220-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L220-L231)

```diff
-         terrainOpaque: LQ.Hb.terrainOpaque(FQ, 0),
-         terrainTransparent: LQ.Hb.terrainTransparent(FQ, 0),
-         terrainPack: LQ.Hb.terrainPack(FQ, 0),
-         earthSky: LQ.Hb.earthSky(FQ, 0),
-         skyMeshes: LQ.Hb.skyMeshes(FQ, 0),
-         regular: LQ.Hb.regular(FQ, 0),
-         thin: LQ.Hb.thin(FQ, 0),
-         line: LQ.Hb.line(FQ, 0),
-         text: LQ.Hb.text(FQ, 0),
-         particles: LQ.Hb.particles(FQ, 0),
-         terrainParts: LQ.Hb.terrainParts(FQ, 0),
-         terrainCompiling: LQ.Hb.terrainCompiling(FQ, 0)
+         terrainOpaque: Dk.qb.terrainOpaque(ek, 0),
+         terrainTransparent: Dk.qb.terrainTransparent(ek, 0),
+         terrainPack: Dk.qb.terrainPack(ek, 0),
+         earthSky: Dk.qb.earthSky(ek, 0),
+         skyMeshes: Dk.qb.skyMeshes(ek, 0),
+         regular: Dk.qb.regular(ek, 0),
+         thin: Dk.qb.thin(ek, 0),
+         line: Dk.qb.line(ek, 0),
+         text: Dk.qb.text(ek, 0),
+         particles: Dk.qb.particles(ek, 0),
+         terrainParts: Dk.qb.terrainParts(ek, 0),
+         terrainCompiling: Dk.qb.terrainCompiling(ek, 0),
+         ringCopiesMax: Dk.qb.ringCopiesMax(ek, 0),
+         ringBusyWrites: Dk.qb.ringBusyWrites(ek, 0)
```

#### 32. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L251` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L293) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L251)

```diff
-       const QQ = (0, qQ.k)();
+       const kk = (0, fk.g)();
```

#### 33. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L269` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L311) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L269)

```diff
-           value: `${DQ(FQ)}`
+           value: `${bk(ek)}`
```

#### 34. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L272` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L314) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L272)

```diff
-           value: `${wQ} opaque / ${LQ} transparent (${qQ} shader pack)`
+           value: `${ik} opaque / ${Dk} transparent (${fk} shader pack)`
```

#### 35. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L275` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L317) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L275)

```diff
-           value: `${mQ} / ${uQ}`
+           value: `${mk} / ${Mk}`
```

#### 36. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L278` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L320) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L278)

```diff
-           value: `${bQ} / ${HQ}`
+           value: `${xk} / ${Kk}`
```

#### 37. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L281` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderLite.js#L323) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderLite.js#L281)

```diff
-           value: `${kQ+vQ} / ${YQ}`
+           value: `${rk+Pk} / ${nk}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderProbe.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/renderProbe.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff)

#### 1. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderProbe.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderProbe.js#L1-L2)

```diff
- export const id = 49;
- export const ids = [49];
+ export const id = 50;
+ export const ids = [50];
```

#### 2. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderProbe.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderProbe.js#L4)

```diff
-   42729: (QQ, FQ, wQ) => {
+   50557: (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderProbe.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderProbe.js#L8-L11)

```diff
-     var LQ = wQ(626),
-       qQ = wQ(4251),
-       oQ = wQ(2753),
-       DQ = wQ(4352);
+     var Dk = ik(600),
+       fk = ik(4349),
+       Sk = ik(2752),
+       bk = ik(4449);
```

#### 4. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderProbe.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderProbe.js#L24)

```diff
-       return `${QQ}; ${wQ?`os ${wQ.os}, gpu ${null!==(qQ=wQ.gpuFamily)&&void 0!==qQ?qQ:"unknown"} ${null!==(oQ=wQ.gpuModel)&&void 0!==oQ?oQ:"unknown"}`:"device unknown"}, version ${LQ.b}; ${FQ}`
+       return `${kk}; ${ik?`os ${ik.os}, gpu ${null!==(fk=ik.gpuFamily)&&void 0!==fk?fk:"unknown"} ${null!==(Sk=ik.gpuModel)&&void 0!==Sk?Sk:"unknown"}`:"device unknown"}, version ${Dk.c}; ${ek}`
```

#### 5. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderProbe.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderProbe.js#L29)

```diff
-       const wQ = null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.backend) && void 0 !== FQ ? FQ : "none";
+       const ik = null !== (ek = null === kk || void 0 === kk ? void 0 : kk.backend) && void 0 !== ek ? ek : "none";
```

#### 6. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderProbe.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderProbe.js#L36)

```diff
-         return void(0, oQ.m)("renderprobe", `decode and particle probes not run: the renderer is ${wQ}, and they read WebGL2's draws`)
+         return void(0, Sk.l)("renderprobe", `decode and particle probes not run: the renderer is ${ik}, and they read WebGL2's draws`)
```

#### 7. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L43-L44` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/renderProbe.js#L43-L44) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/renderProbe.js#L43-L44)

```diff
-         of mQ)(0, DQ.j)(LQ, HQ, ["1", "pending"], vQ, kQ).then((QQ => {
-         void 0 !== QQ && (0, oQ.m)("renderprobe", uQ(bQ, QQ, (0, qQ.d)(!1)))
+         of mk)(0, bk.i)(Dk, Kk, ["1", "pending"], Pk, rk).then((kk => {
+         void 0 !== kk && (0, Sk.l)("renderprobe", Mk(xk, kk, (0, fk.d)(!1)))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9)

#### 1. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L1-L2)

```diff
- export const id = 50;
- export const ids = [50];
+ export const id = 51;
+ export const ids = [51];
```

#### 2. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L4)

```diff
-   38166: (QQ, FQ, wQ) => {
+   38228: (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L9-L11)

```diff
-     var LQ = wQ(617),
-       qQ = wQ(4119),
-       oQ = wQ(38174);
+     var Dk = ik(591),
+       fk = ik(4189),
+       Sk = ik(38231);
```

#### 4. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L14)

```diff
-       if (QQ.metaInfo === LQ.c || "Iron Guardian" === QQ.type || "Gold Guardian" === QQ.type) return !0;
+       if (kk.metaInfo === Dk.d || "Iron Guardian" === kk.type || "Gold Guardian" === kk.type) return !0;
```

#### 5. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L20)

```diff
-         const LQ = (0, qQ.i)(QQ);
+         const Dk = (0, fk.l)(kk);
```

#### 6. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L24)

```diff
-     }(0, oQ.f)("skyblock", ((QQ, FQ) => {
+     }(0, Sk.e)("skyblock", ((kk, ek) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/textureNameTable.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/textureNameTable.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310)

#### 1. `bundles/bloxd.io/chunks/js/textureNameTable.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/textureNameTable.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/textureNameTable.js#L1-L2)

```diff
- export const id = 51;
- export const ids = [51];
+ export const id = 53;
+ export const ids = [53];
```

#### 2. `bundles/bloxd.io/chunks/js/textureNameTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/textureNameTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/textureNameTable.js#L4)

```diff
-   42786: (QQ, FQ, wQ) => {
+   50606: (kk, ek, ik) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/texturePackFeed.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/texturePackFeed.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879)

#### 1. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackFeed.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackFeed.js#L1-L2)

```diff
- export const id = 52;
- export const ids = [52];
+ export const id = 54;
+ export const ids = [54];
```

#### 2. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackFeed.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackFeed.js#L4)

```diff
-   42765: (QQ, FQ, wQ) => {
+   50585: (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackFeed.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackFeed.js#L8-L10)

```diff
-     var LQ = wQ(1213),
-       qQ = wQ(27),
-       oQ = wQ(42750);
+     var Dk = ik(1177),
+       fk = ik(38),
+       Sk = ik(50577);
```

#### 4. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L13-L14` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackFeed.js#L13-L14) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackFeed.js#L13-L14)

```diff
-       const wQ = new oQ.e({
-         store: qQ.h,
+       const ik = new Sk.c({
+         store: fk.e,
```

#### 5. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackFeed.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackFeed.js#L18)

```diff
-           const FQ = await fetch(`${LQ.clientSideServerUrls.texturePackUrl}/${QQ}.json`, {
+           const ek = await fetch(`${Dk.clientSideServerUrls.texturePackUrl}/${kk}.json`, {
```

#### 6. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackFeed.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackFeed.js#L21)

```diff
-           if (!FQ.ok) throw new Error(`fetching texture pack ${QQ} answered HTTP ${FQ.status}`);
+           if (!ek.ok) throw new Error(`fetching texture pack ${kk} answered HTTP ${ek.status}`);
```

#### 7. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackFeed.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackFeed.js#L25)

```diff
-       return (0, oQ.g)(wQ), wQ
+       return (0, Sk.f)(ik), ik
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/texturePackStorage.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/texturePackStorage.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383)

#### 1. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L1-L2)

```diff
- export const id = 53;
- export const ids = [53];
+ export const id = 55;
+ export const ids = [55];
```

#### 2. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L4)

```diff
-   9157: (QQ, FQ, wQ) => {
+   33812: (kk, ek, ik) => {
```

#### 3. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L6-L7)

```diff
-       announceStoredTexturePack: () => qQ.e,
-       takeOneShotTexturePack: () => LQ.h
+       announceStoredTexturePack: () => fk.b,
+       takeOneShotTexturePack: () => Dk.j
```

#### 4. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L9-L10)

```diff
-     var LQ = wQ(9165),
-       qQ = wQ(9170)
+     var Dk = ik(33819),
+       fk = ik(33828)
```

#### 5. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L12)

```diff
-   9170: (QQ, FQ, wQ) => {
+   33828: (kk, ek, ik) => {
```

#### 6. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L14-L15` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L14-L15) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L14-L15)

```diff
-       e: () => qQ,
-       f: () => oQ
+       b: () => fk,
+       d: () => Sk
```

#### 7. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L17)

```diff
-     var LQ = wQ(3139);
+     var Dk = ik(3218);
```

#### 8. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L23)

```diff
-         const FQ = new BroadcastChannel(LQ.f);
+         const ek = new BroadcastChannel(Dk.m);
```

#### 9. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L35)

```diff
-       return "string" === typeof FQ ? FQ : null
+       return "string" === typeof ek ? ek : null
```

#### 10. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L38)

```diff
-   9165: (QQ, FQ, wQ) => {
+   33819: (kk, ek, ik) => {
```

#### 11. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L40)

```diff
-       c: () => DQ,
+       b: () => bk,
```

#### 12. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L42)

```diff
-       h: () => oQ
+       j: () => Sk
```

#### 13. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L44)

```diff
-     var LQ = wQ(3139);
+     var Dk = ik(3218);
```

#### 14. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L47)

```diff
-       const oQ = DQ(await QQ.getItem(LQ.c, FQ));
+       const Sk = bk(await kk.getItem(Dk.f, ek));
```

#### 15. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L49)

```diff
-       const kQ = await QQ.getItem(LQ.d, FQ);
+       const rk = await kk.getItem(Dk.i, ek);
```

#### 16. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L51)

```diff
-         await Promise.all([QQ.removeItem(LQ.c), QQ.removeItem(LQ.d)])
+         await Promise.all([kk.removeItem(Dk.f), kk.removeItem(Dk.i)])
```

#### 17. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L54)

```diff
-         source: "string" === typeof kQ ? kQ : null
+         source: "string" === typeof rk ? rk : null
```

#### 18. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L59)

```diff
-       return (0, LQ.m)() ? Promise.resolve(null) : qQ(QQ, !1, (QQ => {
+       return (0, Dk.u)() ? Promise.resolve(null) : fk(kk, !1, (kk => {
```

#### 19. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/texturePackStorage.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/texturePackStorage.js#L61)

```diff
-       }), LQ.m)
+       }), Dk.u)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (895 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1-L2` → after: `L1-L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1-L2) · [Before (L1-L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1-L2)

```diff
- export const id = 54;
- export const ids = [54];
+ export const id = 56;
+ export const ids = [56];
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4` → after: `L4-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4-L37) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4)

```diff
-   38536: (QQ, FQ, wQ) => {
+   42201: (kk, ek, ik) => {
+     var Dk = {
+       "./bedwars/bedwarsClient": [38832, 9],
+       "./bridgeBattle/bridgeBattleClient": [38838, 10],
+       "./buildAFactory2/buildAFactory2Client": [38073, 75, 74, 73, 223, 241, 11],
+       "./classic/classicClient": [38847, 12],
+       "./clutch/clutchClient": [38850, 13],
+       "./containmentBreach/containmentBreachClient": [38859, 14],
+       "./cooking/cookingClient": [38993, 15],
+       "./defusal/defusalClient": [38996, 16],
+       "./frontline/frontlineClient": [39003, 75, 74, 73, 17],
+       "./goalRush/goalRushClient": [39006, 18],
+       "./luckyBedwars/luckyBedwarsClient": [39009, 19],
+       "./ninetyNineNights/ninetyNineNightsClient": [39012, 20],
+       "./oneBlock/oneBlockClient": [39018, 21],
+       "./plots/plotsClient": [39021, 239, 244, 22],
+ ... (18 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6-L7` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L39-L40) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6-L7)

```diff
-       e: () => oQ,
-       g: () => qQ
+       c: () => Sk,
+       f: () => fk
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L9` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L42) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L9)

```diff
-     var LQ = wQ(22);
+     var Dk = ik(26);
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L16` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L49) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L16)

```diff
-       "refetchCode" !== QQ ? "Plugin|MobAiPlugin|ShowPetUi" !== QQ ? Promise.all([wQ.e(106), wQ.e(107), wQ.e(102), wQ.e(104), wQ.e(211)]).then((() => wQ(41143))).then((wQ => {
+       "refetchCode" !== kk ? "Plugin|MobAiPlugin|ShowPetUi" !== kk ? Promise.all([ik.e(107), ik.e(108), ik.e(103), ik.e(105), ik.e(215)]).then((() => ik(41313))).then((ik => {
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L22-L23` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L55-L56) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L22-L23)

```diff
-         console.error(`Game message ${QQ} failed`, FQ)
-       })) : LQ.l.GA("showPetUi", FQ) : LQ.l.GA("refetchCode")
+         console.error(`Game message ${kk} failed`, ek)
+       })) : Dk.j.tm("showPetUi", ek) : Dk.j.tm("refetchCode")
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L26` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L59) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L26)

```diff
-   41962: (QQ, FQ, wQ) => {
+   42183: (kk, ek, ik) => {
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L28-L29` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L61-L62) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L28-L29)

```diff
-       c: () => LQ,
-       d: () => qQ
+       d: () => Dk,
+       f: () => fk
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L38` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L71) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L38)

```diff
-   40232: (QQ, FQ, wQ) => {
+   33701: (kk, ek, ik) => {
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L40-L87` → after: `L73-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L73-L74) · [Before (L40-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L40-L87)

```diff
-       e: () => kQ
-     });
-     const LQ = 1 << 20,
-       qQ = 1 << 21,
-       oQ = 1024,
-       DQ = 2048;
- 
-     function kQ(QQ, FQ, wQ) {
-       const kQ = QQ + LQ,
-         vQ = FQ + oQ,
-         mQ = wQ + LQ;
-       return kQ < 0 || kQ >= qQ || mQ < 0 || mQ >= qQ || vQ < 0 || vQ >= DQ ? -1 : (kQ * qQ + mQ) * DQ + vQ
-     }
-   },
-   40229: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
- ... (32 more removed lines; see GitHub link above)
+       d: () => rk,
+       h: () => Pk
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L89` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L76) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L89)

```diff
-     var LQ = wQ(17);
+     var Dk = ik(22);
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L96` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L83) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L96)

```diff
-       return null === (QQ = LQ.c.get("showDistantNametags")) || void 0 === QQ || QQ
+       return null === (kk = Dk.b.get("showDistantNametags")) || void 0 === kk || kk
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L105` → after: `L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L92) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L105)

```diff
-       }()) && void 0 !== QQ ? QQ : kQ() ? 0 : qQ
+       }()) && void 0 !== kk ? kk : rk() ? 0 : fk
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L108` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L95) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L108)

```diff
-   41954: (QQ, FQ, wQ) => {
+   42177: (kk, ek, ik) => {
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L110` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L97) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L110)

```diff
-       blockIdOf: () => Xv.e,
+       blockIdOf: () => oP.d,
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L114` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L101) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L114)

```diff
-       drainTextRerasters: () => lk.b,
+       drainTextRerasters: () => ar.c,
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L121` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L108) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L121)

```diff
-       loadTextIcons: () => lk.d,
+       loadTextIcons: () => ar.f,
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L125-L126` → after: `L112-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L112-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L112-L113) · [Before (L125-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L125-L126)

```diff
-       setTextHost: () => lk.i,
-       setTextLocalPlayer: () => lk.l,
+       setTextHost: () => ar.l,
+       setTextLocalPlayer: () => ar.n,
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L131-L132` → after: `L118-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L118-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L118-L119) · [Before (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L131-L132)

```diff
-       textChanged: () => lk.o,
-       warmText: () => zk.h,
+       textChanged: () => ar.s,
+       warmText: () => hr.i,
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L135-L152` → after: `L122-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L122-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L122-L139) · [Before (L135-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L135-L152)

```diff
-     wQ(36137);
-     var LQ = wQ(17),
-       qQ = wQ(36439),
-       oQ = wQ(38681),
-       DQ = wQ(22),
-       kQ = wQ(3263),
-       vQ = wQ(36435),
-       mQ = wQ(1302),
-       uQ = wQ(609),
-       HQ = wQ(37777),
-       bQ = wQ(4632),
-       YQ = wQ(40065),
-       xQ = wQ(40003);
-     const AQ = xQ.Nb / 4,
-       tQ = xQ.q.PlaySound,
-       eQ = xQ.q.SoundReset,
- ... (2 more removed lines; see GitHub link above)
+     ik(36030);
+     var Dk = ik(22),
+       fk = ik(36396),
+       Sk = ik(38734),
+       bk = ik(26),
+       rk = ik(3365),
+       Pk = ik(36391),
+       mk = ik(1273),
+       Mk = ik(585),
+       Kk = ik(37818),
+       xk = ik(4735),
+       nk = ik(40221),
+       Uk = ik(40157);
+     const Hk = Uk.yb / 4,
+       wk = Uk.p.PlaySound,
+       lk = Uk.p.SoundReset,
+ ... (2 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L156` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L143) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L156)

```diff
-         this.core = QQ, this.memory = FQ, this.audio = wQ, this.serverIds = new Int32Array(256).fill(xQ.ad), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
+         this.core = kk, this.memory = ek, this.audio = ik, this.serverIds = new Int32Array(256).fill(Uk.Sc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L161` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L148) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L161)

```diff
-         return this.scratchPtr < 0 && (this.scratchPtr = this.core.TqQ(), this.ensureViews()), this.scratchPtr
+         return this.scratchPtr < 0 && (this.scratchPtr = this.core.GDk(), this.ensureViews()), this.scratchPtr
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L174` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L161) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L174)

```diff
-         return xQ.v.localId(this.apiView, 0)
+         return Uk.t.localId(this.apiView, 0)
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L177` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L164) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L177)

```diff
-         return xQ.v.localDeaths(this.apiView, 0)
+         return Uk.t.localDeaths(this.apiView, 0)
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L181-L185` → after: `L168-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L168-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L168-L172) · [Before (L181-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L181-L185)

```diff
-           FQ = xQ.v.entRenderPtr(QQ, 0),
-           wQ = xQ.v.entVisPtr(QQ, 0),
-           LQ = xQ.v.entCapacity(QQ, 0);
-         if (FQ !== this.renderPtr || wQ !== this.visPtr || LQ !== this.MH || this.renderBuffer !== this.buffer) {
-           this.renderPtr = FQ, this.visPtr = wQ, this.MH = LQ, this.renderBuffer = this.buffer;
+           ek = Uk.t.entRenderPtr(kk, 0),
+           ik = Uk.t.entVisPtr(kk, 0),
+           Dk = Uk.t.entCapacity(kk, 0);
+         if (ek !== this.renderPtr || ik !== this.visPtr || Dk !== this.vK || this.renderBuffer !== this.buffer) {
+           this.renderPtr = ek, this.visPtr = ik, this.vK = Dk, this.renderBuffer = this.buffer;
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L188` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L175) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L188)

```diff
-           this.renderCapacity = QQ && qQ ? LQ : 0, this.render = QQ && qQ ? QQ : new Float32Array(0), this.vis = QQ && qQ ? qQ : new Uint8Array(0)
+           this.renderCapacity = kk && fk ? Dk : 0, this.render = kk && fk ? kk : new Float32Array(0), this.vis = kk && fk ? fk : new Uint8Array(0)
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L193` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L180) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L193)

```diff
-           return (0, YQ.s)(QQ, this.memory().buffer, FQ, wQ, LQ)
+           return (0, nk.n)(kk, this.memory().buffer, ek, ik, Dk)
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L200` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L187) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L200)

```diff
-           return (0, YQ.d)(this.memory().buffer, QQ, FQ, wQ, LQ)
+           return (0, nk.g)(this.memory().buffer, kk, ek, ik, Dk)
```

#### 29. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L206` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L193) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L206)

```diff
-         this.keepCorruption(new YQ.b(QQ))
+         this.keepCorruption(new nk.c(kk))
```

#### 30. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L209` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L196) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L209)

```diff
-         if (!(QQ instanceof YQ.b)) throw QQ;
+         if (!(kk instanceof nk.c)) throw kk;
```

#### 31. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L227-L228` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L214-L215) · [Before (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L227-L228)

```diff
-             qQ = mQ + bQ.L;
-           if (wQ === xQ.q.EntitySpawned) {
+             fk = mk + xk.eb;
+           if (ik === Uk.p.EntitySpawned) {
```

#### 32. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L230-L234` → after: `L217-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L217-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L217-L221) · [Before (L230-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L230-L234)

```diff
-             if (LQ !== xQ.Ub.BYTES) throw WQ(wQ, mQ, LQ);
-             const QQ = xQ.Ub.serverId(oQ, qQ);
-             this.spawned(QQ, xQ.Ub.index(oQ, qQ), xQ.Ub.kind(oQ, qQ)), null === (DQ = FQ.entityAdded) || void 0 === DQ || DQ.call(FQ, QQ)
-           } else if ((wQ === xQ.q.ChunkSlot || wQ === xQ.q.EntityInfoChanged) && !(0, xQ.ge)(wQ, oQ, qQ, LQ, FQ)) throw WQ(wQ, mQ, LQ);
-           mQ = qQ + (0, bQ.Yd)(LQ)
+             if (Dk !== Uk.Db.BYTES) throw sk(ik, mk, Dk);
+             const kk = Uk.Db.serverId(Sk, fk);
+             this.spawned(kk, Uk.Db.index(Sk, fk), Uk.Db.kind(Sk, fk)), null === (bk = ek.entityAdded) || void 0 === bk || bk.call(ek, kk)
+           } else if ((ik === Uk.p.ChunkSlot || ik === Uk.p.EntityInfoChanged) && !(0, Uk.ae)(ik, Sk, fk, Dk, ek)) throw sk(ik, mk, Dk);
+           mk = fk + (0, xk.Ie)(Dk)
```

#### 33. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L240` → after: `L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L227) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L240)

```diff
-           throw vQ instanceof YQ.b && (this.corruption ??= vQ), vQ
+           throw Pk instanceof nk.c && (this.corruption ??= Pk), Pk
```

#### 34. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L249-L251` → after: `L236-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L236-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L236-L238) · [Before (L249-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L249-L251)

```diff
-             oQ = qQ + bQ.L;
-           if ((65535 & QQ) === xQ.q.EntityDespawned && QQ >>> 16 === xQ.Ub.BYTES) {
-             const QQ = xQ.Ub.serverId(wQ, oQ);
+             Sk = fk + xk.eb;
+           if ((65535 & kk) === Uk.p.EntityDespawned && kk >>> 16 === Uk.Db.BYTES) {
+             const kk = Uk.Db.serverId(ik, Sk);
```

#### 35. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L253` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L240) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L253)

```diff
-             if (this.despawned(QQ, xQ.Ub.index(wQ, oQ))) null === (LQ = FQ.entityRemoved) || void 0 === LQ || LQ.call(FQ, QQ)
+             if (this.despawned(kk, Uk.Db.index(ik, Sk))) null === (Dk = ek.entityRemoved) || void 0 === Dk || Dk.call(ek, kk)
```

#### 36. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L255` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L242) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L255)

```diff
-           qQ = oQ + (0, bQ.Yd)(QQ >>> 16)
+           fk = Sk + (0, xk.Ie)(kk >>> 16)
```

#### 37. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L271` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L258) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L271)

```diff
-             RQ = CQ + bQ.L;
+             dk = Ck + xk.eb;
```

#### 38. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L274` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L261) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L274)

```diff
-           else if (LQ === bQ.O.LocalPlayerBound) {
+           else if (Dk === xk.ib.LocalPlayerBound) {
```

#### 39. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L276` → after: `L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L263) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L276)

```diff
-             if (SQ !== bQ.nb) throw WQ(LQ, CQ, SQ);
+             if (Ak !== xk.Tb) throw sk(Dk, Ck, Ak);
```

#### 40. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L278` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L265) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L278)

```diff
-           } else if (LQ === bQ.O.LocalHurt) {
+           } else if (Dk === xk.ib.LocalHurt) {
```

#### 41. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L280` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L267) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L280)

```diff
-             if (SQ !== bQ.kb) throw WQ(LQ, CQ, SQ);
+             if (Ak !== xk.Rb) throw sk(Dk, Ck, Ak);
```

#### 42. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L282` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L269) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L282)

```diff
-           } else if (LQ === bQ.O.AttackHit) {
+           } else if (Dk === xk.ib.AttackHit) {
```

#### 43. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L284` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L271) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L284)

```diff
-             if (SQ !== bQ.b) throw WQ(LQ, CQ, SQ);
+             if (Ak !== xk.d) throw sk(Dk, Ck, Ak);
```

#### 44. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L289-L290` → after: `L276-L277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L276-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L276-L277) · [Before (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L289-L290)

```diff
-             null === (uQ = FQ.attackHit) || void 0 === uQ || uQ.call(FQ, QQ, wQ, qQ, 0 !== (oQ & bQ.e.Crit), 0 !== (oQ & bQ.e.HitSelf))
-           } else if (LQ === bQ.O.PhysicsType) {
+             null === (Mk = ek.attackHit) || void 0 === Mk || Mk.call(ek, kk, ik, fk, 0 !== (Sk & xk.n.Crit), 0 !== (Sk & xk.n.HitSelf))
+           } else if (Dk === xk.ib.PhysicsType) {
```

#### 45. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L292` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L279) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L292)

```diff
-             if (SQ !== bQ.Rb) throw WQ(LQ, CQ, SQ);
+             if (Ak !== xk.vc) throw sk(Dk, Ck, Ak);
```

#### 46. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L294` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L281) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L294)

```diff
-           } else if (LQ === bQ.O.VehicleEffect) {
+           } else if (Dk === xk.ib.VehicleEffect) {
```

#### 47. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L299` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L286) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L299)

```diff
-           } else if (LQ === bQ.O.ZoomChanged) {
+           } else if (Dk === xk.ib.ZoomChanged) {
```

#### 48. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L301` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L288) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L301)

```diff
-             if (SQ !== bQ.Ad) throw WQ(LQ, CQ, SQ);
+             if (Ak !== xk.je) throw sk(Dk, Ck, Ak);
```

#### 49. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L303` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L290) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L303)

```diff
-           } else if (LQ === bQ.O.ZoomDisabled) {
+           } else if (Dk === xk.ib.ZoomDisabled) {
```

#### 50. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L307` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L294) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L307)

```diff
-           } else if (LQ === bQ.O.GameCamera) {
+           } else if (Dk === xk.ib.GameCamera) {
```

#### 51. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L310` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L297) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L310)

```diff
-           } else if (LQ === xQ.q.ChunkSlot || LQ === xQ.q.EntityInfoChanged);
+           } else if (Dk === Uk.p.ChunkSlot || Dk === Uk.p.EntityInfoChanged);
```

#### 52. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L318-L319` → after: `L305-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L305-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L305-L306) · [Before (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L318-L319)

```diff
-           } else if (LQ >= xQ.nd && LQ <= xQ.rd && LQ !== bQ.O.EnvLighting) {
-             if (!(0, xQ.ge)(LQ, DQ, RQ, SQ, FQ)) throw WQ(LQ, CQ, SQ);
+           } else if (Dk >= Uk.gd && Dk <= Uk.hd && Dk !== xk.ib.EnvLighting) {
+             if (!(0, Uk.ae)(Dk, bk, dk, Ak, ek)) throw sk(Dk, Ck, Ak);
```

#### 53. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L326` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L313) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L326)

```diff
-           CQ = RQ + (0, bQ.Yd)(SQ)
+           Ck = dk + (0, xk.Ie)(Ak)
```

#### 54. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L333` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L320) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L333)

```diff
-         const FQ = xQ.v.audioViewPtr(this.apiView, 0),
+         const ek = Uk.t.audioViewPtr(this.apiView, 0),
```

#### 55. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L336` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L323) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L336)

```diff
-         (null === (QQ = LQ) || void 0 === QQ ? void 0 : QQ.buffer) === wQ && LQ.byteOffset === FQ || (LQ = (0, YQ.d)(wQ, FQ, xQ.z.BYTES, 8, "the audio view"), this.audioView = LQ), LQ && this.audio.applyListener(LQ)
+         (null === (kk = Dk) || void 0 === kk ? void 0 : kk.buffer) === ik && Dk.byteOffset === ek || (Dk = (0, nk.g)(ik, ek, Uk.v.BYTES, 8, "the audio view"), this.audioView = Dk), Dk && this.audio.applyListener(Dk)
```

#### 56. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L339` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L326) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L339)

```diff
-         return this.indexById.get("number" === typeof QQ ? QQ : +QQ)
+         return this.indexById.get("number" === typeof kk ? kk : +kk)
```

#### 57. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L342` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L329) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L342)

```diff
-         return QQ !== xQ.ad && QQ === xQ.v.localId(this.apiView, 0)
+         return kk !== Uk.Sc && kk === Uk.t.localId(this.apiView, 0)
```

#### 58. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L346` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L333) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L346)

```diff
-         return this.readPosition("number" === typeof QQ ? QQ : +QQ, FQ) ? FQ : null
+         return this.readPosition("number" === typeof kk ? kk : +kk, ek) ? ek : null
```

#### 59. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L351` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L338) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L351)

```diff
-           for (let QQ = 0; QQ < 3; QQ++) FQ[QQ] = xQ.v.localPos(wQ, 0, QQ);
+           for (let kk = 0; kk < 3; kk++) ek[kk] = Uk.t.localPos(ik, 0, kk);
```

#### 60. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L361` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L348) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L361)

```diff
-         for (let oQ = 0; oQ < 3; oQ++) FQ[oQ] = this.render[qQ + oQ] + xQ.v.origin(wQ, 0, oQ);
+         for (let Sk = 0; Sk < 3; Sk++) ek[Sk] = this.render[fk + Sk] + Uk.t.origin(ik, 0, Sk);
```

#### 61. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L372` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L359) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L372)

```diff
-         return 0 === wQ ? null : 0 !== (wQ & xQ.de.Alive)
+         return 0 === ik ? null : 0 !== (ik & Uk.Yd.Alive)
```

#### 62. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L376` → after: `L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L363) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L376)

```diff
-         return void 0 === FQ ? this.isLocal("number" === typeof QQ ? QQ : +QQ) ? "Player" : null : CQ(this.kinds[FQ])
+         return void 0 === ek ? this.isLocal("number" === typeof kk ? kk : +kk) ? "Player" : null : Ck(this.kinds[ek])
```

#### 63. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L379` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L366) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L379)

```diff
-         if (FQ >= 1048576) throw new YQ.b(`entity ${QQ} spawned at index ${FQ}`);
+         if (ek >= 1048576) throw new nk.c(`entity ${kk} spawned at index ${ek}`);
```

#### 64. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L384` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L371) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L384)

```diff
-         return this.indexById.get(QQ) === FQ && (this.indexById.delete(QQ), wQ = !0), FQ < this.serverIds.length && this.serverIds[FQ] === QQ && (this.serverIds[FQ] = xQ.ad, this.kinds[FQ] = 0, this.idStr[FQ] = null), wQ
+         return this.indexById.get(kk) === ek && (this.indexById.delete(kk), ik = !0), ek < this.serverIds.length && this.serverIds[ek] === kk && (this.serverIds[ek] = Uk.Sc, this.kinds[ek] = 0, this.idStr[ek] = null), ik
```

#### 65. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L391` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L378) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L391)

```diff
-         const LQ = new Int32Array(wQ).fill(xQ.ad);
+         const Dk = new Int32Array(ik).fill(Uk.Sc);
```

#### 66. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L403` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L390) · [Before (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L403)

```diff
-         this.buffer = QQ, this.viewPtr < 0 && (this.viewPtr = this.core.KqQ()), this.view = new DataView(QQ, this.viewPtr, xQ.v.BYTES), this.rereadDirectory()
+         this.buffer = kk, this.viewPtr < 0 && (this.viewPtr = this.core.NDk()), this.view = new DataView(kk, this.viewPtr, Uk.t.BYTES), this.rereadDirectory()
```

#### 67. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L408` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L395) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L408)

```diff
-       return QQ >>> xQ.c === xQ.u.Item
+       return kk >>> Uk.c === Uk.s.Item
```

#### 68. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L413` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L400) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L413)

```diff
-       const LQ = QQ & xQ.g;
+       const Dk = kk & Uk.e;
```

#### 69. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L415-L419` → after: `L402-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L402-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L402-L406) · [Before (L415-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L415-L419)

```diff
-         case xQ.u.Lifeform:
-           return null !== (FQ = uQ.l[LQ]) && void 0 !== FQ ? FQ : null;
-         case xQ.u.Throwable:
-           return null !== (wQ = HQ.l[LQ]) && void 0 !== wQ ? wQ : null;
-         case xQ.u.Mesh:
+         case Uk.s.Lifeform:
+           return null !== (ek = Mk.n[Dk]) && void 0 !== ek ? ek : null;
+         case Uk.s.Throwable:
+           return null !== (ik = Kk.m[Dk]) && void 0 !== ik ? ik : null;
+         case Uk.s.Mesh:
```

#### 70. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L421` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L408) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L421)

```diff
-         case xQ.u.Audio:
+         case Uk.s.Audio:
```

#### 71. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L423` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L410) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L423)

```diff
-         case xQ.u.Item:
+         case Uk.s.Item:
```

#### 72. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L432` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L419) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L432)

```diff
-       if (wQ < bQ.gd.HEAD_BYTES) return null;
+       if (ik < xk.Rd.HEAD_BYTES) return null;
```

#### 73. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L436-L437` → after: `L423-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L423-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L423-L424) · [Before (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L436-L437)

```diff
-         DQ = bQ.gd.HEAD_BYTES + (0, bQ.Yd)(qQ);
-       if (LQ !== bQ.gd.UPDATE && LQ !== bQ.gd.REMOVE || qQ > wQ || DQ + oQ > wQ) return null;
+         bk = xk.Rd.HEAD_BYTES + (0, xk.Ie)(fk);
+       if (Dk !== xk.Rd.UPDATE && Dk !== xk.Rd.REMOVE || fk > ik || bk + Sk > ik) return null;
```

#### 74. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L444` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L431) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L444)

```diff
-         name: kQ(bQ.gd.HEAD_BYTES, qQ),
+         name: rk(xk.Rd.HEAD_BYTES, fk),
```

#### 75. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L450-L465` → after: `L437-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L437-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L437-L452) · [Before (L450-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L450-L465)

```diff
-       return new YQ.b(`event ${QQ} at ${FQ} of ${wQ} bytes`)
-     }
-     var RQ = wQ(317),
-       OQ = wQ(1237),
-       sQ = wQ(38536),
-       rQ = wQ(1907),
-       IQ = wQ(40127),
-       UQ = wQ(1870),
-       NQ = wQ(38700),
-       TQ = wQ(38734),
-       KQ = wQ(38714),
-       zQ = wQ(40047),
-       lQ = wQ(2320),
-       jQ = wQ(38692),
-       aQ = wQ(38725);
-     const XQ = Math.max(xQ.Fb.BYTES, xQ.xb.BYTES, xQ.Bb.BYTES);
+       return new nk.c(`event ${kk} at ${ek} of ${ik} bytes`)
+     }
+     var dk = ik(314),
+       Vk = ik(1207),
+       Fk = ik(38606),
+       uk = ik(1905),
+       qk = ik(40599),
+       Ik = ik(1850),
+       zk = ik(38752),
+       Qk = ik(38773),
+       vk = ik(38758),
+       Ek = ik(40201),
+       hk = ik(2395),
+       ak = ik(38745),
+       Wk = ik(38764);
+     const tk = Math.max(Uk.mb.BYTES, Uk.db.BYTES, Uk.fb.BYTES);
```

#### 76. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L468` → after: `L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L455) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L468)

```diff
-       if (!(0, aQ.c)(QQ)) return null;
+       if (!(0, Wk.e)(kk)) return null;
```

#### 77. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L470` → after: `L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L457) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L470)

```diff
-       return (0 | FQ) === FQ ? FQ : null
+       return (0 | ek) === ek ? ek : null
```

#### 78. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L474` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L461) · [Before (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L474)

```diff
-         this.api = QQ, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, jQ.m)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.DQ = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], thi … [truncated]
+         this.api = kk, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, ak.k)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.Ai = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], thi … [truncated]
```

#### 79. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L477-L479` → after: `L464-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L464-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L464-L466) · [Before (L477-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L477-L479)

```diff
-         this.defaultPoseRead = !1, this.DQ = null;
-         const QQ = this.api.queries.directorView() >= xQ.Fb.BYTES ? this.scratchView() : null;
-         null !== QQ && (this.defaultFov = (0, UQ.B)(xQ.Fb.fov(QQ, 0)), this.baseFov = (0, UQ.B)(xQ.Fb.baseFov(QQ, 0)), this.aspect = xQ.Fb.aspect(QQ, 0), this.bodyHeading = xQ.Fb.bodyHeading(QQ, 0))
+         this.defaultPoseRead = !1, this.Ai = null;
+         const kk = this.api.queries.directorView() >= Uk.mb.BYTES ? this.scratchView() : null;
+         null !== kk && (this.defaultFov = (0, Ik.C)(Uk.mb.fov(kk, 0)), this.baseFov = (0, Ik.C)(Uk.mb.baseFov(kk, 0)), this.aspect = Uk.mb.aspect(kk, 0), this.bodyHeading = Uk.mb.bodyHeading(kk, 0))
```

#### 80. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L488` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L475) · [Before (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L488)

```diff
-         const QQ = xQ.v.localId(this.api.apiView, 0);
+         const kk = Uk.t.localId(this.api.apiView, 0);
```

#### 81. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L500-L501` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L487-L488) · [Before (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L500-L501)

```diff
-         const wQ = xQ.v.localId(this.api.apiView, 0);
-         return FQ === wQ && wQ !== xQ.ad ? this.viewHeading : this.readEntity(QQ) ? this.entityHeading : null
+         const ik = Uk.t.localId(this.api.apiView, 0);
+         return ek === ik && ik !== Uk.Sc ? this.viewHeading : this.readEntity(kk) ? this.entityHeading : null
```

#### 82. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L505` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L492) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L505)

```diff
-         return LQ < wQ - 1e-6 ? LQ : null
+         return Dk < ik - 1e-6 ? Dk : null
```

#### 83. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L512` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L499) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L512)

```diff
-         const FQ = this.api.queries.directorDefaultPose() >= xQ.xb.BYTES ? this.scratchView() : null;
+         const ek = this.api.queries.directorDefaultPose() >= Uk.db.BYTES ? this.scratchView() : null;
```

#### 84. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L514-L515` → after: `L501-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L501-L502) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L514-L515)

```diff
-         for (let wQ = 0; wQ < 3; wQ++) QQ.position[wQ] = xQ.xb.eye(FQ, 0, wQ);
-         return QQ.heading = xQ.xb.heading(FQ, 0), QQ.pitch = xQ.xb.pitch(FQ, 0), QQ
+         for (let ik = 0; ik < 3; ik++) kk.position[ik] = Uk.db.eye(ek, 0, ik);
+         return kk.heading = Uk.db.heading(ek, 0), kk.pitch = Uk.db.pitch(ek, 0), kk
```

#### 85. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L529-L531` → after: `L516-L518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L516-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L516-L518) · [Before (L529-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L529-L531)

```diff
-         if (FQ === this.DQ) return this.entityLive;
-         this.DQ = FQ;
-         const wQ = this.api.queries.directorEntity(FQ) >= xQ.Bb.BYTES ? this.scratchView() : null;
+         if (ek === this.Ai) return this.entityLive;
+         this.Ai = ek;
+         const ik = this.api.queries.directorEntity(ek) >= Uk.fb.BYTES ? this.scratchView() : null;
```

#### 86. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L533-L534` → after: `L520-L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L520-L521) · [Before (L533-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L533-L534)

```diff
-         for (let LQ = 0; LQ < 3; LQ++) this.entityFeet[LQ] = xQ.Bb.feet(wQ, 0, LQ), this.entityAim[LQ] = this.entityFeet[LQ];
-         return this.entityAim[1] += xQ.Bb.eyeHeight(wQ, 0), this.entityHeading = xQ.Bb.heading(wQ, 0), !0
+         for (let Dk = 0; Dk < 3; Dk++) this.entityFeet[Dk] = Uk.fb.feet(ik, 0, Dk), this.entityAim[Dk] = this.entityFeet[Dk];
+         return this.entityAim[1] += Uk.fb.eyeHeight(ik, 0), this.entityHeading = Uk.fb.heading(ik, 0), !0
```

#### 87. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L540` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L527) · [Before (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L540)

```diff
-         return null !== wQ && wQ.buffer === FQ && wQ.byteOffset === QQ ? wQ : (this.scratch = this.api.memoryData(QQ, XQ, 8, "the director's record"), this.scratch)
+         return null !== ik && ik.buffer === ek && ik.byteOffset === kk ? ik : (this.scratch = this.api.memoryData(kk, tk, 8, "the director's record"), this.scratch)
```

#### 88. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L556-L558` → after: `L543-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L543-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L543-L545) · [Before (L556-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L556-L558)

```diff
-         this.options = QQ, this.nH = void 0, this.director = void 0, this.latest = hQ, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
-           PU: 0,
-           dU: 0
+         this.options = kk, this.Ux = void 0, this.director = void 0, this.latest = ck, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
+           SF: 0,
+           mF: 0
```

#### 89. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L562` → after: `L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L549) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L562)

```diff
-         }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.dv = new Int32Array(3 * xQ.Md), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * xQ.Md), this.nH = new VQ(QQ.api), this.direct … [truncated]
+         }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.ci = new Int32Array(3 * Uk.Fd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * Uk.Fd), this.Ux = new Bk(kk.api), this.direct … [truncated]
```

#### 90. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L567` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L554) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L567)

```diff
-           FQ = (0, zQ.d)(QQ)
+           ek = (0, Ek.b)(kk)
```

#### 91. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L581-L582` → after: `L568-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L568-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L568-L569) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L581-L582)

```diff
-         const HQ = this.answeredPose && 0 === (LQ & xQ.Db.Held);
-         return this.answeredPose = vQ !== xQ.tb.None, this.holding = this.answeredPose && !HQ, null === (DQ = (kQ = this.options).showFacing) || void 0 === DQ || DQ.call(kQ, this.holding ? this.facing : null), vQ
+         const Kk = this.answeredPose && 0 === (Dk & Uk.jb.Held);
+         return this.answeredPose = Pk !== Uk.$.None, this.holding = this.answeredPose && !Kk, null === (bk = (rk = this.options).showFacing) || void 0 === bk || bk.call(rk, this.holding ? this.facing : null), Pk
```

#### 92. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L590` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L577) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L590)

```diff
-           nH: DQ
+           Ux: bk
```

#### 93. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L593` → after: `L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L580) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L593)

```diff
-         if (0 !== (LQ & xQ.Db.Held) || DQ.setViewHeading((0, NQ.o)(DQ.bodyHeading)), void 0 !== this.pending) {
+         if (0 !== (Dk & Uk.jb.Held) || bk.setViewHeading((0, zk.q)(bk.bodyHeading)), void 0 !== this.pending) {
```

#### 94. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L597` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L584) · [Before (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L597)

```diff
-         this.readLook((0, lQ.c)(FQ), (0, lQ.c)(wQ), LQ, (0, lQ.c)(qQ), (0, lQ.c)(oQ));
+         this.readLook((0, hk.f)(ek), (0, hk.f)(ik), Dk, (0, hk.f)(fk), (0, hk.f)(Sk));
```

#### 95. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L599` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L586) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L599)

```diff
-         if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !kQ) return xQ.tb.None;
+         if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !rk) return Uk.$.None;
```

#### 96. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L601-L602` → after: `L588-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L588-L589) · [Before (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L601-L602)

```diff
-         if (0 === this.options.api.queries.directorPose(vQ, mQ, uQ, (0, NQ.o)(kQ.heading), (0, NQ.g)(kQ.pitch), (0, UQ.n)(kQ.fov))) return xQ.tb.None;
-         if ("default" === this.director.getSettings().mode) return xQ.tb.Pose;
+         if (0 === this.options.api.queries.directorPose(Pk, mk, Mk, (0, zk.q)(rk.heading), (0, zk.h)(rk.pitch), (0, Ik.h)(rk.fov))) return Uk.$.None;
+         if ("default" === this.director.getSettings().mode) return Uk.$.Pose;
```

#### 97. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L605` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L592) · [Before (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L605)

```diff
-             return xQ.tb.FaceCamera;
+             return Uk.$.FaceCamera;
```

#### 98. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L607` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L594) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L607)

```diff
-             return xQ.tb.FaceCursor;
+             return Uk.$.FaceCursor;
```

#### 99. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L609` → after: `L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L596) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L609)

```diff
-             return xQ.tb.FaceMovement
+             return Uk.$.FaceMovement
```

#### 100. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L624` → after: `L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L611) · [Before (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L624)

```diff
-         this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new KQ.d(this.nH), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (QQ = (FQ = this.opt … [truncated]
+         this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new vk.c(this.Ux), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (kk = (ek = this.opt … [truncated]
```

#### 101. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L630` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L617) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L630)

```diff
-         const FQ = (0, TQ.d)(QQ);
+         const ek = (0, Qk.f)(kk);
```

#### 102. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L635-L636` → after: `L622-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L622-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L622-L623) · [Before (L635-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L635-L636)

```diff
-           DQ = 0 !== (wQ & xQ.Db.LookPointed);
-         if (null === this.mouseTurns && !DQ) return oQ.PU = 0, oQ.dU = 0, void(oQ.pointedAt = void 0);
+           bk = 0 !== (ik & Uk.jb.LookPointed);
+         if (null === this.mouseTurns && !bk) return Sk.SF = 0, Sk.mF = 0, void(Sk.pointedAt = void 0);
```

#### 103. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L640` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L627) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L640)

```diff
-           nH: vQ
+           Ux: Pk
```

#### 104. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L642` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L629) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L642)

```diff
-         vQ.setViewHeading((0, TQ.c)(vQ.getViewHeading(), QQ, FQ, kQ, "look" === this.mouseTurns, oQ))
+         Pk.setViewHeading((0, Qk.b)(Pk.getViewHeading(), kk, ek, rk, "look" === this.mouseTurns, Sk))
```

#### 105. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L646` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L633) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L646)

```diff
-           wQ = Math.min(QQ.length, xQ.Md);
+           ik = Math.min(kk.length, Uk.Fd);
```

#### 106. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L648` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L635) · [Before (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L648)

```diff
-           for (let wQ = 0; wQ < 3; wQ++) FQ[3 * LQ + wQ] = Math.floor(QQ[LQ][wQ] / xQ.H);
+           for (let ik = 0; ik < 3; ik++) ek[3 * Dk + ik] = Math.floor(kk[Dk][ik] / Uk.A);
```

#### 107. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L653` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L640) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L653)

```diff
-           dv: FQ,
+           ci: ek,
```

#### 108. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L662` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L649) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L662)

```diff
-         null !== QQ && (0, xQ.Af)(QQ, 0, this.dv, this.centresLen) && (this.centresUnsent = !1)
+         null !== kk && (0, Uk.jf)(kk, 0, this.ci, this.centresLen) && (this.centresUnsent = !1)
```

#### 109. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L666` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L653) · [Before (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L666)

```diff
-         return null !== (QQ = null === (FQ = (wQ = this.options).screen) || void 0 === FQ ? void 0 : FQ.call(wQ)) && void 0 !== QQ ? QQ : JQ
+         return null !== (kk = null === (ek = (ik = this.options).screen) || void 0 === ek ? void 0 : ek.call(ik)) && void 0 !== kk ? kk : Tk
```

#### 110. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L670` → after: `L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L657) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L670)

```diff
-         return (null !== (QQ = this.options.isPageHidden) && void 0 !== QQ ? QQ : EQ)()
+         return (null !== (kk = this.options.isPageHidden) && void 0 !== kk ? kk : Zk)()
```

#### 111. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L674` → after: `L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L661) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L674)

```diff
-         return null !== (QQ = null === (FQ = (wQ = this.options).now) || void 0 === FQ ? void 0 : FQ.call(wQ)) && void 0 !== QQ ? QQ : performance.now()
+         return null !== (kk = null === (ek = (ik = this.options).now) || void 0 === ek ? void 0 : ek.call(ik)) && void 0 !== kk ? kk : performance.now()
```

#### 112. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L677-L681` → after: `L664-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L664-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L664-L668) · [Before (L677-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L677-L681)

```diff
-     var gQ = wQ(40232);
-     const PQ = xQ.H * xQ.H * xQ.H,
-       ZQ = Math.log2(xQ.H),
-       yQ = xQ.H - 1,
-       BQ = xQ.T.BYTES / 4,
+     var gk = ik(40364);
+     const Gk = Uk.A * Uk.A * Uk.A,
+       Nk = Math.log2(Uk.A),
+       Rk = Uk.A - 1,
+       Jk = Uk.K.BYTES / 4,
```

#### 113. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L685` → after: `L672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L672) · [Before (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L685)

```diff
-       return QQ * xQ.H * xQ.H + FQ * xQ.H + wQ
+       return kk * Uk.A * Uk.A + ek * Uk.A + ik
```

#### 114. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L705` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L692) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L705)

```diff
-         this.table = QQ, this.slot = FQ, this.generation = wQ, this.epoch = LQ, this.Sb = new FF(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = dQ, this.dataPtr = 0, this.dataBuffer = null, this.dataS … [truncated]
+         this.table = kk, this.slot = ek, this.generation = ik, this.epoch = Dk, this.gx = new ie(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = ke, this.dataPtr = 0, this.dataBuffer = null, this.dataS … [truncated]
```

#### 115. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L712` → after: `L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L699) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L712)

```diff
-           FQ = this.layers ??= new Uint16Array(xQ.H);
+           ek = this.layers ??= new Uint16Array(Uk.A);
```

#### 116. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L769-L770` → after: `L756-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L756-L757) · [Before (L769-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L769-L770)

```diff
-       const wQ = QQ[FQ * xQ.H];
-       for (let LQ = 0; LQ < xQ.H; LQ++) {
+       const ik = kk[ek * Uk.A];
+       for (let Dk = 0; Dk < Uk.A; Dk++) {
```

#### 117. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L772` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L759) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L772)

```diff
-         for (let FQ = 0; FQ < xQ.H; FQ++)
+         for (let ek = 0; ek < Uk.A; ek++)
```

#### 118. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L787-L789` → after: `L774-L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L774-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L774-L776) · [Before (L787-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L787-L789)

```diff
-         if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, oQ === xQ.X.ResetAll) return this.chunks.clear(), void this.epoch++;
-         if (oQ !== xQ.X.Stored && oQ !== xQ.X.Unloaded) throw new YQ.b(`ChunkSlot flags ${oQ}`);
-         const DQ = (0, gQ.e)(QQ, FQ, wQ);
+         if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Sk === Uk.L.ResetAll) return this.chunks.clear(), void this.epoch++;
+         if (Sk !== Uk.L.Stored && Sk !== Uk.L.Unloaded) throw new nk.c(`ChunkSlot flags ${Sk}`);
+         const bk = (0, gk.b)(kk, ek, ik);
```

#### 119. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L791` → after: `L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L778) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L791)

```diff
-         if (oQ === xQ.X.Unloaded) return void this.chunks.delete(DQ);
+         if (Sk === Uk.L.Unloaded) return void this.chunks.delete(bk);
```

#### 120. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L801-L802` → after: `L788-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L788-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L788-L789) · [Before (L801-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L801-L802)

```diff
-           FQ = xQ.v.chunkSlotsPtr(QQ, 0),
-           wQ = xQ.v.chunkSlotsLen(QQ, 0);
+           ek = Uk.t.chunkSlotsPtr(kk, 0),
+           ik = Uk.t.chunkSlotsLen(kk, 0);
```

#### 121. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L807-L808` → after: `L794-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L794-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L794-L795) · [Before (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L807-L808)

```diff
-           FQ = xQ.v.walkThroughPtr(QQ, 0),
-           wQ = xQ.v.walkThroughLen(QQ, 0);
+           ek = Uk.t.walkThroughPtr(kk, 0),
+           ik = Uk.t.walkThroughLen(kk, 0);
```

#### 122. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L821` → after: `L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L808) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L821)

```diff
-         QQ !== this.slotsBuffer && (this.slotsBuffer = QQ, this.slots = null !== (FQ = (0, YQ.s)(Uint32Array, QQ, this.slotsPtr, this.slotsLen * BQ, "the chunk directory")) && void 0 !== FQ ? FQ : oF);
+         kk !== this.slotsBuffer && (this.slotsBuffer = kk, this.slots = null !== (ek = (0, nk.n)(Uint32Array, kk, this.slotsPtr, this.slotsLen * Jk, "the chunk directory")) && void 0 !== ek ? ek : be);
```

#### 123. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L827` → after: `L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L814) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L827)

```diff
-           return null !== (wQ = (0, YQ.s)(Uint16Array, QQ, FQ, PQ, "a chunk's voxels")) && void 0 !== wQ ? wQ : dQ
+           return null !== (ik = (0, nk.n)(Uint16Array, kk, ek, Gk, "a chunk's voxels")) && void 0 !== ik ? ik : ke
```

#### 124. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L829` → after: `L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L816) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L829)

```diff
-           if (!(LQ instanceof YQ.b)) throw LQ;
+           if (!(Dk instanceof nk.c)) throw Dk;
```

#### 125. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L835` → after: `L822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L822) · [Before (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L835)

```diff
-         return null !== (LQ = this.chunks.get((0, gQ.e)(QQ, FQ, wQ))) && void 0 !== LQ ? LQ : null
+         return null !== (Dk = this.chunks.get((0, gk.b)(kk, ek, ik))) && void 0 !== Dk ? Dk : null
```

#### 126. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L848` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L835) · [Before (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L848)

```diff
-         return null !== (LQ = kQ.written(vQ)) && void 0 !== LQ ? LQ : kQ.voxelData()[vQ]
+         return null !== (Dk = rk.written(Pk)) && void 0 !== Dk ? Dk : rk.voxelData()[Pk]
```

#### 127. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L857` → after: `L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L844) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L857)

```diff
-         return null !== (LQ = null === (qQ = this.chunks.get((0, gQ.e)(QQ, FQ, wQ))) || void 0 === qQ ? void 0 : qQ.Ex) && void 0 !== LQ ? LQ : null
+         return null !== (Dk = null === (fk = this.chunks.get((0, gk.b)(kk, ek, ik))) || void 0 === fk ? void 0 : fk.HH) && void 0 !== Dk ? Dk : null
```

#### 128. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L860` → after: `L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L847) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L860)

```diff
-         const vQ = xQ.H;
+         const Pk = Uk.A;
```

#### 129. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L869` → after: `L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L856) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L869)

```diff
-               const AQ = this.chunks.get((0, gQ.e)(qQ, uQ, LQ));
+               const Hk = this.chunks.get((0, gk.b)(fk, Mk, Dk));
```

#### 130. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L874` → after: `L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L861) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L874)

```diff
-                 GQ = AQ.pY,
+                 yk = Hk.kU,
```

#### 131. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L910` → after: `L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L897) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L910)

```diff
-         QQ !== this.walkBuffer && (this.walkBuffer = QQ, this.walk = null !== (FQ = (0, YQ.s)(Uint32Array, QQ, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== FQ ? FQ : oF);
+         kk !== this.walkBuffer && (this.walkBuffer = kk, this.walk = null !== (ek = (0, nk.n)(Uint32Array, kk, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== ek ? ek : be);
```

#### 132. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L915` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L902) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L915)

```diff
-         const LQ = (0, gQ.e)(QQ >> ZQ, FQ >> ZQ, wQ >> ZQ);
+         const Dk = (0, gk.b)(kk >> Nk, ek >> Nk, ik >> Nk);
```

#### 133. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L919-L925` → after: `L906-L912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L906-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L906-L912) · [Before (L919-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L919-L925)

```diff
-     var vF = wQ(38039),
-       mF = wQ(37359),
-       uF = wQ(36419),
-       HF = wQ(36242),
-       bF = wQ(9030),
-       YF = wQ(38654),
-       xF = wQ(201);
+     var me = ik(38088),
+       Me = ik(37402),
+       Ke = ik(36370),
+       xe = ik(36164),
+       ne = ik(33723),
+       Ue = ik(38704),
+       He = ik(189);
```

#### 134. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1388-L1391` → after: `L1375-L1378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1375-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1375-L1378) · [Before (L1388-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1388-L1391)

```diff
-     var cF = wQ(36390),
-       CF = wQ(36410),
-       SF = wQ(36404),
-       iF = wQ(259);
+     var Ce = ik(36346),
+       Ae = ik(36354),
+       je = ik(36351),
+       se = ik(247);
```

#### 135. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1394` → after: `L1381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1381) · [Before (L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1394)

```diff
-         let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iF.d;
+         let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : se.c;
```

#### 136. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1437` → after: `L1424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1424) · [Before (L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1437)

```diff
-     var RF = wQ(40335);
+     var Ve = ik(40483);
```

#### 137. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1447` → after: `L1434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1434) · [Before (L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1447)

```diff
-       sF = xF.e.iG * xF.e.playerEyeToHeightRatio,
+       ue = He.g.Qp * He.g.playerEyeToHeightRatio,
```

#### 138. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1495` → after: `L1482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1482) · [Before (L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1495)

```diff
-         this.createHowl = QQ, this.listener = FQ, this.now = wQ, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(AF.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Fl … [truncated]
+         this.createHowl = kk, this.listener = ek, this.now = ik, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(we.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Fl … [truncated]
```

#### 139. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1505-L1506` → after: `L1492-L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1492-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1492-L1493) · [Before (L1505-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1505-L1506)

```diff
-             const mQ = 0 !== (qQ & xQ.Xd.Loop);
-             qQ & xQ.Xd.TwoD ? this.start(LQ, !1, DQ, oQ, kQ, mQ) : this.startSpatial(LQ, DQ, oQ, kQ, mQ, QQ, FQ, wQ, vQ, this.earDistSq(QQ, FQ, wQ))
+             const mk = 0 !== (fk & Uk.Rd.Loop);
+             fk & Uk.Rd.TwoD ? this.start(Dk, !1, bk, Sk, rk, mk) : this.startSpatial(Dk, bk, Sk, rk, mk, kk, ek, ik, Pk, this.earDistSq(kk, ek, ik))
```

#### 140. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1522` → after: `L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1509) · [Before (L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1522)

```diff
-             void 0 !== qQ && this.fade(qQ, FQ, wQ, 0 !== (LQ & xQ.Vd.StopAfter))
+             void 0 !== fk && this.fade(fk, ek, ik, 0 !== (Dk & Uk.Od.StopAfter))
```

#### 141. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1550` → after: `L1537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1537) · [Before (L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1550)

```diff
-           if (CF.d.has(AF[QQ])) continue;
+           if (Ae.c.has(we[kk])) continue;
```

#### 142. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1574` → after: `L1561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1561) · [Before (L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1574)

```diff
-             of FQ) this.sheets.delete(QQ), "loaded" === LQ.state() ? (0, cF.c)(LQ, wQ) : (LQ.unload(), wQ())
+             of ek) this.sheets.delete(kk), "loaded" === Dk.state() ? (0, Ce.b)(Dk, ik) : (Dk.unload(), ik())
```

#### 143. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1578` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1565) · [Before (L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1578)

```diff
-         if (QQ < xQ.q.PlaySound || QQ > xQ.q.SoundReset) return !1;
+         if (kk < Uk.p.PlaySound || kk > Uk.p.SoundReset) return !1;
```

#### 144. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1580` → after: `L1567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1567) · [Before (L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1580)

```diff
-           return (0, xQ.ge)(QQ, FQ, wQ, LQ, this.handlers)
+           return (0, Uk.ae)(kk, ek, ik, Dk, this.handlers)
```

#### 145. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1587` → after: `L1574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1574) · [Before (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1587)

```diff
-         for (let LQ = 0; LQ < 3; LQ++) FQ[2 - LQ] = xQ.z.listener(QQ, 0, LQ), FQ[5 - LQ] = xQ.z.forward(QQ, 0, LQ), FQ[8 - LQ] = xQ.z.up(QQ, 0, LQ);
+         for (let Dk = 0; Dk < 3; Dk++) ek[2 - Dk] = Uk.v.listener(kk, 0, Dk), ek[5 - Dk] = Uk.v.forward(kk, 0, Dk), ek[8 - Dk] = Uk.v.up(kk, 0, Dk);
```

#### 146. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1601` → after: `L1588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1588) · [Before (L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1601)

```diff
-         if (kQ < 0) return RF.b;
+         if (rk < 0) return Ve.e;
```

#### 147. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1612` → after: `L1599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1599) · [Before (L1612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1612)

```diff
-         if (!Number.isFinite(vQ) || !Number.isFinite(mQ) || !Number.isFinite(uQ)) return RF.b;
+         if (!Number.isFinite(Pk) || !Number.isFinite(mk) || !Number.isFinite(Mk)) return Ve.e;
```

#### 148. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1618` → after: `L1605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1605) · [Before (L1618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1618)

```diff
-           if (HQ = QQ * QQ + FQ * FQ + wQ * wQ, HQ > qQ * qQ) return RF.b
+           if (Kk = kk * kk + ek * ek + ik * ik, Kk > fk * fk) return Ve.e
```

#### 149. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1621` → after: `L1608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1608) · [Before (L1621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1621)

```diff
-         return bQ ? this.gameSound(bQ.howl, bQ.id, !0) : RF.b
+         return xk ? this.gameSound(xk.howl, xk.id, !0) : Ve.e
```

#### 150. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1648` → after: `L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1635) · [Before (L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1648)

```diff
-             const kQ = this.level > 0 ? wQ / this.level : wQ > 0 && null !== (oQ = null === (DQ = this.live.get(FQ)) || void 0 === DQ ? void 0 : DQ.rel) && void 0 !== oQ ? oQ : 0;
+             const rk = this.level > 0 ? ik / this.level : ik > 0 && null !== (Sk = null === (bk = this.live.get(ek)) || void 0 === bk ? void 0 : bk.rel) && void 0 !== Sk ? Sk : 0;
```

#### 151. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1654` → after: `L1641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1641) · [Before (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1654)

```diff
-               return QQ > 0 && QQ < 1 / 0 ? QQ : 1
+               return kk > 0 && kk < 1 / 0 ? kk : 1
```

#### 152. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1659` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1646) · [Before (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1659)

```diff
-             return (null !== (QQ = null === (wQ = this.live.get(FQ)) || void 0 === wQ ? void 0 : wQ.rel) && void 0 !== QQ ? QQ : 0) * this.level
+             return (null !== (kk = null === (ik = this.live.get(ek)) || void 0 === ik ? void 0 : ik.rel) && void 0 !== kk ? kk : 0) * this.level
```

#### 153. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1663` → after: `L1650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1650) · [Before (L1663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1663)

```diff
-             return null !== (QQ = null === (wQ = this.live.get(FQ)) || void 0 === wQ ? void 0 : wQ.rel) && void 0 !== QQ ? QQ : 0
+             return null !== (kk = null === (ik = this.live.get(ek)) || void 0 === ik ? void 0 : ik.rel) && void 0 !== kk ? kk : 0
```

#### 154. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1670` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1657) · [Before (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1670)

```diff
-                 refDistance: uF.h
+                 refDistance: Ke.k
```

#### 155. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1688-L1689` → after: `L1675-L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1675-L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1675-L1676) · [Before (L1688-L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1688-L1689)

```diff
-           const wQ = MF[QQ] === IF ? null : (0, SF.k)(eF[QQ]),
-             LQ = (0, SF.h)(UF(FQ), Math.sqrt(mQ), vQ);
+           const ik = ye[kk] === Ie ? null : (0, je.e)(pe[kk]),
+             Dk = (0, je.d)(ze(ek), Math.sqrt(mk), Pk);
```

#### 156. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1796-L1797` → after: `L1783-L1784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1783-L1784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1783-L1784) · [Before (L1796-L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1796-L1797)

```diff
-     var jF = wQ(40027),
-       aF = wQ(38657);
+     var We = ik(40186),
+       te = ik(38707);
```

#### 157. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1800` → after: `L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1787) · [Before (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1800)

```diff
-         this.key = QQ, this.model = FQ, this.host = LQ, this.MH = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.fqQ = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
+         this.key = kk, this.model = ek, this.host = Dk, this.vK = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.Dfk = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
```

#### 158. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1806` → after: `L1793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1793) · [Before (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1806)

```diff
-         !this.kx && QQ >= 0 && QQ < this.MH && QQ < xQ.zc.Max && this.Tx(QQ, QQ + 1)
+         !this.aU && kk >= 0 && kk < this.vK && kk < Uk.gc.Max && this.bH(kk, kk + 1)
```

#### 159. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1809-L1810` → after: `L1796-L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1796-L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1796-L1797) · [Before (L1809-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1809-L1810)

```diff
-         if (this.kx) return;
-         (QQ = Math.min(Math.max(Math.floor(QQ), 0), this.MH, xQ.zc.Max)) > this.count && this.Tx(this.count, QQ), this.count = QQ;
+         if (this.aU) return;
+         (kk = Math.min(Math.max(Math.floor(kk), 0), this.vK, Uk.gc.Max)) > this.count && this.bH(this.count, kk), this.count = kk;
```

#### 160. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1815` → after: `L1802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1802) · [Before (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1815)

```diff
-         } = this, qQ = this.fqQ !== QQ, oQ = wQ[0] !== FQ[0] || wQ[1] !== FQ[1] || wQ[2] !== FQ[2];
+         } = this, fk = this.Dfk !== kk, Sk = ik[0] !== ek[0] || ik[1] !== ek[1] || ik[2] !== ek[2];
```

#### 161. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1826-L1828` → after: `L1813-L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1813-L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1813-L1815) · [Before (L1826-L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1826-L1828)

```diff
-             FQ = QQ * vF.d,
-             wQ = uQ * xQ.zc.Bytes,
-             qQ = 0 !== vQ[FQ + vF.h] ? xQ.zc.Hidden : 0;
+             ek = kk * me.b,
+             ik = Mk * Uk.gc.Bytes,
+             fk = 0 !== Pk[ek + me.d] ? Uk.gc.Hidden : 0;
```

#### 162. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1831` → after: `L1818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1818) · [Before (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1831)

```diff
-         if ((0, xQ.Je)(DQ, 0, this.key, QQ, FQ, kQ, this.tailOf(kQ))) {
+         if ((0, Uk.Ce)(bk, 0, this.key, kk, ek, rk, this.tailOf(rk))) {
```

#### 163. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1833` → after: `L1820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1820) · [Before (L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1833)

```diff
-           LQ.length = 0, this.fqQ = QQ, wQ[0] = FQ[0], wQ[1] = FQ[1], wQ[2] = FQ[2]
+           Dk.length = 0, this.Dfk = kk, ik[0] = ek[0], ik[1] = ek[1], ik[2] = ek[2]
```

#### 164. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1837` → after: `L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1824) · [Before (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1837)

```diff
-         (QQ = Math.ceil(QQ)) <= this.MH || this.kx || (this.records = (0, aF.b)(this.records, new Float32Array(QQ * vF.d)), this.isDirty = (0, aF.b)(this.isDirty, new Uint8Array(QQ)), this.tail = new Uint8Array(QQ * xQ.zc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
+         (kk = Math.ceil(kk)) <= this.vK || this.aU || (this.records = (0, te.c)(this.records, new Float32Array(kk * me.b)), this.isDirty = (0, te.c)(this.isDirty, new Uint8Array(kk)), this.tail = new Uint8Array(kk * Uk.gc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
```

#### 165. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1840` → after: `L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1827) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1840)

```diff
-         this.kx || (this.kx = !0, this.host.kx(this, this.made ? this.key : null))
+         this.aU || (this.aU = !0, this.host.aU(this, this.made ? this.key : null))
```

#### 166. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1849` → after: `L1836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1836) · [Before (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1849)

```diff
-           this.made = (0, xQ.Ne)(QQ, 0, this.key, FQ, wQ, LQ)
+           this.made = (0, Uk.Fe)(kk, 0, this.key, ek, ik, Dk)
```

#### 167. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1854` → after: `L1841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1841) · [Before (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1854)

```diff
-         const FQ = QQ * xQ.zc.Bytes;
+         const ek = kk * Uk.gc.Bytes;
```

#### 168. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1865` → after: `L1852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1852) · [Before (L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1865)

```diff
-     var fF = wQ(617);
+     var Be = ik(591);
```

#### 169. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1879` → after: `L1866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1866) · [Before (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1879)

```diff
-         if (wQ = QQ, !fF.i.includes(wQ)) return null;
+         if (ik = kk, !Be.m.includes(ik)) return null;
```

#### 170. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1881` → after: `L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1868) · [Before (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1881)

```diff
-         const LQ = new hF(++this.keys, uQ.l.indexOf(QQ), FQ, this.host);
+         const Dk = new Te(++this.keys, Mk.n.indexOf(kk), ek, this.host);
```

#### 171. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1896` → after: `L1883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1883) · [Before (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1896)

```diff
-         this.key = QQ, this.lifeform = FQ, this.scale = wQ, this.host = LQ, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.kx = !1, this.sync()
+         this.key = kk, this.lifeform = ek, this.scale = ik, this.host = Dk, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.aU = !1, this.sync()
```

#### 172. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1899` → after: `L1886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1886) · [Before (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1899)

```diff
-         this.kx || (this.feet[0] = QQ[0], this.feet[1] = QQ[1], this.feet[2] = QQ[2], this.yaw = FQ, this.owed |= 2, this.sync())
+         this.aU || (this.feet[0] = kk[0], this.feet[1] = kk[1], this.feet[2] = kk[2], this.yaw = ek, this.owed |= 2, this.sync())
```

#### 173. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1902` → after: `L1889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1889) · [Before (L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1902)

```diff
-         this.kx || QQ === this.visible || (this.visible = QQ, this.owed |= 4, this.sync())
+         this.aU || kk === this.visible || (this.visible = kk, this.owed |= 4, this.sync())
```

#### 174. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1905` → after: `L1892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1892) · [Before (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1905)

```diff
-         this.kx || (this.kx = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
+         this.aU || (this.aU = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
```

#### 175. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1909` → after: `L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1896) · [Before (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1909)

```diff
-         return this.write(QQ) ? (this.host.settled(this, this.kx), !0) : (this.host.owes(this), !1)
+         return this.write(kk) ? (this.host.settled(this, this.aU), !0) : (this.host.owes(this), !1)
```

#### 176. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1914` → after: `L1901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1901) · [Before (L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1914)

```diff
-           if (!(0, xQ.Xe)(QQ, 0, this.key, this.lifeform, this.scale)) return !1;
+           if (!(0, Uk.Me)(kk, 0, this.key, this.lifeform, this.scale)) return !1;
```

#### 177. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1917` → after: `L1904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1904) · [Before (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1917)

```diff
-         const FQ = (2 & this.owed ? xQ.Xc.Pose : 0) | (4 & this.owed ? xQ.Xc.Visible : 0);
+         const ek = (2 & this.owed ? Uk.Hc.Pose : 0) | (4 & this.owed ? Uk.Hc.Visible : 0);
```

#### 178. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1919` → after: `L1906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1906) · [Before (L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1919)

```diff
-           if (!(0, xQ.Ve)(QQ, 0, this.key, FQ, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
+           if (!(0, Uk.Le)(kk, 0, this.key, ek, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
```

#### 179. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1923` → after: `L1910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1910) · [Before (L1923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1923)

```diff
-           if (!(0, xQ.Re)(QQ, 0, this.key)) return !1;
+           if (!(0, Uk.He)(kk, 0, this.key)) return !1;
```

#### 180. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1929` → after: `L1916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1916) · [Before (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1929)

```diff
-     var JF = wQ(40465);
+     var oe = ik(40587);
```

#### 181. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1932` → after: `L1919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1919) · [Before (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1932)

```diff
-       return (0, JF.d)(), (0, xQ.Ef)(QQ, FQ, wQ, LQ)
+       return (0, oe.b)(), (0, Uk.kf)(kk, ek, ik, Dk)
```

#### 182. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1934-L1935` → after: `L1921-L1922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1921-L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1921-L1922) · [Before (L1934-L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1934-L1935)

```diff
-     var nF = wQ(38666),
-       gF = wQ(40018);
+     var Oe = ik(38710),
+       ge = ik(40172);
```

#### 183. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1951` → after: `L1938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1938) · [Before (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1951)

```diff
-       const FQ = mF.d[QQ],
+       const ek = Me.e[kk],
```

#### 184. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1962` → after: `L1949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1949) · [Before (L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1962)

```diff
-       if (null === QQ || void 0 === QQ) return xQ.ad;
+       if (null === kk || void 0 === kk) return Uk.Sc;
```

#### 185. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1964` → after: `L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1951) · [Before (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1964)

```diff
-       return Number.isInteger(FQ) && FQ >= -2147483648 && FQ <= 2147483647 && String(FQ) === String(QQ) ? FQ : xQ.ad
+       return Number.isInteger(ek) && ek >= -2147483648 && ek <= 2147483647 && String(ek) === String(kk) ? ek : Uk.Sc
```

#### 186. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1968` → after: `L1955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1955) · [Before (L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1968)

```diff
-       return (0, xQ.If)(QQ, 0, FQ, null !== wQ && void 0 !== wQ ? wQ : Number.NaN)
+       return (0, Uk.tf)(kk, 0, ek, null !== ik && void 0 !== ik ? ik : Number.NaN)
```

#### 187. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1972` → after: `L1959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1959) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1972)

```diff
-         this.deps = QQ, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new nF.c((() => this.tables.getClientOption … [truncated]
+         this.deps = kk, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new Oe.d((() => this.tables.getClientOption … [truncated]
```

#### 188. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1979` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1966) · [Before (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1979)

```diff
-           kx: (QQ, FQ) => {
+           aU: (kk, ek) => {
```

#### 189. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1988` → after: `L1975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1975) · [Before (L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1988)

```diff
-         if (!this.isLocal(QQ)) throw new Error(`Attempted to ${FQ} for a player that is not the local player`)
+         if (!this.isLocal(kk)) throw new Error(`Attempted to ${ek} for a player that is not the local player`)
```

#### 190. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1991-L1992` → after: `L1978-L1979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1978-L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1978-L1979) · [Before (L1991-L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1991-L1992)

```diff
-         const FQ = this.api.Qp(QQ);
-         if (!FQ) throw new Error(`Entity ${QQ} has no replicated position`);
+         const ek = this.api.vy(kk);
+         if (!ek) throw new Error(`Entity ${kk} has no replicated position`);
```

#### 191. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2010` → after: `L1997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1997) · [Before (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2010)

```diff
-         this.assertLocal(QQ, "open shop"), DQ.l.GA("showShopFromServer", {
+         this.assertLocal(kk, "open shop"), bk.j.tm("showShopFromServer", {
```

#### 192. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2012` → after: `L1999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1999) · [Before (L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2012)

```diff
-           Xw: wQ
+           Db: ik
```

#### 193. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2021` → after: `L2008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2008) · [Before (L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2021)

```diff
-         DQ.l.GA("chat", {
+         bk.j.tm("chat", {
```

#### 194. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2030` → after: `L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2017) · [Before (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2030)

```diff
-         return FQ === xQ.ad ? void 0 : (0, jF.j)(this.api, FQ)
+         return ek === Uk.Sc ? void 0 : (0, We.e)(this.api, ek)
```

#### 195. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2034` → after: `L2021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2021) · [Before (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2034)

```diff
-         return wQ !== xQ.ad && (0, jF.f)(this.api, wQ, FQ)
+         return ik !== Uk.Sc && (0, We.d)(this.api, ik, ek)
```

#### 196. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2043` → after: `L2030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2030) · [Before (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2043)

```diff
-         if (!this.chunks.dataCleared(QQ, FQ, wQ)) return (0, jF.d)(this.api, QQ, FQ, wQ)
+         if (!this.chunks.dataCleared(kk, ek, ik)) return (0, We.c)(this.api, kk, ek, ik)
```

#### 197. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2050-L2051` → after: `L2037-L2038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2037-L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2037-L2038) · [Before (L2050-L2051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2050-L2051)

```diff
-         if (!Object.hasOwn(xQ.md, wQ)) throw new Error(`Unknown other-entity setting ${wQ}`);
-         const qQ = xQ.md[wQ],
+         if (!Object.hasOwn(Uk.cd, ik)) throw new Error(`Unknown other-entity setting ${ik}`);
+         const fk = Uk.cd[ik],
```

#### 198. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2053-L2055` → after: `L2040-L2042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2040-L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2040-L2042) · [Before (L2053-L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2053-L2055)

```diff
-         if (oQ === xQ.ad || !this.deps.beforeWrite()) return;
-         const DQ = (0, zQ.f)(LQ);
-         if (DQ.length > 16384) throw new Error(`The other-entity setting ${wQ}'s value is over 16384 bytes`);
+         if (Sk === Uk.Sc || !this.deps.beforeWrite()) return;
+         const bk = (0, Ek.c)(Dk);
+         if (bk.length > 16384) throw new Error(`The other-entity setting ${ik}'s value is over 16384 bytes`);
```

#### 199. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2067` → after: `L2054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2054) · [Before (L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2067)

```diff
-           wQ = (FQ === xQ.ad ? 0 : this.api.queries.directorEntity(FQ)) >= xQ.Bb.BYTES ? this.api.memoryData(this.api.scratch(), xQ.Bb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
+           ik = (ek === Uk.Sc ? 0 : this.api.queries.directorEntity(ek)) >= Uk.fb.BYTES ? this.api.memoryData(this.api.scratch(), Uk.fb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
```

#### 200. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2069` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2056) · [Before (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2069)

```diff
-         if (1 === xQ.Bb.headingIsDrawn(wQ, 0)) return xQ.Bb.heading(wQ, 0);
+         if (1 === Uk.fb.headingIsDrawn(ik, 0)) return Uk.fb.heading(ik, 0);
```

#### 201. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2071` → after: `L2058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2058) · [Before (L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2071)

```diff
-         return this.isLocal(QQ) && 0 === (xQ.v.playerFlags(LQ, 0) & xQ.Gd.FreeCam) ? xQ.v.heading(LQ, 0) : null
+         return this.isLocal(kk) && 0 === (Uk.t.playerFlags(Dk, 0) & Uk.yd.FreeCam) ? Uk.t.heading(Dk, 0) : null
```

#### 202. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2074-L2077` → after: `L2061-L2064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2061-L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2061-L2064) · [Before (L2074-L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2074-L2077)

```diff
-         const QQ = xQ.v.playerFlags(this.api.apiView, 0);
-         return 0 === (QQ & xQ.Gd.Replay) && this.api.readDrawnPosition(this.api.localId, yF) ? {
-           onGround: 0 !== (QQ & xQ.Gd.OnGround),
-           jumpHeld: 0 !== (QQ & xQ.Gd.JumpHeld)
+         const kk = Uk.t.playerFlags(this.api.apiView, 0);
+         return 0 === (kk & Uk.yd.Replay) && this.api.readDrawnPosition(this.api.localId, Re) ? {
+           onGround: 0 !== (kk & Uk.yd.OnGround),
+           jumpHeld: 0 !== (kk & Uk.yd.JumpHeld)
```

#### 203. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2080-L2081` → after: `L2067-L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2067-L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2067-L2068) · [Before (L2080-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2080-L2081)

```diff
-       owQ(QQ) {
-         return this.isLocal(QQ) ? this.items.ym() : null
+       jek(kk) {
+         return this.isLocal(kk) ? this.items.XM() : null
```

#### 204. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2091` → after: `L2078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2078) · [Before (L2091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2091)

```diff
-         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.ym()
+         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.XM()
```

#### 205. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2095` → after: `L2082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2082) · [Before (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2095)

```diff
-         const wQ = (0, HF.c)(LQ.c.get("crosshairGameView"), LQ.c.get("crosshairShownOverride"));
+         const ik = (0, xe.b)(Dk.b.get("crosshairGameView"), Dk.b.get("crosshairShownOverride"));
```

#### 206. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2100-L2102` → after: `L2087-L2089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2087-L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2087-L2089) · [Before (L2100-L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2100-L2102)

```diff
-           kQ = 0 === (xQ.v.playerFlags(this.api.apiView, 0) & xQ.Gd.ZoomFirstPerson),
-           vQ = null !== (FQ = this.tables.getClientOption("gunshotOrigin")) && void 0 !== FQ ? FQ : null;
-         return (0, HF.j)({
+           rk = 0 === (Uk.t.playerFlags(this.api.apiView, 0) & Uk.yd.ZoomFirstPerson),
+           Pk = null !== (ek = this.tables.getClientOption("gunshotOrigin")) && void 0 !== ek ? ek : null;
+         return (0, xe.f)({
```

#### 207. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2105` → after: `L2092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2092) · [Before (L2105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2105)

```diff
-         }, kQ, (0, bF.c)(), vQ)
+         }, rk, (0, ne.e)(), Pk)
```

#### 208. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2108` → after: `L2095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2095) · [Before (L2108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2108)

```diff
-         LQ.c.set({
+         Dk.b.set({
```

#### 209. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2125` → after: `L2112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2112) · [Before (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2125)

```diff
-         if (this.isLocal(QQ)) return 0 !== (xQ.v.playerFlags(this.api.apiView, 0) & xQ.Gd.Crouching);
+         if (this.isLocal(kk)) return 0 !== (Uk.t.playerFlags(this.api.apiView, 0) & Uk.yd.Crouching);
```

#### 210. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2127` → after: `L2114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2114) · [Before (L2127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2127)

```diff
-         return FQ !== xQ.ad && 1 === this.api.queries.entityCrouching(FQ)
+         return ek !== Uk.Sc && 1 === this.api.queries.entityCrouching(ek)
```

#### 211. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2133` → after: `L2120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2120) · [Before (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2133)

```diff
-         return 0 !== (xQ.v.playerFlags(this.api.apiView, 0) & xQ.Gd.AttemptingBreak)
+         return 0 !== (Uk.t.playerFlags(this.api.apiView, 0) & Uk.yd.AttemptingBreak)
```

#### 212. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2136` → after: `L2123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2123) · [Before (L2136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2136)

```diff
-         return this.live.XQQ()
+         return this.live.bkk()
```

#### 213. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2140` → after: `L2127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2127) · [Before (L2140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2140)

```diff
-         for (let FQ = 0; FQ < 3; FQ++) dF.origin[FQ] = xQ.v.wFQ(QQ, 0, FQ), dF.direction[FQ] = xQ.v.actionDir(QQ, 0, FQ);
+         for (let ek = 0; ek < 3; ek++) ki.origin[ek] = Uk.t.Ykk(kk, 0, ek), ki.direction[ek] = Uk.t.actionDir(kk, 0, ek);
```

#### 214. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2156-L2157` → after: `L2143-L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2143-L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2143-L2144) · [Before (L2156-L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2156-L2157)

```diff
-       RFQ(QQ, FQ, wQ, LQ, qQ) {
-         return 1 === this.api.queries.terrainBlocked(LQ, QQ, FQ, wQ, Dw(null !== qQ && void 0 !== qQ ? qQ : null))
+       okk(kk, ek, ik, Dk, fk) {
+         return 1 === this.api.queries.terrainBlocked(Dk, kk, ek, ik, ri(null !== fk && void 0 !== fk ? fk : null))
```

#### 215. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2169` → after: `L2156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2156) · [Before (L2169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2169)

```diff
-         return this.chunks.um(QQ, FQ, wQ)
+         return this.chunks.wP(kk, ek, ik)
```

#### 216. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2175` → after: `L2162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2162) · [Before (L2175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2175)

```diff
-         return 1 === LQ ? DQ : DQ.rate(LQ)
+         return 1 === Dk ? bk : bk.rate(Dk)
```

#### 217. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2184-L2187` → after: `L2171-L2174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2171-L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2171-L2174) · [Before (L2184-L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2184-L2187)

```diff
-         if (!DQ) return RF.b;
-         const kQ = null === wQ || void 0 === wQ ? void 0 : wQ.BF,
-           vQ = null !== (qQ = null === wQ || void 0 === wQ ? void 0 : wQ.maxHearDist) && void 0 !== qQ ? qQ : uF.d,
-           mQ = null !== (oQ = null === wQ || void 0 === wQ ? void 0 : wQ.refDistance) && void 0 !== oQ ? oQ : uF.h;
+         if (!bk) return Ve.e;
+         const rk = null === ik || void 0 === ik ? void 0 : ik.ze,
+           Pk = null !== (fk = null === ik || void 0 === ik ? void 0 : ik.maxHearDist) && void 0 !== fk ? fk : Ke.h,
+           mk = null !== (Sk = null === ik || void 0 === ik ? void 0 : ik.refDistance) && void 0 !== Sk ? Sk : Ke.k;
```

#### 218. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2193` → after: `L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2180) · [Before (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2193)

```diff
-             if (!this.api.readPosition(QQ, PF)) return RF.b;
+             if (!this.api.readPosition(kk, Ge)) return Ve.e;
```

#### 219. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2203-L2204` → after: `L2190-L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2190-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2190-L2191) · [Before (L2203-L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2203-L2204)

```diff
-           if (0 === xQ.v.viewProj(QQ, 0, 3) && 0 === xQ.v.viewProj(QQ, 0, 7) && 0 === xQ.v.viewProj(QQ, 0, 11)) return null;
-           for (let FQ = 0; FQ < 3; FQ++) ZF[FQ] = xQ.v.eye(QQ, 0, FQ)
+           if (0 === Uk.t.viewProj(kk, 0, 3) && 0 === Uk.t.viewProj(kk, 0, 7) && 0 === Uk.t.viewProj(kk, 0, 11)) return null;
+           for (let ek = 0; ek < 3; ek++) Ne[ek] = Uk.t.eye(kk, 0, ek)
```

#### 220. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2206` → after: `L2193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2193) · [Before (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2206)

```diff
-         return Number.isFinite(ZF[0] + ZF[1] + ZF[2]) ? ZF : null
+         return Number.isFinite(Ne[0] + Ne[1] + Ne[2]) ? Ne : null
```

#### 221. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2209` → after: `L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2196) · [Before (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2209)

```diff
-         if (!Number.isInteger(LQ) || LQ < 0 || LQ > 65535) throw new Error(`Invalid block id ${LQ}`);
+         if (!Number.isInteger(Dk) || Dk < 0 || Dk > 65535) throw new Error(`Invalid block id ${Dk}`);
```

#### 222. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2215` → after: `L2202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2202) · [Before (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2215)

```diff
-         if (1 === this.api.queries.KU(qQ, oQ, DQ, LQ)) {
+         if (1 === this.api.queries.RV(fk, Sk, bk, Dk)) {
```

#### 223. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2244` → after: `L2231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2231) · [Before (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2244)

```diff
-                 look: xQ.ec.FlatOnTop,
+                 look: Uk.Ob.FlatOnTop,
```

#### 224. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2247` → after: `L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2234) · [Before (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2247)

```diff
-                 look: xQ.ec.FlatOpaque,
+                 look: Uk.Ob.FlatOpaque,
```

#### 225. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2250` → after: `L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2237) · [Before (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2250)

```diff
-                 look: xQ.ec.Flat,
+                 look: Uk.Ob.Flat,
```

#### 226. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2255` → after: `L2242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2242) · [Before (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2255)

```diff
-                 look: xQ.ec.Chevrons, colour: [...(0, YF.e)(QQ.colour), QQ.alpha]
+                 look: Uk.Ob.Chevrons, colour: [...(0, Ue.b)(kk.colour), kk.alpha]
```

#### 227. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2259` → after: `L2246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2246) · [Before (L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2259)

```diff
-                 look: xQ.ec.FurnaceFire, colour: [1, 1, 1, 1]
+                 look: Uk.Ob.FurnaceFire, colour: [1, 1, 1, 1]
```

#### 228. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2271` → after: `L2258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2258) · [Before (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2271)

```diff
-             const FQ = null !== (kQ = QQ.uvs) && void 0 !== kQ ? kQ : [];
+             const ek = null !== (rk = kk.uvs) && void 0 !== rk ? rk : [];
```

#### 229. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2274` → after: `L2261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2261) · [Before (L2274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2274)

```diff
-               DQ.setFloat32(4 * (3 * wQ + QQ), null !== (vQ = FQ[QQ]) && void 0 !== vQ ? vQ : 0, !0)
+               bk.setFloat32(4 * (3 * ik + kk), null !== (Pk = ek[kk]) && void 0 !== Pk ? Pk : 0, !0)
```

#### 230. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2279-L2280` → after: `L2266-L2267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2266-L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2266-L2267) · [Before (L2279-L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2279-L2280)

```diff
-         }(QQ, (0, vF.j)(FQ));
-         return (0, xQ.Ae)(qQ, 0, LQ, oQ, DQ, wQ, kQ, QQ.indices.length, vQ) && this.liveMeshes.add(LQ), LQ
+         }(kk, (0, me.e)(ek));
+         return (0, Uk.ve)(fk, 0, Dk, Sk, bk, ik, rk, kk.indices.length, Pk) && this.liveMeshes.add(Dk), Dk
```

#### 231. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2287-L2289` → after: `L2274-L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2274-L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2274-L2276) · [Before (L2287-L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2287-L2289)

```diff
-         FQ.anchor && (qQ |= xQ.ic.Anchor, Qw[0] = FQ.anchor[0], Qw[1] = FQ.anchor[1], Qw[2] = FQ.anchor[2]), void 0 !== FQ.visible && (qQ |= xQ.ic.Visible), FQ.uvOffset && (qQ |= xQ.ic.UvOffset, Fw[0] = FQ.uvOffset[0], Fw[1] = FQ.uvOffset[1]);
-         const oQ = null !== (wQ = FQ.visibility) && void 0 !== wQ ? wQ : 1;
-         void 0 !== FQ.visibility && (qQ |= xQ.ic.Visibility), FQ.scale && (qQ |= xQ.ic.Scale, ww[0] = FQ.scale[0], ww[1] = FQ.scale[1], ww[2] = FQ.scale[2]), 0 !== qQ && (0, xQ.De)(LQ, 0, QQ, qQ, FQ.visible ? 1 : 0, Qw, Fw, oQ, ww)
+         ek.anchor && (fk |= Uk.Pb.Anchor, ei[0] = ek.anchor[0], ei[1] = ek.anchor[1], ei[2] = ek.anchor[2]), void 0 !== ek.visible && (fk |= Uk.Pb.Visible), ek.uvOffset && (fk |= Uk.Pb.UvOffset, ii[0] = ek.uvOffset[0], ii[1] = ek.uvOffset[1]);
+         const Sk = null !== (ik = ek.visibility) && void 0 !== ik ? ik : 1;
+         void 0 !== ek.visibility && (fk |= Uk.Pb.Visibility), ek.scale && (fk |= Uk.Pb.Scale, Di[0] = ek.scale[0], Di[1] = ek.scale[1], Di[2] = ek.scale[2]), 0 !== fk && (0, Uk.Ae)(Dk, 0, kk, fk, ek.visible ? 1 : 0, ei, ii, Sk, Di)
```

#### 232. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2293` → after: `L2280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2280) · [Before (L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2293)

```diff
-         FQ && !(0, xQ.Be)(FQ, 0, QQ) || this.liveMeshes.delete(QQ)
+         ek && !(0, Uk.ye)(ek, 0, kk) || this.liveMeshes.delete(kk)
```

#### 233. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2342` → after: `L2329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2329) · [Before (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2342)

```diff
-         const FQ = `${QQ.colour} ${QQ.alpha}`;
+         const ek = `${kk.colour} ${kk.alpha}`;
```

#### 234. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2384` → after: `L2371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2371) · [Before (L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2384)

```diff
-         for (; wQ < QQ.length && (0, xQ.Ke)(FQ, 0, QQ[wQ]);) wQ++;
+         for (; ik < kk.length && (0, Uk.Ee)(ek, 0, kk[ik]);) ik++;
```

#### 235. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2388` → after: `L2375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2375) · [Before (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2388)

```diff
-           (LQ ? (0, xQ.Mf)(FQ, 0, LQ.width, LQ.alpha, 1, LQ.endAtSolidFace ? 1 : 0) : (0, xQ.Mf)(FQ, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
+           (Dk ? (0, Uk.vf)(ek, 0, Dk.width, Dk.alpha, 1, Dk.endAtSolidFace ? 1 : 0) : (0, Uk.vf)(ek, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
```

#### 236. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2391` → after: `L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2378) · [Before (L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2391)

```diff
-         void 0 !== qQ && (0, xQ.Hf)(FQ, 0, null !== qQ && void 0 !== qQ ? qQ : 0, null === qQ ? 1 : 0) && (this.pendingFar = void 0)
+         void 0 !== fk && (0, Uk.qf)(ek, 0, null !== fk && void 0 !== fk ? fk : 0, null === fk ? 1 : 0) && (this.pendingFar = void 0)
```

#### 237. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2396` → after: `L2383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2383) · [Before (L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2396)

```diff
-         wQ && LQ !== xQ.ad && (0, xQ.Pf)(wQ, 0, LQ, FQ)
+         ik && Dk !== Uk.Sc && (0, Uk.Hf)(ik, 0, Dk, ek)
```

#### 238. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2401` → after: `L2388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2388) · [Before (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2401)

```diff
-         wQ && LQ !== xQ.ad && kw(wQ, LQ, FQ)
+         ik && Dk !== Uk.Sc && Pi(ik, Dk, ek)
```

#### 239. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2417` → after: `L2404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2404) · [Before (L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2417)

```diff
-         return FQ !== xQ.ad && 1 === this.api.queries.entityInteractable(FQ)
+         return ek !== Uk.Sc && 1 === this.api.queries.entityInteractable(ek)
```

#### 240. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2430` → after: `L2417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2417) · [Before (L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2430)

```diff
-           return null !== QQ && void 0 !== QQ ? QQ : null
+           return null !== kk && void 0 !== kk ? kk : null
```

#### 241. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2437` → after: `L2424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2424) · [Before (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2437)

```diff
-         return BF[0] = xQ.v.eye(QQ, 0, 0), BF[1] = xQ.v.eye(QQ, 0, 1), BF[2] = xQ.v.eye(QQ, 0, 2), BF
+         return Je[0] = Uk.t.eye(kk, 0, 0), Je[1] = Uk.t.eye(kk, 0, 1), Je[2] = Uk.t.eye(kk, 0, 2), Je
```

#### 242. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2440` → after: `L2427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2427) · [Before (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2440)

```diff
-         return xQ.v.cameraFar(this.api.apiView, 0)
+         return Uk.t.cameraFar(this.api.apiView, 0)
```

#### 243. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2451` → after: `L2438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2438) · [Before (L2451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2451)

```diff
-         FQ && wQ !== xQ.ad && (0, xQ.ne)(FQ, 0, wQ)
+         ek && ik !== Uk.Sc && (0, Uk.ge)(ek, 0, ik)
```

#### 244. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2456-L2458` → after: `L2443-L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2443-L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2443-L2445) · [Before (L2456-L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2456-L2458)

```diff
-         wQ && EF(wQ, 0, gF.b.Chat, (0, zQ.f)((0, gF.j)({
-           Om: QQ,
-           sm: FQ
+         ik && Ze(ik, 0, ge.e.Chat, (0, Ek.c)((0, ge.j)({
+           hM: kk,
+           aM: ek
```

#### 245. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2462` → after: `L2449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2449) · [Before (L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2462)

```diff
-         QQ.length <= 119 && this.sendChat(`/${QQ}`)
+         kk.length <= 119 && this.sendChat(`/${kk}`)
```

#### 246. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2470` → after: `L2457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2457) · [Before (L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2470)

```diff
-           kQ = qQ.um(QQ, FQ, wQ),
+           rk = fk.wP(kk, ek, ik),
```

#### 247. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2473-L2474` → after: `L2460-L2461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2460-L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2460-L2461) · [Before (L2473-L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2473-L2474)

```diff
-           const [LQ, oQ, mQ] = [QQ - vQ.x, FQ - vQ.y, wQ - vQ.z], uQ = qw[qQ.um(LQ, oQ, mQ)], HQ = null === uQ || void 0 === uQ ? void 0 : uQ.positions.some((QQ => QQ.id === kQ && QQ.x === vQ.x && QQ.y === vQ.y && QQ.z === vQ.z));
-           for (const QQ of (HQ && uQ ? uQ : vQ.main).positions) qQ.um(LQ + QQ.x, oQ + QQ.y, mQ + QQ.z) === QQ.id && DQ(LQ + QQ.x, oQ + QQ.y, mQ + QQ.z, 0, QQ.id)
+           const [Dk, Sk, mk] = [kk - Pk.x, ek - Pk.y, ik - Pk.z], Mk = Si[fk.wP(Dk, Sk, mk)], Kk = null === Mk || void 0 === Mk ? void 0 : Mk.positions.some((kk => kk.id === rk && kk.x === Pk.x && kk.y === Pk.y && kk.z === Pk.z));
+           for (const kk of (Kk && Mk ? Mk : Pk.main).positions) fk.wP(Dk + kk.x, Sk + kk.y, mk + kk.z) === kk.id && bk(Dk + kk.x, Sk + kk.y, mk + kk.z, 0, kk.id)
```

#### 248. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2480` → after: `L2467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2467) · [Before (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2480)

```diff
-             DQ(LQ, oQ, kQ, HQ.id, qQ.um(LQ, oQ, kQ))
+             bk(Dk, Sk, rk, Kk.id, fk.wP(Dk, Sk, rk))
```

#### 249. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2484` → after: `L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2471) · [Before (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2484)

```diff
-           let vQ = qQ.um(QQ, FQ + 1, wQ);
+           let Pk = fk.wP(kk, ek + 1, ik);
```

#### 250. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2496` → after: `L2483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2483) · [Before (L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2496)

```diff
-         return 0 !== qQ && 0 !== oQ && LQ.blockRootId(QQ) === LQ.blockRootId(FQ) ? DQ && wQ !== oQ ? oQ : void 0 : 0 === oQ || !DQ && 0 !== wQ ? DQ ? 0 : void 0 : oQ
+         return 0 !== fk && 0 !== Sk && Dk.blockRootId(kk) === Dk.blockRootId(ek) ? bk && ik !== Sk ? Sk : void 0 : 0 === Sk || !bk && 0 !== ik ? bk ? 0 : void 0 : Sk
```

#### 251. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2499` → after: `L2486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2486) · [Before (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2499)

```diff
-     const mw = xQ.vc + xQ.yc * xQ.Gc.BYTES,
+     const Mi = Uk.bc + Uk.ec * Uk.kc.BYTES,
```

#### 252. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2504-L2505` → after: `L2491-L2492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2491-L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2491-L2492) · [Before (L2504-L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2504-L2505)

```diff
-         Sm: 0,
-         wm: null,
+         EM: 0,
+         vr: null,
```

#### 253. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2509` → after: `L2496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2496) · [Before (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2509)

```diff
-         get: () => () => xQ.ld
+         get: () => () => Uk.ad
```

#### 254. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2521` → after: `L2508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2508) · [Before (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2521)

```diff
-         this.deps = QQ, this.VQ = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(xQ.yc), this.ids = new Uint16Array(xQ.yc), this.amounts = new Uint16Array(xQ.yc), this.attrRead = new Float64Array(xQ.yc).fill(-1 … [truncated]
+         this.deps = kk, this.le = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(Uk.ec), this.ids = new Uint16Array(Uk.ec), this.amounts = new Uint16Array(Uk.ec), this.attrRead = new Float64Array(Uk.ec).fill(-1 … [truncated]
```

#### 255. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2537` → after: `L2524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2524) · [Before (L2537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2537)

```diff
-         return Number.isInteger(QQ) && QQ >= 0 && QQ < this.len && 0 !== this.ids[QQ] && null !== (FQ = this.facades[QQ]) && void 0 !== FQ ? FQ : null
+         return Number.isInteger(kk) && kk >= 0 && kk < this.len && 0 !== this.ids[kk] && null !== (ek = this.facades[kk]) && void 0 !== ek ? ek : null
```

#### 256. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2544` → after: `L2531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2531) · [Before (L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2544)

```diff
-         for (let FQ = 0; FQ < Math.min(xQ.td, this.len); FQ++) QQ.push(this.slot(FQ));
+         for (let ek = 0; ek < Math.min(Uk.id, this.len); ek++) kk.push(this.slot(ek));
```

#### 257. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2549` → after: `L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2536) · [Before (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2549)

```diff
-         for (let FQ = 0; FQ < Math.min(xQ.td - xQ.i, this.len); FQ++) 0 === this.ids[FQ] && QQ++;
+         for (let ek = 0; ek < Math.min(Uk.id - Uk.i, this.len); ek++) 0 === this.ids[ek] && kk++;
```

#### 258. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2554` → after: `L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2541) · [Before (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2554)

```diff
-         for (let LQ = 0; LQ < Math.min(xQ.td, this.len); LQ++) {
+         for (let Dk = 0; Dk < Math.min(Uk.id, this.len); Dk++) {
```

#### 259. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2557` → after: `L2544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2544) · [Before (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2557)

```diff
-           if ((null === qQ || void 0 === qQ ? void 0 : qQ.name) === QQ) FQ += null !== (wQ = qQ.amount) && void 0 !== wQ ? wQ : 1
+           if ((null === fk || void 0 === fk ? void 0 : fk.name) === kk) ek += null !== (ik = fk.amount) && void 0 !== ik ? ik : 1
```

#### 260. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2563` → after: `L2550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2550) · [Before (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2563)

```diff
-         return null !== (FQ = this.instances[QQ]) && void 0 !== FQ ? FQ : 0
+         return null !== (ek = this.instances[kk]) && void 0 !== ek ? ek : 0
```

#### 261. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2584` → after: `L2571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2571) · [Before (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2584)

```diff
-         this.VQ[0] = QQ, this.VQ[1] = FQ, this.VQ[2] = wQ, this.version++
+         this.le[0] = kk, this.le[1] = ek, this.le[2] = ik, this.version++
```

#### 262. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2588-L2590` → after: `L2575-L2577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2575-L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2575-L2577) · [Before (L2588-L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2588-L2590)

```diff
-           FQ = xQ.v.inventoryViewPtr(QQ, 0),
-           wQ = xQ.v.inventoryVersion(QQ, 0),
-           LQ = xQ.v.selectedSlot(QQ, 0);
+           ek = Uk.t.inventoryViewPtr(kk, 0),
+           ik = Uk.t.inventoryVersion(kk, 0),
+           Dk = Uk.t.selectedSlot(kk, 0);
```

#### 263. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2592` → after: `L2579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2579) · [Before (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2592)

```diff
-         const qQ = xQ.v.slotIcon(QQ, 0);
+         const fk = Uk.t.slotIcon(kk, 0);
```

#### 264. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2596` → after: `L2583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2583) · [Before (L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2596)

```diff
-           DQ = oQ ? Math.min(oQ.getUint32(0, !0), xQ.yc) : 0;
+           bk = Sk ? Math.min(Sk.getUint32(0, !0), Uk.ec) : 0;
```

#### 265. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2599-L2601` → after: `L2586-L2588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2586-L2588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2586-L2588) · [Before (L2599-L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2599-L2601)

```diff
-         for (let vQ = 0; vQ < xQ.yc; vQ++) {
-           const QQ = xQ.vc + vQ * xQ.Gc.BYTES,
-             FQ = null !== oQ && vQ < DQ ? xQ.Gc.item(oQ, QQ) : 0;
+         for (let Pk = 0; Pk < Uk.ec; Pk++) {
+           const kk = Uk.bc + Pk * Uk.kc.BYTES,
+             ek = null !== Sk && Pk < bk ? Uk.kc.item(Sk, kk) : 0;
```

#### 266. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2606-L2607` → after: `L2593-L2594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2593-L2594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2593-L2594) · [Before (L2606-L2607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2606-L2607)

```diff
-           const wQ = xQ.Gc.amount(oQ, QQ),
-             LQ = xQ.Gc.attrVersion(oQ, QQ);
+           const ik = Uk.kc.amount(Sk, kk),
+             Dk = Uk.kc.attrVersion(Sk, kk);
```

#### 267. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2643` → after: `L2630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2630) · [Before (L2643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2643)

```diff
-           vQ += 8 + (0, bQ.Yd)(FQ);
+           Pk += 8 + (0, xk.Ie)(ek);
```

#### 268. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2669-L2670` → after: `L2656-L2657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2656-L2657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2656-L2657) · [Before (L2669-L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2669-L2670)

```diff
-           kQ = DQ === xQ.ld ? xQ.Qb : null !== (qQ = null === (oQ = this.extras()) || void 0 === oQ ? void 0 : oQ[1]) && void 0 !== qQ ? qQ : xQ.Qb;
-         return this.settle(DQ), kQ === xQ.Qb ? null : kQ
+           rk = bk === Uk.ad ? Uk.Ab : null !== (fk = null === (Sk = this.extras()) || void 0 === Sk ? void 0 : Sk[1]) && void 0 !== fk ? fk : Uk.Ab;
+         return this.settle(bk), rk === Uk.Ab ? null : rk
```

#### 269. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2697` → after: `L2684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2684) · [Before (L2697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2697)

```diff
-         const kQ = oQ === xQ.ld ? null : this.extras();
+         const rk = Sk === Uk.ad ? null : this.extras();
```

#### 270. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2701-L2702` → after: `L2688-L2689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2688-L2689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2688-L2689) · [Before (L2701-L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2701-L2702)

```diff
-             Sm: QQ,
-             wm: FQ === xQ.Qb ? null : FQ,
+             EM: kk,
+             vr: ek === Uk.Ab ? null : ek,
```

#### 271. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2725` → after: `L2712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2712) · [Before (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2725)

```diff
-           if (DQ.length > 1024) return oQ(new Error(`The crafting station ${QQ}'s name is over 1024 bytes`)), null;
+           if (bk.length > 1024) return Sk(new Error(`The crafting station ${kk}'s name is over 1024 bytes`)), null;
```

#### 272. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2731-L2732` → after: `L2718-L2719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2718-L2719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2718-L2719) · [Before (L2731-L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2731-L2732)

```diff
-           vQ = qQ.queries.craftingView(null !== (LQ = null === DQ || void 0 === DQ ? void 0 : DQ.length) && void 0 !== LQ ? LQ : 0, kQ ? FQ : 0, kQ ? wQ : 0);
-         return vQ < xQ.rb.BYTES ? (qQ.reportCorruption(`crafting_view's answer of ${vQ} bytes`), null) : qQ.memoryData(qQ.scratch(), vQ, 1, "crafting_view's answer")
+           Pk = fk.queries.craftingView(null !== (Dk = null === bk || void 0 === bk ? void 0 : bk.length) && void 0 !== Dk ? Dk : 0, rk ? ek : 0, rk ? ik : 0);
+         return Pk < Uk.Z.BYTES ? (fk.reportCorruption(`crafting_view's answer of ${Pk} bytes`), null) : fk.memoryData(fk.scratch(), Pk, 1, "crafting_view's answer")
```

#### 273. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2745-L2746` → after: `L2732-L2733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2732-L2733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2732-L2733) · [Before (L2745-L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2745-L2746)

```diff
-         if (QQ === xQ.jd)(0, JF.d)();
-         else if (QQ !== xQ.ld) {
+         if (kk === Uk.Yc)(0, oe.b)();
+         else if (kk !== Uk.ad) {
```

#### 274. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2749-L2750` → after: `L2736-L2737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2736-L2737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2736-L2737) · [Before (L2749-L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2749-L2750)

```diff
-             return (0, JF.d)(), (0, xQ.$f)(QQ, FQ, wQ)
-           }(FQ, 0, QQ) || this.deps.onError(new Error(`Sync op ${QQ}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
+             return (0, oe.b)(), (0, Uk.Of)(kk, ek, ik)
+           }(ek, 0, kk) || this.deps.onError(new Error(`Sync op ${kk}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
```

#### 275. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2752` → after: `L2739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2739) · [Before (L2752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2752)

```diff
-         return this.stopped || this.refresh(), QQ !== xQ.ld
+         return this.stopped || this.refresh(), kk !== Uk.ad
```

#### 276. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2759` → after: `L2746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2746) · [Before (L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2759)

```diff
-       Sw = 1.2 * xF.e.pG,
+       ji = 1.2 * He.g.zp,
```

#### 277. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2767` → after: `L2754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2754) · [Before (L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2767)

```diff
-       return FQ || (Ow.size >= 64 && Ow.clear(), FQ = iw.encode(`{"emitRate":${QQ}}`), Ow.set(QQ, FQ)), FQ
+       return ek || (Fi.size >= 64 && Fi.clear(), ek = si.encode(`{"emitRate":${kk}}`), Fi.set(kk, ek)), ek
```

#### 278. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2771` → after: `L2758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2758) · [Before (L2771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2771)

```diff
-       return Number.isFinite(QQ) && QQ > 0 ? QQ : 0
+       return Number.isFinite(kk) && kk > 0 ? kk : 0
```

#### 279. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2787` → after: `L2774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2774) · [Before (L2787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2787)

```diff
-       return QQ.length > xQ.Fd.MaxOpts ? (wQ(new Error(`${FQ}'s particle opts are over ${xQ.Fd.MaxOpts} bytes of JSON`)), null) : QQ
+       return kk.length > Uk.vd.MaxOpts ? (ik(new Error(`${ek}'s particle opts are over ${Uk.vd.MaxOpts} bytes of JSON`)), null) : kk
```

#### 280. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2811-L2812` → after: `L2798-L2799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2798-L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2798-L2799) · [Before (L2811-L2812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2811-L2812)

```diff
-           qQ = null !== (wQ = FQ.half) && void 0 !== wQ ? wQ : pw;
-         if (!LQ || this.live >= xQ.Fd.MaxLiveKeys || this.nextKey > xQ.Fd.MaxKey || !Iw(FQ.pos, qQ)) return Tw;
+           fk = null !== (ik = ek.half) && void 0 !== ik ? ik : Ci;
+         if (!Dk || this.live >= Uk.vd.MaxLiveKeys || this.nextKey > Uk.vd.MaxKey || !Ii(ek.pos, fk)) return vi;
```

#### 281. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2818` → after: `L2805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2805) · [Before (L2818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2818)

```diff
-               MH: QQ.MH,
+               vK: kk.vK,
```

#### 282. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2826-L2828` → after: `L2813-L2815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2813-L2815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2813-L2815) · [Before (L2826-L2828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2826-L2828)

```diff
-               gravity: null !== (FQ = QQ.gravity) && void 0 !== FQ ? FQ : pw,
-               dir1: null !== (wQ = QQ.dir1) && void 0 !== wQ ? wQ : Gw,
-               dir2: null !== (LQ = QQ.dir2) && void 0 !== LQ ? LQ : Gw,
+               gravity: null !== (ek = kk.gravity) && void 0 !== ek ? ek : Ci,
+               dir1: null !== (ik = kk.dir1) && void 0 !== ik ? ik : Li,
+               dir2: null !== (Dk = kk.dir2) && void 0 !== Dk ? Dk : Li,
```

#### 283. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2834` → after: `L2821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2821) · [Before (L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2834)

```diff
-         return DQ && (0, xQ.ef)(LQ, 0, oQ, 0, xQ.Fd.PresetNone, 0, Ww, Rw, DQ) ? (this.nextKey++, this.live++, this.started = !0, new zw(this, this.session, oQ, QQ, qQ)) : Tw
+         return bk && (0, Uk.Ue)(Dk, 0, Sk, 0, Uk.vd.PresetNone, 0, di, Vi, bk) ? (this.nextKey++, this.live++, this.started = !0, new ai(this, this.session, Sk, kk, fk)) : vi
```

#### 284. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2846` → after: `L2833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2833) · [Before (L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2846)

```diff
-         qQ && (0, xQ.$e)(FQ, 0, 0, xQ.Fd.PresetNone, xQ.Fd.HasBox, 0, Ww, Rw, qQ)
+         fk && (0, Uk.Pe)(ek, 0, 0, Uk.vd.PresetNone, Uk.vd.HasBox, 0, di, Vi, fk)
```

#### 285. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2850-L2851` → after: `L2837-L2838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2837-L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2837-L2838) · [Before (L2850-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2850-L2851)

```diff
-           qQ = Math.min(Math.floor(wQ), xQ.Fd.MaxBurst);
-         if (!LQ || !Object.hasOwn(xQ.lc, QQ) || !(qQ > 0)) return;
+           fk = Math.min(Math.floor(ik), Uk.vd.MaxBurst);
+         if (!Dk || !Object.hasOwn(Uk.Tb, kk) || !(fk > 0)) return;
```

#### 286. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2854` → after: `L2841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2841) · [Before (L2854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2854)

```diff
-         Number.isFinite(Ww[0] + Ww[1] + Ww[2]) && (0, xQ.$e)(LQ, 0, 0, xQ.lc[QQ], xQ.Fd.HasBox, qQ, Ww, Rw, Cw)
+         Number.isFinite(di[0] + di[1] + di[2]) && (0, Uk.Pe)(Dk, 0, 0, Uk.Tb[kk], Uk.vd.HasBox, fk, di, Vi, Ai)
```

#### 287. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2859` → after: `L2846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2846) · [Before (L2859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2859)

```diff
-         return this.started = !1, this.nextKey = 1, this.live = 0, !QQ || (0, xQ.gf)(QQ, 0)
+         return this.started = !1, this.nextKey = 1, this.live = 0, !kk || (0, Uk.We)(kk, 0)
```

#### 288. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2866` → after: `L2853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2853) · [Before (L2866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2866)

```diff
-         wQ && (0, xQ.hf)(wQ, 0, FQ) && this.live--
+         ik && (0, Uk.Xe)(ik, 0, ek) && this.live--
```

#### 289. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2883` → after: `L2870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2870) · [Before (L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2883)

```diff
-           Iw(QQ, this.half) && (0, xQ.if)(wQ, 0, this.key, xQ.Fd.HasBox, Ww, Rw, Cw)
+           Ii(kk, this.half) && (0, Uk._e)(ik, 0, this.key, Uk.vd.HasBox, di, Vi, Ai)
```

#### 290. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2889` → after: `L2876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2876) · [Before (L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2889)

```diff
-         FQ && wQ !== this.rate && (0, xQ.if)(FQ, 0, this.key, 0, pw, pw, sw(wQ)) && (this.rate = wQ, this.emitted ||= wQ > 0)
+         ek && ik !== this.rate && (0, Uk._e)(ek, 0, this.key, 0, Ci, Ci, ui(ik)) && (this.rate = ik, this.emitted ||= ik > 0)
```

#### 291. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2893-L2894` → after: `L2880-L2881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2880-L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2880-L2881) · [Before (L2893-L2894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2893-L2894)

```diff
-           wQ = Math.min(Math.floor(QQ), xQ.Fd.MaxBurst);
-         FQ && wQ > 0 && (0, xQ.$e)(FQ, 0, this.key, xQ.Fd.PresetNone, 0, wQ, pw, pw, Cw) && (this.emitted = !0)
+           ik = Math.min(Math.floor(kk), Uk.vd.MaxBurst);
+         ek && ik > 0 && (0, Uk.Pe)(ek, 0, this.key, Uk.vd.PresetNone, 0, ik, Ci, Ci, Ai) && (this.emitted = !0)
```

#### 292. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2898` → after: `L2885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2885) · [Before (L2898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2898)

```diff
-           qQ = Math.min(Math.floor(wQ), xQ.Fd.MaxPoints, Math.floor(FQ.length / 4));
+           fk = Math.min(Math.floor(ik), Uk.vd.MaxPoints, Math.floor(ek.length / 4));
```

#### 293. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2900-L2901` → after: `L2887-L2888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2887-L2888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2887-L2888) · [Before (L2900-L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2900-L2901)

```diff
-         const oQ = new Uint8Array(FQ.buffer, FQ.byteOffset, qQ * xQ.Fd.PointBytes);
-         (0, xQ.df)(LQ, 0, this.key, qQ, QQ, oQ) && (this.emitted = !0)
+         const Sk = new Uint8Array(ek.buffer, ek.byteOffset, fk * Uk.vd.PointBytes);
+         (0, Uk.Te)(Dk, 0, this.key, fk, kk, Sk) && (this.emitted = !0)
```

#### 294. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2910` → after: `L2897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2897) · [Before (L2910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2910)

```diff
-         (0, xQ.if)(wQ, 0, this.key, 0, pw, pw, LQ)
+         (0, Uk._e)(ik, 0, this.key, 0, Ci, Ci, Dk)
```

#### 295. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2914` → after: `L2901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2901) · [Before (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2914)

```diff
-         this.stopped = !0, QQ && (this.emitted ? (this.rate > 0 && (0, xQ.if)(QQ, 0, this.key, 0, pw, pw, sw(0)), setTimeout((() => {
+         this.stopped = !0, kk && (this.emitted ? (this.rate > 0 && (0, Uk._e)(kk, 0, this.key, 0, Ci, Ci, ui(0)), setTimeout((() => {
```

#### 296. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2925` → after: `L2912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2912) · [Before (L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2925)

```diff
-     const lw = fF.k,
+     const Wi = Be.q,
```

#### 297. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2936` → after: `L2923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2923) · [Before (L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2936)

```diff
-         if (QQ !== xQ.ad && !cQ(LQ[oQ])) {
+         if (kk !== Uk.Sc && !Lk(Dk[Sk])) {
```

#### 298. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2951` → after: `L2938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2938) · [Before (L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2951)

```diff
-       return QQ.length >= FQ ? QQ : new Int32Array(Math.max(FQ, 2 * QQ.length))
+       return kk.length >= ek ? kk : new Int32Array(Math.max(ek, 2 * kk.length))
```

#### 299. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2963-L2965` → after: `L2950-L2952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2950-L2952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2950-L2952) · [Before (L2963-L2965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2963-L2965)

```diff
-         for (let QQ = 0; QQ + xQ.Zb.BYTES <= kQ;) {
-           const FQ = xQ.Zb.len(vQ, QQ);
-           LQ(xQ.Zb.serverId(vQ, QQ), Vw(vQ, QQ, FQ)), QQ += xQ.Zb.BYTES + (0, bQ.Yd)(FQ)
+         for (let kk = 0; kk + Uk.Ib.BYTES <= rk;) {
+           const ek = Uk.Ib.len(Pk, kk);
+           Dk(Uk.Ib.serverId(Pk, kk), Ti(Pk, kk, ek)), kk += Uk.Ib.BYTES + (0, xk.Ie)(ek)
```

#### 300. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2973` → after: `L2960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2960) · [Before (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2973)

```diff
-       const DQ = xQ.Zb.kind(QQ, FQ),
+       const bk = Uk.Ib.kind(kk, ek),
```

#### 301. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2976-L2980` → after: `L2963-L2967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2963-L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2963-L2967) · [Before (L2976-L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2976-L2980)

```diff
-       const vQ = xQ.Zb.variation(QQ, FQ),
-         mQ = xQ.Zb.pose(QQ, FQ),
-         uQ = xQ.Zb.meta(QQ, FQ),
-         HQ = xQ.Zb.mesh(QQ, FQ),
-         bQ = 0 !== (xQ.Zb.flags(QQ, FQ) & xQ.Wb.HasOpts),
+       const Pk = Uk.Ib.variation(kk, ek),
+         mk = Uk.Ib.pose(kk, ek),
+         Mk = Uk.Ib.meta(kk, ek),
+         Kk = Uk.Ib.mesh(kk, ek),
+         xk = 0 !== (Uk.Ib.flags(kk, ek) & Uk.Fb.HasOpts),
```

#### 302. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2984-L2988` → after: `L2971-L2975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2971-L2975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2971-L2975) · [Before (L2984-L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2984-L2988)

```diff
-         variation: vQ === xQ.gd ? void 0 : null !== (LQ = null !== (qQ = null === YQ || void 0 === YQ ? void 0 : YQ[vQ]) && void 0 !== qQ ? qQ : null === YQ || void 0 === YQ ? void 0 : YQ[0]) && void 0 !== LQ ? LQ : "default",
-         pose: mQ === xQ.sc ? void 0 : null !== (oQ = xQ.Lb[mQ]) && void 0 !== oQ ? oQ : xQ.Lb[0],
-         metaInfo: uQ === xQ.sc ? void 0 : xQ.Vc[uQ],
-         meshKind: HQ === xQ.sc ? void 0 : xQ.Tc[HQ],
-         meshOpts: bQ ? jw.decode(new Uint8Array(QQ.buffer, QQ.byteOffset + FQ + xQ.Zb.BYTES, wQ)) : void 0
+         variation: Pk === Uk.Wc ? void 0 : null !== (Dk = null !== (fk = null === nk || void 0 === nk ? void 0 : nk[Pk]) && void 0 !== fk ? fk : null === nk || void 0 === nk ? void 0 : nk[0]) && void 0 !== Dk ? Dk : "default",
+         pose: mk === Uk.Zb ? void 0 : null !== (Sk = Uk.vb[mk]) && void 0 !== Sk ? Sk : Uk.vb[0],
+         metaInfo: Mk === Uk.Zb ? void 0 : Uk.Ec[Mk],
+         meshKind: Kk === Uk.Zb ? void 0 : Uk.Dc[Kk],
+         meshOpts: xk ? ti.decode(new Uint8Array(kk.buffer, kk.byteOffset + ek + Uk.Ib.BYTES, ik)) : void 0
```

#### 303. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2995` → after: `L2982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2982) · [Before (L2995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2995)

```diff
-         this.deps = QQ, this.wanted = 0, this.ym = !1, this.refused = !1
+         this.deps = kk, this.wanted = 0, this.XM = !1, this.refused = !1
```

#### 304. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2998` → after: `L2985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2985) · [Before (L2998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2998)

```diff
-         return this.ym
+         return this.XM
```

#### 305. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3001` → after: `L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2988) · [Before (L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3001)

```diff
-         this.wanted = FQ ? this.wanted | QQ : this.wanted & ~QQ;
+         this.wanted = ek ? this.wanted | kk : this.wanted & ~kk;
```

#### 306. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3003` → after: `L2990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2990) · [Before (L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3003)

```diff
-         if (wQ === this.ym) return;
+         if (ik === this.XM) return;
```

#### 307. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3005` → after: `L2992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2992) · [Before (L3005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3005)

```diff
-         null !== LQ ? (0, xQ.cg)(LQ, 0, wQ ? 1 : 0) ? (this.ym = wQ, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.ym = !1
+         null !== Dk ? (0, Uk.Vf)(Dk, 0, ik ? 1 : 0) ? (this.XM = ik, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.XM = !1
```

#### 308. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3014` → after: `L3001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3001) · [Before (L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3014)

```diff
-         return this.complete || this.fill(), null !== (FQ = this.entries.get("string" === typeof QQ ? QQ : String(QQ))) && void 0 !== FQ ? FQ : null
+         return this.complete || this.fill(), null !== (ek = this.entries.get("string" === typeof kk ? kk : String(kk))) && void 0 !== ek ? ek : null
```

#### 309. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3073` → after: `L3060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3060) · [Before (L3073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3073)

```diff
-     var gw = wQ(4638);
+     var Gi = ik(4741);
```

#### 310. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3076-L3077` → after: `L3063-L3064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3063-L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3063-L3064) · [Before (L3076-L3077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3076-L3077)

```diff
-       if ("message" !== QQ.type || QQ.Om !== gw.rc.NewClientOptions || QQ.payloadKind !== bQ.Zb.Msgpack) return null;
-       const FQ = (0, zQ.d)(QQ.payload);
+       if ("message" !== kk.type || kk.hM !== Gi.tc.NewClientOptions || kk.payloadKind !== xk.zc.Msgpack) return null;
+       const ek = (0, Ek.b)(kk.payload);
```

#### 311. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3081-L3082` → after: `L3068-L3069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3068-L3069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3068-L3069) · [Before (L3081-L3082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3081-L3082)

```diff
-     var Zw = wQ(1254),
-       yw = wQ(36248);
+     var Ri = ik(1218),
+       Ji = ik(36167);
```

#### 312. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3087-L3089` → after: `L3074-L3076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3074-L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3074-L3076) · [Before (L3087-L3089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3087-L3089)

```diff
-         case xQ.Yd.ToggleMenu: {
-           const QQ = xQ.L[FQ];
-           DQ.l.GA("toggleMenu", void 0 === QQ ? "inventory" : `inventory|${QQ}`);
+         case Uk.Sd.ToggleMenu: {
+           const kk = Uk.C[ek];
+           bk.j.tm("toggleMenu", void 0 === kk ? "inventory" : `inventory|${kk}`);
```

#### 313. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3092-L3093` → after: `L3079-L3080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3079-L3080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3079-L3080) · [Before (L3092-L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3092-L3093)

```diff
-         case xQ.Yd.EditBoard:
-           DQ.l.GA("EditBoard", {
+         case Uk.Sd.EditBoard:
+           bk.j.tm("EditBoard", {
```

#### 314. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3097-L3099` → after: `L3084-L3086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3084-L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3084-L3086) · [Before (L3097-L3099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3097-L3099)

```diff
-         case xQ.Yd.EditCodeBlock:
-         case xQ.Yd.ViewCodeBlock:
-           DQ.l.GA("EditCodeBlock", {
+         case Uk.Sd.EditCodeBlock:
+         case Uk.Sd.ViewCodeBlock:
+           bk.j.tm("EditCodeBlock", {
```

#### 315. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3101` → after: `L3088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3088) · [Before (L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3101)

```diff
-             canChangePos: QQ === xQ.Yd.EditCodeBlock
+             canChangePos: kk === Uk.Sd.EditCodeBlock
```

#### 316. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3104-L3105` → after: `L3091-L3092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3091-L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3091-L3092) · [Before (L3104-L3105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3104-L3105)

```diff
-         case xQ.Yd.EditCustomLobbyBlock:
-           DQ.l.GA("EditCustomLobbyBlock", {
+         case Uk.Sd.EditCustomLobbyBlock:
+           bk.j.tm("EditCustomLobbyBlock", {
```

#### 317. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3109-L3110` → after: `L3096-L3097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3096-L3097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3096-L3097) · [Before (L3109-L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3109-L3110)

```diff
-         case xQ.Yd.OpenIronChest:
-           DQ.l.GA("OpenIronChest", {
+         case Uk.Sd.OpenIronChest:
+           bk.j.tm("OpenIronChest", {
```

#### 318. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3114-L3115` → after: `L3101-L3102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3101-L3102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3101-L3102) · [Before (L3114-L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3114-L3115)

```diff
-         case xQ.Yd.EditNameTag:
-           DQ.l.GA("EditNameTag", null !== (vQ = null === (mQ = qQ.ym()) || void 0 === mQ || null === (uQ = mQ.attributes.customAttributes) || void 0 === uQ ? void 0 : uQ.text) && void 0 !== vQ ? vQ : "");
+         case Uk.Sd.EditNameTag:
+           bk.j.tm("EditNameTag", null !== (Pk = null === (mk = fk.XM()) || void 0 === mk || null === (Mk = mk.attributes.customAttributes) || void 0 === Mk ? void 0 : Mk.text) && void 0 !== Pk ? Pk : "");
```

#### 319. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3117-L3122` → after: `L3104-L3109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3104-L3109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3104-L3109) · [Before (L3117-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3117-L3122)

```diff
-         case xQ.Yd.EditBook: {
-           var HQ, bQ, AQ;
-           const QQ = null === (HQ = qQ.ym()) || void 0 === HQ ? void 0 : HQ.attributes;
-           DQ.l.GA("EditBook", {
-             pages: (0, Zw.W)(null === QQ || void 0 === QQ || null === (bQ = QQ.customAttributes) || void 0 === bQ ? void 0 : bQ.pages),
-             title: null !== (AQ = null === QQ || void 0 === QQ ? void 0 : QQ.customDisplayName) && void 0 !== AQ ? AQ : "Title",
+         case Uk.Sd.EditBook: {
+           var Kk, xk, Hk;
+           const kk = null === (Kk = fk.XM()) || void 0 === Kk ? void 0 : Kk.attributes;
+           bk.j.tm("EditBook", {
+             pages: (0, Ri.S)(null === kk || void 0 === kk || null === (xk = kk.customAttributes) || void 0 === xk ? void 0 : xk.pages),
+             title: null !== (Hk = null === kk || void 0 === kk ? void 0 : kk.customDisplayName) && void 0 !== Hk ? Hk : "Title",
```

#### 320. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3127` → after: `L3114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3114) · [Before (L3127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3127)

```diff
-         case xQ.Yd.CantChangeBlock:
+         case Uk.Sd.CantChangeBlock:
```

#### 321. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3131-L3132` → after: `L3118-L3119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3118-L3119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3118-L3119) · [Before (L3131-L3132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3131-L3132)

```diff
-               qQ = QQ ? wQ : LQ;
-             (FQ.getClientOption("canChange") || qQ || "You cannot modify this block" !== wQ) && DQ.l.GA("showBottomMessage", {
+               fk = kk ? ik : Dk;
+             (ek.getClientOption("canChange") || fk || "You cannot modify this block" !== ik) && bk.j.tm("showBottomMessage", {
```

#### 322. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3138-L3139` → after: `L3125-L3126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3125-L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3125-L3126) · [Before (L3138-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3138-L3139)

```diff
-         case xQ.Yd.MiddleBarStart:
-           DQ.l.GA("middleScreenBarInitiate", {
+         case Uk.Sd.MiddleBarStart:
+           bk.j.tm("middleScreenBarInitiate", {
```

#### 323. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3141` → after: `L3128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3128) · [Before (L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3141)

```diff
-             vF: 1 === wQ[0],
+             he: 1 === ik[0],
```

#### 324. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3145-L3146` → after: `L3132-L3133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3132-L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3132-L3133) · [Before (L3145-L3146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3145-L3146)

```diff
-         case xQ.Yd.MiddleBarStop:
-           DQ.l.GA("middleScreenBarRemove");
+         case Uk.Sd.MiddleBarStop:
+           bk.j.tm("middleScreenBarRemove");
```

#### 325. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3148-L3150` → after: `L3135-L3137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3135-L3137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3135-L3137) · [Before (L3148-L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3148-L3150)

```diff
-         case xQ.Yd.Hitmarker:
-           DQ.l.GA("localGunHitmarker", {
-             iQ: 1 === FQ
+         case Uk.Sd.Hitmarker:
+           bk.j.tm("localGunHitmarker", {
+             tS: 1 === ek
```

#### 326. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3153-L3154` → after: `L3140-L3141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3140-L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3140-L3141) · [Before (L3153-L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3153-L3154)

```diff
-         case xQ.Yd.ShotsLeft:
-           DQ.l.GA("localPlayerNewShotsLeft", LQ);
+         case Uk.Sd.ShotsLeft:
+           bk.j.tm("localPlayerNewShotsLeft", Dk);
```

#### 327. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3156-L3157` → after: `L3143-L3144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3143-L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3143-L3144) · [Before (L3156-L3157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3156-L3157)

```diff
-         case xQ.Yd.AimingOverlay:
-           DQ.l.GA("aimingOverlay", 3 === (3 & FQ) ? "sniper" : "none");
+         case Uk.Sd.AimingOverlay:
+           bk.j.tm("aimingOverlay", 3 === (3 & ek) ? "sniper" : "none");
```

#### 328. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3159-L3160` → after: `L3146-L3147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3146-L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3146-L3147) · [Before (L3159-L3160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3159-L3160)

```diff
-         case xQ.Yd.BottomMessage:
-           DQ.l.GA("showBottomMessage", JSON.parse(kQ()));
+         case Uk.Sd.BottomMessage:
+           bk.j.tm("showBottomMessage", JSON.parse(rk()));
```

#### 329. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3162-L3163` → after: `L3149-L3150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3149-L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3149-L3150) · [Before (L3162-L3163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3162-L3163)

```diff
-         case xQ.Yd.Crosshair:
-           qQ.inaccuracy = (0, lQ.c)(LQ), (0, yw.e)().crosshairAccuracy(qQ.inaccuracy);
+         case Uk.Sd.Crosshair:
+           fk.inaccuracy = (0, hk.f)(Dk), (0, Ji.d)().crosshairAccuracy(fk.inaccuracy);
```

#### 330. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3165` → after: `L3152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3152) · [Before (L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3165)

```diff
-         case xQ.Yd.ChargeStage:
+         case Uk.Sd.ChargeStage:
```

#### 331. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3167-L3168` → after: `L3154-L3155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3154-L3155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3154-L3155) · [Before (L3167-L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3167-L3168)

```diff
-         case xQ.Yd.EmoteWheelClose:
-           DQ.l.GA("requestEmoteWheelClose");
+         case Uk.Sd.EmoteWheelClose:
+           bk.j.tm("requestEmoteWheelClose");
```

#### 332. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3170-L3171` → after: `L3157-L3158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3157-L3158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3157-L3158) · [Before (L3170-L3171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3170-L3171)

```diff
-         case xQ.Yd.BlockMined:
-           DQ.l.GA("localBlockMined");
+         case Uk.Sd.BlockMined:
+           bk.j.tm("localBlockMined");
```

#### 333. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3174` → after: `L3161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3161) · [Before (L3174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3174)

```diff
-           throw new YQ.b(`UiEvent of no kind: what ${QQ}`)
+           throw new nk.c(`UiEvent of no kind: what ${kk}`)
```

#### 334. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3177-L3182` → after: `L3164-L3169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3164-L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3164-L3169) · [Before (L3177-L3182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3177-L3182)

```diff
-     var dw = wQ(37548),
-       QL = wQ(9110),
-       FL = wQ(1919),
-       wL = wQ(36426),
-       LL = wQ(9125),
-       qL = wQ(4621);
+     var eD = ik(37586),
+       iD = ik(33774),
+       DD = ik(1920),
+       fD = ik(36382),
+       SD = ik(33784),
+       bD = ik(4721);
```

#### 335. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3206` → after: `L3193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3193) · [Before (L3206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3206)

```diff
-       const oQ = () => (wQ = (0, FL.q)(wQ, FQ()), wQ);
+       const Sk = () => (ik = (0, DD.r)(ik, ek()), ik);
```

#### 336. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3237` → after: `L3224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3224) · [Before (L3237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3237)

```diff
-         attributes: (0, dw.e)("Gun" === (0, LL.itemTypeOf)(FQ) ? {
+         attributes: (0, eD.c)("Gun" === (0, SD.itemTypeOf)(ek) ? {
```

#### 337. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3259` → after: `L3246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3246) · [Before (L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3259)

```diff
-             displayName: null !== (LQ = uQ.attributes.customDisplayName) && void 0 !== LQ ? LQ : FQ.getDisplayName(HQ),
+             displayName: null !== (Dk = Mk.attributes.customDisplayName) && void 0 !== Dk ? Dk : ek.getDisplayName(Kk),
```

#### 338. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3261` → after: `L3248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3248) · [Before (L3261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3261)

```diff
-             clipSize: null !== (qQ = null !== (oQ = null === (DQ = uQ.attributes.customAttributes) || void 0 === DQ || null === (kQ = DQ.gunStats) || void 0 === kQ ? void 0 : kQ.clipSize) && void 0 !== oQ ? oQ : null === (vQ = FQ.getGunStats(HQ)) || void 0 === vQ ? void 0 : vQ.cl … [truncated]
+             clipSize: null !== (fk = null !== (Sk = null === (bk = Mk.attributes.customAttributes) || void 0 === bk || null === (rk = bk.gunStats) || void 0 === rk ? void 0 : rk.clipSize) && void 0 !== Sk ? Sk : null === (Pk = ek.getGunStats(Kk)) || void 0 === Pk ? void 0 : Pk.cl … [truncated]
```

#### 339. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3290` → after: `L3277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3277) · [Before (L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3290)

```diff
-               const vQ = QQ.craftingView(wQ.station, kQ, null !== (oQ = null === (DQ = wQ.recipe) || void 0 === DQ ? void 0 : DQ.Cm) && void 0 !== oQ ? oQ : 0);
+               const Pk = kk.craftingView(ik.station, rk, null !== (Sk = null === (bk = ik.recipe) || void 0 === bk ? void 0 : bk.vM) && void 0 !== Sk ? Sk : 0);
```

#### 340. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3296` → after: `L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3283) · [Before (L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3296)

```diff
-                 let LQ = xQ.rb.BYTES;
+                 let Dk = Uk.Z.BYTES;
```
