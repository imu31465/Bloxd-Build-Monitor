# Changed — Bundle Modifications Report (Part 121 / 132)

- **Updated at**: `2026-11-21T10:00 JST`
- **Part**: `121 / 132` (**409** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 120](part-120.md) · [Part 122 →](part-122.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderDebug.js` (halsg.2bd74967 → x17cru.159bd7ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/renderDebug.js` (121 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9)

#### 106. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1302-L1303` → after: `L1302-L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1302-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderDebug.js#L1302-L1303) · [Before (L1302-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderDebug.js#L1302-L1303)

```diff
-       const Ob = (0, Bb.b)(hb).then((() => !1));
-       return await (0, Bb.b)(ub), Promise.race([bb.then((() => !0)), Ob])
+       const Nd = (0, pd.e)(kd).then((() => !1));
+       return await (0, pd.e)(Jd), Promise.race([dd.then((() => !0)), Nd])
```

#### 107. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1315` → after: `L1315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderDebug.js#L1315) · [Before (L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderDebug.js#L1315)

```diff
-       (Uh = !0, Ib(`renderer caps ${null!==(bb=Gh.caps)&&void 0!==bb?bb:"(not noted)"}; terrain fetch ${null!==(ub=Gh.fetch)&&void 0!==ub?ub:"(not noted)"}`), Gh.adrenoProbe) && Ib(`adrenoProbe ${Gh.adrenoProbe} asked; in force (storage fetch only): ${null!==(hb=Gh.probe)&&void 0 … [truncated]
+       (Zk = !0, Td(`renderer caps ${null!==(dd=Pk.caps)&&void 0!==dd?dd:"(not noted)"}; terrain fetch ${null!==(Jd=Pk.fetch)&&void 0!==Jd?Jd:"(not noted)"}`), Pk.adrenoProbe) && Td(`adrenoProbe ${Pk.adrenoProbe} asked; in force (storage fetch only): ${null!==(kd=Pk.probe)&&void 0 … [truncated]
```

#### 108. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1324` → after: `L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderDebug.js#L1324) · [Before (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderDebug.js#L1324)

```diff
-             hb.push(`GL ${String(bb.getParameter(bb.VERSION))} | ${String(bb.getParameter(bb.SHADING_LANGUAGE_VERSION))} | ${String(bb.getParameter(bb.VENDOR))} / ${String(bb.getParameter(bb.RENDERER))}`), hb.push(`GL unmasked ${Ob} / ${Gb}`);
+             kd.push(`GL ${String(dd.getParameter(dd.VERSION))} | ${String(dd.getParameter(dd.SHADING_LANGUAGE_VERSION))} | ${String(dd.getParameter(dd.VENDOR))} / ${String(dd.getParameter(dd.RENDERER))}`), kd.push(`GL unmasked ${Nd} / ${Wd}`);
```

#### 109. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1334` → after: `L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderDebug.js#L1334) · [Before (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderDebug.js#L1334)

```diff
-             "MAX_UNIFORM_BLOCK_SIZE" in bb && Ub.push(["MAX_UNIFORM_BLOCK_SIZE", bb.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", bb.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", bb.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", bb.MAX_TRANSFORM_FEEDBACK_I … [truncated]
+             "MAX_UNIFORM_BLOCK_SIZE" in dd && Pd.push(["MAX_UNIFORM_BLOCK_SIZE", dd.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", dd.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", dd.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", dd.MAX_TRANSFORM_FEEDBACK_I … [truncated]
```

#### 110. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1338` → after: `L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderDebug.js#L1338) · [Before (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderDebug.js#L1338)

```diff
-               return `${hb} highp float ${Bb?`${Bb.rangeMin}/${Bb.rangeMax}/${Bb.precision}`:"?"} int ${Ob?`${Ob.rangeMin}/${Ob.rangeMax}/${Ob.precision}`:"?"}`
+               return `${kd} highp float ${pd?`${pd.rangeMin}/${pd.rangeMax}/${pd.precision}`:"?"} int ${Nd?`${Nd.rangeMin}/${Nd.rangeMax}/${Nd.precision}`:"?"}`
```

#### 111. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1340` → after: `L1340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderDebug.js#L1340) · [Before (L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderDebug.js#L1340)

```diff
-             hb.push(`GL precision ${Lb(bb.VERTEX_SHADER,"VS")}, ${Lb(bb.FRAGMENT_SHADER,"FS")}`);
+             kd.push(`GL precision ${Zd(dd.VERTEX_SHADER,"VS")}, ${Zd(dd.FRAGMENT_SHADER,"FS")}`);
```

#### 112. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1342` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderDebug.js#L1342) · [Before (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderDebug.js#L1342)

```diff
-             return hb.push(`GL context ${JSON.stringify(Yb)} drawingBuffer ${bb.drawingBufferWidth}x${bb.drawingBufferHeight}${"drawingBufferFormat"in bb?` format 0x${Number(bb.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in bb?` ${String(bb.drawingBufferColo … [truncated]
+             return kd.push(`GL context ${JSON.stringify(gd)} drawingBuffer ${dd.drawingBufferWidth}x${dd.drawingBufferHeight}${"drawingBufferFormat"in dd?` format 0x${Number(dd.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in dd?` ${String(dd.drawingBufferColo … [truncated]
```

#### 113. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1349` → after: `L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderDebug.js#L1349) · [Before (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderDebug.js#L1349)

```diff
-           Ib(`programs: ${ub} live of ${gb.length} linked, ${bb} packed terrain; CPU page copies ${Math.round(tb.shadowBytes/1048576)} MiB (${tb.uncopied} over budget)`)
+           Td(`programs: ${Jd} live of ${md.length} linked, ${dd} packed terrain; CPU page copies ${Math.round(jd.shadowBytes/1048576)} MiB (${jd.uncopied} over budget)`)
```

#### 114. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderDebug.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderDebug.js#L1362)

```diff
-                 qu = null, Ib(`WebGPU draw ranges (${bb}): ${ub.length} terrain draws recorded in a second (first ${Su}; bundles replay without new ones)`);
+                 cJ = null, Td(`WebGPU draw ranges (${dd}): ${Jd.length} terrain draws recorded in a second (first ${KJ}; bundles replay without new ones)`);
```

#### 115. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1368` → after: `L1368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderDebug.js#L1368) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderDebug.js#L1368)

```diff
-             if (await (0, vu.i)(Gh, "slotCheck", ["1"], uh, hh), "1" === Gh.slotCheck) return void Ib(`slot check: no answer in ${uh} ms (only the storage fetch has one; a later answer logs on its own)`);
+             if (await (0, SJ.l)(Pk, "slotCheck", ["1"], kk, pk), "1" === Pk.slotCheck) return void Td(`slot check: no answer in ${kk} ms (only the storage fetch has one; a later answer logs on its own)`);
```

#### 116. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1371` → after: `L1371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderDebug.js#L1371) · [Before (L1371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderDebug.js#L1371)

```diff
-         Ib(`check (${bb}) done: bloxdDebug.save() downloads it all`)
+         Td(`check (${dd}) done: bloxdDebug.save() downloads it all`)
```

#### 117. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1373` → after: `L1373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderDebug.js#L1373) · [Before (L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderDebug.js#L1373)

```diff
-         Ib(`check (${bb}) failed: ${String(ub)}`)
+         Td(`check (${dd}) failed: ${String(Jd)}`)
```

#### 118. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1417-L1418` → after: `L1417-L1418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1417-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderDebug.js#L1417-L1418) · [Before (L1417-L1418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderDebug.js#L1417-L1418)

```diff
-       const Ob = "webgpu" === Bh ? [`terrain ${bb(ub.draws)} draws ${bb(ub.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((bb => hb[bb].draws > 0)).map((ub => `${ub} ${bb(hb[ub].draws)} draws ${bb(hb[ub].faces)} faces a frame`));
-       Ib(`${Yh} frames: ${Ob.join(", ")||"no draws"}; uploaded ${Math.round(Bb.buffer/1024)} KiB to buffers, ${Math.round(Bb.texture/1024)} KiB to data textures`), Yh = 0
+       const Nd = "webgpu" === Nk ? [`terrain ${dd(Jd.draws)} draws ${dd(Jd.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((dd => kd[dd].draws > 0)).map((Jd => `${Jd} ${dd(kd[Jd].draws)} draws ${dd(kd[Jd].faces)} faces a frame`));
+       Td(`${Ck} frames: ${Nd.join(", ")||"no draws"}; uploaded ${Math.round(pd.buffer/1024)} KiB to buffers, ${Math.round(pd.texture/1024)} KiB to data textures`), Ck = 0
```

#### 119. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1421` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderDebug.js#L1421) · [Before (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderDebug.js#L1421)

```diff
-   4468: (bb, ub, hb) => {
+   4569: (dd, Jd, kd) => {
```

#### 120. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1424-L1425` → after: `L1424-L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1424-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderDebug.js#L1424-L1425) · [Before (L1424-L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderDebug.js#L1424-L1425)

```diff
-       const ub = bb.adapter ? `${bb.adapter.vendor}/${bb.adapter.architecture}` : "none";
-       return `backend ${bb.backend}: reason ${bb.reason}, source ${bb.source}, adapter ${ub}`
+       const Jd = dd.adapter ? `${dd.adapter.vendor}/${dd.adapter.architecture}` : "none";
+       return `backend ${dd.backend}: reason ${dd.reason}, source ${dd.source}, adapter ${Jd}`
```

#### 121. `bundles/bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L1428` → after: `L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9R1428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-1752eb69547c386d73867d9586ece83cec2a7e05ac95d2ad0bd3af9d535826f9) · [After (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderDebug.js#L1428) · [Before (L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderDebug.js#L1428)

```diff
-       e: () => Bb
+       b: () => pd
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderLite.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/renderLite.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070)

#### 1. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L4)

```diff
-   42709: (bb, ub, hb) => {
+   43231: (dd, Jd, kd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L8-L18` → after: `L8-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L8-L18) · [Before (L8-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L8-L18)

```diff
-     var Bb = hb(2683),
-       Ob = hb(599),
-       Gb = hb(113),
-       Ub = hb(4564),
-       Lb = hb(40171),
-       Yb = hb(4555),
-       Sb = hb(40212),
-       ab = hb(40049),
-       Hb = hb(40378),
-       wb = hb(2633),
-       Zb = hb(4270);
+     var pd = kd(2761),
+       Nd = kd(626),
+       Wd = kd(119),
+       Pd = kd(4688),
+       Zd = kd(40714),
+       gd = kd(4680),
+       Cd = kd(40771),
+       Kd = kd(40575),
+       od = kd(40952),
+       ld = kd(2704),
+       Qd = kd(4369);
```

#### 3. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L31-L32` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L31-L32) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L31-L32)

```diff
-             const [hb, Bb] = bb.split(":"), Ob = null !== (ub = Xb.get(hb.slice(-1))) && void 0 !== ub ? ub : "";
-             return `gl link failed: program row ${parseInt(hb)}${Ob}, read ${Bb} ms after issue`
+             const [kd, pd] = dd.split(":"), Nd = null !== (Jd = Ld.get(kd.slice(-1))) && void 0 !== Jd ? Jd : "";
+             return `gl link failed: program row ${parseInt(kd)}${Nd}, read ${pd} ms after issue`
```

#### 4. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L38-L41` → after: `L38-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L38-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L38-L41) · [Before (L38-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L38-L41)

```diff
-         return void 0 === bb || bb === this.summary || ub - this.summaryAtMs < hb ? null : (this.summary = bb, this.summaries++, this.summaryAtMs = ub, `gl links: ${bb}`)
-       }
-     }
-     var ob = hb(4468);
+         return void 0 === dd || dd === this.summary || Jd - this.summaryAtMs < kd ? null : (this.summary = dd, this.summaries++, this.summaryAtMs = Jd, `gl links: ${dd}`)
+       }
+     }
+     var ed = kd(4569);
```

#### 5. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L80)

```diff
-         return this.logged >= 20 || this.seen.has(bb) ? (this.unlogged++, null) : (this.seen.add(bb), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${bb}` : bb)
+         return this.logged >= 20 || this.seen.has(dd) ? (this.unlogged++, null) : (this.seen.add(dd), this.logged++, 20 === this.logged ? `(the last event line: later ones are counted in the summaries) ${dd}` : dd)
```

#### 6. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L89)

```diff
-       (0, wb.l)("renderlite", bb)
+       (0, ld.h)("renderlite", dd)
```

#### 7. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L95)

```diff
-         }, this.gH = () => {
+         }, this.Do = () => {
```

#### 8. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L98)

```diff
-             Ob = (0, ab.l)(),
+             Nd = (0, Kd.k)(),
```

#### 9. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L114)

```diff
-           const Zb = null !== (bb = null === (ub = (0, Sb.J)((0, Bb.B)())) || void 0 === ub ? void 0 : ub.YBb()) && void 0 !== bb ? bb : 0;
+           const Qd = null !== (dd = null === (Jd = (0, Cd.C)((0, pd.x)())) || void 0 === Jd ? void 0 : Jd.Ipd()) && void 0 !== dd ? dd : 0;
```

#### 10. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L117-L118` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L117-L118) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L117-L118)

```diff
-               Bb = [`${Math.round(hb)}s: ${bb.drawn} drawn (${(bb.drawn/hb).toFixed(1)}/s), ${bb.paced} paced, ${bb.frames-bb.drawn-bb.paced} skipped`, `gap max ${Math.round(bb.gapMaxMs)} ms, ${bb.longGaps} over 50 ms`, `render cpu ${bb.drawn?(bb.renderUs/bb.drawn/1e3).toFixed(2) … [truncated]
-             null !== ub.gpu && Bb.push(`gpu ${ub.gpu.timed?(ub.gpu.us/ub.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${ub.gpu.timed} timed`);
+               pd = [`${Math.round(kd)}s: ${dd.drawn} drawn (${(dd.drawn/kd).toFixed(1)}/s), ${dd.paced} paced, ${dd.frames-dd.drawn-dd.paced} skipped`, `gap max ${Math.round(dd.gapMaxMs)} ms, ${dd.longGaps} over 50 ms`, `render cpu ${dd.drawn?(dd.renderUs/dd.drawn/1e3).toFixed(2) … [truncated]
+             null !== Jd.gpu && pd.push(`gpu ${Jd.gpu.timed?(Jd.gpu.us/Jd.gpu.timed/1e3).toFixed(2):"-"} ms mean of ${Jd.gpu.timed} timed`);
```

#### 11. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L120-L122` → after: `L120-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L120-L122) · [Before (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L120-L122)

```diff
-             Bb.push(null === Ob ? "draws none yet" : `draws ${(0,Lb.b)(Ob)} (terrain ${Ob.terrainOpaque}+${Ob.terrainTransparent}, pack ${Ob.terrainPack}, meshes ${Ob.regular+Ob.thin+Ob.line+Ob.text}, sky ${Ob.earthSky+Ob.skyMeshes}, particles ${Ob.particles})`);
-             const Gb = null === ub.gpuBytesBefore ? "" : ` (${ub.gpuBytes>=ub.gpuBytesBefore?"+":"-"}${lb(Math.abs(ub.gpuBytes-ub.gpuBytesBefore))})`;
-             return Bb.push(`gpu mem ${lb(ub.gpuBytes)} MiB${Gb}`), Bb.push(`pending ${ub.pending}`, "terrain " + (ub.terrainDrawn ? "drawn" : "not drawn yet")), ub.eventsUnlogged > 0 && Bb.push(`${ub.eventsUnlogged} events unlogged`), Bb.join("; ")
+             pd.push(null === Nd ? "draws none yet" : `draws ${(0,Zd.d)(Nd)} (terrain ${Nd.terrainOpaque}+${Nd.terrainTransparent}, pack ${Nd.terrainPack}, meshes ${Nd.regular+Nd.thin+Nd.line+Nd.text}, sky ${Nd.earthSky+Nd.skyMeshes}, particles ${Nd.particles})`);
+             const Wd = null === Jd.gpuBytesBefore ? "" : ` (${Jd.gpuBytes>=Jd.gpuBytesBefore?"+":"-"}${Id(Math.abs(Jd.gpuBytes-Jd.gpuBytesBefore))})`;
+             return pd.push(`gpu mem ${Id(Jd.gpuBytes)} MiB${Wd}`), pd.push(`pending ${Jd.pending}`, "terrain " + (Jd.terrainDrawn ? "drawn" : "not drawn yet")), Jd.eventsUnlogged > 0 && pd.push(`${Jd.eventsUnlogged} events unlogged`), pd.join("; ")
```

#### 12. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L126` → after: `L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L126) · [Before (L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L126)

```diff
-             census: (0, Lb.d)(Ob.api),
+             census: (0, Zd.h)(Nd.api),
```

#### 13. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L130)

```diff
-             terrainDrawn: 0 !== (hb.headerWord(Ub.B.LoadSteps) & Ub.N.TerrainDrawn),
+             terrainDrawn: 0 !== (kd.headerWord(Pd.B.LoadSteps) & Pd.P.TerrainDrawn),
```

#### 14. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L133)

```diff
-         }, Wb(`${(0,ob.e)(bb)}; client ${Ob.f.client} (${Ob.f.reason})`), setInterval(this.gH, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
+         }, vd(`${(0,ed.b)(dd)}; client ${Nd.l.client} (${Nd.l.reason})`), setInterval(this.Do, 5e3), document.addEventListener("visibilitychange", this.visibilityChanged)
```

#### 15. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L145)

```diff
-           if (Bb >= Ub.f.RenderDeviceLost && Bb <= Ub.f.RenderSerialLinks) this.event(`render error ${(0,Yb.Md)(Bb)}${null!==(ub=null===(hb=(0,Hb.c)(Bb,Ob))||void 0===hb?void 0:hb.words)&&void 0!==ub?ub:""} (detail ${Ob})`)
+           if (pd >= Pd.d.RenderDeviceLost && pd <= Pd.d.RenderSerialLinks) this.event(`render error ${(0,gd.ie)(pd)}${null!==(Jd=null===(kd=(0,od.c)(pd,Nd))||void 0===kd?void 0:kd.words)&&void 0!==Jd?Jd:""} (detail ${Nd})`)
```

#### 16. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L149` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L149) · [Before (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L149)

```diff
-         this.event(`render reload: ${bb?"webgpu":"gl"} ${hb}, losses ${ub}${void 0===Bb?"":`: ${Bb}`}`)
+         this.event(`render reload: ${dd?"webgpu":"gl"} ${kd}, losses ${Jd}${void 0===pd?"":`: ${pd}`}`)
```

#### 17. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L157-L159` → after: `L157-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L157-L159) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L157-L159)

```diff
-         const Ob = null !== Bb && 0 !== Bb.lastError ? `, last error ${(0,Yb.Md)(Bb.lastError)} (detail ${Bb.lastErrorDetail})` : "",
-           Gb = hb instanceof Error ? `${hb.name}: ${hb.message}` : null === hb || void 0 === hb ? "" : String(hb);
-         this.event(`core stopped at ${ub}${Ob}${Gb&&`: ${Gb}`}`)
+         const Nd = null !== pd && 0 !== pd.lastError ? `, last error ${(0,gd.ie)(pd.lastError)} (detail ${pd.lastErrorDetail})` : "",
+           Wd = kd instanceof Error ? `${kd.name}: ${kd.message}` : null === kd || void 0 === kd ? "" : String(kd);
+         this.event(`core stopped at ${Jd}${Nd}${Wd&&`: ${Wd}`}`)
```

#### 18. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L179)

```diff
-         this.gridLogged || void 0 === ub || (this.gridLogged = !0, Wb(`gl1 grid ${ub}`))
+         this.gridLogged || void 0 === Jd || (this.gridLogged = !0, vd(`gl1 grid ${Jd}`))
```

#### 19. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L186-L188` → after: `L186-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L186-L188) · [Before (L186-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L186-L188)

```diff
-           Bb = (0, Gb.o)(),
-           Ob = void 0 === (null === hb || void 0 === hb ? void 0 : hb.parallelCompile) ? "" : `; parallel compile ${hb.parallelCompile}`;
-         Wb(`renderer gl ${Bb?`${Bb.vendor} / ${Bb.renderer}`:"(not read)"}; terrain fetch ${null!==(bb=null===hb||void 0===hb?void 0:hb.fetch)&&void 0!==bb?bb:"(not noted)"}${Ob}`), Wb(`renderer caps ${null!==(ub=null===hb||void 0===hb?void 0:hb.caps)&&void 0!==ub?ub:"(not noted) … [truncated]
+           pd = (0, Wd.q)(),
+           Nd = void 0 === (null === kd || void 0 === kd ? void 0 : kd.parallelCompile) ? "" : `; parallel compile ${kd.parallelCompile}`;
+         vd(`renderer gl ${pd?`${pd.vendor} / ${pd.renderer}`:"(not read)"}; terrain fetch ${null!==(dd=null===kd||void 0===kd?void 0:kd.fetch)&&void 0!==dd?dd:"(not noted)"}${Nd}`), vd(`renderer caps ${null!==(Jd=null===kd||void 0===kd?void 0:kd.caps)&&void 0!==Jd?Jd:"(not noted) … [truncated]
```

#### 20. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L194` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L194) · [Before (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L194)

```diff
-       return (0, Zb.e)(), db ??= new Cb(bb), db
+       return (0, Qd.h)(), qd ??= new xd(dd), qd
```

#### 21. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L197)

```diff
-   4468: (bb, ub, hb) => {
+   4569: (dd, Jd, kd) => {
```

#### 22. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L200-L201` → after: `L200-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L200-L201) · [Before (L200-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L200-L201)

```diff
-       const ub = bb.adapter ? `${bb.adapter.vendor}/${bb.adapter.architecture}` : "none";
-       return `backend ${bb.backend}: reason ${bb.reason}, source ${bb.source}, adapter ${ub}`
+       const Jd = dd.adapter ? `${dd.adapter.vendor}/${dd.adapter.architecture}` : "none";
+       return `backend ${dd.backend}: reason ${dd.reason}, source ${dd.source}, adapter ${Jd}`
```

#### 23. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L204)

```diff
-       e: () => Bb
+       b: () => pd
```

#### 24. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L207)

```diff
-   40171: (bb, ub, hb) => {
+   40714: (dd, Jd, kd) => {
```

#### 25. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L211` → after: `L210-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L210-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L210-L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L211)

```diff
-       f: () => Lb
+       h: () => Wd,
+       k: () => Zd
```

#### 26. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L213-L218` → after: `L213-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L213-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L213-L218) · [Before (L213-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L213-L218)

```diff
-     var Bb = hb(40035),
-       Ob = hb(40049);
- 
-     function Gb(bb) {
-       if (bb.queries.drawCensus() < Bb.vb.BYTES) return null;
-       const ub = bb.memoryData(bb.scratch(), Bb.vb.BYTES, 4, "the draw census");
+     var pd = kd(40569),
+       Nd = kd(40575);
+ 
+     function Wd(dd) {
+       if (dd.queries.drawCensus() < pd.Gb.BYTES) return null;
+       const Jd = dd.memoryData(dd.scratch(), pd.Gb.BYTES, 4, "the draw census");
```

#### 27. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L220-L231` → after: `L220-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L220-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L220-L231) · [Before (L220-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L220-L231)

```diff
-         terrainOpaque: Bb.vb.terrainOpaque(ub, 0),
-         terrainTransparent: Bb.vb.terrainTransparent(ub, 0),
-         terrainPack: Bb.vb.terrainPack(ub, 0),
-         earthSky: Bb.vb.earthSky(ub, 0),
-         skyMeshes: Bb.vb.skyMeshes(ub, 0),
-         regular: Bb.vb.regular(ub, 0),
-         thin: Bb.vb.thin(ub, 0),
-         line: Bb.vb.line(ub, 0),
-         text: Bb.vb.text(ub, 0),
-         particles: Bb.vb.particles(ub, 0),
-         terrainParts: Bb.vb.terrainParts(ub, 0),
-         terrainCompiling: Bb.vb.terrainCompiling(ub, 0)
+         terrainOpaque: pd.Gb.terrainOpaque(Jd, 0),
+         terrainTransparent: pd.Gb.terrainTransparent(Jd, 0),
+         terrainPack: pd.Gb.terrainPack(Jd, 0),
+         earthSky: pd.Gb.earthSky(Jd, 0),
+         skyMeshes: pd.Gb.skyMeshes(Jd, 0),
+         regular: pd.Gb.regular(Jd, 0),
+         thin: pd.Gb.thin(Jd, 0),
+         line: pd.Gb.line(Jd, 0),
+         text: pd.Gb.text(Jd, 0),
+         particles: pd.Gb.particles(Jd, 0),
+         terrainParts: pd.Gb.terrainParts(Jd, 0),
+         terrainCompiling: pd.Gb.terrainCompiling(Jd, 0)
```

#### 28. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L251` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L251) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L251)

```diff
-       const bb = (0, Ob.l)();
+       const dd = (0, Nd.k)();
```

#### 29. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L269` → after: `L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L269) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L269)

```diff
-           value: `${Ub(ub)}`
+           value: `${Pd(Jd)}`
```

#### 30. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L272` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L272) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L272)

```diff
-           value: `${hb} opaque / ${Bb} transparent (${Ob} shader pack)`
+           value: `${kd} opaque / ${pd} transparent (${Nd} shader pack)`
```

#### 31. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L275)

```diff
-           value: `${Sb} / ${ab}`
+           value: `${Cd} / ${Kd}`
```

#### 32. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L278)

```diff
-           value: `${wb} / ${Hb}`
+           value: `${ld} / ${od}`
```

#### 33. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderLite.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderLite.js#L281)

```diff
-           value: `${Lb+Yb} / ${Zb}`
+           value: `${Zd+gd} / ${Qd}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderProbe.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/renderProbe.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff)

#### 1. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderProbe.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderProbe.js#L4)

```diff
-   42715: (bb, ub, hb) => {
+   43238: (dd, Jd, kd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderProbe.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderProbe.js#L8-L11)

```diff
-     var Bb = hb(595),
-       Ob = hb(4149),
-       Gb = hb(2633),
-       Ub = hb(4270);
+     var pd = kd(614),
+       Nd = kd(4233),
+       Wd = kd(2704),
+       Pd = kd(4369);
```

#### 3. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderProbe.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderProbe.js#L24)

```diff
-       return `${bb}; ${hb?`os ${hb.os}, gpu ${null!==(Ob=hb.gpuFamily)&&void 0!==Ob?Ob:"unknown"} ${null!==(Gb=hb.gpuModel)&&void 0!==Gb?Gb:"unknown"}`:"device unknown"}, version ${Bb.b}; ${ub}`
+       return `${dd}; ${kd?`os ${kd.os}, gpu ${null!==(Nd=kd.gpuFamily)&&void 0!==Nd?Nd:"unknown"} ${null!==(Wd=kd.gpuModel)&&void 0!==Wd?Wd:"unknown"}`:"device unknown"}, version ${pd.c}; ${Jd}`
```

#### 4. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderProbe.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderProbe.js#L29)

```diff
-       const hb = null !== (ub = null === bb || void 0 === bb ? void 0 : bb.backend) && void 0 !== ub ? ub : "none";
+       const kd = null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.backend) && void 0 !== Jd ? Jd : "none";
```

#### 5. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderProbe.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderProbe.js#L31)

```diff
-         const bb = (0, Ub.e)();
+         const dd = (0, Pd.h)();
```

#### 6. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderProbe.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderProbe.js#L36)

```diff
-         return void(0, Gb.l)("renderprobe", `decode and particle probes not run: the renderer is ${hb}, and they read WebGL2's draws`)
+         return void(0, Wd.h)("renderprobe", `decode and particle probes not run: the renderer is ${kd}, and they read WebGL2's draws`)
```

#### 7. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderProbe.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderProbe.js#L38)

```diff
-       const Bb = (0, Ub.e)();
+       const pd = (0, Pd.h)();
```

#### 8. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L43-L44` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/renderProbe.js#L43-L44) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/renderProbe.js#L43-L44)

```diff
-         of Sb)(0, Ub.i)(Bb, Hb, ["1", "pending"], Yb, Lb).then((bb => {
-         void 0 !== bb && (0, Gb.l)("renderprobe", ab(wb, bb, (0, Ob.e)(!1)))
+         of Cd)(0, Pd.l)(pd, od, ["1", "pending"], gd, Zd).then((dd => {
+         void 0 !== dd && (0, Wd.h)("renderprobe", Kd(ld, dd, (0, Nd.b)(!1)))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9)

#### 1. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L4)

```diff
-   38255: (bb, ub, hb) => {
+   38780: (dd, Jd, kd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L9-L11)

```diff
-     var Bb = hb(580),
-       Ob = hb(4013),
-       Gb = hb(38264);
+     var pd = kd(605),
+       Nd = kd(4090),
+       Wd = kd(38785);
```

#### 3. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L14)

```diff
-       if (bb.metaInfo === Bb.b || "Iron Guardian" === bb.type || "Gold Guardian" === bb.type) return !0;
+       if (dd.metaInfo === pd.c || "Iron Guardian" === dd.type || "Gold Guardian" === dd.type) return !0;
```

#### 4. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L20)

```diff
-         const Bb = (0, Ob.g)(bb);
+         const pd = (0, Nd.h)(dd);
```

#### 5. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L24)

```diff
-     }(0, Gb.d)("skyblock", ((bb, ub) => {
+     }(0, Wd.i)("skyblock", ((dd, Jd) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/textureNameTable.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/textureNameTable.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310)

#### 1. `bundles/bloxd.io/chunks/js/textureNameTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/textureNameTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/textureNameTable.js#L4)

```diff
-   42764: (bb, ub, hb) => {
+   43282: (dd, Jd, kd) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/texturePackFeed.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/texturePackFeed.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879)

#### 1. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackFeed.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackFeed.js#L4)

```diff
-   42745: (bb, ub, hb) => {
+   43264: (dd, Jd, kd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackFeed.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackFeed.js#L8-L10)

```diff
-     var Bb = hb(1103),
-       Ob = hb(29),
-       Gb = hb(42735);
+     var pd = kd(1220),
+       Nd = kd(33),
+       Wd = kd(43253);
```

#### 3. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L13` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackFeed.js#L13) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackFeed.js#L13)

```diff
-       const hb = new Gb.c({
+       const kd = new Wd.e({
```

#### 4. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackFeed.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackFeed.js#L18)

```diff
-           const ub = await fetch(`${Bb.clientSideServerUrls.texturePackUrl}/${bb}.json`, {
+           const Jd = await fetch(`${pd.clientSideServerUrls.texturePackUrl}/${dd}.json`, {
```

#### 5. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackFeed.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackFeed.js#L21)

```diff
-           if (!ub.ok) throw new Error(`fetching texture pack ${bb} answered HTTP ${ub.status}`);
+           if (!Jd.ok) throw new Error(`fetching texture pack ${dd} answered HTTP ${Jd.status}`);
```

#### 6. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackFeed.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackFeed.js#L25)

```diff
-       return (0, Gb.g)(hb), hb
+       return (0, Wd.i)(kd), kd
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/texturePackStorage.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/texturePackStorage.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383)

#### 1. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L4)

```diff
-   9140: (bb, ub, hb) => {
+   9284: (dd, Jd, kd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L6-L7)

```diff
-       announceStoredTexturePack: () => Ob.b,
-       takeOneShotTexturePack: () => Bb.k
+       announceStoredTexturePack: () => Nd.c,
+       takeOneShotTexturePack: () => pd.g
```

#### 3. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L9-L10)

```diff
-     var Bb = hb(9145),
-       Ob = hb(9154)
+     var pd = kd(9291),
+       Nd = kd(9299)
```

#### 4. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L12)

```diff
-   9154: (bb, ub, hb) => {
+   9299: (dd, Jd, kd) => {
```

#### 5. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L14-L15` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L14-L15) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L14-L15)

```diff
-       b: () => Ob,
-       c: () => Gb
+       c: () => Nd,
+       g: () => Wd
```

#### 6. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L17)

```diff
-     var Bb = hb(3048);
+     var pd = kd(3112);
```

#### 7. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L23)

```diff
-         const ub = new BroadcastChannel(Bb.n);
+         const Jd = new BroadcastChannel(pd.h);
```

#### 8. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L35)

```diff
-       return "string" === typeof ub ? ub : null
+       return "string" === typeof Jd ? Jd : null
```

#### 9. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L38)

```diff
-   9145: (bb, ub, hb) => {
+   9291: (dd, Jd, kd) => {
```

#### 10. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L40-L42` → after: `L40-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L40-L42) · [Before (L40-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L40-L42)

```diff
-       d: () => Ub,
-       h: () => Ob,
-       k: () => Gb
+       c: () => Pd,
+       f: () => Nd,
+       g: () => Wd
```

#### 11. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L44)

```diff
-     var Bb = hb(3048);
+     var pd = kd(3112);
```

#### 12. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L47)

```diff
-       const Gb = Ub(await bb.getItem(Bb.f, ub));
+       const Wd = Pd(await dd.getItem(pd.e, Jd));
```

#### 13. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L49)

```diff
-       const Lb = await bb.getItem(Bb.j, ub);
+       const Zd = await dd.getItem(pd.g, Jd);
```

#### 14. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L51)

```diff
-         await Promise.all([bb.removeItem(Bb.f), bb.removeItem(Bb.j)])
+         await Promise.all([dd.removeItem(pd.e), dd.removeItem(pd.g)])
```

#### 15. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L54)

```diff
-         source: "string" === typeof Lb ? Lb : null
+         source: "string" === typeof Zd ? Zd : null
```

#### 16. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L59)

```diff
-       return (0, Bb.t)() ? Promise.resolve(null) : Ob(bb, !1, (bb => {
+       return (0, pd.m)() ? Promise.resolve(null) : Nd(dd, !1, (dd => {
```

#### 17. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/texturePackStorage.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/texturePackStorage.js#L61)

```diff
-       }), Bb.t)
+       }), pd.m)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (halsg.2bd74967 → x17cru.159bd7ce)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (946 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4)

```diff
-   38607: (bb, ub, hb) => {
+   39141: (dd, Jd, kd) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7)

```diff
-       e: () => Ob
+       d: () => Nd
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L9` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L9) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L9)

```diff
-     var Bb = hb(16);
+     var pd = kd(29);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L16)

```diff
-       "refetchCode" !== bb ? "Plugin|MobAiPlugin|ShowPetUi" !== bb ? Promise.all([hb.e(106), hb.e(107), hb.e(102), hb.e(104), hb.e(211)]).then((() => hb(41199))).then((hb => {
+       "refetchCode" !== dd ? "Plugin|MobAiPlugin|ShowPetUi" !== dd ? Promise.all([kd.e(106), kd.e(107), kd.e(102), kd.e(104), kd.e(211)]).then((() => kd(41700))).then((kd => {
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L22-L23` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L22-L23) · [Before (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L22-L23)

```diff
-         console.error(`Game message ${bb} failed`, ub)
-       })) : Bb.i.vp("showPetUi", ub) : Bb.i.vp("refetchCode")
+         console.error(`Game message ${dd} failed`, Jd)
+       })) : pd.j.nO("showPetUi", Jd) : pd.j.nO("refetchCode")
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L26` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L26) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L26)

```diff
-   42002: (bb, ub, hb) => {
+   42497: (dd, Jd, kd) => {
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L28` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L28)

```diff
-       e: () => Bb,
+       b: () => pd,
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L38)

```diff
-   40244: (bb, ub, hb) => {
+   40785: (dd, Jd, kd) => {
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L40)

```diff
-       d: () => Lb
+       c: () => Zd
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L54)

```diff
-   40238: (bb, ub, hb) => {
+   40781: (dd, Jd, kd) => {
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L56` → after: `L56-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L56-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L56-L57) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L56)

```diff
-       d: () => Bb,
+       c: () => pd,
+       g: () => Pd,
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L58` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L59) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L58)

```diff
-       i: () => Ob,
+       l: () => Wd,
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L60-L63` → after: `L61-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L61-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L61-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L60-L63)

```diff
-       p: () => ab,
-       t: () => Sb,
-       u: () => Yb,
-       y: () => Lb
+       n: () => Cd,
+       q: () => gd,
+       u: () => Zd
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L65-L66` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L65-L66) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L65-L66)

```diff
-     hb(3244);
-     hb(40244);
+     kd(3291);
+     kd(40785);
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L84)

```diff
-   8996: (bb, ub, hb) => {
+   9153: (dd, Jd, kd) => {
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L86-L87` → after: `L86-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L86-L87) · [Before (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L86-L87)

```diff
-       d: () => Lb,
-       g: () => Yb
+       b: () => Zd,
+       e: () => gd
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L89)

```diff
-     var Bb = hb(13);
+     var pd = kd(22);
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L105` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L105)

```diff
-       }()) && void 0 !== bb ? bb : Lb() ? 0 : Ob
+       }()) && void 0 !== dd ? dd : Zd() ? 0 : Nd
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L108)

```diff
-   41994: (bb, ub, hb) => {
+   42489: (dd, Jd, kd) => {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L110)

```diff
-       blockIdOf: () => eY.d,
+       blockIdOf: () => yg.c,
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L114)

```diff
-       drainTextRerasters: () => tL.d,
+       drainTextRerasters: () => fZ.c,
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L121-L122` → after: `L121-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L121-L122) · [Before (L121-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L121-L122)

```diff
-       loadTextIcons: () => tL.g,
-       rasterText: () => vL.e,
+       loadTextIcons: () => fZ.f,
+       rasterText: () => XZ.b,
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L124-L126` → after: `L124-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L124-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L124-L126) · [Before (L124-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L124-L126)

```diff
-       readDrawCensus: () => mY.d,
-       setTextHost: () => tL.o,
-       setTextLocalPlayer: () => tL.r,
+       readDrawCensus: () => cg.h,
+       setTextHost: () => fZ.k,
+       setTextLocalPlayer: () => fZ.o,
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L132` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L132) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L132)

```diff
-       warmText: () => vL.h,
+       warmText: () => XZ.d,
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L135-L152` → after: `L135-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L135-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L135-L152) · [Before (L135-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L135-L152)

```diff
-     hb(36123);
-     var Bb = hb(13),
-       Ob = hb(36459),
-       Gb = hb(38777),
-       Ub = hb(16),
-       Lb = hb(3174),
-       Yb = hb(36452),
-       Sb = hb(1184),
-       ab = hb(571),
-       Hb = hb(37840),
-       wb = hb(4555),
-       Zb = hb(40095),
-       Xb = hb(40035);
-     const pb = Xb.Eb / 4,
-       ob = Xb.m.PlaySound,
-       Ab = Xb.m.SoundReset,
- ... (2 more removed lines; see GitHub link above)
+     kd(36671);
+     var pd = kd(22),
+       Nd = kd(36991),
+       Wd = kd(39292),
+       Pd = kd(29),
+       Zd = kd(3240),
+       gd = kd(36987),
+       Cd = kd(1307),
+       Kd = kd(597),
+       od = kd(38401),
+       ld = kd(4680),
+       Qd = kd(40629),
+       Ld = kd(40569);
+     const Od = Ld.Lb / 4,
+       ed = Ld.o.PlaySound,
+       Rd = Ld.o.SoundReset,
+ ... (2 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L156)

```diff
-         this.core = bb, this.memory = ub, this.audio = hb, this.serverIds = new Int32Array(256).fill(Xb.ad), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
+         this.core = dd, this.memory = Jd, this.audio = kd, this.serverIds = new Int32Array(256).fill(Ld.gd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L161` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L161) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L161)

```diff
-         return this.scratchPtr < 0 && (this.scratchPtr = this.core.lOb(), this.ensureViews()), this.scratchPtr
+         return this.scratchPtr < 0 && (this.scratchPtr = this.core.YNd(), this.ensureViews()), this.scratchPtr
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L174)

```diff
-         return Xb.o.localId(this.apiView, 0)
+         return Ld.u.localId(this.apiView, 0)
```

#### 29. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L177)

```diff
-         return Xb.o.localDeaths(this.apiView, 0)
+         return Ld.u.localDeaths(this.apiView, 0)
```

#### 30. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L181-L185` → after: `L181-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L181-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L181-L185) · [Before (L181-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L181-L185)

```diff
-           ub = Xb.o.entRenderPtr(bb, 0),
-           hb = Xb.o.entVisPtr(bb, 0),
-           Bb = Xb.o.entCapacity(bb, 0);
-         if (ub !== this.renderPtr || hb !== this.visPtr || Bb !== this.LH || this.renderBuffer !== this.buffer) {
-           this.renderPtr = ub, this.visPtr = hb, this.LH = Bb, this.renderBuffer = this.buffer;
+           Jd = Ld.u.entRenderPtr(dd, 0),
+           kd = Ld.u.entVisPtr(dd, 0),
+           pd = Ld.u.entCapacity(dd, 0);
+         if (Jd !== this.renderPtr || kd !== this.visPtr || pd !== this.oo || this.renderBuffer !== this.buffer) {
+           this.renderPtr = Jd, this.visPtr = kd, this.oo = pd, this.renderBuffer = this.buffer;
```

#### 31. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L188)

```diff
-           this.renderCapacity = bb && Ob ? Bb : 0, this.render = bb && Ob ? bb : new Float32Array(0), this.vis = bb && Ob ? Ob : new Uint8Array(0)
+           this.renderCapacity = dd && Nd ? pd : 0, this.render = dd && Nd ? dd : new Float32Array(0), this.vis = dd && Nd ? Nd : new Uint8Array(0)
```

#### 32. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L200)

```diff
-           return (0, Zb.e)(this.memory().buffer, bb, ub, hb, Bb)
+           return (0, Qd.f)(this.memory().buffer, dd, Jd, kd, pd)
```

#### 33. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L206` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L206) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L206)

```diff
-         this.keepCorruption(new Zb.d(bb))
+         this.keepCorruption(new Qd.e(dd))
```

#### 34. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L209)

```diff
-         if (!(bb instanceof Zb.d)) throw bb;
+         if (!(dd instanceof Qd.e)) throw dd;
```

#### 35. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L228)

```diff
-           if (hb === Xb.m.EntitySpawned) {
+           if (kd === Ld.o.EntitySpawned) {
```

#### 36. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L230-L234` → after: `L230-L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L230-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L230-L234) · [Before (L230-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L230-L234)

```diff
-             if (Bb !== Xb.Kb.BYTES) throw nb(hb, Sb, Bb);
-             const bb = Xb.Kb.serverId(Gb, Ob);
-             this.spawned(bb, Xb.Kb.index(Gb, Ob), Xb.Kb.kind(Gb, Ob)), null === (Ub = ub.entityAdded) || void 0 === Ub || Ub.call(ub, bb)
-           } else if ((hb === Xb.m.ChunkSlot || hb === Xb.m.EntityInfoChanged) && !(0, Xb.ce)(hb, Gb, Ob, Bb, ub)) throw nb(hb, Sb, Bb);
-           Sb = Ob + (0, wb.Xd)(Bb)
+             if (pd !== Ld.Pb.BYTES) throw ad(kd, Cd, pd);
+             const dd = Ld.Pb.serverId(Wd, Nd);
+             this.spawned(dd, Ld.Pb.index(Wd, Nd), Ld.Pb.kind(Wd, Nd)), null === (Pd = Jd.entityAdded) || void 0 === Pd || Pd.call(Jd, dd)
+           } else if ((kd === Ld.o.ChunkSlot || kd === Ld.o.EntityInfoChanged) && !(0, Ld.xe)(kd, Wd, Nd, pd, Jd)) throw ad(kd, Cd, pd);
+           Cd = Nd + (0, ld.xe)(pd)
```

#### 37. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L240` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L240) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L240)

```diff
-           throw Yb instanceof Zb.d && (this.corruption ??= Yb), Yb
+           throw gd instanceof Qd.e && (this.corruption ??= gd), gd
```

#### 38. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L250-L251` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L250-L251) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L250-L251)

```diff
-           if ((65535 & bb) === Xb.m.EntityDespawned && bb >>> 16 === Xb.Kb.BYTES) {
-             const bb = Xb.Kb.serverId(hb, Gb);
+           if ((65535 & dd) === Ld.o.EntityDespawned && dd >>> 16 === Ld.Pb.BYTES) {
+             const dd = Ld.Pb.serverId(kd, Wd);
```

#### 39. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L253` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L253) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L253)

```diff
-             if (this.despawned(bb, Xb.Kb.index(hb, Gb))) null === (Bb = ub.entityRemoved) || void 0 === Bb || Bb.call(ub, bb)
+             if (this.despawned(dd, Ld.Pb.index(kd, Wd))) null === (pd = Jd.entityRemoved) || void 0 === pd || pd.call(Jd, dd)
```

#### 40. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L255)

```diff
-           Ob = Gb + (0, wb.Xd)(bb >>> 16)
+           Nd = Wd + (0, ld.xe)(dd >>> 16)
```

#### 41. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L274` → after: `L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L274) · [Before (L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L274)

```diff
-           else if (Bb === wb.V.LocalPlayerBound) {
+           else if (pd === ld.X.LocalPlayerBound) {
```

#### 42. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L276` → after: `L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L276) · [Before (L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L276)

```diff
-             if (rb !== wb.zb) throw nb(Bb, db, rb);
+             if (Bd !== ld.Eb) throw ad(pd, qd, Bd);
```

#### 43. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L278)

```diff
-           } else if (Bb === wb.V.LocalHurt) {
+           } else if (pd === ld.X.LocalHurt) {
```

#### 44. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L280)

```diff
-             if (rb !== wb.yb) throw nb(Bb, db, rb);
+             if (Bd !== ld.Ab) throw ad(pd, qd, Bd);
```

#### 45. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L282)

```diff
-           } else if (Bb === wb.V.AttackHit) {
+           } else if (pd === ld.X.AttackHit) {
```

#### 46. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L284` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L284) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L284)

```diff
-             if (rb !== wb.c) throw nb(Bb, db, rb);
+             if (Bd !== ld.b) throw ad(pd, qd, Bd);
```

#### 47. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L289-L290` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L289-L290) · [Before (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L289-L290)

```diff
-             null === (ab = ub.attackHit) || void 0 === ab || ab.call(ub, bb, hb, Ob, 0 !== (Gb & wb.k.Crit), 0 !== (Gb & wb.k.HitSelf))
-           } else if (Bb === wb.V.PhysicsType) {
+             null === (Kd = Jd.attackHit) || void 0 === Kd || Kd.call(Jd, dd, kd, Nd, 0 !== (Wd & ld.h.Crit), 0 !== (Wd & ld.h.HitSelf))
+           } else if (pd === ld.X.PhysicsType) {
```

#### 48. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L292` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L292) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L292)

```diff
-             if (rb !== wb.Ub) throw nb(Bb, db, rb);
+             if (Bd !== ld.cc) throw ad(pd, qd, Bd);
```

#### 49. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L294)

```diff
-           } else if (Bb === wb.V.VehicleEffect) {
+           } else if (pd === ld.X.VehicleEffect) {
```

#### 50. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L299)

```diff
-           } else if (Bb === wb.V.ZoomChanged) {
+           } else if (pd === ld.X.ZoomChanged) {
```

#### 51. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L301` → after: `L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L301) · [Before (L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L301)

```diff
-             if (rb !== wb.Ld) throw nb(Bb, db, rb);
+             if (Bd !== ld.ge) throw ad(pd, qd, Bd);
```

#### 52. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L303` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L303) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L303)

```diff
-           } else if (Bb === wb.V.ZoomDisabled) {
+           } else if (pd === ld.X.ZoomDisabled) {
```

#### 53. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L307` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L307) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L307)

```diff
-           } else if (Bb === wb.V.GameCamera) {
+           } else if (pd === ld.X.GameCamera) {
```

#### 54. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L310)

```diff
-           } else if (Bb === Xb.m.ChunkSlot || Bb === Xb.m.EntityInfoChanged);
+           } else if (pd === Ld.o.ChunkSlot || pd === Ld.o.EntityInfoChanged);
```

#### 55. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L318-L319` → after: `L318-L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L318-L319) · [Before (L318-L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L318-L319)

```diff
-           } else if (Bb >= Xb.rd && Bb <= Xb.sd && Bb !== wb.V.EnvLighting) {
-             if (!(0, Xb.ce)(Bb, Ub, Db, rb, ub)) throw nb(Bb, db, rb);
+           } else if (pd >= Ld.zd && pd <= Ld.Bd && pd !== ld.X.EnvLighting) {
+             if (!(0, Ld.xe)(pd, Pd, Md, Bd, Jd)) throw ad(pd, qd, Bd);
```

#### 56. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L326)

```diff
-           db = Db + (0, wb.Xd)(rb)
+           qd = Md + (0, ld.xe)(Bd)
```

#### 57. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L333)

```diff
-         const ub = Xb.o.audioViewPtr(this.apiView, 0),
+         const Jd = Ld.u.audioViewPtr(this.apiView, 0),
```

#### 58. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L336` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L336) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L336)

```diff
-         (null === (bb = Bb) || void 0 === bb ? void 0 : bb.buffer) === hb && Bb.byteOffset === ub || (Bb = (0, Zb.e)(hb, ub, Xb.s.BYTES, 8, "the audio view"), this.audioView = Bb), Bb && this.audio.applyListener(Bb)
+         (null === (dd = pd) || void 0 === dd ? void 0 : dd.buffer) === kd && pd.byteOffset === Jd || (pd = (0, Qd.f)(kd, Jd, Ld.y.BYTES, 8, "the audio view"), this.audioView = pd), pd && this.audio.applyListener(pd)
```

#### 59. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L339)

```diff
-         return this.indexById.get("number" === typeof bb ? bb : +bb)
+         return this.indexById.get("number" === typeof dd ? dd : +dd)
```

#### 60. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L342)

```diff
-         return bb !== Xb.ad && bb === Xb.o.localId(this.apiView, 0)
+         return dd !== Ld.gd && dd === Ld.u.localId(this.apiView, 0)
```

#### 61. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L346` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L346) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L346)

```diff
-         return this.readPosition("number" === typeof bb ? bb : +bb, ub) ? ub : null
+         return this.readPosition("number" === typeof dd ? dd : +dd, Jd) ? Jd : null
```

#### 62. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L351` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L351) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L351)

```diff
-           for (let bb = 0; bb < 3; bb++) ub[bb] = Xb.o.localPos(hb, 0, bb);
+           for (let dd = 0; dd < 3; dd++) Jd[dd] = Ld.u.localPos(kd, 0, dd);
```

#### 63. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L361` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L361) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L361)

```diff
-         for (let Gb = 0; Gb < 3; Gb++) ub[Gb] = this.render[Ob + Gb] + Xb.o.origin(hb, 0, Gb);
+         for (let Wd = 0; Wd < 3; Wd++) Jd[Wd] = this.render[Nd + Wd] + Ld.u.origin(kd, 0, Wd);
```

#### 64. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L372` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L372) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L372)

```diff
-         return 0 === hb ? null : 0 !== (hb & Xb.$d.Alive)
+         return 0 === kd ? null : 0 !== (kd & Ld.we.Alive)
```

#### 65. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L376)

```diff
-         return void 0 === ub ? this.isLocal("number" === typeof bb ? bb : +bb) ? "Player" : null : db(this.kinds[ub])
+         return void 0 === Jd ? this.isLocal("number" === typeof dd ? dd : +dd) ? "Player" : null : qd(this.kinds[Jd])
```

#### 66. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L379` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L379) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L379)

```diff
-         if (ub >= 1048576) throw new Zb.d(`entity ${bb} spawned at index ${ub}`);
+         if (Jd >= 1048576) throw new Qd.e(`entity ${dd} spawned at index ${Jd}`);
```

#### 67. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L384)

```diff
-         return this.indexById.get(bb) === ub && (this.indexById.delete(bb), hb = !0), ub < this.serverIds.length && this.serverIds[ub] === bb && (this.serverIds[ub] = Xb.ad, this.kinds[ub] = 0, this.idStr[ub] = null), hb
+         return this.indexById.get(dd) === Jd && (this.indexById.delete(dd), kd = !0), Jd < this.serverIds.length && this.serverIds[Jd] === dd && (this.serverIds[Jd] = Ld.gd, this.kinds[Jd] = 0, this.idStr[Jd] = null), kd
```

#### 68. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L391)

```diff
-         const Bb = new Int32Array(hb).fill(Xb.ad);
+         const pd = new Int32Array(kd).fill(Ld.gd);
```

#### 69. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L403` → after: `L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L403) · [Before (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L403)

```diff
-         this.buffer = bb, this.viewPtr < 0 && (this.viewPtr = this.core.KOb()), this.view = new DataView(bb, this.viewPtr, Xb.o.BYTES), this.rereadDirectory()
+         this.buffer = dd, this.viewPtr < 0 && (this.viewPtr = this.core.mNd()), this.view = new DataView(dd, this.viewPtr, Ld.u.BYTES), this.rereadDirectory()
```

#### 70. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L408` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L408) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L408)

```diff
-       return bb >>> Xb.c === Xb.n.Item
+       return dd >>> Ld.d === Ld.q.Item
```

#### 71. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L413-L419` → after: `L413-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L413-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L413-L419) · [Before (L413-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L413-L419)

```diff
-       const Bb = bb & Xb.d;
-       switch (bb >>> Xb.c) {
-         case Xb.n.Lifeform:
-           return null !== (ub = ab.i[Bb]) && void 0 !== ub ? ub : null;
-         case Xb.n.Throwable:
-           return null !== (hb = Hb.l[Bb]) && void 0 !== hb ? hb : null;
-         case Xb.n.Mesh:
+       const pd = dd & Ld.f;
+       switch (dd >>> Ld.d) {
+         case Ld.q.Lifeform:
+           return null !== (Jd = Kd.k[pd]) && void 0 !== Jd ? Jd : null;
+         case Ld.q.Throwable:
+           return null !== (kd = od.j[pd]) && void 0 !== kd ? kd : null;
+         case Ld.q.Mesh:
```

#### 72. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L421` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L421) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L421)

```diff
-         case Xb.n.Audio:
+         case Ld.q.Audio:
```

#### 73. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L423` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L423) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L423)

```diff
-         case Xb.n.Item:
+         case Ld.q.Item:
```

#### 74. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L432)

```diff
-       if (hb < wb.od.HEAD_BYTES) return null;
+       if (kd < ld.Ld.HEAD_BYTES) return null;
```

#### 75. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L436-L437` → after: `L436-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L436-L437) · [Before (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L436-L437)

```diff
-         Ub = wb.od.HEAD_BYTES + (0, wb.Xd)(Ob);
-       if (Bb !== wb.od.UPDATE && Bb !== wb.od.REMOVE || Ob > hb || Ub + Gb > hb) return null;
+         Pd = ld.Ld.HEAD_BYTES + (0, ld.xe)(Nd);
+       if (pd !== ld.Ld.UPDATE && pd !== ld.Ld.REMOVE || Nd > kd || Pd + Wd > kd) return null;
```

#### 76. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L444)

```diff
-         name: Lb(wb.od.HEAD_BYTES, Ob),
+         name: Zd(ld.Ld.HEAD_BYTES, Nd),
```

#### 77. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L450-L465` → after: `L450-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L450-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L450-L465) · [Before (L450-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L450-L465)

```diff
-       return new Zb.d(`event ${bb} at ${ub} of ${hb} bytes`)
-     }
-     var Db = hb(314),
-       xb = hb(1124),
-       zb = hb(38607),
-       gb = hb(1829),
-       ib = hb(40143),
-       vb = hb(1784),
-       tb = hb(38798),
-       Jb = hb(38825),
-       eb = hb(38810),
-       Nb = hb(40071),
-       sb = hb(2276),
-       Mb = hb(38791),
-       mb = hb(38816);
-     const Ib = Math.max(Xb.ub.BYTES, Xb.mb.BYTES, Xb.qb.BYTES);
+       return new Qd.e(`event ${dd} at ${Jd} of ${kd} bytes`)
+     }
+     var Md = kd(313),
+       Fd = kd(1245),
+       Yd = kd(39141),
+       md = kd(1950),
+       bd = kd(40687),
+       Sd = kd(1901),
+       jd = kd(39312),
+       Xd = kd(39335),
+       fd = kd(39319),
+       nd = kd(40610),
+       Ud = kd(2345),
+       yd = kd(39304),
+       Dd = kd(39328);
+     const Td = Math.max(Ld.Cb.BYTES, Ld.sb.BYTES, Ld.vb.BYTES);
```

#### 78. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L468` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L468) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L468)

```diff
-       if (!(0, mb.c)(bb)) return null;
+       if (!(0, Dd.e)(dd)) return null;
```

#### 79. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L470` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L470) · [Before (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L470)

```diff
-       return (0 | ub) === ub ? ub : null
+       return (0 | Jd) === Jd ? Jd : null
```

#### 80. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L474` → after: `L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L474) · [Before (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L474)

```diff
-         this.api = bb, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, Mb.g)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.Ub = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], thi … [truncated]
+         this.api = dd, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, yd.g)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.Pd = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], thi … [truncated]
```

#### 81. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L477-L479` → after: `L477-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L477-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L477-L479) · [Before (L477-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L477-L479)

```diff
-         this.defaultPoseRead = !1, this.Ub = null;
-         const bb = this.api.queries.directorView() >= Xb.ub.BYTES ? this.scratchView() : null;
-         null !== bb && (this.defaultFov = (0, vb.y)(Xb.ub.fov(bb, 0)), this.baseFov = (0, vb.y)(Xb.ub.baseFov(bb, 0)), this.aspect = Xb.ub.aspect(bb, 0), this.bodyHeading = Xb.ub.bodyHeading(bb, 0))
+         this.defaultPoseRead = !1, this.Pd = null;
+         const dd = this.api.queries.directorView() >= Ld.Cb.BYTES ? this.scratchView() : null;
+         null !== dd && (this.defaultFov = (0, Sd.H)(Ld.Cb.fov(dd, 0)), this.baseFov = (0, Sd.H)(Ld.Cb.baseFov(dd, 0)), this.aspect = Ld.Cb.aspect(dd, 0), this.bodyHeading = Ld.Cb.bodyHeading(dd, 0))
```

#### 82. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L488` → after: `L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L488) · [Before (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L488)

```diff
-         const bb = Xb.o.localId(this.api.apiView, 0);
+         const dd = Ld.u.localId(this.api.apiView, 0);
```

#### 83. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L500-L501` → after: `L500-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L500-L501) · [Before (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L500-L501)

```diff
-         const hb = Xb.o.localId(this.api.apiView, 0);
-         return ub === hb && hb !== Xb.ad ? this.viewHeading : this.readEntity(bb) ? this.entityHeading : null
+         const kd = Ld.u.localId(this.api.apiView, 0);
+         return Jd === kd && kd !== Ld.gd ? this.viewHeading : this.readEntity(dd) ? this.entityHeading : null
```

#### 84. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L505)

```diff
-         return Bb < hb - 1e-6 ? Bb : null
+         return pd < kd - 1e-6 ? pd : null
```

#### 85. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L512)

```diff
-         const ub = this.api.queries.directorDefaultPose() >= Xb.mb.BYTES ? this.scratchView() : null;
+         const Jd = this.api.queries.directorDefaultPose() >= Ld.sb.BYTES ? this.scratchView() : null;
```

#### 86. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L514-L515` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L514-L515) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L514-L515)

```diff
-         for (let hb = 0; hb < 3; hb++) bb.position[hb] = Xb.mb.eye(ub, 0, hb);
-         return bb.heading = Xb.mb.heading(ub, 0), bb.pitch = Xb.mb.pitch(ub, 0), bb
+         for (let kd = 0; kd < 3; kd++) dd.position[kd] = Ld.sb.eye(Jd, 0, kd);
+         return dd.heading = Ld.sb.heading(Jd, 0), dd.pitch = Ld.sb.pitch(Jd, 0), dd
```

#### 87. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L529-L531` → after: `L529-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L529-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L529-L531) · [Before (L529-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L529-L531)

```diff
-         if (ub === this.Ub) return this.entityLive;
-         this.Ub = ub;
-         const hb = this.api.queries.directorEntity(ub) >= Xb.qb.BYTES ? this.scratchView() : null;
+         if (Jd === this.Pd) return this.entityLive;
+         this.Pd = Jd;
+         const kd = this.api.queries.directorEntity(Jd) >= Ld.vb.BYTES ? this.scratchView() : null;
```

#### 88. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L533-L534` → after: `L533-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L533-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L533-L534) · [Before (L533-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L533-L534)

```diff
-         for (let Bb = 0; Bb < 3; Bb++) this.entityFeet[Bb] = Xb.qb.feet(hb, 0, Bb), this.entityAim[Bb] = this.entityFeet[Bb];
-         return this.entityAim[1] += Xb.qb.eyeHeight(hb, 0), this.entityHeading = Xb.qb.heading(hb, 0), !0
+         for (let pd = 0; pd < 3; pd++) this.entityFeet[pd] = Ld.vb.feet(kd, 0, pd), this.entityAim[pd] = this.entityFeet[pd];
+         return this.entityAim[1] += Ld.vb.eyeHeight(kd, 0), this.entityHeading = Ld.vb.heading(kd, 0), !0
```

#### 89. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L540` → after: `L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L540) · [Before (L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L540)

```diff
-         return null !== hb && hb.buffer === ub && hb.byteOffset === bb ? hb : (this.scratch = this.api.memoryData(bb, Ib, 8, "the director's record"), this.scratch)
+         return null !== kd && kd.buffer === Jd && kd.byteOffset === dd ? kd : (this.scratch = this.api.memoryData(dd, Td, 8, "the director's record"), this.scratch)
```

#### 90. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L556-L558` → after: `L556-L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L556-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L556-L558) · [Before (L556-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L556-L558)

```diff
-         this.options = bb, this.eH = void 0, this.director = void 0, this.latest = Eb, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
-           MJ: 0,
-           mJ: 0
+         this.options = dd, this.Vo = void 0, this.director = void 0, this.latest = hd, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
+           bY: 0,
+           fY: 0
```

#### 91. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L562` → after: `L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L562) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L562)

```diff
-         }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.nZ = new Int32Array(3 * Xb.Kd), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * Xb.Kd), this.eH = new qb(bb.api), this.direct … [truncated]
+         }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.pg = new Int32Array(3 * Ld.fe), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * Ld.fe), this.Vo = new cd(dd.api), this.direct … [truncated]
```

#### 92. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L567` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L567) · [Before (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L567)

```diff
-           ub = (0, Nb.e)(bb)
+           Jd = (0, nd.c)(dd)
```

#### 93. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L581-L582` → after: `L581-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L581-L582) · [Before (L581-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L581-L582)

```diff
-         const Hb = this.answeredPose && 0 === (Bb & Xb.sb.Held);
-         return this.answeredPose = Yb !== Xb.kb.None, this.holding = this.answeredPose && !Hb, null === (Ub = (Lb = this.options).showFacing) || void 0 === Ub || Ub.call(Lb, this.holding ? this.facing : null), Yb
+         const od = this.answeredPose && 0 === (pd & Ld.yb.Held);
+         return this.answeredPose = gd !== Ld.pb.None, this.holding = this.answeredPose && !od, null === (Pd = (Zd = this.options).showFacing) || void 0 === Pd || Pd.call(Zd, this.holding ? this.facing : null), gd
```

#### 94. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L590)

```diff
-           eH: Ub
+           Vo: Pd
```

#### 95. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L593)

```diff
-         if (0 !== (Bb & Xb.sb.Held) || Ub.setViewHeading((0, tb.y)(Ub.bodyHeading)), void 0 !== this.pending) {
+         if (0 !== (pd & Ld.yb.Held) || Pd.setViewHeading((0, jd.w)(Pd.bodyHeading)), void 0 !== this.pending) {
```

#### 96. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L599` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L599) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L599)

```diff
-         if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !Lb) return Xb.kb.None;
+         if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !Zd) return Ld.pb.None;
```

#### 97. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L601-L602` → after: `L601-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L601-L602) · [Before (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L601-L602)

```diff
-         if (0 === this.options.api.queries.directorPose(Yb, Sb, ab, (0, tb.y)(Lb.heading), (0, tb.i)(Lb.pitch), (0, vb.k)(Lb.fov))) return Xb.kb.None;
-         if ("default" === this.director.getSettings().mode) return Xb.kb.Pose;
+         if (0 === this.options.api.queries.directorPose(gd, Cd, Kd, (0, jd.w)(Zd.heading), (0, jd.i)(Zd.pitch), (0, Sd.p)(Zd.fov))) return Ld.pb.None;
+         if ("default" === this.director.getSettings().mode) return Ld.pb.Pose;
```

#### 98. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L605` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L605) · [Before (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L605)

```diff
-             return Xb.kb.FaceCamera;
+             return Ld.pb.FaceCamera;
```

#### 99. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L607` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L607) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L607)

```diff
-             return Xb.kb.FaceCursor;
+             return Ld.pb.FaceCursor;
```

#### 100. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L609` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L609) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L609)

```diff
-             return Xb.kb.FaceMovement
+             return Ld.pb.FaceMovement
```

#### 101. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L624` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L624) · [Before (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L624)

```diff
-         this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new eb.c(this.eH), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (bb = (ub = this.opt … [truncated]
+         this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new fd.b(this.Vo), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (dd = (Jd = this.opt … [truncated]
```

#### 102. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L630` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L630) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L630)

```diff
-         const ub = (0, Jb.e)(bb);
+         const Jd = (0, Xd.c)(dd);
```

#### 103. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L635-L636` → after: `L635-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L635-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L635-L636) · [Before (L635-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L635-L636)

```diff
-           Ub = 0 !== (hb & Xb.sb.LookPointed);
-         if (null === this.mouseTurns && !Ub) return Gb.MJ = 0, Gb.mJ = 0, void(Gb.pointedAt = void 0);
+           Pd = 0 !== (kd & Ld.yb.LookPointed);
+         if (null === this.mouseTurns && !Pd) return Wd.bY = 0, Wd.fY = 0, void(Wd.pointedAt = void 0);
```

#### 104. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L640` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L640) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L640)

```diff
-           eH: Yb
+           Vo: gd
```

#### 105. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L642)

```diff
-         Yb.setViewHeading((0, Jb.d)(Yb.getViewHeading(), bb, ub, Lb, "look" === this.mouseTurns, Gb))
+         gd.setViewHeading((0, Xd.b)(gd.getViewHeading(), dd, Jd, Zd, "look" === this.mouseTurns, Wd))
```

#### 106. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L646` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L646) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L646)

```diff
-           hb = Math.min(bb.length, Xb.Kd);
+           kd = Math.min(dd.length, Ld.fe);
```

#### 107. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L648` → after: `L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L648) · [Before (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L648)

```diff
-           for (let hb = 0; hb < 3; hb++) ub[3 * Bb + hb] = Math.floor(bb[Bb][hb] / Xb.A);
+           for (let kd = 0; kd < 3; kd++) Jd[3 * pd + kd] = Math.floor(dd[pd][kd] / Ld.C);
```

#### 108. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L653` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L653) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L653)

```diff
-           nZ: ub,
+           pg: Jd,
```

#### 109. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L662` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L662) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L662)

```diff
-         null !== bb && (0, Xb.zf)(bb, 0, this.nZ, this.centresLen) && (this.centresUnsent = !1)
+         null !== dd && (0, Ld.Of)(dd, 0, this.pg, this.centresLen) && (this.centresUnsent = !1)
```

#### 110. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L666` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L666) · [Before (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L666)

```diff
-         return null !== (bb = null === (ub = (hb = this.options).screen) || void 0 === ub ? void 0 : ub.call(hb)) && void 0 !== bb ? bb : yb
+         return null !== (dd = null === (Jd = (kd = this.options).screen) || void 0 === Jd ? void 0 : Jd.call(kd)) && void 0 !== dd ? dd : rd
```

#### 111. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L670` → after: `L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L670) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L670)

```diff
-         return (null !== (bb = this.options.isPageHidden) && void 0 !== bb ? bb : Vb)()
+         return (null !== (dd = this.options.isPageHidden) && void 0 !== dd ? dd : ud)()
```

#### 112. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L674` → after: `L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L674) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L674)

```diff
-         return null !== (bb = null === (ub = (hb = this.options).now) || void 0 === ub ? void 0 : ub.call(hb)) && void 0 !== bb ? bb : performance.now()
+         return null !== (dd = null === (Jd = (kd = this.options).now) || void 0 === Jd ? void 0 : Jd.call(kd)) && void 0 !== dd ? dd : performance.now()
```

#### 113. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L677-L681` → after: `L677-L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L677-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L677-L681) · [Before (L677-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L677-L681)

```diff
-     var fb = hb(40244);
-     const kb = Xb.A * Xb.A * Xb.A,
-       Tb = Math.log2(Xb.A),
-       cb = Xb.A - 1,
-       Qb = Xb.O.BYTES / 4,
+     var Vd = kd(40785);
+     const zd = Ld.C * Ld.C * Ld.C,
+       Hd = Math.log2(Ld.C),
+       wd = Ld.C - 1,
+       Ad = Ld.R.BYTES / 4,
```

#### 114. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L685` → after: `L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L685) · [Before (L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L685)

```diff
-       return bb * Xb.A * Xb.A + ub * Xb.A + hb
+       return dd * Ld.C * Ld.C + Jd * Ld.C + kd
```

#### 115. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L705` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L705) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L705)

```diff
-         this.table = bb, this.slot = ub, this.generation = hb, this.epoch = Bb, this.Sw = new uu(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = Rb, this.dataPtr = 0, this.dataBuffer = null, this.dataS … [truncated]
+         this.table = dd, this.slot = Jd, this.generation = kd, this.epoch = pd, this.ql = new kJ(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = dJ, this.dataPtr = 0, this.dataBuffer = null, this.dataS … [truncated]
```

#### 116. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L712)

```diff
-           ub = this.layers ??= new Uint16Array(Xb.A);
+           Jd = this.layers ??= new Uint16Array(Ld.C);
```

#### 117. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L769-L770` → after: `L769-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L769-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L769-L770) · [Before (L769-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L769-L770)

```diff
-       const hb = bb[ub * Xb.A];
-       for (let Bb = 0; Bb < Xb.A; Bb++) {
+       const kd = dd[Jd * Ld.C];
+       for (let pd = 0; pd < Ld.C; pd++) {
```

#### 118. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L772` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L772) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L772)

```diff
-         for (let ub = 0; ub < Xb.A; ub++)
+         for (let Jd = 0; Jd < Ld.C; Jd++)
```

#### 119. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L787-L789` → after: `L787-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L787-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L787-L789) · [Before (L787-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L787-L789)

```diff
-         if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Gb === Xb.P.ResetAll) return this.chunks.clear(), void this.epoch++;
-         if (Gb !== Xb.P.Stored && Gb !== Xb.P.Unloaded) throw new Zb.d(`ChunkSlot flags ${Gb}`);
-         const Ub = (0, fb.d)(bb, ub, hb);
+         if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Wd === Ld.T.ResetAll) return this.chunks.clear(), void this.epoch++;
+         if (Wd !== Ld.T.Stored && Wd !== Ld.T.Unloaded) throw new Qd.e(`ChunkSlot flags ${Wd}`);
+         const Pd = (0, Vd.c)(dd, Jd, kd);
```

#### 120. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L791` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L791) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L791)

```diff
-         if (Gb === Xb.P.Unloaded) return void this.chunks.delete(Ub);
+         if (Wd === Ld.T.Unloaded) return void this.chunks.delete(Pd);
```

#### 121. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L801-L802` → after: `L801-L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L801-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L801-L802) · [Before (L801-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L801-L802)

```diff
-           ub = Xb.o.chunkSlotsPtr(bb, 0),
-           hb = Xb.o.chunkSlotsLen(bb, 0);
+           Jd = Ld.u.chunkSlotsPtr(dd, 0),
+           kd = Ld.u.chunkSlotsLen(dd, 0);
```

#### 122. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L807-L808` → after: `L807-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L807-L808) · [Before (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L807-L808)

```diff
-           ub = Xb.o.walkThroughPtr(bb, 0),
-           hb = Xb.o.walkThroughLen(bb, 0);
+           Jd = Ld.u.walkThroughPtr(dd, 0),
+           kd = Ld.u.walkThroughLen(dd, 0);
```

#### 123. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L821` → after: `L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L821) · [Before (L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L821)

```diff
-         bb !== this.slotsBuffer && (this.slotsBuffer = bb, this.slots = null !== (ub = (0, Zb.t)(Uint32Array, bb, this.slotsPtr, this.slotsLen * Qb, "the chunk directory")) && void 0 !== ub ? ub : Gu);
+         dd !== this.slotsBuffer && (this.slotsBuffer = dd, this.slots = null !== (Jd = (0, Qd.t)(Uint32Array, dd, this.slotsPtr, this.slotsLen * Ad, "the chunk directory")) && void 0 !== Jd ? Jd : PJ);
```

#### 124. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L827` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L827) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L827)

```diff
-           return null !== (hb = (0, Zb.t)(Uint16Array, bb, ub, kb, "a chunk's voxels")) && void 0 !== hb ? hb : Rb
+           return null !== (kd = (0, Qd.t)(Uint16Array, dd, Jd, zd, "a chunk's voxels")) && void 0 !== kd ? kd : dJ
```

#### 125. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L829` → after: `L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L829) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L829)

```diff
-           if (!(Bb instanceof Zb.d)) throw Bb;
+           if (!(pd instanceof Qd.e)) throw pd;
```

#### 126. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L835` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L835) · [Before (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L835)

```diff
-         return null !== (Bb = this.chunks.get((0, fb.d)(bb, ub, hb))) && void 0 !== Bb ? Bb : null
+         return null !== (pd = this.chunks.get((0, Vd.c)(dd, Jd, kd))) && void 0 !== pd ? pd : null
```

#### 127. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L848` → after: `L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L848) · [Before (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L848)

```diff
-         return null !== (Bb = Lb.written(Yb)) && void 0 !== Bb ? Bb : Lb.voxelData()[Yb]
+         return null !== (pd = Zd.written(gd)) && void 0 !== pd ? pd : Zd.voxelData()[gd]
```

#### 128. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L857` → after: `L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L857) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L857)

```diff
-         return null !== (Bb = null === (Ob = this.chunks.get((0, fb.d)(bb, ub, hb))) || void 0 === Ob ? void 0 : Ob.dX) && void 0 !== Bb ? Bb : null
+         return null !== (pd = null === (Nd = this.chunks.get((0, Vd.c)(dd, Jd, kd))) || void 0 === Nd ? void 0 : Nd.jL) && void 0 !== pd ? pd : null
```

#### 129. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L860` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L860) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L860)

```diff
-         const Yb = Xb.A;
+         const gd = Ld.C;
```

#### 130. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L869` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L869) · [Before (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L869)

```diff
-               const pb = this.chunks.get((0, fb.d)(Ob, ab, Bb));
+               const Od = this.chunks.get((0, Vd.c)(Nd, Kd, pd));
```

#### 131. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L874` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L874) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L874)

```diff
-                 Kb = pb.LZ,
+                 Gd = Od.IQ,
```

#### 132. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L910` → after: `L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L910) · [Before (L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L910)

```diff
-         bb !== this.walkBuffer && (this.walkBuffer = bb, this.walk = null !== (ub = (0, Zb.t)(Uint32Array, bb, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== ub ? ub : Gu);
+         dd !== this.walkBuffer && (this.walkBuffer = dd, this.walk = null !== (Jd = (0, Qd.t)(Uint32Array, dd, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== Jd ? Jd : PJ);
```

#### 133. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L915` → after: `L915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L915) · [Before (L915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L915)

```diff
-         const Bb = (0, fb.d)(bb >> Tb, ub >> Tb, hb >> Tb);
+         const pd = (0, Vd.c)(dd >> Hd, Jd >> Hd, kd >> Hd);
```

#### 134. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L919-L925` → after: `L919-L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L919-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L919-L925) · [Before (L919-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L919-L925)

```diff
-     var Yu = hb(38128),
-       Su = hb(37420),
-       au = hb(36430),
-       Hu = hb(36231),
-       wu = hb(9023),
-       Zu = hb(38750),
-       Xu = hb(191);
+     var CJ = kd(38642),
+       KJ = kd(38004),
+       oJ = kd(36965),
+       lJ = kd(36790),
+       QJ = kd(9176),
+       LJ = kd(39263),
+       OJ = kd(193);
```

#### 135. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1388-L1391` → after: `L1388-L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1388-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1388-L1391) · [Before (L1388-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1388-L1391)

```diff
-     var Cu = hb(36396),
-       du = hb(36418),
-       ru = hb(36411),
-       ju = hb(248);
+     var qJ = kd(36935),
+       BJ = kd(36952),
+       sJ = kd(36946),
+       iJ = kd(256);
```

#### 136. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1394` → after: `L1394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1394) · [Before (L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1394)

```diff
-         let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ju.e;
+         let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iJ.c;
```

#### 137. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1437` → after: `L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1437) · [Before (L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1437)

```diff
-     var Du = hb(40347);
+     var MJ = kd(40900);
```

#### 138. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1447` → after: `L1447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1447) · [Before (L1447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1447)

```diff
-       zu = Xu.e.Tl * Xu.e.playerEyeToHeightRatio,
+       YJ = OJ.g.uR * OJ.g.playerEyeToHeightRatio,
```

#### 139. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1505-L1506` → after: `L1505-L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1505-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1505-L1506) · [Before (L1505-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1505-L1506)

```diff
-             const Sb = 0 !== (Ob & Xb.Vd.Loop);
-             Ob & Xb.Vd.TwoD ? this.start(Bb, !1, Ub, Gb, Lb, Sb) : this.startSpatial(Bb, Ub, Gb, Lb, Sb, bb, ub, hb, Yb, this.earDistSq(bb, ub, hb))
+             const Cd = 0 !== (Nd & Ld.ne.Loop);
+             Nd & Ld.ne.TwoD ? this.start(pd, !1, Pd, Wd, Zd, Cd) : this.startSpatial(pd, Pd, Wd, Zd, Cd, dd, Jd, kd, gd, this.earDistSq(dd, Jd, kd))
```

#### 140. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1522` → after: `L1522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1522) · [Before (L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1522)

```diff
-             void 0 !== Ob && this.fade(Ob, ub, hb, 0 !== (Bb & Xb.Ud.StopAfter))
+             void 0 !== Nd && this.fade(Nd, Jd, kd, 0 !== (pd & Ld.le.StopAfter))
```

#### 141. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1578` → after: `L1578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1578) · [Before (L1578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1578)

```diff
-         if (bb < Xb.m.PlaySound || bb > Xb.m.SoundReset) return !1;
+         if (dd < Ld.o.PlaySound || dd > Ld.o.SoundReset) return !1;
```

#### 142. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1580` → after: `L1580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1580) · [Before (L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1580)

```diff
-           return (0, Xb.ce)(bb, ub, hb, Bb, this.handlers)
+           return (0, Ld.xe)(dd, Jd, kd, pd, this.handlers)
```

#### 143. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1587` → after: `L1587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1587) · [Before (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1587)

```diff
-         for (let Bb = 0; Bb < 3; Bb++) ub[2 - Bb] = Xb.s.listener(bb, 0, Bb), ub[5 - Bb] = Xb.s.forward(bb, 0, Bb), ub[8 - Bb] = Xb.s.up(bb, 0, Bb);
+         for (let pd = 0; pd < 3; pd++) Jd[2 - pd] = Ld.y.listener(dd, 0, pd), Jd[5 - pd] = Ld.y.forward(dd, 0, pd), Jd[8 - pd] = Ld.y.up(dd, 0, pd);
```

#### 144. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1648` → after: `L1648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1648) · [Before (L1648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1648)

```diff
-             const Lb = this.level > 0 ? hb / this.level : hb > 0 && null !== (Gb = null === (Ub = this.live.get(ub)) || void 0 === Ub ? void 0 : Ub.rel) && void 0 !== Gb ? Gb : 0;
+             const Zd = this.level > 0 ? kd / this.level : kd > 0 && null !== (Wd = null === (Pd = this.live.get(Jd)) || void 0 === Pd ? void 0 : Pd.rel) && void 0 !== Wd ? Wd : 0;
```

#### 145. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1654` → after: `L1654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1654) · [Before (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1654)

```diff
-               return bb > 0 && bb < 1 / 0 ? bb : 1
+               return dd > 0 && dd < 1 / 0 ? dd : 1
```

#### 146. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1659` → after: `L1659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1659) · [Before (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1659)

```diff
-             return (null !== (bb = null === (hb = this.live.get(ub)) || void 0 === hb ? void 0 : hb.rel) && void 0 !== bb ? bb : 0) * this.level
+             return (null !== (dd = null === (kd = this.live.get(Jd)) || void 0 === kd ? void 0 : kd.rel) && void 0 !== dd ? dd : 0) * this.level
```

#### 147. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1663` → after: `L1663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1663) · [Before (L1663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1663)

```diff
-             return null !== (bb = null === (hb = this.live.get(ub)) || void 0 === hb ? void 0 : hb.rel) && void 0 !== bb ? bb : 0
+             return null !== (dd = null === (kd = this.live.get(Jd)) || void 0 === kd ? void 0 : kd.rel) && void 0 !== dd ? dd : 0
```

#### 148. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1670` → after: `L1670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1670) · [Before (L1670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1670)

```diff
-                 refDistance: au.d
+                 refDistance: oJ.h
```

#### 149. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1688-L1689` → after: `L1688-L1689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1688-L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1688-L1689) · [Before (L1688-L1689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1688-L1689)

```diff
-           const hb = lu[bb] === iu ? null : (0, ru.h)(Au[bb]),
-             Bb = (0, ru.f)(vu(ub), Math.sqrt(Sb), Yb);
+           const kd = GJ[dd] === bJ ? null : (0, sJ.j)(IJ[dd]),
+             pd = (0, sJ.g)(SJ(Jd), Math.sqrt(Cd), gd);
```

#### 150. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1796-L1797` → after: `L1796-L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1796-L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1796-L1797) · [Before (L1796-L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1796-L1797)

```diff
-     var Mu = hb(40061),
-       mu = hb(38752);
+     var yJ = kd(40585),
+       DJ = kd(39270);
```

#### 151. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1800` → after: `L1800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1800) · [Before (L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1800)

```diff
-         this.key = bb, this.model = ub, this.host = Bb, this.LH = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.nOb = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
+         this.key = dd, this.model = Jd, this.host = pd, this.oo = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.UNd = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
```

#### 152. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1806` → after: `L1806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1806) · [Before (L1806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1806)

```diff
-         !this.FZ && bb >= 0 && bb < this.LH && bb < Xb.mc.Max && this.ZX(bb, bb + 1)
+         !this.pL && dd >= 0 && dd < this.oo && dd < Ld.wc.Max && this.sL(dd, dd + 1)
```

#### 153. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1809-L1810` → after: `L1809-L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1809-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1809-L1810) · [Before (L1809-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1809-L1810)

```diff
-         if (this.FZ) return;
-         (bb = Math.min(Math.max(Math.floor(bb), 0), this.LH, Xb.mc.Max)) > this.count && this.ZX(this.count, bb), this.count = bb;
+         if (this.pL) return;
+         (dd = Math.min(Math.max(Math.floor(dd), 0), this.oo, Ld.wc.Max)) > this.count && this.sL(this.count, dd), this.count = dd;
```

#### 154. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1815` → after: `L1815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1815) · [Before (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1815)

```diff
-         } = this, Ob = this.nOb !== bb, Gb = hb[0] !== ub[0] || hb[1] !== ub[1] || hb[2] !== ub[2];
+         } = this, Nd = this.UNd !== dd, Wd = kd[0] !== Jd[0] || kd[1] !== Jd[1] || kd[2] !== Jd[2];
```

#### 155. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1826-L1828` → after: `L1826-L1828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1826-L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1826-L1828) · [Before (L1826-L1828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1826-L1828)

```diff
-             ub = bb * Yu.d,
-             hb = ab * Xb.mc.Bytes,
-             Ob = 0 !== Yb[ub + Yu.h] ? Xb.mc.Hidden : 0;
+             Jd = dd * CJ.c,
+             kd = Kd * Ld.wc.Bytes,
+             Nd = 0 !== gd[Jd + CJ.d] ? Ld.wc.Hidden : 0;
```

#### 156. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1831` → after: `L1831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1831) · [Before (L1831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1831)

```diff
-         if ((0, Xb.Ee)(Ub, 0, this.key, bb, ub, Lb, this.tailOf(Lb))) {
+         if ((0, Ld.af)(Pd, 0, this.key, dd, Jd, Zd, this.tailOf(Zd))) {
```

#### 157. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1833` → after: `L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1833) · [Before (L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1833)

```diff
-           Bb.length = 0, this.nOb = bb, hb[0] = ub[0], hb[1] = ub[1], hb[2] = ub[2]
+           pd.length = 0, this.UNd = dd, kd[0] = Jd[0], kd[1] = Jd[1], kd[2] = Jd[2]
```

#### 158. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1837` → after: `L1837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1837) · [Before (L1837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1837)

```diff
-         (bb = Math.ceil(bb)) <= this.LH || this.FZ || (this.records = (0, mu.c)(this.records, new Float32Array(bb * Yu.d)), this.isDirty = (0, mu.c)(this.isDirty, new Uint8Array(bb)), this.tail = new Uint8Array(bb * Xb.mc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
+         (dd = Math.ceil(dd)) <= this.oo || this.pL || (this.records = (0, DJ.c)(this.records, new Float32Array(dd * CJ.c)), this.isDirty = (0, DJ.c)(this.isDirty, new Uint8Array(dd)), this.tail = new Uint8Array(dd * Ld.wc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
```

#### 159. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1840` → after: `L1840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1840) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1840)

```diff
-         this.FZ || (this.FZ = !0, this.host.FZ(this, this.made ? this.key : null))
+         this.pL || (this.pL = !0, this.host.pL(this, this.made ? this.key : null))
```

#### 160. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1849` → after: `L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1849) · [Before (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1849)

```diff
-           this.made = (0, Xb.Je)(bb, 0, this.key, ub, hb, Bb)
+           this.made = (0, Ld.ef)(dd, 0, this.key, Jd, kd, pd)
```

#### 161. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1854` → after: `L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1854) · [Before (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1854)

```diff
-         const ub = bb * Xb.mc.Bytes;
+         const Jd = dd * Ld.wc.Bytes;
```

#### 162. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1865` → after: `L1865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1865) · [Before (L1865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1865)

```diff
-     var Pu = hb(580);
+     var EJ = kd(605);
```

#### 163. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1879` → after: `L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1879) · [Before (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1879)

```diff
-         if (hb = bb, !Pu.k.includes(hb)) return null;
+         if (kd = dd, !EJ.n.includes(kd)) return null;
```

#### 164. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1881` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1881) · [Before (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1881)

```diff
-         const Bb = new Eu(++this.keys, ab.i.indexOf(bb), ub, this.host);
+         const pd = new hJ(++this.keys, Kd.k.indexOf(dd), Jd, this.host);
```

#### 165. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1896` → after: `L1896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1896) · [Before (L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1896)

```diff
-         this.key = bb, this.lifeform = ub, this.scale = hb, this.host = Bb, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.FZ = !1, this.sync()
+         this.key = dd, this.lifeform = Jd, this.scale = kd, this.host = pd, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.pL = !1, this.sync()
```

#### 166. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1899` → after: `L1899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1899) · [Before (L1899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1899)

```diff
-         this.FZ || (this.feet[0] = bb[0], this.feet[1] = bb[1], this.feet[2] = bb[2], this.yaw = ub, this.owed |= 2, this.sync())
+         this.pL || (this.feet[0] = dd[0], this.feet[1] = dd[1], this.feet[2] = dd[2], this.yaw = Jd, this.owed |= 2, this.sync())
```

#### 167. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1902` → after: `L1902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1902) · [Before (L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1902)

```diff
-         this.FZ || bb === this.visible || (this.visible = bb, this.owed |= 4, this.sync())
+         this.pL || dd === this.visible || (this.visible = dd, this.owed |= 4, this.sync())
```

#### 168. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1905` → after: `L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1905) · [Before (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1905)

```diff
-         this.FZ || (this.FZ = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
+         this.pL || (this.pL = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
```

#### 169. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1909` → after: `L1909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1909) · [Before (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1909)

```diff
-         return this.write(bb) ? (this.host.settled(this, this.FZ), !0) : (this.host.owes(this), !1)
+         return this.write(dd) ? (this.host.settled(this, this.pL), !0) : (this.host.owes(this), !1)
```

#### 170. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1914` → after: `L1914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1914) · [Before (L1914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1914)

```diff
-           if (!(0, Xb.Te)(bb, 0, this.key, this.lifeform, this.scale)) return !1;
+           if (!(0, Ld.if)(dd, 0, this.key, this.lifeform, this.scale)) return !1;
```

#### 171. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1917` → after: `L1917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1917) · [Before (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1917)

```diff
-         const ub = (2 & this.owed ? Xb.Sc.Pose : 0) | (4 & this.owed ? Xb.Sc.Visible : 0);
+         const Jd = (2 & this.owed ? Ld.Xc.Pose : 0) | (4 & this.owed ? Ld.Xc.Visible : 0);
```

#### 172. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1919` → after: `L1919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1919) · [Before (L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1919)

```diff
-           if (!(0, Xb.Pe)(bb, 0, this.key, ub, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
+           if (!(0, Ld.gf)(dd, 0, this.key, Jd, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
```

#### 173. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1923` → after: `L1923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1923) · [Before (L1923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1923)

```diff
-           if (!(0, Xb.Ne)(bb, 0, this.key)) return !1;
+           if (!(0, Ld.ff)(dd, 0, this.key)) return !1;
```

#### 174. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1929` → after: `L1929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1929) · [Before (L1929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1929)

```diff
-     var yu = hb(40489);
+     var rJ = kd(41051);
```

#### 175. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1932` → after: `L1932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1932) · [Before (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1932)

```diff
-       return (0, yu.e)(), (0, Xb.Bf)(bb, ub, hb, Bb)
+       return (0, rJ.b)(), (0, Ld.Qf)(dd, Jd, kd, pd)
```

#### 176. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1934-L1935` → after: `L1934-L1935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1934-L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1934-L1935) · [Before (L1934-L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1934-L1935)

```diff
-     var Fu = hb(38755),
-       fu = hb(40052);
+     var tJ = kd(39274),
+       VJ = kd(40578);
```

#### 177. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1948` → after: `L1948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1948) · [Before (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1948)

```diff
-     const Oh = Su.g;
+     const Wk = KJ.f;
```

#### 178. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1952` → after: `L1952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1952) · [Before (L1952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1952)

```diff
-         hb = ub && Su.g[ub.mainMultiblock];
+         kd = Jd && KJ.f[Jd.mainMultiblock];
```

#### 179. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1962` → after: `L1962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1962) · [Before (L1962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1962)

```diff
-       if (null === bb || void 0 === bb) return Xb.ad;
+       if (null === dd || void 0 === dd) return Ld.gd;
```

#### 180. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1964` → after: `L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1964) · [Before (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1964)

```diff
-       return Number.isInteger(ub) && ub >= -2147483648 && ub <= 2147483647 && String(ub) === String(bb) ? ub : Xb.ad
+       return Number.isInteger(Jd) && Jd >= -2147483648 && Jd <= 2147483647 && String(Jd) === String(dd) ? Jd : Ld.gd
```

#### 181. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1968` → after: `L1968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1968) · [Before (L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1968)

```diff
-       return (0, Xb.Gf)(bb, 0, ub, null !== hb && void 0 !== hb ? hb : Number.NaN)
+       return (0, Ld.Wf)(dd, 0, Jd, null !== kd && void 0 !== kd ? kd : Number.NaN)
```

#### 182. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1972` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1972) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1972)

```diff
-         this.deps = bb, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new Fu.b((() => this.tables.getClientOption … [truncated]
+         this.deps = dd, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new tJ.d((() => this.tables.getClientOption … [truncated]
```

#### 183. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1979` → after: `L1979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1979) · [Before (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1979)

```diff
-           FZ: (bb, ub) => {
+           pL: (dd, Jd) => {
```

#### 184. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1988` → after: `L1988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1988) · [Before (L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1988)

```diff
-         if (!this.isLocal(bb)) throw new Error(`Attempted to ${ub} for a player that is not the local player`)
+         if (!this.isLocal(dd)) throw new Error(`Attempted to ${Jd} for a player that is not the local player`)
```

#### 185. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1991-L1992` → after: `L1991-L1992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1991-L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1991-L1992) · [Before (L1991-L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1991-L1992)

```diff
-         const ub = this.api.iK(bb);
-         if (!ub) throw new Error(`Entity ${bb} has no replicated position`);
+         const Jd = this.api.yI(dd);
+         if (!Jd) throw new Error(`Entity ${dd} has no replicated position`);
```

#### 186. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2010` → after: `L2010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2010) · [Before (L2010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2010)

```diff
-         this.assertLocal(bb, "open shop"), Ub.i.vp("showShopFromServer", {
+         this.assertLocal(dd, "open shop"), Pd.j.nO("showShopFromServer", {
```

#### 187. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2012` → after: `L2012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2012) · [Before (L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2012)

```diff
-           kh: hb
+           zk: kd
```

#### 188. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2021` → after: `L2021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2021) · [Before (L2021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2021)

```diff
-         Ub.i.vp("chat", {
+         Pd.j.nO("chat", {
```

#### 189. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2030` → after: `L2030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2030) · [Before (L2030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2030)

```diff
-         return ub === Xb.ad ? void 0 : (0, Mu.i)(this.api, ub)
+         return Jd === Ld.gd ? void 0 : (0, yJ.g)(this.api, Jd)
```

#### 190. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2034` → after: `L2034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2034) · [Before (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2034)

```diff
-         return hb !== Xb.ad && (0, Mu.e)(this.api, hb, ub)
+         return kd !== Ld.gd && (0, yJ.c)(this.api, kd, Jd)
```

#### 191. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2050-L2051` → after: `L2050-L2051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2050-L2051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2050-L2051) · [Before (L2050-L2051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2050-L2051)

```diff
-         if (!Object.hasOwn(Xb.nd, hb)) throw new Error(`Unknown other-entity setting ${hb}`);
-         const Ob = Xb.nd[hb],
+         if (!Object.hasOwn(Ld.vd, kd)) throw new Error(`Unknown other-entity setting ${kd}`);
+         const Nd = Ld.vd[kd],
```

#### 192. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2053-L2055` → after: `L2053-L2055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2053-L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2053-L2055) · [Before (L2053-L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2053-L2055)

```diff
-         if (Gb === Xb.ad || !this.deps.beforeWrite()) return;
-         const Ub = (0, Nb.h)(Bb);
-         if (Ub.length > 16384) throw new Error(`The other-entity setting ${hb}'s value is over 16384 bytes`);
+         if (Wd === Ld.gd || !this.deps.beforeWrite()) return;
+         const Pd = (0, nd.e)(pd);
+         if (Pd.length > 16384) throw new Error(`The other-entity setting ${kd}'s value is over 16384 bytes`);
```

#### 193. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2067` → after: `L2067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2067) · [Before (L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2067)

```diff
-           hb = (ub === Xb.ad ? 0 : this.api.queries.directorEntity(ub)) >= Xb.qb.BYTES ? this.api.memoryData(this.api.scratch(), Xb.qb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
+           kd = (Jd === Ld.gd ? 0 : this.api.queries.directorEntity(Jd)) >= Ld.vb.BYTES ? this.api.memoryData(this.api.scratch(), Ld.vb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
```

#### 194. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2069` → after: `L2069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2069) · [Before (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2069)

```diff
-         if (1 === Xb.qb.headingIsDrawn(hb, 0)) return Xb.qb.heading(hb, 0);
+         if (1 === Ld.vb.headingIsDrawn(kd, 0)) return Ld.vb.heading(kd, 0);
```

#### 195. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2071` → after: `L2071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2071) · [Before (L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2071)

```diff
-         return this.isLocal(bb) && 0 === (Xb.o.playerFlags(Bb, 0) & Xb.Ad.FreeCam) ? Xb.o.heading(Bb, 0) : null
+         return this.isLocal(dd) && 0 === (Ld.u.playerFlags(pd, 0) & Ld.Ud.FreeCam) ? Ld.u.heading(pd, 0) : null
```

#### 196. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2074-L2077` → after: `L2074-L2077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2074-L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2074-L2077) · [Before (L2074-L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2074-L2077)

```diff
-         const bb = Xb.o.playerFlags(this.api.apiView, 0);
-         return 0 === (bb & Xb.Ad.Replay) && this.api.readDrawnPosition(this.api.localId, cu) ? {
-           onGround: 0 !== (bb & Xb.Ad.OnGround),
-           jumpHeld: 0 !== (bb & Xb.Ad.JumpHeld)
+         const dd = Ld.u.playerFlags(this.api.apiView, 0);
+         return 0 === (dd & Ld.Ud.Replay) && this.api.readDrawnPosition(this.api.localId, wJ) ? {
+           onGround: 0 !== (dd & Ld.Ud.OnGround),
+           jumpHeld: 0 !== (dd & Ld.Ud.JumpHeld)
```

#### 197. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2080-L2081` → after: `L2080-L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2080-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2080-L2081) · [Before (L2080-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2080-L2081)

```diff
-       cub(bb) {
-         return this.isLocal(bb) ? this.items.MS() : null
+       Pkd(dd) {
+         return this.isLocal(dd) ? this.items.EC() : null
```

#### 198. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2091` → after: `L2091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2091) · [Before (L2091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2091)

```diff
-         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.MS()
+         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.EC()
```

#### 199. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2100-L2101` → after: `L2100-L2101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2100-L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2100-L2101) · [Before (L2100-L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2100-L2101)

```diff
-           Lb = 0 === (Xb.o.playerFlags(this.api.apiView, 0) & Xb.Ad.ZoomFirstPerson),
-           Yb = null !== (ub = this.tables.getClientOption("gunshotOrigin")) && void 0 !== ub ? ub : null;
+           Zd = 0 === (Ld.u.playerFlags(this.api.apiView, 0) & Ld.Ud.ZoomFirstPerson),
+           gd = null !== (Jd = this.tables.getClientOption("gunshotOrigin")) && void 0 !== Jd ? Jd : null;
```

#### 200. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2105` → after: `L2105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2105) · [Before (L2105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2105)

```diff
-         }, Lb, (0, wu.d)(), Yb)
+         }, Zd, (0, QJ.e)(), gd)
```

#### 201. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2125` → after: `L2125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2125) · [Before (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2125)

```diff
-         if (this.isLocal(bb)) return 0 !== (Xb.o.playerFlags(this.api.apiView, 0) & Xb.Ad.Crouching);
+         if (this.isLocal(dd)) return 0 !== (Ld.u.playerFlags(this.api.apiView, 0) & Ld.Ud.Crouching);
```

#### 202. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2127` → after: `L2127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2127) · [Before (L2127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2127)

```diff
-         return ub !== Xb.ad && 1 === this.api.queries.entityCrouching(ub)
+         return Jd !== Ld.gd && 1 === this.api.queries.entityCrouching(Jd)
```

#### 203. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2133` → after: `L2133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2133) · [Before (L2133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2133)

```diff
-         return 0 !== (Xb.o.playerFlags(this.api.apiView, 0) & Xb.Ad.AttemptingBreak)
+         return 0 !== (Ld.u.playerFlags(this.api.apiView, 0) & Ld.Ud.AttemptingBreak)
```

#### 204. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2136` → after: `L2136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2136) · [Before (L2136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2136)

```diff
-         return this.live.rbb()
+         return this.live.Ddd()
```

#### 205. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2140` → after: `L2140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2140) · [Before (L2140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2140)

```diff
-         for (let ub = 0; ub < 3; ub++) Ru.origin[ub] = Xb.o.Ibb(bb, 0, ub), Ru.direction[ub] = Xb.o.actionDir(bb, 0, ub);
+         for (let Jd = 0; Jd < 3; Jd++) dk.origin[Jd] = Ld.u.NJd(dd, 0, Jd), dk.direction[Jd] = Ld.u.actionDir(dd, 0, Jd);
```

#### 206. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2156-L2157` → after: `L2156-L2157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2156-L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2156-L2157) · [Before (L2156-L2157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2156-L2157)

```diff
-       Xub(bb, ub, hb, Bb, Ob) {
-         return 1 === this.api.queries.terrainBlocked(Bb, bb, ub, hb, Uh(null !== Ob && void 0 !== Ob ? Ob : null))
+       MJd(dd, Jd, kd, pd, Nd) {
+         return 1 === this.api.queries.terrainBlocked(pd, dd, Jd, kd, Zk(null !== Nd && void 0 !== Nd ? Nd : null))
```

#### 207. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2169` → after: `L2169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2169) · [Before (L2169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2169)

```diff
-         return this.chunks.bS(bb, ub, hb)
+         return this.chunks.NC(dd, Jd, kd)
```

#### 208. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2175` → after: `L2175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2175) · [Before (L2175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2175)

```diff
-         return 1 === Bb ? Ub : Ub.rate(Bb)
+         return 1 === pd ? Pd : Pd.rate(pd)
```

#### 209. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2185-L2187` → after: `L2185-L2187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2185-L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2185-L2187) · [Before (L2185-L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2185-L2187)

```diff
-         const Lb = null === hb || void 0 === hb ? void 0 : hb.Oh,
-           Yb = null !== (Ob = null === hb || void 0 === hb ? void 0 : hb.maxHearDist) && void 0 !== Ob ? Ob : au.c,
-           Sb = null !== (Gb = null === hb || void 0 === hb ? void 0 : hb.refDistance) && void 0 !== Gb ? Gb : au.d;
+         const Zd = null === kd || void 0 === kd ? void 0 : kd.Pk,
+           gd = null !== (Nd = null === kd || void 0 === kd ? void 0 : kd.maxHearDist) && void 0 !== Nd ? Nd : oJ.f,
+           Cd = null !== (Wd = null === kd || void 0 === kd ? void 0 : kd.refDistance) && void 0 !== Wd ? Wd : oJ.h;
```

#### 210. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2203-L2204` → after: `L2203-L2204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2203-L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2203-L2204) · [Before (L2203-L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2203-L2204)

```diff
-           if (0 === Xb.o.viewProj(bb, 0, 3) && 0 === Xb.o.viewProj(bb, 0, 7) && 0 === Xb.o.viewProj(bb, 0, 11)) return null;
-           for (let ub = 0; ub < 3; ub++) Tu[ub] = Xb.o.eye(bb, 0, ub)
+           if (0 === Ld.u.viewProj(dd, 0, 3) && 0 === Ld.u.viewProj(dd, 0, 7) && 0 === Ld.u.viewProj(dd, 0, 11)) return null;
+           for (let Jd = 0; Jd < 3; Jd++) HJ[Jd] = Ld.u.eye(dd, 0, Jd)
```

#### 211. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2206` → after: `L2206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2206) · [Before (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2206)

```diff
-         return Number.isFinite(Tu[0] + Tu[1] + Tu[2]) ? Tu : null
+         return Number.isFinite(HJ[0] + HJ[1] + HJ[2]) ? HJ : null
```

#### 212. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2209` → after: `L2209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2209) · [Before (L2209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2209)

```diff
-         if (!Number.isInteger(Bb) || Bb < 0 || Bb > 65535) throw new Error(`Invalid block id ${Bb}`);
+         if (!Number.isInteger(pd) || pd < 0 || pd > 65535) throw new Error(`Invalid block id ${pd}`);
```

#### 213. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2215` → after: `L2215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2215) · [Before (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2215)

```diff
-         if (1 === this.api.queries.vJ(Ob, Gb, Ub, Bb)) {
+         if (1 === this.api.queries.aY(Nd, Wd, Pd, pd)) {
```

#### 214. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2244` → after: `L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2244) · [Before (L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2244)

```diff
-                 look: Xb.Wb.FlatOnTop,
+                 look: Ld.ac.FlatOnTop,
```

#### 215. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2247` → after: `L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2247) · [Before (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2247)

```diff
-                 look: Xb.Wb.FlatOpaque,
+                 look: Ld.ac.FlatOpaque,
```

#### 216. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2250` → after: `L2250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2250) · [Before (L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2250)

```diff
-                 look: Xb.Wb.Flat,
+                 look: Ld.ac.Flat,
```

#### 217. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2255` → after: `L2255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2255) · [Before (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2255)

```diff
-                 look: Xb.Wb.Chevrons, colour: [...(0, Zu.d)(bb.colour), bb.alpha]
+                 look: Ld.ac.Chevrons, colour: [...(0, LJ.b)(dd.colour), dd.alpha]
```

#### 218. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2259` → after: `L2259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2259) · [Before (L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2259)

```diff
-                 look: Xb.Wb.FurnaceFire, colour: [1, 1, 1, 1]
+                 look: Ld.ac.FurnaceFire, colour: [1, 1, 1, 1]
```

#### 219. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2271` → after: `L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2271) · [Before (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2271)

```diff
-             const ub = null !== (Lb = bb.uvs) && void 0 !== Lb ? Lb : [];
+             const Jd = null !== (Zd = dd.uvs) && void 0 !== Zd ? Zd : [];
```

#### 220. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2274` → after: `L2274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2274) · [Before (L2274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2274)

```diff
-               Ub.setFloat32(4 * (3 * hb + bb), null !== (Yb = ub[bb]) && void 0 !== Yb ? Yb : 0, !0)
+               Pd.setFloat32(4 * (3 * kd + dd), null !== (gd = Jd[dd]) && void 0 !== gd ? gd : 0, !0)
```

#### 221. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2279-L2280` → after: `L2279-L2280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2279-L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2279-L2280) · [Before (L2279-L2280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2279-L2280)

```diff
-         }(bb, (0, Yu.k)(ub));
-         return (0, Xb.se)(Ob, 0, Bb, Gb, Ub, hb, Lb, bb.indices.length, Yb) && this.liveMeshes.add(Bb), Bb
+         }(dd, (0, CJ.e)(Jd));
+         return (0, Ld.Te)(Nd, 0, pd, Wd, Pd, kd, Zd, dd.indices.length, gd) && this.liveMeshes.add(pd), pd
```

#### 222. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2287-L2289` → after: `L2287-L2289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2287-L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2287-L2289) · [Before (L2287-L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2287-L2289)

```diff
-         ub.anchor && (Ob |= Xb.Xb.Anchor, bh[0] = ub.anchor[0], bh[1] = ub.anchor[1], bh[2] = ub.anchor[2]), void 0 !== ub.visible && (Ob |= Xb.Xb.Visible), ub.uvOffset && (Ob |= Xb.Xb.UvOffset, uh[0] = ub.uvOffset[0], uh[1] = ub.uvOffset[1]);
-         const Gb = null !== (hb = ub.visibility) && void 0 !== hb ? hb : 1;
-         void 0 !== ub.visibility && (Ob |= Xb.Xb.Visibility), ub.scale && (Ob |= Xb.Xb.Scale, hh[0] = ub.scale[0], hh[1] = ub.scale[1], hh[2] = ub.scale[2]), 0 !== Ob && (0, Xb.xe)(Bb, 0, bb, Ob, ub.visible ? 1 : 0, bh, uh, Gb, hh)
+         Jd.anchor && (Nd |= Ld.cc.Anchor, Jk[0] = Jd.anchor[0], Jk[1] = Jd.anchor[1], Jk[2] = Jd.anchor[2]), void 0 !== Jd.visible && (Nd |= Ld.cc.Visible), Jd.uvOffset && (Nd |= Ld.cc.UvOffset, kk[0] = Jd.uvOffset[0], kk[1] = Jd.uvOffset[1]);
+         const Wd = null !== (kd = Jd.visibility) && void 0 !== kd ? kd : 1;
+         void 0 !== Jd.visibility && (Nd |= Ld.cc.Visibility), Jd.scale && (Nd |= Ld.cc.Scale, pk[0] = Jd.scale[0], pk[1] = Jd.scale[1], pk[2] = Jd.scale[2]), 0 !== Nd && (0, Ld.Xe)(pd, 0, dd, Nd, Jd.visible ? 1 : 0, Jk, kk, Wd, pk)
```

#### 223. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2293` → after: `L2293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2293) · [Before (L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2293)

```diff
-         ub && !(0, Xb.te)(ub, 0, bb) || this.liveMeshes.delete(bb)
+         Jd && !(0, Ld.We)(Jd, 0, dd) || this.liveMeshes.delete(dd)
```

#### 224. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2342` → after: `L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2342) · [Before (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2342)

```diff
-         const ub = `${bb.colour} ${bb.alpha}`;
+         const Jd = `${dd.colour} ${dd.alpha}`;
```

#### 225. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2384` → after: `L2384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2384) · [Before (L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2384)

```diff
-         for (; hb < bb.length && (0, Xb.Ge)(ub, 0, bb[hb]);) hb++;
+         for (; kd < dd.length && (0, Ld.cf)(Jd, 0, dd[kd]);) kd++;
```

#### 226. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2388` → after: `L2388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2388) · [Before (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2388)

```diff
-           (Bb ? (0, Xb.Hf)(ub, 0, Bb.width, Bb.alpha, 1, Bb.endAtSolidFace ? 1 : 0) : (0, Xb.Hf)(ub, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
+           (pd ? (0, Ld.Yf)(Jd, 0, pd.width, pd.alpha, 1, pd.endAtSolidFace ? 1 : 0) : (0, Ld.Yf)(Jd, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
```

#### 227. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2391` → after: `L2391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2391) · [Before (L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2391)

```diff
-         void 0 !== Ob && (0, Xb.Ff)(ub, 0, null !== Ob && void 0 !== Ob ? Ob : 0, null === Ob ? 1 : 0) && (this.pendingFar = void 0)
+         void 0 !== Nd && (0, Ld.Tf)(Jd, 0, null !== Nd && void 0 !== Nd ? Nd : 0, null === Nd ? 1 : 0) && (this.pendingFar = void 0)
```

#### 228. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2396` → after: `L2396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2396) · [Before (L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2396)

```diff
-         hb && Bb !== Xb.ad && (0, Xb.Nf)(hb, 0, Bb, ub)
+         kd && pd !== Ld.gd && (0, Ld.fg)(kd, 0, pd, Jd)
```

#### 229. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2401` → after: `L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2401) · [Before (L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2401)

```diff
-         hb && Bb !== Xb.ad && Lh(hb, Bb, ub)
+         kd && pd !== Ld.gd && gk(kd, pd, Jd)
```

#### 230. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2417` → after: `L2417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2417) · [Before (L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2417)

```diff
-         return ub !== Xb.ad && 1 === this.api.queries.entityInteractable(ub)
+         return Jd !== Ld.gd && 1 === this.api.queries.entityInteractable(Jd)
```

#### 231. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2430` → after: `L2430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2430) · [Before (L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2430)

```diff
-           return null !== bb && void 0 !== bb ? bb : null
+           return null !== dd && void 0 !== dd ? dd : null
```

#### 232. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2437` → after: `L2437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2437) · [Before (L2437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2437)

```diff
-         return Qu[0] = Xb.o.eye(bb, 0, 0), Qu[1] = Xb.o.eye(bb, 0, 1), Qu[2] = Xb.o.eye(bb, 0, 2), Qu
+         return AJ[0] = Ld.u.eye(dd, 0, 0), AJ[1] = Ld.u.eye(dd, 0, 1), AJ[2] = Ld.u.eye(dd, 0, 2), AJ
```

#### 233. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2440` → after: `L2440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2440) · [Before (L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2440)

```diff
-         return Xb.o.cameraFar(this.api.apiView, 0)
+         return Ld.u.cameraFar(this.api.apiView, 0)
```

#### 234. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2451` → after: `L2451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2451) · [Before (L2451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2451)

```diff
-         ub && hb !== Xb.ad && (0, Xb.ie)(ub, 0, hb)
+         Jd && kd !== Ld.gd && (0, Ld.Ee)(Jd, 0, kd)
```

#### 235. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2456-L2458` → after: `L2456-L2458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2456-L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2456-L2458) · [Before (L2456-L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2456-L2458)

```diff
-         hb && Vu(hb, 0, fu.e.Chat, (0, Nb.h)((0, fu.m)({
-           XS: bb,
-           pS: ub
+         kd && uJ(kd, 0, VJ.e.Chat, (0, nd.e)((0, VJ.i)({
+           IC: dd,
+           vC: Jd
```

#### 236. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2462` → after: `L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2462) · [Before (L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2462)

```diff
-         bb.length <= 119 && this.sendChat(`/${bb}`)
+         dd.length <= 119 && this.sendChat(`/${dd}`)
```

#### 237. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2470` → after: `L2470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2470) · [Before (L2470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2470)

```diff
-           Lb = Ob.bS(bb, ub, hb),
+           Zd = Nd.NC(dd, Jd, kd),
```

#### 238. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2473-L2474` → after: `L2473-L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2473-L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2473-L2474) · [Before (L2473-L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2473-L2474)

```diff
-           const [Bb, Gb, Sb] = [bb - Yb.x, ub - Yb.y, hb - Yb.z], ab = Oh[Ob.bS(Bb, Gb, Sb)], Hb = null === ab || void 0 === ab ? void 0 : ab.positions.some((bb => bb.id === Lb && bb.x === Yb.x && bb.y === Yb.y && bb.z === Yb.z));
-           for (const bb of (Hb && ab ? ab : Yb.main).positions) Ob.bS(Bb + bb.x, Gb + bb.y, Sb + bb.z) === bb.id && Ub(Bb + bb.x, Gb + bb.y, Sb + bb.z, 0, bb.id)
+           const [pd, Wd, Cd] = [dd - gd.x, Jd - gd.y, kd - gd.z], Kd = Wk[Nd.NC(pd, Wd, Cd)], od = null === Kd || void 0 === Kd ? void 0 : Kd.positions.some((dd => dd.id === Zd && dd.x === gd.x && dd.y === gd.y && dd.z === gd.z));
+           for (const dd of (od && Kd ? Kd : gd.main).positions) Nd.NC(pd + dd.x, Wd + dd.y, Cd + dd.z) === dd.id && Pd(pd + dd.x, Wd + dd.y, Cd + dd.z, 0, dd.id)
```

#### 239. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2480` → after: `L2480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2480) · [Before (L2480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2480)

```diff
-             Ub(Bb, Gb, Lb, Hb.id, Ob.bS(Bb, Gb, Lb))
+             Pd(pd, Wd, Zd, od.id, Nd.NC(pd, Wd, Zd))
```

#### 240. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2484` → after: `L2484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2484) · [Before (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2484)

```diff
-           let Yb = Ob.bS(bb, ub + 1, hb);
+           let gd = Nd.NC(dd, Jd + 1, kd);
```

#### 241. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2496` → after: `L2496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2496) · [Before (L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2496)

```diff
-         return 0 !== Ob && 0 !== Gb && Bb.blockRootId(bb) === Bb.blockRootId(ub) ? Ub && hb !== Gb ? Gb : void 0 : 0 === Gb || !Ub && 0 !== hb ? Ub ? 0 : void 0 : Gb
+         return 0 !== Nd && 0 !== Wd && pd.blockRootId(dd) === pd.blockRootId(Jd) ? Pd && kd !== Wd ? Wd : void 0 : 0 === Wd || !Pd && 0 !== kd ? Pd ? 0 : void 0 : Wd
```

#### 242. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2499` → after: `L2499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2499) · [Before (L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2499)

```diff
-     const Sh = Xb.fc + Xb.ic * Xb.sc.BYTES,
+     const Kk = Ld.tc + Ld.uc * Ld.Bc.BYTES,
```

#### 243. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2504-L2505` → after: `L2504-L2505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2504-L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2504-L2505) · [Before (L2504-L2505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2504-L2505)

```diff
-         aS: 0,
-         fY: null,
+         LC: 0,
+         wg: null,
```

#### 244. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2509` → after: `L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2509) · [Before (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2509)

```diff
-         get: () => () => Xb.jd
+         get: () => () => Ld.sd
```

#### 245. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2521` → after: `L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2521) · [Before (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2521)

```diff
-         this.deps = bb, this.Fb = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(Xb.ic), this.ids = new Uint16Array(Xb.ic), this.amounts = new Uint16Array(Xb.ic), this.attrRead = new Float64Array(Xb.ic).fill(-1 … [truncated]
+         this.deps = dd, this.zd = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(Ld.uc), this.ids = new Uint16Array(Ld.uc), this.amounts = new Uint16Array(Ld.uc), this.attrRead = new Float64Array(Ld.uc).fill(-1 … [truncated]
```

#### 246. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2537` → after: `L2537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2537) · [Before (L2537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2537)

```diff
-         return Number.isInteger(bb) && bb >= 0 && bb < this.len && 0 !== this.ids[bb] && null !== (ub = this.facades[bb]) && void 0 !== ub ? ub : null
+         return Number.isInteger(dd) && dd >= 0 && dd < this.len && 0 !== this.ids[dd] && null !== (Jd = this.facades[dd]) && void 0 !== Jd ? Jd : null
```

#### 247. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2544` → after: `L2544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2544) · [Before (L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2544)

```diff
-         for (let ub = 0; ub < Math.min(Xb.td, this.len); ub++) bb.push(this.slot(ub));
+         for (let Jd = 0; Jd < Math.min(Ld.Dd, this.len); Jd++) dd.push(this.slot(Jd));
```

#### 248. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2549` → after: `L2549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2549) · [Before (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2549)

```diff
-         for (let ub = 0; ub < Math.min(Xb.td - Xb.f, this.len); ub++) 0 === this.ids[ub] && bb++;
+         for (let Jd = 0; Jd < Math.min(Ld.Dd - Ld.h, this.len); Jd++) 0 === this.ids[Jd] && dd++;
```

#### 249. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2554` → after: `L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2554) · [Before (L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2554)

```diff
-         for (let Bb = 0; Bb < Math.min(Xb.td, this.len); Bb++) {
+         for (let pd = 0; pd < Math.min(Ld.Dd, this.len); pd++) {
```

#### 250. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2557` → after: `L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2557) · [Before (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2557)

```diff
-           if ((null === Ob || void 0 === Ob ? void 0 : Ob.name) === bb) ub += null !== (hb = Ob.amount) && void 0 !== hb ? hb : 1
+           if ((null === Nd || void 0 === Nd ? void 0 : Nd.name) === dd) Jd += null !== (kd = Nd.amount) && void 0 !== kd ? kd : 1
```

#### 251. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2563` → after: `L2563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2563) · [Before (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2563)

```diff
-         return null !== (ub = this.instances[bb]) && void 0 !== ub ? ub : 0
+         return null !== (Jd = this.instances[dd]) && void 0 !== Jd ? Jd : 0
```

#### 252. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2584` → after: `L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2584) · [Before (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2584)

```diff
-         this.Fb[0] = bb, this.Fb[1] = ub, this.Fb[2] = hb, this.version++
+         this.zd[0] = dd, this.zd[1] = Jd, this.zd[2] = kd, this.version++
```

#### 253. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2588-L2590` → after: `L2588-L2590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2588-L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2588-L2590) · [Before (L2588-L2590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2588-L2590)

```diff
-           ub = Xb.o.inventoryViewPtr(bb, 0),
-           hb = Xb.o.inventoryVersion(bb, 0),
-           Bb = Xb.o.selectedSlot(bb, 0);
+           Jd = Ld.u.inventoryViewPtr(dd, 0),
+           kd = Ld.u.inventoryVersion(dd, 0),
+           pd = Ld.u.selectedSlot(dd, 0);
```

#### 254. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2592` → after: `L2592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2592) · [Before (L2592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2592)

```diff
-         const Ob = Xb.o.slotIcon(bb, 0);
+         const Nd = Ld.u.slotIcon(dd, 0);
```

#### 255. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2596` → after: `L2596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2596) · [Before (L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2596)

```diff
-           Ub = Gb ? Math.min(Gb.getUint32(0, !0), Xb.ic) : 0;
+           Pd = Wd ? Math.min(Wd.getUint32(0, !0), Ld.uc) : 0;
```

#### 256. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2599-L2601` → after: `L2599-L2601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2599-L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2599-L2601) · [Before (L2599-L2601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2599-L2601)

```diff
-         for (let Yb = 0; Yb < Xb.ic; Yb++) {
-           const bb = Xb.fc + Yb * Xb.sc.BYTES,
-             ub = null !== Gb && Yb < Ub ? Xb.sc.item(Gb, bb) : 0;
+         for (let gd = 0; gd < Ld.uc; gd++) {
+           const dd = Ld.tc + gd * Ld.Bc.BYTES,
+             Jd = null !== Wd && gd < Pd ? Ld.Bc.item(Wd, dd) : 0;
```

#### 257. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2606-L2607` → after: `L2606-L2607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2606-L2607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2606-L2607) · [Before (L2606-L2607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2606-L2607)

```diff
-           const hb = Xb.sc.amount(Gb, bb),
-             Bb = Xb.sc.attrVersion(Gb, bb);
+           const kd = Ld.Bc.amount(Wd, dd),
+             pd = Ld.Bc.attrVersion(Wd, dd);
```

#### 258. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2643` → after: `L2643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2643) · [Before (L2643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2643)

```diff
-           Yb += 8 + (0, wb.Xd)(ub);
+           gd += 8 + (0, ld.xe)(Jd);
```

#### 259. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2669-L2670` → after: `L2669-L2670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2669-L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2669-L2670) · [Before (L2669-L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2669-L2670)

```diff
-           Lb = Ub === Xb.jd ? Xb.Hb : null !== (Ob = null === (Gb = this.extras()) || void 0 === Gb ? void 0 : Gb[1]) && void 0 !== Ob ? Ob : Xb.Hb;
-         return this.settle(Ub), Lb === Xb.Hb ? null : Lb
+           Zd = Pd === Ld.sd ? Ld.Mb : null !== (Nd = null === (Wd = this.extras()) || void 0 === Wd ? void 0 : Wd[1]) && void 0 !== Nd ? Nd : Ld.Mb;
+         return this.settle(Pd), Zd === Ld.Mb ? null : Zd
```

#### 260. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2697` → after: `L2697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2697) · [Before (L2697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2697)

```diff
-         const Lb = Gb === Xb.jd ? null : this.extras();
+         const Zd = Wd === Ld.sd ? null : this.extras();
```

#### 261. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2701-L2702` → after: `L2701-L2702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2701-L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2701-L2702) · [Before (L2701-L2702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2701-L2702)

```diff
-             aS: bb,
-             fY: ub === Xb.Hb ? null : ub,
+             LC: dd,
+             wg: Jd === Ld.Mb ? null : Jd,
```

#### 262. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2725` → after: `L2725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2725) · [Before (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2725)

```diff
-           if (Ub.length > 1024) return Gb(new Error(`The crafting station ${bb}'s name is over 1024 bytes`)), null;
+           if (Pd.length > 1024) return Wd(new Error(`The crafting station ${dd}'s name is over 1024 bytes`)), null;
```

#### 263. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2731-L2732` → after: `L2731-L2732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2731-L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2731-L2732) · [Before (L2731-L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2731-L2732)

```diff
-           Yb = Ob.queries.craftingView(null !== (Bb = null === Ub || void 0 === Ub ? void 0 : Ub.length) && void 0 !== Bb ? Bb : 0, Lb ? ub : 0, Lb ? hb : 0);
-         return Yb < Xb.gb.BYTES ? (Ob.reportCorruption(`crafting_view's answer of ${Yb} bytes`), null) : Ob.memoryData(Ob.scratch(), Yb, 1, "crafting_view's answer")
+           gd = Nd.queries.craftingView(null !== (pd = null === Pd || void 0 === Pd ? void 0 : Pd.length) && void 0 !== pd ? pd : 0, Zd ? Jd : 0, Zd ? kd : 0);
+         return gd < Ld.nb.BYTES ? (Nd.reportCorruption(`crafting_view's answer of ${gd} bytes`), null) : Nd.memoryData(Nd.scratch(), gd, 1, "crafting_view's answer")
```

#### 264. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2745-L2746` → after: `L2745-L2746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2745-L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2745-L2746) · [Before (L2745-L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2745-L2746)

```diff
-         if (bb === Xb.id)(0, yu.e)();
-         else if (bb !== Xb.jd) {
+         if (dd === Ld.pd)(0, rJ.b)();
+         else if (dd !== Ld.sd) {
```

#### 265. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2749-L2750` → after: `L2749-L2750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2749-L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2749-L2750) · [Before (L2749-L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2749-L2750)

```diff
-             return (0, yu.e)(), (0, Xb.Xf)(bb, ub, hb)
-           }(ub, 0, bb) || this.deps.onError(new Error(`Sync op ${bb}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
+             return (0, rJ.b)(), (0, Ld.qg)(dd, Jd, kd)
+           }(Jd, 0, dd) || this.deps.onError(new Error(`Sync op ${dd}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
```

#### 266. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2752` → after: `L2752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2752) · [Before (L2752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2752)

```diff
-         return this.stopped || this.refresh(), bb !== Xb.jd
+         return this.stopped || this.refresh(), dd !== Ld.sd
```

#### 267. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2759` → after: `L2759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2759) · [Before (L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2759)

```diff
-       dh = 1.2 * Xu.e.Vl,
+       sk = 1.2 * OJ.g.yR,
```

#### 268. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2767` → after: `L2767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2767) · [Before (L2767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2767)

```diff
-       return ub || (Dh.size >= 64 && Dh.clear(), ub = rh.encode(`{"emitRate":${bb}}`), Dh.set(bb, ub)), ub
+       return Jd || (Fk.size >= 64 && Fk.clear(), Jd = ik.encode(`{"emitRate":${dd}}`), Fk.set(dd, Jd)), Jd
```

#### 269. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2771` → after: `L2771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2771) · [Before (L2771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2771)

```diff
-       return Number.isFinite(bb) && bb > 0 ? bb : 0
+       return Number.isFinite(dd) && dd > 0 ? dd : 0
```

#### 270. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2787` → after: `L2787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2787) · [Before (L2787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2787)

```diff
-       return bb.length > Xb.zd.MaxOpts ? (hb(new Error(`${ub}'s particle opts are over ${Xb.zd.MaxOpts} bytes of JSON`)), null) : bb
+       return dd.length > Ld.Rd.MaxOpts ? (kd(new Error(`${Jd}'s particle opts are over ${Ld.Rd.MaxOpts} bytes of JSON`)), null) : dd
```

#### 271. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2811-L2812` → after: `L2811-L2812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2811-L2812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2811-L2812) · [Before (L2811-L2812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2811-L2812)

```diff
-           Ob = null !== (hb = ub.half) && void 0 !== hb ? hb : Wh;
-         if (!Bb || this.live >= Xb.zd.MaxLiveKeys || this.nextKey > Xb.zd.MaxKey || !gh(ub.pos, Ob)) return th;
+           Nd = null !== (kd = Jd.half) && void 0 !== kd ? kd : qk;
+         if (!pd || this.live >= Ld.Rd.MaxLiveKeys || this.nextKey > Ld.Rd.MaxKey || !bk(Jd.pos, Nd)) return Xk;
```

#### 272. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2818` → after: `L2818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2818) · [Before (L2818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2818)

```diff
-               LH: bb.LH,
+               oo: dd.oo,
```

#### 273. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2826-L2828` → after: `L2826-L2828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2826-L2828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2826-L2828) · [Before (L2826-L2828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2826-L2828)

```diff
-               gravity: null !== (ub = bb.gravity) && void 0 !== ub ? ub : Wh,
-               dir1: null !== (hb = bb.dir1) && void 0 !== hb ? hb : Kh,
-               dir2: null !== (Bb = bb.dir2) && void 0 !== Bb ? Bb : Kh,
+               gravity: null !== (Jd = dd.gravity) && void 0 !== Jd ? Jd : qk,
+               dir1: null !== (kd = dd.dir1) && void 0 !== kd ? kd : xk,
+               dir2: null !== (pd = dd.dir2) && void 0 !== pd ? pd : xk,
```

#### 274. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2834` → after: `L2834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2834) · [Before (L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2834)

```diff
-         return Ub && (0, Xb._e)(Bb, 0, Gb, 0, Xb.zd.PresetNone, 0, jh, nh, Ub) ? (this.nextKey++, this.live++, this.started = !0, new eh(this, this.session, Gb, bb, Ob)) : th
+         return Pd && (0, Ld.tf)(pd, 0, Wd, 0, Ld.Rd.PresetNone, 0, ak, Mk, Pd) ? (this.nextKey++, this.live++, this.started = !0, new nk(this, this.session, Wd, dd, Nd)) : Xk
```

#### 275. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2846` → after: `L2846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2846) · [Before (L2846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2846)

```diff
-         Ob && (0, Xb.We)(ub, 0, 0, Xb.zd.PresetNone, Xb.zd.HasBox, 0, jh, nh, Ob)
+         Nd && (0, Ld.nf)(Jd, 0, 0, Ld.Rd.PresetNone, Ld.Rd.HasBox, 0, ak, Mk, Nd)
```

#### 276. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2850-L2851` → after: `L2850-L2851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2850-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2850-L2851) · [Before (L2850-L2851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2850-L2851)

```diff
-           Ob = Math.min(Math.floor(hb), Xb.zd.MaxBurst);
-         if (!Bb || !Object.hasOwn(Xb.Yb, bb) || !(Ob > 0)) return;
+           Nd = Math.min(Math.floor(kd), Ld.Rd.MaxBurst);
+         if (!pd || !Object.hasOwn(Ld.ec, dd) || !(Nd > 0)) return;
```

#### 277. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2854` → after: `L2854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2854) · [Before (L2854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2854)

```diff
-         Number.isFinite(jh[0] + jh[1] + jh[2]) && (0, Xb.We)(Bb, 0, 0, Xb.Yb[bb], Xb.zd.HasBox, Ob, jh, nh, Ch)
+         Number.isFinite(ak[0] + ak[1] + ak[2]) && (0, Ld.nf)(pd, 0, 0, Ld.ec[dd], Ld.Rd.HasBox, Nd, ak, Mk, Bk)
```

#### 278. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2859` → after: `L2859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2859) · [Before (L2859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2859)

```diff
-         return this.started = !1, this.nextKey = 1, this.live = 0, !bb || (0, Xb.$e)(bb, 0)
+         return this.started = !1, this.nextKey = 1, this.live = 0, !dd || (0, Ld.xf)(dd, 0)
```

#### 279. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2866` → after: `L2866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2866) · [Before (L2866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2866)

```diff
-         hb && (0, Xb.df)(hb, 0, ub) && this.live--
+         kd && (0, Ld.yf)(kd, 0, Jd) && this.live--
```

#### 280. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2883` → after: `L2883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2883) · [Before (L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2883)

```diff
-           gh(bb, this.half) && (0, Xb.gf)(hb, 0, this.key, Xb.zd.HasBox, jh, nh, Ch)
+           bk(dd, this.half) && (0, Ld.Bf)(kd, 0, this.key, Ld.Rd.HasBox, ak, Mk, Bk)
```

#### 281. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2889` → after: `L2889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2889) · [Before (L2889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2889)

```diff
-         ub && hb !== this.rate && (0, Xb.gf)(ub, 0, this.key, 0, Wh, Wh, xh(hb)) && (this.rate = hb, this.emitted ||= hb > 0)
+         Jd && kd !== this.rate && (0, Ld.Bf)(Jd, 0, this.key, 0, qk, qk, Yk(kd)) && (this.rate = kd, this.emitted ||= kd > 0)
```

#### 282. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2893-L2894` → after: `L2893-L2894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2893-L2894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2893-L2894) · [Before (L2893-L2894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2893-L2894)

```diff
-           hb = Math.min(Math.floor(bb), Xb.zd.MaxBurst);
-         ub && hb > 0 && (0, Xb.We)(ub, 0, this.key, Xb.zd.PresetNone, 0, hb, Wh, Wh, Ch) && (this.emitted = !0)
+           kd = Math.min(Math.floor(dd), Ld.Rd.MaxBurst);
+         Jd && kd > 0 && (0, Ld.nf)(Jd, 0, this.key, Ld.Rd.PresetNone, 0, kd, qk, qk, Bk) && (this.emitted = !0)
```

#### 283. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2898` → after: `L2898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2898) · [Before (L2898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2898)

```diff
-           Ob = Math.min(Math.floor(hb), Xb.zd.MaxPoints, Math.floor(ub.length / 4));
+           Nd = Math.min(Math.floor(kd), Ld.Rd.MaxPoints, Math.floor(Jd.length / 4));
```

#### 284. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2900-L2901` → after: `L2900-L2901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2900-L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2900-L2901) · [Before (L2900-L2901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2900-L2901)

```diff
-         const Gb = new Uint8Array(ub.buffer, ub.byteOffset, Ob * Xb.zd.PointBytes);
-         (0, Xb.Ye)(Bb, 0, this.key, Ob, bb, Gb) && (this.emitted = !0)
+         const Wd = new Uint8Array(Jd.buffer, Jd.byteOffset, Nd * Ld.Rd.PointBytes);
+         (0, Ld.rf)(pd, 0, this.key, Nd, dd, Wd) && (this.emitted = !0)
```

#### 285. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2910` → after: `L2910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2910) · [Before (L2910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2910)

```diff
-         (0, Xb.gf)(hb, 0, this.key, 0, Wh, Wh, Bb)
+         (0, Ld.Bf)(kd, 0, this.key, 0, qk, qk, pd)
```

#### 286. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2914` → after: `L2914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2914) · [Before (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2914)

```diff
-         this.stopped = !0, bb && (this.emitted ? (this.rate > 0 && (0, Xb.gf)(bb, 0, this.key, 0, Wh, Wh, xh(0)), setTimeout((() => {
+         this.stopped = !0, dd && (this.emitted ? (this.rate > 0 && (0, Ld.Bf)(dd, 0, this.key, 0, qk, qk, Yk(0)), setTimeout((() => {
```

#### 287. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2925` → after: `L2925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2925) · [Before (L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2925)

```diff
-     const Nh = Pu.n,
+     const Uk = EJ.q,
```

#### 288. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2936` → after: `L2936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2936) · [Before (L2936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2936)

```diff
-         if (bb !== Xb.ad && !Cb(Bb[Gb])) {
+         if (dd !== Ld.gd && !xd(pd[Wd])) {
```

#### 289. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2951` → after: `L2951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2951) · [Before (L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2951)

```diff
-       return bb.length >= ub ? bb : new Int32Array(Math.max(ub, 2 * bb.length))
+       return dd.length >= Jd ? dd : new Int32Array(Math.max(Jd, 2 * dd.length))
```

#### 290. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2963-L2965` → after: `L2963-L2965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2963-L2965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2963-L2965) · [Before (L2963-L2965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2963-L2965)

```diff
-         for (let bb = 0; bb + Xb.Pb.BYTES <= Lb;) {
-           const ub = Xb.Pb.len(Yb, bb);
-           Bb(Xb.Pb.serverId(Yb, bb), Ph(Yb, bb, ub)), bb += Xb.Pb.BYTES + (0, wb.Xd)(ub)
+         for (let dd = 0; dd + Ld.Ub.BYTES <= Zd;) {
+           const Jd = Ld.Ub.len(gd, dd);
+           pd(Ld.Ub.serverId(gd, dd), ck(gd, dd, Jd)), dd += Ld.Ub.BYTES + (0, ld.xe)(Jd)
```

#### 291. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2973` → after: `L2973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2973) · [Before (L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2973)

```diff
-       const Ub = Xb.Pb.kind(bb, ub),
+       const Pd = Ld.Ub.kind(dd, Jd),
```

#### 292. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2976-L2980` → after: `L2976-L2980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2976-L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2976-L2980) · [Before (L2976-L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2976-L2980)

```diff
-       const Yb = Xb.Pb.variation(bb, ub),
-         Sb = Xb.Pb.pose(bb, ub),
-         ab = Xb.Pb.meta(bb, ub),
-         Hb = Xb.Pb.mesh(bb, ub),
-         wb = 0 !== (Xb.Pb.flags(bb, ub) & Xb.Ob.HasOpts),
+       const gd = Ld.Ub.variation(dd, Jd),
+         Cd = Ld.Ub.pose(dd, Jd),
+         Kd = Ld.Ub.meta(dd, Jd),
+         od = Ld.Ub.mesh(dd, Jd),
+         ld = 0 !== (Ld.Ub.flags(dd, Jd) & Ld.Qb.HasOpts),
```

#### 293. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2984-L2988` → after: `L2984-L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2984-L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2984-L2988) · [Before (L2984-L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2984-L2988)

```diff
-         variation: Yb === Xb.ed ? void 0 : null !== (Bb = null !== (Ob = null === Zb || void 0 === Zb ? void 0 : Zb[Yb]) && void 0 !== Ob ? Ob : null === Zb || void 0 === Zb ? void 0 : Zb[0]) && void 0 !== Bb ? Bb : "default",
-         pose: Sb === Xb.dc ? void 0 : null !== (Gb = Xb.Db[Sb]) && void 0 !== Gb ? Gb : Xb.Db[0],
-         metaInfo: ab === Xb.dc ? void 0 : Xb.Oc[ab],
-         meshKind: Hb === Xb.dc ? void 0 : Xb.Lc[Hb],
-         meshOpts: wb ? sh.decode(new Uint8Array(bb.buffer, bb.byteOffset + ub + Xb.Pb.BYTES, hb)) : void 0
+         variation: gd === Ld.ld ? void 0 : null !== (pd = null !== (Nd = null === Qd || void 0 === Qd ? void 0 : Qd[gd]) && void 0 !== Nd ? Nd : null === Qd || void 0 === Qd ? void 0 : Qd[0]) && void 0 !== pd ? pd : "default",
+         pose: Cd === Ld.qc ? void 0 : null !== (Wd = Ld.Kb[Cd]) && void 0 !== Wd ? Wd : Ld.Kb[0],
+         metaInfo: Kd === Ld.qc ? void 0 : Ld.Wc[Kd],
+         meshKind: od === Ld.qc ? void 0 : Ld.Tc[od],
+         meshOpts: ld ? yk.decode(new Uint8Array(dd.buffer, dd.byteOffset + Jd + Ld.Ub.BYTES, kd)) : void 0
```

#### 294. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2995` → after: `L2995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2995) · [Before (L2995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2995)

```diff
-         this.deps = bb, this.wanted = 0, this.MS = !1, this.refused = !1
+         this.deps = dd, this.wanted = 0, this.EC = !1, this.refused = !1
```

#### 295. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2998` → after: `L2998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2998) · [Before (L2998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2998)

```diff
-         return this.MS
+         return this.EC
```

#### 296. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3001` → after: `L3001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3001) · [Before (L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3001)

```diff
-         this.wanted = ub ? this.wanted | bb : this.wanted & ~bb;
+         this.wanted = Jd ? this.wanted | dd : this.wanted & ~dd;
```

#### 297. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3003` → after: `L3003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3003) · [Before (L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3003)

```diff
-         if (hb === this.MS) return;
+         if (kd === this.EC) return;
```

#### 298. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3005` → after: `L3005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3005) · [Before (L3005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3005)

```diff
-         null !== Bb ? (0, Xb.$f)(Bb, 0, hb ? 1 : 0) ? (this.MS = hb, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.MS = !1
+         null !== pd ? (0, Ld.vg)(pd, 0, kd ? 1 : 0) ? (this.EC = kd, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.EC = !1
```

#### 299. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3014` → after: `L3014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3014) · [Before (L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3014)

```diff
-         return this.complete || this.fill(), null !== (ub = this.entries.get("string" === typeof bb ? bb : String(bb))) && void 0 !== ub ? ub : null
+         return this.complete || this.fill(), null !== (Jd = this.entries.get("string" === typeof dd ? dd : String(dd))) && void 0 !== Jd ? Jd : null
```

#### 300. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3073` → after: `L3073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3073) · [Before (L3073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3073)

```diff
-     var Fh = hb(4564);
+     var Vk = kd(4688);
```

#### 301. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3076-L3077` → after: `L3076-L3077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3076) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3076-L3077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3076-L3077) · [Before (L3076-L3077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3076-L3077)

```diff
-       if ("message" !== bb.type || bb.XS !== Fh.fc.NewClientOptions || bb.payloadKind !== wb.Zb.Msgpack) return null;
-       const ub = (0, Nb.e)(bb.payload);
+       if ("message" !== dd.type || dd.IC !== Vk.ac.NewClientOptions || dd.payloadKind !== ld.ic.Msgpack) return null;
+       const Jd = (0, nd.c)(dd.payload);
```

#### 302. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3081-L3082` → after: `L3081-L3082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3081-L3082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3081-L3082) · [Before (L3081-L3082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3081-L3082)

```diff
-     var kh = hb(1133),
-       Th = hb(36234);
+     var Hk = kd(1260),
+       wk = kd(36798);
```

#### 303. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3087-L3089` → after: `L3087-L3089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3087-L3089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3087-L3089) · [Before (L3087-L3089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3087-L3089)

```diff
-         case Xb.Xd.ToggleMenu: {
-           const bb = Xb.G[ub];
-           Ub.i.vp("toggleMenu", void 0 === bb ? "inventory" : `inventory|${bb}`);
+         case Ld.pe.ToggleMenu: {
+           const dd = Ld.K[Jd];
+           Pd.j.nO("toggleMenu", void 0 === dd ? "inventory" : `inventory|${dd}`);
```

#### 304. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3092-L3093` → after: `L3092-L3093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3092-L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3092-L3093) · [Before (L3092-L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3092-L3093)

```diff
-         case Xb.Xd.EditBoard:
-           Ub.i.vp("EditBoard", {
+         case Ld.pe.EditBoard:
+           Pd.j.nO("EditBoard", {
```

#### 305. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3097-L3099` → after: `L3097-L3099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3097-L3099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3097-L3099) · [Before (L3097-L3099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3097-L3099)

```diff
-         case Xb.Xd.EditCodeBlock:
-         case Xb.Xd.ViewCodeBlock:
-           Ub.i.vp("EditCodeBlock", {
+         case Ld.pe.EditCodeBlock:
+         case Ld.pe.ViewCodeBlock:
+           Pd.j.nO("EditCodeBlock", {
```

#### 306. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3101` → after: `L3101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3101) · [Before (L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3101)

```diff
-             canChangePos: bb === Xb.Xd.EditCodeBlock
+             canChangePos: dd === Ld.pe.EditCodeBlock
```

#### 307. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3104-L3105` → after: `L3104-L3105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3104-L3105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3104-L3105) · [Before (L3104-L3105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3104-L3105)

```diff
-         case Xb.Xd.EditCustomLobbyBlock:
-           Ub.i.vp("EditCustomLobbyBlock", {
+         case Ld.pe.EditCustomLobbyBlock:
+           Pd.j.nO("EditCustomLobbyBlock", {
```

#### 308. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3109-L3110` → after: `L3109-L3110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3109-L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3109-L3110) · [Before (L3109-L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3109-L3110)

```diff
-         case Xb.Xd.OpenIronChest:
-           Ub.i.vp("OpenIronChest", {
+         case Ld.pe.OpenIronChest:
+           Pd.j.nO("OpenIronChest", {
```

#### 309. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3114-L3115` → after: `L3114-L3115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3114-L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3114-L3115) · [Before (L3114-L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3114-L3115)

```diff
-         case Xb.Xd.EditNameTag:
-           Ub.i.vp("EditNameTag", null !== (Yb = null === (Sb = Ob.MS()) || void 0 === Sb || null === (ab = Sb.attributes.customAttributes) || void 0 === ab ? void 0 : ab.text) && void 0 !== Yb ? Yb : "");
+         case Ld.pe.EditNameTag:
+           Pd.j.nO("EditNameTag", null !== (gd = null === (Cd = Nd.EC()) || void 0 === Cd || null === (Kd = Cd.attributes.customAttributes) || void 0 === Kd ? void 0 : Kd.text) && void 0 !== gd ? gd : "");
```

#### 310. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3117-L3122` → after: `L3117-L3122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3117-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3117-L3122) · [Before (L3117-L3122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3117-L3122)

```diff
-         case Xb.Xd.EditBook: {
-           var Hb, wb, pb;
-           const bb = null === (Hb = Ob.MS()) || void 0 === Hb ? void 0 : Hb.attributes;
-           Ub.i.vp("EditBook", {
-             pages: (0, kh.X)(null === bb || void 0 === bb || null === (wb = bb.customAttributes) || void 0 === wb ? void 0 : wb.pages),
-             title: null !== (pb = null === bb || void 0 === bb ? void 0 : bb.customDisplayName) && void 0 !== pb ? pb : "Title",
+         case Ld.pe.EditBook: {
+           var od, ld, Od;
+           const dd = null === (od = Nd.EC()) || void 0 === od ? void 0 : od.attributes;
+           Pd.j.nO("EditBook", {
+             pages: (0, Hk.Q)(null === dd || void 0 === dd || null === (ld = dd.customAttributes) || void 0 === ld ? void 0 : ld.pages),
+             title: null !== (Od = null === dd || void 0 === dd ? void 0 : dd.customDisplayName) && void 0 !== Od ? Od : "Title",
```

#### 311. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3127` → after: `L3127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3127) · [Before (L3127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3127)

```diff
-         case Xb.Xd.CantChangeBlock:
+         case Ld.pe.CantChangeBlock:
```

#### 312. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3131-L3132` → after: `L3131-L3132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3131-L3132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3131-L3132) · [Before (L3131-L3132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3131-L3132)

```diff
-               Ob = bb ? hb : Bb;
-             (ub.getClientOption("canChange") || Ob || "You cannot modify this block" !== hb) && Ub.i.vp("showBottomMessage", {
+               Nd = dd ? kd : pd;
+             (Jd.getClientOption("canChange") || Nd || "You cannot modify this block" !== kd) && Pd.j.nO("showBottomMessage", {
```

#### 313. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3138-L3139` → after: `L3138-L3139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3138-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3138-L3139) · [Before (L3138-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3138-L3139)

```diff
-         case Xb.Xd.MiddleBarStart:
-           Ub.i.vp("middleScreenBarInitiate", {
+         case Ld.pe.MiddleBarStart:
+           Pd.j.nO("middleScreenBarInitiate", {
```

#### 314. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3141` → after: `L3141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3141) · [Before (L3141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3141)

```diff
-             Zu: 1 === hb[0],
+             OJ: 1 === kd[0],
```

#### 315. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3145-L3146` → after: `L3145-L3146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3145-L3146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3145-L3146) · [Before (L3145-L3146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3145-L3146)

```diff
-         case Xb.Xd.MiddleBarStop:
-           Ub.i.vp("middleScreenBarRemove");
+         case Ld.pe.MiddleBarStop:
+           Pd.j.nO("middleScreenBarRemove");
```

#### 316. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3148-L3150` → after: `L3148-L3150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3148-L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3148-L3150) · [Before (L3148-L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3148-L3150)

```diff
-         case Xb.Xd.Hitmarker:
-           Ub.i.vp("localGunHitmarker", {
-             Db: 1 === ub
+         case Ld.pe.Hitmarker:
+           Pd.j.nO("localGunHitmarker", {
+             Fd: 1 === Jd
```

#### 317. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3153-L3154` → after: `L3153-L3154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3153-L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3153-L3154) · [Before (L3153-L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3153-L3154)

```diff
-         case Xb.Xd.ShotsLeft:
-           Ub.i.vp("localPlayerNewShotsLeft", Bb);
+         case Ld.pe.ShotsLeft:
+           Pd.j.nO("localPlayerNewShotsLeft", pd);
```

#### 318. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3156-L3157` → after: `L3156-L3157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3156-L3157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3156-L3157) · [Before (L3156-L3157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3156-L3157)

```diff
-         case Xb.Xd.AimingOverlay:
-           Ub.i.vp("aimingOverlay", 3 === (3 & ub) ? "sniper" : "none");
+         case Ld.pe.AimingOverlay:
+           Pd.j.nO("aimingOverlay", 3 === (3 & Jd) ? "sniper" : "none");
```

#### 319. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3159-L3160` → after: `L3159-L3160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3159-L3160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3159-L3160) · [Before (L3159-L3160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3159-L3160)

```diff
-         case Xb.Xd.BottomMessage:
-           Ub.i.vp("showBottomMessage", JSON.parse(Lb()));
+         case Ld.pe.BottomMessage:
+           Pd.j.nO("showBottomMessage", JSON.parse(Zd()));
```

#### 320. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3162-L3163` → after: `L3162-L3163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3162-L3163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3162-L3163) · [Before (L3162-L3163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3162-L3163)

```diff
-         case Xb.Xd.Crosshair:
-           Ob.inaccuracy = (0, sb.g)(Bb), (0, Th.c)().crosshairAccuracy(Ob.inaccuracy);
+         case Ld.pe.Crosshair:
+           Nd.inaccuracy = (0, Ud.g)(pd), (0, wk.e)().crosshairAccuracy(Nd.inaccuracy);
```

#### 321. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3165` → after: `L3165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3165) · [Before (L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3165)

```diff
-         case Xb.Xd.ChargeStage:
+         case Ld.pe.ChargeStage:
```

#### 322. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3167-L3168` → after: `L3167-L3168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3167-L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3167-L3168) · [Before (L3167-L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3167-L3168)

```diff
-         case Xb.Xd.EmoteWheelClose:
-           Ub.i.vp("requestEmoteWheelClose");
+         case Ld.pe.EmoteWheelClose:
+           Pd.j.nO("requestEmoteWheelClose");
```

#### 323. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3170-L3171` → after: `L3170-L3171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e32af52e92b51e586104ff5fcef64ec870af9a7d...build/bloxd.io/x17cru.159bd7ce#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3170-L3171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/x17cru.159bd7ce/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3170-L3171) · [Before (L3170-L3171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e32af52e92b51e586104ff5fcef64ec870af9a7d/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3170-L3171)

```diff
-         case Xb.Xd.BlockMined:
-           Ub.i.vp("localBlockMined");
+         case Ld.pe.BlockMined:
+           Pd.j.nO("localBlockMined");
```
