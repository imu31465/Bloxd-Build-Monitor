# Changed — Bundle Modifications Report (Part 139 / 154)

- **Updated at**: `2026-11-28T13:51 JST`
- **Part**: `139 / 154` (**399** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 138](part-138.md) · [Part 140 →](part-140.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderLite.js` (fl4vv.bd3c59ce → yteou.5361c997 · continued)

- **File**: `bundles/bloxd.io/chunks/js/renderLite.js` (43 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070)

#### 4. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L41-L42` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L41-L42) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L41-L42)

```diff
-             const [Qr, Zr] = rr.split(":"), Wr = null !== (Sr = tr.get(Qr.slice(-1))) && void 0 !== Sr ? Sr : "";
-             return `gl link failed: program row ${parseInt(Qr)}${Wr}, read ${Zr} ms after issue`
+             const [md, Wd] = dd.split(":"), Fd = null !== (Od = Hd.get(md.slice(-1))) && void 0 !== Od ? Od : "";
+             return `gl link failed: program row ${parseInt(md)}${Fd}, read ${Wd} ms after issue`
```

#### 5. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L47)

```diff
-         return this.heldLogged || void 0 === rr ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${rr}`)
+         return this.heldLogged || void 0 === dd ? null : (this.heldLogged = !0, `first view by the backstop, draws held for programs ${dd}`)
```

#### 6. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L51-L54` → after: `L51-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L51-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L51-L54) · [Before (L51-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L51-L54)

```diff
-         return [Wr && `${Wr}; tab ${(0,Ur.g)(Zr)}`, this.programUse.line(Sr, Qr)].filter((rr => null !== rr))
-       }
-     }
-     var Yr = Qr(5501);
+         return [Fd && `${Fd}; tab ${(0,qd.g)(Wd)}`, this.programUse.line(Od, md)].filter((dd => null !== dd))
+       }
+     }
+     var Td = md(5431);
```

#### 7. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L93)

```diff
-         return this.logged >= 20 || this.seen.has(rr) ? (this.unlogged++, null) : (this.seen.add(rr), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${rr}` : rr)
+         return this.logged >= 20 || this.seen.has(dd) ? (this.unlogged++, null) : (this.seen.add(dd), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${dd}` : dd)
```

#### 8. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L102` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L102) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L102)

```diff
-       (0, mr.l)("renderlite", rr)
+       (0, od.k)("renderlite", dd)
```

#### 9. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L106)

```diff
-         this.frames = new nr, this.events = new Kr, this.programLines = new zr, this.compileSummary = new hr("webgpu compiles"), this.hidden = new Ur.c, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performan … [truncated]
+         this.frames = new pd, this.events = new gd, this.programLines = new bd, this.compileSummary = new yd("webgpu compiles"), this.hidden = new qd.d, this.session = null, this.sampled = null, this.gpuTimed = 0, this.gpuUs = 0, this.gpuBytes = null, this.windowStart = performan … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L109)

```diff
-         }, this.lx = () => {
+         }, this.Et = () => {
```

#### 11. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L112)

```diff
-             Wr = (0, pr.f)(),
+             Fd = (0, Qd.l)(),
```

#### 12. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L122-L123` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L122-L123) · [Before (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L122-L123)

```diff
-           const xr = Qr.headerWord(jr.L.GpuTimed),
-             mr = Qr.headerWord(jr.L.GpuFrameUs),
+           const td = md.headerWord(Xd.I.GpuTimed),
+             od = md.headerWord(Xd.I.GpuFrameUs),
```

#### 13. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L129` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L129) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L129)

```diff
-           const Ur = null !== (rr = null === (Sr = (0, Er.T)((0, Zr.z)())) || void 0 === Sr ? void 0 : Sr.bZr()) && void 0 !== rr ? rr : 0;
+           const qd = null !== (dd = null === (Od = (0, vd.S)((0, Wd.A)())) || void 0 === Od ? void 0 : Od.EFd()) && void 0 !== dd ? dd : 0;
```

#### 14. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L132-L133` → after: `L132-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L132-L133) · [Before (L132-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L132-L133)

```diff
-               Zr = [`${Math.round(Qr)}s: ${rr.drawn} drawn (${(rr.drawn/Qr).toFixed(1)}/s), ${rr.paced} paced, ${rr.frames-rr.drawn-rr.paced} skipped`, `gap max ${Math.round(rr.gapMaxMs)} ms, ${rr.longGaps} over 50 ms`, `render cpu ${rr.drawn?(rr.renderUs/rr.drawn/1e3).toFixed(2) … [truncated]
-             null !== Sr.gpu && Zr.push(`gpu ${Sr.gpu.timed?(Sr.gpu.us/Sr.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${Sr.gpu.timed} timed`);
+               Wd = [`${Math.round(md)}s: ${dd.drawn} drawn (${(dd.drawn/md).toFixed(1)}/s), ${dd.paced} paced, ${dd.frames-dd.drawn-dd.paced} skipped`, `gap max ${Math.round(dd.gapMaxMs)} ms, ${dd.longGaps} over 50 ms`, `render cpu ${dd.drawn?(dd.renderUs/dd.drawn/1e3).toFixed(2) … [truncated]
+             null !== Od.gpu && Wd.push(`gpu ${Od.gpu.timed?(Od.gpu.us/Od.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${Od.gpu.timed} timed`);
```

#### 15. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L135-L137` → after: `L135-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L135-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L135-L137) · [Before (L135-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L135-L137)

```diff
-             Zr.push(null === Wr ? "draws none yet" : `draws ${(0,Ir.e)(Wr)} (terrain ${Wr.terrainOpaque}+${Wr.terrainTransparent}, pack ${Wr.terrainPack}, meshes ${Wr.regular+Wr.thin+Wr.line+Wr.text} (${Wr.text} text, ${Wr.thin} thin, ${Wr.line} line), sky ${Wr.earthSky+Wr.skyMes … [truncated]
-             const ar = null === Sr.gpuBytesBefore ? "" : ` (${Sr.gpuBytes>=Sr.gpuBytesBefore?"+":"-"}${er(Math.abs(Sr.gpuBytes-Sr.gpuBytesBefore))})`;
-             return Zr.push(`gpu mem ${er(Sr.gpuBytes)} MiB${ar}`), Zr.push(`pending ${Sr.pending}`, "terrain " + (Sr.terrainDrawn ? "drawn" : "not drawn yet")), Sr.eventsUnlogged > 0 && Zr.push(`${Sr.eventsUnlogged} events unlogged`), Zr.join("; ")
+             Wd.push(null === Fd ? "draws none yet" : `draws ${(0,Kd.b)(Fd)} (terrain ${Fd.terrainOpaque}+${Fd.terrainTransparent}, pack ${Fd.terrainPack}, meshes ${Fd.regular+Fd.thin+Fd.line+Fd.text} (${Fd.text} text, ${Fd.thin} thin, ${Fd.line} line), sky ${Fd.earthSky+Fd.skyMes … [truncated]
+             const Rd = null === Od.gpuBytesBefore ? "" : ` (${Od.gpuBytes>=Od.gpuBytesBefore?"+":"-"}${Yd(Math.abs(Od.gpuBytes-Od.gpuBytesBefore))})`;
+             return Wd.push(`gpu mem ${Yd(Od.gpuBytes)} MiB${Rd}`), Wd.push(`pending ${Od.pending}`, "terrain " + (Od.terrainDrawn ? "drawn" : "not drawn yet")), Od.eventsUnlogged > 0 && Wd.push(`${Od.eventsUnlogged} events unlogged`), Wd.join("; ")
```

#### 16. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L144-L145` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L144-L145) · [Before (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L144-L145)

```diff
-             pending: Qr.headerWord(jr.L.RenderPending),
-             terrainDrawn: 0 !== (Qr.headerWord(jr.L.LoadSteps) & jr.V.TerrainDrawn),
+             pending: md.headerWord(Xd.I.RenderPending),
+             terrainDrawn: 0 !== (md.headerWord(Xd.I.LoadSteps) & Xd.X.TerrainDrawn),
```

#### 17. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L149-L150` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L149-L150) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L149-L150)

```diff
-           void 0 !== (null === tr || void 0 === tr ? void 0 : tr.meshMaterials) && (yr(`mesh materials ${tr.meshMaterials}`), delete tr.meshMaterials), this.gpuBytes = Ur, this.windowStart = ar
-         }, yr(`${(0,Yr.e)(rr)}; client ${Wr.B.client} (${Wr.B.reason})`), setInterval(this.lx, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
+           void 0 !== (null === Hd || void 0 === Hd ? void 0 : Hd.meshMaterials) && (wd(`mesh materials ${Hd.meshMaterials}`), delete Hd.meshMaterials), this.gpuBytes = qd, this.windowStart = Rd
+         }, wd(`${(0,Td.e)(dd)}; client ${Fd.y.client} (${Fd.y.reason})`), setInterval(this.Et, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
```

#### 18. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L155` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L155) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L155)

```diff
-         this.session = rr, this.frames.frame(Sr, Qr, "drawn" === Qr ? rr.headerWord(jr.L.RenderUs) : 0)
+         this.session = dd, this.frames.frame(Od, md, "drawn" === md ? dd.headerWord(Xd.I.RenderUs) : 0)
```

#### 19. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L164)

```diff
-           if (Zr >= jr.o.RenderDeviceLost && Zr <= jr.o.RenderSerialLinks) this.event(`render error ${(0,fr.te)(Zr)}${null!==(Sr=null===(Qr=(0,xr.b)(Zr,Wr))||void 0===Qr?void 0:Qr.words)&&void 0!==Sr?Sr:""} (detail ${Wr})`)
+           if (Wd >= Xd.p.RenderDeviceLost && Wd <= Xd.p.RenderSerialLinks) this.event(`render error ${(0,hd.ae)(Wd)}${null!==(Od=null===(md=(0,td.d)(Wd,Fd))||void 0===md?void 0:md.words)&&void 0!==Od?Od:""} (detail ${Fd})`)
```

#### 20. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L168)

```diff
-         this.event(`render reload: ${rr?"webgpu":"gl"} ${Qr}, losses ${Sr}${void 0===Zr?"":`: ${Zr}`}`)
+         this.event(`render reload: ${dd?"webgpu":"gl"} ${md}, losses ${Od}${void 0===Wd?"":`: ${Wd}`}`)
```

#### 21. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L172-L173` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L172-L173) · [Before (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L172-L173)

```diff
-           Wr = 3 === (null === Zr || void 0 === Zr ? void 0 : Zr.length) ? `vertex arrays ${Zr[0]}, keyed draws peak ${Zr[1]} (sweep floor ${Zr[2]})` : "vertex arrays unnoted";
-         this.event(`gl context lost ${rr?"in game":"at home"}: ${Wr}, render distance ${null!==Qr&&void 0!==Qr?Qr:"none"}`)
+           Fd = 3 === (null === Wd || void 0 === Wd ? void 0 : Wd.length) ? `vertex arrays ${Wd[0]}, keyed draws peak ${Wd[1]} (sweep floor ${Wd[2]})` : "vertex arrays unnoted";
+         this.event(`gl context lost ${dd?"in game":"at home"}: ${Fd}, render distance ${null!==md&&void 0!==md?md:"none"}`)
```

#### 22. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L181-L183` → after: `L181-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L181-L183) · [Before (L181-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L181-L183)

```diff
-         const Wr = null !== Zr && 0 !== Zr.lastError ? `, last error ${(0,fr.te)(Zr.lastError)} (detail ${Zr.lastErrorDetail})` : "",
-           ar = Qr instanceof Error ? `${Qr.name}: ${Qr.message}` : null === Qr || void 0 === Qr ? "" : String(Qr);
-         this.event(`core stopped at ${Sr}${Wr}${ar&&`: ${ar}`}`)
+         const Fd = null !== Wd && 0 !== Wd.lastError ? `, last error ${(0,hd.ae)(Wd.lastError)} (detail ${Wd.lastErrorDetail})` : "",
+           Rd = md instanceof Error ? `${md.name}: ${md.message}` : null === md || void 0 === md ? "" : String(md);
+         this.event(`core stopped at ${Od}${Fd}${Rd&&`: ${Rd}`}`)
```

#### 23. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L192` → after: `L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L192) · [Before (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L192)

```diff
-         null === Sr || Sr.isStopped ? this.sampled = null : (this.sampled = Sr, this.gpuTimed = Sr.headerWord(jr.L.GpuTimed), this.gpuUs = Sr.headerWord(jr.L.GpuFrameUs))
+         null === Od || Od.isStopped ? this.sampled = null : (this.sampled = Od, this.gpuTimed = Od.headerWord(Xd.I.GpuTimed), this.gpuUs = Od.headerWord(Xd.I.GpuFrameUs))
```

#### 24. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L201` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L201) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L201)

```diff
-         null !== Zr && yr(Zr), void 0 !== (null === Sr || void 0 === Sr ? void 0 : Sr.prejoin) && Sr.prejoin !== this.prejoinLogged && (this.prejoinLogged = Sr.prejoin, yr(`prejoin ${Sr.prejoin}`))
+         null !== Wd && wd(Wd), void 0 !== (null === Od || void 0 === Od ? void 0 : Od.prejoin) && Od.prejoin !== this.prejoinLogged && (this.prejoinLogged = Od.prejoin, wd(`prejoin ${Od.prejoin}`))
```

#### 25. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L206` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L206) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L206)

```diff
-         this.gridLogged || void 0 === Sr || (this.gridLogged = !0, yr(`gl1 grid ${Sr}`))
+         this.gridLogged || void 0 === Od || (this.gridLogged = !0, wd(`gl1 grid ${Od}`))
```

#### 26. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L213-L215` → after: `L213-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L213-L215) · [Before (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L213-L215)

```diff
-           Zr = (0, ar.C)(),
-           Wr = void 0 === (null === Qr || void 0 === Qr ? void 0 : Qr.parallelCompile) ? "" : `; parallel compile ${Qr.parallelCompile}`;
-         yr(`renderer gl ${Zr?`${Zr.vendor} / ${Zr.renderer}`:"(not read)"}; terrain fetch ${null!==(rr=null===Qr||void 0===Qr?void 0:Qr.fetch)&&void 0!==rr?rr:"(not noted)"}${Wr}`), yr(`renderer caps ${null!==(Sr=null===Qr||void 0===Qr?void 0:Qr.caps)&&void 0!==Sr?Sr:"(not noted) … [truncated]
+           Wd = (0, Rd.y)(),
+           Fd = void 0 === (null === md || void 0 === md ? void 0 : md.parallelCompile) ? "" : `; parallel compile ${md.parallelCompile}`;
+         wd(`renderer gl ${Wd?`${Wd.vendor} / ${Wd.renderer}`:"(not read)"}; terrain fetch ${null!==(dd=null===md||void 0===md?void 0:md.fetch)&&void 0!==dd?dd:"(not noted)"}${Fd}`), wd(`renderer caps ${null!==(Od=null===md||void 0===md?void 0:md.caps)&&void 0!==Od?Od:"(not noted) … [truncated]
```

#### 27. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L221)

```diff
-       return (0, Nr.e)(), Tr ??= new Br(rr), Tr
+       return (0, Nd.i)(), Jd ??= new Ed(dd), Jd
```

#### 28. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L224` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L224) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L224)

```diff
-   5501: (rr, Sr, Qr) => {
+   5431: (dd, Od, md) => {
```

#### 29. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L227-L228` → after: `L227-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L227-L228) · [Before (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L227-L228)

```diff
-       const Sr = rr.adapter ? `${rr.adapter.vendor}/${rr.adapter.architecture}` : "none";
-       return `backend ${rr.backend}: reason ${rr.reason}, source ${rr.source}, adapter ${Sr}`
+       const Od = dd.adapter ? `${dd.adapter.vendor}/${dd.adapter.architecture}` : "none";
+       return `backend ${dd.backend}: reason ${dd.reason}, source ${dd.source}, adapter ${Od}`
```

#### 30. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L234-L236` → after: `L234-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L234-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L234-L236) · [Before (L234-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L234-L236)

```diff
-   35315: (rr, Sr, Qr) => {
-     function Zr(rr) {
-       return `hidden ${rr.changes} changes, ${Math.round(rr.hiddenMs)} ms`
+   35404: (dd, Od, md) => {
+     function Wd(dd) {
+       return `hidden ${dd.changes} changes, ${Math.round(dd.hiddenMs)} ms`
```

#### 31. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L239` → after: `L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L239) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L239)

```diff
-       c: () => Wr,
+       d: () => Fd,
```

#### 32. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L247)

```diff
-         this.changes++, document.hidden ? this.hiddenSinceMs = rr : this.hiddenSinceMs >= 0 && (this.hiddenMs += rr - this.hiddenSinceMs, this.hiddenSinceMs = -1)
+         this.changes++, document.hidden ? this.hiddenSinceMs = dd : this.hiddenSinceMs >= 0 && (this.hiddenMs += dd - this.hiddenSinceMs, this.hiddenSinceMs = -1)
```

#### 33. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L257)

```diff
-   42895: (rr, Sr, Qr) => {
+   42991: (dd, Od, md) => {
```

#### 34. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L259)

```diff
-       e: () => jr,
+       b: () => Xd,
```

#### 35. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L261)

```diff
-       i: () => Ir
+       h: () => Kd
```

#### 36. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L263-L268` → after: `L263-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L263-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L263-L268) · [Before (L263-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L263-L268)

```diff
-     var Zr = Qr(42438),
-       Wr = Qr(42451);
- 
-     function ar(rr) {
-       if (rr.queries.drawCensus() < Zr.lb.BYTES) return null;
-       const Sr = rr.memoryData(rr.scratch(), Zr.lb.BYTES, 4, "the draw census");
+     var Wd = md(42540),
+       Fd = md(42552);
+ 
+     function Rd(dd) {
+       if (dd.queries.drawCensus() < Wd.Db.BYTES) return null;
+       const Od = dd.memoryData(dd.scratch(), Wd.Db.BYTES, 4, "the draw census");
```

#### 37. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L270-L283` → after: `L270-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L270-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L270-L283) · [Before (L270-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L270-L283)

```diff
-         terrainOpaque: Zr.lb.terrainOpaque(Sr, 0),
-         terrainTransparent: Zr.lb.terrainTransparent(Sr, 0),
-         terrainPack: Zr.lb.terrainPack(Sr, 0),
-         earthSky: Zr.lb.earthSky(Sr, 0),
-         skyMeshes: Zr.lb.skyMeshes(Sr, 0),
-         regular: Zr.lb.regular(Sr, 0),
-         thin: Zr.lb.thin(Sr, 0),
-         line: Zr.lb.line(Sr, 0),
-         text: Zr.lb.text(Sr, 0),
-         particles: Zr.lb.particles(Sr, 0),
-         terrainParts: Zr.lb.terrainParts(Sr, 0),
-         terrainCompiling: Zr.lb.terrainCompiling(Sr, 0),
-         ringCopiesMax: Zr.lb.ringCopiesMax(Sr, 0),
-         ringBusyWrites: Zr.lb.ringBusyWrites(Sr, 0)
+         terrainOpaque: Wd.Db.terrainOpaque(Od, 0),
+         terrainTransparent: Wd.Db.terrainTransparent(Od, 0),
+         terrainPack: Wd.Db.terrainPack(Od, 0),
+         earthSky: Wd.Db.earthSky(Od, 0),
+         skyMeshes: Wd.Db.skyMeshes(Od, 0),
+         regular: Wd.Db.regular(Od, 0),
+         thin: Wd.Db.thin(Od, 0),
+         line: Wd.Db.line(Od, 0),
+         text: Wd.Db.text(Od, 0),
+         particles: Wd.Db.particles(Od, 0),
+         terrainParts: Wd.Db.terrainParts(Od, 0),
+         terrainCompiling: Wd.Db.terrainCompiling(Od, 0),
+         ringCopiesMax: Wd.Db.ringCopiesMax(Od, 0),
+         ringBusyWrites: Wd.Db.ringBusyWrites(Od, 0)
```

#### 38. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L303` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L303) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L303)

```diff
-       const rr = (0, Wr.f)();
+       const dd = (0, Fd.l)();
```

#### 39. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L321` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L321) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L321)

```diff
-           value: `${jr(Sr)}`
+           value: `${Xd(Od)}`
```

#### 40. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L324` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L324) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L324)

```diff
-           value: `${Qr} opaque / ${Zr} transparent (${Wr} shader pack)`
+           value: `${md} opaque / ${Wd} transparent (${Fd} shader pack)`
```

#### 41. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L327` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L327) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L327)

```diff
-           value: `${Er} / ${pr}`
+           value: `${vd} / ${Qd}`
```

#### 42. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L330)

```diff
-           value: `${mr} / ${xr}`
+           value: `${od} / ${td}`
```

#### 43. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderLite.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderLite.js#L333)

```diff
-           value: `${Ir+fr} / ${Nr}`
+           value: `${Kd+hd} / ${Nd}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderProbe.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/renderProbe.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff)

#### 1. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderProbe.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderProbe.js#L4)

```diff
-   55161: (rr, Sr, Qr) => {
+   55078: (dd, Od, md) => {
```

#### 2. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderProbe.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderProbe.js#L8-L11)

```diff
-     var Zr = Qr(692),
-       Wr = Qr(5086),
-       ar = Qr(3909),
-       jr = Qr(5270);
+     var Wd = md(708),
+       Fd = md(5030),
+       Rd = md(3903),
+       Xd = md(5169);
```

#### 3. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderProbe.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderProbe.js#L24)

```diff
-       return `${rr}; ${Qr?`os ${Qr.os}, gpu ${null!==(Wr=Qr.gpuFamily)&&void 0!==Wr?Wr:"unknown"} ${null!==(ar=Qr.gpuModel)&&void 0!==ar?ar:"unknown"}`:"device unknown"}, version ${Zr.e}; ${Sr}`
+       return `${dd}; ${md?`os ${md.os}, gpu ${null!==(Fd=md.gpuFamily)&&void 0!==Fd?Fd:"unknown"} ${null!==(Rd=md.gpuModel)&&void 0!==Rd?Rd:"unknown"}`:"device unknown"}, version ${Wd.c}; ${Od}`
```

#### 4. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderProbe.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderProbe.js#L29)

```diff
-       const Qr = null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.backend) && void 0 !== Sr ? Sr : "none";
+       const md = null !== (Od = null === dd || void 0 === dd ? void 0 : dd.backend) && void 0 !== Od ? Od : "none";
```

#### 5. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderProbe.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderProbe.js#L31)

```diff
-         const rr = (0, jr.e)();
+         const dd = (0, Xd.i)();
```

#### 6. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderProbe.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderProbe.js#L36)

```diff
-         return void(0, ar.l)("renderprobe", `decode and particle probes not run: the renderer is ${Qr}, and they read WebGL2's draws`)
+         return void(0, Rd.k)("renderprobe", `decode and particle probes not run: the renderer is ${md}, and they read WebGL2's draws`)
```

#### 7. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderProbe.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderProbe.js#L38)

```diff
-       const Zr = (0, jr.e)();
+       const Wd = (0, Xd.i)();
```

#### 8. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L43-L44` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/renderProbe.js#L43-L44) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/renderProbe.js#L43-L44)

```diff
-         of Er)(0, jr.i)(Zr, xr, ["1", "pending"], fr, Ir).then((rr => {
-         void 0 !== rr && (0, ar.l)("renderprobe", pr(mr, rr, (0, Wr.e)(!1)))
+         of vd)(0, Xd.j)(Wd, td, ["1", "pending"], hd, Kd).then((dd => {
+         void 0 !== dd && (0, Rd.k)("renderprobe", Qd(od, dd, (0, Fd.b)(!1)))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9)

#### 1. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L4)

```diff
-   40218: (rr, Sr, Qr) => {
+   40249: (dd, Od, md) => {
```

#### 2. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L9-L11)

```diff
-     var Zr = Qr(683),
-       Wr = Qr(2984),
-       ar = Qr(40221);
+     var Wd = md(699),
+       Fd = md(2991),
+       Rd = md(40251);
```

#### 3. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L14)

```diff
-       if (rr.metaInfo === Zr.d || "Iron Guardian" === rr.type || "Gold Guardian" === rr.type) return !0;
+       if (dd.metaInfo === Wd.c || "Iron Guardian" === dd.type || "Gold Guardian" === dd.type) return !0;
```

#### 4. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L20)

```diff
-         const Zr = (0, Wr.h)(rr);
+         const Wd = (0, Fd.k)(dd);
```

#### 5. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L24)

```diff
-     }(0, ar.h)("skyblock", ((rr, Sr) => {
+     }(0, Rd.i)("skyblock", ((dd, Od) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/scrollDebug.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/scrollDebug.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d)

#### 1. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/scrollDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/scrollDebug.js#L4)

```diff
-   5506: (rr, Sr, Qr) => {
+   5438: (dd, Od, md) => {
```

#### 2. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L16-L17` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/scrollDebug.js#L16-L17) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/scrollDebug.js#L16-L17)

```diff
-     var Zr = Qr(26),
-       Wr = Qr(3909);
+     var Wd = md(29),
+       Fd = md(3903);
```

#### 3. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/scrollDebug.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/scrollDebug.js#L59)

```diff
-       return `${Er[rr]} ${Sr}`
+       return `${vd[dd]} ${Od}`
```

#### 4. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/scrollDebug.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/scrollDebug.js#L71)

```diff
-         return [Ur(Wr, `${ar?`${rr[Wr]} -> ${Sr[Wr]}`:String(Sr[Wr])}${jr?` (via ${Qr[Wr]}..${Zr[Wr]})`:""}`)]
+         return [qd(Fd, `${Rd?`${dd[Fd]} -> ${Od[Fd]}`:String(Od[Fd])}${Xd?` (via ${md[Fd]}..${Wd[Fd]})`:""}`)]
```

#### 5. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L81-L82` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/scrollDebug.js#L81-L82) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/scrollDebug.js#L81-L82)

```diff
-       const Qr = (null !== (Sr = rr.getAttribute("class")) && void 0 !== Sr ? Sr : "").trim().replace(/\s+/g, ".").slice(0, 40);
-       return `${rr.tagName.toLowerCase()}${Qr?`.${Qr}`:""}`
+       const md = (null !== (Od = dd.getAttribute("class")) && void 0 !== Od ? Od : "").trim().replace(/\s+/g, ".").slice(0, 40);
+       return `${dd.tagName.toLowerCase()}${md?`.${md}`:""}`
```

#### 6. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/scrollDebug.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/scrollDebug.js#L89)

```diff
-         "auto" !== rr && Qr.push(`${rr} on ${Yr(Zr)}`)
+         "auto" !== dd && md.push(`${dd} on ${Td(Wd)}`)
```

#### 7. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/scrollDebug.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/scrollDebug.js#L91)

```diff
-       return `${Yr(rr)} touch-action ${Sr(rr)}${Qr.length>0?` (${Qr.join(", ")})`:""}`
+       return `${Td(dd)} touch-action ${Od(dd)}${md.length>0?` (${md.join(", ")})`:""}`
```

#### 8. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/scrollDebug.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/scrollDebug.js#L110)

```diff
-           if (this.lines === Ir) return this.capped = !0, void this.deps.log(`further changes unlogged: ${Ir} lines logged`);
+           if (this.lines === Kd) return this.capped = !0, void this.deps.log(`further changes unlogged: ${Kd} lines logged`);
```

#### 9. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L112-L115` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/scrollDebug.js#L112-L115) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/scrollDebug.js#L112-L115)

```diff
-           const tr = null === fr ? "no touch yet" : `touch on ${fr.text}, ${Math.round(this.burstStartMs-fr.atMs)} ms before`,
-             nr = null === Wr ? "" : `; inner scroll ${Yr(Wr)} scrollTop ${mr(Wr.scrollTop,1)}`;
-           this.deps.log(`moved over ${Math.round(rr-this.burstStartMs)} ms; ${tr}${nr}: ${hr(Zr,Qr,Er,xr)}`)
-         }, this.last = rr.read(), this.low = this.last, this.high = this.last, rr.log(`start: ${tr(this.last)}`)
+           const Hd = null === hd ? "no touch yet" : `touch on ${hd.text}, ${Math.round(this.burstStartMs-hd.atMs)} ms before`,
+             pd = null === Fd ? "" : `; inner scroll ${Td(Fd)} scrollTop ${od(Fd.scrollTop,1)}`;
+           this.deps.log(`moved over ${Math.round(dd-this.burstStartMs)} ms; ${Hd}${pd}: ${yd(Wd,md,vd,td)}`)
+         }, this.last = dd.read(), this.low = this.last, this.high = this.last, dd.log(`start: ${Hd(this.last)}`)
```

#### 10. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/scrollDebug.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/scrollDebug.js#L125)

```diff
-         this.low = zr(this.low, Zr, Math.min), this.high = zr(this.high, Zr, Math.max), this.innerScrolled = null !== rr && void 0 !== rr ? rr : this.innerScrolled
+         this.low = bd(this.low, Wd, Math.min), this.high = bd(this.high, Wd, Math.max), this.innerScrolled = null !== dd && void 0 !== dd ? dd : this.innerScrolled
```

#### 11. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/scrollDebug.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/scrollDebug.js#L133)

```diff
-         inGame: () => "inGame" === Zr.c.get("gameState"),
+         inGame: () => "inGame" === Wd.e.get("gameState"),
```

#### 12. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/scrollDebug.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/scrollDebug.js#L136)

```diff
-           (0, Wr.l)("scroll", rr)
+           (0, Fd.k)("scroll", dd)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (151 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab)

#### 1. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L4)

```diff
-   41455: (rr, Sr, Qr) => {
+   41459: (dd, Od, md) => {
```

#### 2. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L8-L10)

```diff
-     var Zr = Qr(4635),
-       Wr = Qr(41464),
-       ar = Qr(41444);
+     var Wd = md(4615),
+       Fd = md(41466),
+       Rd = md(41450);
```

#### 3. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L30-L31` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L30-L31) · [Before (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L30-L31)

```diff
-       let Qr = tr(`?${Sr}`).slice(1);
-       return Qr === Sr && (Qr = Ur(Sr)), Qr === Sr ? rr : encodeURIComponent(Qr)
+       let md = Hd(`?${Od}`).slice(1);
+       return md === Od && (md = qd(Od)), md === Od ? dd : encodeURIComponent(md)
```

#### 4. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L37-L39` → after: `L37-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L37-L39) · [Before (L37-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L37-L39)

```diff
-         const ar = (null !== (Wr = Nr(Qr)) && void 0 !== Wr ? Wr : Qr).toLowerCase();
-         if (jr.has(ar)) return `${Sr}${Qr}=${fr}`;
-         if (Ir.has(ar) && "" !== Zr) return `${Sr}${Qr}=<masked>`;
+         const Rd = (null !== (Fd = Nd(md)) && void 0 !== Fd ? Fd : md).toLowerCase();
+         if (Xd.has(Rd)) return `${Od}${md}=${hd}`;
+         if (Kd.has(Rd) && "" !== Wd) return `${Od}${md}=<masked>`;
```

#### 5. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L41-L42` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L41-L42) · [Before (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L41-L42)

```diff
-         return Er === Zr ? rr : `${Sr}${Qr}=${Er}`
-       })).replace(pr, `$1${fr}`) : rr
+         return vd === Wd ? dd : `${Od}${md}=${vd}`
+       })).replace(Qd, `$1${hd}`) : dd
```

#### 6. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L51)

```diff
-       return mr.test(rr) ? fr : tr(rr)
+       return od.test(dd) ? hd : Hd(dd)
```

#### 7. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L75)

```diff
-               Qr && "object" === typeof Qr && (Sr.type === Zr.d.Plugin && "string" === typeof rr.plugin && rr.plugin.includes("console") ? er(Qr) : nr(Qr))
+               md && "object" === typeof md && (Od.type === Wd.b.Plugin && "string" === typeof dd.plugin && dd.plugin.includes("console") ? Yd(md) : pd(md))
```

#### 8. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L88)

```diff
-       return "style" === Zr ? Sr.replace(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/gi, "none") : vr.has(Zr) && "A" !== Qr.tagName ? zr(rr, Sr) : yr.has(Zr) || Br.has(Zr) || Zr.startsWith("data-pad-") && !Tr.has(Zr) ? Sr : Sr.replace(/\S/g, "*")
+       return "style" === Wd ? Od.replace(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/gi, "none") : Ud.has(Wd) && "A" !== md.tagName ? bd(dd, Od) : wd.has(Wd) || Ed.has(Wd) || Wd.startsWith("data-pad-") && !Jd.has(Wd) ? Od : Od.replace(/\S/g, "*")
```

#### 9. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L99-L100` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L99-L100) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L99-L100)

```diff
-       const [Qr = "", ...Zr] = Sr.pathname.split("/").slice(1), Wr = `/${Qr}${Zr.some((rr=>""!==rr))?"/*":""}`;
-       return rr.startsWith("/") ? Wr : `${Sr.origin}${Wr}`
+       const [md = "", ...Wd] = Od.pathname.split("/").slice(1), Fd = `/${md}${Wd.some((dd=>""!==dd))?"/*":""}`;
+       return dd.startsWith("/") ? Fd : `${Od.origin}${Fd}`
```

#### 10. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L115` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L115) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L115)

```diff
-       }(rr.properties.$snapshot_data), Pr(rr.properties), "$screen" === rr.event && String(rr.properties.$screen_name).startsWith("custom: ") && (rr.properties.$screen_name = `custom: ${String(rr.properties.game_analytics_id)}`), Pr(rr.properties.$set), Pr(rr.properties.$set_once … [truncated]
+       }(dd.properties.$snapshot_data), ud(dd.properties), "$screen" === dd.event && String(dd.properties.$screen_name).startsWith("custom: ") && (dd.properties.$screen_name = `custom: ${String(dd.properties.game_analytics_id)}`), ud(dd.properties.$set), ud(dd.properties.$set_once … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L117` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L117) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L117)

```diff
-     const qr = Zr.i.map((rr => `.${rr}`)).join(", "),
+     const Ad = Wd.h.map((dd => `.${dd}`)).join(", "),
```

#### 12. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L122` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L122) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L122)

```diff
-       return null !== Sr && void 0 !== Sr && Sr.closest(qr) ? rr : rr.replace(/\S/g, "*")
+       return null !== Od && void 0 !== Od && Od.closest(Ad) ? dd : dd.replace(/\S/g, "*")
```

#### 13. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L132` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L132) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L132)

```diff
-             maskTextFn: rr.showsChat ? Cr : null,
+             maskTextFn: dd.showsChat ? nd : null,
```

#### 14. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L138-L139` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L138-L139) · [Before (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L138-L139)

```diff
-             blockSelector: [...Rr, (Sr = rr.ownOrigins, `img[src^="http"]${Sr.map((rr=>`:not([src^="${rr}/"])`)).join("")}`)].join(", "),
-             maskTextSelector: rr.showsChat ? gr : `${gr}, ${qr}`,
+             blockSelector: [...rd, (Od = dd.ownOrigins, `img[src^="http"]${Od.map((dd=>`:not([src^="${dd}/"])`)).join("")}`)].join(", "),
+             maskTextSelector: dd.showsChat ? Gd : `${Gd}, ${Ad}`,
```

#### 15. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L215-L216` → after: `L215-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L215-L216) · [Before (L215-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L215-L216)

```diff
-     var kr = Qr(692),
-       Ar = Qr(139);
+     var zd = md(708),
+       cd = md(151);
```

#### 16. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L241)

```diff
-         panel_entry_reason: null !== (Sr = Qr.recording_reason) && void 0 !== Sr ? Sr : "unknown",
+         panel_entry_reason: null !== (Od = md.recording_reason) && void 0 !== Od ? Od : "unknown",
```

#### 17. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L259)

```diff
-       for (const [Zr, Wr] of Object.entries(Sr)) Qr[`${rr}${Zr}`] = Wr;
+       for (const [Wd, Fd] of Object.entries(Od)) md[`${dd}${Wd}`] = Fd;
```

#### 18. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L273)

```diff
-           suppressed: null !== (Zr = null === (Wr = Qr) || void 0 === Wr ? void 0 : Wr.suppressed) && void 0 !== Zr ? Zr : 0
+           suppressed: null !== (Wd = null === (Fd = md) || void 0 === Fd ? void 0 : Fd.suppressed) && void 0 !== Wd ? Wd : 0
```

#### 19. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L293` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L293) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L293)

```diff
-       return Zr.pathname = `${Zr.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(Sr)}`, Zr.searchParams.set("timestamp", String(Math.round(Qr - 5e3))), Zr.toString()
+       return Wd.pathname = `${Wd.pathname.replace(/\/+$/,"")}/replay/${encodeURIComponent(Od)}`, Wd.searchParams.set("timestamp", String(Math.round(md - 5e3))), Wd.toString()
```

#### 20. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L308` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L308) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L308)

```diff
-           error_fingerprint: null !== (Wr = Sr.fingerprint) && void 0 !== Wr ? Wr : null,
+           error_fingerprint: null !== (Fd = Od.fingerprint) && void 0 !== Fd ? Fd : null,
```

#### 21. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L354` → after: `L354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L354) · [Before (L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L354)

```diff
-           this.unboundKeyPresses.set(Qr, (null !== (Sr = this.unboundKeyPresses.get(Qr)) && void 0 !== Sr ? Sr : 0) + Zr)
+           this.unboundKeyPresses.set(md, (null !== (Od = this.unboundKeyPresses.get(md)) && void 0 !== Od ? Od : 0) + Wd)
```

#### 22. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L362)

```diff
-             first_game: null !== (rr = this.gamesJoined[0]) && void 0 !== rr ? rr : "",
+             first_game: null !== (dd = this.gamesJoined[0]) && void 0 !== dd ? dd : "",
```

#### 23. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L396-L397` → after: `L396-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L396-L397) · [Before (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L396-L397)

```diff
-         const Qr = null !== (Sr = this.firstGame.leftAtMs) && void 0 !== Sr ? Sr : rr;
-         return null !== Qr && Qr - this.firstGame.joinedAtMs < Zr.m
+         const md = null !== (Od = this.firstGame.leftAtMs) && void 0 !== Od ? Od : dd;
+         return null !== md && md - this.firstGame.joinedAtMs < Wd.k
```

#### 24. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L400-L417` → after: `L400-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L400-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L400-L417) · [Before (L400-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L400-L417)

```diff
-     var dr = Qr(1279),
-       sr = Qr(1131),
-       ur = Qr(379),
-       rS = Qr(1133),
-       SS = Qr(1127),
-       QS = Qr(3868),
-       ZS = Qr(26),
-       WS = Qr(2089),
-       aS = Qr(34),
-       jS = Qr(1422),
-       IS = Qr(1364),
-       fS = Qr(1635),
-       ES = Qr(2329),
-       pS = Qr(1758),
-       xS = Qr(41430),
-       mS = Qr(109),
- ... (2 more removed lines; see GitHub link above)
+     var Md = md(1286),
+       dO = md(1128),
+       OO = md(405),
+       mO = md(1135),
+       WO = md(1122),
+       FO = md(3860),
+       RO = md(29),
+       XO = md(2092),
+       KO = md(32),
+       hO = md(1415),
+       vO = md(1361),
+       QO = md(1632),
+       tO = md(2343),
+       oO = md(1765),
+       NO = md(41432),
+       qO = md(107),
+ ... (2 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L431)

```diff
-             this.captureError("error", rr.message, rr.filename ? `${rr.filename}:${rr.lineno}:${rr.colno}` : null, Sr instanceof Error ? Sr.name : null, (0, NS.d)(rr))
+             this.captureError("error", dd.message, dd.filename ? `${dd.filename}:${dd.lineno}:${dd.colno}` : null, Od instanceof Error ? Od.name : null, (0, HO.e)(dd))
```

#### 26. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L434-L435` → after: `L434-L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L434-L435) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L434-L435)

```diff
-             this.captureError("unhandled_rejection", Sr instanceof Error ? Sr.message : String(Sr), null, Sr instanceof Error ? Sr.name : null, (0, NS.d)(rr))
-           })), aS.i.subscribe("unrecoverableError", (rr => {
+             this.captureError("unhandled_rejection", Od instanceof Error ? Od.message : String(Od), null, Od instanceof Error ? Od.name : null, (0, HO.e)(dd))
+           })), KO.j.subscribe("unrecoverableError", (dd => {
```

#### 27. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L446)

```diff
-                   jr = !(null !== Zr && Sr.startTime - Zr.endMs < 50) || Sr.duration >= 3 * (null !== (Qr = null === (Wr = Zr) || void 0 === Wr ? void 0 : Wr.durationMs) && void 0 !== Qr ? Qr : 0);
+                   Xd = !(null !== Wd && Od.startTime - Wd.endMs < 50) || Od.duration >= 3 * (null !== (md = null === (Fd = Wd) || void 0 === Fd ? void 0 : Fd.durationMs) && void 0 !== md ? md : 0);
```

#### 28. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L464` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L464) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L464)

```diff
-         const rr = (0, IS.U)().gameRender();
+         const dd = (0, vO.V)().gameRender();
```

#### 29. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L477` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L477) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L477)

```diff
-         const Ir = this.errorThrottle.allow(`${rr}:${jr}`, Date.now());
+         const Kd = this.errorThrottle.allow(`${dd}:${Xd}`, Date.now());
```

#### 30. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L482` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L482) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L482)

```diff
-         }), this.replay.addReplayMarker(Zr.l.error, {
+         }), this.replay.addReplayMarker(Wd.j.error, {
```

#### 31. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L494` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L494) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L494)

```diff
-         (0, pS.l)() || this.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(Sr));
+         (0, oO.m)() || this.quitContext.noteHitch(performance.now()), this.replay.addHitch(Math.round(Od));
```

#### 32. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L497` → after: `L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L497) · [Before (L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L497)

```diff
-           ef: Math.round(Sr),
+           gh: Math.round(Od),
```

#### 33. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L504-L505` → after: `L504-L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L504-L505) · [Before (L504-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L504-L505)

```diff
-     var hS = Qr(7464),
-       zS = Qr(360);
+     var TO = md(7458),
+       pO = md(387);
```

#### 34. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L578` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L578) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L578)

```diff
-         Sr - (null !== Qr && void 0 !== Qr ? Qr : 0) < 3e4 ? this.idleCounted = !1 : !this.idleCounted && Zr && Wr && ar && (this.idleCounted = !0, this.signal("idle_pointer_locked", 1, 3e4))
+         Od - (null !== md && void 0 !== md ? md : 0) < 3e4 ? this.idleCounted = !1 : !this.idleCounted && Wd && Fd && Rd && (this.idleCounted = !0, this.signal("idle_pointer_locked", 1, 3e4))
```

#### 35. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L592-L593` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L592-L593) · [Before (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L592-L593)

```diff
-     const yS = hS.e.indexOf("first_input"),
-       BS = hS.e.indexOf("first_move"),
+     const EO = TO.h.indexOf("first_input"),
+       JO = TO.h.indexOf("first_move"),
```

#### 36. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L601` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L601) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L601)

```diff
-         this.replay = rr, this.quitContext = Sr, this.deps = Qr, this.ladder = new YS(hS.b, "first_move"), this.frustration = void 0, this.frustrationThrottle = new Fr({
+         this.replay = dd, this.quitContext = Od, this.deps = md, this.ladder = new YO(TO.d, "first_move"), this.frustration = void 0, this.frustrationThrottle = new ld({
```

#### 37. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L613` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L613) · [Before (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L613)

```diff
-         this.reachStep("page_loaded"), aS.i.subscribe("sessionReplayStayOpened", (rr => {
+         this.reachStep("page_loaded"), KO.j.subscribe("sessionReplayStayOpened", (dd => {
```

#### 38. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L615)

```diff
-         })), aS.i.subscribe("pointerLockUpdate", (rr => {
+         })), KO.j.subscribe("pointerLockUpdate", (dd => {
```

#### 39. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L617` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L617) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L617)

```diff
-         })), aS.i.subscribe("localBlockMined", (() => {
+         })), KO.j.subscribe("localBlockMined", (() => {
```

#### 40. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L619` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L619) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L619)

```diff
-         })), aS.i.subscribe("blockChangeRefused", (() => {
+         })), KO.j.subscribe("blockChangeRefused", (() => {
```

#### 41. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L621` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L621) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L621)

```diff
-         })), aS.i.subscribe("controlsTutorialShown", (rr => {
+         })), KO.j.subscribe("controlsTutorialShown", (dd => {
```

#### 42. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L623` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L623) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L623)

```diff
-         })), aS.i.subscribe("showShopTouchTutorial", (rr => {
+         })), KO.j.subscribe("showShopTouchTutorial", (dd => {
```

#### 43. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L625)

```diff
-         })), aS.i.subscribe("appManagerUpdated|openInGameMenuName", (rr => {
+         })), KO.j.subscribe("appManagerUpdated|openInGameMenuName", (dd => {
```

#### 44. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L627` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L627) · [Before (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L627)

```diff
-         })), aS.i.subscribe("appManagerUpdated|openEverythingMenuName", (rr => {
+         })), KO.j.subscribe("appManagerUpdated|openEverythingMenuName", (dd => {
```

#### 45. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L631` → after: `L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L631) · [Before (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L631)

```diff
-         })), null === (rr = (0, xS.e)()) || void 0 === rr || rr.onUnboundKey((() => {
+         })), null === (dd = (0, NO.b)()) || void 0 === dd || dd.onUnboundKey((() => {
```

#### 46. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L647)

```diff
-           ladder: new YS(hS.e, "first_move"),
+           ladder: new YO(TO.h, "first_move"),
```

#### 47. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L670` → after: `L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L670) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L670)

```diff
-           lastInputAtMs: Math.max(null !== (rr = this.quitContext.getLastInputAtMs()) && void 0 !== rr ? rr : 0, null !== (Sr = null === (Qr = this.currentStay) || void 0 === Qr ? void 0 : Qr.playableAtMs) && void 0 !== Sr ? Sr : 0),
+           lastInputAtMs: Math.max(null !== (dd = this.quitContext.getLastInputAtMs()) && void 0 !== dd ? dd : 0, null !== (Od = null === (md = this.currentStay) || void 0 === md ? void 0 : md.playableAtMs) && void 0 !== Od ? Od : 0),
```

#### 48. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L695` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L695) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L695)

```diff
-         this.everythingMenu = rr, null !== rr && (this.menuOpened(rr, rr === zS.q.SETTINGS ? "first_settings_open" : null), rr === zS.q.SETTINGS && Sr && null !== this.currentStay && this.noteFrustration("menu_toggling"))
+         this.everythingMenu = dd, null !== dd && (this.menuOpened(dd, dd === pO.m.SETTINGS ? "first_settings_open" : null), dd === pO.m.SETTINGS && Od && null !== this.currentStay && this.noteFrustration("menu_toggling"))
```

#### 49. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L701` → after: `L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L701) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L701)

```diff
-         const Sr = `controls_tutorial_${rr}`;
+         const Od = `controls_tutorial_${dd}`;
```

#### 50. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L710` → after: `L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L710) · [Before (L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L710)

```diff
-         null !== rr && rr.unboundKeyPresses < hS.g && (rr.unboundKeyPresses++, this.deps.publishStayProgress({
+         null !== dd && dd.unboundKeyPresses < TO.i && (dd.unboundKeyPresses++, this.deps.publishStayProgress({
```

#### 51. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L730` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L730) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L730)

```diff
-           furthest_step: null !== (rr = this.ladder.furthest) && void 0 !== rr ? rr : "",
+           furthest_step: null !== (dd = this.ladder.furthest) && void 0 !== dd ? dd : "",
```

#### 52. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L735` → after: `L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L735) · [Before (L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L735)

```diff
-         null !== this.ladder.reach(rr) && (this.replay.setSessionProperties(this.ladderTags(), !1), this.unsentStepMarkers.push(hS.b.indexOf(rr)), this.sendStepMarkers())
+         null !== this.ladder.reach(dd) && (this.replay.setSessionProperties(this.ladderTags(), !1), this.unsentStepMarkers.push(TO.d.indexOf(dd)), this.sendStepMarkers())
```

#### 53. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L738` → after: `L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L738) · [Before (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L738)

```diff
-         for (; this.unsentStepMarkers.length > 0 && this.replay.addReplayMarker(Zr.l.step, {
+         for (; this.unsentStepMarkers.length > 0 && this.replay.addReplayMarker(Wd.j.step, {
```

#### 54. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L746` → after: `L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L746) · [Before (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L746)

```diff
-           furthestStep: null !== (Qr = Sr.ladder.furthest) && void 0 !== Qr ? Qr : void 0,
+           furthestStep: null !== (md = Od.ladder.furthest) && void 0 !== md ? md : void 0,
```

#### 55. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L772` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L772) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L772)

```diff
-           Zr = null !== (rr = null === (Sr = this.currentStay) || void 0 === Sr ? void 0 : Sr.playableAtMs) && void 0 !== rr ? rr : null;
+           Wd = null !== (dd = null === (Od = this.currentStay) || void 0 === Od ? void 0 : Od.playableAtMs) && void 0 !== dd ? dd : null;
```

#### 56. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L779-L780` → after: `L779-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L779-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L779-L780) · [Before (L779-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L779-L780)

```diff
-         this.replay.setSessionProperties(this.frustration.tags(), !1), this.replay.addReplayMarker(Zr.l.frustration, {
-           signal: hS.c.indexOf(rr)
+         this.replay.setSessionProperties(this.frustration.tags(), !1), this.replay.addReplayMarker(Wd.j.frustration, {
+           signal: TO.g.indexOf(dd)
```

#### 57. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L792` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L792) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L792)

```diff
-         if (0 === this.moveSubscriptions.length && (null !== (rr = null === (Sr = this.currentStay) || void 0 === Sr ? void 0 : Sr.ladder.furthestStepIndex) && void 0 !== rr ? rr : 1 / 0) < BS) {
+         if (0 === this.moveSubscriptions.length && (null !== (dd = null === (Od = this.currentStay) || void 0 === Od ? void 0 : Od.ladder.furthestStepIndex) && void 0 !== dd ? dd : 1 / 0) < JO) {
```

#### 58. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L796)

```diff
-           this.moveSubscriptions = [aS.i.subscribe("usedKeyboard", rr), aS.i.subscribe("stickMoved", rr)]
+           this.moveSubscriptions = [KO.j.subscribe("usedKeyboard", dd), KO.j.subscribe("stickMoved", dd)]
```

#### 59. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L800)

```diff
-         for (const rr of this.moveSubscriptions) aS.i.unsubscribe(rr);
+         for (const dd of this.moveSubscriptions) KO.j.unsubscribe(dd);
```

#### 60. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L809` → after: `L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L809) · [Before (L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L809)

```diff
-       return null !== (Sr = LS.find((Sr => rr.includes(Sr)))) && void 0 !== Sr ? Sr : "none"
+       return null !== (Od = SO.find((Od => dd.includes(Od)))) && void 0 !== Od ? Od : "none"
```

#### 61. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L863` → after: `L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L863) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L863)

```diff
-             return XS(Sr.lastHitchAtMs, rr.nowMs, 15e3) && Wr.push("quit_after_hitch"), XS(Sr.lastDeathAtMs, rr.nowMs, 15e3) && Wr.push("quit_after_death"), rr.loading ? Wr.push("quit_during_load") : "page" !== rr.quitFrom || rr.inGame && !rr.menuOpen || Wr.push("quit_in_menu"),  … [truncated]
+             return uO(Od.lastHitchAtMs, dd.nowMs, 15e3) && Fd.push("quit_after_hitch"), uO(Od.lastDeathAtMs, dd.nowMs, 15e3) && Fd.push("quit_after_death"), dd.loading ? Fd.push("quit_during_load") : "page" !== dd.quitFrom || dd.inGame && !dd.menuOpen || Fd.push("quit_in_menu"),  … [truncated]
```

#### 62. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L867)

```diff
-             return XS(Sr.lastDeathAtMs, rr, 1e4) || XS(null !== (Qr = Sr.lastErrorAtMs) && void 0 !== Qr ? Qr : null, rr, 1e4)
+             return uO(Od.lastDeathAtMs, dd, 1e4) || uO(null !== (md = Od.lastErrorAtMs) && void 0 !== md ? md : null, dd, 1e4)
```

#### 63. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L878-L879` → after: `L878-L879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L878-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L878-L879) · [Before (L878-L879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L878-L879)

```diff
-         Sr.includes("quit_during_load") && (Zr.last_load_step = null !== (Wr = this.lastLoadStep) && void 0 !== Wr ? Wr : "none");
-         null !== rr.gameName && (Zr.game_name_with_variation = rr.gameName, Zr.game_name = (0, ur.Mb)(rr.gameName));
+         Od.includes("quit_during_load") && (Wd.last_load_step = null !== (Fd = this.lastLoadStep) && void 0 !== Fd ? Fd : "none");
+         null !== dd.gameName && (Wd.game_name_with_variation = dd.gameName, Wd.game_name = (0, OO.Gb)(dd.gameName));
```

#### 64. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L988` → after: `L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L988) · [Before (L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L988)

```diff
-     var qS = Qr(7469);
+     var AO = md(7465);
```

#### 65. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1003-L1004` → after: `L1003-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1003-L1004) · [Before (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1003-L1004)

```diff
-             in_game: "inGame" === ZS.c.get("gameState"),
-             menu_open: (0, pS.l)(),
+             in_game: "inGame" === RO.e.get("gameState"),
+             menu_open: (0, oO.m)(),
```

#### 66. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1007` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1007) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1007)

```diff
-         })), aS.i.subscribe("leaveGame", (() => {
+         })), KO.j.subscribe("leaveGame", (() => {
```

#### 67. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1017-L1018` → after: `L1017-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1017-L1018) · [Before (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1017-L1018)

```diff
-         const Wr = null !== (Sr = (0, qS.f)(rr)) && void 0 !== Sr ? Sr : rr;
-         this.counts.set(Wr, (null !== (Qr = this.counts.get(Wr)) && void 0 !== Qr ? Qr : 0) + 1), this.timer ??= setTimeout((() => {
+         const Fd = null !== (Od = (0, AO.i)(dd)) && void 0 !== Od ? Od : dd;
+         this.counts.set(Fd, (null !== (md = this.counts.get(Fd)) && void 0 !== md ? md : 0) + 1), this.timer ??= setTimeout((() => {
```

#### 68. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1036` → after: `L1036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1036) · [Before (L1036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1036)

```diff
-           game_name: null === this.game ? null : (0, ur.Mb)(this.game),
+           game_name: null === this.game ? null : (0, OO.Gb)(this.game),
```

#### 69. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1042` → after: `L1042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1042) · [Before (L1042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1042)

```diff
-     var gS = Qr(161);
+     var GO = md(180);
```

#### 70. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1046` → after: `L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1046) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1046)

```diff
-       return null !== (Sr = null === (Qr = gS.i[rr]) || void 0 === Qr ? void 0 : Qr.toLowerCase()) && void 0 !== Sr ? Sr : String(rr)
+       return null !== (Od = null === (md = GO.l[dd]) || void 0 === md ? void 0 : md.toLowerCase()) && void 0 !== Od ? Od : String(dd)
```

#### 71. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1154` → after: `L1154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1154) · [Before (L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1154)

```diff
-         this.replay = rr, this.quitContext = Sr, this.settings = ZS.c.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
+         this.replay = dd, this.quitContext = Od, this.settings = RO.e.get("clientEscMenuOptions"), this.pendingSettings = {}, this.settingsTimer = null, this.adRequest = null, this.playingAd = null
```

#### 72. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1157` → after: `L1157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1157) · [Before (L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1157)

```diff
-         aS.i.subscribe("purchaseStarted", (rr => {
+         KO.j.subscribe("purchaseStarted", (dd => {
```

#### 73. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1164` → after: `L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1164) · [Before (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1164)

```diff
-         })), aS.i.subscribe("purchaseEnded", (rr => {
+         })), KO.j.subscribe("purchaseEnded", (dd => {
```

#### 74. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1171` → after: `L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1171) · [Before (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1171)

```diff
-         })), aS.i.subscribe("adRequested", (rr => {
+         })), KO.j.subscribe("adRequested", (dd => {
```

#### 75. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1181` → after: `L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1181) · [Before (L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1181)

```diff
-         })), aS.i.subscribe("appManagerUpdated|soundOnFromAd", (rr => {
+         })), KO.j.subscribe("appManagerUpdated|soundOnFromAd", (dd => {
```

#### 76. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1183-L1184` → after: `L1183-L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1183-L1184) · [Before (L1183-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1183-L1184)

```diff
-         })), aS.i.subscribe("appManagerUpdated|clientEscMenuOptions", (rr => {
-           ZS.c.isApplyingDefaults ? this.settings = rr : this.onSettingsChanged(rr)
+         })), KO.j.subscribe("appManagerUpdated|clientEscMenuOptions", (dd => {
+           RO.e.isApplyingDefaults ? this.settings = dd : this.onSettingsChanged(dd)
```

#### 77. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1192-L1193` → after: `L1192-L1193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1192-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1192-L1193) · [Before (L1192-L1193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1192-L1193)

```diff
-           ad_kind: null !== (rr = null === Zr || void 0 === Zr ? void 0 : Zr.adKind) && void 0 !== rr ? rr : "unknown",
-           provider: null !== (Sr = null === Zr || void 0 === Zr ? void 0 : Zr.provider) && void 0 !== Sr ? Sr : null,
+           ad_kind: null !== (dd = null === Wd || void 0 === Wd ? void 0 : Wd.adKind) && void 0 !== dd ? dd : "unknown",
+           provider: null !== (Od = null === Wd || void 0 === Wd ? void 0 : Wd.provider) && void 0 !== Od ? Od : null,
```

#### 78. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1210` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1210) · [Before (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1210)

```diff
-           in_game: "inGame" === ZS.c.get("gameState")
+           in_game: "inGame" === RO.e.get("gameState")
```

#### 79. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1229` → after: `L1229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1229) · [Before (L1229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1229)

```diff
-         case sr.e.DISCORD_GUILD:
+         case dO.b.DISCORD_GUILD:
```

#### 80. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1231` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1231) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1231)

```diff
-         case sr.e.DISCORD_DM:
+         case dO.b.DISCORD_DM:
```

#### 81. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1234` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1234) · [Before (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1234)

```diff
-           return (0, dr.M)(rr) ? "public" : "private"
+           return (0, Md.K)(dd) ? "public" : "private"
```

#### 82. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1252` → after: `L1252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1252) · [Before (L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1252)

```diff
-             aS.i.Jp("sessionReplayGameQuit", {
+             KO.j.lQ("sessionReplayGameQuit", {
```

#### 83. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1254)

```diff
-               gameName: "string" === typeof Zr ? Zr : null
+               gameName: "string" === typeof Wd ? Wd : null
```

#### 84. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1257-L1258` → after: `L1257-L1258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1257-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1257-L1258) · [Before (L1257-L1258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1257-L1258)

```diff
-           isMenuOpen: pS.l,
-           isJoinAbandoned: ES.d,
+           isMenuOpen: oO.m,
+           isJoinAbandoned: tO.g,
```

#### 85. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1263-L1264` → after: `L1263-L1264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1263-L1264) · [Before (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1263-L1264)

```diff
-             isTouchScreen: () => ZS.c.get("isTouchScreen"),
-             getInputDevice: () => ZS.c.get("activeInputDevice"),
+             isTouchScreen: () => RO.e.get("isTouchScreen"),
+             getInputDevice: () => RO.e.get("activeInputDevice"),
```

#### 86. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1268` → after: `L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1268) · [Before (L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1268)

```diff
-               aS.i.Jp("sessionReplayStayProgress", rr)
+               KO.j.lQ("sessionReplayStayProgress", dd)
```

#### 87. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1274` → after: `L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1274) · [Before (L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1274)

```diff
-         const rr = (0, xS.e)(),
+         const dd = (0, NO.b)(),
```

#### 88. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1277-L1278` → after: `L1277-L1278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1277-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1277-L1278) · [Before (L1277-L1278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1277-L1278)

```diff
-         const Qr = ZS.c.get("gameState");
-         "inGame" === Qr ? this.joinConnectedGame() : "loadingScreen" !== Qr && "findingLobby" !== Qr || this.leaves.joinStarted(), this.subscribeToGameFlow(), new AS(this.replay, this.leaves.quitContext).start(), this.health.start(), this.trackInput(), this.pageEvents.startFirstI … [truncated]
+         const md = RO.e.get("gameState");
+         "inGame" === md ? this.joinConnectedGame() : "loadingScreen" !== md && "findingLobby" !== md || this.leaves.joinStarted(), this.subscribeToGameFlow(), new cO(this.replay, this.leaves.quitContext).start(), this.health.start(), this.trackInput(), this.pageEvents.startFirstI … [truncated]
```

#### 89. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1292` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1292) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1292)

```diff
-           const Zr = null !== (Sr = null === (Qr = this.flows.stay) || void 0 === Qr ? void 0 : Qr.playableAtMs) && void 0 !== Sr ? Sr : null;
+           const Wd = null !== (Od = null === (md = this.flows.stay) || void 0 === md ? void 0 : md.playableAtMs) && void 0 !== Od ? Od : null;
```

#### 90. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1301` → after: `L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1301) · [Before (L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1301)

```diff
-         aS.i.subscribe("joinedGame", (rr => {
+         KO.j.subscribe("joinedGame", (dd => {
```

#### 91. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1306-L1307` → after: `L1306-L1307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1306-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1306-L1307) · [Before (L1306-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1306-L1307)

```diff
-           (0, ES.d)() || this.onJoinedGame(Sr, Qr)
-         })), aS.i.subscribe("leaveGame", (() => {
+           (0, tO.g)() || this.onJoinedGame(Od, md)
+         })), KO.j.subscribe("leaveGame", (() => {
```

#### 92. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1309` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1309) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1309)

```diff
-           const Qr = null !== (rr = null === (Sr = this.flows.stay) || void 0 === Sr ? void 0 : Sr.name) && void 0 !== rr ? rr : null;
+           const md = null !== (dd = null === (Od = this.flows.stay) || void 0 === Od ? void 0 : Od.name) && void 0 !== dd ? dd : null;
```

#### 93. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1311` → after: `L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1311) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1311)

```diff
-         })), aS.i.subscribe("replayViewer|replayLoaded", (() => {
+         })), KO.j.subscribe("replayViewer|replayLoaded", (() => {
```

#### 94. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1314)

```diff
-         })), aS.i.subscribe("matchmakeAndPlayStepCompleted", (rr => {
+         })), KO.j.subscribe("matchmakeAndPlayStepCompleted", (dd => {
```

#### 95. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1319` → after: `L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1319) · [Before (L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1319)

```diff
-         })), aS.i.subscribe("leftPlayPage", (() => {
+         })), KO.j.subscribe("leftPlayPage", (() => {
```

#### 96. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1321` → after: `L1321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1321) · [Before (L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1321)

```diff
-         })), aS.i.subscribe("joinFailed", (rr => {
+         })), KO.j.subscribe("joinFailed", (dd => {
```

#### 97. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1332` → after: `L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1332) · [Before (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1332)

```diff
-         })), aS.i.subscribe("kickedForAfk", (() => {
+         })), KO.j.subscribe("kickedForAfk", (() => {
```

#### 98. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1334-L1335` → after: `L1334-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1334-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1334-L1335) · [Before (L1334-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1334-L1335)

```diff
-           this.leaves.kickedForAfk(null !== (rr = null === (Sr = this.flows.stay) || void 0 === Sr ? void 0 : Sr.name) && void 0 !== rr ? rr : null)
-         })), aS.i.subscribe("unwantedLeftGame", (rr => {
+           this.leaves.kickedForAfk(null !== (dd = null === (Od = this.flows.stay) || void 0 === Od ? void 0 : Od.name) && void 0 !== dd ? dd : null)
+         })), KO.j.subscribe("unwantedLeftGame", (dd => {
```

#### 99. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1342)

```diff
-         })), aS.i.subscribe("appManagerUpdated|gameState", (rr => {
+         })), KO.j.subscribe("appManagerUpdated|gameState", (dd => {
```

#### 100. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1344` → after: `L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1344) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1344)

```diff
-             entry_source: ZS.c.get("gameEntrySource")
+             entry_source: RO.e.get("gameEntrySource")
```

#### 101. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1348)

```diff
-         })), aS.i.subscribe("appManagerUpdated|gameEntrySource", (rr => {
+         })), KO.j.subscribe("appManagerUpdated|gameEntrySource", (dd => {
```

#### 102. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1352` → after: `L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1352) · [Before (L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1352)

```diff
-         })), aS.i.subscribe("sessionReplayPlayerKill", (rr => {
+         })), KO.j.subscribe("sessionReplayPlayerKill", (dd => {
```

#### 103. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1362)

```diff
-         (0, ES.d)() || (0, jS.e)() || (null === this.flows.stay && this.joinConnectedGame(), this.replay.capture("game_playable", {
+         (0, tO.g)() || (0, hO.c)() || (null === this.flows.stay && this.joinConnectedGame(), this.replay.capture("game_playable", {
```

#### 104. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1368)

```diff
-         if ((0, jS.e)()) return;
+         if ((0, hO.c)()) return;
```

#### 105. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1377-L1379` → after: `L1377-L1379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1377-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1377-L1379) · [Before (L1377-L1379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1377-L1379)

```diff
-         const Qr = (0, dr.M)(Sr),
-           Zr = ZS.c.get("gameEntrySource");
-         this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, rr, "autoReconnect" === Zr || "manualReconnect" === Zr), "inGame" === ZS.c.get("gameState") && this.flows.gamePlayable();
+         const md = (0, Md.K)(Od),
+           Wd = RO.e.get("gameEntrySource");
+         this.gamesJoined++, this.leaves.gameJoined(), this.flows.gameJoined(this.gamesJoined, dd, "autoReconnect" === Wd || "manualReconnect" === Wd), "inGame" === RO.e.get("gameState") && this.flows.gamePlayable();
```

#### 106. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1382` → after: `L1382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1382) · [Before (L1382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1382)

```diff
-             game_name: (0, ur.Mb)(rr),
+             game_name: (0, OO.Gb)(dd),
```

#### 107. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1385-L1386` → after: `L1385-L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1385-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1385-L1386) · [Before (L1385-L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1385-L1386)

```diff
-             game_analytics_id: (0, rS.d)(rr, Qr),
-             is_custom_game: (0, SS.l)(rr),
+             game_analytics_id: (0, mO.h)(dd, md),
+             is_custom_game: (0, WO.k)(dd),
```

#### 108. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1395` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1395) · [Before (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1395)

```diff
-           $screen_name: ar.is_custom_game ? `custom: ${ar.game_analytics_id}` : ar.game_name
+           $screen_name: Rd.is_custom_game ? `custom: ${Rd.game_analytics_id}` : Rd.game_name
```

#### 109. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1425` → after: `L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1425) · [Before (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1425)

```diff
-             }), this.replay.addReplayMarker(Zr.l.death, ar)
+             }), this.replay.addReplayMarker(Wd.j.death, Rd)
```

#### 110. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1445` → after: `L1445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1445) · [Before (L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1445)

```diff
-         this.flows.lx();
+         this.flows.Et();
```

#### 111. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1447-L1449` → after: `L1447-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1447-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1447-L1449) · [Before (L1447-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1447-L1449)

```diff
-         this.replay.addFpsSample(ar && Qr && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / Sr : null);
-         const jr = ar ? QS.e.getLastColyseusPingMs() : null;
-         null !== jr && this.replay.addPingSample(jr), this.framesThisTick = 0, this.lastTickMs = rr, this.ticks++, this.ticks % 2 === 0 && (ar && this.inputSinceActiveMarker && this.replay.addReplayMarker(Zr.l.active), this.inputSinceActiveMarker = !1), this.replay.markClockIfDue … [truncated]
+         this.replay.addFpsSample(Rd && md && this.framesThisTick > 0 ? 1e3 * this.framesThisTick / Od : null);
+         const Xd = Rd ? FO.c.getLastColyseusPingMs() : null;
+         null !== Xd && this.replay.addPingSample(Xd), this.framesThisTick = 0, this.lastTickMs = dd, this.ticks++, this.ticks % 2 === 0 && (Rd && this.inputSinceActiveMarker && this.replay.addReplayMarker(Wd.j.active), this.inputSinceActiveMarker = !1), this.replay.markClockIfDue … [truncated]
```

#### 112. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1452-L1453` → after: `L1452-L1453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1452-L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1452-L1453) · [Before (L1452-L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1452-L1453)

```diff
-     var wS = Qr(1267),
-       cS = Qr(1262),
+     var eO = md(1268),
+       IO = md(1253),
```

#### 113. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1464` → after: `L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1464) · [Before (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1464)

```diff
-       return FS.g.fetch(rr, {
+       return lO.c.fetch(dd, {
```

#### 114. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1470` → after: `L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1470) · [Before (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1470)

```diff
-         signal: (0, wS.o)(3e4)
+         signal: (0, eO.s)(3e4)
```

#### 115. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1477` → after: `L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1477) · [Before (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1477)

```diff
-         this.uploadToken = rr, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (Sr = Wr.url) && void 0 !==  … [truncated]
+         this.uploadToken = dd, this.url = void 0, this.post = void 0, this.isHidden = void 0, this.queue = [], this.retries = [], this.refusedTokens = new Set, this.overflowWarned = !1, this.unloading = !1, this.sendScheduled = !1, this.url = null !== (Od = Fd.url) && void 0 !==  … [truncated]
```

#### 116. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1509-L1510` → after: `L1509-L1510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1509-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1509-L1510) · [Before (L1509-L1510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1509-L1510)

```diff
-           Qr = (0, FS.i)(JSON.stringify(Sr));
-         Sr.properties.length > 32768 || Sr.event.length > 64 || oS(this.uploadToken) + Qr > 102400 ? console.warn(`Session replay timeline event ${Sr.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
+           md = (0, lO.e)(JSON.stringify(Od));
+         Od.properties.length > 32768 || Od.event.length > 64 || CO(this.uploadToken) + md > 102400 ? console.warn(`Session replay timeline event ${Od.event.slice(0,64)} is too large for index-server; dropped.`) : (this.queue.push({
```

#### 117. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1554` → after: `L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1554) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1554)

```diff
-         Qr.length < rr.events.length && console.error(`Session replay timeline: dropped ${rr.events.length-Qr.length} events after 3 attempts.`), this.retries.push(...Qr), this.trimToCap()
+         md.length < dd.events.length && console.error(`Session replay timeline: dropped ${dd.events.length-md.length} events after 3 attempts.`), this.retries.push(...md), this.trimToCap()
```

#### 118. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1565` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1565) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1565)

```diff
-           Zr = await this.post(this.url, Qr, (0, FS.i)(Qr)), Zr.ok && (Wr = await Zr.json())
+           Wd = await this.post(this.url, md, (0, lO.e)(md)), Wd.ok && (Fd = await Wd.json())
```

#### 119. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1569` → after: `L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1569) · [Before (L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1569)

```diff
-         return null === Wr ? 408 === Zr.status || 429 === Zr.status || Zr.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${Zr.status}; dropped ${rr.events.length} events.`), "dropped") : "rejected" in Wr ? Wr.retryable ? "retryLater" : ( … [truncated]
+         return null === Fd ? 408 === Wd.status || 429 === Wd.status || Wd.status >= 500 ? "retryLater" : (console.error(`Session replay timeline upload failed with ${Wd.status}; dropped ${dd.events.length} events.`), "dropped") : "rejected" in Fd ? Fd.retryable ? "retryLater" : ( … [truncated]
```

#### 120. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1572-L1574` → after: `L1572-L1574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1572-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1572-L1574) · [Before (L1572-L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1572-L1574)

```diff
-     var dS = Qr(41403),
-       sS = Qr(5448),
-       uS = Qr(1371);
+     var MO = md(41405),
+       dm = md(5359),
+       Om = md(1368);
```

#### 121. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1589` → after: `L1589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1589) · [Before (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1589)

```diff
-                 supportedCompression: [Wr.c.GZipJS],
+                 supportedCompression: [Fd.b.GZipJS],
```

#### 122. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1606` → after: `L1606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1606) · [Before (L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1606)

```diff
-           }(rr.posthog.projectApiKey), Wr.f.init(rr.posthog.projectApiKey, Mr({
+           }(dd.posthog.projectApiKey), Fd.c.init(dd.posthog.projectApiKey, Ld({
```

#### 123. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1612-L1613` → after: `L1612-L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1612-L1613) · [Before (L1612-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1612-L1613)

```diff
-             showsChat: (0, Zr.u)(Qr),
-             allowAutomatedBrowsers: (0, sS.e)((0, sS.j)(), !1),
+             showsChat: (0, Wd.s)(md),
+             allowAutomatedBrowsers: (0, dm.d)((0, dm.g)(), !1),
```

#### 124. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1622` → after: `L1622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1622) · [Before (L1622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1622)

```diff
-           })), jr && Wr.f.startSessionRecording({
+           })), Xd && Fd.c.startSessionRecording({
```

#### 125. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1624-L1625` → after: `L1624-L1625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1624-L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1624-L1625) · [Before (L1624-L1625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1624-L1625)

```diff
-           }), this.expectedSessionId = Qr.recordingId, Wr.f.onSessionId((rr => {
-             rr !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${rr} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
+           }), this.expectedSessionId = md.recordingId, Fd.c.onSessionId((dd => {
+             dd !== this.expectedSessionId && console.warn(`Session replay: PostHog session ${dd} differs from recording ${this.expectedSessionId}; events carry recording_id.`)
```

#### 126. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1638` → after: `L1638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1638) · [Before (L1638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1638)

```diff
-               client_build: kr.e
+               client_build: zd.c
```

#### 127. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1640` → after: `L1640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1640) · [Before (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1640)

```diff
-             Wr.f.register(Zr), null !== rr.videoStatus && Wr.f.register({
+             Fd.c.register(Wd), null !== dd.videoStatus && Fd.c.register({
```

#### 128. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1642` → after: `L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1642) · [Before (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1642)

```diff
-             }), Wr.f.setPersonProperties(Zr, {
+             }), Fd.c.setPersonProperties(Wd, {
```

#### 129. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1646` → after: `L1646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1646) · [Before (L1646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1646)

```diff
-           }(rr, jr), this.fpsMonitor = new ar.b({
+           }(dd, Xd), this.fpsMonitor = new Rd.d({
```

#### 130. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1650` → after: `L1650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1650) · [Before (L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1650)

```diff
-               }), aS.i.Jp("sessionReplayLowFps", {
+               }), KO.j.lQ("sessionReplayLowFps", {
```

#### 131. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1659` → after: `L1659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1659) · [Before (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1659)

```diff
-               }), aS.i.Jp("sessionReplayLowFps", {
+               }), KO.j.lQ("sessionReplayLowFps", {
```

#### 132. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1664)

```diff
-             dashboardHost: null !== (Sr = rr.posthog.dashboardHost) && void 0 !== Sr ? Sr : rr.posthog.apiHost,
+             dashboardHost: null !== (Od = dd.posthog.dashboardHost) && void 0 !== Od ? Od : dd.posthog.apiHost,
```

#### 133. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1666` → after: `L1666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1666) · [Before (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1666)

```diff
-             getSessionId: () => Wr.f.get_session_id(),
+             getSessionId: () => Fd.c.get_session_id(),
```

#### 134. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1675` → after: `L1675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1675) · [Before (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1675)

```diff
-         Wr.f.capture(rr, Sr)
+         Fd.c.capture(dd, Od)
```

#### 135. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1678` → after: `L1678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1678) · [Before (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1678)

```diff
-         Wr.f.capture(rr, Sr, {
+         Fd.c.capture(dd, Od, {
```

#### 136. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1684` → after: `L1684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1684) · [Before (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1684)

```diff
-         Wr.f.capture(rr, Sr, {
+         Fd.c.capture(dd, Od, {
```

#### 137. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1705` → after: `L1705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1705) · [Before (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1705)

```diff
-         Wr.f.register({
+         Fd.c.register({
```

#### 138. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1717` → after: `L1717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1717) · [Before (L1717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1717)

```diff
-         Wr.f.stopSessionRecording(), Wr.f.register({
+         Fd.c.stopSessionRecording(), Fd.c.register({
```

#### 139. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1722` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1722) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1722)

```diff
-         this.stopDomRecording(), Wr.f.set_config({
+         this.stopDomRecording(), Fd.c.set_config({
```

#### 140. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1731` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1731) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1731)

```diff
-         return !(null === (rr = Wr.f.sessionRecording) || void 0 === rr || !rr.started) && (Gr().rrweb.record.takeFullSnapshot(), !0)
+         return !(null === (dd = Fd.c.sessionRecording) || void 0 === dd || !dd.started) && (Pd().rrweb.record.takeFullSnapshot(), !0)
```

#### 141. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1750-L1751` → after: `L1750-L1751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1750-L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1750-L1751) · [Before (L1750-L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1750-L1751)

```diff
-         this.clockMarked = this.addReplayMarker(Zr.l.clock, {
-           epochMs: (0, dS.e)(),
+         this.clockMarked = this.addReplayMarker(Wd.j.clock, {
+           epochMs: (0, MO.b)(),
```

#### 142. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1761` → after: `L1761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1761) · [Before (L1761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1761)

```diff
-         return (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || Wr.f.sessionRecordingStarted()) && null !== (Sr = null === (Qr = Wr.f.sessionRecording) || void 0 === Qr ? void 0 : Qr.tryAddCustomEvent(rr, Zr)) && void 0 !== Sr && Sr
+         return (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) || Fd.c.sessionRecordingStarted()) && null !== (Od = null === (md = Fd.c.sessionRecording) || void 0 === md ? void 0 : md.tryAddCustomEvent(dd, Wd)) && void 0 !== Od && Od
```

#### 143. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1764` → after: `L1764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1764) · [Before (L1764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1764)

```diff
-         this.unregisterGameContext(), this.gameContextKeys = Object.keys(Sr), Wr.f.register(Sr), this.firstGameJoined || (this.firstGameJoined = !0, Wr.f.setPersonProperties(void 0, {
+         this.unregisterGameContext(), this.gameContextKeys = Object.keys(Od), Fd.c.register(Od), this.firstGameJoined || (this.firstGameJoined = !0, Fd.c.setPersonProperties(void 0, {
```

#### 144. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1781` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1781) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1781)

```diff
-         Wr.f.register(rr), Sr && Wr.f.setPersonProperties(rr)
+         Fd.c.register(dd), Od && Fd.c.setPersonProperties(dd)
```

#### 145. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1800-L1801` → after: `L1800-L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1800-L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1800-L1801) · [Before (L1800-L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1800-L1801)

```diff
-         Sr !== this.lastTagsJson && (this.lastTagsJson = Sr, Wr.f.register(rr), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
-           this.personUpdateTimer = null, Wr.f.setPersonProperties(this.tags.toProperties())
+         Od !== this.lastTagsJson && (this.lastTagsJson = Od, Fd.c.register(dd), null === this.personUpdateTimer && (this.personUpdateTimer = setTimeout((() => {
+           this.personUpdateTimer = null, Fd.c.setPersonProperties(this.tags.toProperties())
```

#### 146. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1805` → after: `L1805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1805) · [Before (L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1805)

```diff
-         for (const rr of this.gameContextKeys) Wr.f.unregister(rr);
+         for (const dd of this.gameContextKeys) Fd.c.unregister(dd);
```

#### 147. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1810` → after: `L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1810) · [Before (L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1810)

```diff
-   41403: (rr, Sr, Qr) => {
+   41405: (dd, Od, md) => {
```

#### 148. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1812` → after: `L1812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1812) · [Before (L1812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1812)

```diff
-       e: () => ar
+       b: () => Rd
```

#### 149. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1825-L1827` → after: `L1825-L1827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1825-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1825-L1827) · [Before (L1825-L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1825-L1827)

```diff
-       d: () => Zr,
-       g: () => ar,
-       i: () => Wr
+       b: () => Wd,
+       c: () => Rd,
+       e: () => Fd
```

#### 150. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1859` → after: `L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1859) · [Before (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1859)

```diff
-         return (null !== (Sr = this.inFlightLabels.get(rr)) && void 0 !== Sr ? Sr : 0) > 0
+         return (null !== (Od = this.inFlightLabels.get(dd)) && void 0 !== Od ? Od : 0) > 0
```

#### 151. `bundles/bloxd.io/chunks/js/sessionReplayPostHog.js` (Changed code · before: `L1872` → after: `L1872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9abR1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-a1d0305752552c66269319ce613cd17ef83a3c22f3a21807f95c8a42c98bf9ab) · [After (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1872) · [Before (L1872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHog.js#L1872)

```diff
-         void 0 !== rr && this.inFlightLabels.set(rr, (null !== (Qr = this.inFlightLabels.get(rr)) && void 0 !== Qr ? Qr : 0) + Sr)
+         void 0 !== dd && this.inFlightLabels.set(dd, (null !== (md = this.inFlightLabels.get(dd)) && void 0 !== md ? md : 0) + Od)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (140 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db)

#### 1. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L26)

```diff
-           return "symbol" == rr(Qr) ? Qr : Qr + ""
+           return "symbol" == dd(md) ? md : md + ""
```

#### 2. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L114)

```diff
-       new RegExp(`^${tr.source}`, "i"), new RegExp(tr.source, "gi"), "0".repeat(32), "0".repeat(16);
+       new RegExp(`^${Hd.source}`, "i"), new RegExp(Hd.source, "gi"), "0".repeat(32), "0".repeat(16);
```

#### 3. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L179)

```diff
-         const Zr = `${rr}.${String(Qr)}`;
+         const Wd = `${dd}.${String(md)}`;
```

#### 4. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L213)

```diff
-               return "function" == typeof rr ? null !== (Sr = rr.__rrweb_layer__) && void 0 !== Sr ? Sr : rr.__posthog_layer__ : void 0
+               return "function" == typeof dd ? null !== (Od = dd.__rrweb_layer__) && void 0 !== Od ? Od : dd.__posthog_layer__ : void 0
```

#### 5. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L235)

```diff
-             yr = (null == rr ? void 0 : rr.toString().includes("[native code]")) ? rr : null
+             wd = (null == dd ? void 0 : dd.toString().includes("[native code]")) ? dd : null
```

#### 6. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L306` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L306) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L306)

```diff
-         }, Vr = [], ir = 0, Ar = (Sr = rr) && Sr > 0 ? Sr : null, Cr = lr(), Mr = Xr)
+         }, jd = [], Dd = 0, cd = (Od = dd) && Od > 0 ? Od : null, nd = Sd(), Ld = sd)
```

#### 7. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L317)

```diff
-         } : (gr -= 1) > 0 ? Gr : (Gr.durationMs = lr() - Cr, Gr.deferredStylesheetCount = ir, Fr.deferredCount += ir, Ar = null, Rr(Gr.durationMs, Mr) ? Gr : kr = Gr)
+         } : (Gd -= 1) > 0 ? Pd : (Pd.durationMs = Sd() - nd, Pd.deferredStylesheetCount = Dd, ld.deferredCount += Dd, cd = null, rd(Pd.durationMs, Ld) ? Pd : zd = Pd)
```

#### 8. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L408` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L408) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L408)

```diff
-           return "symbol" == ZS(Sr) ? Sr : Sr + ""
+           return "symbol" == RO(Od) ? Od : Od + ""
```

#### 9. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L439-L440` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L439-L440) · [Before (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L439-L440)

```diff
-         const Qr = ["@import", `url(${JSON.stringify(rr.href)})`];
-         return "" === rr.layerName ? Qr.push("layer") : rr.layerName && Qr.push(`layer(${rr.layerName})`), rr.supportsText && Qr.push(`supports(${rr.supportsText})`), rr.media.length && Qr.push(rr.media.mediaText), Qr.join(" ") + ";"
+         const md = ["@import", `url(${JSON.stringify(dd.href)})`];
+         return "" === dd.layerName ? md.push("layer") : dd.layerName && md.push(`layer(${dd.layerName})`), dd.supportsText && md.push(`supports(${dd.supportsText})`), dd.media.length && md.push(dd.media.mediaText), md.join(" ") + ";"
```

#### 10. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L499` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L499) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L499)

```diff
-           return rr && null !== (Sr = null === (Qr = this.getMeta(rr)) || void 0 === Qr ? void 0 : Qr.id) && void 0 !== Sr ? Sr : -1
+           return dd && null !== (Od = null === (md = this.getMeta(dd)) || void 0 === md ? void 0 : md.id) && void 0 !== Od ? Od : -1
```

#### 11. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L501)

```diff
-         lZr(rr) {
+         QFd(dd) {
```

#### 12. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L527` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L527) · [Before (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L527)

```diff
-           const Qr = this.lZr(rr);
+           const md = this.QFd(dd);
```

#### 13. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L566` → after: `L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L566) · [Before (L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L566)

```diff
-         return Zr ? Wr ? jr && KS.has(eS(Qr)) ? Zr : "*".repeat(Zr.length) : ar ? ar(Qr, Zr, Sr) : Zr : Zr
+         return Wd ? Fd ? Xd && aO.has(wO(md)) ? Wd : "*".repeat(Wd.length) : Rd ? Rd(md, Wd, Od) : Wd : Wd
```

#### 14. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L588-L590` → after: `L588-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L588-L590) · [Before (L588-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L588-L590)

```diff
-           if (OS.test(Ir) || LS.test(Ir)) return `url(${fr}${Ir}${fr})`;
-           if (lS.test(Ir)) return `url(${fr}${Ir}${fr})`;
-           if ("/" === Ir[0]) return `url(${fr}${function(rr){let Sr="";return Sr=rr.indexOf("//")>-1?rr.split("/").slice(0,3).join("/"):rr.split("/")[0],Sr=Sr.split("?")[0],Sr}(Sr)+Ir}${fr})`;
+           if (BO.test(Kd) || SO.test(Kd)) return `url(${hd}${Kd}${hd})`;
+           if (sO.test(Kd)) return `url(${hd}${Kd}${hd})`;
+           if ("/" === Kd[0]) return `url(${hd}${function(dd){let Od="";return Od=dd.indexOf("//")>-1?dd.split("/").slice(0,3).join("/"):dd.split("/")[0],Od=Od.split("?")[0],Od}(Od)+Kd}${hd})`;
```

#### 15. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L595)

```diff
-           return `url(${fr}${Er.join("/")}${fr})`
+           return `url(${hd}${vd.join("/")}${hd})`
```

#### 16. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L652-L653` → after: `L652-L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L652-L653) · [Before (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L652-L653)

```diff
-                   const jr = Wr.toDataURL(Qr || "image/webp", null != Zr ? Zr : .4),
-                     Ir = Sr.length > jr.length ? jr : Sr;
+                   const Xd = Fd.toDataURL(md || "image/webp", null != Wd ? Wd : .4),
+                     Kd = Od.length > Xd.length ? Xd : Od;
```

#### 17. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L712)

```diff
-         }(rr, Zr) : "style" === Qr ? XS(Zr, iS(rr)) : "object" === Sr && "data" === Qr ? VS(rr, Zr) : Zr : VS(rr, Zr)
+         }(dd, Wd) : "style" === md ? uO(Wd, DO(dd)) : "object" === Od && "data" === md ? jO(dd, Wd) : Wd : jO(dd, Wd)
```

#### 18. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L742)

```diff
-               if (Wr.closest(`.${Sr}`)) return !0
+               if (Fd.closest(`.${Od}`)) return !0
```

#### 19. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L805` → after: `L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L805) · [Before (L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L805)

```diff
-         if (Pr >= Hr) return SQ = !0, rQ || (rQ = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${Hr}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
+         if (ud >= Vd) return Wm = !0, mm || (mm = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${Vd}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
```

#### 20. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L967` → after: `L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L967) · [Before (L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L967)

```diff
-                         console.warn(`Cannot inline img src=${Zr}! Error: ${rr}`)
+                         console.warn(`Cannot inline img src=${Wd}! Error: ${dd}`)
```

#### 21. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L987-L990` → after: `L987-L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L987-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L987-L990) · [Before (L987-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L987-L990)

```diff
-                     rr_width: `${Sr}px`,
-                     rr_height: `${Zr}px`,
-                     rr_left: `${Math.floor(Wr+((null===(lr=Qr.defaultView)||void 0===lr?void 0:lr.scrollX)||0))}px`,
-                     rr_top: `${Math.floor(ar+((null===(Xr=Qr.defaultView)||void 0===Xr?void 0:Xr.scrollY)||0))}px`
+                     rr_width: `${Od}px`,
+                     rr_height: `${Wd}px`,
+                     rr_left: `${Math.floor(Fd+((null===(Sd=md.defaultView)||void 0===Sd?void 0:Sd.scrollX)||0))}px`,
+                     rr_top: `${Math.floor(Rd+((null===(sd=md.defaultView)||void 0===sd?void 0:sd.scrollY)||0))}px`
```

#### 22. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1054` → after: `L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1054) · [Before (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1054)

```diff
-                     console.warn(`Cannot get CSS styles from text's parentNode. Error: ${Sr}`, rr)
+                     console.warn(`Cannot get CSS styles from text's parentNode. Error: ${Od}`, dd)
```

#### 23. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1114` → after: `L1114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1114) · [Before (L1114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1114)

```diff
-                 return null !== (Sr = null == Zr ? void 0 : Zr[1]) && void 0 !== Sr ? Sr : null
+                 return null !== (Od = null == Wd ? void 0 : Wd[1]) && void 0 !== Od ? Od : null
```

#### 24. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1413` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1413) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1413)

```diff
-           lZr: () => (console.warn(EQ), null),
+           QFd: () => (console.warn(om), null),
```

#### 25. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1500` → after: `L1500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1500) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1500)

```diff
-         return rr ? rr.nodeType === rr.ELEMENT_NODE ? rr : Lr.parentElement(rr) : null
+         return dd ? dd.nodeType === dd.ELEMENT_NODE ? dd : Bd.parentElement(dd) : null
```

#### 26. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1554` → after: `L1554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1554) · [Before (L1554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1554)

```diff
-           return null !== (Sr = this.styleIDMap.get(rr)) && void 0 !== Sr ? Sr : -1
+           return null !== (Od = this.styleIDMap.get(dd)) && void 0 !== Od ? Od : -1
```

#### 27. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1586` → after: `L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1586) · [Before (L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1586)

```diff
-         return "boolean" == typeof Qr ? Qr : function(rr) {
+         return "boolean" == typeof md ? md : function(dd) {
```

#### 28. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1631` → after: `L1631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1631) · [Before (L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1631)

```diff
-         HQ = (rr, Sr) => `${rr}@${Sr}`,
+         Am = (dd, Od) => `${dd}@${Od}`,
```

#### 29. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1643` → after: `L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1643) · [Before (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1643)

```diff
-                 Qr = lr() - rr, Zr = Sr, gr > 0 || Rr(Qr, null != Zr ? Zr : Xr) || Qr > cr.slowestBatchMs && (cr.slowestBatchMs = Qr)
+                 md = Sd() - dd, Wd = Od, Gd > 0 || rd(md, null != Wd ? Wd : sd) || md > Id.slowestBatchMs && (Id.slowestBatchMs = md)
```

#### 30. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1815` → after: `L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1815) · [Before (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1815)

```diff
-                     jr = null !== (Sr = rr.attributeNamespace) && void 0 !== Sr ? Sr : null;
+                     Xd = null !== (Od = dd.attributeNamespace) && void 0 !== Od ? Od : null;
```

#### 31. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1820-L1822` → after: `L1820-L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1820-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1820-L1822) · [Before (L1820-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1820-L1822)

```diff
-                       if ("http://www.w3.org/1999/xlink" === Qr) return `xlink:${Sr}`;
-                       if ("http://www.w3.org/XML/1998/namespace" === Qr) return `xml:${Sr}`;
-                       if ("http://www.w3.org/2000/xmlns/" === Qr) return "xmlns" === Sr ? Sr : `xmlns:${Sr}`;
+                       if ("http://www.w3.org/1999/xlink" === md) return `xlink:${Od}`;
+                       if ("http://www.w3.org/XML/1998/namespace" === md) return `xml:${Od}`;
+                       if ("http://www.w3.org/2000/xmlns/" === md) return "xmlns" === Od ? Od : `xmlns:${Od}`;
```

#### 32. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1824` → after: `L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1824) · [Before (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1824)

```diff
-                       return Wr ? `${Wr}:${Sr}` : Sr
+                       return Fd ? `${Fd}:${Od}` : Od
```

#### 33. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L1864` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1864) · [Before (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L1864)

```diff
-                         Zr !== Sr.style.getPropertyValue(rr) || Wr !== Sr.style.getPropertyPriority(rr) ? Er.styleDiff[rr] = "" === Wr ? Zr : [Zr, Wr] : Er._unchangedStyles[rr] = [Zr, Wr]
+                         Wd !== Od.style.getPropertyValue(dd) || Fd !== Od.style.getPropertyPriority(dd) ? vd.styleDiff[dd] = "" === Fd ? Wd : [Wd, Fd] : vd._unchangedStyles[dd] = [Wd, Fd]
```

#### 34. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2066` → after: `L2066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2066) · [Before (L2066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2066)

```diff
-             const xr = `${Er},${pr}`;
+             const td = `${vd},${Qd}`;
```

#### 35. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2117` → after: `L2117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2117) · [Before (L2117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2117)

```diff
-         jr = Qr.getId("#document" === Sr.nodeName ? Sr : Lr.host(Sr));
+         Xd = md.getId("#document" === Od.nodeName ? Od : Bd.host(Od));
```

#### 36. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2383` → after: `L2383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2383) · [Before (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2383)

```diff
-                 "radio" === hr && zr && tr && Qr.querySelectorAll(`input[type="radio"][name="${zr}"]`).forEach((rr => {
+                 "radio" === yd && bd && Hd && md.querySelectorAll(`input[type="radio"][name="${bd}"]`).forEach((dd => {
```

#### 37. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2552` → after: `L2552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2552) · [Before (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2552)

```diff
-                 return ar.CSSStyleSheet.prototype.insertRule.apply(this, [`${rr} { ${Sr} }`, Qr])
+                 return Rd.CSSStyleSheet.prototype.insertRule.apply(this, [`${dd} { ${Od} }`, md])
```

#### 38. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2765` → after: `L2765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2765) · [Before (L2765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2765)

```diff
-                   fontSource: "string" == typeof Sr ? Sr : JSON.stringify(Array.from(new Uint8Array(Sr)))
+                   fontSource: "string" == typeof Od ? Od : JSON.stringify(Array.from(new Uint8Array(Od)))
```

#### 39. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2813` → after: `L2813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2813) · [Before (L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2813)

```diff
-                 yh: Ir
+                 By: Kd
```

#### 40. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2832` → after: `L2832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2832) · [Before (L2832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2832)

```diff
-                   console.warn(`Custom element callback failed for ${Sr}`)
+                   console.warn(`Custom element callback failed for ${Od}`)
```

#### 41. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2838` → after: `L2838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2838) · [Before (L2838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2838)

```diff
-           for (const Sr of rr.plugins) xr(`plugin:${Sr.name}`, (() => Sr.observer(Sr.callback, Qr, Sr.options)))
+           for (const Od of dd.plugins) td(`plugin:${Od.name}`, (() => Od.observer(Od.callback, md, Od.options)))
```

#### 42. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2873` → after: `L2873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2873) · [Before (L2873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2873)

```diff
-             return "number" != typeof Sr || 0 > Sr ? Sr : null !== (Zr = (Qr || this.getLocalIdToRemoteIdMap(rr)).get(Sr)) && void 0 !== Zr ? Zr : -1
+             return "number" != typeof Od || 0 > Od ? Od : null !== (Wd = (md || this.getLocalIdToRemoteIdMap(dd)).get(Od)) && void 0 !== Wd ? Wd : -1
```

#### 43. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L2906` → after: `L2906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR2906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2906) · [Before (L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L2906)

```diff
-             return null !== (Sr = null !== (Qr = null === (Zr = this.attachedIframes.get(rr)) || void 0 === Zr ? void 0 : Zr.element) && void 0 !== Qr ? Qr : this.iframeElementsById.get(rr)) && void 0 !== Sr ? Sr : null
+             return null !== (Od = null !== (md = null === (Wd = this.attachedIframes.get(dd)) || void 0 === Wd ? void 0 : Wd.element) && void 0 !== md ? md : this.iframeElementsById.get(dd)) && void 0 !== Od ? Od : null
```

#### 44. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3058` → after: `L3058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3058) · [Before (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3058)

```diff
-                     return Sr.data.yh.forEach((Sr => {
+                     return Od.data.By.forEach((Od => {
```

#### 45. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3092` → after: `L3092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3092) · [Before (L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3092)

```diff
-               Qr = (null == Sr ? void 0 : Sr.element) || this.iframeElementsById.get(rr) || this.mirror.lZr(rr);
+               md = (null == Od ? void 0 : Od.element) || this.iframeElementsById.get(dd) || this.mirror.QFd(dd);
```

#### 46. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3159` → after: `L3159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3159) · [Before (L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3159)

```diff
-             const ar = null !== (Qr = null === (Wr = Lr.host(rr)) || void 0 === Wr ? void 0 : Wr.ownerDocument) && void 0 !== Qr ? Qr : Sr,
+             const Rd = null !== (md = null === (Fd = Bd.host(dd)) || void 0 === Fd ? void 0 : Fd.ownerDocument) && void 0 !== md ? md : Od,
```

#### 47. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3334` → after: `L3334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3334) · [Before (L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3334)

```diff
-                     return Sr && "object" == typeof Sr ? Sr : null
+                     return Od && "object" == typeof Od ? Od : null
```

#### 48. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3343` → after: `L3343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3343) · [Before (L3343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3343)

```diff
-                     usage: "number" == typeof ar.usage ? ar.usage | Ir : Ir
+                     usage: "number" == typeof Rd.usage ? Rd.usage | Kd : Kd
```

#### 49. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3440` → after: `L3440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3440) · [Before (L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3440)

```diff
-         console.warn(`[replay] canvas capture: ${rr}`, ...Qr)
+         console.warn(`[replay] canvas capture: ${dd}`, ...md)
```

#### 50. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3501` → after: `L3501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3501) · [Before (L3501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3501)

```diff
-               return yZ(`disabled because the encode worker did not start. ${KZ}`, rr), void fr()
+               return JW(`disabled because the encode worker did not start. ${EW}`, dd), void hd()
```

#### 51. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3506` → after: `L3506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3506) · [Before (L3506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3506)

```diff
-               mr = !0, yZ(`stopped because the encode worker failed. ${KZ}`, rr), cancelAnimationFrame(hr), null === (Sr = pr.terminate) || void 0 === Sr || Sr.call(pr), this.resetFrameDedup = null
+               od = !0, JW(`stopped because the encode worker failed. ${EW}`, dd), cancelAnimationFrame(yd), null === (Od = Qd.terminate) || void 0 === Od || Od.call(Qd), this.resetFrameDedup = null
```

#### 52. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3812` → after: `L3812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3812) · [Before (L3812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3812)

```diff
-                           if (Sr.media && "string" == typeof Sr.media.mediaText) return `@media ${Sr.media.mediaText} {`;
+                           if (Od.media && "string" == typeof Od.media.mediaText) return `@media ${Od.media.mediaText} {`;
```

#### 53. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3816` → after: `L3816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3816) · [Before (L3816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3816)

```diff
-                             return `${rr.selectorText} {${Qr?" "+Qr:""}`
+                             return `${dd.selectorText} {${md?" "+md:""}`
```

#### 54. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3818` → after: `L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3818) · [Before (L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3818)

```diff
-                           if ("containerName" in Sr) return "string" != typeof Sr.containerQuery || Sr.containerName && !hS.test(Sr.containerName) ? null : `@container ${Sr.containerName?`${Sr.containerName} `:""}${Sr.containerQuery} {`;
+                           if ("containerName" in Od) return "string" != typeof Od.containerQuery || Od.containerName && !TO.test(Od.containerName) ? null : `@container ${Od.containerName?`${Od.containerName} `:""}${Od.containerQuery} {`;
```

#### 55. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3827` → after: `L3827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3827) · [Before (L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3827)

```diff
-                             return "" === Zr || "Object" === Zr || "CSSSupportsRule" === Zr ? `@supports ${Sr.conditionText} {` : null
+                             return "" === Wd || "Object" === Wd || "CSSSupportsRule" === Wd ? `@supports ${Od.conditionText} {` : null
```

#### 56. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3829` → after: `L3829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3829) · [Before (L3829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3829)

```diff
-                           return "string" == typeof Sr.name ? "keyText" in Sr.cssRules[0] ? hS.test(Sr.name) ? `@keyframes ${Sr.name} {` : null : "" === Sr.name ? "@layer {" : zS.test(Sr.name) ? `@layer ${Sr.name} {` : null : null
+                           return "string" == typeof Od.name ? "keyText" in Od.cssRules[0] ? TO.test(Od.name) ? `@keyframes ${Od.name} {` : null : "" === Od.name ? "@layer {" : pO.test(Od.name) ? `@layer ${Od.name} {` : null : null
```

#### 57. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3913` → after: `L3913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3913) · [Before (L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3913)

```diff
-                     let jr = rr > 0 ? rr : 1;
+                     let Xd = dd > 0 ? dd : 1;
```

#### 58. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3942` → after: `L3942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3942) · [Before (L3942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3942)

```diff
-                   text: () => Qr ? Zr : null,
+                   text: () => md ? Wd : null,
```

#### 59. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L3981` → after: `L3981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR3981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3981) · [Before (L3981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L3981)

```diff
-                   pr && this.pendingDeferredSheets.delete(jr), Rr(xr = lr() - fr, null != (mr = Er) ? mr : Xr) || (Fr.totalMs += xr, xr > Fr.slowestSliceMs && (Fr.slowestSliceMs = xr))
+                   Qd && this.pendingDeferredSheets.delete(Xd), rd(td = Sd() - hd, null != (od = vd) ? od : sd) || (ld.totalMs += td, td > ld.slowestSliceMs && (ld.slowestSliceMs = td))
```

#### 60. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4187` → after: `L4187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4187) · [Before (L4187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4187)

```diff
-           } : void 0 !== nr ? nr : {
+           } : void 0 !== pd ? pd : {
```

#### 61. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4228` → after: `L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4228) · [Before (L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4228)

```diff
-                   const rr = HZ.lZr(Zr.node.id);
+                   const dd = AW.QFd(Wd.node.id);
```

#### 62. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4562` → after: `L4562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4562) · [Before (L4562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4562)

```diff
-               const Qr = HZ.lZr(Sr);
+               const md = AW.QFd(Od);
```

#### 63. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4712` → after: `L4712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4712) · [Before (L4712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4712)

```diff
-                 ar = null !== (rr = null !== (Sr = null !== (Qr = null !== (Zr = Wr.fullscreenElement) && void 0 !== Zr ? Zr : Wr.webkitFullscreenElement) && void 0 !== Qr ? Qr : Wr.mozFullScreenElement) && void 0 !== Sr ? Sr : Wr.msFullscreenElement) && void 0 !== rr ? rr : null … [truncated]
+                 Rd = null !== (dd = null !== (Od = null !== (md = null !== (Wd = Fd.fullscreenElement) && void 0 !== Wd ? Wd : Fd.webkitFullscreenElement) && void 0 !== md ? md : Fd.mozFullScreenElement) && void 0 !== Od ? Od : Fd.msFullscreenElement) && void 0 !== dd ? dd : null … [truncated]
```

#### 64. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4765` → after: `L4765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4765) · [Before (L4765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4765)

```diff
-       new RegExp(`^${CZ.source}`, "i"), new RegExp(CZ.source, "gi"), "0".repeat(32), "0".repeat(16);
+       new RegExp(`^${LW.source}`, "i"), new RegExp(LW.source, "gi"), "0".repeat(32), "0".repeat(16);
```

#### 65. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4788` → after: `L4788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4788) · [Before (L4788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4788)

```diff
-           return "symbol" == GZ(Sr) ? Sr : Sr + ""
+           return "symbol" == zW(Od) ? Od : Od + ""
```

#### 66. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4804` → after: `L4804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4804) · [Before (L4804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4804)

```diff
-             return this.functionName ? `${this.functionName} (${this.fileName}:${rr}:${Sr})` : `${this.fileName}:${rr}:${Sr}`
+             return this.functionName ? `${this.functionName} (${this.fileName}:${dd}:${Od})` : `${this.fileName}:${dd}:${Od}`
```

#### 67. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4817` → after: `L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4817) · [Before (L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4817)

```diff
-             if (!Sr) throw new Error(`Cannot parse given url: ${rr}`);
+             if (!Od) throw new Error(`Cannot parse given url: ${dd}`);
```

#### 68. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4919` → after: `L4919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4919) · [Before (L4919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4919)

```diff
-           Wr.length > 1 && (Qr += `:eq(${Wr.indexOf(rr)})`), Sr = Qr + (Sr ? ">" + Sr : ""), rr = Zr
+           Fd.length > 1 && (md += `:eq(${Fd.indexOf(dd)})`), Od = md + (Od ? ">" + Od : ""), dd = Wd
```

#### 69. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L4957` → after: `L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4957) · [Before (L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L4957)

```diff
-             return Qr.stringLengthLimit && Sr.length > Qr.stringLengthLimit && (Sr = `${Sr.slice(0,Qr.stringLengthLimit)}...`), Sr
+             return md.stringLengthLimit && Od.length > md.stringLengthLimit && (Od = `${Od.slice(0,md.stringLengthLimit)}...`), Od
```

#### 70. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5002` → after: `L5002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5002) · [Before (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5002)

```diff
-             Sr.reason instanceof Error ? (Qr = Sr.reason, Wr = [DZ(`Uncaught (in promise) ${Qr.name}: ${Qr.message}`, Zr.stringifyOptions)]) : (Qr = new Error, Wr = [DZ("Uncaught (in promise)", Zr.stringifyOptions), DZ(Sr.reason, Zr.stringifyOptions)]), rr({
+             Od.reason instanceof Error ? (md = Od.reason, Fd = [MW(`Uncaught (in promise) ${md.name}: ${md.message}`, Wd.stringifyOptions)]) : (md = new Error, Fd = [MW("Uncaught (in promise)", Wd.stringifyOptions), MW(Od.reason, Wd.stringifyOptions)]), dd({
```

#### 71. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5064` → after: `L5064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5064) · [Before (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5064)

```diff
-                   return "function" == typeof rr ? null !== (Sr = rr.__rrweb_layer__) && void 0 !== Sr ? Sr : rr.__posthog_layer__ : void 0
+                   return "function" == typeof dd ? null !== (Od = dd.__rrweb_layer__) && void 0 !== Od ? Od : dd.__posthog_layer__ : void 0
```

#### 72. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5086` → after: `L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5086) · [Before (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5086)

```diff
-       const WW = null != uZ ? uZ : {},
+       const KF = null != mF ? mF : {},
```

#### 73. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5104` → after: `L5104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5104) · [Before (L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5104)

```diff
-         return Sr > Qr && (Zr.warn("min cannot be greater than max."), Sr = Qr), tW(rr) ? rr > Qr ? (Zr.warn(" cannot be  greater than max: " + Qr + ". Using max value instead."), Qr) : Sr > rr ? (Zr.warn(" cannot be less than min: " + Sr + ". Using min value instead."), Sr) : rr … [truncated]
+         return Od > md && (Wd.warn("min cannot be greater than max."), Od = md), TF(dd) ? dd > md ? (Wd.warn(" cannot be  greater than max: " + md + ". Using max value instead."), md) : Od > dd ? (Wd.warn(" cannot be less than min: " + Od + ". Using min value instead."), Od) : dd … [truncated]
```

#### 74. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5146` → after: `L5146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5146) · [Before (L5146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5146)

```diff
-           }(KW, `Native gzip produced invalid output: ${rr}`)
+           }(EF, `Native gzip produced invalid output: ${dd}`)
```

#### 75. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5245` → after: `L5245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5245) · [Before (L5245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5245)

```diff
-               Qr.error(`You must initialize PostHog before calling ${rr}`)
+               md.error(`You must initialize PostHog before calling ${dd}`)
```

#### 76. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5247` → after: `L5247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5247) · [Before (L5247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5247)

```diff
-             createLogger: (Sr, Qr) => XW(`${rr} ${Sr}`, Qr)
+             createLogger: (Od, md) => VF(`${dd} ${Od}`, md)
```

#### 77. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5266` → after: `L5266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5266) · [Before (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5266)

```diff
-         } = null != Zr ? Zr : {};
+         } = null != Wd ? Wd : {};
```

#### 78. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5280` → after: `L5280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5280) · [Before (L5280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5280)

```diff
-           if (EW(rr)) return null !== (Sr = rr.__posthog_layer__) && void 0 !== Sr ? Sr : rr.__rrweb_layer__
+           if (oF(dd)) return null !== (Od = dd.__posthog_layer__) && void 0 !== Od ? Od : dd.__rrweb_layer__
```

#### 79. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5347` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5347) · [Before (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5347)

```diff
-             return mW(rr) && rr ? rr : Sr
+             return HF(dd) && dd ? dd : Od
```

#### 80. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5374` → after: `L5374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5374) · [Before (L5374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5374)

```diff
-         return Math.min(dW, null !== (Sr = rr.payloadSizeLimitBytes) && void 0 !== Sr ? Sr : dW)
+         return Math.min(dR, null !== (Od = dd.payloadSizeLimitBytes) && void 0 !== Od ? Od : dR)
```

#### 81. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5406` → after: `L5406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5406) · [Before (L5406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5406)

```diff
-         return mW(Wr) && (Wr = parseInt(Wr)), Wr > Qr ? `[SessionRecording] ${Zr} body too large to record (${Wr} bytes)` : rr
+         return HF(Fd) && (Fd = parseInt(Fd)), Fd > md ? `[SessionRecording] ${Wd} body too large to record (${Fd} bytes)` : dd
```

#### 82. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5506` → after: `L5506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5506) · [Before (L5506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5506)

```diff
-         return hW(jr) ? jr : ar(jr)
+         return pF(Xd) ? Xd : Rd(Xd)
```

#### 83. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5608` → after: `L5608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5608) · [Before (L5608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5608)

```diff
-         return `${va}: ${rr}`
+         return `${BR}: ${dd}`
```

#### 84. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5612` → after: `L5612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5612) · [Before (L5612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5612)

```diff
-         return `[SessionReplay] Body too large to record (> ${rr} bytes)`
+         return `[SessionReplay] Body too large to record (> ${dd} bytes)`
```

#### 85. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L5739` → after: `L5739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR5739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5739) · [Before (L5739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L5739)

```diff
-             if (ar && jr) return `Content-Type ${ar} is not supported`;
+             if (Rd && Xd) return `Content-Type ${Rd} is not supported`;
```

#### 86. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6110` → after: `L6110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6110) · [Before (L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6110)

```diff
-         return 0 === Sr ? xj : (null == rr ? void 0 : rr.get_property(Qr ? Zr + Qr : Wr)) === ar ? Ej : pj
+         return 0 === Od ? qX : (null == dd ? void 0 : dd.get_property(md ? Wd + md : Fd)) === Rd ? oX : NX
```

#### 87. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6116` → after: `L6116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6116) · [Before (L6116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6116)

```diff
-           return "regex" === Sr.matching && (null !== (Zr = null == Qr ? void 0 : Qr.get(Sr.url)) && void 0 !== Zr ? Zr : new RegExp(Sr.url)).test(rr)
+           return "regex" === Od.matching && (null !== (Wd = null == md ? void 0 : md.get(Od.url)) && void 0 !== Wd ? Wd : new RegExp(Od.url)).test(dd)
```

#### 88. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6121` → after: `L6121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6121) · [Before (L6121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6121)

```diff
-         return rr.includes("trigger_activated") ? Ej : rr.includes("trigger_pending") ? pj : xj
+         return dd.includes("trigger_activated") ? oX : dd.includes("trigger_pending") ? NX : qX
```

#### 89. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6268` → after: `L6268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6268) · [Before (L6268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6268)

```diff
-                   ar = hW(Sr) ? !0 === Sr : Qr ? Sr === Qr : !!Sr
+                   Rd = pF(Od) ? !0 === Od : md ? Od === md : !!Od
```

#### 90. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6381` → after: `L6381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6381) · [Before (L6381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6381)

```diff
-         return Sr ? Wj : "trigger_activated" === Qr ? aj : "trigger_pending" === Qr ? jj : !1 === rr.isSampled ? Zj : aj
+         return Od ? KX : "trigger_activated" === md ? hX : "trigger_pending" === md ? vX : !1 === dd.isSampled ? XX : hX
```

#### 91. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6392` → after: `L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6392) · [Before (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6392)

```diff
-         return Qr && "trigger_pending" === Sr ? jj : Qr && "trigger_disabled" === Sr || Zr && !rr.isSampled ? Zj : !0 === rr.isSampled ? Wj : aj
+         return md && "trigger_pending" === Od ? vX : md && "trigger_disabled" === Od || Wd && !dd.isSampled ? XX : !0 === dd.isSampled ? KX : hX
```

#### 92. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6520` → after: `L6520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6520) · [Before (L6520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6520)

```diff
-           var Zr = new(rr instanceof Hj ? Hj : rr instanceof qj ? qj : Pj)(Qr - Sr);
+           var Wd = new(dd instanceof AX ? AX : dd instanceof rX ? rX : iX)(md - Od);
```

#### 93. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6696` → after: `L6696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6696) · [Before (L6696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6696)

```diff
-           }, this.vt = rr => this._rrweb.mirror.lZr(rr), this.bt = rr => {
+           }, this.vt = dd => this._rrweb.mirror.QFd(dd), this.bt = dd => {
```

#### 94. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6698` → after: `L6698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6698) · [Before (L6698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6698)

```diff
-             return (null !== (Sr = null === (Qr = rr.removes) || void 0 === Qr ? void 0 : Qr.length) && void 0 !== Sr ? Sr : 0) + (null !== (Zr = null === (Wr = rr.attributes) || void 0 === Wr ? void 0 : Wr.length) && void 0 !== Zr ? Zr : 0) + (null !== (ar = null === (jr = rr.te … [truncated]
+             return (null !== (Od = null === (md = dd.removes) || void 0 === md ? void 0 : md.length) && void 0 !== Od ? Od : 0) + (null !== (Wd = null === (Fd = dd.attributes) || void 0 === Fd ? void 0 : Fd.length) && void 0 !== Wd ? Wd : 0) + (null !== (Rd = null === (Xd = dd.te … [truncated]
```

#### 95. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6728-L6729` → after: `L6728-L6729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6728-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6728-L6729) · [Before (L6728-L6729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6728-L6729)

```diff
-             bucketSize: null !== (Qr = this.it.bucketSize) && void 0 !== Qr ? Qr : 100,
-             refillRate: null !== (Zr = this.it.refillRate) && void 0 !== Zr ? Zr : 10,
+             bucketSize: null !== (md = this.it.bucketSize) && void 0 !== md ? md : 100,
+             refillRate: null !== (Wd = this.it.refillRate) && void 0 !== Wd ? Wd : 10,
```

#### 96. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6733` → after: `L6733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6733) · [Before (L6733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6733)

```diff
-           }), this.dt = null !== (Wr = this.it.bytesBucketSize) && void 0 !== Wr ? Wr : 0, this.ht = null !== (ar = this.it.bytesRefillRate) && void 0 !== ar ? ar : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
+           }), this.dt = null !== (Fd = this.it.bytesBucketSize) && void 0 !== Fd ? Fd : 0, this.ht = null !== (Rd = this.it.bytesRefillRate) && void 0 !== Rd ? Rd : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
```

#### 97. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6735` → after: `L6735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6735) · [Before (L6735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6735)

```diff
-           this.xt = tW(jr) && Number.isFinite(jr) && jr > 0 ? jr : 3e5
+           this.xt = TF(Xd) && Number.isFinite(Xd) && Xd > 0 ? Xd : 3e5
```

#### 98. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6858` → after: `L6858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6858) · [Before (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6858)

```diff
-           const Zr = "person" === rr.type ? Qr : Sr,
+           const Wd = "person" === dd.type ? md : Od,
```

#### 99. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6869` → after: `L6869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6869) · [Before (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6869)

```diff
-         return Sr ? rr : "!" + rr
+         return Od ? dd : "!" + dd
```

#### 100. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6904` → after: `L6904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6904) · [Before (L6904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6904)

```diff
-             return tW(Qr) ? Qr : null
+             return TF(md) ? md : null
```

#### 101. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L6930` → after: `L6930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR6930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6930) · [Before (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L6930)

```diff
-             pr && (xr ? this.qt("sampled") : KI.warn(`Sample rate (${Qr}) has determined that this sessionId (${rr}) will not be sent to the server.`)), null === (Sr = this._instance.persistence) || void 0 === Sr || Sr.register({
+             Qd && (td ? this.qt("sampled") : EK.warn(`Sample rate (${md}) has determined that this sessionId (${dd}) will not be sent to the server.`)), null === (Od = this._instance.persistence) || void 0 === Od || Od.register({
```

#### 102. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7008` → after: `L7008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7008) · [Before (L7008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7008)

```diff
-               return Wr ? Wj : Zr ? jj : Zj
+               return Fd ? KX : Wd ? vX : XX
```

#### 103. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7069` → after: `L7069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7069) · [Before (L7069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7069)

```diff
-                 Er = "string" == typeof Sr && Sr !== rr, pr = tW(Qr) && Qr !== ar, fr = Sr === rr && tW(Qr) && Qr === ar && hW(Zr) ? Zr : null
+                 vd = "string" == typeof Od && Od !== dd, Qd = TF(md) && md !== Rd, hd = Od === dd && TF(md) && md === Rd && pF(Wd) ? Wd : null
```

#### 104. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7125` → after: `L7125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7125) · [Before (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7125)

```diff
-             return this.Gt.flatMap((Sr => "trigger_pending" !== Sr.triggerStatusNoSideEffects(rr) ? [] : Sr.getPendingTriggerConditions(rr).map((rr => `trigger group "${Sr.group.name}": ${rr}`))))
+             return this.Gt.flatMap((Od => "trigger_pending" !== Od.triggerStatusNoSideEffects(dd) ? [] : Od.getPendingTriggerConditions(dd).map((dd => `trigger group "${Od.group.name}": ${dd}`))))
```

#### 105. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7280` → after: `L7280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7280) · [Before (L7280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7280)

```diff
-           Wr = 0 > Zr ? Qr : Qr.slice(Zr + 1);
+           Fd = 0 > Wd ? md : md.slice(Wd + 1);
```

#### 106. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7282` → after: `L7282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7282) · [Before (L7282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7282)

```diff
-           return Sr(Wr) ? Wr : void 0
+           return Od(Fd) ? Fd : void 0
```

#### 107. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7306` → after: `L7306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7306) · [Before (L7306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7306)

```diff
-           return Wr.length ? Wr : void 0
+           return Fd.length ? Fd : void 0
```

#### 108. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7318` → after: `L7318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7318) · [Before (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7318)

```diff
-               Qr = "string" == typeof rr ? [rr] : fW(rr) ? rr : [],
+               md = "string" == typeof dd ? [dd] : tF(dd) ? dd : [],
```

#### 109. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7330` → after: `L7330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7330) · [Before (L7330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7330)

```diff
-           const Zr = "@type" === Er ? ar.length ? "string" == typeof Wr ? ar[0] : ar : void 0 : "@id" === Er ? iI(GI(rr, Er), Sr) : VI(GI(rr, Er), Qr.maskUrl);
+           const Wd = "@type" === vd ? Rd.length ? "string" == typeof Fd ? Rd[0] : Rd : void 0 : "@id" === vd ? eK(zK(dd, vd), Od) : DK(zK(dd, vd), md.maskUrl);
```

#### 110. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7348` → after: `L7348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7348) · [Before (L7348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7348)

```diff
-         return xW(fr) || cI(Ir, "@graph", fr), Object.keys(Ir).length ? Ir : null
+         return qF(hd) || lK(Kd, "@graph", hd), Object.keys(Kd).length ? Kd : null
```

#### 111. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7534` → after: `L7534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7534) · [Before (L7534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7534)

```diff
-         return fW(rr) && 0 === rr.length ? (Ef = null !== (Sr = Ef) && void 0 !== Sr ? Sr : jf([]), Ef) : jf(rr)
+         return tF(dd) && 0 === dd.length ? (oh = null !== (Od = oh) && void 0 !== Od ? Od : vh([]), oh) : vh(dd)
```

#### 112. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7544` → after: `L7544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7544) · [Before (L7544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7544)

```diff
-           return fW(rr) && 0 === rr.length ? Ef || (pf = null !== (Sr = pf) && void 0 !== Sr ? Sr : If([]).then((rr => (Ef = rr, rr))).catch((rr => {
+           return tF(dd) && 0 === dd.length ? oh || (Nh = null !== (Od = Nh) && void 0 !== Od ? Od : Qh([]).then((dd => (oh = dd, dd))).catch((dd => {
```

#### 113. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7665` → after: `L7665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7665) · [Before (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7665)

```diff
-           return tW(Sr) ? Sr : null
+           return TF(Od) ? Od : null
```

#### 114. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7669` → after: `L7669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7669) · [Before (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7669)

```diff
-           return null !== (rr = null === (Sr = this.re) || void 0 === Sr ? void 0 : Sr.getMinimumDuration(this.sessionId)) && void 0 !== rr ? rr : null
+           return null !== (dd = null === (Od = this.re) || void 0 === Od ? void 0 : Od.getMinimumDuration(this.sessionId)) && void 0 !== dd ? dd : null
```

#### 115. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7712` → after: `L7712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7712) · [Before (L7712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7712)

```diff
-             return tW(Qr) && tW(Zr) ? Zr - Qr : null
+             return TF(md) && TF(Wd) ? Wd - md : null
```

#### 116. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7757-L7760` → after: `L7757-L7760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7757-L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7757-L7760) · [Before (L7757-L7760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7757-L7760)

```diff
-             xr = null !== (ar = null == pr ? void 0 : pr.maskAllInputs) && void 0 !== ar ? ar : null == Er ? void 0 : Er.maskAllInputs,
-             mr = null !== (jr = null == pr ? void 0 : pr.maskTextSelector) && void 0 !== jr ? jr : null == Er ? void 0 : Er.maskTextSelector,
-             Nr = null !== (Ir = null == pr ? void 0 : pr.blockSelector) && void 0 !== Ir ? Ir : null == Er ? void 0 : Er.blockSelector,
-             Ur = null !== (fr = null == pr ? void 0 : pr.maskAllElementAttributes) && void 0 !== fr ? fr : null == Er ? void 0 : Er.maskAllElementAttributes;
+             td = null !== (Rd = null == Qd ? void 0 : Qd.maskAllInputs) && void 0 !== Rd ? Rd : null == vd ? void 0 : vd.maskAllInputs,
+             od = null !== (Xd = null == Qd ? void 0 : Qd.maskTextSelector) && void 0 !== Xd ? Xd : null == vd ? void 0 : vd.maskTextSelector,
+             Nd = null !== (Kd = null == Qd ? void 0 : Qd.blockSelector) && void 0 !== Kd ? Kd : null == vd ? void 0 : vd.blockSelector,
+             qd = null !== (hd = null == Qd ? void 0 : Qd.maskAllElementAttributes) && void 0 !== hd ? hd : null == vd ? void 0 : vd.maskAllElementAttributes;
```

#### 117. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7797-L7799` → after: `L7797-L7799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7797-L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7797-L7799) · [Before (L7797-L7799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7797-L7799)

```diff
-             Er = null !== (Sr = null !== (Qr = null == Ir ? void 0 : Ir.recordCanvas) && void 0 !== Qr ? Qr : null == fr ? void 0 : fr.enabled) && void 0 !== Sr && Sr,
-             pr = null !== (Zr = null !== (Wr = null == Ir ? void 0 : Ir.canvasFps) && void 0 !== Wr ? Wr : null == fr ? void 0 : fr.fps) && void 0 !== Zr ? Zr : 4;
-           let xr = null !== (ar = null !== (jr = null == Ir ? void 0 : Ir.canvasQuality) && void 0 !== jr ? jr : null == fr ? void 0 : fr.quality) && void 0 !== ar ? ar : .4;
+             vd = null !== (Od = null !== (md = null == Kd ? void 0 : Kd.recordCanvas) && void 0 !== md ? md : null == hd ? void 0 : hd.enabled) && void 0 !== Od && Od,
+             Qd = null !== (Wd = null !== (Fd = null == Kd ? void 0 : Kd.canvasFps) && void 0 !== Fd ? Fd : null == hd ? void 0 : hd.fps) && void 0 !== Wd ? Wd : 4;
+           let td = null !== (Rd = null !== (Xd = null == Kd ? void 0 : Kd.canvasQuality) && void 0 !== Xd ? Xd : null == hd ? void 0 : hd.quality) && void 0 !== Rd ? Rd : .4;
```

#### 118. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7814` → after: `L7814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7814) · [Before (L7814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7814)

```diff
-           return null != Qr ? Qr : Sr
+           return null != md ? md : Od
```

#### 119. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7827` → after: `L7827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7827) · [Before (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7827)

```diff
-             Er = !!(hW(Ir) ? Ir : fr);
+             vd = !!(pF(Kd) ? Kd : hd);
```

#### 120. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7840` → after: `L7840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7840) · [Before (L7840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7840)

```diff
-           if (this.Wx && EW(ar))
+           if (this.Ot && oF(Rd))
```

#### 121. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7873` → after: `L7873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7873) · [Before (L7873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7873)

```diff
-                   return !Qr && Sr.isInitial ? Qr : Zr(Zr({}, Sr), {}, {
+                   return !md && Od.isInitial ? md : Wd(Wd({}, Od), {}, {
```

#### 122. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7891` → after: `L7891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7891) · [Before (L7891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7891)

```diff
-                   return UW(jr) && ar ? (Ia.add(ar), ar) : null != jr ? jr : void 0
+                   return bF(Xd) && Rd ? (QR.add(Rd), Rd) : null != Xd ? Xd : void 0
```

#### 123. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7901` → after: `L7901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7901) · [Before (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7901)

```diff
-               })(this._instance.config, this.Wx, rr)), {}, {
+               })(this._instance.config, this.Ot, dd)), {}, {
```

#### 124. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L7937` → after: `L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7937) · [Before (L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L7937)

```diff
-             return null !== (Qr = null == Zr ? void 0 : Zr.name) && void 0 !== Qr ? Qr : null == Zr ? void 0 : Zr.url
+             return null !== (md = null == Wd ? void 0 : Wd.name) && void 0 !== md ? md : null == Wd ? void 0 : Wd.url
```

#### 125. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8007` → after: `L8007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8007) · [Before (L8007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8007)

```diff
-             return tW(rr) && Number.isFinite(rr) && rr >= 1e3 && 36e5 >= rr ? rr : 6e4
+             return TF(dd) && Number.isFinite(dd) && dd >= 1e3 && 36e5 >= dd ? dd : 6e4
```

#### 126. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8009` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8009) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8009)

```diff
-           return null !== (Sr = null === (Qr = this._instance.config.session_recording) || void 0 === Qr ? void 0 : Qr.full_snapshot_interval_millis) && void 0 !== Sr ? Sr : 3e5
+           return null !== (Od = null === (md = this._instance.config.session_recording) || void 0 === md ? void 0 : md.full_snapshot_interval_millis) && void 0 !== Od ? Od : 3e5
```

#### 127. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8039` → after: `L8039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8039) · [Before (L8039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8039)

```diff
-               const Qr = "url" === rr ? Va : ia;
+               const md = "url" === dd ? DR : eR;
```

#### 128. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8058` → after: `L8058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8058) · [Before (L8058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8058)

```diff
-             Sr = pW(rr) ? rr : JSON.parse(rr)
+             Od = NF(dd) ? dd : JSON.parse(dd)
```

#### 129. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8064` → after: `L8064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8064) · [Before (L8064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8064)

```diff
-             const Zr = null !== (Qr = Sr.cache_timestamp) && void 0 !== Qr ? Qr : Date.now();
+             const Wd = null !== (md = Od.cache_timestamp) && void 0 !== md ? md : Date.now();
```

#### 130. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8186-L8187` → after: `L8186-L8187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8186-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8186-L8187) · [Before (L8186-L8187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8186-L8187)

```diff
-           const Qr = `${this.sessionId}:${rr}`;
-           Qr !== this.Vn && (this.Vn = Qr, rf.info(`holding buffer: ${rr}. nothing is uploaded until the user interacts with the page`))
+           const md = `${this.sessionId}:${dd}`;
+           md !== this.Vn && (this.Vn = md, Wh.info(`holding buffer: ${dd}. nothing is uploaded until the user interacts with the page`))
```

#### 131. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8342-L8343` → after: `L8342-L8343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8342-L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8342-L8343) · [Before (L8342-L8343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8342-L8343)

```diff
-           const nr = null !== (Zr = null !== (Wr = null !== (ar = null == hr ? void 0 : hr.currentSessionId) && void 0 !== ar ? ar : null == zr ? void 0 : zr.nextSessionId) && void 0 !== Wr ? Wr : null == Yr ? void 0 : Yr.sessionId) && void 0 !== Zr ? Zr : this.Xt,
-             er = null !== (jr = null !== (Ir = null !== (fr = null == hr ? void 0 : hr.currentWindowId) && void 0 !== fr ? fr : null == zr ? void 0 : zr.nextWindowId) && void 0 !== Ir ? Ir : null == Yr ? void 0 : Yr.windowId) && void 0 !== jr ? jr : this.je;
+           const pd = null !== (Wd = null !== (Fd = null !== (Rd = null == yd ? void 0 : yd.currentSessionId) && void 0 !== Rd ? Rd : null == bd ? void 0 : bd.nextSessionId) && void 0 !== Fd ? Fd : null == Td ? void 0 : Td.sessionId) && void 0 !== Wd ? Wd : this.Xt,
+             Yd = null !== (Xd = null !== (Kd = null !== (hd = null == yd ? void 0 : yd.currentWindowId) && void 0 !== hd ? hd : null == bd ? void 0 : bd.nextWindowId) && void 0 !== Kd ? Kd : null == Td ? void 0 : Td.windowId) && void 0 !== Xd ? Xd : this.je;
```

#### 132. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8436` → after: `L8436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8436) · [Before (L8436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8436)

```diff
-           return null !== (rr = null === (Sr = this.re) || void 0 === Sr ? void 0 : Sr.getPendingTriggerConditions(this.sessionId)) && void 0 !== rr ? rr : []
+           return null !== (dd = null === (Od = this.re) || void 0 === Od ? void 0 : Od.getPendingTriggerConditions(this.sessionId)) && void 0 !== dd ? dd : []
```

#### 133. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8447` → after: `L8447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8447) · [Before (L8447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8447)

```diff
-             Zr = `${this.sessionId}:${Qr}`;
+             Wd = `${this.sessionId}:${md}`;
```

#### 134. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8450` → after: `L8450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8450) · [Before (L8450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8450)

```diff
-           }), rf.info(`buffering: ${Qr}`))
+           }), Wh.info(`buffering: ${md}`))
```

#### 135. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8649` → after: `L8649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8649) · [Before (L8649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8649)

```diff
-             const rr = null != xr ? xr : {},
+             const dd = null != td ? td : {},
```

#### 136. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8671` → after: `L8671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8671) · [Before (L8671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8671)

```diff
-                 return null !== (Zr = Qr(rr)) && void 0 !== Zr ? Zr : null
+                 return null !== (Wd = md(dd)) && void 0 !== Wd ? Wd : null
```

#### 137. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8676` → after: `L8676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8676) · [Before (L8676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8676)

```diff
-           }), this.ln && (Sr.maskAllInputs = null === (Wr = this.ln.maskAllInputs) || void 0 === Wr || Wr, Sr.maskTextSelector = null !== (ar = this.ln.maskTextSelector) && void 0 !== ar ? ar : void 0, Sr.blockSelector = null !== (jr = this.ln.blockSelector) && void 0 !== jr ? jr … [truncated]
+           }), this.ln && (Od.maskAllInputs = null === (Fd = this.ln.maskAllInputs) || void 0 === Fd || Fd, Od.maskTextSelector = null !== (Rd = this.ln.maskTextSelector) && void 0 !== Rd ? Rd : void 0, Od.blockSelector = null !== (Xd = this.ln.blockSelector) && void 0 !== Xd ? Xd … [truncated]
```

#### 138. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8679` → after: `L8679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8679) · [Before (L8679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8679)

```diff
-           this.Bn = null !== (rr = this.Bn) && void 0 !== rr ? rr : new pI(fr, {
+           this.Bn = null !== (dd = this.Bn) && void 0 !== dd ? dd : new NK(hd, {
```

#### 139. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8683` → after: `L8683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8683) · [Before (L8683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8683)

```diff
-               const Qr = `Too many mutations on node '${rr}'. Rate limiting. This could be due to SVG animations or something similar`;
+               const md = `Too many mutations on node '${dd}'. Rate limiting. This could be due to SVG animations or something similar`;
```

#### 140. `bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js` (Changed code · before: `L8713` → after: `L8713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35dbR8713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-d1f0914d0872bcb7e68813838f00775b53538e74acf6538cc4e94ac125ba35db) · [After (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8713) · [Before (L8713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayPostHogRecorder.js#L8713)

```diff
-                 return Sr.maskAllElementAttributes || Sr.maskAttributeFn || (null == Qr ? void 0 : Qr.length) && !Qr.includes("id") ? PI : Qr => {
+                 return Od.maskAllElementAttributes || Od.maskAttributeFn || (null == md ? void 0 : md.length) && !md.includes("id") ? iK : md => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (fl4vv.bd3c59ce → yteou.5361c997)

- **File**: `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (159 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af)

#### 1. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L4)

```diff
-   41361: (rr, Sr, Qr) => {
+   41357: (dd, Od, md) => {
```

#### 2. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L20-L21` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L20-L21) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L20-L21)

```diff
-     var Ir = Qr(41364).c,
-       fr = Qr(41369).b,
+     var Kd = md(41365).c,
+       hd = md(41368).e,
```

#### 3. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L39)

```diff
-   41369: (rr, Sr) => {
+   41368: (dd, Od) => {
```

#### 4. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L125)

```diff
-     }, Sr.b = pr
+     }, Od.e = Qd
```

#### 5. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L127)

```diff
-   41364: (rr, Sr) => {
+   41365: (dd, Od) => {
```

#### 6. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L177)

```diff
-   41346: (rr, Sr, Qr) => {
+   41352: (dd, Od, md) => {
```

#### 7. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L210-L211` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L210-L211) · [Before (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L210-L211)

```diff
-     var jr = Qr(3868),
-       Ir = Qr(34);
+     var Xd = md(3860),
+       Kd = md(32);
```

#### 8. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L214)

```diff
-     var pr = Qr(4635);
+     var Qd = md(4615);
```

#### 9. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L216` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L216) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L216)

```diff
-       mr = pr.g,
+       od = Qd.f,
```

#### 10. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L234` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L234) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L234)

```diff
-       return rr.type === pr.d.IncrementalSnapshot ? null === (Sr = rr.data) || void 0 === Sr ? void 0 : Sr.source : void 0
+       return dd.type === Qd.b.IncrementalSnapshot ? null === (Od = dd.data) || void 0 === Od ? void 0 : Od.source : void 0
```

#### 11. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L248)

```diff
-           return Ur.includes(zr(rr)) || rr.type === pr.d.Custom && (null === (Sr = rr.data) || void 0 === Sr ? void 0 : Sr.tag) === pr.l.active
+           return qd.includes(bd(dd)) || dd.type === Qd.b.Custom && (null === (Od = dd.data) || void 0 === Od ? void 0 : Od.tag) === Qd.j.active
```

#### 12. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L253` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L253) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L253)

```diff
-           if (rr.type === pr.d.Custom && "$json_ld" === (null === Qr || void 0 === Qr ? void 0 : Qr.tag)) return;
+           if (dd.type === Qd.b.Custom && "$json_ld" === (null === md || void 0 === md ? void 0 : md.tag)) return;
```

#### 13. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L260` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L260) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L260)

```diff
-         if (rr.type === pr.d.Plugin && "rrweb/console@1" === (null === Zr || void 0 === Zr ? void 0 : Zr.plugin)) {
+         if (dd.type === Qd.b.Plugin && "rrweb/console@1" === (null === Wd || void 0 === Wd ? void 0 : Wd.plugin)) {
```

#### 14. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L298)

```diff
-           if (Wr = Sr ? rr : Wr, Ir) null !== (ar = Zr) && void 0 !== ar && ar.isActive && (Qr += Math.max(1, Zr.end - Zr.start)), Zr = {
+           if (Fd = Od ? dd : Fd, Kd) null !== (Rd = Wd) && void 0 !== Rd && Rd.isActive && (md += Math.max(1, Wd.end - Wd.start)), Wd = {
```

#### 15. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L326)

```diff
-         !this.nx && this.chars + Wr > this.chunkChars && Zr.push(this.finish());
+         !this.Nt && this.chars + Fd > this.chunkChars && Wd.push(this.finish());
```

#### 16. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L330)

```diff
-           !this.nx && this.chars + Wr.length > this.chunkChars && (Zr.push(this.finish()), ar = !1), ar || (this.counter.addMessage(), ar = !0), this.counter.addEvent(rr), this.lines.push(Wr), this.chars += Wr.length, this.startMs = Math.min(this.startMs, rr.timestamp), this.endM … [truncated]
+           !this.Nt && this.chars + Fd.length > this.chunkChars && (Wd.push(this.finish()), Rd = !1), Rd || (this.counter.addMessage(), Rd = !0), this.counter.addEvent(dd), this.lines.push(Fd), this.chars += Fd.length, this.startMs = Math.min(this.startMs, dd.timestamp), this.endM … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L334)

```diff
-         if (this.nx) return null;
+         if (this.Nt) return null;
```

#### 18. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L406)

```diff
-       return jr.byteLength > fr || Ir > Er ? (console.warn(`Session replay: dropped a ${Ir}-byte page recording chunk, over the size limits`), null) : {
+       return Xd.byteLength > hd || Kd > vd ? (console.warn(`Session replay: dropped a ${Kd}-byte page recording chunk, over the size limits`), null) : {
```

#### 19. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L414` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L414) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L414)

```diff
-     var Tr = Qr(41355);
+     var Jd = md(41354);
```

#### 20. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L422)

```diff
-         null === Sr || null !== this.tailTimer || this.writer.nx || (this.tailTimer = setTimeout((() => {
+         null === Od || null !== this.tailTimer || this.writer.Nt || (this.tailTimer = setTimeout((() => {
```

#### 21. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L439` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L439) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L439)

```diff
-         if (!this.tickedSinceVideoCut || this.writer.nx) return;
+         if (!this.tickedSinceVideoCut || this.writer.Nt) return;
```

#### 22. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L458` → after: `L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L458) · [Before (L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L458)

```diff
-               return Sr.length <= Er || (console.warn(`Session replay: dropped a page recording chunk of ${Sr.length} characters, over the size limits`), !1)
+               return Od.length <= vd || (console.warn(`Session replay: dropped a page recording chunk of ${Od.length} characters, over the size limits`), !1)
```

#### 23. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L492` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L492) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L492)

```diff
-           rr.packed ??= (0, Tr.b)(rr.text.text)
+           dd.packed ??= (0, Jd.c)(dd.text.text)
```

#### 24. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L541-L547` → after: `L541-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L541-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L541-L547) · [Before (L541-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L541-L547)

```diff
-     var Or = Qr(41371);
-     var Lr = Qr(41379),
-       lr = Qr(4091),
-       Xr = Qr(109),
-       Pr = Qr(120),
-       Hr = Qr(43),
-       qr = Qr(5448);
+     var xd = md(41370);
+     var Bd = md(41372),
+       Sd = md(4087),
+       sd = md(107),
+       ud = md(118),
+       Vd = md(46),
+       Ad = md(5359);
```

#### 25. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L553-L554` → after: `L553-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L553-L554) · [Before (L553-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L553-L554)

```diff
-       const Sr = Hr.j.getItem(rr);
-       return "number" === typeof Sr && Number.isFinite(Sr) ? Sr : null
+       const Od = Vd.k.getItem(dd);
+       return "number" === typeof Od && Number.isFinite(Od) ? Od : null
```

#### 26. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L558` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L558) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L558)

```diff
-       const Wr = Hr.j.getItem(rr);
+       const Fd = Vd.k.getItem(dd);
```

#### 27. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L563` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L563) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L563)

```diff
-       const Sr = Hr.j.getItem("replayGrab");
+       const Od = Vd.k.getItem("replayGrab");
```

#### 28. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L568` → after: `L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L568) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L568)

```diff
-     var Ar = Qr(1267),
+     var cd = md(1268),
```

#### 29. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L570-L571` → after: `L570-L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L570-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L570-L571) · [Before (L570-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L570-L571)

```diff
-       ir = Qr(41392),
-       wr = Qr(41398);
+       Dd = md(41390),
+       ed = md(41397);
```

#### 30. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L574` → after: `L574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L574) · [Before (L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L574)

```diff
-       return `replayJoiner/${rr}`
+       return `replayJoiner/${dd}`
```

#### 31. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L578` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L578) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L578)

```diff
-         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Vr.g;
+         let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jd.c;
```

#### 32. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L582)

```diff
-         const Qr = (0, ir.e)(rr, Sr),
+         const md = (0, Dd.f)(dd, Od),
```

#### 33. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L589` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L589) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L589)

```diff
-         return this.post("/v1/finish", Sr, (0, Vr.i)(Sr), 3e4, rr.sequence)
+         return this.post("/v1/finish", Od, (0, jd.e)(Od), 3e4, dd.sequence)
```

#### 34. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L592)

```diff
-         return !this.keepalive.isInFlight(cr(rr.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${Gr}`, JSON.stringify(rr))
+         return !this.keepalive.isInFlight(Id(dd.sequence)) && this.keepalive.sendBeacon(`${this.baseUrl}${Pd}`, JSON.stringify(dd))
```

#### 35. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L595` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L595) · [Before (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L595)

```diff
-         const ar = `${this.baseUrl}${rr}`,
+         const Rd = `${this.baseUrl}${dd}`,
```

#### 36. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L602` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L602) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L602)

```diff
-             signal: (0, Ar.o)(Zr)
+             signal: (0, cd.s)(Wd)
```

#### 37. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L604-L605` → after: `L604-L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L604-L605) · [Before (L604-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L604-L605)

```diff
-           Ir = Qr <= Vr.d ? await this.keepalive.fetch(ar, jr, Qr, cr(Wr)) : await fetch(ar, jr);
-         if (!Ir.ok) throw new wr.d(`Part joiner ${rr} failed with ${Ir.status}`, Ir.status);
+           Kd = md <= jd.b ? await this.keepalive.fetch(Rd, Xd, md, Id(Fd)) : await fetch(Rd, Xd);
+         if (!Kd.ok) throw new ed.b(`Part joiner ${dd} failed with ${Kd.status}`, Kd.status);
```

#### 38. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L612` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L612) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L612)

```diff
-         releaseUrl: `${rr.url}${Gr}`,
+         releaseUrl: `${dd.url}${Pd}`,
```

#### 39. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L615` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L615) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L615)

```diff
-           url: `${rr.url}/v1/relay`,
+           url: `${dd.url}/v1/relay`,
```

#### 40. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L620-L621` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L620) · [Before (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L620-L621)

```diff
-     var br = Qr(7464),
-       Jr = Qr(41403),
+     var Zd = md(7458),
```

#### 41. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L623` → after: `L622-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L622-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L622-L623) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L623)

```diff
-       dr = Qr(41413);
+       fd = md(41407),
+       Md = md(41416);
```

#### 42. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L626` → after: `L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L626) · [Before (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L626)

```diff
-       return (0, Lr.b)().manifestUrl
+       return (0, Bd.c)().manifestUrl
```

#### 43. `bundles/bloxd.io/chunks/js/sessionReplayRecorder.js` (Changed code · before: `L641` → after: `L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32afR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4...build/bloxd.io/yteou.5361c997#diff-ca948d5c20446eee797f95d33ed48e58dd6aa6fd7109fede9638352e9b9f32af) · [After (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yteou.5361c997/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L641) · [Before (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/50c9ccd78e7f96bf5a9b90da6e5ee308fe7477e4/bundles/bloxd.io/chunks/js/sessionReplayRecorder.js#L641)

```diff
-         const Wr = Math.round((0, Jr.e)());
+         const Fd = Math.round((0, kd.b)());
```
