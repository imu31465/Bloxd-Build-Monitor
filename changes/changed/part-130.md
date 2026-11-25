# Changed — Bundle Modifications Report (Part 130 / 141)

- **Updated at**: `2026-11-25T09:11 JST`
- **Part**: `130 / 141` (**413** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 129](part-129.md) · [Part 131 →](part-131.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderLite.js` (igzsf.a0b73a5f → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/renderLite.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070)

#### 18. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L159)

```diff
-           if (Ot >= mt.l.RenderDeviceLost && Ot <= mt.l.RenderSerialLinks) this.event(`render error ${(0,jt.qe)(Ot)}${null!==(et=null===(Vt=(0,Qt.b)(Ot,qt))||void 0===Vt?void 0:Vt.words)&&void 0!==et?et:""} (detail ${qt})`)
+           if (TB >= GB.n.RenderDeviceLost && TB <= GB.n.RenderSerialLinks) this.event(`render error ${(0,kB.fe)(TB)}${null!==(IB=null===(ZB=(0,hB.b)(TB,JB))||void 0===ZB?void 0:ZB.words)&&void 0!==IB?IB:""} (detail ${JB})`)
```

#### 19. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L163` → after: `L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L163) · [Before (L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L163)

```diff
-         this.event(`render reload: ${tt?"webgpu":"gl"} ${Vt}, losses ${et}${void 0===Ot?"":`: ${Ot}`}`)
+         this.event(`render reload: ${BB?"webgpu":"gl"} ${ZB}, losses ${IB}${void 0===TB?"":`: ${TB}`}`)
```

#### 20. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L171-L173` → after: `L171-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L171-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L171-L173) · [Before (L171-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L171-L173)

```diff
-         const qt = null !== Ot && 0 !== Ot.lastError ? `, last error ${(0,jt.qe)(Ot.lastError)} (detail ${Ot.lastErrorDetail})` : "",
-           Dt = Vt instanceof Error ? `${Vt.name}: ${Vt.message}` : null === Vt || void 0 === Vt ? "" : String(Vt);
-         this.event(`core stopped at ${et}${qt}${Dt&&`: ${Dt}`}`)
+         const JB = null !== TB && 0 !== TB.lastError ? `, last error ${(0,kB.fe)(TB.lastError)} (detail ${TB.lastErrorDetail})` : "",
+           oB = ZB instanceof Error ? `${ZB.name}: ${ZB.message}` : null === ZB || void 0 === ZB ? "" : String(ZB);
+         this.event(`core stopped at ${IB}${JB}${oB&&`: ${oB}`}`)
```

#### 21. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L196)

```diff
-         this.gridLogged || void 0 === et || (this.gridLogged = !0, ut(`gl1 grid ${et}`))
+         this.gridLogged || void 0 === IB || (this.gridLogged = !0, QB(`gl1 grid ${IB}`))
```

#### 22. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L203-L205` → after: `L203-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L203-L205) · [Before (L203-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L203-L205)

```diff
-           Ot = (0, Dt.y)(),
-           qt = void 0 === (null === Vt || void 0 === Vt ? void 0 : Vt.parallelCompile) ? "" : `; parallel compile ${Vt.parallelCompile}`;
-         ut(`renderer gl ${Ot?`${Ot.vendor} / ${Ot.renderer}`:"(not read)"}; terrain fetch ${null!==(tt=null===Vt||void 0===Vt?void 0:Vt.fetch)&&void 0!==tt?tt:"(not noted)"}${qt}`), ut(`renderer caps ${null!==(et=null===Vt||void 0===Vt?void 0:Vt.caps)&&void 0!==et?et:"(not noted) … [truncated]
+           TB = (0, oB.p)(),
+           JB = void 0 === (null === ZB || void 0 === ZB ? void 0 : ZB.parallelCompile) ? "" : `; parallel compile ${ZB.parallelCompile}`;
+         QB(`renderer gl ${TB?`${TB.vendor} / ${TB.renderer}`:"(not read)"}; terrain fetch ${null!==(BB=null===ZB||void 0===ZB?void 0:ZB.fetch)&&void 0!==BB?BB:"(not noted)"}${JB}`), QB(`renderer caps ${null!==(IB=null===ZB||void 0===ZB?void 0:ZB.caps)&&void 0!==IB?IB:"(not noted) … [truncated]
```

#### 23. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L211)

```diff
-       return (0, Et.f)(), ht ??= new Kt(tt), ht
+       return (0, FB.g)(), wB ??= new sB(BB), wB
```

#### 24. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L214)

```diff
-   4859: (tt, et, Vt) => {
+   4879: (BB, IB, ZB) => {
```

#### 25. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L217-L218` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L217-L218) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L217-L218)

```diff
-       const et = tt.adapter ? `${tt.adapter.vendor}/${tt.adapter.architecture}` : "none";
-       return `backend ${tt.backend}: reason ${tt.reason}, source ${tt.source}, adapter ${et}`
+       const IB = BB.adapter ? `${BB.adapter.vendor}/${BB.adapter.architecture}` : "none";
+       return `backend ${BB.backend}: reason ${BB.reason}, source ${BB.source}, adapter ${IB}`
```

#### 26. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L221)

```diff
-       d: () => Ot
+       b: () => TB
```

#### 27. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L224-L226` → after: `L224-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L224-L226) · [Before (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L224-L226)

```diff
-   34235: (tt, et, Vt) => {
-     function Ot(tt) {
-       return `hidden ${tt.changes} changes, ${Math.round(tt.hiddenMs)} ms`
+   34046: (BB, IB, ZB) => {
+     function TB(BB) {
+       return `hidden ${BB.changes} changes, ${Math.round(BB.hiddenMs)} ms`
```

#### 28. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L229)

```diff
-       d: () => qt,
+       b: () => JB,
```

#### 29. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L237` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L237) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L237)

```diff
-         this.changes++, document.hidden ? this.hiddenSinceMs = tt : this.hiddenSinceMs >= 0 && (this.hiddenMs += tt - this.hiddenSinceMs, this.hiddenSinceMs = -1)
+         this.changes++, document.hidden ? this.hiddenSinceMs = BB : this.hiddenSinceMs >= 0 && (this.hiddenMs += BB - this.hiddenSinceMs, this.hiddenSinceMs = -1)
```

#### 30. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L247)

```diff
-   41222: (tt, et, Vt) => {
+   41052: (BB, IB, ZB) => {
```

#### 31. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L250-L251` → after: `L250-L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L250-L251) · [Before (L250-L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L250-L251)

```diff
-       h: () => Dt,
-       k: () => dt
+       e: () => oB,
+       h: () => vB
```

#### 32. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L253-L258` → after: `L253-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L253-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L253-L258) · [Before (L253-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L253-L258)

```diff
-     var Ot = Vt(40761),
-       qt = Vt(40769);
- 
-     function Dt(tt) {
-       if (tt.queries.drawCensus() < Ot.Cb.BYTES) return null;
-       const et = tt.memoryData(tt.scratch(), Ot.Cb.BYTES, 4, "the draw census");
+     var TB = ZB(40633),
+       JB = ZB(40643);
+ 
+     function oB(BB) {
+       if (BB.queries.drawCensus() < TB.qb.BYTES) return null;
+       const IB = BB.memoryData(BB.scratch(), TB.qb.BYTES, 4, "the draw census");
```

#### 33. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L260-L273` → after: `L260-L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L260-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L260-L273) · [Before (L260-L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L260-L273)

```diff
-         terrainOpaque: Ot.Cb.terrainOpaque(et, 0),
-         terrainTransparent: Ot.Cb.terrainTransparent(et, 0),
-         terrainPack: Ot.Cb.terrainPack(et, 0),
-         earthSky: Ot.Cb.earthSky(et, 0),
-         skyMeshes: Ot.Cb.skyMeshes(et, 0),
-         regular: Ot.Cb.regular(et, 0),
-         thin: Ot.Cb.thin(et, 0),
-         line: Ot.Cb.line(et, 0),
-         text: Ot.Cb.text(et, 0),
-         particles: Ot.Cb.particles(et, 0),
-         terrainParts: Ot.Cb.terrainParts(et, 0),
-         terrainCompiling: Ot.Cb.terrainCompiling(et, 0),
-         ringCopiesMax: Ot.Cb.ringCopiesMax(et, 0),
-         ringBusyWrites: Ot.Cb.ringBusyWrites(et, 0)
+         terrainOpaque: TB.qb.terrainOpaque(IB, 0),
+         terrainTransparent: TB.qb.terrainTransparent(IB, 0),
+         terrainPack: TB.qb.terrainPack(IB, 0),
+         earthSky: TB.qb.earthSky(IB, 0),
+         skyMeshes: TB.qb.skyMeshes(IB, 0),
+         regular: TB.qb.regular(IB, 0),
+         thin: TB.qb.thin(IB, 0),
+         line: TB.qb.line(IB, 0),
+         text: TB.qb.text(IB, 0),
+         particles: TB.qb.particles(IB, 0),
+         terrainParts: TB.qb.terrainParts(IB, 0),
+         terrainCompiling: TB.qb.terrainCompiling(IB, 0),
+         ringCopiesMax: TB.qb.ringCopiesMax(IB, 0),
+         ringBusyWrites: TB.qb.ringBusyWrites(IB, 0)
```

#### 34. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L293` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L293) · [Before (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L293)

```diff
-       const tt = (0, qt.g)();
+       const BB = (0, JB.j)();
```

#### 35. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L311)

```diff
-           value: `${mt(et)}`
+           value: `${GB(IB)}`
```

#### 36. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L314` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L314) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L314)

```diff
-           value: `${Vt} opaque / ${Ot} transparent (${qt} shader pack)`
+           value: `${ZB} opaque / ${TB} transparent (${JB} shader pack)`
```

#### 37. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L317` → after: `L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L317) · [Before (L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L317)

```diff
-           value: `${Ht} / ${Xt}`
+           value: `${cB} / ${nB}`
```

#### 38. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L320` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L320) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L320)

```diff
-           value: `${lt} / ${Qt}`
+           value: `${zB} / ${hB}`
```

#### 39. `bundles/bloxd.io/chunks/js/renderLite.js` (Changed code · before: `L323` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-c8a9a2c13459e7b807dd046250ca1f9f2d15ee7987d181a47ba60fa9ed73c070) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderLite.js#L323) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderLite.js#L323)

```diff
-           value: `${dt+jt} / ${Et}`
+           value: `${vB+kB} / ${FB}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/renderProbe.js` (igzsf.a0b73a5f → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/renderProbe.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff)

#### 1. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderProbe.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderProbe.js#L4)

```diff
-   51293: (tt, et, Vt) => {
+   51071: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderProbe.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderProbe.js#L8-L11)

```diff
-     var Ot = Vt(712),
-       qt = Vt(4503),
-       Dt = Vt(2902),
-       mt = Vt(4646);
+     var TB = ZB(671),
+       JB = ZB(4572),
+       oB = ZB(2973),
+       GB = ZB(4698);
```

#### 3. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderProbe.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderProbe.js#L24)

```diff
-       return `${tt}; ${Vt?`os ${Vt.os}, gpu ${null!==(qt=Vt.gpuFamily)&&void 0!==qt?qt:"unknown"} ${null!==(Dt=Vt.gpuModel)&&void 0!==Dt?Dt:"unknown"}`:"device unknown"}, version ${Ot.d}; ${et}`
+       return `${BB}; ${ZB?`os ${ZB.os}, gpu ${null!==(JB=ZB.gpuFamily)&&void 0!==JB?JB:"unknown"} ${null!==(oB=ZB.gpuModel)&&void 0!==oB?oB:"unknown"}`:"device unknown"}, version ${TB.b}; ${IB}`
```

#### 4. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderProbe.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderProbe.js#L29)

```diff
-       const Vt = null !== (et = null === tt || void 0 === tt ? void 0 : tt.backend) && void 0 !== et ? et : "none";
+       const ZB = null !== (IB = null === BB || void 0 === BB ? void 0 : BB.backend) && void 0 !== IB ? IB : "none";
```

#### 5. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L31` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderProbe.js#L31) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderProbe.js#L31)

```diff
-         const tt = (0, mt.f)();
+         const BB = (0, GB.g)();
```

#### 6. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderProbe.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderProbe.js#L36)

```diff
-         return void(0, Dt.n)("renderprobe", `decode and particle probes not run: the renderer is ${Vt}, and they read WebGL2's draws`)
+         return void(0, oB.o)("renderprobe", `decode and particle probes not run: the renderer is ${ZB}, and they read WebGL2's draws`)
```

#### 7. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderProbe.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderProbe.js#L38)

```diff
-       const Ot = (0, mt.f)();
+       const TB = (0, GB.g)();
```

#### 8. `bundles/bloxd.io/chunks/js/renderProbe.js` (Changed code · before: `L43-L44` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979affR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-fb1138ea7860a97a7a38b91fa7e438a98b5dad0ced3b3876a3b3eaea70979aff) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/renderProbe.js#L43-L44) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/renderProbe.js#L43-L44)

```diff
-         of Ht)(0, mt.i)(Ot, Qt, ["1", "pending"], jt, dt).then((tt => {
-         void 0 !== tt && (0, Dt.n)("renderprobe", Xt(lt, tt, (0, qt.e)(!1)))
+         of cB)(0, GB.j)(TB, hB, ["1", "pending"], kB, vB).then((BB => {
+         void 0 !== BB && (0, oB.o)("renderprobe", nB(zB, BB, (0, JB.c)(!1)))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (igzsf.a0b73a5f → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9)

#### 1. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L4)

```diff
-   38860: (tt, et, Vt) => {
+   38681: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L9-L11)

```diff
-     var Ot = Vt(707),
-       qt = Vt(4339),
-       Dt = Vt(38869);
+     var TB = ZB(663),
+       JB = ZB(4416),
+       oB = ZB(38685);
```

#### 3. `bundles/bloxd.io/chunks/js/replayHookSkyblock.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-167b2a1537d745e41bec71b57666dc8cc0cd75ea8461f606342f1eee526a27e9) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/replayHookSkyblock.js#L24)

```diff
-     }(0, Dt.e)("skyblock", ((tt, et) => {
+     }(0, oB.g)("skyblock", ((BB, IB) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/scrollDebug.js` (igzsf.a0b73a5f → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/scrollDebug.js` (12 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d)

#### 1. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/scrollDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/scrollDebug.js#L4)

```diff
-   4861: (tt, et, Vt) => {
+   4881: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L16-L17` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/scrollDebug.js#L16-L17) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/scrollDebug.js#L16-L17)

```diff
-     var Ot = Vt(26),
-       qt = Vt(2902);
+     var TB = ZB(20),
+       JB = ZB(2973);
```

#### 3. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/scrollDebug.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/scrollDebug.js#L59)

```diff
-       return `${Ht[tt]} ${et}`
+       return `${cB[BB]} ${IB}`
```

#### 4. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/scrollDebug.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/scrollDebug.js#L71)

```diff
-         return [ft(qt, `${Dt?`${tt[qt]} -> ${et[qt]}`:String(et[qt])}${mt?` (via ${Vt[qt]}..${Ot[qt]})`:""}`)]
+         return [NB(JB, `${oB?`${BB[JB]} -> ${IB[JB]}`:String(IB[JB])}${GB?` (via ${ZB[JB]}..${TB[JB]})`:""}`)]
```

#### 5. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L81-L82` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/scrollDebug.js#L81-L82) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/scrollDebug.js#L81-L82)

```diff
-       const Vt = (null !== (et = tt.getAttribute("class")) && void 0 !== et ? et : "").trim().replace(/\s+/g, ".").slice(0, 40);
-       return `${tt.tagName.toLowerCase()}${Vt?`.${Vt}`:""}`
+       const ZB = (null !== (IB = BB.getAttribute("class")) && void 0 !== IB ? IB : "").trim().replace(/\s+/g, ".").slice(0, 40);
+       return `${BB.tagName.toLowerCase()}${ZB?`.${ZB}`:""}`
```

#### 6. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/scrollDebug.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/scrollDebug.js#L89)

```diff
-         "auto" !== tt && Vt.push(`${tt} on ${Mt(Ot)}`)
+         "auto" !== BB && ZB.push(`${BB} on ${UB(TB)}`)
```

#### 7. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/scrollDebug.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/scrollDebug.js#L91)

```diff
-       return `${Mt(tt)} touch-action ${et(tt)}${Vt.length>0?` (${Vt.join(", ")})`:""}`
+       return `${UB(BB)} touch-action ${IB(BB)}${ZB.length>0?` (${ZB.join(", ")})`:""}`
```

#### 8. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/scrollDebug.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/scrollDebug.js#L110)

```diff
-           if (this.lines === dt) return this.capped = !0, void this.deps.log(`further changes unlogged: ${dt} lines logged`);
+           if (this.lines === vB) return this.capped = !0, void this.deps.log(`further changes unlogged: ${vB} lines logged`);
```

#### 9. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L112-L115` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/scrollDebug.js#L112-L115) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/scrollDebug.js#L112-L115)

```diff
-           const wt = null === jt ? "no touch yet" : `touch on ${jt.text}, ${Math.round(this.burstStartMs-jt.atMs)} ms before`,
-             bt = null === qt ? "" : `; inner scroll ${Mt(qt)} scrollTop ${lt(qt.scrollTop,1)}`;
-           this.deps.log(`moved over ${Math.round(tt-this.burstStartMs)} ms; ${wt}${bt}: ${yt(Ot,Vt,Ht,Qt)}`)
-         }, this.last = tt.read(), this.low = this.last, this.high = this.last, tt.log(`start: ${wt(this.last)}`)
+           const gB = null === kB ? "no touch yet" : `touch on ${kB.text}, ${Math.round(this.burstStartMs-kB.atMs)} ms before`,
+             WB = null === JB ? "" : `; inner scroll ${UB(JB)} scrollTop ${zB(JB.scrollTop,1)}`;
+           this.deps.log(`moved over ${Math.round(BB-this.burstStartMs)} ms; ${gB}${WB}: ${qB(TB,ZB,cB,hB)}`)
+         }, this.last = BB.read(), this.low = this.last, this.high = this.last, BB.log(`start: ${gB(this.last)}`)
```

#### 10. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/scrollDebug.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/scrollDebug.js#L125)

```diff
-         this.low = Nt(this.low, Ot, Math.min), this.high = Nt(this.high, Ot, Math.max), this.innerScrolled = null !== tt && void 0 !== tt ? tt : this.innerScrolled
+         this.low = yB(this.low, TB, Math.min), this.high = yB(this.high, TB, Math.max), this.innerScrolled = null !== BB && void 0 !== BB ? BB : this.innerScrolled
```

#### 11. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/scrollDebug.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/scrollDebug.js#L133)

```diff
-         inGame: () => "inGame" === Ot.b.get("gameState"),
+         inGame: () => "inGame" === TB.d.get("gameState"),
```

#### 12. `bundles/bloxd.io/chunks/js/scrollDebug.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6dR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-1c9d0170c03addc0c2d00fbb4ce01c45754864a878e6138ccd5bede7cf525f6d) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/scrollDebug.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/scrollDebug.js#L136)

```diff
-           (0, qt.n)("scroll", tt)
+           (0, JB.o)("scroll", BB)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/textureNameTable.js` (igzsf.a0b73a5f → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/textureNameTable.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310)

#### 1. `bundles/bloxd.io/chunks/js/textureNameTable.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-d38a57138b5a2a0d33a7525a47df22137ae3ffec9b04af4648a7cd7a7c0c9310) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/textureNameTable.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/textureNameTable.js#L4)

```diff
-   51334: (tt, et, Vt) => {
+   51120: (BB, IB, ZB) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/texturePackFeed.js` (igzsf.a0b73a5f → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/texturePackFeed.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879)

#### 1. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackFeed.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackFeed.js#L4)

```diff
-   51319: (tt, et, Vt) => {
+   51100: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L8-L10` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackFeed.js#L8-L10) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackFeed.js#L8-L10)

```diff
-     var Ot = Vt(1293),
-       qt = Vt(39),
-       Dt = Vt(51307);
+     var TB = ZB(1258),
+       JB = ZB(36),
+       oB = ZB(51091);
```

#### 3. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L14` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackFeed.js#L14) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackFeed.js#L14)

```diff
-         store: qt.c,
+         store: JB.i,
```

#### 4. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackFeed.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackFeed.js#L18)

```diff
-           const et = await fetch(`${Ot.clientSideServerUrls.texturePackUrl}/${tt}.json`, {
+           const IB = await fetch(`${TB.clientSideServerUrls.texturePackUrl}/${BB}.json`, {
```

#### 5. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackFeed.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackFeed.js#L21)

```diff
-           if (!et.ok) throw new Error(`fetching texture pack ${tt} answered HTTP ${et.status}`);
+           if (!IB.ok) throw new Error(`fetching texture pack ${BB} answered HTTP ${IB.status}`);
```

#### 6. `bundles/bloxd.io/chunks/js/texturePackFeed.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-6816a2ac681bd750233583d12423cb583cf0d2fdd6ce01d05d5876c174d57879) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackFeed.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackFeed.js#L25)

```diff
-       return (0, Dt.i)(Vt), Vt
+       return (0, oB.f)(ZB), ZB
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/texturePackStorage.js` (igzsf.a0b73a5f → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/texturePackStorage.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383)

#### 1. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackStorage.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackStorage.js#L4)

```diff
-   34432: (tt, et, Vt) => {
+   34247: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackStorage.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackStorage.js#L7)

```diff
-       takeOneShotTexturePack: () => Ot.e
+       takeOneShotTexturePack: () => TB.f
```

#### 3. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackStorage.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackStorage.js#L9-L10)

```diff
-     var Ot = Vt(34436),
-       qt = Vt(34444)
+     var TB = ZB(34251),
+       JB = ZB(34253)
```

#### 4. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackStorage.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackStorage.js#L12)

```diff
-   34444: (tt, et, Vt) => {
+   34253: (BB, IB, ZB) => {
```

#### 5. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackStorage.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackStorage.js#L17)

```diff
-     var Ot = Vt(3314);
+     var TB = ZB(3418);
```

#### 6. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackStorage.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackStorage.js#L23)

```diff
-         const et = new BroadcastChannel(Ot.l);
+         const IB = new BroadcastChannel(TB.n);
```

#### 7. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackStorage.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackStorage.js#L35)

```diff
-       return "string" === typeof et ? et : null
+       return "string" === typeof IB ? IB : null
```

#### 8. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackStorage.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackStorage.js#L38)

```diff
-   34436: (tt, et, Vt) => {
+   34251: (BB, IB, ZB) => {
```

#### 9. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L42` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackStorage.js#L41-L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackStorage.js#L42)

```diff
-       e: () => Dt
+       e: () => JB,
+       f: () => oB
```

#### 10. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackStorage.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackStorage.js#L44)

```diff
-     var Ot = Vt(3314);
+     var TB = ZB(3418);
```

#### 11. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackStorage.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackStorage.js#L47)

```diff
-       const Dt = mt(await tt.getItem(Ot.e, et));
+       const oB = GB(await BB.getItem(TB.i, IB));
```

#### 12. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackStorage.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackStorage.js#L49)

```diff
-       const dt = await tt.getItem(Ot.h, et);
+       const vB = await BB.getItem(TB.k, IB);
```

#### 13. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackStorage.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackStorage.js#L51)

```diff
-         await Promise.all([tt.removeItem(Ot.e), tt.removeItem(Ot.h)])
+         await Promise.all([BB.removeItem(TB.i), BB.removeItem(TB.k)])
```

#### 14. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackStorage.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackStorage.js#L54)

```diff
-         source: "string" === typeof dt ? dt : null
+         source: "string" === typeof vB ? vB : null
```

#### 15. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackStorage.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackStorage.js#L59)

```diff
-       return (0, Ot.q)() ? Promise.resolve(null) : qt(tt, !1, (tt => {
+       return (0, TB.t)() ? Promise.resolve(null) : JB(BB, !1, (BB => {
```

#### 16. `bundles/bloxd.io/chunks/js/texturePackStorage.js` (Changed code · before: `L61` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-39e5ff9ac42b33b5acf1e481ff83d620ae8561e6b901c0fc3dfb89e7a8794383) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/texturePackStorage.js#L61) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/texturePackStorage.js#L61)

```diff
-       }), Ot.q)
+       }), TB.t)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (igzsf.a0b73a5f → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (965 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 1. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4)

```diff
-   36616: (tt, et, Vt) => {
+   36398: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6-L7)

```diff
-       e: () => Xt,
-       g: () => dt,
+       d: () => nB,
+       h: () => vB,
```

#### 3. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L12-L14` → after: `L12-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L12-L14) · [Before (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L12-L14)

```diff
-     var Ot = Vt(712),
-       qt = Vt(1842),
-       Dt = Vt(4963);
+     var TB = ZB(671),
+       JB = ZB(1821),
+       oB = ZB(4975);
```

#### 4. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L17)

```diff
-         this.width = tt, this.uQ = et, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(tt * et)
+         this.width = BB, this.ah = IB, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(BB * IB)
```

#### 5. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L24)

```diff
-         this.next = (this.next + 1) % this.uQ, this.size = Math.min(this.size + 1, this.uQ)
+         this.next = (this.next + 1) % this.ah, this.size = Math.min(this.size + 1, this.ah)
```

#### 6. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L30)

```diff
-           Ot = (this.next - this.size + this.uQ) % this.uQ;
+           TB = (this.next - this.size + this.ah) % this.ah;
```

#### 7. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L32)

```diff
-           const Dt = (Ot + qt) % this.uQ * this.width;
+           const oB = (TB + JB) % this.ah * this.width;
```

#### 8. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L44-L47` → after: `L44-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L44-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L44-L47) · [Before (L44-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L44-L47)

```diff
-         hE: 1,
-         qI: 2,
-         mI: 3,
-         my: 4
+         XF: 1,
+         gM: 2,
+         YM: 3,
+         Fq: 4
```

#### 9. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L81` → after: `L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L81) · [Before (L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L81)

```diff
-         this.steps = new mt(dt, Qt), this.events = new mt(Et.length, Qt), this.frames = new mt(ft.length, Qt), this.cameraSets = new mt(Dt.e, 256), this.changes = new mt(yt.length, 256)
+         this.steps = new GB(vB, hB), this.events = new GB(FB.length, hB), this.frames = new GB(NB.length, hB), this.cameraSets = new GB(oB.f, 256), this.changes = new GB(qB.length, 256)
```

#### 10. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L102` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L102) · [Before (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L102)

```diff
-         tt[et + 6] !== jt.my && (null === (Vt = this.rings) || void 0 === Vt || Vt.steps.push(tt, et))
+         BB[IB + 6] !== kB.Fq && (null === (ZB = this.rings) || void 0 === ZB || ZB.steps.push(BB, IB))
```

#### 11. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L133)

```diff
-         return [`look records (${this.startedClient}): ${lt.join(",")}`, ...null !== (tt = null === Vt || void 0 === Vt ? void 0 : Vt.steps.lines()) && void 0 !== tt ? tt : [], `mousemove events: ${Et.join(",")}`, ...null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.event … [truncated]
+         return [`look records (${this.startedClient}): ${zB.join(",")}`, ...null !== (BB = null === ZB || void 0 === ZB ? void 0 : ZB.steps.lines()) && void 0 !== BB ? BB : [], `mousemove events: ${FB.join(",")}`, ...null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.event … [truncated]
```

#### 12. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L142` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L142) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L142)

```diff
-             const Dt = null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.rows(Ot, qt)) && void 0 !== Vt ? Vt : [];
+             const oB = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.rows(TB, JB)) && void 0 !== ZB ? ZB : [];
```

#### 13. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L150-L151` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L150-L151) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L150-L151)

```diff
-           version: Ot.d,
-           client: null !== (Vt = this.startedClient) && void 0 !== Vt ? Vt : "not started",
+           version: TB.b,
+           client: null !== (ZB = this.startedClient) && void 0 !== ZB ? ZB : "not started",
```

#### 14. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L162` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L162) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L162)

```diff
-           zy: null !== document.pointerLockElement,
+           mq: null !== document.pointerLockElement,
```

#### 15. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L177` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L177) · [Before (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L177)

```diff
-         (0, qt.c)(new Blob([et], {
+         (0, JB.d)(new Blob([IB], {
```

#### 16. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L183` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L183) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L183)

```diff
-   39224: (tt, et, Vt) => {
+   39090: (BB, IB, ZB) => {
```

#### 17. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L185)

```diff
-       b: () => Dt,
+       c: () => oB,
```

#### 18. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L188)

```diff
-     var Ot = Vt(31);
+     var TB = ZB(24);
```

#### 19. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L195` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L195) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L195)

```diff
-       "refetchCode" !== tt ? "Plugin|MobAiPlugin|ShowPetUi" !== tt ? Promise.all([Vt.e(109), Vt.e(110), Vt.e(105), Vt.e(107), Vt.e(218)]).then((() => Vt(41997))).then((Vt => {
+       "refetchCode" !== BB ? "Plugin|MobAiPlugin|ShowPetUi" !== BB ? Promise.all([ZB.e(109), ZB.e(110), ZB.e(105), ZB.e(107), ZB.e(218)]).then((() => ZB(41761))).then((ZB => {
```

#### 20. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L201-L202` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L201-L202) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L201-L202)

```diff
-         console.error(`Game message ${tt} failed`, et)
-       })) : Ot.j.sw("showPetUi", et) : Ot.j.sw("refetchCode")
+         console.error(`Game message ${BB} failed`, IB)
+       })) : TB.l.Gq("showPetUi", IB) : TB.l.Gq("refetchCode")
```

#### 21. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L205` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L205) · [Before (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L205)

```diff
-   42829: (tt, et, Vt) => {
+   42581: (BB, IB, ZB) => {
```

#### 22. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L207-L208` → after: `L207-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L207-L208) · [Before (L207-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L207-L208)

```diff
-       b: () => Ot,
-       c: () => qt
+       d: () => TB,
+       g: () => JB
```

#### 23. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L217)

```diff
-   34308: (tt, et, Vt) => {
+   34103: (BB, IB, ZB) => {
```

#### 24. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L220` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L220) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L220)

```diff
-       c: () => jt
+       d: () => kB
```

#### 25. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L222)

```diff
-     var Ot = Vt(26);
+     var TB = ZB(20);
```

#### 26. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L229)

```diff
-       return null === (tt = Ot.b.get("showDistantNametags")) || void 0 === tt || tt
+       return null === (BB = TB.d.get("showDistantNametags")) || void 0 === BB || BB
```

#### 27. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L238)

```diff
-       }()) && void 0 !== tt ? tt : dt() ? 0 : qt
+       }()) && void 0 !== BB ? BB : vB() ? 0 : JB
```

#### 28. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L241)

```diff
-   42820: (tt, et, Vt) => {
+   42579: (BB, IB, ZB) => {
```

#### 29. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L243` → after: `L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L243) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L243)

```diff
-       blockIdOf: () => xj.c,
+       blockIdOf: () => xk.e,
```

#### 30. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L247)

```diff
-       drainTextRerasters: () => od.c,
+       drainTextRerasters: () => Lv.e,
```

#### 31. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L254-L255` → after: `L254-L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L254-L255) · [Before (L254-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L254-L255)

```diff
-       loadTextIcons: () => od.f,
-       rasterText: () => zd.b,
+       loadTextIcons: () => Lv.h,
+       rasterText: () => Xv.c,
```

#### 32. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L257)

```diff
-       readDrawCensus: () => nj.h,
+       readDrawCensus: () => Vk.e,
```

#### 33. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L264-L265` → after: `L264-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L264-L265) · [Before (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L264-L265)

```diff
-       textChanged: () => od.q,
-       warmText: () => zd.e,
+       textChanged: () => Lv.s,
+       warmText: () => Xv.g,
```

#### 34. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L268-L285` → after: `L268-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L268-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L268-L285) · [Before (L268-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L268-L285)

```diff
-     Vt(36757);
-     var Ot = Vt(26),
-       qt = Vt(37053),
-       Dt = Vt(39367),
-       mt = Vt(31),
-       dt = Vt(3470),
-       jt = Vt(37044),
-       Ht = Vt(1387),
-       Xt = Vt(705),
-       Qt = Vt(38473),
-       lt = Vt(4960),
-       Et = Vt(40831),
-       ft = Vt(40761);
-     const wt = ft.Lb / 4,
-       yt = ft.r.PlaySound,
-       Nt = ft.r.SoundReset,
- ... (2 more removed lines; see GitHub link above)
+     ZB(36540);
+     var TB = ZB(20),
+       JB = ZB(36846),
+       oB = ZB(39225),
+       GB = ZB(24),
+       vB = ZB(3586),
+       kB = ZB(36843),
+       cB = ZB(1353),
+       nB = ZB(655),
+       hB = ZB(38287),
+       zB = ZB(4969),
+       FB = ZB(40701),
+       NB = ZB(40633);
+     const gB = NB.yb / 4,
+       qB = NB.k.PlaySound,
+       yB = NB.k.SoundReset,
+ ... (2 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L289)

```diff
-         this.core = tt, this.memory = et, this.audio = Vt, this.serverIds = new Int32Array(256).fill(ft.hd), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
+         this.core = BB, this.memory = IB, this.audio = ZB, this.serverIds = new Int32Array(256).fill(NB.Rc), this.kinds = new Uint16Array(256), this.idStr = new Array(256).fill(null), this.indexById = new Map, this.queries = void 0, this.buffer = null, this.viewPtr = -1, this.vie … [truncated]
```

#### 36. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L294)

```diff
-         return this.scratchPtr < 0 && (this.scratchPtr = this.core.iqt(), this.ensureViews()), this.scratchPtr
+         return this.scratchPtr < 0 && (this.scratchPtr = this.core.mJB(), this.ensureViews()), this.scratchPtr
```

#### 37. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L307` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L307) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L307)

```diff
-         return ft.x.localId(this.apiView, 0)
+         return NB.p.localId(this.apiView, 0)
```

#### 38. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L310)

```diff
-         return ft.x.localDeaths(this.apiView, 0)
+         return NB.p.localDeaths(this.apiView, 0)
```

#### 39. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L314-L318` → after: `L314-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L314-L318) · [Before (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L314-L318)

```diff
-           et = ft.x.entRenderPtr(tt, 0),
-           Vt = ft.x.entVisPtr(tt, 0),
-           Ot = ft.x.entCapacity(tt, 0);
-         if (et !== this.renderPtr || Vt !== this.visPtr || Ot !== this.uQ || this.renderBuffer !== this.buffer) {
-           this.renderPtr = et, this.visPtr = Vt, this.uQ = Ot, this.renderBuffer = this.buffer;
+           IB = NB.p.entRenderPtr(BB, 0),
+           ZB = NB.p.entVisPtr(BB, 0),
+           TB = NB.p.entCapacity(BB, 0);
+         if (IB !== this.renderPtr || ZB !== this.visPtr || TB !== this.ah || this.renderBuffer !== this.buffer) {
+           this.renderPtr = IB, this.visPtr = ZB, this.ah = TB, this.renderBuffer = this.buffer;
```

#### 40. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L321` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L321) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L321)

```diff
-           this.renderCapacity = tt && qt ? Ot : 0, this.render = tt && qt ? tt : new Float32Array(0), this.vis = tt && qt ? qt : new Uint8Array(0)
+           this.renderCapacity = BB && JB ? TB : 0, this.render = BB && JB ? BB : new Float32Array(0), this.vis = BB && JB ? JB : new Uint8Array(0)
```

#### 41. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L326)

```diff
-           return (0, Et.o)(tt, this.memory().buffer, et, Vt, Ot)
+           return (0, FB.u)(BB, this.memory().buffer, IB, ZB, TB)
```

#### 42. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L333` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L333) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L333)

```diff
-           return (0, Et.e)(this.memory().buffer, tt, et, Vt, Ot)
+           return (0, FB.g)(this.memory().buffer, BB, IB, ZB, TB)
```

#### 43. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L339)

```diff
-         this.keepCorruption(new Et.d(tt))
+         this.keepCorruption(new FB.c(BB))
```

#### 44. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L342)

```diff
-         if (!(tt instanceof Et.d)) throw tt;
+         if (!(BB instanceof FB.c)) throw BB;
```

#### 45. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L360-L361` → after: `L360-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L360-L361) · [Before (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L360-L361)

```diff
-             qt = Ht + lt.bb;
-           if (Vt === ft.r.EntitySpawned) {
+             JB = cB + zB.U;
+           if (ZB === NB.k.EntitySpawned) {
```

#### 46. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L363-L367` → after: `L363-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L363-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L363-L367) · [Before (L363-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L363-L367)

```diff
-             if (Ot !== ft.Nb.BYTES) throw vt(Vt, Ht, Ot);
-             const tt = ft.Nb.serverId(Dt, qt);
-             this.spawned(tt, ft.Nb.index(Dt, qt), ft.Nb.kind(Dt, qt)), null === (mt = et.entityAdded) || void 0 === mt || mt.call(et, tt)
-           } else if ((Vt === ft.r.ChunkSlot || Vt === ft.r.EntityInfoChanged) && !(0, ft.xe)(Vt, Dt, qt, Ot, et)) throw vt(Vt, Ht, Ot);
-           Ht = qt + (0, lt.Fe)(Ot)
+             if (TB !== NB.Ab.BYTES) throw OB(ZB, cB, TB);
+             const BB = NB.Ab.serverId(oB, JB);
+             this.spawned(BB, NB.Ab.index(oB, JB), NB.Ab.kind(oB, JB)), null === (GB = IB.entityAdded) || void 0 === GB || GB.call(IB, BB)
+           } else if ((ZB === NB.k.ChunkSlot || ZB === NB.k.EntityInfoChanged) && !(0, NB.me)(ZB, oB, JB, TB, IB)) throw OB(ZB, cB, TB);
+           cB = JB + (0, zB.xe)(TB)
```

#### 47. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L373` → after: `L373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L373) · [Before (L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L373)

```diff
-           throw jt instanceof Et.d && (this.corruption ??= jt), jt
+           throw kB instanceof FB.c && (this.corruption ??= kB), kB
```

#### 48. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L382-L384` → after: `L382-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L382-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L382-L384) · [Before (L382-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L382-L384)

```diff
-             Dt = qt + lt.bb;
-           if ((65535 & tt) === ft.r.EntityDespawned && tt >>> 16 === ft.Nb.BYTES) {
-             const tt = ft.Nb.serverId(Vt, Dt);
+             oB = JB + zB.U;
+           if ((65535 & BB) === NB.k.EntityDespawned && BB >>> 16 === NB.Ab.BYTES) {
+             const BB = NB.Ab.serverId(ZB, oB);
```

#### 49. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L386` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L386) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L386)

```diff
-             if (this.despawned(tt, ft.Nb.index(Vt, Dt))) null === (Ot = et.entityRemoved) || void 0 === Ot || Ot.call(et, tt)
+             if (this.despawned(BB, NB.Ab.index(ZB, oB))) null === (TB = IB.entityRemoved) || void 0 === TB || TB.call(IB, BB)
```

#### 50. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L388` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L388) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L388)

```diff
-           qt = Dt + (0, lt.Fe)(tt >>> 16)
+           JB = oB + (0, zB.xe)(BB >>> 16)
```

#### 51. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L404` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L404) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L404)

```diff
-             Wt = ut + lt.bb;
+             YB = QB + zB.U;
```

#### 52. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L407)

```diff
-           else if (Ot === lt.db.LocalPlayerBound) {
+           else if (TB === zB.X.LocalPlayerBound) {
```

#### 53. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L409` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L409) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L409)

```diff
-             if (Kt !== lt.Rb) throw vt(Ot, ut, Kt);
+             if (sB !== zB.Gb) throw OB(TB, QB, sB);
```

#### 54. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L411` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L411) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L411)

```diff
-           } else if (Ot === lt.db.LocalHurt) {
+           } else if (TB === zB.X.LocalHurt) {
```

#### 55. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L413` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L413) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L413)

```diff
-             if (Kt !== lt.Qb) throw vt(Ot, ut, Kt);
+             if (sB !== zB.Fb) throw OB(TB, QB, sB);
```

#### 56. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L415)

```diff
-           } else if (Ot === lt.db.AttackHit) {
+           } else if (TB === zB.X.AttackHit) {
```

#### 57. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L417)

```diff
-             if (Kt !== lt.d) throw vt(Ot, ut, Kt);
+             if (sB !== zB.b) throw OB(TB, QB, sB);
```

#### 58. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L422-L423` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L422-L423) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L422-L423)

```diff
-             null === (Xt = et.attackHit) || void 0 === Xt || Xt.call(et, tt, Vt, qt, 0 !== (Dt & lt.i.Crit), 0 !== (Dt & lt.i.HitSelf))
-           } else if (Ot === lt.db.PhysicsType) {
+             null === (nB = IB.attackHit) || void 0 === nB || nB.call(IB, BB, ZB, JB, 0 !== (oB & zB.j.Crit), 0 !== (oB & zB.j.HitSelf))
+           } else if (TB === zB.X.PhysicsType) {
```

#### 59. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L425` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L425) · [Before (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L425)

```diff
-             if (Kt !== lt.qc) throw vt(Ot, ut, Kt);
+             if (sB !== zB.hc) throw OB(TB, QB, sB);
```

#### 60. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L427` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L427) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L427)

```diff
-           } else if (Ot === lt.db.VehicleEffect) {
+           } else if (TB === zB.X.VehicleEffect) {
```

#### 61. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L432)

```diff
-           } else if (Ot === lt.db.ZoomChanged) {
+           } else if (TB === zB.X.ZoomChanged) {
```

#### 62. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L434)

```diff
-             if (Kt !== lt.me) throw vt(Ot, ut, Kt);
+             if (sB !== zB.ce) throw OB(TB, QB, sB);
```

#### 63. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L436` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L436) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L436)

```diff
-           } else if (Ot === lt.db.ZoomDisabled) {
+           } else if (TB === zB.X.ZoomDisabled) {
```

#### 64. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L440` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L440) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L440)

```diff
-           } else if (Ot === lt.db.GameCamera) {
+           } else if (TB === zB.X.GameCamera) {
```

#### 65. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L443)

```diff
-           } else if (Ot === ft.r.ChunkSlot || Ot === ft.r.EntityInfoChanged);
+           } else if (TB === NB.k.ChunkSlot || TB === NB.k.EntityInfoChanged);
```

#### 66. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L451-L452` → after: `L451-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L451-L452) · [Before (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L451-L452)

```diff
-           } else if (Ot >= ft.wd && Ot <= ft.xd && Ot !== lt.db.EnvLighting) {
-             if (!(0, ft.xe)(Ot, mt, Wt, Kt, et)) throw vt(Ot, ut, Kt);
+           } else if (TB >= NB.fd && TB <= NB.jd && TB !== zB.X.EnvLighting) {
+             if (!(0, NB.me)(TB, GB, YB, sB, IB)) throw OB(TB, QB, sB);
```

#### 67. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L459` → after: `L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L459) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L459)

```diff
-           ut = Wt + (0, lt.Fe)(Kt)
+           QB = YB + (0, zB.xe)(sB)
```

#### 68. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L466)

```diff
-         const et = ft.x.audioViewPtr(this.apiView, 0),
+         const IB = NB.p.audioViewPtr(this.apiView, 0),
```

#### 69. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L469` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L469) · [Before (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L469)

```diff
-         (null === (tt = Ot) || void 0 === tt ? void 0 : tt.buffer) === Vt && Ot.byteOffset === et || (Ot = (0, Et.e)(Vt, et, ft.A.BYTES, 8, "the audio view"), this.audioView = Ot), Ot && this.audio.applyListener(Ot)
+         (null === (BB = TB) || void 0 === BB ? void 0 : BB.buffer) === ZB && TB.byteOffset === IB || (TB = (0, FB.g)(ZB, IB, NB.q.BYTES, 8, "the audio view"), this.audioView = TB), TB && this.audio.applyListener(TB)
```

#### 70. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L472` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L472) · [Before (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L472)

```diff
-         return this.indexById.get("number" === typeof tt ? tt : +tt)
+         return this.indexById.get("number" === typeof BB ? BB : +BB)
```

#### 71. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L475)

```diff
-         return tt !== ft.hd && tt === ft.x.localId(this.apiView, 0)
+         return BB !== NB.Rc && BB === NB.p.localId(this.apiView, 0)
```

#### 72. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L479` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L479) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L479)

```diff
-         return this.readPosition("number" === typeof tt ? tt : +tt, et) ? et : null
+         return this.readPosition("number" === typeof BB ? BB : +BB, IB) ? IB : null
```

#### 73. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L484)

```diff
-           for (let tt = 0; tt < 3; tt++) et[tt] = ft.x.localPos(Vt, 0, tt);
+           for (let BB = 0; BB < 3; BB++) IB[BB] = NB.p.localPos(ZB, 0, BB);
```

#### 74. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L494` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L494) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L494)

```diff
-         for (let Dt = 0; Dt < 3; Dt++) et[Dt] = this.render[qt + Dt] + ft.x.origin(Vt, 0, Dt);
+         for (let oB = 0; oB < 3; oB++) IB[oB] = this.render[JB + oB] + NB.p.origin(ZB, 0, oB);
```

#### 75. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L505` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L505) · [Before (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L505)

```diff
-         return 0 === Vt ? null : 0 !== (Vt & ft.ue.Alive)
+         return 0 === ZB ? null : 0 !== (ZB & NB.ke.Alive)
```

#### 76. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L509` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L509) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L509)

```diff
-         return void 0 === et ? this.isLocal("number" === typeof tt ? tt : +tt) ? "Player" : null : ut(this.kinds[et])
+         return void 0 === IB ? this.isLocal("number" === typeof BB ? BB : +BB) ? "Player" : null : QB(this.kinds[IB])
```

#### 77. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L512` → after: `L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L512) · [Before (L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L512)

```diff
-         if (et >= 1048576) throw new Et.d(`entity ${tt} spawned at index ${et}`);
+         if (IB >= 1048576) throw new FB.c(`entity ${BB} spawned at index ${IB}`);
```

#### 78. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L517)

```diff
-         return this.indexById.get(tt) === et && (this.indexById.delete(tt), Vt = !0), et < this.serverIds.length && this.serverIds[et] === tt && (this.serverIds[et] = ft.hd, this.kinds[et] = 0, this.idStr[et] = null), Vt
+         return this.indexById.get(BB) === IB && (this.indexById.delete(BB), ZB = !0), IB < this.serverIds.length && this.serverIds[IB] === BB && (this.serverIds[IB] = NB.Rc, this.kinds[IB] = 0, this.idStr[IB] = null), ZB
```

#### 79. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L524` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L524) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L524)

```diff
-         const Ot = new Int32Array(Vt).fill(ft.hd);
+         const TB = new Int32Array(ZB).fill(NB.Rc);
```

#### 80. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L536` → after: `L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L536) · [Before (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L536)

```diff
-         this.buffer = tt, this.viewPtr < 0 && (this.viewPtr = this.core.Yqt()), this.view = new DataView(tt, this.viewPtr, ft.x.BYTES), this.rereadDirectory()
+         this.buffer = BB, this.viewPtr < 0 && (this.viewPtr = this.core.XJB()), this.view = new DataView(BB, this.viewPtr, NB.p.BYTES), this.rereadDirectory()
```

#### 81. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L541` → after: `L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L541) · [Before (L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L541)

```diff
-       return tt >>> ft.c === ft.u.Item
+       return BB >>> NB.c === NB.o.Item
```

#### 82. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L546` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L546) · [Before (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L546)

```diff
-       const Ot = tt & ft.g;
+       const TB = BB & NB.d;
```

#### 83. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L548-L552` → after: `L548-L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L548-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L548-L552) · [Before (L548-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L548-L552)

```diff
-         case ft.u.Lifeform:
-           return null !== (et = Xt.f[Ot]) && void 0 !== et ? et : null;
-         case ft.u.Throwable:
-           return null !== (Vt = Qt.m[Ot]) && void 0 !== Vt ? Vt : null;
-         case ft.u.Mesh:
+         case NB.o.Lifeform:
+           return null !== (IB = nB.i[TB]) && void 0 !== IB ? IB : null;
+         case NB.o.Throwable:
+           return null !== (ZB = hB.k[TB]) && void 0 !== ZB ? ZB : null;
+         case NB.o.Mesh:
```

#### 84. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L554` → after: `L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L554) · [Before (L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L554)

```diff
-         case ft.u.Audio:
+         case NB.o.Audio:
```

#### 85. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L556` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L556) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L556)

```diff
-         case ft.u.Item:
+         case NB.o.Item:
```

#### 86. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L565` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L565) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L565)

```diff
-       if (Vt < lt.Pd.HEAD_BYTES) return null;
+       if (ZB < zB.Jd.HEAD_BYTES) return null;
```

#### 87. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L569-L570` → after: `L569-L570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L569-L570) · [Before (L569-L570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L569-L570)

```diff
-         mt = lt.Pd.HEAD_BYTES + (0, lt.Fe)(qt);
-       if (Ot !== lt.Pd.UPDATE && Ot !== lt.Pd.REMOVE || qt > Vt || mt + Dt > Vt) return null;
+         GB = zB.Jd.HEAD_BYTES + (0, zB.xe)(JB);
+       if (TB !== zB.Jd.UPDATE && TB !== zB.Jd.REMOVE || JB > ZB || GB + oB > ZB) return null;
```

#### 88. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L577` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L577) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L577)

```diff
-         name: dt(lt.Pd.HEAD_BYTES, qt),
+         name: vB(zB.Jd.HEAD_BYTES, JB),
```

#### 89. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L583-L598` → after: `L583-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L583-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L583-L598) · [Before (L583-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L583-L598)

```diff
-       return new Et.d(`event ${tt} at ${et} of ${Vt} bytes`)
-     }
-     var Wt = Vt(391),
-       St = Vt(1308),
-       ct = Vt(39224),
-       Rt = Vt(2037),
-       It = Vt(41206),
-       Pt = Vt(1993),
-       Zt = Vt(39378),
-       Lt = Vt(39410),
-       Ft = Vt(39392),
-       kt = Vt(40812),
-       Gt = Vt(2465),
-       zt = Vt(39375),
-       ot = Vt(39406);
-     const rt = Math.max(ft.Ab.BYTES, ft.tb.BYTES, ft.vb.BYTES);
+       return new FB.c(`event ${BB} at ${IB} of ${ZB} bytes`)
+     }
+     var YB = ZB(360),
+       iB = ZB(1281),
+       pB = ZB(39090),
+       aB = ZB(2020),
+       HB = ZB(41045),
+       MB = ZB(1956),
+       jB = ZB(39245),
+       PB = ZB(39270),
+       RB = ZB(39251),
+       rB = ZB(40682),
+       mB = ZB(2489),
+       XB = ZB(39242),
+       LB = ZB(39262);
+     const eB = Math.max(NB.ob.BYTES, NB.fb.BYTES, NB.gb.BYTES);
```

#### 90. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L601` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L601) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L601)

```diff
-       if (!(0, ot.e)(tt)) return null;
+       if (!(0, LB.g)(BB)) return null;
```

#### 91. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L603` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L603) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L603)

```diff
-       return (0 | et) === et ? et : null
+       return (0 | IB) === IB ? IB : null
```

#### 92. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L607` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L607) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L607)

```diff
-         this.api = tt, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, zt.k)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.pO = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], thi … [truncated]
+         this.api = BB, this.bodyHeading = 0, this.viewHeading = 0, this.defaultPose = (0, XB.l)(), this.defaultPoseRead = !1, this.defaultFov = 0, this.baseFov = 0, this.aspect = 1, this.rT = null, this.entityLive = !1, this.entityFeet = [0, 0, 0], this.entityAim = [0, 0, 0], thi … [truncated]
```

#### 93. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L610-L612` → after: `L610-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L610-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L610-L612) · [Before (L610-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L610-L612)

```diff
-         this.defaultPoseRead = !1, this.pO = null;
-         const tt = this.api.queries.directorView() >= ft.Ab.BYTES ? this.scratchView() : null;
-         null !== tt && (this.defaultFov = (0, Pt.G)(ft.Ab.fov(tt, 0)), this.baseFov = (0, Pt.G)(ft.Ab.baseFov(tt, 0)), this.aspect = ft.Ab.aspect(tt, 0), this.bodyHeading = ft.Ab.bodyHeading(tt, 0))
+         this.defaultPoseRead = !1, this.rT = null;
+         const BB = this.api.queries.directorView() >= NB.ob.BYTES ? this.scratchView() : null;
+         null !== BB && (this.defaultFov = (0, MB.K)(NB.ob.fov(BB, 0)), this.baseFov = (0, MB.K)(NB.ob.baseFov(BB, 0)), this.aspect = NB.ob.aspect(BB, 0), this.bodyHeading = NB.ob.bodyHeading(BB, 0))
```

#### 94. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L621` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L621) · [Before (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L621)

```diff
-         const tt = ft.x.localId(this.api.apiView, 0);
+         const BB = NB.p.localId(this.api.apiView, 0);
```

#### 95. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L633-L634` → after: `L633-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L633-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L633-L634) · [Before (L633-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L633-L634)

```diff
-         const Vt = ft.x.localId(this.api.apiView, 0);
-         return et === Vt && Vt !== ft.hd ? this.viewHeading : this.readEntity(tt) ? this.entityHeading : null
+         const ZB = NB.p.localId(this.api.apiView, 0);
+         return IB === ZB && ZB !== NB.Rc ? this.viewHeading : this.readEntity(BB) ? this.entityHeading : null
```

#### 96. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L638` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L638) · [Before (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L638)

```diff
-         return Ot < Vt - 1e-6 ? Ot : null
+         return TB < ZB - 1e-6 ? TB : null
```

#### 97. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L645` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L645) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L645)

```diff
-         const et = this.api.queries.directorDefaultPose() >= ft.tb.BYTES ? this.scratchView() : null;
+         const IB = this.api.queries.directorDefaultPose() >= NB.fb.BYTES ? this.scratchView() : null;
```

#### 98. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L647-L648` → after: `L647-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L647-L648) · [Before (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L647-L648)

```diff
-         for (let Vt = 0; Vt < 3; Vt++) tt.position[Vt] = ft.tb.eye(et, 0, Vt);
-         return tt.heading = ft.tb.heading(et, 0), tt.pitch = ft.tb.pitch(et, 0), tt
+         for (let ZB = 0; ZB < 3; ZB++) BB.position[ZB] = NB.fb.eye(IB, 0, ZB);
+         return BB.heading = NB.fb.heading(IB, 0), BB.pitch = NB.fb.pitch(IB, 0), BB
```

#### 99. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L662-L664` → after: `L662-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L662-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L662-L664) · [Before (L662-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L662-L664)

```diff
-         if (et === this.pO) return this.entityLive;
-         this.pO = et;
-         const Vt = this.api.queries.directorEntity(et) >= ft.vb.BYTES ? this.scratchView() : null;
+         if (IB === this.rT) return this.entityLive;
+         this.rT = IB;
+         const ZB = this.api.queries.directorEntity(IB) >= NB.gb.BYTES ? this.scratchView() : null;
```

#### 100. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L666-L667` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L666-L667) · [Before (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L666-L667)

```diff
-         for (let Ot = 0; Ot < 3; Ot++) this.entityFeet[Ot] = ft.vb.feet(Vt, 0, Ot), this.entityAim[Ot] = this.entityFeet[Ot];
-         return this.entityAim[1] += ft.vb.eyeHeight(Vt, 0), this.entityHeading = ft.vb.heading(Vt, 0), !0
+         for (let TB = 0; TB < 3; TB++) this.entityFeet[TB] = NB.gb.feet(ZB, 0, TB), this.entityAim[TB] = this.entityFeet[TB];
+         return this.entityAim[1] += NB.gb.eyeHeight(ZB, 0), this.entityHeading = NB.gb.heading(ZB, 0), !0
```

#### 101. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L673` → after: `L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L673) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L673)

```diff
-         return null !== Vt && Vt.buffer === et && Vt.byteOffset === tt ? Vt : (this.scratch = this.api.memoryData(tt, rt, 8, "the director's record"), this.scratch)
+         return null !== ZB && ZB.buffer === IB && ZB.byteOffset === BB ? ZB : (this.scratch = this.api.memoryData(BB, eB, 8, "the director's record"), this.scratch)
```

#### 102. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L689-L691` → after: `L689-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L689-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L689-L691) · [Before (L689-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L689-L691)

```diff
-         this.options = tt, this.sQ = void 0, this.director = void 0, this.latest = it, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
-           JR: 0,
-           uR: 0
+         this.options = BB, this.vz = void 0, this.director = void 0, this.latest = lB, this.pending = void 0, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.look = {
+           YH: 0,
+           iH: 0
```

#### 103. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L695` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L695) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L695)

```diff
-         }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.Of = new Int32Array(3 * ft.$d), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * ft.$d), this.sQ = new At(tt.api), this.direct … [truncated]
+         }, this.engaged = !1, this.calledThisFrame = !1, this.holding = !1, this.lastCallMs = 0, this.answeredPose = !1, this.pg = new Int32Array(3 * NB.Md), this.centresLen = 0, this.centresUnsent = !1, this.next = new Int32Array(3 * NB.Md), this.vz = new fB(BB.api), this.direct … [truncated]
```

#### 104. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L700` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L700) · [Before (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L700)

```diff
-           et = (0, kt.c)(tt)
+           IB = (0, rB.e)(BB)
```

#### 105. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L714-L715` → after: `L714-L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L714-L715) · [Before (L714-L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L714-L715)

```diff
-         const Qt = this.answeredPose && 0 === (Ot & ft.xb.Held);
-         return this.answeredPose = jt !== ft.rb.None, this.holding = this.answeredPose && !Qt, null === (mt = (dt = this.options).showFacing) || void 0 === mt || mt.call(dt, this.holding ? this.facing : null), jt
+         const hB = this.answeredPose && 0 === (TB & NB.kb.Held);
+         return this.answeredPose = kB !== NB.db.None, this.holding = this.answeredPose && !hB, null === (GB = (vB = this.options).showFacing) || void 0 === GB || GB.call(vB, this.holding ? this.facing : null), kB
```

#### 106. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L723` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L723) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L723)

```diff
-           sQ: mt
+           vz: GB
```

#### 107. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L726` → after: `L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L726) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L726)

```diff
-         if (0 !== (Ot & ft.xb.Held) || mt.setViewHeading((0, Zt.r)(mt.bodyHeading)), void 0 !== this.pending) {
+         if (0 !== (TB & NB.kb.Held) || GB.setViewHeading((0, jB.v)(GB.bodyHeading)), void 0 !== this.pending) {
```

#### 108. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L730` → after: `L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L730) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L730)

```diff
-         this.readLook((0, Gt.d)(et), (0, Gt.d)(Vt), Ot, (0, Gt.d)(qt), (0, Gt.d)(Dt));
+         this.readLook((0, mB.f)(IB), (0, mB.f)(ZB), TB, (0, mB.f)(JB), (0, mB.f)(oB));
```

#### 109. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L732` → after: `L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L732) · [Before (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L732)

```diff
-         if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !dt) return ft.rb.None;
+         if (this.syncShownSettings(), this.writeCentres(this.director.getLoadingPositions()), this.hidden() || this.screen().show(this.director.getScreenFade(), this.director.getSettings()), !vB) return NB.db.None;
```

#### 110. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L734-L735` → after: `L734-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L734-L735) · [Before (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L734-L735)

```diff
-         if (0 === this.options.api.queries.directorPose(jt, Ht, Xt, (0, Zt.r)(dt.heading), (0, Zt.g)(dt.pitch), (0, Pt.l)(dt.fov))) return ft.rb.None;
-         if ("default" === this.director.getSettings().mode) return ft.rb.Pose;
+         if (0 === this.options.api.queries.directorPose(kB, cB, nB, (0, jB.v)(vB.heading), (0, jB.h)(vB.pitch), (0, MB.l)(vB.fov))) return NB.db.None;
+         if ("default" === this.director.getSettings().mode) return NB.db.Pose;
```

#### 111. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L738` → after: `L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L738) · [Before (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L738)

```diff
-             return ft.rb.FaceCamera;
+             return NB.db.FaceCamera;
```

#### 112. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L740` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L740) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L740)

```diff
-             return ft.rb.FaceCursor;
+             return NB.db.FaceCursor;
```

#### 113. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L742)

```diff
-             return ft.rb.FaceMovement
+             return NB.db.FaceMovement
```

#### 114. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L757` → after: `L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L757) · [Before (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L757)

```diff
-         this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new Ft.d(this.sQ), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (tt = (et = this.opt … [truncated]
+         this.engaged && this.screen().clear(), this.engaged = !1, this.holding = !1, this.director = new RB.c(this.vz), this.pending = this.latest, this.shownSettings = null, this.facing = "movement", this.mouseTurns = "view", this.answeredPose = !1, null === (BB = (IB = this.opt … [truncated]
```

#### 115. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L763` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L763) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L763)

```diff
-         const et = (0, Lt.f)(tt);
+         const IB = (0, PB.d)(BB);
```

#### 116. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L768-L769` → after: `L768-L769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L768-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L768-L769) · [Before (L768-L769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L768-L769)

```diff
-           mt = 0 !== (Vt & ft.xb.LookPointed);
-         if (null === this.mouseTurns && !mt) return Dt.JR = 0, Dt.uR = 0, void(Dt.pointedAt = void 0);
+           GB = 0 !== (ZB & NB.kb.LookPointed);
+         if (null === this.mouseTurns && !GB) return oB.YH = 0, oB.iH = 0, void(oB.pointedAt = void 0);
```

#### 117. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L773` → after: `L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L773) · [Before (L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L773)

```diff
-           sQ: jt
+           vz: kB
```

#### 118. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L775` → after: `L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L775) · [Before (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L775)

```diff
-         jt.setViewHeading((0, Lt.d)(jt.getViewHeading(), tt, et, dt, "look" === this.mouseTurns, Dt))
+         kB.setViewHeading((0, PB.b)(kB.getViewHeading(), BB, IB, vB, "look" === this.mouseTurns, oB))
```

#### 119. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L779` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L779) · [Before (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L779)

```diff
-           Vt = Math.min(tt.length, ft.$d);
+           ZB = Math.min(BB.length, NB.Md);
```

#### 120. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L781` → after: `L781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L781) · [Before (L781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L781)

```diff
-           for (let Vt = 0; Vt < 3; Vt++) et[3 * Ot + Vt] = Math.floor(tt[Ot][Vt] / ft.K);
+           for (let ZB = 0; ZB < 3; ZB++) IB[3 * TB + ZB] = Math.floor(BB[TB][ZB] / NB.u);
```

#### 121. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L786` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L786) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L786)

```diff
-           Of: et,
+           pg: IB,
```

#### 122. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L795` → after: `L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L795) · [Before (L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L795)

```diff
-         null !== tt && (0, ft.Lf)(tt, 0, this.Of, this.centresLen) && (this.centresUnsent = !1)
+         null !== BB && (0, NB.Ff)(BB, 0, this.pg, this.centresLen) && (this.centresUnsent = !1)
```

#### 123. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L799` → after: `L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L799) · [Before (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L799)

```diff
-         return null !== (tt = null === (et = (Vt = this.options).screen) || void 0 === et ? void 0 : et.call(Vt)) && void 0 !== tt ? tt : Yt
+         return null !== (BB = null === (IB = (ZB = this.options).screen) || void 0 === IB ? void 0 : IB.call(ZB)) && void 0 !== BB ? BB : AB
```

#### 124. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L803` → after: `L803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L803) · [Before (L803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L803)

```diff
-         return (null !== (tt = this.options.isPageHidden) && void 0 !== tt ? tt : Bt)()
+         return (null !== (BB = this.options.isPageHidden) && void 0 !== BB ? BB : tB)()
```

#### 125. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L807` → after: `L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L807) · [Before (L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L807)

```diff
-         return null !== (tt = null === (et = (Vt = this.options).now) || void 0 === et ? void 0 : et.call(Vt)) && void 0 !== tt ? tt : performance.now()
+         return null !== (BB = null === (IB = (ZB = this.options).now) || void 0 === IB ? void 0 : IB.call(ZB)) && void 0 !== BB ? BB : performance.now()
```

#### 126. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L810-L814` → after: `L810-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L810-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L810-L814) · [Before (L810-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L810-L814)

```diff
-     var xt = Vt(40967);
-     const Tt = ft.K * ft.K * ft.K,
-       gt = Math.log2(ft.K),
-       st = ft.K - 1,
-       nt = ft.U.BYTES / 4,
+     var xB = ZB(40811);
+     const EB = NB.u * NB.u * NB.u,
+       DB = Math.log2(NB.u),
+       KB = NB.u - 1,
+       VB = NB.C.BYTES / 4,
```

#### 127. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L818` → after: `L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L818) · [Before (L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L818)

```diff
-       return tt * ft.K * ft.K + et * ft.K + Vt
+       return BB * NB.u * NB.u + IB * NB.u + ZB
```

#### 128. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L838` → after: `L838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L838) · [Before (L838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L838)

```diff
-         this.table = tt, this.slot = et, this.generation = Vt, this.epoch = Ot, this.hl = new Ve(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = te, this.dataPtr = 0, this.dataBuffer = null, this.dataS … [truncated]
+         this.table = BB, this.slot = IB, this.generation = ZB, this.epoch = TB, this.mz = new II(this), this.writes = null, this.writeCount = 0, this.shownVersion = 0, this.shownCore = -1, this.shownWrites = -1, this.data = SB, this.dataPtr = 0, this.dataBuffer = null, this.dataS … [truncated]
```

#### 129. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L845` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L845) · [Before (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L845)

```diff
-           et = this.layers ??= new Uint16Array(ft.K);
+           IB = this.layers ??= new Uint16Array(NB.u);
```

#### 130. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L902-L903` → after: `L902-L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L902-L903) · [Before (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L902-L903)

```diff
-       const Vt = tt[et * ft.K];
-       for (let Ot = 0; Ot < ft.K; Ot++) {
+       const ZB = BB[IB * NB.u];
+       for (let TB = 0; TB < NB.u; TB++) {
```

#### 131. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L905` → after: `L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L905) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L905)

```diff
-         for (let et = 0; et < ft.K; et++)
+         for (let IB = 0; IB < NB.u; IB++)
```

#### 132. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L920-L921` → after: `L920-L921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L920-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L920-L921) · [Before (L920-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L920-L921)

```diff
-         if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, Dt === ft.V.ResetAll) return this.chunks.clear(), void this.epoch++;
-         if (Dt !== ft.V.Stored && Dt !== ft.V.Unloaded) throw new Et.d(`ChunkSlot flags ${Dt}`);
+         if (this.lastKey = -1, this.lastChunk = void 0, this.stamp++, oB === NB.E.ResetAll) return this.chunks.clear(), void this.epoch++;
+         if (oB !== NB.E.Stored && oB !== NB.E.Unloaded) throw new FB.c(`ChunkSlot flags ${oB}`);
```

#### 133. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L924` → after: `L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L924) · [Before (L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L924)

```diff
-         if (Dt === ft.V.Unloaded) return void this.chunks.delete(mt);
+         if (oB === NB.E.Unloaded) return void this.chunks.delete(GB);
```

#### 134. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L934-L935` → after: `L934-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L934-L935) · [Before (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L934-L935)

```diff
-           et = ft.x.chunkSlotsPtr(tt, 0),
-           Vt = ft.x.chunkSlotsLen(tt, 0);
+           IB = NB.p.chunkSlotsPtr(BB, 0),
+           ZB = NB.p.chunkSlotsLen(BB, 0);
```

#### 135. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L940-L941` → after: `L940-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L940-L941) · [Before (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L940-L941)

```diff
-           et = ft.x.walkThroughPtr(tt, 0),
-           Vt = ft.x.walkThroughLen(tt, 0);
+           IB = NB.p.walkThroughPtr(BB, 0),
+           ZB = NB.p.walkThroughLen(BB, 0);
```

#### 136. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L954` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L954) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L954)

```diff
-         tt !== this.slotsBuffer && (this.slotsBuffer = tt, this.slots = null !== (et = (0, Et.o)(Uint32Array, tt, this.slotsPtr, this.slotsLen * nt, "the chunk directory")) && void 0 !== et ? et : me);
+         BB !== this.slotsBuffer && (this.slotsBuffer = BB, this.slots = null !== (IB = (0, FB.u)(Uint32Array, BB, this.slotsPtr, this.slotsLen * VB, "the chunk directory")) && void 0 !== IB ? IB : oI);
```

#### 137. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L960` → after: `L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L960) · [Before (L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L960)

```diff
-           return null !== (Vt = (0, Et.o)(Uint16Array, tt, et, Tt, "a chunk's voxels")) && void 0 !== Vt ? Vt : te
+           return null !== (ZB = (0, FB.u)(Uint16Array, BB, IB, EB, "a chunk's voxels")) && void 0 !== ZB ? ZB : SB
```

#### 138. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L962` → after: `L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L962) · [Before (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L962)

```diff
-           if (!(Ot instanceof Et.d)) throw Ot;
+           if (!(TB instanceof FB.c)) throw TB;
```

#### 139. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L968` → after: `L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L968) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L968)

```diff
-         return null !== (Ot = this.chunks.get((0, xt.e)(tt, et, Vt))) && void 0 !== Ot ? Ot : null
+         return null !== (TB = this.chunks.get((0, xB.e)(BB, IB, ZB))) && void 0 !== TB ? TB : null
```

#### 140. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L981` → after: `L981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L981) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L981)

```diff
-         return null !== (Ot = dt.written(jt)) && void 0 !== Ot ? Ot : dt.voxelData()[jt]
+         return null !== (TB = vB.written(kB)) && void 0 !== TB ? TB : vB.voxelData()[kB]
```

#### 141. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L990` → after: `L990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L990) · [Before (L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L990)

```diff
-         return null !== (Ot = null === (qt = this.chunks.get((0, xt.e)(tt, et, Vt))) || void 0 === qt ? void 0 : qt.rf) && void 0 !== Ot ? Ot : null
+         return null !== (TB = null === (JB = this.chunks.get((0, xB.e)(BB, IB, ZB))) || void 0 === JB ? void 0 : JB.KN) && void 0 !== TB ? TB : null
```

#### 142. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L993` → after: `L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L993) · [Before (L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L993)

```diff
-         const jt = ft.K;
+         const kB = NB.u;
```

#### 143. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1007` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1007) · [Before (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1007)

```diff
-                 bt = wt.JE,
+                 WB = gB.PF,
```

#### 144. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1043` → after: `L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1043) · [Before (L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1043)

```diff
-         tt !== this.walkBuffer && (this.walkBuffer = tt, this.walk = null !== (et = (0, Et.o)(Uint32Array, tt, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== et ? et : me);
+         BB !== this.walkBuffer && (this.walkBuffer = BB, this.walk = null !== (IB = (0, FB.u)(Uint32Array, BB, this.walkPtr, this.walkLen, "the walk-through bits")) && void 0 !== IB ? IB : oI);
```

#### 145. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1052-L1058` → after: `L1052-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1052-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1052-L1058) · [Before (L1052-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1052-L1058)

```diff
-     var He = Vt(38728),
-       Xe = Vt(38056),
-       Qe = Vt(37028),
-       le = Vt(36872),
-       Ee = Vt(34333),
-       fe = Vt(39334),
-       we = Vt(229);
+     var kI = ZB(38555),
+       cI = ZB(37855),
+       nI = ZB(36827),
+       hI = ZB(36636),
+       zI = ZB(34143),
+       FI = ZB(39193),
+       NI = ZB(201);
```

#### 146. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1521-L1524` → after: `L1521-L1524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1521-L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1521-L1524) · [Before (L1521-L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1521-L1524)

```diff
-     var Ce = Vt(36999),
-       ue = Vt(37008),
-       Ke = Vt(37004),
-       he = Vt(287);
+     var CI = ZB(36789),
+       QI = ZB(36807),
+       sI = ZB(36800),
+       wI = ZB(256);
```

#### 147. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1570` → after: `L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1570) · [Before (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1570)

```diff
-     var We = Vt(41080);
+     var YI = ZB(40910);
```

#### 148. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1580` → after: `L1580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1580) · [Before (L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1580)

```diff
-       ce = we.e.Yy * we.e.playerEyeToHeightRatio,
+       pI = NI.f.fq * NI.f.playerEyeToHeightRatio,
```

#### 149. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1628` → after: `L1628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1628) · [Before (L1628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1628)

```diff
-         this.createHowl = tt, this.listener = et, this.now = Vt, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(ye.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Fl … [truncated]
+         this.createHowl = BB, this.listener = IB, this.now = ZB, this.errors = 0, this.sheets = new Map, this.unloading = new Uint16Array(gI.length), this.live = new Map, this.core = new Map, this.level = 1, this.master = 1, this.pose = new Float64Array(9), this.nextPose = new Fl … [truncated]
```

#### 150. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1638-L1639` → after: `L1638-L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1638-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1638-L1639) · [Before (L1638-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1638-L1639)

```diff
-             const Ht = 0 !== (qt & ft.ne.Loop);
-             qt & ft.ne.TwoD ? this.start(Ot, !1, mt, Dt, dt, Ht) : this.startSpatial(Ot, mt, Dt, dt, Ht, tt, et, Vt, jt, this.earDistSq(tt, et, Vt))
+             const cB = 0 !== (JB & NB.be.Loop);
+             JB & NB.be.TwoD ? this.start(TB, !1, GB, oB, vB, cB) : this.startSpatial(TB, GB, oB, vB, cB, BB, IB, ZB, kB, this.earDistSq(BB, IB, ZB))
```

#### 151. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1655` → after: `L1655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1655) · [Before (L1655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1655)

```diff
-             void 0 !== qt && this.fade(qt, et, Vt, 0 !== (Ot & ft.me.StopAfter))
+             void 0 !== JB && this.fade(JB, IB, ZB, 0 !== (TB & NB.Zd.StopAfter))
```

#### 152. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1683` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1683) · [Before (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1683)

```diff
-           if (ue.c.has(ye[tt])) continue;
+           if (QI.e.has(gI[BB])) continue;
```

#### 153. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1707` → after: `L1707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1707) · [Before (L1707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1707)

```diff
-             of et) this.sheets.delete(tt), "loaded" === Ot.state() ? (0, Ce.c)(Ot, Vt) : (Ot.unload(), Vt())
+             of IB) this.sheets.delete(BB), "loaded" === TB.state() ? (0, CI.e)(TB, ZB) : (TB.unload(), ZB())
```

#### 154. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1711` → after: `L1711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1711) · [Before (L1711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1711)

```diff
-         if (tt < ft.r.PlaySound || tt > ft.r.SoundReset) return !1;
+         if (BB < NB.k.PlaySound || BB > NB.k.SoundReset) return !1;
```

#### 155. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1713` → after: `L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1713) · [Before (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1713)

```diff
-           return (0, ft.xe)(tt, et, Vt, Ot, this.handlers)
+           return (0, NB.me)(BB, IB, ZB, TB, this.handlers)
```

#### 156. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1720` → after: `L1720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1720) · [Before (L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1720)

```diff
-         for (let Ot = 0; Ot < 3; Ot++) et[2 - Ot] = ft.A.listener(tt, 0, Ot), et[5 - Ot] = ft.A.forward(tt, 0, Ot), et[8 - Ot] = ft.A.up(tt, 0, Ot);
+         for (let TB = 0; TB < 3; TB++) IB[2 - TB] = NB.q.listener(BB, 0, TB), IB[5 - TB] = NB.q.forward(BB, 0, TB), IB[8 - TB] = NB.q.up(BB, 0, TB);
```

#### 157. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1734` → after: `L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1734) · [Before (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1734)

```diff
-         if (dt < 0) return We.c;
+         if (vB < 0) return YI.d;
```

#### 158. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1745` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1745) · [Before (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1745)

```diff
-         if (!Number.isFinite(jt) || !Number.isFinite(Ht) || !Number.isFinite(Xt)) return We.c;
+         if (!Number.isFinite(kB) || !Number.isFinite(cB) || !Number.isFinite(nB)) return YI.d;
```

#### 159. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1751` → after: `L1751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1751) · [Before (L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1751)

```diff
-           if (Qt = tt * tt + et * et + Vt * Vt, Qt > qt * qt) return We.c
+           if (hB = BB * BB + IB * IB + ZB * ZB, hB > JB * JB) return YI.d
```

#### 160. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1754` → after: `L1754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1754) · [Before (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1754)

```diff
-         return lt ? this.gameSound(lt.howl, lt.id, !0) : We.c
+         return zB ? this.gameSound(zB.howl, zB.id, !0) : YI.d
```

#### 161. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1781` → after: `L1781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1781) · [Before (L1781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1781)

```diff
-             const dt = this.level > 0 ? Vt / this.level : Vt > 0 && null !== (Dt = null === (mt = this.live.get(et)) || void 0 === mt ? void 0 : mt.rel) && void 0 !== Dt ? Dt : 0;
+             const vB = this.level > 0 ? ZB / this.level : ZB > 0 && null !== (oB = null === (GB = this.live.get(IB)) || void 0 === GB ? void 0 : GB.rel) && void 0 !== oB ? oB : 0;
```

#### 162. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1787` → after: `L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1787) · [Before (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1787)

```diff
-               return tt > 0 && tt < 1 / 0 ? tt : 1
+               return BB > 0 && BB < 1 / 0 ? BB : 1
```

#### 163. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1792` → after: `L1792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1792) · [Before (L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1792)

```diff
-             return (null !== (tt = null === (Vt = this.live.get(et)) || void 0 === Vt ? void 0 : Vt.rel) && void 0 !== tt ? tt : 0) * this.level
+             return (null !== (BB = null === (ZB = this.live.get(IB)) || void 0 === ZB ? void 0 : ZB.rel) && void 0 !== BB ? BB : 0) * this.level
```

#### 164. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1796` → after: `L1796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1796) · [Before (L1796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1796)

```diff
-             return null !== (tt = null === (Vt = this.live.get(et)) || void 0 === Vt ? void 0 : Vt.rel) && void 0 !== tt ? tt : 0
+             return null !== (BB = null === (ZB = this.live.get(IB)) || void 0 === ZB ? void 0 : ZB.rel) && void 0 !== BB ? BB : 0
```

#### 165. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1803` → after: `L1803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1803) · [Before (L1803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1803)

```diff
-                 refDistance: Qe.f
+                 refDistance: nI.h
```

#### 166. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1821-L1822` → after: `L1821-L1822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1821-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1821-L1822) · [Before (L1821-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1821-L1822)

```diff
-           const Vt = Me[tt] === Ie ? null : (0, Ke.i)(ae[tt]),
-             Ot = (0, Ke.e)(Pe(et), Math.sqrt(Ht), jt);
+           const ZB = UI[BB] === HI ? null : (0, sI.j)(yI[BB]),
+             TB = (0, sI.f)(MI(IB), Math.sqrt(cB), kB);
```

#### 167. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1929-L1930` → after: `L1929-L1930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1929-L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1929-L1930) · [Before (L1929-L1930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1929-L1930)

```diff
-     var ze = Vt(40792),
-       oe = Vt(39338);
+     var XI = ZB(40664),
+       LI = ZB(39195);
```

#### 168. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1933` → after: `L1933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1933) · [Before (L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1933)

```diff
-         this.key = tt, this.model = et, this.host = Ot, this.uQ = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.sqt = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
+         this.key = BB, this.model = IB, this.host = TB, this.ah = void 0, this.records = void 0, this.origin = [0, 0, 0], this.count = 0, this.AJB = Number.NaN, this.sentOrigin = [Number.NaN, Number.NaN, Number.NaN], this.dirtyList = [], this.isDirty = void 0, this.tail = void 0, … [truncated]
```

#### 169. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1939` → after: `L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1939) · [Before (L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1939)

```diff
-         !this.df && tt >= 0 && tt < this.uQ && tt < ft.tc.Max && this.Sf(tt, tt + 1)
+         !this.WN && BB >= 0 && BB < this.ah && BB < NB.jc.Max && this.uN(BB, BB + 1)
```

#### 170. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1942-L1943` → after: `L1942-L1943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1942-L1943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1942-L1943) · [Before (L1942-L1943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1942-L1943)

```diff
-         if (this.df) return;
-         (tt = Math.min(Math.max(Math.floor(tt), 0), this.uQ, ft.tc.Max)) > this.count && this.Sf(this.count, tt), this.count = tt;
+         if (this.WN) return;
+         (BB = Math.min(Math.max(Math.floor(BB), 0), this.ah, NB.jc.Max)) > this.count && this.uN(this.count, BB), this.count = BB;
```

#### 171. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1948` → after: `L1948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1948) · [Before (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1948)

```diff
-         } = this, qt = this.sqt !== tt, Dt = Vt[0] !== et[0] || Vt[1] !== et[1] || Vt[2] !== et[2];
+         } = this, JB = this.AJB !== BB, oB = ZB[0] !== IB[0] || ZB[1] !== IB[1] || ZB[2] !== IB[2];
```

#### 172. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1959-L1961` → after: `L1959-L1961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1959-L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1959-L1961) · [Before (L1959-L1961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1959-L1961)

```diff
-             et = tt * He.d,
-             Vt = Xt * ft.tc.Bytes,
-             qt = 0 !== jt[et + He.f] ? ft.tc.Hidden : 0;
+             IB = BB * kI.b,
+             ZB = nB * NB.jc.Bytes,
+             JB = 0 !== kB[IB + kI.f] ? NB.jc.Hidden : 0;
```

#### 173. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1964` → after: `L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1964) · [Before (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1964)

```diff
-         if ((0, ft.af)(mt, 0, this.key, tt, et, dt, this.tailOf(dt))) {
+         if ((0, NB.Se)(GB, 0, this.key, BB, IB, vB, this.tailOf(vB))) {
```

#### 174. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1966` → after: `L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1966) · [Before (L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1966)

```diff
-           Ot.length = 0, this.sqt = tt, Vt[0] = et[0], Vt[1] = et[1], Vt[2] = et[2]
+           TB.length = 0, this.AJB = BB, ZB[0] = IB[0], ZB[1] = IB[1], ZB[2] = IB[2]
```

#### 175. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1970` → after: `L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1970) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1970)

```diff
-         (tt = Math.ceil(tt)) <= this.uQ || this.df || (this.records = (0, oe.b)(this.records, new Float32Array(tt * He.d)), this.isDirty = (0, oe.b)(this.isDirty, new Uint8Array(tt)), this.tail = new Uint8Array(tt * ft.tc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
+         (BB = Math.ceil(BB)) <= this.ah || this.WN || (this.records = (0, LI.c)(this.records, new Float32Array(BB * kI.b)), this.isDirty = (0, LI.c)(this.isDirty, new Uint8Array(BB)), this.tail = new Uint8Array(BB * NB.jc.Bytes), this.tailView = new DataView(this.tail.buffer), th … [truncated]
```

#### 176. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1973` → after: `L1973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1973) · [Before (L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1973)

```diff
-         this.df || (this.df = !0, this.host.df(this, this.made ? this.key : null))
+         this.WN || (this.WN = !0, this.host.WN(this, this.made ? this.key : null))
```

#### 177. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1982` → after: `L1982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1982) · [Before (L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1982)

```diff
-           this.made = (0, ft.ef)(tt, 0, this.key, et, Vt, Ot)
+           this.made = (0, NB.We)(BB, 0, this.key, IB, ZB, TB)
```

#### 178. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1987` → after: `L1987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1987) · [Before (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1987)

```diff
-         const et = tt * ft.tc.Bytes;
+         const IB = BB * NB.jc.Bytes;
```

#### 179. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L1998` → after: `L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR1998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1998) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L1998)

```diff
-     var Ue = Vt(707);
+     var uI = ZB(663);
```

#### 180. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2012` → after: `L2012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2012) · [Before (L2012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2012)

```diff
-         if (Vt = tt, !Ue.o.includes(Vt)) return null;
+         if (ZB = BB, !uI.m.includes(ZB)) return null;
```

#### 181. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2014` → after: `L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2014) · [Before (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2014)

```diff
-         const Ot = new ie(++this.keys, Xt.f.indexOf(tt), et, this.host);
+         const TB = new lI(++this.keys, nB.i.indexOf(BB), IB, this.host);
```

#### 182. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2029` → after: `L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2029) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2029)

```diff
-         this.key = tt, this.lifeform = et, this.scale = Vt, this.host = Ot, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.df = !1, this.sync()
+         this.key = BB, this.lifeform = IB, this.scale = ZB, this.host = TB, this.feet = [0, 0, 0], this.yaw = 0, this.visible = !1, this.owed = 1, this.WN = !1, this.sync()
```

#### 183. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2032` → after: `L2032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2032) · [Before (L2032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2032)

```diff
-         this.df || (this.feet[0] = tt[0], this.feet[1] = tt[1], this.feet[2] = tt[2], this.yaw = et, this.owed |= 2, this.sync())
+         this.WN || (this.feet[0] = BB[0], this.feet[1] = BB[1], this.feet[2] = BB[2], this.yaw = IB, this.owed |= 2, this.sync())
```

#### 184. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2035` → after: `L2035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2035) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2035)

```diff
-         this.df || tt === this.visible || (this.visible = tt, this.owed |= 4, this.sync())
+         this.WN || BB === this.visible || (this.visible = BB, this.owed |= 4, this.sync())
```

#### 185. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2038` → after: `L2038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2038) · [Before (L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2038)

```diff
-         this.df || (this.df = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
+         this.WN || (this.WN = !0, this.owed = 1 & this.owed ? 0 : 8, this.sync())
```

#### 186. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2042` → after: `L2042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2042) · [Before (L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2042)

```diff
-         return this.write(tt) ? (this.host.settled(this, this.df), !0) : (this.host.owes(this), !1)
+         return this.write(BB) ? (this.host.settled(this, this.WN), !0) : (this.host.owes(this), !1)
```

#### 187. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2047` → after: `L2047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2047) · [Before (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2047)

```diff
-           if (!(0, ft.lf)(tt, 0, this.key, this.lifeform, this.scale)) return !1;
+           if (!(0, NB.$e)(BB, 0, this.key, this.lifeform, this.scale)) return !1;
```

#### 188. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2050` → after: `L2050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2050) · [Before (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2050)

```diff
-         const et = (2 & this.owed ? ft.cd.Pose : 0) | (4 & this.owed ? ft.cd.Visible : 0);
+         const IB = (2 & this.owed ? NB.Ic.Pose : 0) | (4 & this.owed ? NB.Ic.Visible : 0);
```

#### 189. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2052` → after: `L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2052) · [Before (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2052)

```diff
-           if (!(0, ft.jf)(tt, 0, this.key, et, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
+           if (!(0, NB._e)(BB, 0, this.key, IB, this.visible ? 1 : 0, this.feet, this.yaw)) return !1;
```

#### 190. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2056` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2056) · [Before (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2056)

```diff
-           if (!(0, ft.hf)(tt, 0, this.key)) return !1;
+           if (!(0, NB.Xe)(BB, 0, this.key)) return !1;
```

#### 191. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2062` → after: `L2062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2062) · [Before (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2062)

```diff
-     var Ye = Vt(41189);
+     var AI = ZB(41028);
```

#### 192. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2065` → after: `L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2065) · [Before (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2065)

```diff
-       return (0, Ye.d)(), (0, ft.Pf)(tt, et, Vt, Ot)
+       return (0, AI.b)(), (0, NB.Hf)(BB, IB, ZB, TB)
```

#### 193. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2067-L2068` → after: `L2067-L2068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2067-L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2067-L2068) · [Before (L2067-L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2067-L2068)

```diff
-     var pe = Vt(39345),
-       xe = Vt(40777);
+     var bI = ZB(39202),
+       xI = ZB(40649);
```

#### 194. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2081` → after: `L2081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2081) · [Before (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2081)

```diff
-     const DV = Xe.e;
+     const JZ = cI.h;
```

#### 195. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2085` → after: `L2085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2085) · [Before (L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2085)

```diff
-         Vt = et && Xe.e[et.mainMultiblock];
+         ZB = IB && cI.h[IB.mainMultiblock];
```

#### 196. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2095` → after: `L2095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2095) · [Before (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2095)

```diff
-       if (null === tt || void 0 === tt) return ft.hd;
+       if (null === BB || void 0 === BB) return NB.Rc;
```

#### 197. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2097` → after: `L2097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2097) · [Before (L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2097)

```diff
-       return Number.isInteger(et) && et >= -2147483648 && et <= 2147483647 && String(et) === String(tt) ? et : ft.hd
+       return Number.isInteger(IB) && IB >= -2147483648 && IB <= 2147483647 && String(IB) === String(BB) ? IB : NB.Rc
```

#### 198. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2101` → after: `L2101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2101) · [Before (L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2101)

```diff
-       return (0, ft.Wf)(tt, 0, et, null !== Vt && void 0 !== Vt ? Vt : Number.NaN)
+       return (0, NB.Of)(BB, 0, IB, null !== ZB && void 0 !== ZB ? ZB : Number.NaN)
```

#### 199. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2105` → after: `L2105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2105) · [Before (L2105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2105)

```diff
-         this.deps = tt, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new pe.b((() => this.tables.getClientOption … [truncated]
+         this.deps = BB, this.api = void 0, this.live = void 0, this.chunks = void 0, this.items = void 0, this.tables = void 0, this.meshKeys = 0, this.liveMeshes = new Set, this.poolKeys = 0, this.livePools = new Set, this.cameraTurn = new bI.c((() => this.tables.getClientOption … [truncated]
```

#### 200. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2112` → after: `L2112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2112) · [Before (L2112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2112)

```diff
-           df: (tt, et) => {
+           WN: (BB, IB) => {
```

#### 201. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2121` → after: `L2121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2121) · [Before (L2121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2121)

```diff
-         if (!this.isLocal(tt)) throw new Error(`Attempted to ${et} for a player that is not the local player`)
+         if (!this.isLocal(BB)) throw new Error(`Attempted to ${IB} for a player that is not the local player`)
```

#### 202. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2124-L2125` → after: `L2124-L2125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2124-L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2124-L2125) · [Before (L2124-L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2124-L2125)

```diff
-         const et = this.api.YM(tt);
-         if (!et) throw new Error(`Entity ${tt} has no replicated position`);
+         const IB = this.api.aU(BB);
+         if (!IB) throw new Error(`Entity ${BB} has no replicated position`);
```

#### 203. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2143` → after: `L2143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2143) · [Before (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2143)

```diff
-         this.assertLocal(tt, "open shop"), mt.j.sw("showShopFromServer", {
+         this.assertLocal(BB, "open shop"), GB.l.Gq("showShopFromServer", {
```

#### 204. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2145` → after: `L2145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2145) · [Before (L2145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2145)

```diff
-           Ht: Vt
+           kB: ZB
```

#### 205. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2154` → after: `L2154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2154) · [Before (L2154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2154)

```diff
-         mt.j.sw("chat", {
+         GB.l.Gq("chat", {
```

#### 206. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2163` → after: `L2163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2163) · [Before (L2163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2163)

```diff
-         return et === ft.hd ? void 0 : (0, ze.h)(this.api, et)
+         return IB === NB.Rc ? void 0 : (0, XI.k)(this.api, IB)
```

#### 207. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2167` → after: `L2167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2167) · [Before (L2167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2167)

```diff
-         return Vt !== ft.hd && (0, ze.g)(this.api, Vt, et)
+         return ZB !== NB.Rc && (0, XI.h)(this.api, ZB, IB)
```

#### 208. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2183-L2184` → after: `L2183-L2184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2183-L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2183-L2184) · [Before (L2183-L2184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2183-L2184)

```diff
-         if (!Object.hasOwn(ft.vd, Vt)) throw new Error(`Unknown other-entity setting ${Vt}`);
-         const qt = ft.vd[Vt],
+         if (!Object.hasOwn(NB.dd, ZB)) throw new Error(`Unknown other-entity setting ${ZB}`);
+         const JB = NB.dd[ZB],
```

#### 209. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2186-L2188` → after: `L2186-L2188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2186-L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2186-L2188) · [Before (L2186-L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2186-L2188)

```diff
-         if (Dt === ft.hd || !this.deps.beforeWrite()) return;
-         const mt = (0, kt.g)(Ot);
-         if (mt.length > 16384) throw new Error(`The other-entity setting ${Vt}'s value is over 16384 bytes`);
+         if (oB === NB.Rc || !this.deps.beforeWrite()) return;
+         const GB = (0, rB.i)(TB);
+         if (GB.length > 16384) throw new Error(`The other-entity setting ${ZB}'s value is over 16384 bytes`);
```

#### 210. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2200` → after: `L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2200) · [Before (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2200)

```diff
-           Vt = (et === ft.hd ? 0 : this.api.queries.directorEntity(et)) >= ft.vb.BYTES ? this.api.memoryData(this.api.scratch(), ft.vb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
+           ZB = (IB === NB.Rc ? 0 : this.api.queries.directorEntity(IB)) >= NB.gb.BYTES ? this.api.memoryData(this.api.scratch(), NB.gb.BYTES, 8, "getDrawnHeading's DirectorEntity") : null;
```

#### 211. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2202` → after: `L2202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2202) · [Before (L2202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2202)

```diff
-         if (1 === ft.vb.headingIsDrawn(Vt, 0)) return ft.vb.heading(Vt, 0);
+         if (1 === NB.gb.headingIsDrawn(ZB, 0)) return NB.gb.heading(ZB, 0);
```

#### 212. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2204` → after: `L2204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2204) · [Before (L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2204)

```diff
-         return this.isLocal(tt) && 0 === (ft.x.playerFlags(Ot, 0) & ft.Pd.FreeCam) ? ft.x.heading(Ot, 0) : null
+         return this.isLocal(BB) && 0 === (NB.p.playerFlags(TB, 0) & NB.Bd.FreeCam) ? NB.p.heading(TB, 0) : null
```

#### 213. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2207-L2210` → after: `L2207-L2210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2207-L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2207-L2210) · [Before (L2207-L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2207-L2210)

```diff
-         const tt = ft.x.playerFlags(this.api.apiView, 0);
-         return 0 === (tt & ft.Pd.Replay) && this.api.readDrawnPosition(this.api.localId, se) ? {
-           onGround: 0 !== (tt & ft.Pd.OnGround),
-           jumpHeld: 0 !== (tt & ft.Pd.JumpHeld)
+         const BB = NB.p.playerFlags(this.api.apiView, 0);
+         return 0 === (BB & NB.Bd.Replay) && this.api.readDrawnPosition(this.api.localId, KI) ? {
+           onGround: 0 !== (BB & NB.Bd.OnGround),
+           jumpHeld: 0 !== (BB & NB.Bd.JumpHeld)
```

#### 214. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2213-L2214` → after: `L2213-L2214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2213-L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2213-L2214) · [Before (L2213-L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2213-L2214)

```diff
-       bVt(tt) {
-         return this.isLocal(tt) ? this.items.Pd() : null
+       FZB(BB) {
+         return this.isLocal(BB) ? this.items.sv() : null
```

#### 215. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2224` → after: `L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2224) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2224)

```diff
-         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.Pd()
+         return !1 === this.api.isAlive(this.api.localId) ? null : this.items.sv()
```

#### 216. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2228` → after: `L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2228) · [Before (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2228)

```diff
-         const Vt = (0, le.b)(Ot.b.get("crosshairGameView"), Ot.b.get("crosshairShownOverride"));
+         const ZB = (0, hI.d)(TB.d.get("crosshairGameView"), TB.d.get("crosshairShownOverride"));
```

#### 217. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2233-L2235` → after: `L2233-L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2233-L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2233-L2235) · [Before (L2233-L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2233-L2235)

```diff
-           dt = 0 === (ft.x.playerFlags(this.api.apiView, 0) & ft.Pd.ZoomFirstPerson),
-           jt = null !== (et = this.tables.getClientOption("gunshotOrigin")) && void 0 !== et ? et : null;
-         return (0, le.d)({
+           vB = 0 === (NB.p.playerFlags(this.api.apiView, 0) & NB.Bd.ZoomFirstPerson),
+           kB = null !== (IB = this.tables.getClientOption("gunshotOrigin")) && void 0 !== IB ? IB : null;
+         return (0, hI.g)({
```

#### 218. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2238` → after: `L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2238) · [Before (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2238)

```diff
-         }, dt, (0, Ee.d)(), jt)
+         }, vB, (0, zI.c)(), kB)
```

#### 219. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2241` → after: `L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2241) · [Before (L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2241)

```diff
-         Ot.b.set({
+         TB.d.set({
```

#### 220. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2258` → after: `L2258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2258) · [Before (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2258)

```diff
-         if (this.isLocal(tt)) return 0 !== (ft.x.playerFlags(this.api.apiView, 0) & ft.Pd.Crouching);
+         if (this.isLocal(BB)) return 0 !== (NB.p.playerFlags(this.api.apiView, 0) & NB.Bd.Crouching);
```

#### 221. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2260` → after: `L2260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2260) · [Before (L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2260)

```diff
-         return et !== ft.hd && 1 === this.api.queries.entityCrouching(et)
+         return IB !== NB.Rc && 1 === this.api.queries.entityCrouching(IB)
```

#### 222. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2266` → after: `L2266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2266) · [Before (L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2266)

```diff
-         return 0 !== (ft.x.playerFlags(this.api.apiView, 0) & ft.Pd.AttemptingBreak)
+         return 0 !== (NB.p.playerFlags(this.api.apiView, 0) & NB.Bd.AttemptingBreak)
```

#### 223. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2269` → after: `L2269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2269) · [Before (L2269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2269)

```diff
-         return this.live.Itt()
+         return this.live.lBB()
```

#### 224. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2273` → after: `L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2273) · [Before (L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2273)

```diff
-         for (let et = 0; et < 3; et++) tV.origin[et] = ft.x.gtt(tt, 0, et), tV.direction[et] = ft.x.actionDir(tt, 0, et);
+         for (let IB = 0; IB < 3; IB++) SI.origin[IB] = NB.p.vIB(BB, 0, IB), SI.direction[IB] = NB.p.actionDir(BB, 0, IB);
```

#### 225. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2289-L2290` → after: `L2289-L2290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2289-L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2289-L2290) · [Before (L2289-L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2289-L2290)

```diff
-       Zet(tt, et, Vt, Ot, qt) {
-         return 1 === this.api.queries.terrainBlocked(Ot, tt, et, Vt, dV(null !== qt && void 0 !== qt ? qt : null))
+       HIB(BB, IB, ZB, TB, JB) {
+         return 1 === this.api.queries.terrainBlocked(TB, BB, IB, ZB, GZ(null !== JB && void 0 !== JB ? JB : null))
```

#### 226. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2302` → after: `L2302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2302) · [Before (L2302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2302)

```diff
-         return this.chunks.qd(tt, et, Vt)
+         return this.chunks.KG(BB, IB, ZB)
```

#### 227. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2308` → after: `L2308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2308) · [Before (L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2308)

```diff
-         return 1 === Ot ? mt : mt.rate(Ot)
+         return 1 === TB ? GB : GB.rate(TB)
```

#### 228. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2317-L2320` → after: `L2317-L2320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2317-L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2317-L2320) · [Before (L2317-L2320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2317-L2320)

```diff
-         if (!mt) return We.c;
-         const dt = null === Vt || void 0 === Vt ? void 0 : Vt.qt,
-           jt = null !== (qt = null === Vt || void 0 === Vt ? void 0 : Vt.maxHearDist) && void 0 !== qt ? qt : Qe.c,
-           Ht = null !== (Dt = null === Vt || void 0 === Vt ? void 0 : Vt.refDistance) && void 0 !== Dt ? Dt : Qe.f;
+         if (!GB) return YI.d;
+         const vB = null === ZB || void 0 === ZB ? void 0 : ZB.JB,
+           kB = null !== (JB = null === ZB || void 0 === ZB ? void 0 : ZB.maxHearDist) && void 0 !== JB ? JB : nI.g,
+           cB = null !== (oB = null === ZB || void 0 === ZB ? void 0 : ZB.refDistance) && void 0 !== oB ? oB : nI.h;
```

#### 229. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2326` → after: `L2326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2326) · [Before (L2326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2326)

```diff
-             if (!this.api.readPosition(tt, Te)) return We.c;
+             if (!this.api.readPosition(BB, EI)) return YI.d;
```

#### 230. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2336-L2337` → after: `L2336-L2337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2336-L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2336-L2337) · [Before (L2336-L2337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2336-L2337)

```diff
-           if (0 === ft.x.viewProj(tt, 0, 3) && 0 === ft.x.viewProj(tt, 0, 7) && 0 === ft.x.viewProj(tt, 0, 11)) return null;
-           for (let et = 0; et < 3; et++) ge[et] = ft.x.eye(tt, 0, et)
+           if (0 === NB.p.viewProj(BB, 0, 3) && 0 === NB.p.viewProj(BB, 0, 7) && 0 === NB.p.viewProj(BB, 0, 11)) return null;
+           for (let IB = 0; IB < 3; IB++) DI[IB] = NB.p.eye(BB, 0, IB)
```

#### 231. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2339` → after: `L2339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2339) · [Before (L2339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2339)

```diff
-         return Number.isFinite(ge[0] + ge[1] + ge[2]) ? ge : null
+         return Number.isFinite(DI[0] + DI[1] + DI[2]) ? DI : null
```

#### 232. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2342` → after: `L2342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2342) · [Before (L2342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2342)

```diff
-         if (!Number.isInteger(Ot) || Ot < 0 || Ot > 65535) throw new Error(`Invalid block id ${Ot}`);
+         if (!Number.isInteger(TB) || TB < 0 || TB > 65535) throw new Error(`Invalid block id ${TB}`);
```

#### 233. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2348` → after: `L2348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2348) · [Before (L2348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2348)

```diff
-         if (1 === this.api.queries.fR(qt, Dt, mt, Ot)) {
+         if (1 === this.api.queries.UH(JB, oB, GB, TB)) {
```

#### 234. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2377` → after: `L2377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2377) · [Before (L2377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2377)

```diff
-                 look: ft.Xb.FlatOnTop,
+                 look: NB.Pb.FlatOnTop,
```

#### 235. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2380` → after: `L2380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2380) · [Before (L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2380)

```diff
-                 look: ft.Xb.FlatOpaque,
+                 look: NB.Pb.FlatOpaque,
```

#### 236. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2383` → after: `L2383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2383) · [Before (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2383)

```diff
-                 look: ft.Xb.Flat,
+                 look: NB.Pb.Flat,
```

#### 237. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2388` → after: `L2388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2388) · [Before (L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2388)

```diff
-                 look: ft.Xb.Chevrons, colour: [...(0, fe.d)(tt.colour), tt.alpha]
+                 look: NB.Pb.Chevrons, colour: [...(0, FI.b)(BB.colour), BB.alpha]
```

#### 238. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2392` → after: `L2392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2392) · [Before (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2392)

```diff
-                 look: ft.Xb.FurnaceFire, colour: [1, 1, 1, 1]
+                 look: NB.Pb.FurnaceFire, colour: [1, 1, 1, 1]
```

#### 239. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2404` → after: `L2404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2404) · [Before (L2404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2404)

```diff
-             const et = null !== (dt = tt.uvs) && void 0 !== dt ? dt : [];
+             const IB = null !== (vB = BB.uvs) && void 0 !== vB ? vB : [];
```

#### 240. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2407` → after: `L2407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2407) · [Before (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2407)

```diff
-               mt.setFloat32(4 * (3 * Vt + tt), null !== (jt = et[tt]) && void 0 !== jt ? jt : 0, !0)
+               GB.setFloat32(4 * (3 * ZB + BB), null !== (kB = IB[BB]) && void 0 !== kB ? kB : 0, !0)
```

#### 241. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2412-L2413` → after: `L2412-L2413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2412-L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2412-L2413) · [Before (L2412-L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2412-L2413)

```diff
-         }(tt, (0, He.i)(et));
-         return (0, ft.Re)(qt, 0, Ot, Dt, mt, Vt, dt, tt.indices.length, jt) && this.liveMeshes.add(Ot), Ot
+         }(BB, (0, kI.h)(IB));
+         return (0, NB.Ee)(JB, 0, TB, oB, GB, ZB, vB, BB.indices.length, kB) && this.liveMeshes.add(TB), TB
```

#### 242. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2420-L2422` → after: `L2420-L2422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2420-L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2420-L2422) · [Before (L2420-L2422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2420-L2422)

```diff
-         et.anchor && (qt |= ft.Zb.Anchor, eV[0] = et.anchor[0], eV[1] = et.anchor[1], eV[2] = et.anchor[2]), void 0 !== et.visible && (qt |= ft.Zb.Visible), et.uvOffset && (qt |= ft.Zb.UvOffset, VV[0] = et.uvOffset[0], VV[1] = et.uvOffset[1]);
-         const Dt = null !== (Vt = et.visibility) && void 0 !== Vt ? Vt : 1;
-         void 0 !== et.visibility && (qt |= ft.Zb.Visibility), et.scale && (qt |= ft.Zb.Scale, OV[0] = et.scale[0], OV[1] = et.scale[1], OV[2] = et.scale[2]), 0 !== qt && (0, ft.We)(Ot, 0, tt, qt, et.visible ? 1 : 0, eV, VV, Dt, OV)
+         IB.anchor && (JB |= NB.Tb.Anchor, BZ[0] = IB.anchor[0], BZ[1] = IB.anchor[1], BZ[2] = IB.anchor[2]), void 0 !== IB.visible && (JB |= NB.Tb.Visible), IB.uvOffset && (JB |= NB.Tb.UvOffset, IZ[0] = IB.uvOffset[0], IZ[1] = IB.uvOffset[1]);
+         const oB = null !== (ZB = IB.visibility) && void 0 !== ZB ? ZB : 1;
+         void 0 !== IB.visibility && (JB |= NB.Tb.Visibility), IB.scale && (JB |= NB.Tb.Scale, ZZ[0] = IB.scale[0], ZZ[1] = IB.scale[1], ZZ[2] = IB.scale[2]), 0 !== JB && (0, NB.Le)(TB, 0, BB, JB, IB.visible ? 1 : 0, BZ, IZ, oB, ZZ)
```

#### 243. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2426` → after: `L2426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2426) · [Before (L2426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2426)

```diff
-         et && !(0, ft.Ve)(et, 0, tt) || this.liveMeshes.delete(tt)
+         IB && !(0, NB.He)(IB, 0, BB) || this.liveMeshes.delete(BB)
```

#### 244. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2475` → after: `L2475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2475) · [Before (L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2475)

```diff
-         const et = `${tt.colour} ${tt.alpha}`;
+         const IB = `${BB.colour} ${BB.alpha}`;
```

#### 245. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2517` → after: `L2517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2517) · [Before (L2517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2517)

```diff
-         for (; Vt < tt.length && (0, ft.df)(et, 0, tt[Vt]);) Vt++;
+         for (; ZB < BB.length && (0, NB.Ue)(IB, 0, BB[ZB]);) ZB++;
```

#### 246. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2521` → after: `L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2521) · [Before (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2521)

```diff
-           (Ot ? (0, ft._f)(et, 0, Ot.width, Ot.alpha, 1, Ot.endAtSolidFace ? 1 : 0) : (0, ft._f)(et, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
+           (TB ? (0, NB.Pf)(IB, 0, TB.width, TB.alpha, 1, TB.endAtSolidFace ? 1 : 0) : (0, NB.Pf)(IB, 0, 0, 0, 0, 0)) && (this.pendingStyle = void 0)
```

#### 247. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2524` → after: `L2524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2524) · [Before (L2524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2524)

```diff
-         void 0 !== qt && (0, ft.Sf)(et, 0, null !== qt && void 0 !== qt ? qt : 0, null === qt ? 1 : 0) && (this.pendingFar = void 0)
+         void 0 !== JB && (0, NB.Kf)(IB, 0, null !== JB && void 0 !== JB ? JB : 0, null === JB ? 1 : 0) && (this.pendingFar = void 0)
```

#### 248. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2529` → after: `L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2529) · [Before (L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2529)

```diff
-         Vt && Ot !== ft.hd && (0, ft.fg)(Vt, 0, Ot, et)
+         ZB && TB !== NB.Rc && (0, NB.Tf)(ZB, 0, TB, IB)
```

#### 249. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2534` → after: `L2534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2534) · [Before (L2534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2534)

```diff
-         Vt && Ot !== ft.hd && jV(Vt, Ot, et)
+         ZB && TB !== NB.Rc && vZ(ZB, TB, IB)
```

#### 250. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2550` → after: `L2550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2550) · [Before (L2550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2550)

```diff
-         return et !== ft.hd && 1 === this.api.queries.entityInteractable(et)
+         return IB !== NB.Rc && 1 === this.api.queries.entityInteractable(IB)
```

#### 251. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2563` → after: `L2563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2563) · [Before (L2563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2563)

```diff
-           return null !== tt && void 0 !== tt ? tt : null
+           return null !== BB && void 0 !== BB ? BB : null
```

#### 252. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2570` → after: `L2570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2570) · [Before (L2570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2570)

```diff
-         return ne[0] = ft.x.eye(tt, 0, 0), ne[1] = ft.x.eye(tt, 0, 1), ne[2] = ft.x.eye(tt, 0, 2), ne
+         return VI[0] = NB.p.eye(BB, 0, 0), VI[1] = NB.p.eye(BB, 0, 1), VI[2] = NB.p.eye(BB, 0, 2), VI
```

#### 253. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2573` → after: `L2573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2573) · [Before (L2573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2573)

```diff
-         return ft.x.cameraFar(this.api.apiView, 0)
+         return NB.p.cameraFar(this.api.apiView, 0)
```

#### 254. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2584` → after: `L2584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2584) · [Before (L2584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2584)

```diff
-         et && Vt !== ft.hd && (0, ft.Ce)(et, 0, Vt)
+         IB && ZB !== NB.Rc && (0, NB.pe)(IB, 0, ZB)
```

#### 255. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2589-L2591` → after: `L2589-L2591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2589-L2591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2589-L2591) · [Before (L2589-L2591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2589-L2591)

```diff
-         Vt && Be(Vt, 0, xe.c.Chat, (0, kt.g)((0, xe.l)({
-           kX: tt,
-           GX: et
+         ZB && tI(ZB, 0, xI.e.Chat, (0, rB.i)((0, xI.l)({
+           Xn: BB,
+           Ln: IB
```

#### 256. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2595` → after: `L2595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2595) · [Before (L2595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2595)

```diff
-         tt.length <= 119 && this.sendChat(`/${tt}`)
+         BB.length <= 119 && this.sendChat(`/${BB}`)
```

#### 257. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2603` → after: `L2603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2603) · [Before (L2603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2603)

```diff
-           dt = qt.qd(tt, et, Vt),
+           vB = JB.KG(BB, IB, ZB),
```

#### 258. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2606-L2607` → after: `L2606-L2607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2606-L2607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2606-L2607) · [Before (L2606-L2607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2606-L2607)

```diff
-           const [Ot, Dt, Ht] = [tt - jt.x, et - jt.y, Vt - jt.z], Xt = DV[qt.qd(Ot, Dt, Ht)], Qt = null === Xt || void 0 === Xt ? void 0 : Xt.positions.some((tt => tt.id === dt && tt.x === jt.x && tt.y === jt.y && tt.z === jt.z));
-           for (const tt of (Qt && Xt ? Xt : jt.main).positions) qt.qd(Ot + tt.x, Dt + tt.y, Ht + tt.z) === tt.id && mt(Ot + tt.x, Dt + tt.y, Ht + tt.z, 0, tt.id)
+           const [TB, oB, cB] = [BB - kB.x, IB - kB.y, ZB - kB.z], nB = JZ[JB.KG(TB, oB, cB)], hB = null === nB || void 0 === nB ? void 0 : nB.positions.some((BB => BB.id === vB && BB.x === kB.x && BB.y === kB.y && BB.z === kB.z));
+           for (const BB of (hB && nB ? nB : kB.main).positions) JB.KG(TB + BB.x, oB + BB.y, cB + BB.z) === BB.id && GB(TB + BB.x, oB + BB.y, cB + BB.z, 0, BB.id)
```

#### 259. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2613` → after: `L2613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2613) · [Before (L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2613)

```diff
-             mt(Ot, Dt, dt, Qt.id, qt.qd(Ot, Dt, dt))
+             GB(TB, oB, vB, hB.id, JB.KG(TB, oB, vB))
```

#### 260. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2617` → after: `L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2617) · [Before (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2617)

```diff
-           let jt = qt.qd(tt, et + 1, Vt);
+           let kB = JB.KG(BB, IB + 1, ZB);
```

#### 261. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2629` → after: `L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2629) · [Before (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2629)

```diff
-         return 0 !== qt && 0 !== Dt && Ot.blockRootId(tt) === Ot.blockRootId(et) ? mt && Vt !== Dt ? Dt : void 0 : 0 === Dt || !mt && 0 !== Vt ? mt ? 0 : void 0 : Dt
+         return 0 !== JB && 0 !== oB && TB.blockRootId(BB) === TB.blockRootId(IB) ? GB && ZB !== oB ? oB : void 0 : 0 === oB || !GB && 0 !== ZB ? GB ? 0 : void 0 : oB
```

#### 262. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2632` → after: `L2632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2632) · [Before (L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2632)

```diff
-     const XV = ft.oc + ft.sc * ft.yc.BYTES,
+     const cZ = NB.cc + NB.fc * NB.mc.BYTES,
```

#### 263. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2637-L2638` → after: `L2637-L2638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2637-L2638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2637-L2638) · [Before (L2637-L2638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2637-L2638)

```diff
-         cX: 0,
-         jj: null,
+         Hn: 0,
+         Dv: null,
```

#### 264. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2642` → after: `L2642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2642) · [Before (L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2642)

```diff
-         get: () => () => ft.ud
+         get: () => () => NB.ad
```

#### 265. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2654` → after: `L2654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2654) · [Before (L2654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2654)

```diff
-         this.deps = tt, this.Tq = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(ft.sc), this.ids = new Uint16Array(ft.sc), this.amounts = new Uint16Array(ft.sc), this.attrRead = new Float64Array(ft.sc).fill(-1 … [truncated]
+         this.deps = BB, this.XJ = [0, 0, 0], this.inaccuracy = 0, this.version = 0, this.notified = 0, this.iconChanged = !1, this.facades = new Array(NB.fc), this.ids = new Uint16Array(NB.fc), this.amounts = new Uint16Array(NB.fc), this.attrRead = new Float64Array(NB.fc).fill(-1 … [truncated]
```

#### 266. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2670` → after: `L2670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2670) · [Before (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2670)

```diff
-         return Number.isInteger(tt) && tt >= 0 && tt < this.len && 0 !== this.ids[tt] && null !== (et = this.facades[tt]) && void 0 !== et ? et : null
+         return Number.isInteger(BB) && BB >= 0 && BB < this.len && 0 !== this.ids[BB] && null !== (IB = this.facades[BB]) && void 0 !== IB ? IB : null
```

#### 267. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2677` → after: `L2677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2677) · [Before (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2677)

```diff
-         for (let et = 0; et < Math.min(ft.zd, this.len); et++) tt.push(this.slot(et));
+         for (let IB = 0; IB < Math.min(NB.nd, this.len); IB++) BB.push(this.slot(IB));
```

#### 268. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2682` → after: `L2682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2682) · [Before (L2682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2682)

```diff
-         for (let et = 0; et < Math.min(ft.zd - ft.h, this.len); et++) 0 === this.ids[et] && tt++;
+         for (let IB = 0; IB < Math.min(NB.nd - NB.f, this.len); IB++) 0 === this.ids[IB] && BB++;
```

#### 269. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2687` → after: `L2687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2687) · [Before (L2687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2687)

```diff
-         for (let Ot = 0; Ot < Math.min(ft.zd, this.len); Ot++) {
+         for (let TB = 0; TB < Math.min(NB.nd, this.len); TB++) {
```

#### 270. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2690` → after: `L2690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2690) · [Before (L2690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2690)

```diff
-           if ((null === qt || void 0 === qt ? void 0 : qt.name) === tt) et += null !== (Vt = qt.amount) && void 0 !== Vt ? Vt : 1
+           if ((null === JB || void 0 === JB ? void 0 : JB.name) === BB) IB += null !== (ZB = JB.amount) && void 0 !== ZB ? ZB : 1
```

#### 271. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2696` → after: `L2696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2696) · [Before (L2696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2696)

```diff
-         return null !== (et = this.instances[tt]) && void 0 !== et ? et : 0
+         return null !== (IB = this.instances[BB]) && void 0 !== IB ? IB : 0
```

#### 272. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2717` → after: `L2717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2717) · [Before (L2717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2717)

```diff
-         this.Tq[0] = tt, this.Tq[1] = et, this.Tq[2] = Vt, this.version++
+         this.XJ[0] = BB, this.XJ[1] = IB, this.XJ[2] = ZB, this.version++
```

#### 273. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2721-L2723` → after: `L2721-L2723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2721-L2723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2721-L2723) · [Before (L2721-L2723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2721-L2723)

```diff
-           et = ft.x.inventoryViewPtr(tt, 0),
-           Vt = ft.x.inventoryVersion(tt, 0),
-           Ot = ft.x.selectedSlot(tt, 0);
+           IB = NB.p.inventoryViewPtr(BB, 0),
+           ZB = NB.p.inventoryVersion(BB, 0),
+           TB = NB.p.selectedSlot(BB, 0);
```

#### 274. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2725` → after: `L2725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2725) · [Before (L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2725)

```diff
-         const qt = ft.x.slotIcon(tt, 0);
+         const JB = NB.p.slotIcon(BB, 0);
```

#### 275. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2729` → after: `L2729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2729) · [Before (L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2729)

```diff
-           mt = Dt ? Math.min(Dt.getUint32(0, !0), ft.sc) : 0;
+           GB = oB ? Math.min(oB.getUint32(0, !0), NB.fc) : 0;
```

#### 276. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2732-L2734` → after: `L2732-L2734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2732-L2734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2732-L2734) · [Before (L2732-L2734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2732-L2734)

```diff
-         for (let jt = 0; jt < ft.sc; jt++) {
-           const tt = ft.oc + jt * ft.yc.BYTES,
-             et = null !== Dt && jt < mt ? ft.yc.item(Dt, tt) : 0;
+         for (let kB = 0; kB < NB.fc; kB++) {
+           const BB = NB.cc + kB * NB.mc.BYTES,
+             IB = null !== oB && kB < GB ? NB.mc.item(oB, BB) : 0;
```

#### 277. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2739-L2740` → after: `L2739-L2740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2739-L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2739-L2740) · [Before (L2739-L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2739-L2740)

```diff
-           const Vt = ft.yc.amount(Dt, tt),
-             Ot = ft.yc.attrVersion(Dt, tt);
+           const ZB = NB.mc.amount(oB, BB),
+             TB = NB.mc.attrVersion(oB, BB);
```

#### 278. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2776` → after: `L2776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2776) · [Before (L2776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2776)

```diff
-           jt += 8 + (0, lt.Fe)(et);
+           kB += 8 + (0, zB.xe)(IB);
```

#### 279. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2802-L2803` → after: `L2802-L2803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2802-L2803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2802-L2803) · [Before (L2802-L2803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2802-L2803)

```diff
-           dt = mt === ft.ud ? ft.Mb : null !== (qt = null === (Dt = this.extras()) || void 0 === Dt ? void 0 : Dt[1]) && void 0 !== qt ? qt : ft.Mb;
-         return this.settle(mt), dt === ft.Mb ? null : dt
+           vB = GB === NB.ad ? NB.zb : null !== (JB = null === (oB = this.extras()) || void 0 === oB ? void 0 : oB[1]) && void 0 !== JB ? JB : NB.zb;
+         return this.settle(GB), vB === NB.zb ? null : vB
```

#### 280. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2830` → after: `L2830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2830) · [Before (L2830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2830)

```diff
-         const dt = Dt === ft.ud ? null : this.extras();
+         const vB = oB === NB.ad ? null : this.extras();
```

#### 281. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2834-L2835` → after: `L2834-L2835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2834-L2835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2834-L2835) · [Before (L2834-L2835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2834-L2835)

```diff
-             cX: tt,
-             jj: et === ft.Mb ? null : et,
+             Hn: BB,
+             Dv: IB === NB.zb ? null : IB,
```

#### 282. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2858` → after: `L2858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2858) · [Before (L2858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2858)

```diff
-           if (mt.length > 1024) return Dt(new Error(`The crafting station ${tt}'s name is over 1024 bytes`)), null;
+           if (GB.length > 1024) return oB(new Error(`The crafting station ${BB}'s name is over 1024 bytes`)), null;
```

#### 283. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2864-L2865` → after: `L2864-L2865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2864-L2865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2864-L2865) · [Before (L2864-L2865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2864-L2865)

```diff
-           jt = qt.queries.craftingView(null !== (Ot = null === mt || void 0 === mt ? void 0 : mt.length) && void 0 !== Ot ? Ot : 0, dt ? et : 0, dt ? Vt : 0);
-         return jt < ft.nb.BYTES ? (qt.reportCorruption(`crafting_view's answer of ${jt} bytes`), null) : qt.memoryData(qt.scratch(), jt, 1, "crafting_view's answer")
+           kB = JB.queries.craftingView(null !== (TB = null === GB || void 0 === GB ? void 0 : GB.length) && void 0 !== TB ? TB : 0, vB ? IB : 0, vB ? ZB : 0);
+         return kB < NB.ab.BYTES ? (JB.reportCorruption(`crafting_view's answer of ${kB} bytes`), null) : JB.memoryData(JB.scratch(), kB, 1, "crafting_view's answer")
```

#### 284. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2878-L2879` → after: `L2878-L2879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2878-L2879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2878-L2879) · [Before (L2878-L2879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2878-L2879)

```diff
-         if (tt === ft.rd)(0, Ye.d)();
-         else if (tt !== ft.ud) {
+         if (BB === NB.Zc)(0, AI.b)();
+         else if (BB !== NB.ad) {
```

#### 285. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2882-L2883` → after: `L2882-L2883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2882-L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2882-L2883) · [Before (L2882-L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2882-L2883)

```diff
-             return (0, Ye.d)(), (0, ft.tg)(tt, et, Vt)
-           }(et, 0, tt) || this.deps.onError(new Error(`Sync op ${tt}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
+             return (0, AI.b)(), (0, NB.bg)(BB, IB, ZB)
+           }(IB, 0, BB) || this.deps.onError(new Error(`Sync op ${BB}'s marker didn't fit the command ring: its send goes after the next frame's commands`))
```

#### 286. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2885` → after: `L2885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2885) · [Before (L2885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2885)

```diff
-         return this.stopped || this.refresh(), tt !== ft.ud
+         return this.stopped || this.refresh(), BB !== NB.ad
```

#### 287. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2892` → after: `L2892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2892) · [Before (L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2892)

```diff
-       uV = 1.2 * we.e.iy,
+       QZ = 1.2 * NI.f.uq,
```

#### 288. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2900` → after: `L2900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2900) · [Before (L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2900)

```diff
-       return et || (WV.size >= 64 && WV.clear(), et = KV.encode(`{"emitRate":${tt}}`), WV.set(tt, et)), et
+       return IB || (YZ.size >= 64 && YZ.clear(), IB = sZ.encode(`{"emitRate":${BB}}`), YZ.set(BB, IB)), IB
```

#### 289. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2904` → after: `L2904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2904) · [Before (L2904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2904)

```diff
-       return Number.isFinite(tt) && tt > 0 ? tt : 0
+       return Number.isFinite(BB) && BB > 0 ? BB : 0
```

#### 290. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2920` → after: `L2920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2920) · [Before (L2920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2920)

```diff
-       return tt.length > ft.Nd.MaxOpts ? (Vt(new Error(`${et}'s particle opts are over ${ft.Nd.MaxOpts} bytes of JSON`)), null) : tt
+       return BB.length > NB.zd.MaxOpts ? (ZB(new Error(`${IB}'s particle opts are over ${NB.zd.MaxOpts} bytes of JSON`)), null) : BB
```

#### 291. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2944-L2945` → after: `L2944-L2945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2944-L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2944-L2945) · [Before (L2944-L2945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2944-L2945)

```diff
-           qt = null !== (Vt = et.half) && void 0 !== Vt ? Vt : JV;
-         if (!Ot || this.live >= ft.Nd.MaxLiveKeys || this.nextKey > ft.Nd.MaxKey || !RV(et.pos, qt)) return ZV;
+           JB = null !== (ZB = IB.half) && void 0 !== ZB ? ZB : dZ;
+         if (!TB || this.live >= NB.zd.MaxLiveKeys || this.nextKey > NB.zd.MaxKey || !aZ(IB.pos, JB)) return jZ;
```

#### 292. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2951` → after: `L2951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2951) · [Before (L2951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2951)

```diff
-               uQ: tt.uQ,
+               ah: BB.ah,
```

#### 293. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2959-L2961` → after: `L2959-L2961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2959-L2961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2959-L2961) · [Before (L2959-L2961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2959-L2961)

```diff
-               gravity: null !== (et = tt.gravity) && void 0 !== et ? et : JV,
-               dir1: null !== (Vt = tt.dir1) && void 0 !== Vt ? Vt : bV,
-               dir2: null !== (Ot = tt.dir2) && void 0 !== Ot ? Ot : bV,
+               gravity: null !== (IB = BB.gravity) && void 0 !== IB ? IB : dZ,
+               dir1: null !== (ZB = BB.dir1) && void 0 !== ZB ? ZB : WZ,
+               dir2: null !== (TB = BB.dir2) && void 0 !== TB ? TB : WZ,
```

#### 294. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2967` → after: `L2967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2967) · [Before (L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2967)

```diff
-         return mt && (0, ft.sf)(Ot, 0, Dt, 0, ft.Nd.PresetNone, 0, hV, vV, mt) ? (this.nextKey++, this.live++, this.started = !0, new FV(this, this.session, Dt, tt, qt)) : ZV
+         return GB && (0, NB.kf)(TB, 0, oB, 0, NB.zd.PresetNone, 0, wZ, OZ, GB) ? (this.nextKey++, this.live++, this.started = !0, new RZ(this, this.session, oB, BB, JB)) : jZ
```

#### 295. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2979` → after: `L2979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2979) · [Before (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2979)

```diff
-         qt && (0, ft.of)(et, 0, 0, ft.Nd.PresetNone, ft.Nd.HasBox, 0, hV, vV, qt)
+         JB && (0, NB.gf)(IB, 0, 0, NB.zd.PresetNone, NB.zd.HasBox, 0, wZ, OZ, JB)
```

#### 296. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2983-L2984` → after: `L2983-L2984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2983-L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2983-L2984) · [Before (L2983-L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2983-L2984)

```diff
-           qt = Math.min(Math.floor(Vt), ft.Nd.MaxBurst);
-         if (!Ot || !Object.hasOwn(ft.bc, tt) || !(qt > 0)) return;
+           JB = Math.min(Math.floor(ZB), NB.zd.MaxBurst);
+         if (!TB || !Object.hasOwn(NB.Vb, BB) || !(JB > 0)) return;
```

#### 297. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2987` → after: `L2987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2987) · [Before (L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2987)

```diff
-         Number.isFinite(hV[0] + hV[1] + hV[2]) && (0, ft.of)(Ot, 0, 0, ft.bc[tt], ft.Nd.HasBox, qt, hV, vV, CV)
+         Number.isFinite(wZ[0] + wZ[1] + wZ[2]) && (0, NB.gf)(TB, 0, 0, NB.Vb[BB], NB.zd.HasBox, JB, wZ, OZ, CZ)
```

#### 298. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2992` → after: `L2992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2992) · [Before (L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2992)

```diff
-         return this.started = !1, this.nextKey = 1, this.live = 0, !tt || (0, ft.uf)(tt, 0)
+         return this.started = !1, this.nextKey = 1, this.live = 0, !BB || (0, NB.lf)(BB, 0)
```

#### 299. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L2999` → after: `L2999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR2999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L2999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2999) · [Before (L2999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L2999)

```diff
-         Vt && (0, ft.yf)(Vt, 0, et) && this.live--
+         ZB && (0, NB.mf)(ZB, 0, IB) && this.live--
```

#### 300. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3016` → after: `L3016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3016) · [Before (L3016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3016)

```diff
-           RV(tt, this.half) && (0, ft.Af)(Vt, 0, this.key, ft.Nd.HasBox, hV, vV, CV)
+           aZ(BB, this.half) && (0, NB.qf)(ZB, 0, this.key, NB.zd.HasBox, wZ, OZ, CZ)
```

#### 301. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3022` → after: `L3022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3022) · [Before (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3022)

```diff
-         et && Vt !== this.rate && (0, ft.Af)(et, 0, this.key, 0, JV, JV, SV(Vt)) && (this.rate = Vt, this.emitted ||= Vt > 0)
+         IB && ZB !== this.rate && (0, NB.qf)(IB, 0, this.key, 0, dZ, dZ, iZ(ZB)) && (this.rate = ZB, this.emitted ||= ZB > 0)
```

#### 302. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3026-L3027` → after: `L3026-L3027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3026-L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3026-L3027) · [Before (L3026-L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3026-L3027)

```diff
-           Vt = Math.min(Math.floor(tt), ft.Nd.MaxBurst);
-         et && Vt > 0 && (0, ft.of)(et, 0, this.key, ft.Nd.PresetNone, 0, Vt, JV, JV, CV) && (this.emitted = !0)
+           ZB = Math.min(Math.floor(BB), NB.zd.MaxBurst);
+         IB && ZB > 0 && (0, NB.gf)(IB, 0, this.key, NB.zd.PresetNone, 0, ZB, dZ, dZ, CZ) && (this.emitted = !0)
```

#### 303. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3031` → after: `L3031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3031) · [Before (L3031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3031)

```diff
-           qt = Math.min(Math.floor(Vt), ft.Nd.MaxPoints, Math.floor(et.length / 4));
+           JB = Math.min(Math.floor(ZB), NB.zd.MaxPoints, Math.floor(IB.length / 4));
```

#### 304. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3033-L3034` → after: `L3033-L3034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3033-L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3033-L3034) · [Before (L3033-L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3033-L3034)

```diff
-         const Dt = new Uint8Array(et.buffer, et.byteOffset, qt * ft.Nd.PointBytes);
-         (0, ft.qf)(Ot, 0, this.key, qt, tt, Dt) && (this.emitted = !0)
+         const oB = new Uint8Array(IB.buffer, IB.byteOffset, JB * NB.zd.PointBytes);
+         (0, NB.if)(TB, 0, this.key, JB, BB, oB) && (this.emitted = !0)
```

#### 305. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3043` → after: `L3043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3043) · [Before (L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3043)

```diff
-         (0, ft.Af)(Vt, 0, this.key, 0, JV, JV, Ot)
+         (0, NB.qf)(ZB, 0, this.key, 0, dZ, dZ, TB)
```

#### 306. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3047` → after: `L3047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3047) · [Before (L3047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3047)

```diff
-         this.stopped = !0, tt && (this.emitted ? (this.rate > 0 && (0, ft.Af)(tt, 0, this.key, 0, JV, JV, SV(0)), setTimeout((() => {
+         this.stopped = !0, BB && (this.emitted ? (this.rate > 0 && (0, NB.qf)(BB, 0, this.key, 0, dZ, dZ, iZ(0)), setTimeout((() => {
```

#### 307. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3058` → after: `L3058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3058) · [Before (L3058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3058)

```diff
-     const kV = Ue.r,
+     const rZ = uI.p,
```

#### 308. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3069` → after: `L3069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3069) · [Before (L3069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3069)

```diff
-         if (tt !== ft.hd && !Ct(Ot[Dt])) {
+         if (BB !== NB.Rc && !CB(TB[oB])) {
```

#### 309. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3084` → after: `L3084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3084) · [Before (L3084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3084)

```diff
-       return tt.length >= et ? tt : new Int32Array(Math.max(et, 2 * tt.length))
+       return BB.length >= IB ? BB : new Int32Array(Math.max(IB, 2 * BB.length))
```

#### 310. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3096-L3098` → after: `L3096-L3098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3096-L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3096-L3098) · [Before (L3096-L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3096-L3098)

```diff
-         for (let tt = 0; tt + ft.Qb.BYTES <= dt;) {
-           const et = ft.Qb.len(jt, tt);
-           Ot(ft.Qb.serverId(jt, tt), UV(jt, tt, et)), tt += ft.Qb.BYTES + (0, lt.Fe)(et)
+         for (let BB = 0; BB + NB.Fb.BYTES <= vB;) {
+           const IB = NB.Fb.len(kB, BB);
+           TB(NB.Fb.serverId(kB, BB), uZ(kB, BB, IB)), BB += NB.Fb.BYTES + (0, zB.xe)(IB)
```

#### 311. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3106` → after: `L3106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3106) · [Before (L3106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3106)

```diff
-       const mt = ft.Qb.kind(tt, et),
+       const GB = NB.Fb.kind(BB, IB),
```

#### 312. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3109-L3113` → after: `L3109-L3113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3109-L3113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3109-L3113) · [Before (L3109-L3113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3109-L3113)

```diff
-       const jt = ft.Qb.variation(tt, et),
-         Ht = ft.Qb.pose(tt, et),
-         Xt = ft.Qb.meta(tt, et),
-         Qt = ft.Qb.mesh(tt, et),
-         lt = 0 !== (ft.Qb.flags(tt, et) & ft.Pb.HasOpts),
+       const kB = NB.Fb.variation(BB, IB),
+         cB = NB.Fb.pose(BB, IB),
+         nB = NB.Fb.meta(BB, IB),
+         hB = NB.Fb.mesh(BB, IB),
+         zB = 0 !== (NB.Fb.flags(BB, IB) & NB.Bb.HasOpts),
```

#### 313. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3117-L3121` → after: `L3117-L3121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3117-L3121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3117-L3121) · [Before (L3117-L3121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3117-L3121)

```diff
-         variation: jt === ft.od ? void 0 : null !== (Ot = null !== (qt = null === Et || void 0 === Et ? void 0 : Et[jt]) && void 0 !== qt ? qt : null === Et || void 0 === Et ? void 0 : Et[0]) && void 0 !== Ot ? Ot : "default",
-         pose: Ht === ft.kc ? void 0 : null !== (Dt = ft.Hb[Ht]) && void 0 !== Dt ? Dt : ft.Hb[0],
-         metaInfo: Xt === ft.kc ? void 0 : ft.$c[Xt],
-         meshKind: Qt === ft.kc ? void 0 : ft.Yc[Qt],
-         meshOpts: lt ? GV.decode(new Uint8Array(tt.buffer, tt.byteOffset + et + ft.Qb.BYTES, Vt)) : void 0
+         variation: kB === NB.Vc ? void 0 : null !== (TB = null !== (JB = null === FB || void 0 === FB ? void 0 : FB[kB]) && void 0 !== JB ? JB : null === FB || void 0 === FB ? void 0 : FB[0]) && void 0 !== TB ? TB : "default",
+         pose: cB === NB.ac ? void 0 : null !== (oB = NB.vb[cB]) && void 0 !== oB ? oB : NB.vb[0],
+         metaInfo: nB === NB.ac ? void 0 : NB.Gc[nB],
+         meshKind: hB === NB.ac ? void 0 : NB.Ec[hB],
+         meshOpts: zB ? mZ.decode(new Uint8Array(BB.buffer, BB.byteOffset + IB + NB.Fb.BYTES, ZB)) : void 0
```

#### 314. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3128` → after: `L3128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3128) · [Before (L3128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3128)

```diff
-         this.deps = tt, this.wanted = 0, this.Pd = !1, this.refused = !1
+         this.deps = BB, this.wanted = 0, this.sv = !1, this.refused = !1
```

#### 315. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3131` → after: `L3131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3131) · [Before (L3131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3131)

```diff
-         return this.Pd
+         return this.sv
```

#### 316. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3134` → after: `L3134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3134) · [Before (L3134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3134)

```diff
-         this.wanted = et ? this.wanted | tt : this.wanted & ~tt;
+         this.wanted = IB ? this.wanted | BB : this.wanted & ~BB;
```

#### 317. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3136` → after: `L3136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3136) · [Before (L3136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3136)

```diff
-         if (Vt === this.Pd) return;
+         if (ZB === this.sv) return;
```

#### 318. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3138` → after: `L3138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3138) · [Before (L3138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3138)

```diff
-         null !== Ot ? (0, ft.zg)(Ot, 0, Vt ? 1 : 0) ? (this.Pd = Vt, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.Pd = !1
+         null !== TB ? (0, NB.hg)(TB, 0, ZB ? 1 : 0) ? (this.sv = ZB, this.refused = !1) : this.refused || (this.refused = !0, this.deps.onError(new Error("WatchEntityInfo didn't fit the command ring"))) : this.sv = !1
```

#### 319. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3147` → after: `L3147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3147) · [Before (L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3147)

```diff
-         return this.complete || this.fill(), null !== (et = this.entries.get("string" === typeof tt ? tt : String(tt))) && void 0 !== et ? et : null
+         return this.complete || this.fill(), null !== (IB = this.entries.get("string" === typeof BB ? BB : String(BB))) && void 0 !== IB ? IB : null
```

#### 320. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3206` → after: `L3206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3206) · [Before (L3206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3206)

```diff
-     var pV = Vt(4963);
+     var bZ = ZB(4975);
```

#### 321. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3209-L3210` → after: `L3209-L3210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3209-L3210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3209-L3210) · [Before (L3209-L3210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3209-L3210)

```diff
-       if ("message" !== tt.type || tt.kX !== pV.gc.NewClientOptions || tt.payloadKind !== lt.wc.Msgpack) return null;
-       const et = (0, kt.c)(tt.payload);
+       if ("message" !== BB.type || BB.Xn !== bZ.nc.NewClientOptions || BB.payloadKind !== zB.nc.Msgpack) return null;
+       const IB = (0, rB.e)(BB.payload);
```

#### 322. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3214-L3215` → after: `L3214-L3215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3214-L3215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3214-L3215) · [Before (L3214-L3215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3214-L3215)

```diff
-     var TV = Vt(1325),
-       gV = Vt(36880);
+     var EZ = ZB(1300),
+       DZ = ZB(36642);
```

#### 323. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3220-L3222` → after: `L3220-L3222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3220-L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3220-L3222) · [Before (L3220-L3222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3220-L3222)

```diff
-         case ft.pe.ToggleMenu: {
-           const tt = ft.Q[et];
-           mt.j.sw("toggleMenu", void 0 === tt ? "inventory" : `inventory|${tt}`);
+         case NB.de.ToggleMenu: {
+           const BB = NB.x[IB];
+           GB.l.Gq("toggleMenu", void 0 === BB ? "inventory" : `inventory|${BB}`);
```

#### 324. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3225-L3226` → after: `L3225-L3226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3225-L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3225-L3226) · [Before (L3225-L3226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3225-L3226)

```diff
-         case ft.pe.EditBoard:
-           mt.j.sw("EditBoard", {
+         case NB.de.EditBoard:
+           GB.l.Gq("EditBoard", {
```

#### 325. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3230-L3232` → after: `L3230-L3232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3230-L3232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3230-L3232) · [Before (L3230-L3232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3230-L3232)

```diff
-         case ft.pe.EditCodeBlock:
-         case ft.pe.ViewCodeBlock:
-           mt.j.sw("EditCodeBlock", {
+         case NB.de.EditCodeBlock:
+         case NB.de.ViewCodeBlock:
+           GB.l.Gq("EditCodeBlock", {
```

#### 326. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3234` → after: `L3234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3234) · [Before (L3234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3234)

```diff
-             canChangePos: tt === ft.pe.EditCodeBlock
+             canChangePos: BB === NB.de.EditCodeBlock
```

#### 327. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3237-L3238` → after: `L3237-L3238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3237-L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3237-L3238) · [Before (L3237-L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3237-L3238)

```diff
-         case ft.pe.EditCustomLobbyBlock:
-           mt.j.sw("EditCustomLobbyBlock", {
+         case NB.de.EditCustomLobbyBlock:
+           GB.l.Gq("EditCustomLobbyBlock", {
```

#### 328. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3242-L3243` → after: `L3242-L3243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3242-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3242-L3243) · [Before (L3242-L3243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3242-L3243)

```diff
-         case ft.pe.OpenIronChest:
-           mt.j.sw("OpenIronChest", {
+         case NB.de.OpenIronChest:
+           GB.l.Gq("OpenIronChest", {
```

#### 329. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3247-L3248` → after: `L3247-L3248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3247-L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3247-L3248) · [Before (L3247-L3248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3247-L3248)

```diff
-         case ft.pe.EditNameTag:
-           mt.j.sw("EditNameTag", null !== (jt = null === (Ht = qt.Pd()) || void 0 === Ht || null === (Xt = Ht.attributes.customAttributes) || void 0 === Xt ? void 0 : Xt.text) && void 0 !== jt ? jt : "");
+         case NB.de.EditNameTag:
+           GB.l.Gq("EditNameTag", null !== (kB = null === (cB = JB.sv()) || void 0 === cB || null === (nB = cB.attributes.customAttributes) || void 0 === nB ? void 0 : nB.text) && void 0 !== kB ? kB : "");
```

#### 330. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3250-L3255` → after: `L3250-L3255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3250-L3255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3250-L3255) · [Before (L3250-L3255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3250-L3255)

```diff
-         case ft.pe.EditBook: {
-           var Qt, lt, wt;
-           const tt = null === (Qt = qt.Pd()) || void 0 === Qt ? void 0 : Qt.attributes;
-           mt.j.sw("EditBook", {
-             pages: (0, TV.Q)(null === tt || void 0 === tt || null === (lt = tt.customAttributes) || void 0 === lt ? void 0 : lt.pages),
-             title: null !== (wt = null === tt || void 0 === tt ? void 0 : tt.customDisplayName) && void 0 !== wt ? wt : "Title",
+         case NB.de.EditBook: {
+           var hB, zB, gB;
+           const BB = null === (hB = JB.sv()) || void 0 === hB ? void 0 : hB.attributes;
+           GB.l.Gq("EditBook", {
+             pages: (0, EZ.Y)(null === BB || void 0 === BB || null === (zB = BB.customAttributes) || void 0 === zB ? void 0 : zB.pages),
+             title: null !== (gB = null === BB || void 0 === BB ? void 0 : BB.customDisplayName) && void 0 !== gB ? gB : "Title",
```

#### 331. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3260` → after: `L3260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3260) · [Before (L3260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3260)

```diff
-         case ft.pe.CantChangeBlock:
+         case NB.de.CantChangeBlock:
```

#### 332. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3264-L3265` → after: `L3264-L3265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3264-L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3264-L3265) · [Before (L3264-L3265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3264-L3265)

```diff
-               qt = tt ? Vt : Ot;
-             (et.getClientOption("canChange") || qt || "You cannot modify this block" !== Vt) && mt.j.sw("showBottomMessage", {
+               JB = BB ? ZB : TB;
+             (IB.getClientOption("canChange") || JB || "You cannot modify this block" !== ZB) && GB.l.Gq("showBottomMessage", {
```

#### 333. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3271-L3272` → after: `L3271-L3272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3271-L3272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3271-L3272) · [Before (L3271-L3272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3271-L3272)

```diff
-         case ft.pe.MiddleBarStart:
-           mt.j.sw("middleScreenBarInitiate", {
+         case NB.de.MiddleBarStart:
+           GB.l.Gq("middleScreenBarInitiate", {
```

#### 334. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3274` → after: `L3274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3274) · [Before (L3274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3274)

```diff
-             oq: 1 === Vt[0],
+             pJ: 1 === ZB[0],
```

#### 335. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3278-L3279` → after: `L3278-L3279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3278-L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3278-L3279) · [Before (L3278-L3279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3278-L3279)

```diff
-         case ft.pe.MiddleBarStop:
-           mt.j.sw("middleScreenBarRemove");
+         case NB.de.MiddleBarStop:
+           GB.l.Gq("middleScreenBarRemove");
```

#### 336. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3281-L3283` → after: `L3281-L3283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3281-L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3281-L3283) · [Before (L3281-L3283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3281-L3283)

```diff
-         case ft.pe.Hitmarker:
-           mt.j.sw("localGunHitmarker", {
-             ne: 1 === et
+         case NB.de.Hitmarker:
+           GB.l.Gq("localGunHitmarker", {
+             uI: 1 === IB
```

#### 337. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3286-L3287` → after: `L3286-L3287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3286-L3287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3286-L3287) · [Before (L3286-L3287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3286-L3287)

```diff
-         case ft.pe.ShotsLeft:
-           mt.j.sw("localPlayerNewShotsLeft", Ot);
+         case NB.de.ShotsLeft:
+           GB.l.Gq("localPlayerNewShotsLeft", TB);
```

#### 338. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3289-L3290` → after: `L3289-L3290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3289-L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3289-L3290) · [Before (L3289-L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3289-L3290)

```diff
-         case ft.pe.AimingOverlay:
-           mt.j.sw("aimingOverlay", 3 === (3 & et) ? "sniper" : "none");
+         case NB.de.AimingOverlay:
+           GB.l.Gq("aimingOverlay", 3 === (3 & IB) ? "sniper" : "none");
```

#### 339. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3292-L3293` → after: `L3292-L3293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3292-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3292-L3293) · [Before (L3292-L3293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3292-L3293)

```diff
-         case ft.pe.BottomMessage:
-           mt.j.sw("showBottomMessage", JSON.parse(dt()));
+         case NB.de.BottomMessage:
+           GB.l.Gq("showBottomMessage", JSON.parse(vB()));
```

#### 340. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3295-L3296` → after: `L3295-L3296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3295-L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3295-L3296) · [Before (L3295-L3296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3295-L3296)

```diff
-         case ft.pe.Crosshair:
-           qt.inaccuracy = (0, Gt.d)(Ot), (0, gV.d)().crosshairAccuracy(qt.inaccuracy);
+         case NB.de.Crosshair:
+           JB.inaccuracy = (0, mB.f)(TB), (0, DZ.b)().crosshairAccuracy(JB.inaccuracy);
```

#### 341. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3298` → after: `L3298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3298) · [Before (L3298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3298)

```diff
-         case ft.pe.ChargeStage:
+         case NB.de.ChargeStage:
```

#### 342. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3300-L3301` → after: `L3300-L3301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3300-L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3300-L3301) · [Before (L3300-L3301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3300-L3301)

```diff
-         case ft.pe.EmoteWheelClose:
-           mt.j.sw("requestEmoteWheelClose");
+         case NB.de.EmoteWheelClose:
+           GB.l.Gq("requestEmoteWheelClose");
```

#### 343. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3303-L3304` → after: `L3303-L3304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3303-L3304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3303-L3304) · [Before (L3303-L3304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3303-L3304)

```diff
-         case ft.pe.BlockMined:
-           mt.j.sw("localBlockMined");
+         case NB.de.BlockMined:
+           GB.l.Gq("localBlockMined");
```

#### 344. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3307` → after: `L3307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3307) · [Before (L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3307)

```diff
-           throw new Et.d(`UiEvent of no kind: what ${tt}`)
+           throw new FB.c(`UiEvent of no kind: what ${BB}`)
```

#### 345. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L3310-L3315` → after: `L3310-L3315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR3310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/e330d3e66305cdb7c110a0a19dd78e4637da113a...build/bloxd.io/c6gaap.4d6587ec#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L3310-L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3310-L3315) · [Before (L3310-L3315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/e330d3e66305cdb7c110a0a19dd78e4637da113a/bundles/bloxd.io/chunks/js/wasmClientGame.js#L3310-L3315)

```diff
-     var nV = Vt(38250),
-       tO = Vt(34388),
-       eO = Vt(2054),
-       VO = Vt(37036),
-       OO = Vt(34399),
-       qO = Vt(4951);
+     var VZ = ZB(38063),
+       SZ = ZB(34197),
+       BT = ZB(2046),
+       IT = ZB(36837),
+       ZT = ZB(34211),
+       TT = ZB(4958);
```
